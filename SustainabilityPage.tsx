import React from 'react';
import { useTranslation } from 'react-i18next';
import { Leaf, Droplets, Users, Recycle, Sun, Heart } from 'lucide-react';
import { SEOHead } from './components/ui/SEOHead';
import { Footer } from './components/ui/Footer';

interface SustainabilityPageProps {
    navigate: (page: string) => void;
}

export function SustainabilityPage({ navigate }: SustainabilityPageProps) {
    const { t } = useTranslation();

    const pillars = [
        {
            icon: Leaf,
            key: "conservation",
            color: "text-forest"
        },
        {
            icon: Droplets,
            key: "water",
            color: "text-blue-500"
        },
        {
            icon: Recycle,
            key: "waste",
            color: "text-amber-600"
        },
        {
            icon: Users,
            key: "community",
            color: "text-gold"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <SEOHead
                title={t('sustainability.seo.title')}
                description={t('sustainability.seo.description')}
                keywords={t('sustainability.seo.keywords')}
            />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=2574&auto=format&fit=crop"
                        alt="Nature Conservation"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                </div>
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white">
                    <span className="block text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">
                        {t('sustainability.hero.label')}
                    </span>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                        {t('sustainability.hero.title')}
                    </h1>
                    <p className="text-lg md:text-xl font-light opacity-90 leading-relaxed max-w-2xl mx-auto">
                        {t('sustainability.hero.description')}
                    </p>
                </div>
            </section>

            {/* Message Section */}
            <section className="py-24 px-6 md:px-12 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <Heart size={48} className="text-forest mx-auto mb-8" strokeWidth={1} />
                    <h2 className="font-serif text-3xl md:text-4xl text-forest-dark mb-8">
                        "{t('sustainability.message.quote')}"
                    </h2>
                    <p className="text-gray-600 leading-loose text-lg font-light">
                        {t('sustainability.message.body')}
                    </p>
                </div>
            </section>

            {/* Pillars Grid */}
            <section className="py-24 px-6 md:px-12 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-forest text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
                            {t('sustainability.pillars.label')}
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl text-forest-dark">
                            {t('sustainability.pillars.title')}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {pillars.map((pillar) => {
                            const Icon = pillar.icon;
                            return (
                                <div key={pillar.key} className="bg-white p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group">
                                    <div className={`w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${pillar.color}`}>
                                        <Icon size={28} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="font-serif text-2xl text-gray-900 mb-4">
                                        {t(`sustainability.pillars.${pillar.key}.title`)}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed font-light">
                                        {t(`sustainability.pillars.${pillar.key}.desc`)}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* No Plastic Initiative */}
            <section className="py-24 px-6 md:px-12 bg-forest-dark text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                    <Recycle size={400} />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <span className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                            {t('sustainability.plastic.label')}
                        </span>
                        <h2 className="font-serif text-3xl md:text-5xl mb-6">
                            {t('sustainability.plastic.title')}
                        </h2>
                        <p className="text-white/80 text-lg font-light leading-relaxed mb-8">
                            {t('sustainability.plastic.description')}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/10 rounded-full text-gold">
                                    <Droplets size={20} />
                                </div>
                                <span className="font-light">{t('sustainability.plastic.item1')}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/10 rounded-full text-gold">
                                    <Sun size={20} />
                                </div>
                                <span className="font-light">{t('sustainability.plastic.item2')}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full max-w-md">
                        <div className="aspect-square rounded-2xl overflow-hidden bg-gray-800 shadow-2xl border border-white/10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            {/* Placeholder for bottle/amenity image */}
                            <img
                                src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=2274&auto=format&fit=crop"
                                alt="Eco Friendly Amenities"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer navigate={navigate} />
        </div>
    );
}
