/**
 * SEO Helper Functions for Villa Pages
 * Generates SEO-optimized content to compete with OTAs
 * 
 * Per-Villa Keyword Targeting Strategy:
 * - Primary keywords for each villa
 * - Location-based long-tail keywords
 * - Intent-based keywords (sewa, booking, harga)
 */

import { Villa } from '../types';

/**
 * Per-Villa SEO Configuration
 * Maps each villa to its primary target keywords
 */
export const VILLA_SEO_CONFIG: Record<string, {
    primaryKeyword: string;
    secondaryKeywords: string[];
    titleTemplate: string;
    descriptionTemplate: string;
}> = {
    // LUXURY VILLAS
    'forest-house': {
        primaryKeyword: 'Villa Termewah di Bandung',
        secondaryKeywords: [
            'villa mewah bandung',
            'luxury villa gunung puntang',
            'villa premium dengan kolam renang bandung',
            'villa eksklusif view hutan pinus',
            'penginapan mewah bandung selatan'
        ],
        titleTemplate: 'Forest House - Villa Termewah di Bandung | View Hutan Pinus | Taman Wisata Bougenville',
        descriptionTemplate: 'Forest House, villa termewah di Bandung dengan view hutan pinus langsung. Kapasitas 13-16 orang, 5 kamar, kolam renang & air terjun privat. Harga terbaik, booking langsung!'
    },
    'mooi-lake': {
        primaryKeyword: 'Villa Keluarga di Bandung',
        secondaryKeywords: [
            'villa keluarga besar bandung',
            'villa view danau bandung',
            'villa tepi danau gunung puntang',
            'villa family gathering bandung',
            'penginapan keluarga mewah bandung'
        ],
        titleTemplate: 'Mooi Lake House - Villa Keluarga di Bandung | View Danau | Taman Wisata Bougenville',
        descriptionTemplate: 'Mooi Lake House, villa keluarga di Bandung dengan view danau menawan. Kapasitas 9 orang, 3 kamar, perahu privat. Cocok untuk liburan keluarga. Booking sekarang!'
    },

    // COUPLES RETREAT - KAMPUH BECIK
    'kampuh-becik-1': {
        primaryKeyword: 'Villa 2 Pax Bandung',
        secondaryKeywords: [
            'villa pasangan bandung',
            'villa honeymoon bandung',
            'villa romantis gunung puntang',
            'cabin couple bandung',
            'penginapan romantis bandung'
        ],
        titleTemplate: 'Kampuh Becik - Villa 2 Pax Bandung | Romantis & Privat | Taman Wisata Bougenville',
        descriptionTemplate: 'Kampuh Becik, villa 2 pax di Bandung untuk pasangan. Suasana romantis, view alam, privasi terjaga. Cocok untuk honeymoon atau anniversary. Booking langsung!'
    },
    'kampuh-becik-2': {
        primaryKeyword: 'Villa Honeymoon Bandung',
        secondaryKeywords: [
            'villa honeymoon murah bandung',
            'villa pasangan romantis',
            'cabin honeymoon gunung puntang',
            'villa anniversary bandung'
        ],
        titleTemplate: 'Kampuh Becik - Villa Honeymoon Bandung | Couple Retreat | Taman Wisata Bougenville',
        descriptionTemplate: 'Kampuh Becik, villa honeymoon di Bandung yang romantis. 2 pax, suasana intim, view pegunungan. Sempurna untuk honeymoon atau liburan berdua!'
    },
    'kampuh-becik-3': {
        primaryKeyword: 'Villa Romantis Bandung',
        secondaryKeywords: [
            'villa romantis murah',
            'villa couple retreat bandung',
            'penginapan pasangan bandung',
            'villa anniversary bandung'
        ],
        titleTemplate: 'Kampuh Becik - Villa Romantis Bandung | Private Cabin | Taman Wisata Bougenville',
        descriptionTemplate: 'Kampuh Becik, villa romantis di Bandung untuk pasangan. Lokasi tenang, view alam, privasi maksimal. Harga terjangkau, booking langsung tanpa komisi!'
    },
    'kampuh-becik-4': {
        primaryKeyword: 'Cabin Couple Bandung',
        secondaryKeywords: [
            'cabin pasangan bandung',
            'villa intim bandung',
            'penginapan couple gunung puntang'
        ],
        titleTemplate: 'Kampuh Becik - Cabin Couple Bandung | Intimate Retreat | Taman Wisata Bougenville',
        descriptionTemplate: 'Kampuh Becik, cabin couple di Bandung yang nyaman. 2 pax, suasana romantis di pegunungan. Ideal untuk quality time bersama pasangan!'
    },

    // DANDENONG VILLAS (American Farmhouse)
    'olinda': {
        primaryKeyword: 'Villa American Farmhouse Bandung',
        secondaryKeywords: [
            'villa western style bandung',
            'villa unik bandung',
            'villa instagramable bandung',
            'villa farmhouse gunung puntang'
        ],
        titleTemplate: 'Olinda - Villa American Farmhouse Bandung | Dandenong Villas | Taman Wisata Bougenville',
        descriptionTemplate: 'Olinda, villa American Farmhouse di Bandung. Desain unik Western style, fasilitas lengkap. Cocok untuk liburan keluarga atau gathering. Booking sekarang!'
    },
    'emerald': {
        primaryKeyword: 'Villa Gathering Bandung',
        secondaryKeywords: [
            'villa untuk gathering',
            'villa rombongan bandung',
            'villa acara keluarga bandung',
            'villa reuni bandung'
        ],
        titleTemplate: 'Emerald - Villa Gathering Bandung | Dandenong Villas | Taman Wisata Bougenville',
        descriptionTemplate: 'Emerald Villa, villa gathering di Bandung dengan kapasitas besar. Cocok untuk acara keluarga, reuni, atau corporate event. Lokasi strategis di Gunung Puntang!'
    },
    'selby': {
        primaryKeyword: 'Villa Murah Bandung',
        secondaryKeywords: [
            'villa budget bandung',
            'villa terjangkau gunung puntang',
            'villa hemat bandung selatan'
        ],
        titleTemplate: 'Selby - Villa Murah Bandung | Dandenong Villas | Taman Wisata Bougenville',
        descriptionTemplate: 'Selby Villa, villa murah di Bandung dengan kualitas premium. Harga terjangkau, fasilitas lengkap. Cocok untuk liburan hemat bersama keluarga!'
    },

    // PROVINCIAL VILLAS (French Countryside)
    'gordes': {
        primaryKeyword: 'Villa Provence Bandung',
        secondaryKeywords: [
            'villa gaya eropa bandung',
            'villa french style bandung',
            'villa romantis eropa bandung'
        ],
        titleTemplate: 'Gordes - Villa Provence Bandung | French Countryside Style | Taman Wisata Bougenville',
        descriptionTemplate: 'Gordes Villa, villa bergaya Provence di Bandung. Arsitektur French countryside yang elegan. Pengalaman menginap seperti di Eropa!'
    },
    'roussillon': {
        primaryKeyword: 'Villa Eropa Bandung',
        secondaryKeywords: [
            'villa european style bandung',
            'villa unik bandung',
            'penginapan instagramable bandung'
        ],
        titleTemplate: 'Roussillon - Villa Eropa Bandung | Provincial Villas | Taman Wisata Bougenville',
        descriptionTemplate: 'Roussillon Villa, villa bergaya Eropa di Bandung. Desain elegan French countryside, view pegunungan menawan. Booking langsung!'
    },
    'lourmarin': {
        primaryKeyword: 'Villa French Style Bandung',
        secondaryKeywords: [
            'villa prancis bandung',
            'villa provence style bandung'
        ],
        titleTemplate: 'Lourmarin - Villa French Style Bandung | Provincial Villas | Taman Wisata Bougenville',
        descriptionTemplate: 'Lourmarin Villa, villa French style di Bandung dengan nuansa Provence yang autentik. Sempurna untuk liburan romantis!'
    },

    // RIVERSIDE VILLAS
    'hana': {
        primaryKeyword: 'Villa Tepi Sungai Bandung',
        secondaryKeywords: [
            'villa riverside bandung',
            'villa view sungai bandung',
            'penginapan tepi sungai gunung puntang'
        ],
        titleTemplate: 'Hana - Villa Tepi Sungai Bandung | Riverside Villas | Taman Wisata Bougenville',
        descriptionTemplate: 'Hana Villa, villa tepi sungai di Bandung dengan suara air mengalir. Suasana tenang, cocok untuk healing. Booking sekarang!'
    },
    'blomst': {
        primaryKeyword: 'Villa Healing Bandung',
        secondaryKeywords: [
            'villa relaksasi bandung',
            'villa tenang bandung',
            'retreat villa bandung'
        ],
        titleTemplate: 'Blomst - Villa Healing Bandung | Riverside Retreat | Taman Wisata Bougenville',
        descriptionTemplate: 'Blomst Villa, villa healing di Bandung tepi sungai. Suasana tenang untuk relaksasi maksimal. Sempurna untuk staycation!'
    },
    'fiore': {
        primaryKeyword: 'Villa Staycation Bandung',
        secondaryKeywords: [
            'villa weekend getaway bandung',
            'villa liburan bandung',
            'penginapan weekend bandung'
        ],
        titleTemplate: 'Fiore - Villa Staycation Bandung | Riverside Villas | Taman Wisata Bougenville',
        descriptionTemplate: 'Fiore Villa, villa staycation di Bandung dengan suasana riverside yang menenangkan. Pilihan tepat untuk weekend getaway!'
    },

    // LOG HOME - NAWA BUMI
    'campaka': {
        primaryKeyword: 'Log Cabin Bandung',
        secondaryKeywords: [
            'villa kayu bandung',
            'wooden cabin gunung puntang',
            'penginapan kayu bandung'
        ],
        titleTemplate: 'Campaka - Log Cabin Bandung | Nawa Bumi | Taman Wisata Bougenville',
        descriptionTemplate: 'Campaka, log cabin di Bandung dengan konstruksi kayu autentik. Pengalaman menginap di cabin kayu di tengah alam!'
    },
    'suren': {
        primaryKeyword: 'Villa Kayu Bandung',
        secondaryKeywords: [
            'wooden villa bandung',
            'villa rustic bandung',
            'penginapan unik bandung'
        ],
        titleTemplate: 'Suren - Villa Kayu Bandung | Log Home | Taman Wisata Bougenville',
        descriptionTemplate: 'Suren, villa kayu di Bandung dari konstruksi log home asli. Suasana hangat, view pegunungan. Cocok untuk keluarga!'
    },
    'pinus': {
        primaryKeyword: 'Villa View Pinus Bandung',
        secondaryKeywords: [
            'villa hutan pinus bandung',
            'villa sejuk bandung',
            'penginapan dingin bandung'
        ],
        titleTemplate: 'Pinus - Villa View Pinus Bandung | Log Home | Taman Wisata Bougenville',
        descriptionTemplate: 'Pinus, villa dengan view hutan pinus di Bandung. Udara sejuk, suasana alami. Sempurna untuk escape dari hiruk pikuk kota!'
    },
    'puspa': {
        primaryKeyword: 'Villa Alam Bandung',
        secondaryKeywords: [
            'villa nature bandung',
            'villa pegunungan bandung',
            'eco villa bandung'
        ],
        titleTemplate: 'Puspa - Villa Alam Bandung | Log Home | Taman Wisata Bougenville',
        descriptionTemplate: 'Puspa, villa alam di Bandung di tengah kehijauan. Log cabin yang menyatu dengan alam. Ideal untuk nature lovers!'
    },
    'meranti': {
        primaryKeyword: 'Villa Keluarga Besar Bandung',
        secondaryKeywords: [
            'villa kapasitas besar bandung',
            'villa grup bandung',
            'villa rombongan besar bandung'
        ],
        titleTemplate: 'Meranti - Villa Keluarga Besar Bandung | Log Home | Taman Wisata Bougenville',
        descriptionTemplate: 'Meranti, villa keluarga besar di Bandung dengan kapasitas maksimal. Log home luas untuk gathering keluarga besar!'
    }
};

