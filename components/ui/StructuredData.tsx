import React from 'react';

export interface StructuredDataProps {
    type: 'Organization' | 'LocalBusiness' | 'Product' | 'Review' | 'FAQPage' | 'Article' | 'BreadcrumbList' | 'ImageGallery' | 'OfferCatalog' | 'CollectionPage' | 'Place' | 'Blog';
    data: any;
}

/**
 * Structured Data Component - Inject JSON-LD for rich snippets
 * 
 * Usage:
 * <StructuredData type="Organization" data={orgData} />
 */
export const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': type,
        ...data,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
};

// Predefined Organization Schema for Taman Wisata Bougenville
export const OrganizationSchema = () => {
    const data = {
        name: 'Taman Wisata Bougenville',
        alternateName: 'TWB Bougenville',
        url: import.meta.env.VITE_SITE_URL || 'https://tamanwisatabougenville.com',
        logo: `${import.meta.env.VITE_SITE_URL || 'https://tamanwisatabougenville.com'}/logo.png`,
        description: 'Luxury mountain resort in Gunung Puntang, Bandung. Exclusive villas, organic dining, and nature experiences.',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Jl. Raya Puntang',
            addressLocality: 'Bandung',
            addressRegion: 'West Java',
            postalCode: '40391',
            addressCountry: 'ID',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: -7.0983,
            longitude: 107.5144,
        },
        telephone: '+62-811-910-2003',
        sameAs: [
            'https://www.facebook.com/tamanwisatabougenville',
            'https://www.instagram.com/tamanwisatabougenville',
        ],
        priceRange: 'Rp 500.000 - Rp 2.000.000',
    };

    return <StructuredData type="Organization" data={data} />;
};

// Local Business Schema
export const LocalBusinessSchema = () => {
    const data = {
        '@type': 'Resort', // More specific type than LodgingBusiness
        '@id': `${import.meta.env.VITE_SITE_URL || 'https://tamanwisatabougenville.com'}#localbusiness`,
        name: 'Taman Wisata Bougenville',
        image: [
            `${import.meta.env.VITE_SITE_URL || 'https://tamanwisatabougenville.com'}/images/hero.jpg`,
            `${import.meta.env.VITE_SITE_URL || 'https://tamanwisatabougenville.com'}/logo512.png`
        ],
        url: import.meta.env.VITE_SITE_URL || 'https://tamanwisatabougenville.com',
        telephone: '+62-811-910-2003',
        priceRange: 'Rp 500.000 - Rp 2.000.000',
        description: 'Luxury mountain resort in Gg. Puntang offering exclusive villas, river-side glamping, and organic dining.',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Jl. Gunung Puntang, Desa Campaka Mulya, Kec. Cimaung',
            addressLocality: 'Bandung',
            addressRegion: 'Jawa Barat',
            postalCode: '40376',
            addressCountry: 'ID',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: -7.0983,
            longitude: 107.5144,
        },
        hasMap: 'https://goo.gl/maps/BougenvilleLocation', // Placeholder or real link
        sameAs: [
            'https://www.instagram.com/tamanwisatabougenville/',
            'https://www.facebook.com/tamanwisatabougenville/',
            'https://www.tiktok.com/@tamanwisatabougenville'
        ],
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '00:00',
                closes: '23:59', // Open 24 Hours for Resort
            }
        ],
        amenityFeature: [
            { '@type': 'LocationFeatureSpecification', name: 'Private Pool', value: 'true' },
            { '@type': 'LocationFeatureSpecification', name: 'River View', value: 'true' },
            { '@type': 'LocationFeatureSpecification', name: 'Restaurant', value: 'true' },
            { '@type': 'LocationFeatureSpecification', name: 'Free WiFi', value: 'true' }
        ],
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '156',
            bestRating: '5',
            worstRating: '1'
        },
    };

    return <StructuredData type="LocalBusiness" data={data} />;
};

// Product Schema Generator for Villas
export const createVillaProductSchema = (villa: {
    name: string;
    description: string;
    price: number;
    images: string[];
    capacity: number;
}) => {
    return {
        name: villa.name,
        description: villa.description,
        image: villa.images,
        offers: {
            '@type': 'Offer',
            priceCurrency: 'IDR',
            price: villa.price,
            availability: 'https://schema.org/InStock',
            url: `${import.meta.env.VITE_SITE_URL || 'https://tamanwisatabougenville.com'}/villas/${villa.name.toLowerCase().replace(/\s+/g, '-')}`,
        },
        brand: {
            '@type': 'Brand',
            name: 'Taman Wisata Bougenville',
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '42',
        },
    };
};

// FAQ Page Schema Generator
export const createFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
    return {
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
};

// Breadcrumb Schema Generator
export const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
    return {
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
};
