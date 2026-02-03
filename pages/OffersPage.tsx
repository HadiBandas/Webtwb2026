import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PageHero } from '../components/ui/PageHero';
import { OfferCard } from '../components/ui/OfferCard';
import { StickyBookingCTA } from '../components/ui/StickyBookingCTA';
import { OFFERS } from '../constants';
import { SEOHead } from '../components/ui/SEOHead';
import { StructuredData } from '../components/ui/StructuredData';
import { trackPageView } from '../utils/analytics';

interface OffersPageProps {
    onBookOffer?: (offerId: string) => void;
}

export function OffersPage({ onBookOffer }: OffersPageProps) {
    const { t, i18n } = useTranslation();
    const lang = (i18n.language?.split('-')[0] || 'id') as 'id' | 'en' | 'zh' | 'de';

    const getContent = (content: any) => {
        if (typeof content === 'string') return content;
        return content[lang] || content['en'] || content['id'] || '';
    };

    const handleBookOffer = (offerId: string) => {
        if (onBookOffer) {
            onBookOffer(offerId);
        } else {
            // Default: scroll to contact or open WhatsApp
            const offer = OFFERS.find(o => o.id === offerId);
            const offerTitle = offer ? getContent(offer.title) : 'Offer';
            const whatsappMessage = `Hello! I'm interested in the "${offerTitle}" package. I'd like to know more details.`;
            window.open(`https://wa.me/628119102003?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
        }
    };

    const handleBookingClick = () => {
        const booking = document.getElementById('booking');
        if (booking) {
            booking.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.open('https://wa.me/628119102003?text=I would like to make a reservation', '_blank');
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        trackPageView('/offers', 'Offers | Taman Wisata Bougenville');
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title={t('offers.title') + ' | Taman Wisata Bougenville'}
                description={t('offers.subtitle')}
                canonical="https://tamanwisatabougenville.com/offers"
            />
            <StructuredData
                type="OfferCatalog"
                data={{
                    "@context": "https://schema.org",
                    "@type": "OfferCatalog",
                    "name": "Taman Wisata Bougenville Offers",
                    "description": t('offers.subtitle'),
                    "url": "https://tamanwisatabougenville.com/offers",
                    "itemListElement": OFFERS.map((offer, index) => ({
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": getContent(offer.title),
                            "description": getContent(offer.description)
                        },
                        "priceCurrency": "IDR",
                        "price": offer.price,
                        "position": index + 1
                    }))
                }}
            />
            <PageHero
                title={t('offers.title')}
                subtitle={t('offers.subtitle')}
                backgroundImage="/images/facilities/Family Recreation.jpg"
                overlay="dark"
                ctaPrimary={{
                    text: 'View All Offers',
                    onClick: () => {
                        document.getElementById('offers-grid')?.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
            />

            {/* Offers Grid */}
            <section id="offers-grid" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-4xl font-light text-gray-900 mb-4 tracking-wide">
                            Current Promotions
                        </h2>
                        <p className="text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                            Each package is thoughtfully designed to create meaningful experiences.
                            All prices are subject to availability and seasonal adjustments.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {OFFERS.map((offer) => (
                            <OfferCard
                                key={offer.id}
                                offer={offer}
                                onBookClick={handleBookOffer}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Terms & Conditions */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="font-serif text-2xl font-light text-gray-900 mb-6 tracking-wide">
                            Terms & Conditions
                        </h3>

                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                <strong>Booking & Payment:</strong> A 50% deposit is required to confirm your reservation.
                                Full payment must be completed 7 days before check-in.
                            </p>

                            <p>
                                <strong>Cancellation Policy:</strong> Free cancellation up to 14 days before arrival.
                                Cancellations made 7-14 days before check-in will incur a 50% charge.
                                No refund for cancellations within 7 days of check-in.
                            </p>

                            <p>
                                <strong>Package Validity:</strong> Offers are subject to availability and blackout dates may apply
                                during peak seasons (national holidays, school holidays, year-end festivities).
                            </p>

                            <p>
                                <strong>Modifications:</strong> Changes to booking dates are subject to availability.
                                Modifications requested within 7 days of check-in may incur additional charges.
                            </p>

                            <p>
                                <strong>House Rules:</strong> Check-in time is 2:00 PM, check-out is 12:00 PM noon.
                                Early check-in or late check-out is subject to availability and may incur extra charges.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-forest-dark text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl font-light mb-4 tracking-wide">
                        Can't Find the Perfect Package?
                    </h2>
                    <p className="text-white/90 text-lg font-light mb-8 max-w-2xl mx-auto">
                        Our team can create a customized experience tailored to your needs.
                        Contact us to discuss your preferences.
                    </p>
                    <button
                        onClick={handleBookingClick}
                        className="bg-white text-forest-dark px-8 py-4 font-medium uppercase tracking-[0.2em] text-xs hover:bg-gray-100 transition-all inline-flex items-center gap-2"
                    >
                        Contact Our Team
                    </button>
                </div>
            </section>

            {/* Sticky Booking CTA */}
            <StickyBookingCTA onBookClick={handleBookingClick} />
        </div>
    );
}
