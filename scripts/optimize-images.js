/**
 * Image Optimization Script for Taman Wisata Bougenville
 * 
 * This script compresses and converts images to WebP format for optimal performance.
 * 
 * INSTALLATION:
 *   npm install sharp glob
 * 
 * USAGE:
 *   node scripts/optimize-images.js
 * 
 * This will:
 * 1. Scan all images in public/images/
 * 2. Convert to WebP format with 80% quality
 * 3. Resize large images to max 1920px width
 * 4. Save optimized images to public/images/optimized/
 * 5. Generate a report of savings
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '..');
const IMAGES_DIR = path.join(ROOT_DIR, 'public', 'images');
const OUTPUT_DIR = path.join(ROOT_DIR, 'public', 'images', 'optimized');

// Configuration
const CONFIG = {
    quality: 80,           // WebP quality (0-100)
    maxWidth: 1920,        // Maximum width for images
    maxHeight: 1080,       // Maximum height for images
    formats: ['png', 'jpg', 'jpeg', 'webp'],

    // Priority images that need aggressive optimization
    priorityImages: [
        'mountain-wellness.png',
        'mlh-hero.webp',
        'fh-hero.webp',
        'home-page-hero.webp',
        'emerald-atas-hero.webp'
    ],

    // Images that should be smaller (thumbnails, icons)
    thumbnailPatterns: ['thumb', 'icon', 'logo'],
    thumbnailMaxWidth: 400
};

// Ensure output directory exists
function ensureOutputDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`📁 Created directory: ${dir}`);
    }
}

// Format file size
function formatSize(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

// Get all image files recursively
async function getImageFiles() {
    const patterns = CONFIG.formats.map(ext =>
        path.join(IMAGES_DIR, '**', `*.${ext}`).replace(/\\/g, '/')
    );

    const files = [];
    for (const pattern of patterns) {
        const matches = await glob(pattern, { nocase: true });
        files.push(...matches);
    }

    // Filter out already optimized images
    return files.filter(f => !f.includes('optimized'));
}

// Check if image is a thumbnail
function isThumbnail(filename) {
    const lower = filename.toLowerCase();
    return CONFIG.thumbnailPatterns.some(pattern => lower.includes(pattern));
}

// Check if image is priority
function isPriorityImage(filename) {
    const basename = path.basename(filename);
    return CONFIG.priorityImages.some(p =>
        basename.toLowerCase().includes(p.toLowerCase())
    );
}

// Optimize a single image
async function optimizeImage(inputPath) {
    const relativePath = path.relative(IMAGES_DIR, inputPath);
    const dirName = path.dirname(relativePath);
    const baseName = path.basename(relativePath, path.extname(relativePath));

    // Create output subdirectory if needed
    const outputSubDir = path.join(OUTPUT_DIR, dirName);
    ensureOutputDir(outputSubDir);

    const outputPath = path.join(outputSubDir, `${baseName}.webp`);

    try {
        const originalStats = fs.statSync(inputPath);
        const originalSize = originalStats.size;

        // Determine max dimensions
        const maxWidth = isThumbnail(inputPath)
            ? CONFIG.thumbnailMaxWidth
            : CONFIG.maxWidth;

        // Get image metadata
        const metadata = await sharp(inputPath).metadata();

        // Determine quality based on priority
        const quality = isPriorityImage(inputPath) ? 75 : CONFIG.quality;

        // Optimize
        await sharp(inputPath)
            .resize(maxWidth, CONFIG.maxHeight, {
                fit: 'inside',
                withoutEnlargement: true
            })
            .webp({
                quality,
                effort: 6  // Higher effort = better compression
            })
            .toFile(outputPath);

        const optimizedStats = fs.statSync(outputPath);
        const optimizedSize = optimizedStats.size;
        const savings = originalSize - optimizedSize;
        const reductionPercent = ((savings / originalSize) * 100).toFixed(1);

        return {
            input: relativePath,
            output: path.relative(IMAGES_DIR, outputPath),
            originalSize,
            optimizedSize,
            savings,
            reductionPercent,
            originalDimensions: `${metadata.width}x${metadata.height}`,
            success: true
        };
    } catch (error) {
        return {
            input: relativePath,
            error: error.message,
            success: false
        };
    }
}

// Generate CSV report
function generateReport(results, reportPath) {
    const headers = [
        'File',
        'Original Size',
        'Optimized Size',
        'Savings',
        'Reduction %',
        'Original Dimensions',
        'Status'
    ];

    const rows = results.map(r => {
        if (r.success) {
            return [
                r.input,
                formatSize(r.originalSize),
                formatSize(r.optimizedSize),
                formatSize(r.savings),
                `${r.reductionPercent}%`,
                r.originalDimensions,
                '✅ Success'
            ];
        } else {
            return [r.input, '', '', '', '', '', `❌ ${r.error}`];
        }
    });

    const csv = [headers, ...rows].map(row => row.join(',')).join('\n');
    fs.writeFileSync(reportPath, csv);
    console.log(`\n📊 Report saved to: ${reportPath}`);
}

// Main execution
async function main() {
    console.log('🖼️  Image Optimization Script');
    console.log('================================\n');

    ensureOutputDir(OUTPUT_DIR);

    const files = await getImageFiles();
    console.log(`📸 Found ${files.length} images to optimize\n`);

    if (files.length === 0) {
        console.log('No images found to optimize.');
        return;
    }

    const results = [];
    let totalOriginal = 0;
    let totalOptimized = 0;

    for (const file of files) {
        const result = await optimizeImage(file);
        results.push(result);

        if (result.success) {
            totalOriginal += result.originalSize;
            totalOptimized += result.optimizedSize;

            const icon = isPriorityImage(file) ? '🔴' : '✅';
            console.log(
                `${icon} ${result.input}: ${formatSize(result.originalSize)} → ${formatSize(result.optimizedSize)} (${result.reductionPercent}% saved)`
            );
        } else {
            console.log(`❌ ${result.input}: ${result.error}`);
        }
    }

    // Summary
    console.log('\n================================');
    console.log('📈 OPTIMIZATION SUMMARY');
    console.log('================================');
    console.log(`Total images processed: ${results.filter(r => r.success).length}/${files.length}`);
    console.log(`Original total size: ${formatSize(totalOriginal)}`);
    console.log(`Optimized total size: ${formatSize(totalOptimized)}`);
    console.log(`Total savings: ${formatSize(totalOriginal - totalOptimized)}`);
    console.log(`Overall reduction: ${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%`);

    // Generate report
    const reportPath = path.join(ROOT_DIR, 'image-optimization-report.csv');
    generateReport(results, reportPath);

    console.log('\n✨ Optimization complete!');
    console.log('\n📋 NEXT STEPS:');
    console.log('1. Review optimized images in public/images/optimized/');
    console.log('2. Verify visual quality is acceptable');
    console.log('3. Update image references in components to use optimized versions');
    console.log('4. Run: npm run build && npm run preview');
    console.log('5. Test with Lighthouse');
}

main().catch(console.error);
