import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PageHero } from '../components/ui/PageHero';
import { ContactForm } from '../components/ui/ContactForm';
import { MapEmbed } from '../components/ui/MapEmbed';
import { StickyBookingCTA } from '../components/ui/StickyBookingCTA';
import { Phone, Mail, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import { FadeIn, ScaleIn } from '../components/ui/animations';
import { SEOHead } from '../components/ui/SEOHead';
import { StructuredData } from '../components/ui/StructuredData';
import { trackPageView } from '../utils/analytics';

export function ContactPage() {
    const { t } = useTranslation();
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
        trackPageView('/contact', 'Contact Us | Taman Wisata Bougenville');
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title={t('contact.title') + ' | Taman Wisata Bougenville'}
                description={t('contact.subtitle')}
                canonical="https://tamanwisatabougenville.com/contact"
            />
            <StructuredData
                type="LocalBusiness"
                data={{
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    "name": "Contact Taman Wisata Bougenville",
                    "description": "Contact information for Taman Wisata Bougenville.",
                    "url": "https://tamanwisatabougenville.com/contact",
                    "mainEntity": {
                        "@type": "Organization",
                        "name": "Taman Wisata Bougenville",
                        "telephone": "+628119102003",
                        "email": "booking@tamanwisatabougenville.com",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Jl. Gn. Puntang, Campakamulya",
                            "addressLocality": "Kec. Cimaung, Kabupaten Bandung",
                            "addressRegion": "Jawa Barat",
                            "postalCode": "40374",
                            "addressCountry": "ID"
                        }
                    }
                }}
            />
            <PageHero
                title={t('contact.title')}
                subtitle={t('contact.subtitle')}
                backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074"
                overlay="dark"
            />

            {/* Contact Methods - Refined */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto px-6 md:px-8">
                    <FadeIn className="text-center mb-20">
                        <span className="text-forest text-xs font-medium tracking-[0.2em] uppercase mb-4 block">{t('contact.contactLabel')}</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-gray-900">
                            {t('contact.contactTitle')}
                        </h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16">
                        <ScaleIn
                            delay={0.1}
                            className="text-center hover:-translate-y-2 transition-transform duration-300 group block"
                            href="tel:+628119102003"
                            as="a"
                        >
                            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-forest group-hover:text-white transition-colors duration-300 shadow-sm">
                                <Phone size={28} className="text-gray-400 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="font-serif text-2xl text-gray-900 mb-3 group-hover:text-forest transition-colors">{t('contact.phone')}</h3>
                            <p className="text-gray-600 text-base font-light tracking-wide mb-2">+62 811 910 2003</p>
                            <span className="text-xs text-forest font-medium uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">{t('common.learnMore')}</span>
                        </ScaleIn>

                        <ScaleIn
                            delay={0.2}
                            href="https://wa.me/628119102003"
                            target="_blank"
                            rel="noreferrer"
                            className="text-center hover:-translate-y-2 transition-transform duration-300 group block"
                            as="a"
                        >
                            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-forest group-hover:text-white transition-colors duration-300 shadow-sm">
                                <MessageCircle size={28} className="text-gray-400 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="font-serif text-2xl text-gray-900 mb-3 group-hover:text-forest transition-colors">WhatsApp</h3>
                            <p className="text-gray-600 text-base font-light tracking-wide mb-2">+62 811 910 2003</p>
                            <span className="text-xs text-forest font-medium uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">{t('contact.chatNow', 'Chat Now')}</span>
                        </ScaleIn>

                        <ScaleIn
                            delay={0.3}
                            href="mailto:booking@tamanwisatabougenville.com"
                            className="text-center hover:-translate-y-2 transition-transform duration-300 group block"
                            as="a"
                        >
                            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-forest group-hover:text-white transition-colors duration-300 shadow-sm">
                                <Mail size={28} className="text-gray-400 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="font-serif text-2xl text-gray-900 mb-3 group-hover:text-forest transition-colors">{t('contact.email')}</h3>
                            <p className="text-gray-600 text-base font-light tracking-wide mb-2">booking@tamanwisatabougenville.com</p>
                            <span className="text-xs text-forest font-medium uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">{t('contact.sendEmail', 'Send Email')}</span>
                        </ScaleIn>

                        <ScaleIn delay={0.4} className="text-center group">
                            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
                                <Clock size={28} className="text-gray-400" />
                            </div>
                            <h3 className="font-serif text-2xl text-gray-900 mb-3">{t('footer.contactTitle')}</h3>
                            <p className="text-gray-600 text-base font-light tracking-wide mb-1">{t('contact.openHours')}</p>
                            <p className="text-gray-900 text-base font-medium tracking-wide">8:00 AM - 10:00 PM</p>
                        </ScaleIn>
                    </div>
                </div>
            </section>

            {/* Reservation Specialists - Personal Concierge Service */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-6 md:px-8">
                    <FadeIn className="text-center mb-16">
                        <span className="text-forest text-xs font-medium tracking-[0.2em] uppercase mb-4 block">{t('contact.specialists.subtitle')}</span>
                        <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-6">
                            {t('contact.specialists.title')}
                        </h2>
                        <p className="text-gray-600 font-light max-w-2xl mx-auto text-lg">
                            {t('contact.specialists.desc')}
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Jaka */}
                        <ScaleIn delay={0.1} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300 group h-full">
                            <div className="w-20 h-20 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6 text-forest font-serif text-2xl group-hover:bg-forest group-hover:text-white transition-colors duration-300">
                                J
                            </div>
                            <h3 className="font-serif text-2xl text-gray-900 mb-1">Jaka</h3>
                            <p className="text-xs uppercase tracking-[0.15em] text-gray-400 mb-6">{t('contact.specialists.role')}</p>
                            <a
                                href={`https://wa.me/628119102003?text=${encodeURIComponent(t('contact.specialists.messages.jaka', 'Halo Kak Jaka, saya tertarik untuk reservasi di Taman Wisata Bougenville'))}`}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-green-600 hover:text-white transition-all duration-300 w-full justify-center"
                            >
                                <MessageCircle size={18} />
                                {t('contact.specialists.chatWith', { name: 'Jaka' })}
                            </a>
                        </ScaleIn>

                        {/* Iis */}
                        {/* removed recommended badge for equality */}
                        <ScaleIn delay={0.2} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300 group h-full">
                            <div className="w-20 h-20 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6 text-forest font-serif text-2xl group-hover:bg-forest group-hover:text-white transition-colors duration-300">
                                I
                            </div>
                            <h3 className="font-serif text-2xl text-gray-900 mb-1">Iis</h3>
                            <p className="text-xs uppercase tracking-[0.15em] text-gray-400 mb-6">{t('contact.specialists.role')}</p>
                            <a
                                href={`https://wa.me/6282121483607?text=${encodeURIComponent(t('contact.specialists.messages.iis', 'Halo Kak Iis, boleh minta info lebih lanjut tentang villa?'))}`}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-green-600 hover:text-white transition-all duration-300 w-full justify-center"
                            >
                                <MessageCircle size={18} />
                                {t('contact.specialists.chatWith', { name: 'Iis' })}
                            </a>
                        </ScaleIn>

                        {/* Teten */}
                        <ScaleIn delay={0.3} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300 group h-full">
                            <div className="w-20 h-20 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6 text-forest font-serif text-2xl group-hover:bg-forest group-hover:text-white transition-colors duration-300">
                                T
                            </div>
                            <h3 className="font-serif text-2xl text-gray-900 mb-1">Teten</h3>
                            <p className="text-xs uppercase tracking-[0.15em] text-gray-400 mb-6">{t('contact.specialists.role')}</p>
                            <a
                                href={`https://wa.me/6281322667550?text=${encodeURIComponent(t('contact.specialists.messages.teten', 'Halo Kak Teten, saya mau cek ketersediaan untuk tanggal...'))}`}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-green-600 hover:text-white transition-all duration-300 w-full justify-center"
                            >
                                <MessageCircle size={18} />
                                {t('contact.specialists.chatWith', { name: 'Teten' })}
                            </a>
                        </ScaleIn>
                    </div>
                </div>
            </section>

            {/* Contact Form & Map - Refined */}
            <section className="py-24 md:py-32 bg-gray-50">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto">
                        {/* Form */}
                        <FadeIn className="w-full" direction="left" delay={0.2}>
                            <span className="text-forest text-xs font-medium tracking-[0.2em] uppercase mb-4 block">{t('contact.formLabel')}</span>
                            <h3 className="font-serif text-3xl md:text-4xl text-gray-900 mb-8">
                                {t('contact.send')}
                            </h3>
                            <div className="w-20 h-px bg-gold/60 mb-10"></div>
                            <p className="text-gray-600 font-light mb-12 leading-relaxed text-lg">
                                {t('contact.subtitle')}
                            </p>
                            <div className="bg-white p-8 md:p-12 shadow-xl rounded-sm border border-gray-100">
                                <ContactForm />
                            </div>
                        </FadeIn>

                        {/* Map */}
                        <FadeIn className="w-full" direction="right" delay={0.2}>
                            <span className="text-forest text-xs font-medium tracking-[0.2em] uppercase mb-4 block">{t('contact.locationLabel')}</span>
                            <h3 className="font-serif text-3xl md:text-4xl text-gray-900 mb-8">
                                {t('nav.location')}
                            </h3>
                            <div className="w-20 h-px bg-gold/60 mb-10"></div>
                            <p className="text-gray-600 font-light mb-12 leading-relaxed text-lg">
                                {t('location.subtitle')}
                            </p>
                            <div className="h-[500px] w-full shadow-2xl rounded-sm overflow-hidden border-4 border-white">
                                <MapEmbed
                                    address="Jl. Gn. Puntang, Campakamulya, Kec. Cimaung, Kabupaten Bandung, Jawa Barat 40374"
                                    googleMapsUrl="https://www.google.com/maps/place/Taman+Wisata+Bougenville/@-7.1111615,107.601865,17z"
                                />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* FAQ Link - Refined */}
            <section className="py-24 md:py-32 bg-white">
                <FadeIn className="container mx-auto px-6 text-center">
                    <h3 className="font-serif text-3xl md:text-5xl text-gray-900 mb-8">
                        {t('contact.faqTitle')}
                    </h3>
                    <div className="w-24 h-px bg-gold/60 mx-auto mb-10"></div>
                    <p className="text-gray-600 font-light mb-12 leading-relaxed text-lg max-w-2xl mx-auto">
                        {t('contact.faqDesc')}
                    </p>
                    <button
                        onClick={() => {
                            // Navigate to FAQ page
                            const event = new CustomEvent('navigate', { detail: 'faq' });
                            window.dispatchEvent(event);
                        }}
                        className="inline-flex items-center gap-4 border border-gray-900 text-gray-900 px-12 py-5 text-sm uppercase tracking-[0.2em] font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 group"
                    >
                        <span>{t('contact.viewFaq')}</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </FadeIn>
            </section>

            <StickyBookingCTA onBookClick={handleBookingClick} />
        </div>
    );
}
