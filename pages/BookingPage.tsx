import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PageHero } from '../components/ui/PageHero';
import { CheckCircle, MessageCircle, Star, Shield, Clock, ArrowRight, Users, Home, CreditCard, Wallet, Building2, Smartphone } from 'lucide-react';
import { FadeIn, Stagger, ScaleIn } from '../components/ui/animations';
import { SEOHead } from '../components/ui/SEOHead';
import { StructuredData } from '../components/ui/StructuredData';
import { trackPageView, trackWhatsAppBooking } from '../utils/analytics';
import { VILLAS } from '../constants';

// OTA Logo Components
const BookingComLogo = () => (
    <svg viewBox="0 0 102 16" className="h-5 w-auto" fill="currentColor">
        <path d="M7.688 0C4.082 0 1.18 2.857 1.18 6.408c0 3.55 2.902 6.407 6.508 6.407h.096c1.697 0 3.264-.648 4.426-1.715l.096-.088-.028-.036c.62-.744.995-1.69.995-2.728 0-.58-.115-1.132-.324-1.636l-.012-.028.012.012.316-.4a4.193 4.193 0 0 0-.316-5.408A6.366 6.366 0 0 0 7.688 0zm25.648 2.88c-1.996 0-3.616 1.604-3.616 3.58 0 1.976 1.62 3.58 3.616 3.58s3.616-1.604 3.616-3.58c0-1.976-1.62-3.58-3.616-3.58zm25.016 0c-1.996 0-3.616 1.604-3.616 3.58 0 1.976 1.62 3.58 3.616 3.58s3.616-1.604 3.616-3.58c0-1.976-1.62-3.58-3.616-3.58z" />
    </svg>
);