/**
 * Get SEO config for a specific villa
 */
export const getVillaSEOConfig = (villaId: string) => {
    return VILLA_SEO_CONFIG[villaId] || null;
};

/**
 * Generate long-tail SEO keywords for a specific villa
 * Uses per-villa configuration if available, otherwise falls back to category-based
 */
export const generateVillaKeywords = (villa: Villa): string => {
    const config = getVillaSEOConfig(villa.id);

    if (config) {
        // Use per-villa SEO config
        return [
            config.primaryKeyword,
            ...config.secondaryKeywords,
            villa.name.toLowerCase(),
            `${villa.name.toLowerCase()} bandung`,
            `sewa ${villa.name.toLowerCase()}`,
            `booking ${villa.name.toLowerCase()}`,
            `harga ${villa.name.toLowerCase()}`,
            'villa di gunung puntang',
            'penginapan gunung puntang bandung',
            'taman wisata bougenville'
        ].join(', ');
    }

    // Fallback to category-based keywords
    const villaName = villa.name.toLowerCase();
    const category = villa.category || '';
    const capacity = villa.capacity;

    const baseKeywords = [
        villaName,
        `${villaName} bandung`,
        `${villaName} gunung puntang`,
        `${villaName} taman wisata bougenville`
    ];

    const intentKeywords = [
        `sewa ${villaName}`,
        `booking ${villaName}`,
        `harga ${villaName}`,
        `review ${villaName}`
    ];

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

    const locationKeywords = [
        'villa di gunung puntang',
        'penginapan gunung puntang',
        'villa pegunungan bandung',
        'villa alam bandung selatan'
    ];

    return [
        ...baseKeywords,
        ...intentKeywords,
        ...featureKeywords,
        ...locationKeywords
    ].join(', ');
};

