import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCurrency } from './hooks/useCurrency';
import { Star, Users, Wifi, Coffee, Wind, Mountain, Heart, Share2, Grid3x3, BedDouble, Bath, Check, Clock, Info, Calendar, Tv, Utensils, Snowflake, Waves, Flame, Trees, Sofa, Car, Gamepad2, Flower2, Droplets, ChefHat } from 'lucide-react';
import { ImageGalleryModal } from './components/features/ImageGalleryModal';
import { BookingCard } from './components/features/BookingCard';
import { VILLAS } from './constants';
import { SEOHead } from './components/ui/SEOHead';
import { StructuredData } from './components/ui/StructuredData';
import { trackPageView, trackVillaView } from './utils/analytics';
import { optimizeImage } from './utils/imageOptimizer';
import {
    generateVillaKeywords,
    generateVillaTitle,
    generateVillaDescription,
    generateVillaStructuredData,
    generateVillaFAQSchema
} from './utils/villaSEO';

interface VillaDetailPageProps {
    villaId: string;
}

// Helper to get icon based on facility keyword
const getFacilityIcon = (facility: string) => {
    const text = facility.toLowerCase();

    if (text.includes('wifi') || text.includes('internet')) return Wifi;
    if (text.includes('tv') || text.includes('smart')) return Tv;
    if (text.includes('makan') || text.includes('dining') || text.includes('sarapan') || text.includes('lunch') || text.includes('dinner')) return Utensils;
    if (text.includes('dapur') || text.includes('kitchen') || text.includes('kompor') || text.includes('microwave')) return ChefHat;
    if (text.includes('ac') || text.includes('air con') || text.includes('sejuk')) return Snowflake;
    if (text.includes('kolam') || text.includes('pool') || text.includes('water')) return Waves;
    if (text.includes('api unggun') || text.includes('fire') || text.includes('heater')) return Flame;
    if (text.includes('gunung') || text.includes('mountain') || text.includes('view')) return Mountain;
    if (text.includes('taman') || text.includes('garden') || text.includes('bunga')) return Flower2;
    if (text.includes('hutan') || text.includes('forest') || text.includes('pohon')) return Trees;
    if (text.includes('sofa') || text.includes('tamu') || text.includes('keluarga') || text.includes('living')) return Sofa;
    if (text.includes('mandi') || text.includes('bath') || text.includes('toilet') || text.includes('water heater')) return Bath;
    if (text.includes('parkir') || text.includes('parking')) return Car;
    if (text.includes('game') || text.includes('main') || text.includes('playground')) return Gamepad2;
    if (text.includes('kopi') || text.includes('coffee') || text.includes('teh')) return Coffee;
    if (text.includes('angin') || text.includes('fan')) return Wind;
    if (text.includes('air') || text.includes('dispenser')) return Droplets;

    return Check; // Default icon
};

const FacilityItem: React.FC<{ text: string | any }> = ({ text }) => {
    const { i18n } = useTranslation();
    const lang = (i18n.language?.split('-')[0] || 'id') as 'id' | 'en' | 'zh' | 'de';

    // Handle LocalizedString objects
    const displayText = typeof text === 'string' ? text : (text?.[lang] || text?.id || text?.en || '');
    const Icon = getFacilityIcon(displayText);

    return (
        <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-gold/50 hover:shadow-md transition-all duration-300 group">
            <div className="p-2.5 bg-gray-50 rounded-full text-gray-400 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                <Icon size={18} />
            </div>
            <span className="text-sm text-gray-700 font-light leading-relaxed group-hover:text-gray-900 transition-colors">
                {displayText}
            </span>
        </div>
    );
};

