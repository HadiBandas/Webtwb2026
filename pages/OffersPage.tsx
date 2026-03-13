import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PageHero } from '../components/ui/PageHero';
import { StickyBookingCTA } from '../components/ui/StickyBookingCTA';
import { SEOHead } from '../components/ui/SEOHead';
import { trackPageView } from '../utils/analytics';
import { ArrowRight, Compass, Sparkles, Coffee } from 'lucide-react';

export function OffersPage() {
    const { t } = useTranslation();

    const handleBookingClick = () => {
        const booking = document.getElementById('booking');
        if (booking) {
            booking.scrollIntoView({ behavior: 'smooth' });
        } else {
            const message = "Halo, saya tertarik merancang liburan eksklusif (Bespoke Experience) di Taman Wisata Bougenville.";
            window.open(`https://wa.me/628119102003?text=${encodeURIComponent(message)}`, '_blank');
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        trackPageView('/offers', 'Offers & Experiences | Taman Wisata Bougenville');
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <SEOHead
                title={t('offers.title', 'Bespoke & Experiences') + ' | Taman Wisata Bougenville'}
                description={t('offers.subtitle', 'Kemewahan yang sepenuhnya dipersonalisasi untuk Anda')}
                canonical="https://tamanwisatabougenville.com/offers"
            />
            
            <PageHero
                title={t('offers.title', 'Bespoke & Experiences')}
                subtitle={t('offers.subtitle', 'Kemewahan yang sepenuhnya dipersonalisasi untuk Anda')}
                backgroundImage="/images/facilities/Family Recreation.jpg"
                overlay="dark"
                ctaPrimary={{
                    text: t('offers.designMyEscape', 'Design My Escape'),
                    onClick: () => {
                        document.getElementById('bespoke-experience')?.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
            />

            {/* Bespoke Experience Section */}
            <section id="bespoke-experience" className="py-24 bg-white flex-grow">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <span className="text-forest-dark uppercase tracking-[0.3em] pl-1 text-sm font-medium mb-6 block">
                        {t('offers.bespoke.label', 'Curated Just For You')}
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
                        {t('offers.bespoke.title', 'Kemewahan Sejati Menolak Paket Standar')}
                    </h2>
                    
                    <div className="w-24 h-[1px] bg-forest-dark/30 mx-auto mb-10"></div>
                    
                    <p className="text-gray-600 md:text-xl font-light mb-14 leading-relaxed max-w-3xl mx-auto">
                        {t('offers.bespoke.description', 'Kami percaya bahwa setiap perjalanan bermakna tidak bisa disamaratakan. Saat ini, kami tidak menawarkan paket massal. Sebaliknya, Concierge Team kami mengundang Anda untuk merancang itinerary eksklusif yang sepenuhnya disesuaikan dengan ritme dan keinginan Anda.')}
                    </p>
                    
                    <div className="flex flex-col items-center justify-center">
                        <button
                            onClick={handleBookingClick}
                            className="bg-forest-dark text-white px-10 py-5 font-medium uppercase tracking-[0.2em] text-sm hover:bg-forest-dark/90 transition-all duration-300 flex items-center justify-center gap-3 group"
                        >
                            {t('offers.bespoke.cta', 'Hubungi Concierge Kami')}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Additional Luxury Value Proposition */}
            <section className="py-24 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto text-center">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-forest-dark/5 flex items-center justify-center mb-6">
                                <Coffee className="w-8 h-8 text-forest-dark" strokeWidth={1.5} />
                            </div>
                            <h3 className="font-serif text-2xl font-light text-gray-900 mb-4">{t('offers.bespoke.features.dining.title', 'Personalized Dining')}</h3>
                            <p className="text-gray-600 font-light leading-relaxed">{t('offers.bespoke.features.dining.desc', 'Dari private BBQ di tengah hutan hingga sarapan eksotis di tepian sungai, kami membantu merangkai perjalanan kuliner personal yang kaya rasa Nusantara.')}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-forest-dark/5 flex items-center justify-center mb-6">
                                <Sparkles className="w-8 h-8 text-forest-dark" strokeWidth={1.5} />
                            </div>
                            <h3 className="font-serif text-2xl font-light text-gray-900 mb-4">{t('offers.bespoke.features.amenities.title', 'Exclusive Amenities')}</h3>
                            <p className="text-gray-600 font-light leading-relaxed">{t('offers.bespoke.features.amenities.desc', 'Setiap detail masa inap Anda akan diperhatikan secara saksama—mulai dari dekorasi kedatangan, prioritas akses, hingga pengaturan momen romantis yang terkurasi.')}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-forest-dark/5 flex items-center justify-center mb-6">
                                <Compass className="w-8 h-8 text-forest-dark" strokeWidth={1.5} />
                            </div>
                            <h3 className="font-serif text-2xl font-light text-gray-900 mb-4">{t('offers.bespoke.features.activities.title', 'Curated Activities')}</h3>
                            <p className="text-gray-600 font-light leading-relaxed">{t('offers.bespoke.features.activities.desc', 'Konsultasikan minat liburan Anda pada kami, dan dapatkan panduan khusus untuk mengeksplorasi ekosistem hutan pinus dan sungai secara lebih privat dan elegan.')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sticky Booking CTA */}
            <StickyBookingCTA onBookClick={handleBookingClick} />
        </div>
    );
}
