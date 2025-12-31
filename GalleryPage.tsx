import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageGalleryModal } from './components/features/ImageGalleryModal';
import { PageHero } from './components/ui/PageHero';
import { SEOHead } from './components/ui/SEOHead';
import { StructuredData } from './components/ui/StructuredData';
import { trackPageView } from './utils/analytics';

// Sample gallery images organized by category
const GALLERY_IMAGES = {
    villas: [
        { url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800', title: { en: 'Forest House Exterior', id: 'Eksterior Forest House', zh: '森林别墅外观', de: 'Forest House Außenansicht' } },
        { url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800', title: { en: 'Living Room', id: 'Ruang Tamu', zh: '客厅', de: 'Wohnzimmer' } },
        { url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800', title: { en: 'Master Bedroom', id: 'Kamar Utama', zh: '主卧室', de: 'Hauptschlafzimmer' } },
        { url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800', title: { en: 'Kitchen', id: 'Dapur', zh: '厨房', de: 'Küche' } },
        { url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800', title: { en: 'Bathroom', id: 'Kamar Mandi', zh: '浴室', de: 'Badezimmer' } },
        { url: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800', title: { en: 'Pine Retreat', id: 'Pine Retreat', zh: '松树度假屋', de: 'Kiefern-Rückzugsort' } },
    ],
    nature: [
        { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', title: { en: 'Mountain View', id: 'Pemandangan Gunung', zh: '山景', de: 'Bergblick' } },
        { url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800', title: { en: 'Forest Trail', id: 'Jalur Hutan', zh: '森林小径', de: 'Waldweg' } },
        { url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800', title: { en: 'Sunrise', id: 'Matahari Terbit', zh: '日出', de: 'Sonnenaufgang' } },
        { url: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800', title: { en: 'Pine Forest', id: 'Hutan Pinus', zh: '松林', de: 'Kiefernwald' } },
        { url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800', title: { en: 'River Valley', id: 'Lembah Sungai', zh: '河谷', de: 'Flusstal' } },
        { url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800', title: { en: 'Misty Morning', id: 'Pagi Berkabut', zh: '雾蒙蒙的早晨', de: 'Nebliger Morgen' } },
    ],
    dining: [
        { url: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800', title: { en: 'Sundanese Cuisine', id: 'Masakan Sunda', zh: '巽他美食', de: 'Sundanesische Küche' } },
        { url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800', title: { en: 'Gourmet Breakfast', id: 'Sarapan Gourmet', zh: '美味早餐', de: 'Gourmet-Frühstück' } },
        { url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800', title: { en: 'Restaurant Interior', id: 'Interior Restoran', zh: '餐厅内部', de: 'Restaurant-Interieur' } },
        { url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800', title: { en: 'Fresh Ingredients', id: 'Bahan Segar', zh: '新鲜食材', de: 'Frische Zutaten' } },
        { url: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?w=800', title: { en: 'Evening Dining', id: 'Makan Malam', zh: '晚餐', de: 'Abendessen' } },
        { url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800', title: { en: 'Brunch Setup', id: 'Penataan Brunch', zh: '早午餐设置', de: 'Brunch-Setup' } },
    ],
    activities: [
        { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', title: { en: 'Hiking', id: 'Mendaki', zh: '徒步旅行', de: 'Wandern' } },
        { url: 'https://images.unsplash.com/photo-1599447292572-3c4555a4b31e?w=800', title: { en: 'Yoga Session', id: 'Sesi Yoga', zh: '瑜伽课程', de: 'Yoga-Sitzung' } },
        { url: 'https://images.unsplash.com/photo-1483389127117-b6a2102724ae?w=800', title: { en: 'Photography Tour', id: 'Tur Fotografi', zh: '摄影之旅', de: 'Fototour' } },
        { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800', title: { en: 'Mountain Exploration', id: 'Eksplorasi Gunung', zh: '山地探险', de: 'Bergerkundung' } },
        { url: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=800', title: { en: 'Bonfire Evening', id: 'Malam Api Unggun', zh: '篝火晚会', de: 'Lagerfeuerabend' } },
        { url: 'https://images.unsplash.com/photo-1478827536114-da961b7f86b2?w=800', title: { en: 'Stargazing', id: 'Melihat Bintang', zh: '观星', de: 'Sterne beobachten' } },
    ],
};

type Category = keyof typeof GALLERY_IMAGES;

export function GalleryPage() {
    const { t, i18n } = useTranslation();
    const lang = (i18n.language?.split('-')[0] || 'id') as 'id' | 'en' | 'zh' | 'de';

    const getContent = (content: any) => {
        if (typeof content === 'string') return content;
        return content[lang] || content['en'] || content['id'] || '';
    };

    const [activeCategory, setActiveCategory] = useState<Category>('villas');
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const currentImages = GALLERY_IMAGES[activeCategory];
    const allImageUrls = currentImages.map((img) => img.url);

    const handleImageClick = (index: number) => {
        setSelectedImageIndex(index);
        setGalleryOpen(true);
    };

    const categories = [
        { key: 'villas' as Category, label: 'Villas' },
        { key: 'nature' as Category, label: 'Nature' },
        { key: 'dining' as Category, label: 'Dining' },
        { key: 'activities' as Category, label: 'Activities' },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
        trackPageView('/gallery', 'Gallery | Taman Wisata Bougenville');
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title={t('gallery.title') + ' | Taman Wisata Bougenville'}
                description={t('gallery.subtitle')}
                canonical="https://tamanwisatabougenville.com/gallery"
            />
            <StructuredData
                type="ImageGallery"
                data={{
                    "@context": "https://schema.org",
                    "@type": "ImageGallery",
                    "name": "Taman Wisata Bougenville Gallery",
                    "description": t('gallery.subtitle'),
                    "url": "https://tamanwisatabougenville.com/gallery",
                    "image": allImageUrls
                }}
            />
            {/* Hero Section */}
            <PageHero
                title={t('gallery.title')}
                subtitle={t('gallery.subtitle')}
                backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2070&q=80"
                overlay="dark"
            />

            <div className="container mx-auto px-4 max-w-7xl py-24 md:py-32">

                {/* Category Filters - Refined */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16 md:mb-24 animate-fade-in-up">
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => setActiveCategory(cat.key)}
                            className={`text-xs uppercase tracking-[0.2em] transition-all duration-300 pb-2 border-b-2 ${activeCategory === cat.key
                                ? 'text-forest-dark border-forest-dark font-bold'
                                : 'text-gray-400 border-transparent hover:text-gray-600 hover:border-gray-200 font-medium'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Image Grid - Refined */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-2">
                    {currentImages.map((image, idx) => (
                        <div
                            key={idx}
                            className="group relative overflow-hidden cursor-pointer aspect-[4/3] animate-fade-in-up"
                            style={{ animationDelay: `${idx * 50}ms` }}
                            onClick={() => handleImageClick(idx)}
                        >
                            <img
                                src={image.url}
                                alt={getContent(image.title)}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="w-10 h-px bg-gold mb-4"></div>
                                    <h3 className="text-white font-serif text-xl tracking-wide">{getContent(image.title)}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State - Refined */}
                {currentImages.length === 0 && (
                    <div className="text-center py-32">
                        <p className="text-gray-400 text-lg font-light font-serif italic">No images in this category yet.</p>
                    </div>
                )}
            </div>

            {/* Image Modal */}
            <ImageGalleryModal
                images={allImageUrls}
                isOpen={galleryOpen}
                onClose={() => setGalleryOpen(false)}
                initialIndex={selectedImageIndex}
            />
        </div>
    );
}
