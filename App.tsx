

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRoute } from './hooks/useRouter';
import {
  Menu, X, MapPin, Star,
  ArrowRight, Mountain,
  MessageCircle, Search, Calendar, CheckCircle
} from 'lucide-react';
import { Language } from './types';
import { TRANSLATIONS, VILLAS, REVIEWS, EXPERIENCES } from './constants';
import BookingForm from './components/BookingForm';
import { LanguageSwitcher } from './components/ui/LanguageSwitcher';
import { HomePage } from './HomePage';
import { Footer } from './components/ui/Footer';

// Lazy load other pages
const VillasPage = React.lazy(() => import('./components/VillasPage'));
const RestoPage = React.lazy(() => import('./components/RestoPage'));
const FacilityPage = React.lazy(() => import('./components/FacilityPage'));
const GalleryPage = React.lazy(() => import('./GalleryPage').then(module => ({ default: module.GalleryPage })));
const VillaDetailPage = React.lazy(() => import('./VillaDetailPage').then(module => ({ default: module.VillaDetailPage })));
const OffersPage = React.lazy(() => import('./OffersPage').then(module => ({ default: module.OffersPage })));
const AboutPage = React.lazy(() => import('./AboutPage').then(module => ({ default: module.AboutPage })));
const LocationPage = React.lazy(() => import('./LocationPage').then(module => ({ default: module.LocationPage })));
const ContactPage = React.lazy(() => import('./ContactPage').then(module => ({ default: module.ContactPage })));
const FAQPage = React.lazy(() => import('./FAQPage').then(module => ({ default: module.FAQPage })));
const BlogPage = React.lazy(() => import('./BlogPage').then(module => ({ default: module.BlogPage })));
const SustainabilityPage = React.lazy(() => import('./SustainabilityPage').then(module => ({ default: module.SustainabilityPage })));
const MembershipPage = React.lazy(() => import('./components/MembershipPage').then(module => ({ default: module.MembershipPage })));
const PrivacyPage = React.lazy(() => import('./PrivacyPage').then(module => ({ default: module.PrivacyPage })));
const TermsPage = React.lazy(() => import('./TermsPage').then(module => ({ default: module.TermsPage })));

