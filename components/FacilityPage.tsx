import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, MapPin, Compass } from 'lucide-react';
import { ACTIVITY_CATEGORIES } from '../constants';
import { PageHero } from './ui/PageHero';
import { SEOHead } from './ui/SEOHead';
import { StructuredData } from './ui/StructuredData';
import { trackPageView } from '../utils/analytics';

interface FacilityPageProps {
  onNavigateToGallery: () => void;
}

const FacilityPage: React.FC<FacilityPageProps> = ({ onNavigateToGallery }) => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language?.split('-')[0] || 'id') as 'id' | 'en' | 'zh' | 'de';

  const getContent = (content: any) => {
    if (typeof content === 'string') return content;
    return content[lang] || content['en'] || content['id'] || '';
  };

  useEffect(() => {
    trackPageView('/facility', 'Facilities | Taman Wisata Bougenville');
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title={t('facility.title') + ' | Taman Wisata Bougenville'}
        description={t('facility.subtitle')}
        canonical="https://tamanwisatabougenville.com/facility"
      />
      <StructuredData
        type="CollectionPage"
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Activities & Facilities at Taman Wisata Bougenville",
          "description": "Collection of outdoor activities and facilities available at the resort.",
          "url": "https://tamanwisatabougenville.com/facility",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": ACTIVITY_CATEGORIES.flatMap(category =>
              category.items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Thing",
                  "name": getContent(item.title),
                  "description": getContent(item.description),
                  "image": item.image
                }
              }))
            )
          }
        }}
      />

      {/* Hero Section */}
      <PageHero
        title={t('facility.title')}
        subtitle={t('facility.subtitle')}
        backgroundImage="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070"
        overlay="dark"
      />

      {/* Categories Loop */}
      <div className="flex flex-col gap-0">
        {ACTIVITY_CATEGORIES.map((category, index) => (
          <section key={category.id} className="py-24 md:py-32 odd:bg-white even:bg-gray-50">
            <div className="container mx-auto px-6 md:px-8">

              {/* Category Header */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-16 md:mb-24">
                <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} animate-fade-in-up`}>
                  <div className="relative overflow-hidden rounded-sm shadow-2xl group">
                    <img
                      src={category.heroImage}
                      alt={getContent(category.title)}
                      className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                  </div>
                </div>

                <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} space-y-6 animate-fade-in-up delay-100`}>
                  <span className="text-forest text-xs font-medium tracking-[0.2em] uppercase block">{t('facility.experience')}</span>
                  <h2 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight">
                    {getContent(category.title)}
                  </h2>
                  <div className="w-20 h-px bg-gold/60"></div>
                  <p className="text-xl text-gray-500 font-light leading-relaxed">
                    {getContent(category.subtitle)}
                  </p>
                  <p className="text-gray-600 text-base leading-loose font-light">
                    {getContent(category.description)}
                  </p>
                </div>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
                {category.items.map((item, idx) => (
                  <div key={idx} className="group cursor-default animate-fade-in-up" style={{ animationDelay: `${(idx + 2) * 100}ms` }}>
                    <div className="overflow-hidden mb-6 h-64 bg-gray-200 rounded-sm shadow-md">
                      <img
                        src={item.image}
                        alt={getContent(item.title)}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="font-serif text-2xl text-gray-900 mb-3 group-hover:text-forest transition-colors">
                      {getContent(item.title)}
                    </h3>
                    <p className="text-gray-500 font-light leading-relaxed text-sm">
                      {getContent(item.description)}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </section>
        ))}
      </div>

      {/* Map Concept / Location */}
      <section className="py-24 md:py-32 bg-forest-dark text-white text-center relative overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10 animate-fade-in-up">
          <div className="w-20 h-20 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Compass className="w-10 h-10 text-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 tracking-wide">{t('facility.map.title')}</h2>
          <p className="text-white/80 font-light max-w-2xl mx-auto mb-12 leading-relaxed text-lg">
            {t('facility.map.desc')}
          </p>
          <button
            onClick={() => window.open('https://maps.google.com/?q=-7.1475,107.5542&z=15', '_blank')}
            className="inline-flex items-center gap-3 border border-white text-white px-10 py-4 text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-forest-dark transition-all duration-300"
          >
            <span>{t('facility.map.button')}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Footer Navigation Bars */}
      <div className="bg-gray-100 border-t border-gray-200">
        <button
          onClick={onNavigateToGallery}
          className="w-full container mx-auto px-6 py-12 flex items-center justify-between group hover:bg-gray-200/50 transition-colors"
        >
          <div className="text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 block">{t('facility.nav.next')}</span>
            <span className="font-serif text-2xl md:text-3xl text-gray-900 group-hover:text-forest transition-colors">{t('facility.nav.gallery')}</span>
          </div>
          <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-forest group-hover:bg-forest transition-all">
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default FacilityPage;
