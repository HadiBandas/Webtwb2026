import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Users, BedDouble, ArrowRight, Star, Home, Sparkles, TreePine, HeartHandshake, ArrowLeft, Check, Search, Loader, Grid3x3 } from 'lucide-react';
import { Villa } from '../types';
import { VILLAS } from '../constants';
import { SEOHead } from './ui/SEOHead';
import { trackPageView } from '../utils/analytics';

interface VillasPageProps {
  lang: 'id' | 'en' | 'zh';
  onBook: () => void;
  onNavigateToActivity: () => void;
  onNavigateToGallery: () => void;
}

// Define Cluster Interface
interface Cluster {
  id: string;
  name: string;
  description: { id: string; en: string; zh: string; de: string };
  image: string;
  type: 'direct' | 'group';
  villaId?: string; // For direct type
  filterFn?: (villa: any) => boolean; // For group type
}

// Helper to parse capacity string to number
const parseCapacity = (capacityStr: string): number => {
  const match = capacityStr.match(/(\d+)/);
  return match ? parseInt(match[0], 10) : 0;
};



const VillasPage: React.FC<VillasPageProps> = ({ lang: propLang, onBook, onNavigateToActivity, onNavigateToGallery }) => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language?.split('-')[0] || 'id') as 'id' | 'en' | 'zh' | 'de';

  // Track page view on mount
  useEffect(() => {
    trackPageView('/villas', 'Villas | Taman Wisata Bougenville');
  }, []);

  const getContent = (content: any) => {
    if (typeof content === 'string') return content;
    return content[lang] || content['en'] || content['id'] || '';
  };

  const [activeTab, setActiveTab] = useState<'all' | 'luxury' | 'log_home' | 'couple'>('all');
  const [activeCluster, setActiveCluster] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Use static data from constants instead of API
  const villasData = VILLAS;


  // Define Clusters Configuration
  const clusters: Record<string, Cluster[]> = {
    luxury: [
      {
        id: 'forest-house',
        name: 'Forest House',
        description: {
          id: 'Villa termewah dengan pemandangan hutan pinus.',
          en: 'Most luxurious villa with pine forest views.',
          zh: '拥有松林景观的最豪华别墅。',
          de: 'Luxuriöseste Villa mit Blick auf den Kiefernwald.'
        },
        image: '/images/fh-hero.webp',
        type: 'direct',
        villaId: 'forest-house'
      },
      {
        id: 'mooi-lake',
        name: 'Mooi Lake House',
        description: {
          id: 'Villa tepi danau dengan perahu privat.',
          en: 'Lakeside villa with private boat.',
          zh: '带私人船只的湖畔别墅。',
          de: 'Villa am See mit privatem Boot.'
        },
        image: '/images/mlh-hero.webp',
        type: 'direct',
        villaId: 'mooi-lake'
      },
      {
        id: 'dandenong',
        name: 'Dandenong Villas',
        description: {
          id: 'Koleksi villa American Farmhouse (Olinda, Emerald, Selby).',
          en: 'American Farmhouse collection (Olinda, Emerald, Selby).',
          zh: '美式农舍系列（Olinda, Emerald, Selby）。',
          de: 'Amerikanische Farmhouse-Kollektion (Olinda, Emerald, Selby).'
        },
        image: '/images/emerald-atas-hero.webp',
        type: 'group',
        filterFn: (v) => v.cluster === 'Dandenong Villas'
      },
      {
        id: 'provincial',
        name: 'Provincial Villas',
        description: {
          id: 'Villa gaya pedesaan Prancis (Gordes, Roussillon, Lourmarin).',
          en: 'French countryside style villas (Gordes, Roussillon, Lourmarin).',
          zh: '法国乡村风格别墅（Gordes, Roussillon, Lourmarin）。',
          de: 'Villen im französischen Landhausstil (Gordes, Roussillon, Lourmarin).'
        },
        image: '/images/villas/roussillon/DSC07004WEB.jpg',
        type: 'group',
        filterFn: (v) => v.cluster === 'Provincial Villas'
      },
      {
        id: 'riverside',
        name: 'Riverside Villas',
        description: {
          id: 'Villa tepi sungai (Hana, Blomst, Fiore).',
          en: 'Riverside villas (Hana, Blomst, Fiore).',
          zh: '河畔别墅（Hana, Blomst, Fiore）。',
          de: 'Villen am Flussufer (Hana, Blomst, Fiore).'
        },
        image: '/images/villas/riverside-hana/Rsv-11kompres.WEB.jpg',
        type: 'group',
        filterFn: (v) => v.cluster === 'Riverside Villas'
      }
    ],
    couple: [
      {
        id: 'kampuh-becik-deluxe',
        name: 'Kampuh Becik Deluxe',
        description: {
          id: 'Kabin romantis tipe Deluxe.',
          en: 'Romantic Deluxe type cabins.',
          zh: '浪漫豪华型小屋。',
          de: 'Romantische Deluxe-Hütten.'
        },
        image: '/images/villas/jacaranda/AWB_4595WEB.jpg',
        type: 'group',
        filterFn: (v) => v.badge === 'Deluxe Type'
      },
      {
        id: 'kampuh-becik-executive',
        name: 'Kampuh Becik Executive',
        description: {
          id: 'Kabin romantis tipe Executive dengan akses sungai.',
          en: 'Romantic Executive cabins with river access.',
          zh: '带河流通道的浪漫行政小屋。',
          de: 'Romantische Executive-Hütten mit Flusszugang.'
        },
        image: '/images/villas/agaphantus/agaphantuss.jpgWEB.jpg',
        type: 'group',
        filterFn: (v) => v.badge === 'Executive Type'
      }
    ],
    log_home: [
      {
        id: 'nawa-bumi',
        name: 'Nawa Bumi',
        description: {
          id: 'Kompleks Log Home (Campaka, Suren, Pinus, Puspa, Meranti).',
          en: 'Log Home complex (Campaka, Suren, Pinus, Puspa, Meranti).',
          zh: '原木家居综合体（Campaka, Suren, Pinus, Puspa, Meranti）。',
          de: 'Blockhaus-Komplex (Campaka, Suren, Pinus, Puspa, Meranti).'
        },
        image: '/images/villas/villa-pinus/pinus.1WEB.jpg',
        type: 'group',
        filterFn: (v) => v.category === 'log_home'
      }
    ]
  };

  const categories = [
    { id: 'all', icon: Home },
    { id: 'luxury', icon: Sparkles },
    { id: 'log_home', icon: TreePine },
    { id: 'couple', icon: HeartHandshake },
  ];

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tabId as any);
      setActiveCluster(null); // Reset cluster on tab change
      setIsTransitioning(false);
    }, 300);
  };

  const handleClusterClick = (cluster: Cluster) => {
    if (cluster.type === 'direct' && cluster.villaId) {
      // Navigate directly to villa detail
      const event = new CustomEvent('navigate-villa', { detail: cluster.villaId });
      window.dispatchEvent(event);
    } else {
      // Enter group view
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveCluster(cluster.id);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handleBackToCategories = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCluster(null);
      setIsTransitioning(false);
    }, 300);
  };


  // Helper to get capacity range for a cluster
  const getCapacityRange = (cluster: Cluster): string => {
    let minCap = Infinity;
    let maxCap = -Infinity;

    if (cluster.type === 'direct' && cluster.villaId) {
      const villa = villasData.find(v => v.id === cluster.villaId);
      if (villa) {
        // Try to parse range if string contains "-" e.g. "13-16 orang"
        const rangeMatch = villa.capacity.match(/(\d+)\s*-\s*(\d+)/);
        if (rangeMatch) {
          return `${rangeMatch[1]} - ${rangeMatch[2]} Pax`;
        }
        return `${parseCapacity(villa.capacity)} Pax`;
      }
    } else if (cluster.type === 'group' && cluster.filterFn) {
      const matchingVillas = villasData.filter(v => cluster.filterFn!(v));
      matchingVillas.forEach(v => {
        const cap = parseCapacity(v.capacity);
        if (cap < minCap) minCap = cap;
        if (cap > maxCap) maxCap = cap;
      });
    }

    if (minCap === Infinity || maxCap === -Infinity) return '';
    if (minCap === maxCap) return `${minCap} Pax`;
    return `${minCap} - ${maxCap} Pax`;
  };

  // Determine what to render
  const renderContent = () => {
    // 1. Cluster View (Drill-down)
    if (activeCluster) {
      // Find the active cluster object to get the filter function
      let currentClusterObj: Cluster | undefined;
      for (const key in clusters) {
        const found = clusters[key].find(c => c.id === activeCluster);
        if (found) {
          currentClusterObj = found;
          break;
        }
      }

      const clusterVillas = currentClusterObj?.filterFn
        ? villasData.filter(v => currentClusterObj.filterFn!(v))
        : [];

      return (
        <div>
          <button
            onClick={handleBackToCategories}
            className="mb-8 flex items-center gap-2 text-gray-500 hover:text-forest transition-colors text-sm uppercase tracking-wider font-medium"
          >
            <ArrowLeft size={16} />
            <span>{t('common.backTo', 'Back to')} {activeTab === 'all' ? t('villa.categories.all', 'All') : t(`villa.categories.${activeTab}`)}</span>
          </button>
          <div className="mb-8">
            <h2 className="text-3xl font-serif text-gray-900 mb-2">{currentClusterObj?.name}</h2>
            <p className="text-gray-500 font-light">{getContent(currentClusterObj?.description)}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {clusterVillas.map(villa => (
              <VillaCard key={villa.id} villa={villa} />
            ))}
          </div>
        </div>
      );
    }

    // 2. Main Category View
    // If 'all', show all clusters from all categories? Or just all villas?
    // User request implies a structured hierarchy. "All" might be messy if we mix clusters and units.
    // Let's make "All" show ALL CLUSTERS.

    let displayClusters: Cluster[] = [];
    let initialClusters: Cluster[] = [];

    if (activeTab === 'all') {
      initialClusters = [
        ...clusters.luxury,
        ...clusters.log_home,
        ...clusters.couple
      ];
    } else {
      initialClusters = clusters[activeTab] || [];
    }

    // Show all clusters
    displayClusters = initialClusters.filter(cluster => {
      if (cluster.type === 'direct' && cluster.villaId) {
        const villa = villasData.find(v => v.id === cluster.villaId);
        return villa ? true : false;
      } else if (cluster.type === 'group' && cluster.filterFn) {
        const matchingVillas = villasData.filter(v => cluster.filterFn!(v));
        return matchingVillas.length > 0;
      }
      return false;
    });

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
        {displayClusters.length > 0 ? (
          displayClusters.map(cluster => {
            const capacityRange = getCapacityRange(cluster);

            return (
              <div
                key={cluster.id}
                onClick={() => handleClusterClick(cluster)}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 cursor-pointer h-full flex flex-col active:scale-[0.98]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={cluster.image}
                    alt={cluster.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-sm shadow-sm backdrop-blur-md ${cluster.type === 'direct' ? 'bg-gold text-white' : 'bg-white/90 text-forest-dark'}`}>
                      {cluster.type === 'direct' ? t('villas.singleUnit', 'Single Unit') : t('villas.collection', 'Collection')}
                    </span>
                  </div>

                  {/* Capacity Badge (Replaces Price) */}
                  <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-sm text-white text-xs font-medium flex items-center gap-2">
                    <Users size={12} />
                    <span>{capacityRange}</span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-3 group-hover:text-forest transition-colors">
                    {cluster.name}
                  </h3>
                  <p className="text-gray-600 font-light text-base leading-loose mb-6 flex-grow">
                    {getContent(cluster.description)}
                  </p>

                  <div className="flex items-center justify-center gap-2 text-forest text-xs uppercase tracking-[0.2em] font-medium group-hover:gap-4 transition-all duration-300">
                    <span>{cluster.type === 'direct' ? t('home.viewDetails') : t('villas.exploreCollection', 'Explore Collection')}</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-500">
            <Search size={48} className="mb-4 text-gray-300" />
            <p className="text-lg font-medium">{t('common.noVillas', 'No villas available')}</p>
          </div>
        )}
      </div>
    );
  };

  const categoryContent = {
    all: {
      title: { id: 'Koleksi Villa Kami', en: 'Our Villa Collection', zh: '我们的别墅系列', de: 'Unsere Villenkollektion' },
      subtitle: { id: 'Temukan Akomodasi Sempurna Anda', en: 'Discover Your Perfect Accommodation', zh: '发现您的完美住宿', de: 'Entdecken Sie Ihre perfekte Unterkunft' },
      description: {
        id: 'Jelajahi koleksi lengkap villa premium kami yang dirancang untuk memberikan pengalaman menginap tak terlupakan.',
        en: 'Explore our complete collection of premium villas designed to provide an unforgettable stay experience.',
        zh: '探索我们旨在提供难忘住宿体验的高级别墅完整系列。',
        de: 'Entdecken Sie unsere komplette Kollektion von Premium-Villen, die für ein unvergessliches Aufenthaltserlebnis konzipiert sind.'
      },
      image: '/images/villas/forest-house/DSC00370WEB.jpg',
    },
    luxury: {
      title: { id: 'Luxury Collection', en: 'Luxury Collection', zh: '豪华系列', de: 'Luxuskollektion' },
      subtitle: { id: 'Kemewahan & Kenyamanan', en: 'Luxury & Comfort', zh: '豪华与舒适', de: 'Luxus & Komfort' },
      description: {
        id: 'Koleksi villa termewah kami dengan fasilitas premium. Termasuk Forest House, Mooi Lake, Dandenong, Provincial, dan Riverside.',
        en: 'Our most luxurious villa collection with premium facilities. Includes Forest House, Mooi Lake, Dandenong, Provincial, and Riverside.',
        zh: '我们最豪华的别墅系列，配备一流的设施。包括森林别墅、莫伊湖、丹德农、普罗旺斯和河畔。',
        de: 'Unsere luxuriöseste Villenkollektion mit erstklassigen Einrichtungen. Beinhaltet Forest House, Mooi Lake, Dandenong, Provincial und Riverside.'
      },
      image: '/images/fh-hero.webp',
    },
    log_home: {
      title: { id: 'Log Cabin', en: 'Log Cabin', zh: '原木小屋', de: 'Blockhütte' },
      subtitle: { id: 'Nuansa Kayu Alami', en: 'Natural Wooden Vibes', zh: '天然木质氛围', de: 'Natürliche Holzatmosphäre' },
      description: {
        id: 'Rasakan kehangatan menginap di villa kayu autentik yang menyatu dengan alam. Cocok untuk keluarga besar.',
        en: 'Experience the warmth of staying in an authentic wooden villa that blends with nature. Perfect for large families.',
        zh: '体验入住与大自然融为一体的正宗木制别墅的温暖。非常适合大家庭。',
        de: 'Erleben Sie die Wärme eines Aufenthalts in einer authentischen Holzvilla, die mit der Natur verschmilzt. Perfekt für große Familien.'
      },
      image: '/images/villas/villa-pinus/pinus-3(1)WEB.jpg',
    },
    couple: {
      title: { id: 'Couples Retreat', en: 'Couples Retreat', zh: '情侣度假', de: 'Pärchenurlaub' },
      subtitle: { id: 'Romantis & Privat', en: 'Romantic & Private', zh: '浪漫与私密', de: 'Romantisch & Privat' },
      description: {
        id: 'Villa intim yang dirancang khusus untuk pasangan. Pilihan tipe Deluxe dan Executive.',
        en: 'Intimate villas designed specifically for couples. Choice of Deluxe and Executive types.',
        zh: '专为情侣设计的私密别墅。豪华型和行政型可供选择。',
        de: 'Intime Villen, die speziell für Paare entworfen wurden. Auswahl an Deluxe- und Executive-Typen.'
      },
      image: '/images/villas/abutilon/AWB_4760WEB.jpg',
    }
  };

  const currentContent = categoryContent[activeTab];

  // SEO Keywords per category - Dynamic targeting
  const seoKeywords = {
    all: t('seo.villasPage.all.keywords'),
    luxury: t('seo.villasPage.luxury.keywords'),
    log_home: t('seo.villasPage.log_home.keywords'),
    couple: t('seo.villasPage.couple.keywords')
  };

  // SEO Titles per category - More specific
  const seoTitles = {
    all: t('seo.villasPage.all.title'),
    luxury: t('seo.villasPage.luxury.title'),
    log_home: t('seo.villasPage.log_home.title'),
    couple: t('seo.villasPage.couple.title')
  };

  // SEO Descriptions per category - Keyword-rich
  const seoDescriptions = {
    all: t('seo.villasPage.all.description'),
    luxury: t('seo.villasPage.luxury.description'),
    log_home: t('seo.villasPage.log_home.description'),
    couple: t('seo.villasPage.couple.description')
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags - Dynamic per Category */}
      <SEOHead
        title={seoTitles[activeTab]}
        description={seoDescriptions[activeTab]}
        keywords={seoKeywords[activeTab]}
        ogImage="https://tamanwisatabougenville.com/images/og-villas.jpg"
        ogUrl={`https://tamanwisatabougenville.com/villas${activeTab !== 'all' ? `?category=${activeTab}` : ''}`}
      />
      {/* Hero Section */}
      <div className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={currentContent.image}
            alt={getContent(currentContent.title)}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out scale-105"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20 md:pt-0">
          <span className="inline-block py-1.5 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] md:text-xs tracking-[0.2em] uppercase mb-3 md:mb-4 animate-fade-in-up">
            {getContent(currentContent.subtitle)}
          </span>
          <h1 className="font-serif text-3xl md:text-5xl text-white mb-3 md:mb-4 animate-fade-in-up delay-100 leading-tight">
            {getContent(currentContent.title)}
          </h1>
          <p className="text-white/90 text-sm md:text-lg font-light leading-relaxed max-w-xl md:max-w-2xl mx-auto animate-fade-in-up delay-200 px-4 md:px-0">
            {getContent(currentContent.description)}
          </p>
        </div>
      </div>

      {/* Filter Tabs - Sticky */}
      <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 relative">
          {/* Left fade indicator */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/80 to-transparent z-10 pointer-events-none md:hidden" />

          <div className="flex items-center justify-start md:justify-center gap-2 md:gap-8 py-4 overflow-x-auto no-scrollbar px-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleTabChange(cat.id)}
                aria-label={`Filter by ${t(`villa.categories.${cat.id}`)}`}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-full text-sm tracking-wide transition-all duration-300 whitespace-nowrap active:scale-95
                  ${activeTab === cat.id
                    ? 'bg-forest-green text-white shadow-lg shadow-forest-green/20'
                    : 'bg-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-900'}
                `}
              >
                <cat.icon size={16} />
                <span>{t(`villa.categories.${cat.id}`)}</span>
              </button>
            ))}
          </div>

          {/* Right fade indicator */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/80 to-transparent z-10 pointer-events-none md:hidden" />
        </div>
      </div>

      {/* Content Area */}
      <div className="container mx-auto px-4 py-20 md:py-28 min-h-[600px]">
        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

// Helper Component for Villa Card (Reused)
const VillaCard: React.FC<{ villa: any }> = ({ villa }) => {
  const { t } = useTranslation();
  // Helper to format capacity display
  const getCapacityDisplay = (capacity: string) => {
    // If capacity string already contains "Pax" or "orang", just use it but maybe replace "orang" with "Pax" for consistency
    if (capacity.toLowerCase().includes('pax')) return capacity;
    return capacity.replace(/orang/i, 'Pax');
  };

  return (
    <div
      className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 cursor-pointer active:scale-[0.98]"
      onClick={() => {
        const event = new CustomEvent('navigate-villa', { detail: villa.id });
        window.dispatchEvent(event);
      }}
    >
      {/* Image Container */}
      <div className="relative h-56 md:h-64 overflow-hidden">
        <img
          src={villa.image}
          alt={villa.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

        {/* Capacity Badge (Replaces Price) */}
        <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-sm flex items-center gap-2">
          <Users size={16} className="text-white" />
          <p className="font-serif text-lg md:text-xl text-white font-medium">{getCapacityDisplay(villa.capacity)}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-1 group-hover:text-forest transition-colors">
              {villa.name}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-500 font-light">
              <MapPin size={14} className="text-gold" />
              <span>Gunung Puntang, Bandung</span>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded text-xs font-medium text-gray-600">
            <Star size={12} className="fill-gold text-gold" />
            <span>4.9</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 py-4 border-t border-gray-100 mb-4">
          <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider">
            <BedDouble size={14} />
            <span>{villa.bedrooms} Bed</span>
          </div>
          <div className="w-px h-3 bg-gray-200" />
          <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider">
            <Grid3x3 size={14} />
            <span>{villa.area ? `${villa.area} m²` : t('villa.freeBreakfast', 'Free Breakfast')}</span>
          </div>
        </div>

        {/* Action */}
        <button className="w-full py-3 border-2 border-gray-200 text-gray-600 text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-forest-green hover:text-white hover:border-forest-green transition-all duration-300 rounded-lg flex items-center justify-center gap-2 group-hover:bg-forest-green group-hover:text-white group-hover:border-forest-green active:scale-95">
          <span>{t('home.viewDetails')}</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default VillasPage;
