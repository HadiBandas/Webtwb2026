import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
    priority?: boolean;
    sizes?: string;
    onLoad?: () => void;
    onClick?: () => void;
}

/**
 * OptimizedImage Component
 * 
 * A performance-optimized image component that:
 * 1. Uses native lazy loading for off-screen images
 * 2. Automatically uses WebP format when available in /optimized/ folder
 * 3. Implements blur-up placeholder effect
 * 4. Supports responsive images with sizes attribute
 * 5. Uses Intersection Observer for better lazy loading control
 * 
 * @example
 * // Basic usage
 * <OptimizedImage src="/images/hero.webp" alt="Hero image" />
 * 
 * // Priority image (LCP element - no lazy loading)
 * <OptimizedImage src="/images/hero.webp" alt="Hero" priority />
 * 
 * // With responsive sizes
 * <OptimizedImage 
 *   src="/images/villa.webp" 
 *   alt="Villa" 
 *   sizes="(max-width: 768px) 100vw, 50vw"
 * />
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
    src,
    alt,
    className = '',
    width,
    height,
    priority = false,
    sizes,
    onLoad,
    onClick,
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(priority);
    const imgRef = useRef<HTMLImageElement>(null);

    // Generate optimized WebP path
    const getOptimizedSrc = (originalSrc: string): string => {
        // If already pointing to optimized folder, return as is
        if (originalSrc.includes('/optimized/')) {
            return originalSrc;
        }

        // Convert path to optimized version
        // e.g., /images/hero.webp -> /images/optimized/hero.webp
        const parts = originalSrc.split('/');
        const filename = parts.pop() || '';
        const basePath = parts.join('/');

        // Change extension to .webp if not already
        const webpFilename = filename.replace(/\.(png|jpg|jpeg|gif)$/i, '.webp');

        return `${basePath}/optimized/${webpFilename}`;
    };

    // Generate fallback path (original format)
    const getFallbackSrc = (originalSrc: string): string => {
        // If it's already a webp in optimized, try to find jpg/png fallback
        if (originalSrc.includes('.webp')) {
            return originalSrc.replace('.webp', '.jpg');
        }
        return originalSrc;
    };

    const optimizedSrc = getOptimizedSrc(src);
    const fallbackSrc = getFallbackSrc(src);

    // Intersection Observer for lazy loading
    useEffect(() => {
        if (priority || !imgRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect();
                    }
                });
            },
            {
                rootMargin: '200px', // Start loading 200px before entering viewport
                threshold: 0,
            }
        );

        observer.observe(imgRef.current);

        return () => observer.disconnect();
    }, [priority]);

    const handleLoad = () => {
        setIsLoaded(true);
        onLoad?.();
    };

    const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        // Fallback to original src if optimized version fails
        const img = e.currentTarget;
        if (img.src.includes('/optimized/')) {
            img.src = src; // Use original source as fallback
        }
    };

    return (
        <div
            ref={imgRef}
            className={`relative overflow-hidden ${className}`}
            style={{ width, height }}
            onClick={onClick}
        >
            {/* Blur placeholder */}
            {!isLoaded && (
                <div
                    className="absolute inset-0 bg-gray-200 animate-pulse"
                    style={{
                        backgroundColor: '#e5e7eb',
                    }}
                />
            )}

            {/* Actual image with picture element for format fallback */}
            {isInView && (
                <picture>
                    {/* WebP source (preferred) */}
                    <source
                        srcSet={optimizedSrc}
                        type="image/webp"
                    />
                    {/* Fallback for browsers without WebP support */}
                    <img
                        src={fallbackSrc}
                        alt={alt}
                        width={width}
                        height={height}
                        sizes={sizes}
                        loading={priority ? 'eager' : 'lazy'}
                        decoding={priority ? 'sync' : 'async'}
                        fetchPriority={priority ? 'high' : 'auto'}
                        onLoad={handleLoad}
                        onError={handleError}
                        className={`
              w-full h-full object-cover
              transition-opacity duration-500
              ${isLoaded ? 'opacity-100' : 'opacity-0'}
            `}
                        style={{
                            contentVisibility: priority ? 'visible' : 'auto',
                        }}
                    />
                </picture>
            )}
        </div>
    );
};

/**
 * HeroImage Component
 * 
 * Specialized component for hero/LCP images with:
 * - No lazy loading (priority loading)
 * - High fetch priority
 * - Optimized for LCP metric
 */
export const HeroImage: React.FC<Omit<OptimizedImageProps, 'priority'>> = (props) => {
    return <OptimizedImage {...props} priority />;
};

/**
 * GalleryImage Component
 * 
 * Optimized for gallery grids with:
 * - Aggressive lazy loading
 * - Click handler for lightbox
 * - Hover effects
 */
export const GalleryImage: React.FC<OptimizedImageProps & {
    aspectRatio?: 'square' | 'video' | 'portrait';
}> = ({
    aspectRatio = 'square',
    className = '',
    ...props
}) => {
        const aspectClasses = {
            square: 'aspect-square',
            video: 'aspect-video',
            portrait: 'aspect-[3/4]',
        };

        return (
            <div className={`group cursor-pointer ${aspectClasses[aspectRatio]} ${className}`}>
                <OptimizedImage
                    {...props}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
        );
    };

export default OptimizedImage;
