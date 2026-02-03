import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageGalleryModal } from '../components/features/ImageGalleryModal';
import { PageHero } from '../components/ui/PageHero';
import { SEOHead } from '../components/ui/SEOHead';
import { StructuredData } from '../components/ui/StructuredData';
import { trackPageView } from '../utils/analytics';

// Sample gallery images organized by category
const GALLERY_IMAGES = {
    villas: [
        { url: '/images/fh-hero.webp', title: { en: 'Forest House', id: 'Forest House', zh: '森林别墅', de: 'Forest House' } },
        { url: '/images/mlh-hero.webp', title: { en: 'Mooi Lake House', id: 'Mooi Lake House', zh: 'Mooi Lake House', de: 'Mooi Lake House' } },
        { url: '/images/emerald-atas-hero.webp', title: { en: 'Emerald Villas', id: 'Emerald Villas', zh: '翡翠别墅', de: 'Emerald Villas' } },
        { url: '/images/villas/gordes/DSC07573(1).WEB.jpg', title: { en: 'Villa Gordes', id: 'Villa Gordes', zh: '戈尔德别墅', de: 'Villa Gordes' } },
        { url: '/images/villas/roussillon/DSC07418.WEB.jpg', title: { en: 'Villa Roussillon', id: 'Villa Roussillon', zh: '鲁西永别墅', de: 'Villa Roussillon' } },
        { url: '/images/villas/lourmarin/DSC09984.WEB.jpg', title: { en: 'Villa Lourmarin', id: 'Villa Lourmarin', zh: '卢尔马兰别墅', de: 'Villa Lourmarin' } },
        { url: '/images/villas/selby/hero.jpg', title: { en: 'Selby Villa', id: 'Selby Villa', zh: '塞尔比别墅', de: 'Selby Villa' } },
        { url: '/images/villas/olinda/hero.jpg', title: { en: 'Olinda Villa', id: 'Olinda Villa', zh: '奥林达别墅', de: 'Olinda Villa' } },
    ],
    nature: [
        { url: '/images/facilities/Waterfall Track.jpg', title: { en: 'Hidden Waterfall', id: 'Air Terjun Tersembunyi', zh: '隐藏瀑布', de: 'Versteckter Wasserfall' } },
        { url: '/images/facilities/Nature Discovery.jpg', title: { en: 'Nature Trail', id: 'Jalur Alam', zh: '自然小径', de: 'Naturpfad' } },
        { url: '/images/facilities/Canopy Skywalk.jpg', title: { en: 'Canopy Skywalk', id: 'Jembatan Gantung', zh: '树冠步道', de: 'Baumkronenpfad' } },
        { url: '/images/facilities/Stargazing.png', title: { en: 'Starry Night', id: 'Malam Berbintang', zh: '星夜', de: 'Sternennacht' } },
        { url: '/images/facilities/Mountain Wellness.jpeg', title: { en: 'Mountain Landscape', id: 'Pemandangan Gunung', zh: '山地景观', de: 'Berglandschaft' } },
    ],
    activities: [
        { url: '/images/facilities/Family Picnic.jpg', title: { en: 'Family Picnic', id: 'Piknik Keluarga', zh: '家庭野餐', de: 'Familienpicknick' } },
        { url: '/images/facilities/Children Playground.jpg', title: { en: 'Children Playground', id: 'Taman Bermain Anak', zh: '儿童游乐场', de: 'Kinderspielplatz' } },
        { url: '/images/facilities/Swimming Pool.jpg', title: { en: 'Swimming Pool', id: 'Kolam Renang', zh: '游泳池', de: 'Schwimmbad' } },
        { url: '/images/facilities/Riverplaying.jpg', title: { en: 'River Fun', id: 'Bermain di Sungai', zh: '河边嬉戏', de: 'Flussspaß' } },
        { url: '/images/facilities/Family Recreation.jpg', title: { en: 'Family Time', id: 'Waktu Keluarga', zh: '家庭时光', de: 'Familienzeit' } },
        { url: '/images/facilities/Sunrise Yoga.jpg', title: { en: 'Morning Yoga', id: 'Yoga Pagi', zh: '晨间瑜伽', de: 'Morgenyoga' } },
    ],
    dining: [],
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
        { key: 'villas' as Category, label: t('gallery.categories.villas', 'Villas') },
        { key: 'nature' as Category, label: t('gallery.categories.nature', 'Nature') },
        { key: 'activities' as Category, label: t('gallery.categories.activities', 'Activities') },
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
                backgroundImage="/images/mlh-hero.webp"
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
                        <p className="text-gray-400 text-lg font-light font-serif italic">{t('gallery.empty', 'No images in this category yet.')}</p>
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