export function VillaDetailPage({ villaId }: VillaDetailPageProps) {
    const { t, i18n } = useTranslation();
    const lang = (i18n.language?.split('-')[0] || 'id') as 'id' | 'en' | 'zh' | 'de';

    const getContent = (content: any) => {
        if (!content) return '';
        if (typeof content === 'string') return content;
        return content[lang] || content.en || content.id || '';
    };

    const [isWishlisted, setIsWishlisted] = useState(false);
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [galleryStartIndex, setGalleryStartIndex] = useState(0);
    const [shareTooltip, setShareTooltip] = useState('');

    const currentVilla = VILLAS.find(v => v.id === villaId);

    // Load wishlist from localStorage on mount AND scroll to top
    useEffect(() => {
        // Scroll to top when page loads
        window.scrollTo(0, 0);

        const savedWishlist = localStorage.getItem('twb_wishlist');
        if (savedWishlist) {
            const wishlist = JSON.parse(savedWishlist);
            setIsWishlisted(wishlist.includes(villaId));
        }
    }, [villaId]);

    // Save wishlist to localStorage
    const handleWishlistToggle = () => {
        const savedWishlist = localStorage.getItem('twb_wishlist');
        let wishlist = savedWishlist ? JSON.parse(savedWishlist) : [];

        if (isWishlisted) {
            wishlist = wishlist.filter((id: string) => id !== villaId);
        } else {
            wishlist.push(villaId);
        }

        localStorage.setItem('twb_wishlist', JSON.stringify(wishlist));
        setIsWishlisted(!isWishlisted);
    };

    // Track page view and villa view on mount
    useEffect(() => {
        if (currentVilla) {
            trackPageView(`/villa/${villaId}`, `${currentVilla.name} | Taman Wisata Bougenville`);
            trackVillaView(currentVilla.name);
        }
    }, [villaId, currentVilla]);

    if (!currentVilla) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-serif mb-4">{t('villa.notFound', 'Villa Not Found')}</h1>
                    <p className="text-gray-600">{t('villa.notFoundDesc', 'The villa you are looking for does not exist.')}</p>
                </div>
            </div>
        );
    }

    // Generate multiple images for the gallery
    const images = Array(10).fill(currentVilla.image);

    // Use currency hook for automatic conversion based on language
    const { format: formatPrice } = useCurrency();

    const handleImageClick = (index: number) => {
        setGalleryStartIndex(index);
        setGalleryOpen(true);
    };

    const handleShare = async () => {
        const shareData = {
            title: currentVilla.name,
            text: getContent(currentVilla.description),
            url: window.location.href,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            // Fallback: Copy to clipboard
            try {
                await navigator.clipboard.writeText(window.location.href);
                setShareTooltip(t('common.copied', 'Link copied!'));
                setTimeout(() => setShareTooltip(''), 2000);
            } catch (err) {
                console.log('Error copying:', err);
            }
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Advanced SEO - Villa Specific (Compete with OTAs) */}
            <SEOHead
                title={generateVillaTitle(currentVilla)}
                description={generateVillaDescription(currentVilla)}
                keywords={generateVillaKeywords(currentVilla)}
                ogImage={currentVilla.image}
                ogUrl={`https://tamanwisatabougenville.com/villas/${villaId}`}
            />

            {/* Enhanced Product Schema with Reviews & Ratings */}
            <StructuredData
                type="Product"
                data={generateVillaStructuredData(currentVilla)}
            />

            {/* FAQ Schema for Featured Snippets */}
            <StructuredData
                type="FAQPage"
                data={generateVillaFAQSchema(currentVilla)}
            />

            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header - Added pt-24 for fixed header clearance on mobile */}
                <div className="pt-24 md:pt-8 pb-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
                        <div>
                            <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wide mb-2">{currentVilla.name}</h1>
                            <p className="text-forest-dark/80 text-lg font-light tracking-wide">{currentVilla.cluster || currentVilla.category}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={handleWishlistToggle}
                                className="flex items-center gap-2 px-4 py-3 md:px-3 md:py-2 text-xs uppercase tracking-[0.2em] text-gray-600 hover:text-gray-900 transition-colors bg-gray-50 hover:bg-gray-100 rounded-lg md:bg-transparent md:rounded-none md:border-b md:border-transparent md:hover:border-gray-900 md:pb-1"
                            >
                                <Heart size={18} className={isWishlisted ? 'fill-current text-red-500' : ''} />
                                <span className="hidden md:inline">{isWishlisted ? t('common.saved', 'Saved') : t('common.save', 'Save')}</span>
                            </button>
                            <div className="relative">
                                <button
                                    onClick={handleShare}
                                    className="flex items-center gap-2 px-4 py-3 md:px-3 md:py-2 text-xs uppercase tracking-[0.2em] text-gray-600 hover:text-gray-900 transition-colors bg-gray-50 hover:bg-gray-100 rounded-lg md:bg-transparent md:rounded-none md:border-b md:border-transparent md:hover:border-gray-900 md:pb-1"
                                >
                                    <Share2 size={18} />
                                    <span className="hidden md:inline">{t('common.share', 'Share')}</span>
                                </button>
                                {shareTooltip && (
                                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-forest-dark text-white text-xs px-3 py-1 rounded-full whitespace-nowrap animate-fadeIn">
                                        {shareTooltip}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:flex md:items-center gap-3 md:gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg md:bg-transparent md:p-0">
                            <Users size={18} className="text-forest" />
                            <span className="font-medium">{currentVilla.capacity}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg md:bg-transparent md:p-0">
                            <BedDouble size={18} className="text-forest" />
                            <span className="font-medium">{currentVilla.bedrooms} {t('villa.bedrooms', 'Bedrooms')}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg md:bg-transparent md:p-0">
                            <Bath size={18} className="text-forest" />
                            <span className="font-medium">{currentVilla.toilets || 1} {t('villa.bathrooms', 'Bathrooms')}</span>
                        </div>
                        {currentVilla.area && (
                            <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg md:bg-transparent md:p-0">
                                <span className="text-forest font-serif font-bold text-sm">m²</span>
                                <span className="font-medium">{currentVilla.area} m²</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Image Grid - Mobile: Single hero image, Desktop: 1+4 grid */}
                {/* Mobile Gallery */}
                <div className="md:hidden relative mb-8 cursor-pointer" onClick={() => handleImageClick(0)}>
                    <div className="aspect-[4/3] rounded-xl overflow-hidden">
                        <img
                            src={optimizeImage(images[0], 800)}
                            alt={`${currentVilla.name} Main View`}
                            className="w-full h-full object-cover"
                            width="800"
                            height="600"
                        />
                    </div>
                    <button
                        onClick={(e) => { e.stopPropagation(); handleImageClick(0); }}
                        className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-forest-dark px-5 py-3 rounded-lg font-medium text-sm flex items-center gap-2 shadow-lg hover:bg-white transition-colors"
                    >
                        <Grid3x3 size={18} />
                        <span>{t('villa.showAllPhotos', 'Show all photos')}</span>
                    </button>
                </div>

                {/* Desktop Gallery */}
                <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-1 h-[500px] overflow-hidden mb-12 cursor-pointer rounded-xl">
                    <div
                        className="col-span-2 row-span-2 relative group"
                        onClick={() => handleImageClick(0)}
                    >
                        <img
                            src={optimizeImage(images[0], 800)}
                            alt={`${currentVilla.name} Main View`}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700"
                            width="800"
                            height="500"
                        />
                    </div>
                    {images.slice(1, 5).map((img, idx) => (
                        <div
                            key={idx}
                            className="relative group"
                            onClick={() => handleImageClick(idx + 1)}
                        >
                            <img
                                src={optimizeImage(img, 400)}
                                alt={`${currentVilla.name} Detail ${idx + 1}`}
                                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700"
                                width="400"
                                height="250"
                                loading="lazy"
                            />
                            {idx === 3 && images.length > 5 && (
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                    <button className="flex items-center gap-2 text-white font-semibold tracking-widest text-xs uppercase">
                                        <Grid3x3 size={16} />
                                        <span>{t('villa.showAllPhotos', 'Show all photos')}</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Main Content + Booking Card */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                    {/* Left Column - Details */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Description */}
                        <div className="pb-8 border-b border-gray-100">
                            <h2 className="font-serif text-2xl font-light mb-6">{t('villa.description', 'Description')}</h2>
                            <p className="text-gray-600 leading-loose font-light text-lg mb-6">
                                {getContent(currentVilla.longDescription) || getContent(currentVilla.description)}
                            </p>
                            {currentVilla.area && (
                                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100 inline-flex">
                                    <div className="p-2 bg-white rounded-full shadow-sm text-gold">
                                        <Grid3x3 size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-0.5">{t('villa.area', 'Villa Area')}</p>
                                        <p className="font-serif text-lg text-forest-dark">{currentVilla.area} m²</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Pricing Details */}
                        <div className="pb-8 border-b border-gray-100">
                            <h2 className="font-serif text-2xl font-light mb-6 flex items-center gap-3">
                                <Calendar className="text-forest-dark" size={24} />
                                {t('villa.pricingDetails', 'Pricing Details')}
                            </h2>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">{t('villa.weekday', 'Weekday')}</p>
                                        <p className="text-xs text-gray-400 mb-1">{t('villa.weekdayDays', 'Mon - Thu')}</p>
                                        <p className="font-serif text-xl text-forest-dark">{formatPrice(currentVilla.priceWeekday)}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">{t('villa.weekend', 'Weekend')}</p>
                                        <p className="text-xs text-gray-400 mb-1">{t('villa.weekdayDays', 'Fri - Sat')}</p>
                                        <p className="font-serif text-xl text-forest-dark">{formatPrice(currentVilla.priceWeekend)}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">{t('villa.highSeason', 'High Season')}</p>
                                        <p className="text-xs text-gray-400 mb-1">{t('villa.highSeasonDays', 'Holidays')}</p>
                                        <p className="font-serif text-xl text-forest-dark">{formatPrice(currentVilla.priceHighSeason)}</p>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-500 flex items-start gap-2">
                                    <Info size={14} className="mt-0.5 flex-shrink-0" />
                                    <p>{t('villa.taxNote', 'Price excludes 10% tax and service charge. Prices subject to change.')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Sleeping Arrangements */}
                        {currentVilla.bedConfiguration && (
                            <div className="pb-8 border-b border-gray-100">
                                <h2 className="font-serif text-2xl font-light mb-6 flex items-center gap-3">
                                    <BedDouble className="text-forest-dark" size={24} />
                                    {t('villa.sleepingArrangements', 'Sleeping Arrangements')}
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {currentVilla.bedConfiguration.map((config, idx) => (
                                        <div key={idx} className="border border-gray-100 p-4 rounded-lg">
                                            <p className="font-medium text-forest-dark mb-1">{t('villa.room', 'Room')} {config.room}</p>
                                            <p className="text-sm text-gray-600 font-light">{config.beds}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Facilities */}
                        {currentVilla.facilities && (
                            <div className="pb-8 border-b border-gray-100">
                                <h2 className="font-serif text-2xl font-light mb-8">{t('villa.facilities', 'Villa Facilities')}</h2>
                                <div className="space-y-10">
                                    {currentVilla.facilities.room && (
                                        <div>
                                            <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                                                <Sofa size={16} />
                                                {t('villa.roomFacilities', 'Room Facilities')}
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {currentVilla.facilities.room.map((item, idx) => (
                                                    <FacilityItem key={idx} text={item} />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {currentVilla.facilities.natural && (
                                        <div>
                                            <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                                                <Trees size={16} />
                                                {t('villa.naturalFeatures', 'Natural Features')}
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {currentVilla.facilities.natural.map((item, idx) => (
                                                    <FacilityItem key={idx} text={item} />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {currentVilla.facilities.meals && (
                                        <div>
                                            <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                                                <Utensils size={16} />
                                                {t('villa.dining', 'Dining')}
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {currentVilla.facilities.meals.map((item, idx) => (
                                                    <FacilityItem key={idx} text={item} />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {currentVilla.facilities.amenities && (
                                        <div>
                                            <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                                                <Wifi size={16} />
                                                {t('villa.amenities', 'Amenities')}
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {currentVilla.facilities.amenities.map((item, idx) => (
                                                    <FacilityItem key={idx} text={item} />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Policies */}
                        {currentVilla.policies && (
                            <div>
                                <h2 className="font-serif text-2xl font-light mb-6 flex items-center gap-3">
                                    <Clock className="text-forest-dark" size={24} />
                                    {t('villa.houseRules', 'House Rules')}
                                </h2>
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 space-y-4">
                                    <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                        <span className="text-gray-600 font-light">{t('villa.checkIn', 'Check-in')}</span>
                                        <span className="font-medium text-forest-dark">{currentVilla.policies.checkIn}</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                        <span className="text-gray-600 font-light">{t('villa.checkOut', 'Check-out')}</span>
                                        <span className="font-medium text-forest-dark">{currentVilla.policies.checkOut}</span>
                                    </div>
                                    {currentVilla.policies.smokeFree && (
                                        <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                            <span className="text-gray-600 font-light">{t('villa.smoking', 'Smoking')}</span>
                                            <span className="font-medium text-forest-dark">{t('villa.noSmoking', 'No smoking in rooms')}</span>
                                        </div>
                                    )}
                                    {currentVilla.policies.specialNotes && (
                                        <div className="pt-2">
                                            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">{t('villa.importantNotes', 'Important Notes')}</p>
                                            <ul className="space-y-2">
                                                {currentVilla.policies.specialNotes.map((note, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                                                        <Info size={14} className="mt-0.5 text-forest-dark" />
                                                        {getContent(note)}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column - Booking Card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <BookingCard
                                price={currentVilla.priceWeekday || currentVilla.price}
                                rating={4.9}
                                reviews={45}
                                villaId={currentVilla.id}
                                villaName={currentVilla.name}
                            />
                            <p className="text-center text-xs text-gray-400 mt-4">
                                *{t('villa.taxNoteShort', 'Harga belum termasuk pajak 10%')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Gallery Modal */}
            <ImageGalleryModal
                images={images}
                isOpen={galleryOpen}
                onClose={() => setGalleryOpen(false)}
                initialIndex={galleryStartIndex}
            />
        </div >
    );
}