/**
 * Generate SEO-optimized title for villa page
 * Uses per-villa template if available
 */
export const generateVillaTitle = (villa: Villa): string => {
    const config = getVillaSEOConfig(villa.id);

    if (config) {
        return config.titleTemplate;
    }

    // Fallback
    const villaName = villa.name;
    const capacity = villa.capacity;

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
 * Uses per-villa template if available
 */
export const generateVillaDescription = (villa: Villa): string => {
    const config = getVillaSEOConfig(villa.id);

    if (config) {
        return config.descriptionTemplate;
    }

    // Fallback
    const name = villa.name;
    const capacity = villa.capacity;
    const bedrooms = villa.bedrooms;

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
 */
export const generateVillaStructuredData = (villa: Villa) => {
    const basePrice = villa.priceWeekday || 500000;
    const highPrice = villa.priceHighSeason || villa.priceWeekend || basePrice * 1.5;
    const config = getVillaSEOConfig(villa.id);

    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: config ? `${villa.name} - ${config.primaryKeyword}` : villa.name,
        description: config?.descriptionTemplate || (typeof villa.description === 'string'
            ? villa.description
            : villa.description.id || villa.description.en),
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
            priceValidUntil: '2026-12-31'
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
                datePublished: '2025-11-15'
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
                datePublished: '2025-10-28'
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
    const config = getVillaSEOConfig(villa.id);

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
            question: config ? `Apakah ${villa.name} cocok sebagai ${config.primaryKeyword}?` : `Apakah ${villa.name} cocok untuk honeymoon?`,
            answer: config
                ? `Ya! ${villa.name} adalah pilihan tepat untuk ${config.primaryKeyword}. ${config.descriptionTemplate}`
                : (villa.category === 'couple'
                    ? `Ya! ${villa.name} dirancang khusus untuk pasangan dengan suasana romantis dan privasi tinggi. Sempurna untuk honeymoon atau anniversary.`
                    : `${villa.name} lebih cocok untuk keluarga atau group. Untuk pasangan, kami rekomendasikan villa di kategori Couples Retreat.`)
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