function App() {
  const { t, i18n } = useTranslation();
  const { view, navigate, params, lang } = useRoute('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedBookingVilla, setSelectedBookingVilla] = useState('');
  const [selectedBookingPackage, setSelectedBookingPackage] = useState('');

  // Scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen to navigation events from Header
  useEffect(() => {
    const handleNavigationEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      const page = customEvent.detail as typeof view;
      console.log('Navigation event received:', page);
      navigate(page);
      setIsMobileMenuOpen(false);
    };

    const handleVillaDetailNav = (e: Event) => {
      const customEvent = e as CustomEvent;
      const villaId = customEvent.detail as string;
      navigate('villa-detail', { id: villaId });
    };

    window.addEventListener('navigate', handleNavigationEvent);
    window.addEventListener('navigate-villa', handleVillaDetailNav);

    return () => {
      window.removeEventListener('navigate', handleNavigationEvent);
      window.removeEventListener('navigate-villa', handleVillaDetailNav);
    };
  }, [navigate]);

  // Old translation helper removed - now using i18next

  const handleNavClick = (page: 'home' | 'villas' | 'resto' | 'facility' | 'gallery' | 'membership', sectionId?: string) => {
    navigate(page);
    setIsMobileMenuOpen(false);
    if (sectionId) {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToBooking = (villaId?: string, packageId?: string) => {
    if (villaId) setSelectedBookingVilla(villaId);
    if (packageId) setSelectedBookingPackage(packageId);
    navigate('home');
    setTimeout(() => {
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const renderContent = () => {
    console.log('Current view state:', view);
    switch (view) {
      case 'villas':
        return (
          <VillasPage
            lang={lang}
            onBook={(id) => scrollToBooking(id)}
            onNavigateToActivity={() => handleNavClick('facility')}
            onNavigateToGallery={() => handleNavClick('home', 'gallery')}
          />
        );
      case 'resto':
        return (
          <RestoPage
            lang={lang}
            onNavigateToActivity={() => handleNavClick('facility')}
            onNavigateToGallery={() => handleNavClick('home', 'gallery')}
          />
        );
      case 'facility':
        return (
          <FacilityPage
            onNavigateToGallery={() => handleNavClick('home', 'gallery')}
          />
        );
      case 'villa-detail':
        return <VillaDetailPage villaId={params.id || ''} />;
      case 'gallery':
        return <GalleryPage />;
      case 'offers':
        return <OffersPage onBookOffer={(id) => scrollToBooking(id)} />;
      case 'membership':
        return <MembershipPage />;
      case 'about':
        return <AboutPage />;
      case 'location':
        return <LocationPage />;
      case 'contact':
        return <ContactPage />;
      case 'faq':
        return <FAQPage />;
      case 'blog':
        return <BlogPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'terms':
        return <TermsPage />;
      case 'home':
        return <HomePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="font-sans text-forest-dark bg-white overflow-x-hidden selection:bg-forest-green selection:text-white">

      {/* --- HEADER --- */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || view !== 'home' ? 'bg-white shadow-soft py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNavClick('home')}>
            <div className={`w-10 h-10 border flex items-center justify-center rounded-sm transition-colors ${isScrolled || view !== 'home' ? 'border-forest-dark text-forest-dark' : 'border-white text-white'}`}>
              <Mountain size={20} />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-lg tracking-wide uppercase ${isScrolled || view !== 'home' ? 'text-forest-dark' : 'text-white'}`}>Taman Wisata Bougenville</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { id: 'villas', key: 'nav.villas' },
              { id: 'resto', key: 'nav.resto' },
              { id: 'facility', key: 'nav.facility' },
              { id: 'gallery', key: 'nav.gallery' },
              { id: 'offers', key: 'nav.offers' },
              { id: 'membership', key: 'nav.membership' },
              { id: 'about', key: 'nav.about' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id as any)}
                className={`text-xs font-bold uppercase tracking-widest hover:text-gold transition-colors ${isScrolled || view !== 'home' ? 'text-forest-dark' : 'text-white/90'
                  } ${view === item.id ? 'text-gold' : ''}`}
              >
                {t(item.key)}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <LanguageSwitcher
              isScrolled={isScrolled} isHomePage={view === 'home'}
            />
            <button
              onClick={() => scrollToBooking()}
              className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all ${isScrolled || view !== 'home'
                ? 'bg-forest-dark text-white hover:bg-forest-green'
                : 'bg-white text-forest-dark hover:bg-gray-100'
                }`}
            >
              {t('nav.bookNow')}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 ${isScrolled || view !== 'home' ? 'text-forest-dark' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-forest-dark text-white pt-24 transition-transform duration-500 lg:hidden overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ paddingBottom: 'max(env(safe-area-inset-bottom, 24px), 24px)' }}
      >
        {/* Mobile Language Switcher at Top */}
        <div className="px-6 pb-6 border-b border-white/10 mb-6">
          <p className="text-white/60 text-[10px] uppercase tracking-[0.2em] mb-4 font-medium">Select Language</p>
          <div className="flex gap-3">
            {['id', 'en', 'zh', 'de'].map((langCode) => {
              const labels: Record<string, { code: string; name: string }> = {
                id: { code: 'ID', name: 'Bahasa' },
                en: { code: 'EN', name: 'English' },
                zh: { code: 'ZH', name: '中文' },
                de: { code: 'DE', name: 'Deutsch' }
              };
              const currentLang = i18n.language?.split('-')[0] || 'id';
              const isActive = currentLang === langCode;
              return (
                <button
                  key={langCode}
                  onClick={() => {
                    i18n.changeLanguage(langCode);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex flex-col items-center px-4 py-3 rounded-sm transition-all ${isActive
                    ? 'bg-gold/10 border border-gold/40'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
                    }`}
                >
                  <span className={`text-sm font-bold tracking-wide ${isActive ? 'text-gold' : 'text-white'}`}>
                    {labels[langCode].code}
                  </span>
                  <span className={`text-[10px] mt-0.5 ${isActive ? 'text-gold/70' : 'text-white/50'}`}>
                    {labels[langCode].name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <nav className="flex flex-col gap-4 text-2xl font-serif font-bold px-6">
          <button onClick={() => handleNavClick('home')} className="text-left hover:text-gold transition-colors py-2">{t('nav.home')}</button>
          <button onClick={() => handleNavClick('villas')} className="text-left hover:text-gold transition-colors py-2">{t('nav.villas')}</button>
          <button onClick={() => { navigate('resto'); setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-left hover:text-gold transition-colors py-2">{t('nav.resto')}</button>
          <button onClick={() => handleNavClick('facility')} className="text-left hover:text-gold transition-colors py-2">{t('nav.facility')}</button>
          <button onClick={() => handleNavClick('gallery')} className="text-left hover:text-gold transition-colors py-2">{t('nav.gallery')}</button>
          <button onClick={() => { navigate('offers'); setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-left hover:text-gold transition-colors py-2">{t('nav.offers')}</button>
          <button onClick={() => handleNavClick('membership')} className="text-left hover:text-gold transition-colors py-2">{t('nav.membership')}</button>
          <button onClick={() => { navigate('about'); setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-left hover:text-gold transition-colors py-2">{t('nav.about')}</button>
        </nav>

        <div className="mt-6 pt-6 px-6">
          <button
            onClick={() => { scrollToBooking(); setIsMobileMenuOpen(false); }}
            className="w-full bg-gold text-forest-dark py-4 font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors rounded-sm"
          >
            {t('nav.bookNow')}
          </button>
        </div>
      </div>

      {/* --- CONTENT RENDER --- */}
      <main className="min-h-screen">
        <React.Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-cream">
            <div className="animate-pulse flex flex-col items-center">
              <Mountain size={48} className="text-gold mb-4" />
              <div className="h-2 w-32 bg-gold/20 rounded-full overflow-hidden">
                <div className="h-full bg-gold w-1/2 animate-[shimmer_1s_infinite]"></div>
              </div>
            </div>
          </div>
        }>
          {renderContent()}
        </React.Suspense>
      </main>

      {/* --- FOOTER --- */}
      {/* --- FOOTER --- */}
      <Footer navigate={navigate} />

      {/* Floating WA Button */}
      <a
        href="https://wa.me/6281224178271"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-32 right-4 lg:bottom-8 lg:right-8 z-50 bg-whatsapp text-white p-3 lg:p-4 rounded-full shadow-strong hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <MessageCircle size={24} />
      </a>

    </div>
  );
}

export default App;
