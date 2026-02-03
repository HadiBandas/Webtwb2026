import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PageHero } from '../components/ui/PageHero';
import { StickyBookingCTA } from '../components/ui/StickyBookingCTA';
import { Mountain, Heart, Leaf, Users } from 'lucide-react';
import { FadeIn, Stagger, ScaleIn } from '../components/ui/animations';
import { SEOHead } from '../components/ui/SEOHead';
import { StructuredData } from '../components/ui/StructuredData';
import { trackPageView } from '../utils/analytics';

export function AboutPage() {
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
        trackPageView('/about', 'About Us | Taman Wisata Bougenville');
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title={t('about.title') + ' | Taman Wisata Bougenville'}
                description={t('about.subtitle')}
                canonical="https://tamanwisatabougenville.com/about"
            />
            <StructuredData
                type="Organization"
                data={{
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    "name": "About Taman Wisata Bougenville",
                    "description": "History, values, and commitment of Taman Wisata Bougenville.",
                    "url": "https://tamanwisatabougenville.com/about",
                    "mainEntity": {
                        "@type": "Organization",
                        "name": "Taman Wisata Bougenville",
                        "foundingDate": "2005",
                        "description": "A luxury mountain resort in Mount Puntang.",
                        "logo": "https://tamanwisatabougenville.com/logo.png"
                    }
                }}
            />
            <PageHero
                title={t('about.story')}
                subtitle={t('about.subtitle')}
                backgroundImage="/images/home-page-hero.webp"
                overlay="dark"
            />

            {/* Brand Philosophy - Refined */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto px-6 md:px-8">
                    <FadeIn className="max-w-4xl mx-auto text-center">
                        <span className="text-forest text-xs font-medium tracking-[0.2em] uppercase mb-4 block">{t('about.philosophyLabel')}</span>
                        <h2 className="font-serif text-4xl md:text-6xl text-gray-900 mb-8 leading-tight">
                            {t('about.philosophyTitle')}
                        </h2>
                        <div className="w-24 h-px bg-gold/60 mx-auto mb-12"></div>
                        <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-8">
                            {t('about.philosophyDesc1')}
                        </p>
                        <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                            {t('about.philosophyDesc2')}
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Core Values - Refined */}
            <section className="py-24 md:py-32 bg-gray-50">
                <div className="container mx-auto px-6 md:px-8">
                    <FadeIn className="text-center mb-20">
                        <span className="text-forest text-xs font-medium tracking-[0.2em] uppercase mb-4 block">{t('about.valuesLabel')}</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-gray-900">
                            {t('about.valuesTitle')}
                        </h2>
                    </FadeIn>

                    <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16" staggerDelay={0.1}>
                        <ScaleIn className="text-center group" scale={0.9}>
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500">
                                <Mountain size={32} className="text-gray-400 group-hover:text-forest transition-colors duration-300" />
                            </div>
                            <h3 className="font-serif text-2xl text-gray-900 mb-4 group-hover:text-forest transition-colors">{t('about.valueHeritageTitle', 'Heritage')}</h3>
                            <p className="text-base text-gray-500 font-light leading-relaxed px-4">
                                {t('about.valueHeritageDesc')}
                            </p>
                        </ScaleIn>

                        <ScaleIn className="text-center group" scale={0.9}>
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500">
                                <Leaf size={32} className="text-gray-400 group-hover:text-forest transition-colors duration-300" />
                            </div>
                            <h3 className="font-serif text-2xl text-gray-900 mb-4 group-hover:text-forest transition-colors">{t('about.valueSustainabilityTitle')}</h3>
                            <p className="text-base text-gray-500 font-light leading-relaxed px-4">
                                {t('about.valueSustainabilityDesc')}
                            </p>
                        </ScaleIn>

                        <ScaleIn className="text-center group" scale={0.9}>
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500">
                                <Heart size={32} className="text-gray-400 group-hover:text-forest transition-colors duration-300" />
                            </div>
                            <h3 className="font-serif text-2xl text-gray-900 mb-4 group-hover:text-forest transition-colors">{t('about.valueAuthenticityTitle')}</h3>
                            <p className="text-base text-gray-500 font-light leading-relaxed px-4">
                                {t('about.valueAuthenticityDesc')}
                            </p>
                        </ScaleIn>

                        <ScaleIn className="text-center group" scale={0.9}>
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500">
                                <Users size={32} className="text-gray-400 group-hover:text-forest transition-colors duration-300" />
                            </div>
                            <h3 className="font-serif text-2xl text-gray-900 mb-4 group-hover:text-forest transition-colors">{t('about.valueCommunityTitle')}</h3>
                            <p className="text-base text-gray-500 font-light leading-relaxed px-4">
                                {t('about.valueCommunityDesc')}
                            </p>
                        </ScaleIn>
                    </Stagger>
                </div>
            </section>

            {/* Heritage Story - Refined */}
            <section className="py-24 md:py-32 overflow-hidden">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <FadeIn className="relative" direction="left">
                            <div className="absolute -top-8 -left-8 w-full h-full border border-gold/30 rounded-sm -z-10 hidden md:block"></div>
                            <img
                                src="/images/membership/Stasiun Malabar.webp"
                                alt="Mount Puntang Heritage"
                                className="w-full h-[500px] md:h-[700px] object-cover rounded-sm shadow-2xl"
                            />
                        </FadeIn>

                        <FadeIn className="space-y-8" direction="right" delay={0.2}>
                            <span className="text-forest text-xs font-medium tracking-[0.2em] uppercase block">{t('about.historyLabel')}</span>
                            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight">
                                {t('about.historyTitle')}
                            </h2>
                            <div className="w-20 h-px bg-gold/60"></div>
                            <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                                <p>
                                    {t('about.historyDesc1')}
                                </p>
                                <p>
                                    {t('about.historyDesc2')}
                                </p>
                                <p>
                                    {t('about.historyDesc3')}
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Sustainability Practice - Refined */}
            <section className="py-24 md:py-32 bg-forest-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="container mx-auto px-6 md:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
                        <span className="text-gold text-xs font-medium tracking-[0.2em] uppercase mb-4 block">{t('about.responsibilityLabel')}</span>
                        <h2 className="font-serif text-4xl md:text-5xl font-light mb-10">
                            {t('about.responsibilityTitle')}
                        </h2>
                        <div className="w-24 h-px bg-gold/40 mx-auto mb-12"></div>
                        <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed mb-20">
                            {t('about.responsibilityDesc')}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                            <div className="border border-white/10 p-10 backdrop-blur-sm hover:bg-white/5 transition-colors duration-300 group">
                                <h4 className="font-serif text-4xl font-light mb-4 text-gold group-hover:scale-110 transition-transform duration-300">100%</h4>
                                <p className="text-white/70 text-xs uppercase tracking-[0.2em] font-medium">{t('about.statRenewable')}</p>
                            </div>
                            <div className="border border-white/10 p-10 backdrop-blur-sm hover:bg-white/5 transition-colors duration-300 group">
                                <h4 className="font-serif text-4xl font-light mb-4 text-gold group-hover:scale-110 transition-transform duration-300">{t('about.stats.zero')}</h4>
                                <p className="text-white/70 text-xs uppercase tracking-[0.2em] font-medium">{t('about.statWaste')}</p>
                            </div>
                            <div className="border border-white/10 p-10 backdrop-blur-sm hover:bg-white/5 transition-colors duration-300 group">
                                <h4 className="font-serif text-4xl font-light mb-4 text-gold group-hover:scale-110 transition-transform duration-300">{t('about.stats.local')}</h4>
                                <p className="text-white/70 text-xs uppercase tracking-[0.2em] font-medium">{t('about.statCommunity')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA - Refined */}
            <section className="py-24 md:py-32 bg-white">
                <FadeIn className="container mx-auto px-6 text-center">
                    <h2 className="font-serif text-4xl md:text-6xl text-gray-900 mb-8">
                        {t('about.ctaTitle')}
                    </h2>
                    <div className="w-24 h-px bg-gold/60 mx-auto mb-10"></div>
                    <p className="text-gray-600 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                        {t('about.ctaDesc')}
                    </p>
                    <button
                        onClick={handleBookingClick}
                        className="inline-flex items-center gap-4 bg-forest-dark text-white px-12 py-5 text-sm uppercase tracking-[0.2em] font-medium hover:bg-forest transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        {t('nav.bookNow')}
                    </button>
                </FadeIn>
            </section>

            <StickyBookingCTA onBookClick={handleBookingClick} />
        </div>
    );
}
