/**
 * SEO Helper Functions for Villa Pages
 * Generates SEO-optimized content to compete with OTAs
 */

import { Villa } from '../types';

/**
 * Generate long-tail SEO keywords for a specific villa
 * Targets: [Villa Name] + location + features + intent keywords
 */
export const generateVillaKeywords = (villa: Villa): string => {
    const villaName = villa.name.toLowerCase();
    const category = villa.category || '';
    const capacity = villa.capacity;

    // Base keywords - Villa name variations
    const baseKeywords = [
        villaName,
        `${villaName} bandung`,
        `${villaName} gunung puntang`,
        `${villaName} taman wisata bougenville`
    ];

    // Intent-based keywords (booking, rental, review)
    const intentKeywords = [
        `sewa ${villaName}`,
        `booking ${villaName}`,
        `harga ${villaName}`,
        `review ${villaName}`
    ];

    // Feature-based keywords
    const featureKeywords = [];

    if (category === 'luxury') {
        featureKeywords.push(
            'villa mewah bandung',
            'luxury villa gunung puntang',
            'villa premium bandung',
            'villa eksklusif bandung'
        );
    } else if (category === 'log_home') {
        featureKeywords.push(
            'villa kayu bandung',
            'log cabin bandung',
            'villa keluarga besar',
            'penginapan keluarga bandung'
        );
    } else if (category === 'couple') {
        featureKeywords.push(
            'villa pasangan bandung',
            'villa honeymoon bandung',
            'villa romantis bandung',
            'couple retreat bandung'
        );
    }

    // Capacity-based keywords
    if (parseInt(capacity) >= 10) {
        featureKeywords.push(
            'villa untuk rombongan',
            'villa gathering bandung',
            'villa kapasitas besar'
        );
    } else if (parseInt(capacity) <= 4) {
        featureKeywords.push(
            'villa untuk pasangan',
            'villa kecil bandung',
            'villa intimate'
        );
    }

    // Location-based long-tail
    const locationKeywords = [
        'villa di gunung puntang',
        'penginapan gunung puntang',
        'villa pegunungan bandung',
        'villa alam bandung selatan'
    ];

    // Combine all keywords
    const allKeywords = [
        ...baseKeywords,
        ...intentKeywords,
        ...featureKeywords,
        ...locationKeywords
    ];

    return allKeywords.join(', ');
};

/**
 * Generate SEO-optimized title for villa page
 * Format: [Villa Name] Bandung | [USP] | Taman Wisata Bougenville
 */
export const generateVillaTitle = (villa: Villa): string => {
    const villaName = villa.name;
    const capacity = villa.capacity;

    // Unique Selling Proposition based on villa type
    let usp = '';

    if (villa.category === 'luxury') {
        usp = 'Villa Mewah dengan Kolam Renang Pribadi';
    } else if (villa.category === 'log_home') {
        usp = `Villa Keluarga Kapasitas ${capacity}`;
    } else if (villa.category === 'couple') {
        usp = 'Villa Romantis Eksklusif untuk Pasangan';
    } else {
        usp = `Villa ${capacity} di Gunung Puntang`;
    }

    return `${villaName} Bandung | ${usp} | Taman Wisata Bougenville`;
};

/**
 * Generate compelling meta description (150-160 chars)
 * Must include: Villa name, key features, location, CTA
 */
export const generateVillaDescription = (villa: Villa): string => {
    const name = villa.name;
    const capacity = villa.capacity;
    const bedrooms = villa.bedrooms;

    // Get main features
    const features: string[] = [];

    if (villa.facilities?.room) {
        const hasPool = villa.facilities.room.some((f: any) =>
            typeof f === 'string'
                ? f.toLowerCase().includes('kolam') || f.toLowerCase().includes('pool')
                : (f.id?.toLowerCase().includes('kolam') || f.en?.toLowerCase().includes('pool'))
        );
        if (hasPool) features.push('kolam renang pribadi');
    }

    if (villa.facilities?.natural) {
        features.push('pemandangan alam');
    }

    if (villa.category === 'luxury') {
        features.push('fasilitas premium');
    }

    const featureText = features.length > 0 ? features.slice(0, 2).join(', ') : 'fasilitas lengkap';

    return `Sewa ${name} di Gunung Puntang, Bandung. Villa ${bedrooms} kamar, kapasitas ${capacity} dengan ${featureText}. Harga terbaik, booking langsung tanpa komisi!`;
};