export function BookingPage() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
        trackPageView('/booking', 'Booking | Taman Wisata Bougenville');
    }, []);

    const handleWhatsAppBooking = (specialist?: string) => {
        let message = t('bookingPage.whatsappMessage');
        if (specialist) {
            message = t(`bookingPage.specialists.messages.${specialist}`);
        }
        trackWhatsAppBooking(`Booking Page${specialist ? ` - ${specialist}` : ''}`);
        window.open(`https://wa.me/628119102003?text=${encodeURIComponent(message)}`, '_blank');
    };

    const navigateToVilla = (villaId: string) => {
        window.dispatchEvent(new CustomEvent('navigate-villa', { detail: villaId }));
    };

    // OTA platforms data with brand colors
    const otaPlatforms = [
        { name: 'Booking.com', url: 'https://www.booking.com/hotel/id/taman-wisata-bougenville.html', bgColor: 'bg-[#003580]' },
        { name: 'Airbnb', url: 'https://www.airbnb.com', bgColor: 'bg-[#FF5A5F]' },
        { name: 'Traveloka', url: 'https://www.traveloka.com', bgColor: 'bg-[#0064D2]' },
        { name: 'Tiket.com', url: 'https://www.tiket.com', bgColor: 'bg-[#0770CD]' },
        { name: 'Agoda', url: 'https://www.agoda.com', bgColor: 'bg-[#5391D0]' },
        { name: 'Expedia', url: 'https://www.expedia.com', bgColor: 'bg-[#FFCC00] !text-gray-900' },
        { name: 'VRBO', url: 'https://www.vrbo.com', bgColor: 'bg-[#0F4A8A]' },
        { name: 'Trip.com', url: 'https://www.trip.com', bgColor: 'bg-[#287DFA]' }
    ];

    // Payment methods data
    const paymentMethods = [
        { icon: Building2, name: t('bookingPage.payment.transfer'), desc: 'BCA, Mandiri, BNI, BRI' },
        { icon: Wallet, name: t('bookingPage.payment.ewallet'), desc: 'GoPay, OVO, DANA, ShopeePay' },
        { icon: CreditCard, name: t('bookingPage.payment.card'), desc: 'Visa, Mastercard' },
        { icon: Smartphone, name: t('bookingPage.payment.qris'), desc: 'QRIS' }
    ];

    return (
        <div className="min-h-screen bg-white pb-20 lg:pb-0">
            <SEOHead
                title={t('bookingPage.seo.title')}
                description={t('bookingPage.seo.description')}
                canonical="https://tamanwisatabougenville.com/booking"
            />
            <StructuredData
                type="WebPage"
                data={{
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Booking - Taman Wisata Bougenville",
                    "url": "https://tamanwisatabougenville.com/booking"
                }}
            />

            <PageHero
                title={t('bookingPage.heroTitle')}
                subtitle={t('bookingPage.heroSubtitle')}
                backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070"
                overlay="dark"
            />

            {/* Trust Indicators - Compact on mobile */}
            <section className="py-4 md:py-6 bg-forest-dark">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-12 text-white/90 text-xs md:text-sm">
                        <div className="flex items-center gap-1.5">
                            <Star size={14} className="text-gold fill-gold" />
                            <span>{t('bookingPage.trust.rating')}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Shield size={14} className="text-gold" />
                            <span>{t('bookingPage.trust.secure')}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Clock size={14} className="text-gold" />
                            <span className="hidden sm:inline">{t('bookingPage.trust.response')}</span>
                            <span className="sm:hidden">&lt;1h</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main WhatsApp CTA - Single prominent CTA */}
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4 md:px-8">
                    <FadeIn className="max-w-3xl mx-auto">
                        <div className="bg-gradient-to-br from-forest-dark to-forest rounded-2xl p-6 md:p-10 text-white text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-1.5 bg-gold/20 text-gold px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider mb-4">
                                    <CheckCircle size={12} />
                                    {t('bookingPage.recommended')}
                                </div>
                                <h2 className="font-serif text-2xl md:text-3xl mb-3">
                                    {t('bookingPage.whatsappTitle')}
                                </h2>
                                <p className="text-white/80 font-light mb-6 text-sm md:text-base max-w-md mx-auto">
                                    {t('bookingPage.whatsappDesc')}
                                </p>

                                <button
                                    onClick={() => handleWhatsAppBooking()}
                                    className="inline-flex items-center justify-center gap-2 bg-whatsapp text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-whatsapp/90 transition-all duration-300 shadow-lg w-full md:w-auto"
                                >
                                    <MessageCircle size={22} />
                                    {t('bookingPage.chatNow')}
                                </button>

                                <p className="text-white/50 text-xs mt-4">
                                    {t('bookingPage.responseTime')}
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Reservation Specialists - 3 columns on desktop, vertical list on mobile */}
            <section className="py-12 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8">
                    <FadeIn className="text-center mb-8 md:mb-12">
                        <span className="text-forest text-xs font-medium tracking-[0.15em] uppercase mb-2 block">
                            {t('bookingPage.specialists.subtitle')}
                        </span>
                        <h2 className="font-serif text-2xl md:text-3xl text-gray-900">
                            {t('bookingPage.specialists.title')}
                        </h2>
                    </FadeIn>

                    {/* Mobile: Horizontal scroll or compact cards */}
                    <div className="flex flex-col md:flex-row gap-3 md:gap-6 max-w-4xl mx-auto">
                        {[
                            { name: 'Jaka', key: 'jaka', phone: '628119102003' },
                            { name: 'Iis', key: 'iis', phone: '6282121483607' },
                            { name: 'Teten', key: 'teten', phone: '6281322667550' }
                        ].map((specialist, index) => (
                            <ScaleIn key={specialist.key} delay={index * 0.1} className="flex-1">
                                <a
                                    href={`https://wa.me/${specialist.phone}?text=${encodeURIComponent(t(`bookingPage.specialists.messages.${specialist.key}`))}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 md:flex-col md:text-center bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group"
                                >
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-forest/10 rounded-full flex items-center justify-center text-forest font-serif text-lg md:text-xl group-hover:bg-forest group-hover:text-white transition-colors flex-shrink-0">
                                        {specialist.name[0]}
                                    </div>
                                    <div className="flex-1 md:flex-none">
                                        <h3 className="font-serif text-lg text-gray-900">{specialist.name}</h3>
                                        <p className="text-xs text-gray-400">{t('bookingPage.specialists.role')}</p>
                                    </div>
                                    <div className="flex items-center gap-1 text-whatsapp text-sm font-medium md:mt-3">
                                        <MessageCircle size={16} />
                                        <span className="hidden md:inline">{t('bookingPage.specialists.chatWith', { name: specialist.name })}</span>
                                    </div>
                                </a>
                            </ScaleIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Payment Methods - NEW SECTION */}
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4 md:px-8">
                    <FadeIn className="text-center mb-8 md:mb-12">
                        <span className="text-forest text-xs font-medium tracking-[0.15em] uppercase mb-2 block">
                            {t('bookingPage.payment.label')}
                        </span>
                        <h2 className="font-serif text-2xl md:text-3xl text-gray-900 mb-3">
                            {t('bookingPage.payment.title')}
                        </h2>
                        <p className="text-gray-600 font-light text-sm max-w-lg mx-auto">
                            {t('bookingPage.payment.desc')}
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto">
                        {paymentMethods.map((method, index) => (
                            <ScaleIn key={method.name} delay={index * 0.05} scale={0.95}>
                                <div className="bg-white border border-gray-100 rounded-xl p-4 text-center hover:border-forest/30 transition-colors">
                                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-2">
                                        <method.icon size={20} className="text-forest" />
                                    </div>
                                    <h3 className="font-medium text-gray-900 text-sm mb-0.5">{method.name}</h3>
                                    <p className="text-xs text-gray-400">{method.desc}</p>
                                </div>
                            </ScaleIn>
                        ))}
                    </div>

                    <FadeIn className="text-center mt-6">
                        <p className="text-xs text-gray-400">
                            {t('bookingPage.payment.note')}
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* OTA Platforms - Compact */}
            <section className="py-12 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8">
                    <FadeIn className="text-center mb-8">
                        <span className="text-forest text-xs font-medium tracking-[0.15em] uppercase mb-2 block">
                            {t('bookingPage.otaLabel')}
                        </span>
                        <h2 className="font-serif text-2xl md:text-3xl text-gray-900">
                            {t('bookingPage.otaTitle')}
                        </h2>
                    </FadeIn>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
                        {otaPlatforms.map((platform) => (
                            <a
                                key={platform.name}
                                href={platform.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${platform.bgColor} text-white px-4 py-3 rounded-xl text-sm font-semibold hover:opacity-90 hover:scale-[1.02] transition-all text-center shadow-sm`}
                            >
                                {platform.name}
                            </a>
                        ))}
                    </div>

                    <FadeIn className="text-center mt-4">
                        <p className="text-xs text-gray-500">
                            {t('bookingPage.otaNote')}
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Why Book Direct - Simplified for mobile */}
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4 md:px-8">
                    <FadeIn className="text-center mb-8">
                        <h2 className="font-serif text-2xl md:text-3xl text-gray-900">
                            {t('bookingPage.whyDirectTitle')}
                        </h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {[
                            { icon: Star, key: 'benefit1' },
                            { icon: Shield, key: 'benefit2' },
                            { icon: Users, key: 'benefit3' }
                        ].map((item, index) => (
                            <ScaleIn key={item.key} delay={index * 0.1}>
                                <div className="flex items-start gap-3 md:flex-col md:items-center md:text-center bg-white p-4 md:p-6 rounded-xl shadow-sm">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <item.icon size={20} className="text-gold" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 text-sm md:text-base mb-1">{t(`bookingPage.${item.key}.title`)}</h3>
                                        <p className="text-xs md:text-sm text-gray-500 font-light">{t(`bookingPage.${item.key}.desc`)}</p>
                                    </div>
                                </div>
                            </ScaleIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Villa Quick Links - Horizontal scroll on mobile */}
            <section className="py-12 md:py-20 bg-cream">
                <div className="container mx-auto px-4 md:px-8">
                    <FadeIn className="text-center mb-8">
                        <h2 className="font-serif text-2xl md:text-3xl text-gray-900">
                            {t('bookingPage.villasTitle')}
                        </h2>
                    </FadeIn>

                    {/* Horizontal scroll on mobile */}
                    <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
                        <div className="flex md:grid md:grid-cols-3 gap-4 min-w-max md:min-w-0 max-w-4xl mx-auto">
                            {VILLAS.slice(0, 3).map((villa, index) => (
                                <FadeIn key={villa.id} delay={index * 0.1}>
                                    <button
                                        onClick={() => navigateToVilla(villa.id)}
                                        className="w-64 md:w-full text-left bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group"
                                    >
                                        <div className="relative h-36 md:h-40 overflow-hidden">
                                            <img
                                                src={villa.image}
                                                alt={villa.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                            <div className="absolute bottom-3 left-3 right-3">
                                                <h3 className="font-serif text-lg text-white">{villa.name}</h3>
                                            </div>
                                        </div>
                                        <div className="p-3 flex items-center justify-between">
                                            <div>
                                                <p className="text-xs text-gray-400">{t('home.fromPrice')}</p>
                                                <p className="text-sm font-bold text-forest-dark">
                                                    Rp {(villa.price / 1000000).toFixed(1)}jt
                                                </p>
                                            </div>
                                            <ArrowRight size={16} className="text-gray-400 group-hover:text-forest transition-colors" />
                                        </div>
                                    </button>
                                </FadeIn>
                            ))}
                        </div>
                    </div>

                    <FadeIn className="text-center mt-6">
                        <button
                            onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'villas' }))}
                            className="text-forest font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                        >
                            {t('home.viewAllVillas')}
                            <ArrowRight size={14} />
                        </button>
                    </FadeIn>
                </div>
            </section>

            {/* Mobile Sticky CTA - Single WhatsApp button only */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-xl px-4 py-3">
                <button
                    onClick={() => handleWhatsAppBooking()}
                    className="w-full bg-whatsapp text-white py-3.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
                >
                    <MessageCircle size={20} />
                    {t('bookingPage.chatNow')}
                </button>
            </div>


        </div>
    );
}
