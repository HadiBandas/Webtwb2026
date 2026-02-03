
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Leaf, ChefHat, Clock, MapPin, Phone, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { RESTO_MENU } from '../constants';
import { FadeIn, Stagger, ScaleIn } from './ui/animations';
import { SEO } from './SEO';
import { optimizeImage } from '../utils/imageOptimizer';

interface RestoPageProps {
  lang: Language;
  onNavigateToActivity: () => void;
  onNavigateToGallery: () => void;
}

const RestoPage: React.FC<RestoPageProps> = ({ lang, onNavigateToActivity, onNavigateToGallery }) => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language?.split('-')[0] || 'id') as 'id' | 'en' | 'zh' | 'de';

  const getContent = (content: any) => {
    if (typeof content === 'string') return content;
    return content[currentLang] || content['en'] || content['id'] || '';
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Bale Puntang Restaurant | Farm to Table Dining in Bandung"
        description="Experience authentic Sundanese cuisine with a modern twist at Bale Puntang. Farm-to-table dining amidst the pine forests of Mount Puntang."
        schema={{
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "Bale Puntang Restaurant",
          "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070",
          "priceRange": "$$",
          "servesCuisine": "Sundanese, Indonesian",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jl. Gn. Puntang",
            "addressLocality": "Bandung",
            "addressRegion": "West Java",
            "postalCode": "40228",
            "addressCountry": "ID"
          },
          "telephone": "+628119102003",
          "url": "https://bougenville.com/resto"
        }}
      />

      {/* Cinematic Hero Banner */}
      <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={optimizeImage("/images/resto/fullmenu.webp", 1920)}
            alt="Bale Puntang Restaurant"
            className="w-full h-full object-cover animate-ken-burns"
            width="1920"
            height="1080"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
        </div>

        {/* Content */}
        <FadeIn className="relative z-10 text-center px-6">
          <div className="inline-block border border-white/40 px-6 py-2 mb-8 backdrop-blur-sm">
            <span className="text-white/90 text-xs font-bold uppercase tracking-[0.3em]">{t('resto.heroLabel')}</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-white mb-8 tracking-tight leading-tight">
            {t('resto.heroTitle')}
          </h1>
          <p className="text-white/90 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
            {t('resto.heroSubtitle')}
          </p>
        </FadeIn>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Story Section 1 - Riverside Setting */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn className="order-2 lg:order-1 relative" direction="left">
              <div className="absolute -bottom-8 -left-8 w-full h-full border border-gold/30 rounded-sm -z-10 hidden md:block"></div>
              <img
                src={optimizeImage("/images/resto/BP-Luar.webp", 800)}
                alt="Bale Puntang Restaurant Interior"
                className="w-full h-[500px] md:h-[700px] object-cover rounded-sm shadow-2xl"
                loading="lazy"
                width="800"
                height="700"
              />
            </FadeIn>
            <FadeIn className="order-1 lg:order-2 space-y-8" direction="right">
              <span className="text-forest text-xs font-medium tracking-[0.2em] uppercase block">{t('resto.story1Label')}</span>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                {t('resto.story1Title')}
              </h2>
              <div className="w-20 h-px bg-gold/60"></div>
              <p className="text-gray-600 leading-loose text-lg font-light">
                {t('resto.story1Desc')}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Story Section 2 - Cuisine Philosophy */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn className="space-y-8" direction="left">
              <span className="text-forest text-xs font-medium tracking-[0.2em] uppercase block">{t('resto.story2Label')}</span>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                {t('resto.story2Title')}
              </h2>
              <div className="w-20 h-px bg-gold/60"></div>
              <p className="text-gray-600 leading-loose text-lg font-light">
                {t('resto.story2Desc')}
              </p>
            </FadeIn>
            <FadeIn className="relative" direction="right">
              <div className="absolute -top-8 -right-8 w-full h-full border border-gold/30 rounded-sm -z-10 hidden md:block"></div>
              <img
                src={optimizeImage("/images/resto/woku.webp", 800)}
                alt="Fresh Local Ingredients"
                className="w-full h-[500px] md:h-[700px] object-cover rounded-sm shadow-2xl"
                loading="lazy"
                width="800"
                height="700"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Story Section 3 - Venue Highlight */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn className="order-2 lg:order-1 relative" direction="left">
              <div className="absolute -bottom-8 -left-8 w-full h-full border border-gold/30 rounded-sm -z-10 hidden md:block"></div>
              <img
                src={optimizeImage("/images/resto/Facade.webp", 800)}
                alt="Bale Puntang Evening Ambiance"
                className="w-full h-[500px] md:h-[700px] object-cover rounded-sm shadow-2xl"
                loading="lazy"
                width="800"
                height="700"
              />
            </FadeIn>
            <FadeIn className="order-1 lg:order-2 space-y-8" direction="right">
              <span className="text-forest text-xs font-medium tracking-[0.2em] uppercase block">{t('resto.story3Label')}</span>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                {t('resto.story3Title')}
              </h2>
              <div className="w-20 h-px bg-gold/60"></div>
              <p className="text-gray-600 leading-loose text-lg font-light">
                {t('resto.story3Desc')}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Signature Dishes - Minimal Grid */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <FadeIn className="text-center mb-20">
              <span className="text-forest text-xs font-medium tracking-[0.2em] uppercase mb-4 block">{t('resto.menuTitle')}</span>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-gray-900 mb-8">Signature Dishes</h2>
              <div className="w-24 h-px bg-gold/60 mx-auto"></div>
            </FadeIn>

            <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              {RESTO_MENU.map((item, index) => (
                <div key={item.id} className="text-center group cursor-pointer" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                  <div className="mb-8 overflow-hidden rounded-sm shadow-lg">
                    <img
                      src={optimizeImage(item.image, 600)}
                      alt={item.name}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      width="600"
                      height="320"
                    />
                  </div>
                  <h3 className="font-serif text-2xl font-light text-gray-900 mb-3 group-hover:text-forest transition-colors">{item.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 italic font-light px-4 min-h-[40px]">
                    {getContent(item.description)}
                  </p>
                  <p className="text-gray-900 font-medium tracking-wide">
                    Rp {item.price.toLocaleString('id-ID')}
                  </p>
                </div>
              ))}
            </Stagger>

            {/* CTA to full menu */}
            <FadeIn className="text-center mt-20" delay={0.2}>
              <p className="text-gray-600 text-base italic font-light mb-6">
                {t('resto.cta.discover')}
              </p>
              <a
                href="https://wa.me/628119102003?text=Halo, saya ingin melihat menu lengkap Bale Puntang"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border-b border-gray-900 pb-1 text-gray-900 text-sm uppercase tracking-[0.2em] hover:text-forest hover:border-forest transition-colors group"
              >
                <span>{t('resto.cta.viewMenu')}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values - Farm to Table */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-12 md:gap-24 mb-16">
              <div className="flex flex-col items-center gap-6 group">
                <div className="w-20 h-20 flex items-center justify-center border border-gray-100 rounded-full group-hover:border-forest transition-colors duration-300">
                  <Leaf size={32} className="text-gray-400 group-hover:text-forest transition-colors" />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500 group-hover:text-forest transition-colors">{t('resto.values.organic')}</span>
              </div>
              <div className="flex flex-col items-center gap-6 group">
                <div className="w-20 h-20 flex items-center justify-center border border-gray-100 rounded-full group-hover:border-forest transition-colors duration-300">
                  <ChefHat size={32} className="text-gray-400 group-hover:text-forest transition-colors" />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500 group-hover:text-forest transition-colors">{t('resto.values.artisan')}</span>
              </div>
              <div className="flex flex-col items-center gap-6 group">
                <div className="w-20 h-20 flex items-center justify-center border border-gray-100 rounded-full group-hover:border-forest transition-colors duration-300">
                  <MapPin size={32} className="text-gray-400 group-hover:text-forest transition-colors" />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500 group-hover:text-forest transition-colors">{t('resto.values.local')}</span>
              </div>
            </div>
            <h3 className="font-serif text-3xl text-gray-900 mb-6">{t('resto.values.title')}</h3>
            <p className="text-gray-600 leading-loose text-lg max-w-2xl mx-auto font-light">
              {t('resto.values.desc')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Reservation Info */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:-translate-y-1 transition-transform duration-300">
                  <Clock size={24} className="text-gray-400 group-hover:text-forest transition-colors" />
                </div>
                <h4 className="font-serif text-xl text-gray-900 mb-3">{t('resto.reservation.hoursTitle')}</h4>
                <p className="text-gray-600 text-sm mb-1">{t('resto.reservation.day')}</p>
                <p className="text-gray-900 font-medium">08:00 - 22:00</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:-translate-y-1 transition-transform duration-300">
                  <Phone size={24} className="text-gray-400 group-hover:text-forest transition-colors" />
                </div>
                <h4 className="font-serif text-xl text-gray-900 mb-3">{t('resto.reservation.reservationTitle')}</h4>
                <a
                  href="tel:+628119102003"
                  className="text-gray-600 text-sm hover:text-forest block mb-1 transition-colors"
                >
                  +62 811 910 2003
                </a>
                <a
                  href="https://wa.me/628119102003?text=Halo, saya ingin reservasi meja di Bale Puntang"
                  target="_blank"
                  rel="noreferrer"
                  className="text-forest text-sm font-medium hover:underline"
                >
                  WhatsApp Booking
                </a>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:-translate-y-1 transition-transform duration-300">
                  <MapPin size={24} className="text-gray-400 group-hover:text-forest transition-colors" />
                </div>
                <h4 className="font-serif text-xl text-gray-900 mb-3">{t('resto.reservation.locationTitle')}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Jl. Gn. Puntang, Cangkuang<br />
                  Kabupaten Bandung, Jawa Barat
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-white">
        <FadeIn className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-gray-900 mb-8">
            {t('resto.cta.title')}
          </h2>
          <div className="w-24 h-px bg-gold/60 mx-auto mb-10"></div>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto font-light text-lg">
            {t('resto.cta.subtitle')}
          </p>
          <a
            href="https://wa.me/628119102003?text=Halo Bale Puntang, saya ingin reservasi meja"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-4 bg-gray-900 text-white px-12 py-5 text-sm uppercase tracking-[0.2em] font-medium hover:bg-forest transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            {t('resto.cta.button')}
          </a>
        </FadeIn>
      </section>
    </div>
  );
};

export default RestoPage;