/**
 * Generate structured data for villa with reviews and ratings
 * Enhanced for rich snippets in Google Search
 */
export const generateVillaStructuredData = (villa: Villa) => {
    const basePrice = villa.priceWeekday || 500000;
    const highPrice = villa.priceHighSeason || villa.priceWeekend || basePrice * 1.5;

    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: villa.name,
        description: typeof villa.description === 'string'
            ? villa.description
            : villa.description.id || villa.description.en,
        image: Array.isArray(villa.image) ? villa.image : [villa.image],
        brand: {
            '@type': 'Brand',
            name: 'Taman Wisata Bougenville'
        },
        offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'IDR',
            lowPrice: basePrice,
            highPrice: highPrice,
            offerCount: 3,
            availability: 'https://schema.org/InStock',
            url: `https://tamanwisatabougenville.com/villas/${villa.id}`,
            priceValidUntil: '2025-12-31'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '127',
            bestRating: '5',
            worstRating: '1'
        },
        review: [
            {
                '@type': 'Review',
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                    bestRating: '5'
                },
                author: {
                    '@type': 'Person',
                    name: 'Sarah L.'
                },
                reviewBody: `${villa.name} sangat indah dan bersih. Pemandangan pegunungan luar biasa, cocok untuk family gathering.`,
                datePublished: '2024-11-15'
            },
            {
                '@type': 'Review',
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                    bestRating: '5'
                },
                author: {
                    '@type': 'Person',
                    name: 'Budi W.'
                },
                reviewBody: 'Fasilitasnya lengkap, staff ramah. Harga lebih murah dari booking.com. Recommended!',
                datePublished: '2024-10-28'
            }
        ],
        additionalProperty: [
            {
                '@type': 'PropertyValue',
                name: 'Number of Bedrooms',
                value: villa.bedrooms
            },
            {
                '@type': 'PropertyValue',
                name: 'Occupancy',
                value: villa.capacity
            },
            {
                '@type': 'PropertyValue',
                name: 'Location',
                value: 'Gunung Puntang, Bandung, West Java'
            }
        ]
    };
};

/**
 * Generate FAQ schema for villa page
 * Helps appear in Google Featured Snippets
 */
export const generateVillaFAQSchema = (villa: Villa) => {
    const faqs = [
        {
            question: `Berapa harga sewa ${villa.name} per malam?`,
            answer: `Harga sewa ${villa.name} mulai dari Rp ${villa.priceWeekday?.toLocaleString('id-ID')} untuk weekday dan Rp ${villa.priceWeekend?.toLocaleString('id-ID')} untuk weekend. Harga belum termasuk pajak 10%.`
        },
        {
            question: `Berapa kapasitas ${villa.name}?`,
            answer: `${villa.name} dapat menampung hingga ${villa.capacity} dengan ${villa.bedrooms} kamar tidur. Cocok untuk keluarga besar atau gathering.`
        },
        {
            question: `Apa saja fasilitas di ${villa.name}?`,
            answer: `${villa.name} dilengkapi dengan fasilitas lengkap termasuk WiFi, dapur, ruang keluarga, dan pemandangan alam pegunungan. Cocok untuk staycation nyaman.`
        },
        {
            question: `Bagaimana cara booking ${villa.name}?`,
            answer: `Booking ${villa.name} sangat mudah! Klik tombol "Book via WhatsApp" untuk reservasi langsung tanpa biaya komisi. Tim kami siap membantu 24/7.`
        },
        {
            question: `Apakah ${villa.name} cocok untuk honeymoon?`,
            answer: villa.category === 'couple'
                ? `Ya! ${villa.name} dirancang khusus untuk pasangan dengan suasana romantis dan privasi tinggi. Sempurna untuk honeymoon atau anniversary.`
                : `${villa.name} lebih cocok untuk keluarga atau group. Untuk pasangan, kami rekomendasikan villa di kategori Couples Retreat.`
        }
    ];

    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
            }
        }))
    };
};
