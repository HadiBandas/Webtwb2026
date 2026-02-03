import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PageHero } from '../components/ui/PageHero';
import { MapEmbed } from '../components/ui/MapEmbed';
import { StickyBookingCTA } from '../components/ui/StickyBookingCTA';
import { Car, Plane, Train, Clock, MapPin, Navigation, Info, Smartphone, ParkingCircle } from 'lucide-react';
import { SEOHead } from '../components/ui/SEOHead';
import { StructuredData } from '../components/ui/StructuredData';
import { trackPageView } from '../utils/analytics';

const ROUTE_KEYS = ['airport', 'whoosh', 'station', 'jakarta', 'city'] as const;

const ICON_MAP: Record<string, any> = {
    airport: Plane,
    whoosh: Train,
    station: Train,
    jakarta: Car,
    city: MapPin
};

export function LocationPage() {
    const { t } = useTranslation();

    // Get route data from translations
    const routes = ROUTE_KEYS.map(key => {
        const route = t(`location.routes.${key}`, { returnObjects: true }) as any;
        return {
            key,
            ...route,
            icon: ICON_MAP[key]
        };
    });

    const handleBookingClick = () => {
        const booking = document.getElementById('booking');
        if (booking) {
            booking.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.open('https://wa.me/628119102003?text=I would like to make a reservation', '_blank');
        }
    };

    useEffect(() => {
        trackPageView('/location', 'Find Us | Taman Wisata Bougenville');
    }, []);

    const fullAddress = t('location.info.addressDesc', {
        defaultValue: "Jl. Gunung Puntang, Campaka Mulya, Cimaung, Banjaran, Kab. Bandung, Jawa Barat 40374"
    });

    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title={`${t('location.title')} | Taman Wisata Bougenville`}
                description={t('location.subtitle')}
                canonical="https://tamanwisatabougenville.com/location"
            />
            <StructuredData
                type="LocalBusiness"
                data={{
                    "@context": "https://schema.org",
                    "@type": "Place",
                    "name": "Taman Wisata Bougenville",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Jl. Gunung Puntang, Campaka Mulya",
                        "addressLocality": "Cimaung, Banjaran, Kab. Bandung",
                        "addressRegion": "Jawa Barat",
                        "postalCode": "40374",
                        "addressCountry": "ID"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "-7.0807",
                        "longitude": "107.5617"
                    },
                    "url": "https://tamanwisatabougenville.com/location",
                    "image": "/images/mountain-wellness.png"
                }}
            />

            {/* Hero Section */}
            <PageHero
                title={t('location.title')}
                subtitle={t('location.subtitle')}
                backgroundImage="/images/mountain-wellness.png"
                overlay="dark"
                ctaPrimary={{
                    text: t('location.getDirections'),
                    onClick: () => {
                        window.open('https://www.google.com/maps/place/Taman+Wisata+Bougenville/@-7.0807,107.5617,17z', '_blank');
                    }
                }}
            />

            {/* Travel Times Table Section */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <span className="text-forest text-xs font-medium tracking-[0.2em] uppercase mb-4 block">{t('location.yourJourney')}</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6 tracking-wide">
                            {t('location.travelTimesTitle')}
                        </h2>
                        <div className="w-24 h-px bg-gold/60 mx-auto"></div>
                    </div>

                    {/* Travel Times Table */}
                    <div className="max-w-5xl mx-auto mb-20 animate-fade-in-up delay-100">
                        <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-forest-dark text-white">
                                            <th className="px-6 py-5 text-left text-sm font-semibold uppercase tracking-wider">From</th>
                                            <th className="px-6 py-5 text-center text-sm font-semibold uppercase tracking-wider">Time</th>
                                            <th className="px-6 py-5 text-left text-sm font-semibold uppercase tracking-wider hidden md:table-cell">Via (Distance)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-100">
                                        {routes.map((item, index) => (
                                            <tr key={index} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-5">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 bg-forest/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                            <item.icon size={18} className="text-forest" />
                                                        </div>
                                                        <div>
                                                            <span className="font-medium text-gray-900">{item.from}</span>
                                                            <p className="text-sm text-gray-500 md:hidden mt-1">{item.via} ({item.distance})</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-5 text-center">
                                                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-forest/10 text-forest font-semibold text-sm">
                                                        {item.time}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-5 text-gray-600 hidden md:table-cell">
                                                    {item.via} <span className="text-gray-400">({item.distance})</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Detailed Directions Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {routes.map((route, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-forest to-forest-dark rounded-xl flex items-center justify-center shadow-lg">
                                        <route.icon size={24} className="text-white" />
                                    </div>
                                    <h3 className="font-serif text-2xl text-gray-900">{route.from}</h3>
                                </div>

                                <ol className="space-y-4 mb-6">
                                    {route.steps && route.steps.map((step: string, stepIndex: number) => (
                                        <li key={stepIndex} className="flex gap-4">
                                            <span className="flex-shrink-0 w-7 h-7 bg-forest/10 rounded-full flex items-center justify-center text-forest font-semibold text-sm">
                                                {stepIndex + 1}
                                            </span>
                                            <span className="text-gray-600 leading-relaxed pt-0.5">{step}</span>
                                        </li>
                                    ))}
                                </ol>

                                <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg border border-amber-100">
                                    <Clock size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-amber-800">{route.note}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Important Info Box */}
            <section className="py-16 bg-gray-900">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center gap-4 mb-10">
                            <Navigation size={28} className="text-gold" />
                            <h3 className="font-serif text-3xl text-white">{t('location.info.title')}</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Full Address */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                                <div className="flex items-center gap-3 mb-4">
                                    <MapPin size={20} className="text-gold" />
                                    <h4 className="text-white font-semibold">{t('location.info.address')}</h4>
                                </div>
                                <p className="text-white/80 leading-relaxed">
                                    Jl. Gunung Puntang, Campaka Mulya, Cimaung, Banjaran, Kab. Bandung, Jawa Barat 40374
                                </p>
                                <p className="text-sm text-white/60 mt-3">
                                    {t('location.info.gps')}: Search "Taman Wisata Bougenville" or approx -7.0807, 107.5617
                                </p>
                            </div>

                            {/* Road Conditions */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                                <div className="flex items-center gap-3 mb-4">
                                    <Info size={20} className="text-gold" />
                                    <h4 className="text-white font-semibold">{t('location.info.road')}</h4>
                                </div>
                                <p className="text-white/80 leading-relaxed">
                                    {t('location.info.roadDesc')}
                                </p>
                            </div>

                            {/* Mobile Signal */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                                <div className="flex items-center gap-3 mb-4">
                                    <Smartphone size={20} className="text-gold" />
                                    <h4 className="text-white font-semibold">{t('location.info.signal')}</h4>
                                </div>
                                <p className="text-white/80 leading-relaxed">
                                    {t('location.info.signalDesc')}
                                </p>
                            </div>

                            {/* Parking */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                                <div className="flex items-center gap-3 mb-4">
                                    <ParkingCircle size={20} className="text-gold" />
                                    <h4 className="text-white font-semibold">{t('location.info.parking')} & {t('location.info.transport')}</h4>
                                </div>
                                <p className="text-white/80 leading-relaxed">
                                    {t('location.info.parkingDesc')} {t('location.info.transportDesc')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 md:py-28 bg-gray-50">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <span className="text-forest text-xs font-medium tracking-[0.2em] uppercase mb-4 block">{t('location.mapSectionLabel')}</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6 tracking-wide">
                            {t('location.ourLocation')}
                        </h2>
                        <div className="w-24 h-px bg-gold/60 mx-auto"></div>
                    </div>

                    <div className="max-w-6xl mx-auto shadow-2xl rounded-xl overflow-hidden border-4 border-white animate-fade-in-up delay-100">
                        <div className="h-[500px] md:h-[600px] w-full">
                            <MapEmbed
                                latitude={-7.0807}
                                longitude={107.5617}
                                address="Jl. Gunung Puntang, Campaka Mulya, Cimaung, Banjaran, Kab. Bandung, Jawa Barat"
                                googleMapsUrl="https://www.google.com/maps/place/Taman+Wisata+Bougenville/@-7.0807,107.5617,17z"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <StickyBookingCTA onBookClick={handleBookingClick} />
        </div>
    );
}
