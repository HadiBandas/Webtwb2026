
import React from 'react';
import { Villa, MenuItem, ActivityCategory, Offer, Experience, Package, Translation, Review } from './types';

export const TRANSLATIONS: Translation = {
  heroHeadline: {
    id: 'KEMBALI KE ALAM YANG SESUNGGUHNYA',
    en: 'CLAIM YOUR MOUNTAIN SANCTUARY',
    zh: '专属山林度假胜地',
    de: 'IHR ZUFLUCHTSORT IN DEN BERGEN'
  },
  heroSub: {
    id: 'Hanya 2 Jam dari Jakarta. Sebuah pelarian eksklusif di Gunung Puntang.',
    en: 'Only 2 Hours from Jakarta. An exclusive escape in Mount Puntang.',
    zh: '距离雅加达仅两小时，在纯正奢华中寻找宁静',
    de: 'Nur 2 Stunden von Jakarta entfernt. Ein exklusiver R�ckzugsort am Mount Puntang.'
  },
  introText: {
    id: 'Setiap sudut Bougenville dirancang untuk mendekatkan Anda dengan alam, keluarga, dan diri sendiri. Temukan kemewahan autentik di tengah hutan pinus purba.',
    en: 'Every corner of Bougenville is designed to bring you closer to nature, family, and yourself. Discover authentic luxury amidst the ancient pine forest.',
    zh: 'Bougenville 的每一个角落都旨在让您更接近自然、家人和自我。在Puntang山脚下的古老松林中发现真正的奢华。',
    de: 'Jeder Winkel von Bougenville ist darauf ausgelegt, Sie der Natur, Ihrer Familie und sich selbst n�her zu bringen. Entdecken Sie authentischen Luxus inmitten des alten Kiefernwaldes.'
  },
  historyTitle: {
    id: 'Warisan Nagara Puntang',
    en: 'The Heritage of Nagara Puntang',
    zh: '纳加拉Puntang的遗产',
    de: 'Das Erbe von Nagara Puntang'
  },
  historyDesc: {
    id: 'Berabad lalu, kerajaan "Nagara Puntang" berdiri megah di tanah ini. Kami menjaga semangat tersebut melalui arsitektur yang menghormati alam dan keramahtamahan Sunda yang tulus.',
    en: 'Centuries ago, the "Nagara Puntang" kingdom stood majestically on this land. We preserve that spirit through nature-respecting architecture and genuine Sundanese hospitality.',
    zh: '?????,�?????�????????????? ?????????????????????????????',
    de: 'Vor Jahrhunderten stand das K�nigreich "Nagara Puntang" majest�tisch auf diesem Land. Wir bewahren diesen Geist durch naturverbundene Architektur und echte sundanesische Gastfreundschaft.'
  },
  ctaBook: {
    id: 'RESERVASI SEKARANG',
    en: 'RESERVE YOUR STAY',
    zh: '立即预订',
    de: 'JETZT BUCHEN'
  },
  ctaChat: {
    id: 'CHAT CONCIERGE',
    en: 'CHAT CONCIERGE',
    zh: '联系管家',
    de: 'CONCIERGE CHAT'
  },
  villasTitle: {
    id: 'Koleksi Villa Privat',
    en: 'Private Villa Collection',
    zh: '私人别墅系列',
    de: 'Private Villenkollektion'
  },
  villasSub: {
    id: 'Ruang pribadi untuk menciptakan momen berkesan',
    en: 'Private spaces to create memorable moments',
    zh: '创造难忘时刻的私人空间',
    de: 'Private R�ume f�r unvergessliche Momente'
  },
  experiencesTitle: {
    id: 'Curated Mountain Experiences',
    en: 'Curated Mountain Experiences',
    zh: '精选山地体验',
    de: 'Kuratierte Bergerlebnisse'
  },
  startFrom: {
    id: 'Mulai dari',
    en: 'Starts from',
    zh: '起价',
    de: 'Ab'
  },
  perNight: {
    id: '/malam',
    en: '/night',
    zh: '/ 晚',
    de: '/Nacht'
  },
  bookNow: {
    id: 'Book Now',
    en: 'Book Now',
    zh: '立即预订',
    de: 'Jetzt buchen'
  },
  learnMore: {
    id: 'Discover More',
    en: 'Discover More',
    zh: '了解更多',
    de: 'Mehr entdecken'
  }
};

// ===================================================================
// LUXURY VILLAS - FOREST HOUSE & MOOI LAKE
// ===================================================================

export const FOREST_HOUSE_VILLAS: Villa[] = [
  {
    id: 'forest-house',
    name: 'Forest House',
    cluster: 'Forest House Puntang',
    capacity: '13-16 orang',
    bedrooms: 5,
    area: 436.00,
    toilets: 4,
    price: 25000000,
    priceWeekday: 25000000,
    priceWeekend: 30000000,
    priceHighSeason: 35000000,
    category: 'luxury',
    badge: 'Most Exclusive',
    features: ['Private Waterfall', 'Garden & Pond', 'Gazebo', 'Full Board Meals', 'Premium Service'],
    image: '/images/villas/forest-house/hero.jpg',
    images: [
      '/images/villas/forest-house/hero.jpg',
      '/images/villas/forest-house/DSC00110---CopyWEB.jpg',
      '/images/villas/forest-house/DSC00322WEB.jpg',
      '/images/villas/forest-house/DSC00370WEB.jpg',
      '/images/villas/forest-house/DSC08988WEB.jpg',
      '/images/villas/forest-house/DSC09718WEB.jpg',
      '/images/villas/forest-house/DSC09744WEB.jpg',
      '/images/villas/forest-house/DSC09885WEB.jpg',
      '/images/villas/forest-house/DSC09977.WEB.jpg'
    ],
    bedConfiguration: [
      { room: 1, beds: '1 king bed (180x200 cm)' },
      { room: 2, beds: '1 king bed (180x200 cm) + 1 trundle bed (2 orang)' },
      { room: 3, beds: '1 queen bed (160x200 cm) + 1 trundle bed (2 orang)' },
      { room: 4, beds: '1 queen bed (160x200 cm) + 1 trundle bed (2 orang)' },
      { room: 5, beds: '1 queen bed (160x200 cm)' }
    ],
    facilities: {
      room: [
        { id: '1 Ruang keluarga', en: '1 Family room', zh: '1间家庭房', de: '1 Familienzimmer' },
        { id: '1 Ruang tamu', en: '1 Living room', zh: '1间客厅', de: '1 Wohnzimmer' },
        { id: '2 Ruang makan (indoor & outdoor)', en: '2 Dining areas (indoor & outdoor)', zh: '2个用餐区（室内和室外）', de: '2 Essbereiche (innen & außen)' },
        { id: '1 Dapur bersih', en: '1 Clean kitchen', zh: '1间干净厨房', de: '1 Saubere Küche' },
        { id: '1 Teras luar di kamar utama', en: '1 Outdoor terrace in master bedroom', zh: '主卧1个户外露台', de: '1 Außenterrasse im Hauptschlafzimmer' },
        { id: '1 Teras luar sisi sungai', en: '1 Riverside outdoor terrace', zh: '1个河畔户外露台', de: '1 Außenterrasse am Flussufer' },
        { id: '1 Gazebo', en: '1 Gazebo', zh: '1个凉亭', de: '1 Gazebo' }
      ],
      amenities: [
        { id: '1 Air terjun & taman', en: '1 Waterfall & garden', zh: '1个瀑布和花园', de: '1 Wasserfall & Garten' },
        { id: '1 Kolam ikan', en: '1 Fish pond', zh: '1个鱼塘', de: '1 Fischteich' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen' },
        { id: 'Snacks premium', en: 'Premium snacks', zh: '优质小吃', de: 'Premium-Snacks' },
        { id: 'Kopi, teh, dan gula', en: 'Coffee, tea, and sugar', zh: '咖啡、茶和糖', de: 'Kaffee, Tee und Zucker' }
      ],
      natural: [
        { id: 'Air terjun & taman privat', en: 'Private waterfall & garden', zh: '私人瀑布和花园', de: 'Privater Wasserfall & Garten' },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo' },
        { id: 'Children playground', en: 'Children playground', zh: '儿童游乐场', de: 'Kinderspielplatz' },
        { id: 'Trekking/ hiking', en: 'Trekking/ hiking', zh: '徒步旅行', de: 'Trekking / Wandern' },
        { id: '2 kolam renang air dingin (umum)', en: '2 Cold water swimming pools (public)', zh: '2个冷水游泳池（公共）', de: '2 Kaltwasser-Schwimmbäder (öffentlich)' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Jalan naik turun tangga (sekitar 300 m dari area parkir)', en: 'Stairs access (about 300 m from parking area)', zh: '楼梯通道（距停车场约300米）', de: 'Treppenzugang (ca. 300 m vom Parkplatz)' },
        { id: 'Estimasi waktu tempuh sekitar 1-2 jam dari pusat kota Bandung (melalui Tol Soroja dan keluar di Exit Tol Soreang, kemudian mengambil arah Banjaran-Pangalengan).', en: 'Estimated travel time about 1-2 hours from Bandung city center (via Soroja Toll and exit at Soreang Toll Exit, then take direction to Banjaran-Pangalengan).', zh: '预计从万隆市中心出发约需1-2小时（经Soroja收费站，在Soreang收费站出口下，然后往Banjaran-Pangalengan方向行驶）。', de: 'Geschätzte Reisezeit ca. 1-2 Stunden vom Stadtzentrum Bandung (über Soroja-Maut und Ausfahrt Soreang, dann Richtung Banjaran-Pangalengan).' },
        { id: 'Harga belum termasuk Tax 10%', en: 'Price excludes 10% Tax', zh: '价格不含10%税', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa privat super mewah dengan pemandangan hutan langsung. Kapasitas 13-16 orang dengan fasilitas air terjun & taman privat.',
      en: 'Super luxurious private villa with direct forest views. Capacity for 13-16 people with private waterfall & garden facilities.',
      zh: '超豪华私人别墅，可直接欣赏森林美景。 可容纳13-16人，配有私人瀑布和花园设施。',
      de: 'Super luxuriöse Privatvilla mit direktem Waldblick. Kapazität für 13-16 Personen mit privatem Wasserfall & Gartenanlagen.'
    },
    longDescription: {
      id: 'Forest House Puntang, villa privat super mewah dengan pemandangan hutan langsung yang berada di dalam kawasan Taman Wisata Bougenville. Luas villa 450 m2. Termasuk sarapan, makan malam, snacks premium, kopi, teh, dan gula.',
      en: 'Forest House Puntang, a super luxurious private villa with direct forest views located within the Taman Wisata Bougenville area. Villa area 450 m2. Includes breakfast, dinner, premium snacks, coffee, tea, and sugar.',
      zh: 'Forest House Puntang，位于 Taman Wisata Bougenville 区域内的超豪华私人别墅，可直接欣赏森林美景。 别墅面积450平方米。 包括早餐、晚餐、优质小吃、咖啡、茶和糖。',
      de: 'Forest House Puntang, eine super luxuriöse Privatvilla mit direktem Waldblick im Gebiet Taman Wisata Bougenville. Villengröße 450 m2. Inklusive Frühstück, Abendessen, Premium-Snacks, Kaffee, Tee und Zucker.'
    }
  }
];

export const MOOI_LAKE_VILLAS: Villa[] = [
  {
    id: 'mooi-lake',
    name: 'Mooi Lake House',
    cluster: 'Mooi Lake House Puntang',
    capacity: '9 orang',
    bedrooms: 3,
    area: 130,
    toilets: 2,
    price: 12500000,
    priceWeekday: 12500000,
    priceWeekend: 15000000,
    priceHighSeason: 17500000,
    category: 'luxury',
    badge: 'Lakeside Living',
    features: ['Private Lake & Boat', 'Full Board Meals', 'Lakeside Terrace'],

    image: '/images/mlh-hero.webp',
    images: [
      '/images/mlh-hero.webp',
      '/images/villas/mooi-lake/awb.web.jpg',
      '/images/villas/mooi-lake/blue-room1web.jpg',
      '/images/villas/mooi-lake/DSC06182-01WEB.jpg',
      '/images/villas/mooi-lake/DSC06382-01WEB.jpg',
      '/images/villas/mooi-lake/DSC06446-01WEB.jpg',
      '/images/villas/mooi-lake/livingroom2.WEB.jpg',
      '/images/villas/mooi-lake/pink-bedroom1WEB.jpg'
    ],
    bedConfiguration: [
      { room: 1, beds: '1 Master bedroom (king bed)' },
      { room: 2, beds: 'Kids bedroom 1 (3 single bed) + trundle bed' },
      { room: 3, beds: 'Kids bedroom 2 (4 single bed) + trundle bed' }
    ],
    facilities: {
      room: [
        { id: '1 Ruang keluarga', en: '1 Living room', zh: '1间客厅', de: '1 Wohnzimmer' },
        { id: '1 Dapur bersih', en: '1 Clean kitchen', zh: '1?????', de: '1 Saubere K�che' },
        { id: 'Teras', en: 'Terrace', zh: '露台', de: 'Terrasse' }
      ],
      amenities: [
        { id: '2 Kamar mandi & toilet', en: '2 Bathrooms & toilets', zh: '2个浴室和卫生间', de: '2 Badezimmer & Toiletten' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '??', de: 'Fr�hst�ck' },

        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen' },
        { id: 'Cemilan premium', en: 'Premium snacks', zh: '优质小吃', de: 'Premium-Snacks' }
      ],
      natural: [
        { id: 'Danau & perahu privat', en: 'Private lake & boat', zh: '私人湖泊和船', de: 'Privater See & Boot' },
        { id: 'Children playground', en: 'Children playground', zh: '儿童游乐场', de: 'Kinderspielplatz' },
        { id: 'Trekking/ hiking', en: 'Trekking/hiking', zh: '徒步旅行', de: 'Trekking/Wandern' },
        { id: '2 kolam renang air dingin (umum)', en: '2 Cold water swimming pools (public)', zh: '2??????(??)', de: '2 Kaltwasser-Schwimmb�der (�ffentlich)' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '???', de: 'Vogelk�figbr�cke' },
        { id: 'Taman bunga', en: 'Flower garden', zh: '花园', de: 'Blumengarten' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Jalan naik turun tangga (sekitar 300 m dari area parkir)', en: 'Stairs access (about 300m from parking area)', zh: '楼梯通道（距停车场约300米）', de: 'Treppenzugang (ca. 300m vom Parkplatz)' },
        { id: 'Estimasi waktu tempuh sekitar 1-2 jam dari pusat kota Bandung (melalui Tol Soroja dan keluar di Exit Tol Soreang, kemudian mengambil arah Banjaran-Pangalengan).', en: 'Estimated travel time about 1-2 hours from Bandung city center (via Soroja Toll and exit at Soreang Toll Exit, then take direction to Banjaran-Pangalengan).', zh: '?????????1-2??(??Soroja???,?Soreang??????,????Banjaran-Pangalengan??)?', de: 'Gesch�tzte Fahrzeit ca. 1-2 Stunden vom Stadtzentrum Bandung (�ber Soroja Maut und Ausfahrt bei Soreang Maut-Ausfahrt, dann Richtung Banjaran-Pangalengan).' },
        { id: 'Harga belum termasuk Tax 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa mewah privat dengan pemandangan danau langsung. Kapasitas untuk 9 orang, sudah termasuk fasilitas menginap lengkap.',
      en: 'Luxurious private villa with direct lake views. Capacity for 9 people, includes complete stay facilities.',
      zh: '??????,???????? ???9?,??????????',
      de: 'Luxuri�se Privatvilla mit direktem Seeblick. Kapazit�t f�r 9 Personen, inklusive kompletter Aufenthaltsm�glichkeiten.'
    },
    longDescription: {
      id: 'Villa mewah privat dengan pemandangan danau langsung, berada di dalam kawasan Taman Wisata Bougenville. Kapasitas untuk 9 orang, sudah termasuk fasilitas menginap lengkap diantaranya sarapan dan makan malam plus cemilan premium.',
      en: 'Luxurious private villa with direct lake views, located within the Taman Wisata Bougenville area. Capacity for 9 people, includes complete stay facilities including breakfast and dinner plus premium snacks.',
      zh: '??????,???????,?? Taman Wisata Bougenville ???? ???9?,?????????,?????????????????',
      de: 'Luxuri�se Privatvilla mit direktem Seeblick im Gebiet Taman Wisata Bougenville. Kapazit�t f�r 9 Personen, inklusive kompletter Aufenthaltsm�glichkeiten wie Fr�hst�ck, Mittag- und Abendessen sowie Premium-Snacks.'
    }
  }
];

// ===================================================================
// EMERALD VILLAS
// ===================================================================

export const EMERALD_VILLAS: Villa[] = [
  {
    id: 'emerald-02',
    name: 'Emerald 02 (Unit Atas)',
    localizedName: {
      id: 'Emerald 02 (Unit Atas)',
      en: 'Emerald 02 (Upper Unit)',
      zh: 'Emerald 02 (上层单元)',
      de: 'Emerald 02 (Obere Einheit)'
    },
    cluster: 'Emerald Villas',
    capacity: '7 orang',
    bedrooms: 2,
    area: 134.67,
    toilets: 2,
    price: 8500000,
    priceWeekday: 8500000,
    priceWeekend: 9500000,
    priceHighSeason: 11000000,
    category: 'luxury',
    features: ['American Farmhouse', 'Mountain View', 'Balcony'],
    image: '/images/emerald-atas-hero.webp',
    images: [
      '/images/emerald-atas-hero.webp',
      '/images/villas/emerald-02/DSC04507WEB.jpg',
      '/images/villas/emerald-02/DSC04511WEB.jpg',
      '/images/villas/emerald-02/DSC04515WEB.jpg',
      '/images/villas/emerald-02/DSC04566WEB.jpg',
      '/images/villas/emerald-02/DSC04602WEB.jpg',
      '/images/villas/emerald-02/DSC04778WEB.jpg',
      '/images/villas/emerald-02/DSC04923WEB.jpg'
    ],
    bedConfiguration: [
      { room: 1, beds: '1 tempat tidur King (180 x 200 cm) dan 1 tempat tidur Single (90 x 200 cm)' },
      { room: 2, beds: '2 tempat tidur Queen (160 x 200 cm) masing-masing' }
    ],
    facilities: {
      room: [
        { id: '2 kamar tidur', en: '2 Bedrooms', zh: '2???', de: '2 Schlafzimmer' },
        { id: '2 toilet', en: '2 Toilets', zh: '2????', de: '2 Toiletten' }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '???', de: 'Wasserkocher' },
        { id: 'Smart TV', en: 'Smart TV', zh: '????', de: 'Smart TV' },
        { id: 'Wifi', en: 'Wifi', zh: '????', de: 'WLAN' },
        { id: 'Kulkas', en: 'Refrigerator', zh: '??', de: 'K�hlschrank' },
        { id: 'Microwave', en: 'Microwave', zh: '???', de: 'Mikrowelle' },
        { id: 'Mesin kopi', en: 'Coffee machine', zh: '???', de: 'Kaffeemaschine' },
        { id: 'Kompor listrik', en: 'Electric stove', zh: '??', de: 'Elektroherd' },
        { id: 'Dispenser', en: 'Water dispenser', zh: '???', de: 'Wasserspender' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '??', de: 'Fr�hst�ck' },
        { id: 'Makan siang', en: 'Lunch', zh: '??', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '??', de: 'Abendessen' },
        { id: 'Welcome fruits', en: 'Welcome fruits', zh: '????', de: 'Begr��ungsfr�chte' },
        { id: 'Air mineral', en: 'Mineral water', zh: '???', de: 'Mineralwasser' },
        { id: 'Kopi kapsul, teh, dan gula', en: 'Capsule coffee, tea, and sugar', zh: '????,???', de: 'Kapselkaffee, Tee und Zucker' }
      ],
      natural: [
        { id: 'Playground', en: 'Playground', zh: '???', de: 'Spielplatz' },
        { id: 'Water playing', en: 'Water playing', zh: '??', de: 'Wasserspiele' },
        { id: '2 kolam renang umum', en: '2 Public swimming pools', zh: '2??????', de: '2 �ffentliche Schwimmb�der' },
        { id: 'Area bermain di sungai', en: 'River play area', zh: '?????', de: 'Flussspielbereich' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak menyediakan dan/atau menggunakan ekstra bed', en: 'Does not provide and/or use extra bed', zh: '????/?????', de: 'Kein Zustellbett verf�gbar' },
        { id: 'Tidak dapat menampung kapasitas lebih dari 7 orang', en: 'Cannot accommodate more than 7 people', zh: '??????7?', de: 'Kann nicht mehr als 7 Personen beherbergen' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '????10%?', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa bergaya American Farmhouse dengan pemandangan pegunungan yang menakjubkan. Unit atas dengan balkon luas.',
      en: 'American Farmhouse style villa with stunning mountain views. Upper unit with spacious balcony.',
      zh: '????????,???????? ????????????',
      de: 'Villa im amerikanischen Farmhouse-Stil mit atemberaubendem Bergblick. Obere Einheit mit gro�em Balkon.'
    }
  },
  {
    id: 'emerald-01',
    name: 'Emerald 01 (Unit Bawah)',
    localizedName: {
      id: 'Emerald 01 (Unit Bawah)',
      en: 'Emerald 01 (Lower Unit)',
      zh: 'Emerald 01 (下层单元)',
      de: 'Emerald 01 (Untere Einheit)'
    },
    cluster: 'Emerald Villas',
    capacity: '7 orang',
    bedrooms: 2,
    area: 135.33,
    toilets: 2,
    price: 8750000,
    priceWeekday: 8750000,
    priceWeekend: 10000000,
    priceHighSeason: 12000000,
    category: 'luxury',
    features: ['American Farmhouse', 'Garden Access', 'Patio'],
    image: '/images/villas/emerald-01/hero.jpg',
    images: [
      '/images/villas/emerald-01/DSC04218WEB.jpg',
      '/images/villas/emerald-01/DSC03984WEB.jpg',
      '/images/villas/emerald-01/DSC04104WEB.jpg',
      '/images/villas/emerald-01/DSC04151WEB.jpg',
      '/images/villas/emerald-01/DSC04186WEB.jpg',
      '/images/villas/emerald-01/DSC04416WEB.jpg',
      '/images/villas/emerald-01/DSC04902WEB.jpg',
      '/images/villas/emerald-01/DSC04918.WEB.jpg'
    ],
    bedConfiguration: [
      { room: 1, beds: '1 tempat tidur King (180 x 200 cm) dan 1 tempat tidur Single (90 x 200 cm)' },
      { room: 2, beds: '2 tempat tidur Queen (160 x 200 cm) masing-masing' }
    ],
    facilities: {
      room: [
        { id: '2 kamar tidur', en: '2 Bedrooms', zh: '2???', de: '2 Schlafzimmer' },
        { id: '2 toilet', en: '2 Toilets', zh: '2????', de: '2 Toiletten' }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '???', de: 'Wasserkocher' },
        { id: 'Smart TV', en: 'Smart TV', zh: '????', de: 'Smart TV' },
        { id: 'Wifi', en: 'Wifi', zh: '????', de: 'WLAN' },
        { id: 'Kulkas', en: 'Refrigerator', zh: '??', de: 'K�hlschrank' },
        { id: 'Microwave', en: 'Microwave', zh: '???', de: 'Mikrowelle' },
        { id: 'Mesin kopi', en: 'Coffee machine', zh: '???', de: 'Kaffeemaschine' },
        { id: 'Kompor listrik', en: 'Electric stove', zh: '??', de: 'Elektroherd' },
        { id: 'Dispenser', en: 'Water dispenser', zh: '???', de: 'Wasserspender' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '??', de: 'Fr�hst�ck' },
        { id: 'Makan siang', en: 'Lunch', zh: '??', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '??', de: 'Abendessen' },
        { id: 'Welcome fruits', en: 'Welcome fruits', zh: '????', de: 'Begr��ungsfr�chte' },
        { id: 'Air mineral', en: 'Mineral water', zh: '???', de: 'Mineralwasser' },
        { id: 'Kopi kapsul, teh, dan gula', en: 'Capsule coffee, tea, and sugar', zh: '????,???', de: 'Kapselkaffee, Tee und Zucker' }
      ],
      natural: [
        { id: 'Playground', en: 'Playground', zh: '???', de: 'Spielplatz' },
        { id: 'Water playing', en: 'Water playing', zh: '??', de: 'Wasserspiele' },
        { id: '2 kolam renang umum', en: '2 Public swimming pools', zh: '2??????', de: '2 �ffentliche Schwimmb�der' },
        { id: 'Area bermain di sungai', en: 'River play area', zh: '?????', de: 'Flussspielbereich' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak menyediakan dan/atau menggunakan ekstra bed', en: 'Does not provide and/or use extra bed', zh: '????/?????', de: 'Kein Zustellbett verf�gbar' },
        { id: 'Tidak dapat menampung kapasitas lebih dari 7 orang', en: 'Cannot accommodate more than 7 people', zh: '??????7?', de: 'Kann nicht mehr als 7 Personen beherbergen' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '????10%?', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa bergaya American Farmhouse dengan akses langsung ke taman. Unit bawah yang nyaman untuk keluarga.',
      en: 'American Farmhouse style villa with direct garden access. Comfortable lower unit for families.',
      zh: '????????,???????? ???????,???????',
      de: 'Villa im amerikanischen Farmhouse-Stil mit direktem Gartenzugang. Komfortable untere Einheit f�r Familien.'
    }
  }
];

// ===================================================================
// DANDENONG VILLAS (American Farmhouse)
// ===================================================================

export const DANDENONG_VILLAS: Villa[] = [
  {
    id: 'olinda',
    name: 'Olinda Villa',
    cluster: 'Dandenong Villas',
    capacity: '12 orang',
    bedrooms: 3,
    area: 145.40,
    toilets: 2,
    price: 15000000,
    priceWeekday: 15000000,
    priceWeekend: 17500000,
    priceHighSeason: 20000000,
    category: 'luxury',
    features: ['Spacious Living', 'Large Garden', 'Jacuzzi'],
    image: '/images/villas/olinda/hero.jpg',
    images: [
      '/images/villas/olinda/DSC01065.WEB.jpg',
      '/images/villas/olinda/DSC00382WEB.jpg',
      '/images/villas/olinda/DSC00446WEB.jpg',
      '/images/villas/olinda/DSC00629WEB.jpg',
      '/images/villas/olinda/DSC00630WEB.jpg',
      '/images/villas/olinda/DSC00789WEB.jpg',
      '/images/villas/olinda/DSC00931WEB.jpg'
    ],
    bedConfiguration: [
      { room: 1, beds: '1 king bed (180 x 200)' },
      { room: 2, beds: '2 queen bed (160 x 200)' },
      { room: 3, beds: '2 queen bed (160 x 200) & 2 single bed (90 x 200)' }
    ],
    facilities: {
      room: [
        { id: 'Ruang tamu', en: 'Living room', zh: '??', de: 'Wohnzimmer' },
        { id: 'Meja makan', en: 'Dining table', zh: '??', de: 'Esstisch' },
        { id: 'Dapur', en: 'Kitchen', zh: '??', de: 'K�che' },
        { id: '3 Kamar tidur', en: '3 Bedrooms', zh: '3???', de: '3 Schlafzimmer' },
        { id: 'Teras', en: 'Terrace', zh: '??', de: 'Terrasse' }
      ],
      amenities: [
        { id: '2 Toilet & kamar mandi', en: '2 Toilets & bathrooms', zh: '2???????', de: '2 Toiletten & Badezimmer' },
        { id: 'Water heater', en: 'Water heater', zh: '???', de: 'Wasserkocher' },
        { id: 'Smart TV/ TV kabel', en: 'Smart TV/ Cable TV', zh: '????/????', de: 'Smart TV / Kabelfernsehen' },
        { id: 'Wi-Fi', en: 'Wi-Fi', zh: '????', de: 'WLAN' },
        { id: 'Jacuzzi', en: 'Jacuzzi', zh: '????', de: 'Whirlpool' },
        { id: 'Kulkas', en: 'Refrigerator', zh: '??', de: 'K�hlschrank' },
        { id: 'Microwave', en: 'Microwave', zh: '???', de: 'Mikrowelle' },
        { id: 'ketel listrik', en: 'Electric kettle', zh: '????', de: 'Wasserkocher' },
        { id: 'kompor listrik', en: 'Electric stove', zh: '??', de: 'Elektroherd' },
        { id: 'Dispenser', en: 'Water dispenser', zh: '???', de: 'Wasserspender' },
        { id: 'Sabun', en: 'Soap', zh: '??', de: 'Seife' },
        { id: 'Shampoo', en: 'Shampoo', zh: '???', de: 'Shampoo' },
        { id: 'Sikat & pasta gigi', en: 'Toothbrush & toothpaste', zh: '?????', de: 'Zahnb�rste & Zahnpasta' },
        { id: 'Handuk', en: 'Towel', zh: '??', de: 'Handtuch' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '??', de: 'Fr�hst�ck' },
        { id: 'Makan siang', en: 'Lunch', zh: '??', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '??', de: 'Abendessen' },
        { id: 'Kopi, teh, gula, creamer', en: 'Coffee, tea, sugar, creamer', zh: '??,?,?,??', de: 'Kaffee, Tee, Zucker, Sahne' },
        { id: 'Air mineral', en: 'Mineral water', zh: '???', de: 'Mineralwasser' }
      ],
      natural: [
        { id: 'Jacuzzi private', en: 'Private Jacuzzi', zh: '??????', de: 'Privater Whirlpool' },
        { id: 'Kolam renang', en: 'Swimming pool', zh: '???', de: 'Schwimmbad' },
        { id: 'Water playing', en: 'Water playing', zh: '??', de: 'Wasserspiele' },
        { id: 'Sungai', en: 'River', zh: '??', de: 'Fluss' },
        { id: 'Gazebo', en: 'Gazebo', zh: '??', de: 'Gazebo' },
        { id: 'Skywalk', en: 'Skywalk', zh: '????', de: 'Skywalk' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Jalan naik turun tangga (sekitar 150 m dari area parkir)', en: 'Stairs access (about 150 m from parking area)', zh: '????(?????150?)', de: 'Treppenzugang (ca. 150 m vom Parkplatz)' },
        { id: 'Estimasi waktu tempuh sekitar 1-2 jam dari pusat kota Bandung', en: 'Estimated travel time about 1-2 hours from Bandung city center', zh: '????????????1-2??', de: 'Gesch�tzte Reisezeit ca. 1-2 Stunden vom Stadtzentrum Bandung' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '????10%?', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa luas dengan kapasitas besar dan Jacuzzi pribadi. Cocok untuk gathering keluarga besar.',
      en: 'Spacious villa with large capacity and private Jacuzzi. Perfect for large family gatherings.',
      zh: '?????,???,????????? ???????????',
      de: 'Ger�umige Villa mit gro�er Kapazit�t und privatem Jacuzzi. Perfekt f�r gro�e Familientreffen.'
    }
  },
  {
    id: 'selby',
    name: 'Selby Villa',
    cluster: 'Dandenong Villas',
    capacity: '4 orang',
    bedrooms: 2,
    area: 76.45,
    toilets: 1,
    price: 5000000,
    priceWeekday: 5000000,
    priceWeekend: 6000000,
    priceHighSeason: 7500000,
    category: 'luxury',
    features: ['Cozy', 'Private', 'Garden View'],
    image: '/images/villas/selby/hero.jpg',
    images: [
      '/images/villas/selby/DSC00238WEB.jpg',
      '/images/villas/selby/DSC02726WEB.jpg',
      '/images/villas/selby/DSC02763WEB.jpg',
      '/images/villas/selby/DSC02805WEB.jpg',
      '/images/villas/selby/DSC02837WEB.jpg',
      '/images/villas/selby/DSC02872WEB.jpg',
      '/images/villas/selby/DSC03055WEB.jpg',
      '/images/villas/selby/DSC03113.WEB.jpg'
    ],
    bedConfiguration: [
      { room: 1, beds: '1 king bed 180 x 200' },
      { room: 2, beds: '1 queen bed 160 x 200' }
    ],
    facilities: {
      room: [
        { id: 'Ruang tamu', en: 'Living room', zh: '??', de: 'Wohnzimmer' },
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer' },
        { id: 'Dapur', en: 'Kitchen', zh: '??', de: 'K�che' },
        { id: 'Teras', en: 'Terrace', zh: '??', de: 'Terrasse' }
      ],
      amenities: [
        { id: 'Toilet & kamar mandi', en: 'Toilet & bathroom', zh: '??????', de: 'Toilette & Badezimmer' },
        { id: 'Water heater', en: 'Water heater', zh: '???', de: 'Wasserkocher' },
        { id: 'Smart TV/ TV kabel', en: 'Smart TV/ Cable TV', zh: '????/????', de: 'Smart TV / Kabelfernsehen' },
        { id: 'Wi-Fi', en: 'Wi-Fi', zh: '????', de: 'WLAN' },
        { id: 'Kulkas', en: 'Refrigerator', zh: '??', de: 'K�hlschrank' },
        { id: 'Microwave', en: 'Microwave', zh: '???', de: 'Mikrowelle' },
        { id: 'Dispenser', en: 'Water dispenser', zh: '???', de: 'Wasserspender' },
        { id: 'Sabun', en: 'Soap', zh: '??', de: 'Seife' },
        { id: 'Shampoo', en: 'Shampoo', zh: '???', de: 'Shampoo' },
        { id: 'Sikat & pasta gigi', en: 'Toothbrush & toothpaste', zh: '?????', de: 'Zahnb�rste & Zahnpasta' },
        { id: 'Handuk', en: 'Towel', zh: '??', de: 'Handtuch' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '??', de: 'Fr�hst�ck' },
        { id: 'Makan siang', en: 'Lunch', zh: '??', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '??', de: 'Abendessen' },
        { id: 'Kopi, gula, teh, creamer', en: 'Coffee, sugar, tea, creamer', zh: '??,?,?,??', de: 'Kaffee, Zucker, Tee, Sahne' },
        { id: 'Air mineral', en: 'Mineral water', zh: '???', de: 'Mineralwasser' }
      ],
      natural: [
        { id: 'Kolam renang', en: 'Swimming pool', zh: '???', de: 'Schwimmbad' },
        { id: 'Water playing', en: 'Water playing', zh: '??', de: 'Wasserspiele' },
        { id: 'Sungai', en: 'River', zh: '??', de: 'Fluss' },
        { id: 'Gazebo', en: 'Gazebo', zh: '??', de: 'Gazebo' },
        { id: 'Skywalk', en: 'Skywalk', zh: '????', de: 'Skywalk' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Jalan naik turun tangga (sekitar 150 m dari area parkir)', en: 'Stairs access (about 150 m from parking area)', zh: '????(?????150?)', de: 'Treppenzugang (ca. 150 m vom Parkplatz)' },
        { id: 'Estimasi waktu tempuh sekitar 1-2 jam dari pusat kota Bandung', en: 'Estimated travel time about 1-2 hours from Bandung city center', zh: '????????????1-2??', de: 'Gesch�tzte Reisezeit ca. 1-2 Stunden vom Stadtzentrum Bandung' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '????10%?', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa cozy untuk keluarga kecil. Suasana tenang dengan pemandangan taman.',
      en: 'Cozy villa for small families. Quiet atmosphere with garden views.',
      zh: '??????????? ????,???????',
      de: 'Gem�tliche Villa f�r kleine Familien. Ruhige Atmosph�re mit Gartenblick.'
    }
  }
];

// ===================================================================
// PROVINCIAL VILLAS (French Countryside)
// ===================================================================

export const PROVINCIAL_VILLAS: Villa[] = [
  {
    id: 'villa-gordes',
    name: 'Villa Gordes (Hijau)',
    cluster: 'Provincial Villas',
    capacity: '4 orang',
    bedrooms: 2,
    area: 76.96,
    toilets: 1,
    price: 5000000,
    priceWeekday: 5000000,
    priceWeekend: 6000000,
    priceHighSeason: 7500000,
    category: 'luxury',
    color: 'Hijau',
    features: ['French Style', 'Garden View', 'Charming'],
    image: '/images/villas/gordes/DSC07573(1).WEB.jpg',
    images: [
      '/images/villas/gordes/DSC06229WEB.jpg',
      '/images/villas/gordes/DSC06246WEB.jpg',
      '/images/villas/gordes/DSC06287WEB.jpg',
      '/images/villas/gordes/DSC06309WEB.jpg',
      '/images/villas/gordes/DSC06316(1)WEB.jpg',
      '/images/villas/gordes/DSC06348WEB.jpg',
      '/images/villas/gordes/DSC06397WEB.jpg',
      '/images/villas/gordes/DSC07573(1).WEB.jpg'
    ],
    bedConfiguration: [
      { room: 1, beds: 'queen bed 160x200 cm' },
      { room: 2, beds: 'queen bed 160x200 cm' }
    ],
    facilities: {
      room: [
        { id: 'Ruang tamu', en: 'Living room', zh: '??', de: 'Wohnzimmer' },
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer' },
        { id: 'Toilet & kamar mandi', en: 'Toilet & bathroom', zh: '??????', de: 'Toilette & Badezimmer' },
        { id: 'Teras', en: 'Terrace', zh: '??', de: 'Terrasse' }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '???', de: 'Wasserkocher' },
        { id: 'Smart TV/ TV kabel', en: 'Smart TV/ Cable TV', zh: '????/????', de: 'Smart TV / Kabelfernsehen' },
        { id: 'Wi-Fi', en: 'Wi-Fi', zh: '????', de: 'WLAN' },
        { id: 'Air mineral & dispenser', en: 'Mineral water & dispenser', zh: '???????', de: 'Mineralwasser & Spender' },
        { id: 'Kopi, creamer, gula, teh', en: 'Coffee, creamer, sugar, tea', zh: '??,??,?,?', de: 'Kaffee, Sahne, Zucker, Tee' },
        { id: 'Kopi kapsul', en: 'Capsule coffee', zh: '????', de: 'Kapselkaffee' },
        { id: 'Coffee maker', en: 'Coffee maker', zh: '???', de: 'Kaffeemaschine' },
        { id: 'Teko listrik', en: 'Electric kettle', zh: '????', de: 'Wasserkocher' },
        { id: 'Sabun', en: 'Soap', zh: '??', de: 'Seife' },
        { id: 'Shampoo', en: 'Shampoo', zh: '???', de: 'Shampoo' },
        { id: 'Sikat & pasta gigi', en: 'Toothbrush & toothpaste', zh: '?????', de: 'Zahnb�rste & Zahnpasta' },
        { id: 'Handuk', en: 'Towel', zh: '??', de: 'Handtuch' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '??', de: 'Fr�hst�ck' },
        { id: 'Makan siang', en: 'Lunch', zh: '??', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '??', de: 'Abendessen' }
      ],
      natural: [
        { id: 'Kolam renang', en: 'Swimming pool', zh: '???', de: 'Schwimmbad' },
        { id: 'Water playing', en: 'Water playing', zh: '??', de: 'Wasserspiele' },
        { id: 'Sungai', en: 'River', zh: '??', de: 'Fluss' },
        { id: 'Gazebo', en: 'Gazebo', zh: '??', de: 'Gazebo' },
        { id: 'Skywalk', en: 'Skywalk', zh: '????', de: 'Skywalk' },
        { id: 'Taman', en: 'Garden', zh: '??', de: 'Garten' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Jalan naik turun tangga (sekitar 300 m dari area parkir)', en: 'Stairs access (about 300 m from parking area)', zh: '????(?????300?)', de: 'Treppenzugang (ca. 300 m vom Parkplatz)' },
        { id: 'Estimasi waktu tempuh sekitar 1-2 jam dari pusat kota Bandung', en: 'Estimated travel time about 1-2 hours from Bandung city center', zh: '????????????1-2??', de: 'Gesch�tzte Reisezeit ca. 1-2 Stunden vom Stadtzentrum Bandung' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '????10%?', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa dengan sentuhan pedesaan Prancis. Nuansa hijau yang menenangkan.',
      en: 'Villa with a touch of French countryside. Soothing green nuances.',
      zh: '???????????? ??????????',
      de: 'Villa mit einem Hauch von franz�sischer Landschaft. Beruhigende gr�ne Nuancen.'
    }
  },
  {
    id: 'villa-roussillon',
    name: 'Villa Roussillon (Abu-abu)',
    cluster: 'Provincial Villas',
    capacity: '5 orang',
    bedrooms: 2,
    area: 102.09,
    toilets: 1,
    price: 6500000,
    priceWeekday: 6500000,
    priceWeekend: 7500000,
    priceHighSeason: 9000000,
    category: 'luxury',
    color: 'Abu-abu',
    features: ['French Style', 'Elegant', 'Garden View'],
    image: '/images/villas/roussillon/DSC07418.WEB.jpg',
    images: [
      '/images/villas/roussillon/DSC07004WEB.jpg',
      '/images/villas/roussillon/DSC07070WEB.jpg',
      '/images/villas/roussillon/DSC07080WEB.jpg',
      '/images/villas/roussillon/DSC07088WEB.WEB.jpg',
      '/images/villas/roussillon/DSC07125WEB.jpg',
      '/images/villas/roussillon/DSC07140WEB.jpg',
      '/images/villas/roussillon/DSC07418.WEB.jpg'
    ],
    bedConfiguration: [
      { room: 1, beds: 'queen bed 160x200 cm dan single bed 90x200cm' },
      { room: 2, beds: 'queen bed 160x200 cm' }
    ],
    facilities: {
      room: [
        { id: 'Ruang tamu', en: 'Living room', zh: '??', de: 'Wohnzimmer' },
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer' },
        { id: 'Toilet & kamar mandi', en: 'Toilet & bathroom', zh: '??????', de: 'Toilette & Badezimmer' },
        { id: 'Teras', en: 'Terrace', zh: '??', de: 'Terrasse' }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '???', de: 'Wasserkocher' },
        { id: 'Smart TV/ TV kabel', en: 'Smart TV/ Cable TV', zh: '????/????', de: 'Smart TV / Kabelfernsehen' },
        { id: 'Wi-Fi', en: 'Wi-Fi', zh: '????', de: 'WLAN' },
        { id: 'Air mineral & dispenser', en: 'Mineral water & dispenser', zh: '???????', de: 'Mineralwasser & Spender' },
        { id: 'Kopi, creamer, gula, teh', en: 'Coffee, creamer, sugar, tea', zh: '??,??,?,?', de: 'Kaffee, Sahne, Zucker, Tee' },
        { id: 'Kopi kapsul', en: 'Capsule coffee', zh: '????', de: 'Kapselkaffee' },
        { id: 'Coffee maker', en: 'Coffee maker', zh: '???', de: 'Kaffeemaschine' },
        { id: 'Teko listrik', en: 'Electric kettle', zh: '????', de: 'Wasserkocher' },
        { id: 'Sabun', en: 'Soap', zh: '??', de: 'Seife' },
        { id: 'Shampoo', en: 'Shampoo', zh: '???', de: 'Shampoo' },
        { id: 'Sikat & pasta gigi', en: 'Toothbrush & toothpaste', zh: '?????', de: 'Zahnb�rste & Zahnpasta' },
        { id: 'Handuk', en: 'Towel', zh: '??', de: 'Handtuch' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '??', de: 'Fr�hst�ck' },
        { id: 'Makan siang', en: 'Lunch', zh: '??', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '??', de: 'Abendessen' }
      ],
      natural: [
        { id: 'Kolam renang', en: 'Swimming pool', zh: '???', de: 'Schwimmbad' },
        { id: 'Water playing', en: 'Water playing', zh: '??', de: 'Wasserspiele' },
        { id: 'Sungai', en: 'River', zh: '??', de: 'Fluss' },
        { id: 'Gazebo', en: 'Gazebo', zh: '??', de: 'Gazebo' },
        { id: 'Skywalk', en: 'Skywalk', zh: '????', de: 'Skywalk' },
        { id: 'Taman', en: 'Garden', zh: '??', de: 'Garten' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Jalan naik turun tangga (sekitar 300 m dari area parkir)', en: 'Stairs access (about 300 m from parking area)', zh: '????(?????300?)', de: 'Treppenzugang (ca. 300 m vom Parkplatz)' },
        { id: 'Estimasi waktu tempuh sekitar 1-2 jam dari pusat kota Bandung', en: 'Estimated travel time about 1-2 hours from Bandung city center', zh: '????????????1-2??', de: 'Gesch�tzte Reisezeit ca. 1-2 Stunden vom Stadtzentrum Bandung' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '????10%?', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa elegan dengan nuansa abu-abu klasik. Cocok untuk keluarga kecil.',
      en: 'Elegant villa with classic gray nuances. Suitable for small families.',
      zh: '?????,???????????? ??????',
      de: 'Elegante Villa mit klassischen grauen Nuancen. Geeignet f�r kleine Familien.'
    }
  },
  {
    id: 'villa-lourmarin',
    name: 'Villa Lourmarin (Coklat)',
    cluster: 'Provincial Villas',
    capacity: '6 orang',
    bedrooms: 2,
    area: 106.24,
    toilets: 1,
    price: 7500000,
    priceWeekday: 7500000,
    priceWeekend: 9000000,
    priceHighSeason: 11000000,
    category: 'luxury',
    color: 'Coklat',
    features: ['French Style', 'Warm', 'Garden View'],
    image: '/images/villas/lourmarin/DSC09984.WEB.jpg',
    images: [
      '/images/villas/lourmarin/DSC06545WEB.jpg',
      '/images/villas/lourmarin/DSC06614WEB.jpg',
      '/images/villas/lourmarin/DSC06663WEB.jpg',
      '/images/villas/lourmarin/DSC06692WEB.jpg',
      '/images/villas/lourmarin/DSC06844WEB.jpg',
      '/images/villas/lourmarin/DSC06853WEB.jpg',
      '/images/villas/lourmarin/DSC06916WEB.jpg',
      '/images/villas/lourmarin/DSC09984.WEB.jpg'
    ],
    bedConfiguration: [
      { room: 1, beds: 'queen bed 160x200 cm dan single bed 90x200 cm' },
      { room: 2, beds: 'queen bed 160x200 cm dan single bed 90x200 cm' }
    ],
    facilities: {
      room: [
        { id: 'Ruang tamu', en: 'Living room', zh: '??', de: 'Wohnzimmer' },
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer' },
        { id: 'Toilet & kamar mandi', en: 'Toilet & bathroom', zh: '??????', de: 'Toilette & Badezimmer' },
        { id: 'Teras', en: 'Terrace', zh: '??', de: 'Terrasse' }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '???', de: 'Wasserkocher' },
        { id: 'Smart TV/ TV kabel', en: 'Smart TV/ Cable TV', zh: '????/????', de: 'Smart TV / Kabelfernsehen' },
        { id: 'Wi-Fi', en: 'Wi-Fi', zh: '????', de: 'WLAN' },
        { id: 'Air mineral & dispenser', en: 'Mineral water & dispenser', zh: '???????', de: 'Mineralwasser & Spender' },
        { id: 'Kopi, creamer, gula, teh', en: 'Coffee, creamer, sugar, tea', zh: '??,??,?,?', de: 'Kaffee, Sahne, Zucker, Tee' },
        { id: 'Kopi kapsul', en: 'Capsule coffee', zh: '????', de: 'Kapselkaffee' },
        { id: 'Coffee maker', en: 'Coffee maker', zh: '???', de: 'Kaffeemaschine' },
        { id: 'Teko listrik', en: 'Electric kettle', zh: '????', de: 'Wasserkocher' },
        { id: 'Sabun', en: 'Soap', zh: '??', de: 'Seife' },
        { id: 'Shampoo', en: 'Shampoo', zh: '???', de: 'Shampoo' },
        { id: 'Sikat & pasta gigi', en: 'Toothbrush & toothpaste', zh: '?????', de: 'Zahnb�rste & Zahnpasta' },
        { id: 'Handuk', en: 'Towel', zh: '??', de: 'Handtuch' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '??', de: 'Fr�hst�ck' },
        { id: 'Makan siang', en: 'Lunch', zh: '??', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '??', de: 'Abendessen' }
      ],
      natural: [
        { id: 'Kolam renang', en: 'Swimming pool', zh: '???', de: 'Schwimmbad' },
        { id: 'Water playing', en: 'Water playing', zh: '??', de: 'Wasserspiele' },
        { id: 'Sungai', en: 'River', zh: '??', de: 'Fluss' },
        { id: 'Gazebo', en: 'Gazebo', zh: '??', de: 'Gazebo' },
        { id: 'Skywalk', en: 'Skywalk', zh: '????', de: 'Skywalk' },
        { id: 'Taman', en: 'Garden', zh: '??', de: 'Garten' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Jalan naik turun tangga (sekitar 300 m dari area parkir)', en: 'Stairs access (about 300 m from parking area)', zh: '????(?????300?)', de: 'Treppenzugang (ca. 300 m vom Parkplatz)' },
        { id: 'Estimasi waktu tempuh sekitar 1-2 jam dari pusat kota Bandung', en: 'Estimated travel time about 1-2 hours from Bandung city center', zh: '????????????1-2??', de: 'Gesch�tzte Reisezeit ca. 1-2 Stunden vom Stadtzentrum Bandung' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '????10%?', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa hangat dengan nuansa coklat kayu. Kapasitas lebih besar untuk kenyamanan ekstra.',
      en: 'Warm villa with wood brown nuances. Larger capacity for extra comfort.',
      zh: '?????,?????????? ????,?????',
      de: 'Warme Villa mit holzbraunen Nuancen. Gr��ere Kapazit�t f�r zus�tzlichen Komfort.'
    }
  }
];

// Couple Retreat
export const RIVERSIDE_VILLAS: Villa[] = [
  {
    id: 'riverside-hana',
    name: 'Villa Hana',
    cluster: 'Riverside Villas',
    capacity: '6 Pax',
    bedrooms: 3,
    area: 129.5,
    toilets: 2,
    price: 6000000,
    priceWeekday: 6000000,
    priceWeekend: 7000000,
    priceHighSeason: 8500000,
    category: 'luxury',
    features: ['Riverside Location', 'Full Board Meals', 'Elegant Grey Interior'],
    image: '/images/villas/riverside-hana/HANA---Mix-Interior-3WEB.jpg',
    images: [
      '/images/villas/riverside-hana/HANA---KTC-2WEB.jpg',
      '/images/villas/riverside-hana/HANA---MB-7WEB.jpg',
      '/images/villas/riverside-hana/HANA---Mix-Interior-3WEB.jpg',
      '/images/villas/riverside-hana/HANA---Sc-MB-2WEB.jpg',
      '/images/villas/riverside-hana/HANA---Sc-MB-3WEB.jpg',
      '/images/villas/riverside-hana/HANA---Up-3WEB.jpg',
      '/images/villas/riverside-hana/RSV---Bathroom-1WEB.jpg',
      '/images/villas/riverside-hana/Rsv-11kompres.WEB.jpg'
    ],
    bedConfiguration: [
      { room: 1, beds: '1 Master bedroom (1 king bed)' },
      { room: 2, beds: '1 Second bedroom (1 king bed)' },
      { room: 3, beds: '1 Kamar tidur mezzanine (2 single bed)' }
    ],
    facilities: {
      room: [
        { id: 'Ruang keluarga', en: 'Family room', zh: '???', de: 'Familienzimmer' },
        { id: 'Dapur dan ruang makan', en: 'Kitchen and dining room', zh: '?????', de: 'K�che und Esszimmer' },
        { id: 'Toilet & kamar mandi di dalam villa', en: 'Toilet & bathroom inside villa', zh: '?????????', de: 'Toilette & Badezimmer in der Villa' },
        { id: 'Toilet & kamar mandi di lobby villa', en: 'Toilet & bathroom in villa lobby', zh: '??????????', de: 'Toilette & Badezimmer in der Villenlobby' },
        { id: 'Tempat api unggun & 1 ikat kayu bakar', en: 'Bonfire spot & 1 bundle of firewood', zh: '????1???', de: 'Lagerfeuerplatz & 1 B�ndel Brennholz' }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '???', de: 'Wasserkocher' },
        { id: 'Smart TV', en: 'Smart TV', zh: '????', de: 'Smart TV' },
        { id: 'Wifi', en: 'Wifi', zh: '????', de: 'WLAN' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '??', de: 'Fr�hst�ck' },
        { id: 'Makan siang', en: 'Lunch', zh: '??', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '??', de: 'Abendessen' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2??????', de: '2 Kaltwasser-Schwimmb�der' },
        { id: 'Trekking/hiking', en: 'Trekking/hiking', zh: '????', de: 'Trekking / Wandern' },
        { id: 'Children playground', en: 'Children playground', zh: '?????', de: 'Kinderspielplatz' },
        { id: 'Water playing', en: 'Water playing', zh: '??', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh?', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '????', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '???', de: 'Vogelk�figbr�cke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '??', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '??', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '?????', de: 'Nat�rlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '14.00 WIB',
      checkOut: '10.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '????????????????', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '?????', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '????10%?', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa elegan dengan interior abu-abu bernuansa modern yang terletak tepat di samping sungai Cigeureuh.',
      en: 'Elegant villa with modern grey interior located right next to the Cigeureuh river.',
      zh: '?????,????????,?? Cigeureuh ???',
      de: 'Elegante Villa mit modernem grauem Interieur direkt am Fluss Cigeureuh.'
    }
  },
  {
    id: 'riverside-fiore',
    name: 'Villa Fiore',
    cluster: 'Riverside Villas',
    capacity: '6 Pax',
    bedrooms: 3,
    area: 129.5,
    toilets: 2,
    price: 6000000,
    priceWeekday: 6000000,
    priceWeekend: 7000000,
    priceHighSeason: 8500000,
    category: 'luxury',
    features: ['Riverside Location', 'Full Board Meals', 'Fresh Green Interior'],
    image: '/images/villas/riverside-fiore/FIORE---Living-Room-1WEB.jpg',
    images: [
      '/images/villas/riverside-fiore/FIORE---Living-Room-1WEB.jpg',
      '/images/villas/riverside-fiore/FIORE---Master-Bedroom-2WEB.jpg',
      '/images/villas/riverside-fiore/FIORE---Master-Bedroom-4WEB.jpg',
      '/images/villas/riverside-fiore/FIORE---Mix-Interior-6WEB.jpg',
      '/images/villas/riverside-fiore/FIORE---Upstairs-2WEB.jpg',
      '/images/villas/riverside-fiore/FIORE---Upstairs-3WEB.jpg',
      '/images/villas/riverside-fiore/RSV---Bathroom-1WEB.jpg',
      '/images/villas/riverside-fiore/Rsv-11kompres.WEB.jpg'
    ],
    bedConfiguration: [
      { room: 1, beds: '1 Master bedroom (1 king bed)' },
      { room: 2, beds: '1 Second bedroom (1 king bed)' },
      { room: 3, beds: '1 Kamar tidur mezzanine (2 single bed)' }
    ],
    facilities: {
      room: [
        { id: 'Ruang keluarga', en: 'Family room', zh: '???', de: 'Familienzimmer' },
        { id: 'Dapur dan ruang makan', en: 'Kitchen and dining room', zh: '?????', de: 'K�che und Esszimmer' },
        { id: 'Toilet & kamar mandi di dalam villa', en: 'Toilet & bathroom inside villa', zh: '?????????', de: 'Toilette & Badezimmer in der Villa' },
        { id: 'Toilet & kamar mandi di lobby villa', en: 'Toilet & bathroom in villa lobby', zh: '??????????', de: 'Toilette & Badezimmer in der Villenlobby' },
        { id: 'Tempat api unggun & 1 ikat kayu bakar', en: 'Bonfire spot & 1 bundle of firewood', zh: '????1???', de: 'Lagerfeuerplatz & 1 B�ndel Brennholz' }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '???', de: 'Wasserkocher' },
        { id: 'Smart TV', en: 'Smart TV', zh: '????', de: 'Smart TV' },
        { id: 'Wifi', en: 'Wifi', zh: '????', de: 'WLAN' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '??', de: 'Fr�hst�ck' },
        { id: 'Makan siang', en: 'Lunch', zh: '??', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '??', de: 'Abendessen' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2??????', de: '2 Kaltwasser-Schwimmb�der' },
        { id: 'Trekking/hiking', en: 'Trekking/hiking', zh: '????', de: 'Trekking / Wandern' },
        { id: 'Children playground', en: 'Children playground', zh: '?????', de: 'Kinderspielplatz' },
        { id: 'Water playing', en: 'Water playing', zh: '??', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh?', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '????', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '???', de: 'Vogelk�figbr�cke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '??', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '??', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '?????', de: 'Nat�rlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '14.00 WIB',
      checkOut: '10.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '????????????????', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '?????', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '????10%?', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa elegan dengan interior hijau bernuansa segar dan sejuk yang terletak tepat di samping sungai Cigeureuh.',
      en: 'Elegant villa with fresh green interior located right next to the Cigeureuh river.',
      zh: '?????,?????????,?? Cigeureuh ???',
      de: 'Elegante Villa mit frischem gr�nem Interieur direkt am Fluss Cigeureuh.'
    }
  },
  {
    id: 'riverside-blomst',
    name: 'Villa Blomst',
    cluster: 'Riverside Villas',
    capacity: '6 Pax',
    bedrooms: 3,
    area: 240.4,
    toilets: 2,
    price: 6000000,
    priceWeekday: 6000000,
    priceWeekend: 7000000,
    priceHighSeason: 8500000,
    category: 'luxury',
    features: ['Riverside Location', 'Full Board Meals', 'Warm Brown Interior'],
    image: '/images/villas/riverside-blomst/BLOMST---Living-Room-1WEB.jpg',
    images: [
      '/images/villas/riverside-blomst/BLOMST---Living-Room-1WEB.jpg',
      '/images/villas/riverside-blomst/BLOMST---Master-Bedroom-8WEB.jpg',
      '/images/villas/riverside-blomst/BLOMST---Master-Bedroom-13WEB.jpg',
      '/images/villas/riverside-blomst/BLOMST---Mix-Interior-5WEB.jpg',
      '/images/villas/riverside-blomst/BLOMST---Second-Master-Bedroom-1WEB.jpg',
      '/images/villas/riverside-blomst/BLOMST---Upstairs-2WEB.jpg',
      '/images/villas/riverside-blomst/BLOMST---Upstairs-5.WEB.jpg'
    ],
    bedConfiguration: [
      { room: 1, beds: '1 Master bedroom (1 king bed)' },
      { room: 2, beds: '1 Second bedroom (1 king bed)' },
      { room: 3, beds: '1 Kamar tidur mezzanine (2 single bed)' }
    ],
    facilities: {
      room: [
        { id: 'Ruang keluarga', en: 'Family room', zh: '???', de: 'Familienzimmer' },
        { id: 'Dapur dan ruang makan', en: 'Kitchen and dining room', zh: '?????', de: 'K�che und Esszimmer' },
        { id: 'Toilet & kamar mandi di dalam villa', en: 'Toilet & bathroom inside villa', zh: '?????????', de: 'Toilette & Badezimmer in der Villa' },
        { id: 'Toilet & kamar mandi di lobby villa', en: 'Toilet & bathroom in villa lobby', zh: '??????????', de: 'Toilette & Badezimmer in der Villenlobby' },
        { id: 'Tempat api unggun & 1 ikat kayu bakar', en: 'Bonfire spot & 1 bundle of firewood', zh: '????1???', de: 'Lagerfeuerplatz & 1 B�ndel Brennholz' }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '???', de: 'Wasserkocher' },
        { id: 'Smart TV', en: 'Smart TV', zh: '????', de: 'Smart TV' },
        { id: 'Wifi', en: 'Wifi', zh: '????', de: 'WLAN' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '??', de: 'Fr�hst�ck' },
        { id: 'Makan siang', en: 'Lunch', zh: '??', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '??', de: 'Abendessen' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2??????', de: '2 Kaltwasser-Schwimmb�der' },
        { id: 'Trekking/hiking', en: 'Trekking/hiking', zh: '????', de: 'Trekking / Wandern' },
        { id: 'Children playground', en: 'Children playground', zh: '?????', de: 'Kinderspielplatz' },
        { id: 'Water playing', en: 'Water playing', zh: '??', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh?', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '????', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '???', de: 'Vogelk�figbr�cke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '??', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '??', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '?????', de: 'Nat�rlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '14.00 WIB',
      checkOut: '10.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '????????????????', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '?????', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '????10%?', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa elegan dengan interior coklat bernuansa hangat yang terletak tepat di samping sungai Cigeureuh.',
      en: 'Elegant villa with warm brown interior located right next to the Cigeureuh river.',
      zh: '?????,?????????,?? Cigeureuh ???',
      de: 'Elegante Villa mit warmem braunem Interieur direkt am Fluss Cigeureuh.'
    }
  }
];

export const KAMPUH_BECIK_VILLAS: Villa[] = [
  // Executive Type Units
  {
    id: 'kampuh-becik-abutilon',
    name: 'Abutilon',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2500000,
    priceWeekday: 2500000,
    priceWeekend: 3000000,
    priceHighSeason: 3500000,
    features: ['Direct River Access', 'Romantic Setting', 'King Bed'],
    image: '/images/villas/abutilon/AWB_4760WEB.jpg',
    images: [
      '/images/villas/abutilon/26102022035607xItWEB.jpg',
      '/images/villas/abutilon/AWB_4760WEB.jpg',
      '/images/villas/abutilon/AWB_4769WEB.jpg',
      '/images/villas/abutilon/AWB_4776WEB.jpg',
      '/images/villas/abutilon/AWB_4781-(1)WEB.jpg',
      '/images/villas/abutilon/AWB_4784WEB.jpg',
      '/images/villas/abutilon/AWB_4788WEB.jpg',
      '/images/villas/abutilon/toilet-KB-4WEB.jpg'
    ],
    category: 'couple',
    badge: 'Executive Type',
    bedConfiguration: [{ room: 1, beds: '1 King Bed' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer' },
        { id: 'Balkon', en: 'Balcony', zh: '??', de: 'Balkon' }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '?????????', de: 'Halb-offenes Badezimmer & Toilette' },
        { id: 'Water heater', en: 'Water heater', zh: '???', de: 'Wasserkocher' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '??', de: 'Fr�hst�ck' },
        { id: 'Makan siang', en: 'Lunch', zh: '??', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '??', de: 'Abendessen' },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '????', de: 'Begr��ungsfr�chte' },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '??????', de: 'Ferrero Rocher Schokolade' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2??????', de: '2 Kaltwasser-Schwimmb�der' },
        { id: 'Water playing', en: 'Water playing', zh: '??', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh?', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '????', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '???', de: 'Vogelk�figbr�cke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '??', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '??', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '?????', de: 'Nat�rlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '????????????????', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '?????', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '????10%?', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa kabin tipe Executive dengan nuansa alami. Dilengkapi kamar mandi semi-outdoor yang instagramable. Villa kabin baris pertama dengan balkon yang memiliki pemandangan taman langsung.',
      en: 'Executive type cabin villa with natural atmosphere. Equipped with instagramable semi-outdoor bathroom. First row cabin villa with front garden view from balcony.',
      zh: '????????,??????? ?????????????',
      de: 'Executive-Kabinen-Villa mit nat�rlicher Atmosph�re. Ausgestattet mit instagram-tauglichem halb-offenem Badezimmer.'
    }
  },
  {
    id: 'kampuh-becik-agaphantus',
    name: 'Agaphantus',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2500000,
    priceWeekday: 2500000,
    priceWeekend: 3000000,
    priceHighSeason: 3500000,
    features: ['Direct River Access', 'Romantic Setting', 'Twin Bed'],
    image: '/images/villas/agaphantus/AWB_4259WEB.jpg',
    images: [
      '/images/villas/agaphantus/AWB_4259WEB.jpg',
      '/images/villas/agaphantus/AWB_4268web.jpg',
      '/images/villas/agaphantus/AWB_4272WEB.jpg',
      '/images/villas/agaphantus/AWB_4306web.jpg',
      '/images/villas/agaphantus/agaphantuss.jpgWEB.jpg',
      '/images/villas/agaphantus/jalan-kb-(1)web.jpg',
      '/images/villas/agaphantus/toilet-KB-4WEB.jpg'
    ],
    category: 'couple',
    badge: 'Executive Type',
    bedConfiguration: [{ room: 1, beds: '2 Single Beds' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer' },
        { id: 'Balkon', en: 'Balcony', zh: '??', de: 'Balkon' }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '?????????', de: 'Halb-offenes Badezimmer & Toilette' },
        { id: 'Water heater', en: 'Water heater', zh: '???', de: 'Wasserkocher' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '??', de: 'Fr�hst�ck' },
        { id: 'Makan siang', en: 'Lunch', zh: '??', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '??', de: 'Abendessen' },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '????', de: 'Begr��ungsfr�chte' },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '??????', de: 'Ferrero Rocher Schokolade' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2??????', de: '2 Kaltwasser-Schwimmb�der' },
        { id: 'Water playing', en: 'Water playing', zh: '??', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh?', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '????', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '???', de: 'Vogelk�figbr�cke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '??', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '??', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '?????', de: 'Nat�rlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '????????????????', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '?????', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '????10%?', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa kabin tipe Executive dengan nuansa alami. Dilengkapi kamar mandi semi-outdoor yang instagramable. Villa kabin baris pertama dengan balkon yang memiliki pemandangan taman langsung.',
      en: 'Executive type cabin villa with natural atmosphere. Equipped with instagramable semi-outdoor bathroom. First row cabin villa with front garden view from balcony.',
      zh: '????????,??????? ?????????????',
      de: 'Executive-Kabinen-Villa mit nat�rlicher Atmosph�re. Ausgestattet mit instagram-tauglichem halb-offenem Badezimmer.'
    }
  },
  {
    id: 'kampuh-becik-allamanda',
    name: 'Allamanda',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2500000,
    priceWeekday: 2500000,
    priceWeekend: 3000000,
    priceHighSeason: 3500000,
    features: ['Direct River Access', 'Romantic Setting', 'King Bed'],
    image: '/images/villas/allamanda/AWB_4327WEB.jpg',
    images: [
      '/images/villas/allamanda/AWB_4327WEB.jpg',
      '/images/villas/allamanda/AWB_4331WEB.jpg',
      '/images/villas/allamanda/AWB_4341WEB.jpg',
      '/images/villas/allamanda/AWB_4344WEB.jpg',
      '/images/villas/allamanda/AWB_4349.WEB.jpg',
      '/images/villas/allamanda/KBWEB.jpg',
      '/images/villas/allamanda/jalan-kb-(10)web.jpg',
      '/images/villas/allamanda/toilet-KB-4WEB.jpg'
    ],
    category: 'couple',
    badge: 'Executive Type',
    bedConfiguration: [{ room: 1, beds: '1 King Bed' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer' },
        { id: 'Balkon', en: 'Balcony', zh: '??', de: 'Balkon' }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '?????????', de: 'Halb-offenes Badezimmer & Toilette' },
        { id: 'Water heater', en: 'Water heater', zh: '???', de: 'Wasserkocher' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '??', de: 'Fr�hst�ck' },
        { id: 'Makan siang', en: 'Lunch', zh: '??', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '??', de: 'Abendessen' },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '????', de: 'Begr��ungsfr�chte' },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '??????', de: 'Ferrero Rocher Schokolade' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2??????', de: '2 Kaltwasser-Schwimmb�der' },
        { id: 'Water playing', en: 'Water playing', zh: '??', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh?', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '????', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '???', de: 'Vogelk�figbr�cke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '??', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '??', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '?????', de: 'Nat�rlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '????????????????', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '?????', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '????10%?', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa kabin tipe Executive dengan nuansa alami. Dilengkapi kamar mandi semi-outdoor yang instagramable. Villa kabin baris pertama dengan balkon yang memiliki pemandangan taman langsung.',
      en: 'Executive type cabin villa with natural atmosphere. Equipped with instagramable semi-outdoor bathroom. First row cabin villa with front garden view from balcony.',
      zh: '????????,??????? ?????????????',
      de: 'Executive-Kabinen-Villa mit nat�rlicher Atmosph�re. Ausgestattet mit instagram-tauglichem halb-offenem Badezimmer.'
    }
  },
  {
    id: 'kampuh-becik-azalea',
    name: 'Azalea',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2500000,
    priceWeekday: 2500000,
    priceWeekend: 3000000,
    priceHighSeason: 3500000,
    features: ['Direct River Access', 'Romantic Setting', 'Twin Bed'],
    image: '/images/villas/azalea/AWB_4381WEB.jpg',
    images: [
      '/images/villas/azalea/4.-Detail-BedroomWEB.jpg',
      '/images/villas/azalea/AWB_4381WEB.jpg',
      '/images/villas/azalea/AWB_4390WEB.jpg',
      '/images/villas/azalea/AWB_4405.WEB.jpg',
      '/images/villas/azalea/AWB_4416.WEB.jpg',
      '/images/villas/azalea/jalan-kb-(10)web.jpg',
      '/images/villas/azalea/toilet-KB-4WEB.jpg'
    ],
    category: 'couple',
    badge: 'Executive Type',
    bedConfiguration: [{ room: 1, beds: '2 Single Beds' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer' },
        { id: 'Balkon', en: 'Balcony', zh: '??', de: 'Balkon' }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '?????????', de: 'Halb-offenes Badezimmer & Toilette' },
        { id: 'Water heater', en: 'Water heater', zh: '???', de: 'Wasserkocher' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '??', de: 'Fr�hst�ck' },
        { id: 'Makan siang', en: 'Lunch', zh: '??', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '??', de: 'Abendessen' },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '????', de: 'Begr��ungsfr�chte' },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '??????', de: 'Ferrero Rocher Schokolade' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2??????', de: '2 Kaltwasser-Schwimmb�der' },
        { id: 'Water playing', en: 'Water playing', zh: '??', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh?', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '????', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '???', de: 'Vogelk�figbr�cke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '??', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '??', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '?????', de: 'Nat�rlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '????????????????', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '?????', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '????10%?', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa kabin tipe Executive dengan nuansa alami. Dilengkapi kamar mandi semi-outdoor yang instagramable. Villa kabin baris pertama dengan balkon yang memiliki pemandangan taman langsung.',
      en: 'Executive type cabin villa with natural atmosphere. Equipped with instagramable semi-outdoor bathroom. First row cabin villa with front garden view from balcony.',
      zh: '????????,??????? ?????????????',
      de: 'Executive-Kabinen-Villa mit nat�rlicher Atmosph�re. Ausgestattet mit instagram-tauglichem halb-offenem Badezimmer.'
    }
  },
  {
    id: 'kampuh-becik-buddleja',
    name: 'Buddleja',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2500000,
    priceWeekday: 2500000,
    priceWeekend: 3000000,
    priceHighSeason: 3500000,
    features: ['Direct River Access', 'Romantic Setting', 'King Bed'],
    image: '/images/villas/buddleja/6.-Bedroom-ViewWEB.jpg',
    images: [
      '/images/villas/buddleja/6.-Bedroom-ViewWEB.jpg',
      '/images/villas/buddleja/AWB_4430WEB.jpg',
      '/images/villas/buddleja/AWB_4441-(1)WEB.jpg',
      '/images/villas/buddleja/AWB_4451WEB.jpg',
      '/images/villas/buddleja/AWB_4457-(1).WEB.jpg',
      '/images/villas/buddleja/jalan-kb-(1)web.jpg',
      '/images/villas/buddleja/toilet-KB-4WEB.jpg'
    ],
    category: 'couple',
    badge: 'Executive Type',
    bedConfiguration: [{ room: 1, beds: '1 King Bed' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer' },
        { id: 'Balkon', en: 'Balcony', zh: '??', de: 'Balkon' }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '?????????', de: 'Halb-offenes Badezimmer & Toilette' },
        { id: 'Water heater', en: 'Water heater', zh: '???', de: 'Wasserkocher' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '??', de: 'Fr�hst�ck' },
        { id: 'Makan siang', en: 'Lunch', zh: '??', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '??', de: 'Abendessen' },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '????', de: 'Begr��ungsfr�chte' },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '??????', de: 'Ferrero Rocher Schokolade' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2??????', de: '2 Kaltwasser-Schwimmb�der' },
        { id: 'Water playing', en: 'Water playing', zh: '??', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh?', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '????', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '???', de: 'Vogelk�figbr�cke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '??', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '??', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '?????', de: 'Nat�rlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '????????????????', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '?????', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '????10%?', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa kabin tipe Executive dengan nuansa alami. Dilengkapi kamar mandi semi-outdoor yang instagramable. Villa kabin baris pertama dengan balkon yang memiliki pemandangan taman langsung.',
      en: 'Executive type cabin villa with natural atmosphere. Equipped with instagramable semi-outdoor bathroom. First row cabin villa with front garden view from balcony.',
      zh: '????????,??????? ?????????????',
      de: 'Executive-Kabinen-Villa mit nat�rlicher Atmosph�re. Ausgestattet mit instagram-tauglichem halb-offenem Badezimmer.'
    }
  },

  // Deluxe Type Units
  {
    id: 'kampuh-becik-calathea',
    name: 'Calathea',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2000000,
    priceWeekday: 2000000,
    priceWeekend: 2500000,
    priceHighSeason: 3000000,
    features: ['Mountain View', 'Private Balcony', 'King Bed'],
    image: '/images/villas/calathea/AWB_4490WEB.jpg',
    images: [
      '/images/villas/calathea/AWB_4490WEB.jpg',
      '/images/villas/calathea/AWB_4500WEB.jpg',
      '/images/villas/calathea/AWB_4502WEB.jpg',
      '/images/villas/calathea/AWB_4505WEB.jpg',
      '/images/villas/calathea/AWB_4510WEB.jpg',
      '/images/villas/calathea/AWB_4522WEB.jpg',
      '/images/villas/calathea/jalan-kb-(2).WEB.jpg',
      '/images/villas/calathea/toilet-KB-4WEB.jpg'
    ],
    category: 'couple',
    badge: 'Deluxe Type',
    bedConfiguration: [{ room: 1, beds: '1 King Bed' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer' },
        { id: 'Balkon', en: 'Balcony', zh: '??', de: 'Balkon' }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '?????????', de: 'Halb-offenes Badezimmer & Toilette' },
        { id: 'Water heater', en: 'Water heater', zh: '???', de: 'Wasserkocher' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '??', de: 'Fr�hst�ck' },
        { id: 'Makan siang', en: 'Lunch', zh: '??', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '??', de: 'Abendessen' },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '????', de: 'Begr��ungsfr�chte' },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '??????', de: 'Ferrero Rocher Schokolade' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2??????', de: '2 Kaltwasser-Schwimmb�der' },
        { id: 'Water playing', en: 'Water playing', zh: '??', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh?', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '????', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '???', de: 'Vogelk�figbr�cke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '??', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '??', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '?????', de: 'Nat�rlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '????????????????', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '?????', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '????10%?', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa kabin tipe Deluxe yang cozy dengan balkon untuk bersantai.',
      en: 'Cozy Deluxe type cabin villa with relaxing balcony.',
      zh: '???????????,???????',
      de: 'Gem�tliche Deluxe-Kabinen-Villa mit entspannendem Balkon.'
    }
  },
  {
    id: 'kampuh-becik-camelia',
    name: 'Camelia',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2000000,
    priceWeekday: 2000000,
    priceWeekend: 2500000,
    priceHighSeason: 3000000,
    features: ['Mountain View', 'Private Balcony', 'Twin Bed'],
    image: '/images/villas/camelia/4.-Detail-BedroomWEB.jpg',
    images: [
      '/images/villas/camelia/4.-Detail-BedroomWEB.jpg',
      '/images/villas/camelia/6.-Terrace-ViewWEB.jpg',
      '/images/villas/camelia/AWB_4567WEB.jpg',
      '/images/villas/camelia/AWB_4631WEB.jpg',
      '/images/villas/camelia/CAMELIAaaWEB.jpg',
      '/images/villas/camelia/CAMELIAaWEB.jpg',
      '/images/villas/camelia/CAMELIAWEB.jpg',
      '/images/villas/camelia/KB---View-2.WEB.jpg',
      '/images/villas/camelia/KBWEB.jpg',
      '/images/villas/camelia/toilet-KB-4WEB.jpg'
    ],
    category: 'couple',
    badge: 'Deluxe Type',
    bedConfiguration: [{ room: 1, beds: '2 Single Beds' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer' },
        { id: 'Balkon', en: 'Balcony', zh: '??', de: 'Balkon' }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '?????????', de: 'Halb-offenes Badezimmer & Toilette' },
        { id: 'Water heater', en: 'Water heater', zh: '???', de: 'Wasserkocher' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '??', de: 'Fr�hst�ck' },
        { id: 'Makan siang', en: 'Lunch', zh: '??', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '??', de: 'Abendessen' },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '????', de: 'Begr��ungsfr�chte' },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '??????', de: 'Ferrero Rocher Schokolade' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2??????', de: '2 Kaltwasser-Schwimmb�der' },
        { id: 'Water playing', en: 'Water playing', zh: '??', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh?', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '????', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '???', de: 'Vogelk�figbr�cke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '??', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '??', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '?????', de: 'Nat�rlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '????????????????', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '?????', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '????10%?', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa kabin tipe Deluxe yang cozy dengan balkon untuk bersantai.',
      en: 'Cozy Deluxe type cabin villa with relaxing balcony.',
      zh: '???????????,???????',
      de: 'Gem�tliche Kabinenvilla vom Typ Deluxe mit entspannendem Balkon.'
    }
  },
  {
    id: 'kampuh-becik-jacaranda',
    name: 'Jacaranda',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2000000,
    priceWeekday: 2000000,
    priceWeekend: 2500000,
    priceHighSeason: 3000000,
    features: ['Mountain View', 'Private Balcony', 'King Bed'],
    image: '/images/villas/jacaranda/AWB_4595WEB.jpg',
    images: [
      '/images/villas/jacaranda/AWB_4595WEB.jpg',
      '/images/villas/jacaranda/AWB_4597WEB.jpg',
      '/images/villas/jacaranda/AWB_4608WEB.jpg',
      '/images/villas/jacaranda/AWB_4623WEB.jpg',
      '/images/villas/jacaranda/AWB_4631.WEB.jpg',
      '/images/villas/jacaranda/jalan-kb-(1)web.jpg',
      '/images/villas/jacaranda/toilet-KB-4WEB.jpg'
    ],
    category: 'couple',
    badge: 'Deluxe Type',
    bedConfiguration: [{ room: 1, beds: '1 King Bed' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer' },
        { id: 'Balkon', en: 'Balcony', zh: '??', de: 'Balkon' }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '?????????', de: 'Halb-offenes Badezimmer & Toilette' },
        { id: 'Water heater', en: 'Water heater', zh: '???', de: 'Wasserkocher' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '??', de: 'Fr�hst�ck' },
        { id: 'Makan siang', en: 'Lunch', zh: '??', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '??', de: 'Abendessen' },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '????', de: 'Begr��ungsfr�chte' },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '??????', de: 'Ferrero Rocher Schokolade' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2??????', de: '2 Kaltwasser-Schwimmb�der' },
        { id: 'Water playing', en: 'Water playing', zh: '??', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh?', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '????', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '???', de: 'Vogelk�figbr�cke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '??', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '??', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '?????', de: 'Nat�rlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '????????????????', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '?????', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '????10%?', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa kabin tipe Deluxe yang cozy dengan balkon untuk bersantai.',
      en: 'Cozy Deluxe type cabin villa with relaxing balcony.',
      zh: '???????????,???????',
      de: 'Gem�tliche Kabinenvilla vom Typ Deluxe mit entspannendem Balkon.'
    }
  },
  {
    id: 'kampuh-becik-kigelia',
    name: 'Kigelia',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2000000,
    priceWeekday: 2000000,
    priceWeekend: 2500000,
    priceHighSeason: 3000000,
    features: ['Mountain View', 'Private Balcony', 'Twin Bed'],
    image: '/images/villas/kigelia/3.-Bedroom-View-WEB.jpg',
    images: [
      '/images/villas/kigelia/3.-Bedroom-View-WEB.jpg',
      '/images/villas/kigelia/5.-BedroomWEB.jpg',
      '/images/villas/kigelia/AWB_4647WEB.jpg',
      '/images/villas/kigelia/AWB_4678WEB.jpg',
      '/images/villas/kigelia/AWB_4683WEB.jpg',
      '/images/villas/kigelia/KB---View-2WEB.jpg',
      '/images/villas/kigelia/KB---View-5WEB.jpg'
    ],
    category: 'couple',
    badge: 'Deluxe Type',
    bedConfiguration: [{ room: 1, beds: '2 Single Beds' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer' },
        { id: 'Balkon', en: 'Balcony', zh: '??', de: 'Balkon' }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '?????????', de: 'Halb-offenes Badezimmer & Toilette' },
        { id: 'Water heater', en: 'Water heater', zh: '???', de: 'Wasserkocher' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '??', de: 'Fr�hst�ck' },
        { id: 'Makan siang', en: 'Lunch', zh: '??', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '??', de: 'Abendessen' },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '????', de: 'Begr��ungsfr�chte' },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '??????', de: 'Ferrero Rocher Schokolade' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2??????', de: '2 Kaltwasser-Schwimmb�der' },
        { id: 'Water playing', en: 'Water playing', zh: '??', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh?', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '????', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '???', de: 'Vogelk�figbr�cke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '??', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '??', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '?????', de: 'Nat�rlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '????????????????', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '?????', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '????10%?', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa kabin tipe Deluxe yang cozy dengan balkon untuk bersantai.',
      en: 'Cozy Deluxe type cabin villa with relaxing balcony.',
      zh: '???????????,???????',
      de: 'Gem�tliche Kabinenvilla vom Typ Deluxe mit entspannendem Balkon.'
    }
  },
  {
    id: 'kampuh-becik-lophantera',
    name: 'Lophantera',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2000000,
    priceWeekday: 2000000,
    priceWeekend: 2500000,
    priceHighSeason: 3000000,
    features: ['Mountain View', 'Private Balcony', 'King Bed'],
    image: '/images/villas/lophantera/4.-Detail-BedroomWEB.jpg',
    images: [
      '/images/villas/lophantera/4.-Detail-BedroomWEB.jpg',
      '/images/villas/lophantera/5.-BedroomWEB.jpg',
      '/images/villas/lophantera/AWB_4690-editWEB.jpg',
      '/images/villas/lophantera/AWB_4702.WEB.jpg',
      '/images/villas/lophantera/AWB_4712WEB.jpg',
      '/images/villas/lophantera/AWB_4720WEB.jpg',
      '/images/villas/lophantera/jalan-kb-(10)web.jpg',
      '/images/villas/lophantera/toilet-KB-4WEB.jpg'
    ],
    category: 'couple',
    badge: 'Deluxe Type',
    bedConfiguration: [{ room: 1, beds: '1 King Bed' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer' },
        { id: 'Balkon', en: 'Balcony', zh: '??', de: 'Balkon' }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '?????????', de: 'Halb-offenes Badezimmer & Toilette' },
        { id: 'Water heater', en: 'Water heater', zh: '???', de: 'Wasserkocher' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '??', de: 'Fr�hst�ck' },
        { id: 'Makan siang', en: 'Lunch', zh: '??', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '??', de: 'Abendessen' },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '????', de: 'Begr��ungsfr�chte' },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '??????', de: 'Ferrero Rocher Schokolade' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2??????', de: '2 Kaltwasser-Schwimmb�der' },
        { id: 'Water playing', en: 'Water playing', zh: '??', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh?', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '????', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '???', de: 'Vogelk�figbr�cke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '??', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '??', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '?????', de: 'Nat�rlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '????????????????', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '?????', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '????10%?', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa kabin tipe Deluxe yang cozy dengan balkon untuk bersantai.',
      en: 'Cozy Deluxe type cabin villa with relaxing balcony.',
      zh: '???????????,???????',
      de: 'Gem�tliche Kabinenvilla vom Typ Deluxe mit entspannendem Balkon.'
    }
  },
  {
    id: 'kampuh-becik-monstera',
    name: 'Monstera',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2000000,
    priceWeekday: 2000000,
    priceWeekend: 2500000,
    priceHighSeason: 3000000,
    features: ['Mountain View', 'Private Balcony', 'King Bed'],
    image: '/images/villas/monstera/4.-Bedroom-ViewWEB.jpg',
    images: [
      '/images/villas/monstera/4.-Bedroom-ViewWEB.jpg',
      '/images/villas/monstera/AWB_4162WEB.jpg',
      '/images/villas/monstera/AWB_4168WEB.jpg',
      '/images/villas/monstera/AWB_4177WEB.jpg',
      '/images/villas/monstera/AWB_4180WEB.jpg',
      '/images/villas/monstera/AWB_4184WEB.jpg',
      '/images/villas/monstera/AWB_4236.WEB.jpg',
      '/images/villas/monstera/toilet-KB-4WEB.jpg'
    ],
    category: 'couple',
    badge: 'Deluxe Type',
    bedConfiguration: [{ room: 1, beds: '1 King Bed' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer' },
        { id: 'Balkon', en: 'Balcony', zh: '??', de: 'Balkon' }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '?????????', de: 'Halb-offenes Badezimmer & Toilette' },
        { id: 'Water heater', en: 'Water heater', zh: '???', de: 'Wasserkocher' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '??', de: 'Fr�hst�ck' },
        { id: 'Makan siang', en: 'Lunch', zh: '??', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '??', de: 'Abendessen' },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '????', de: 'Begr��ungsfr�chte' },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '??????', de: 'Ferrero Rocher Schokolade' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2??????', de: '2 Kaltwasser-Schwimmb�der' },
        { id: 'Water playing', en: 'Water playing', zh: '??', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh?', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '????', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '???', de: 'Vogelk�figbr�cke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '??', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '??', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '?????', de: 'Nat�rlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '????????????????', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '?????', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '????10%?', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa kabin tipe Deluxe yang cozy dengan balkon untuk bersantai.',
      en: 'Cozy Deluxe type cabin villa with relaxing balcony.',
      zh: '???????????,???????',
      de: 'Gem�tliche Kabinenvilla vom Typ Deluxe mit entspannendem Balkon.'
    }
  },
  {
    id: 'kampuh-becik-philodendron',
    name: 'Philodendron',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2000000,
    priceWeekday: 2000000,
    priceWeekend: 2500000,
    priceHighSeason: 3000000,
    features: ['Mountain View', 'Private Balcony', 'Twin Bed'],
    image: '/images/villas/philodendron/AWB_4792WEB.jpg',
    images: [
      '/images/villas/philodendron/AWB_4792WEB.jpg',
      '/images/villas/philodendron/AWB_4795WEB.jpg',
      '/images/villas/philodendron/AWB_4800WEB.jpg',
      '/images/villas/philodendron/AWB_4804web.jpg',
      '/images/villas/philodendron/AWB_4829.WEB.jpg',
      '/images/villas/philodendron/AWB_4829WEB.jpg',
      '/images/villas/philodendron/KB---View-2.WEB.jpg',
      '/images/villas/philodendron/Philodendron-4.WEB.jpg',
      '/images/villas/philodendron/toilet-KB-4WEB.jpg'
    ],
    category: 'couple',
    badge: 'Deluxe Type',
    bedConfiguration: [{ room: 1, beds: '2 Single Beds' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer' },
        { id: 'Balkon', en: 'Balcony', zh: '??', de: 'Balkon' }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '?????????', de: 'Halb-offenes Badezimmer & Toilette' },
        { id: 'Water heater', en: 'Water heater', zh: '???', de: 'Wasserkocher' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '??', de: 'Fr�hst�ck' },
        { id: 'Makan siang', en: 'Lunch', zh: '??', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '??', de: 'Abendessen' },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '????', de: 'Begr��ungsfr�chte' },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '??????', de: 'Ferrero Rocher Schokolade' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2??????', de: '2 Kaltwasser-Schwimmb�der' },
        { id: 'Water playing', en: 'Water playing', zh: '??', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh?', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '????', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '???', de: 'Vogelk�figbr�cke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '??', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '??', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '?????', de: 'Nat�rlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '????????????????', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '?????', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '????10%?', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa kabin tipe Deluxe yang cozy dengan balkon untuk bersantai.',
      en: 'Cozy Deluxe type cabin villa with relaxing balcony.',
      zh: '???????????,???????',
      de: 'Gem�tliche Kabinenvilla vom Typ Deluxe mit entspannendem Balkon.'
    }
  },
  {
    id: 'kampuh-becik-russelia',
    name: 'Russelia',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2000000,
    priceWeekday: 2000000,
    priceWeekend: 2500000,
    priceHighSeason: 3000000,
    features: ['Mountain View', 'Private Balcony', 'King Bed'],
    image: '/images/villas/russelia/AWB_4851WEB.jpg',
    images: [
      '/images/villas/russelia/AWB_4851WEB.jpg',
      '/images/villas/russelia/AWB_4859WWEB.jpg',
      '/images/villas/russelia/AWB_4869WEB.jpg',
      '/images/villas/russelia/AWB_4879WEB.jpg',
      '/images/villas/russelia/AWB_4884WEB.jpg',
      '/images/villas/russelia/Russelia-7.WEB.jpg',
      '/images/villas/russelia/jalan-kb-(10)web.jpg',
      '/images/villas/russelia/toilet-KB-4WEB.jpg'
    ],
    category: 'couple',
    badge: 'Deluxe Type',
    bedConfiguration: [{ room: 1, beds: '1 King Bed' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer' },
        { id: 'Balkon', en: 'Balcony', zh: '??', de: 'Balkon' }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '?????????', de: 'Halb-offenes Badezimmer & Toilette' },
        { id: 'Water heater', en: 'Water heater', zh: '???', de: 'Wasserkocher' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '??', de: 'Fr�hst�ck' },
        { id: 'Makan siang', en: 'Lunch', zh: '??', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '??', de: 'Abendessen' },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '????', de: 'Begr��ungsfr�chte' },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '??????', de: 'Ferrero Rocher Schokolade' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2??????', de: '2 Kaltwasser-Schwimmb�der' },
        { id: 'Water playing', en: 'Water playing', zh: '??', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh?', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '????', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '???', de: 'Vogelk�figbr�cke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '??', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '??', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '?????', de: 'Nat�rlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '????????????????', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '?????', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '????10%?', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa kabin tipe Deluxe yang cozy dengan balkon untuk bersantai.',
      en: 'Cozy Deluxe type cabin villa with relaxing balcony.',
      zh: '???????????,???????',
      de: 'Gem�tliche Kabinenvilla vom Typ Deluxe mit entspannendem Balkon.'
    }
  }
];

// Log Home
export const LOG_HOME_VILLAS: Villa[] = [
  {
    id: 'villa-campaka',
    name: 'Villa Campaka',
    cluster: 'Nawa Bumi Villas',
    capacity: '12 Pax',
    bedrooms: 4,
    area: 146.40,
    toilets: 2,
    price: 6000000,
    priceWeekday: 6000000,
    priceWeekend: 7500000,
    priceHighSeason: 9000000,
    features: ['Ruang Keluarga', 'Dapur Lengkap', 'Dekat Mushola'],
    image: '/images/optimized/villas/villa-campaka/Hero Campaka.webp',
    images: [
      '/images/optimized/villas/villa-campaka/1.webp',
      '/images/optimized/villas/villa-campaka/2.webp',
      '/images/optimized/villas/villa-campaka/3.webp',
      '/images/optimized/villas/villa-campaka/4.webp',
      '/images/optimized/villas/villa-campaka/5.webp',
      '/images/optimized/villas/villa-campaka/6.webp',
      '/images/optimized/villas/villa-campaka/7.webp'
    ],
    category: 'log_home',
    bedConfiguration: [
      { room: 1, beds: '1 king bed' },
      { room: 2, beds: '2 queen bed' },
      { room: 3, beds: '6 single bed' }
    ],
    facilities: {
      room: [
        { id: 'Ruang keluarga', en: 'Living room', zh: '??', de: 'Wohnzimmer' },
        { id: 'Dapur bersih dengan alat masak dan alat makan standar', en: 'Clean kitchen with standard cooking and dining utensils', zh: '??????????????', de: 'Saubere K�che mit Standard-Koch- und Essgeschirr' },
        { id: 'Balkon/ teras', en: 'Balcony/terrace', zh: '??/??', de: 'Balkon/Terrasse' },
        { id: 'Spot api unggun & 1 ikat kayu bakar', en: 'Bonfire spot & 1 bundle of firewood', zh: '????1???', de: 'Lagerfeuerstelle & 1 B�ndel Brennholz' }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '???', de: 'Warmwasserbereiter' },
        { id: 'TV', en: 'TV', zh: '??', de: 'Fernseher' },
        { id: 'Wifi', en: 'Wifi', zh: 'Wifi', de: 'WLAN' },
        { id: 'Water dispenser', en: 'Water dispenser', zh: '???', de: 'Wasserspender' },
        { id: 'Sabun', en: 'Soap', zh: '??', de: 'Seife' },
        { id: 'Shampoo', en: 'Shampoo', zh: '???', de: 'Shampoo' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '??', de: 'Fr�hst�ck' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2??????', de: '2 Kaltwasser-Schwimmb�der' },
        { id: 'Water playing', en: 'Water playing', zh: '???', de: 'Wasserspielbereich' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh?', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '????', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '???', de: 'Vogelk�figbr�cke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '??', de: 'Pavillon' },
        { id: 'Dermaga', en: 'Pier', zh: '??', de: 'Anlegestelle' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spots', zh: '?????', de: 'Nat�rliche Fotospots' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '???????????????', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Tidak diperkenankan membawa makanan dari luar.', en: 'Outside food is not allowed.', zh: '???????', de: 'Speisen von au�erhalb sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '?????', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '????10%?', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa dengan 4 kamar tidur dan dapur bersih. Akses paling dekat dengan kolam renang atas dan mushola umum.',
      en: 'Villa with 4 bedrooms and clean kitchen. Closest access to upper swimming pool and public prayer room.',
      zh: '??4???????????? ??????????????.',
      de: 'Villa mit 4 Schlafzimmern und sauberer K�che. N�chster Zugang zum oberen Schwimmbad und �ffentlichen Gebetsraum.'
    }
  },
  {
    id: 'villa-suren',
    name: 'Villa Suren',
    cluster: 'Nawa Bumi Villas',
    capacity: '8 Pax',
    bedrooms: 2,
    area: 61.28,
    toilets: 1,
    price: 2750000,
    priceWeekday: 2750000,
    priceWeekend: 3250000,
    priceHighSeason: 3900000,
    features: ['Lapangan Luas', 'Api Unggun', 'Family Friendly'],
    image: '/images/optimized/villas/villa-suren/5.-Terraceweb.webp',
    images: [
      '/images/optimized/villas/villa-suren/5.-Terraceweb.webp',
      '/images/optimized/villas/villa-suren/7.-Bedroomweb.webp',
      '/images/optimized/villas/villa-suren/suren-4web.webp',
      '/images/optimized/villas/villa-suren/suren-5web.webp',
      '/images/optimized/villas/villa-suren/suren-7(1)web.webp',
      '/images/optimized/villas/villa-suren/suren-7web.webp',
      '/images/optimized/villas/villa-suren/suren-8kompresWEB.webp',
      '/images/optimized/villas/villa-suren/suren-9.WEB.webp'
    ],
    category: 'log_home',
    bedConfiguration: [
      { room: 1, beds: 'Total 8 single bed di 2 ruangan' }
    ],
    facilities: {
      room: [
        { id: 'Balkon/ teras', en: 'Balcony/Terrace', zh: '??/??', de: 'Balkon/Terrasse' },
        { id: 'Spot api unggun & 1 ikat kayu bakar', en: 'Bonfire spot & 1 bundle of firewood', zh: '????1???', de: 'Lagerfeuerplatz & 1 B�ndel Brennholz' }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '???', de: 'Wasserkocher' },
        { id: 'TV', en: 'TV', zh: '??', de: 'Fernseher' },
        { id: 'Wifi', en: 'Wifi', zh: '????', de: 'W-lan' },
        { id: 'Water dispenser', en: 'Water dispenser', zh: '???', de: 'Wasserspender' },
        { id: 'Sabun', en: 'Soap', zh: '??', de: 'Seife' },
        { id: 'Shampoo', en: 'Shampoo', zh: '???', de: 'Shampoo' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '??', de: 'Fr�hst�ck' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 cold water pools', zh: '2????', de: '2 Kaltwasserpools' },
        { id: 'Water playing', en: 'Water playing', zh: '??', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh?', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '????', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '???', de: 'Vogelk�figbr�cke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '??', de: 'Pavillon' },
        { id: 'Dermaga', en: 'Pier', zh: '??', de: 'Pier' },
        { id: 'Spot alam untuk berfoto', en: 'Nature photo spots', zh: '?????', de: 'Natur-Fotospots' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '????????????????', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht erlaubt.' },
        { id: 'Tidak diperkenankan membawa makanan dari luar.', en: 'Outside food is not allowed.', zh: '????????', de: 'Das Mitbringen von Speisen von au�erhalb ist nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Path involves going up and down stairs.', zh: '?????????', de: 'Der Weg beinhaltet Treppensteigen.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '????10%??', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa dengan 2 kamar tidur dan lapangan terbuka luas. Spot api unggun tersedia.',
      en: 'Villa with 2 bedrooms and spacious open field. Bonfire spot available.',
      zh: '??2?????????????? ??????',
      de: 'Villa mit 2 Schlafzimmern und ger�umigem offenem Feld. Lagerfeuerplatz vorhanden.'
    }
  },

  {
    id: 'villa-puspa',
    name: 'Villa Puspa',
    cluster: 'Nawa Bumi Villas',
    capacity: '15 Pax',
    bedrooms: 3,
    area: 152.61,
    toilets: 2,
    price: 5950000,
    priceWeekday: 5950000,
    priceWeekend: 6500000,
    priceHighSeason: 7950000,
    features: ['Dapur Lengkap', 'Lapangan Luas', 'Dekat Skywalk'],
    image: '/images/optimized/villas/villa-puspa/puspa-7WEB.webp',
    images: [
      '/images/optimized/villas/villa-puspa/Puspa-7(1)WEB.webp',
      '/images/optimized/villas/villa-puspa/Puspa-13WEB.webp',
      '/images/optimized/villas/villa-puspa/puspa-7(1)WEB.webp',
      '/images/optimized/villas/villa-puspa/puspa-7WEB.webp',
      '/images/optimized/villas/villa-puspa/puspa-8WEB.webp',
      '/images/optimized/villas/villa-puspa/puspa-12WEB.webp',
      '/images/optimized/villas/villa-puspa/puspa-22WEB.webp',
      '/images/optimized/villas/villa-puspa/puspa-27web.webp',
      '/images/optimized/villas/villa-puspa/puspa-33.WEB.webp'
    ],
    category: 'log_home',
    bedConfiguration: [
      { room: 1, beds: '1 king bed dan 13 single bed di 3 ruangan' }
    ],
    facilities: {
      room: [
        { id: 'Dapur bersih dengan alat masak dan alat makan standar', en: 'Clean kitchen with standard cooking and dining utensils', zh: '???????????????', de: 'Saubere K�che mit Standard-Koch- und Essgeschirr' },
        { id: 'Balkon/ teras', en: 'Balcony/Terrace', zh: '??/??', de: 'Balkon/Terrasse' },
        { id: 'Spot api unggun & 1 ikat kayu bakar', en: 'Bonfire spot & 1 bundle of firewood', zh: '????1???', de: 'Lagerfeuerplatz & 1 B�ndel Brennholz' }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '???', de: 'Wasserkocher' },
        { id: 'TV', en: 'TV', zh: '??', de: 'Fernseher' },
        { id: 'Wifi', en: 'Wifi', zh: '????', de: 'W-lan' },
        { id: 'Water dispenser', en: 'Water dispenser', zh: '???', de: 'Wasserspender' },
        { id: 'Sabun', en: 'Soap', zh: '??', de: 'Seife' },
        { id: 'Shampoo', en: 'Shampoo', zh: '???', de: 'Shampoo' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '??', de: 'Fr�hst�ck' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 cold water pools', zh: '2????', de: '2 Kaltwasserpools' },
        { id: 'Water playing', en: 'Water playing', zh: '??', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh?', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '????', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '???', de: 'Vogelk�figbr�cke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '??', de: 'Pavillon' },
        { id: 'Dermaga', en: 'Pier', zh: '??', de: 'Pier' },
        { id: 'Spot alam untuk berfoto', en: 'Nature photo spots', zh: '?????', de: 'Natur-Fotospots' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '????????????????', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht erlaubt.' },
        { id: 'Tidak diperkenankan membawa makanan dari luar.', en: 'Outside food is not allowed.', zh: '????????', de: 'Das Mitbringen von Speisen von au�erhalb ist nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Path involves going up and down stairs.', zh: '?????????', de: 'Der Weg beinhaltet Treppensteigen.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '????10%??', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa dengan 3 kamar tidur dan dapur lengkap. Dekat area Skywalk dengan lapangan terbuka luas.',
      en: 'Villa with 3 bedrooms and complete kitchen. Near Skywalk area with spacious open field.',
      zh: '??3???????????? ??Skywalk?,??????????',
      de: 'Villa mit 3 Schlafzimmern und kompletter K�che. In der N�he des Skywalk-Bereichs mit ger�umigem Freifeldbereich.'
    }
  }
];

// Combined export - All villas from all categories
export const VILLAS: Villa[] = [
  ...FOREST_HOUSE_VILLAS,
  ...MOOI_LAKE_VILLAS,
  ...EMERALD_VILLAS,
  ...DANDENONG_VILLAS,
  ...PROVINCIAL_VILLAS,
  ...RIVERSIDE_VILLAS,
  ...KAMPUH_BECIK_VILLAS,
  ...LOG_HOME_VILLAS
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'nature',
    title: {
      id: 'Mandi Hutan',
      en: 'Forest Bathing',
      zh: '???',
      de: 'Waldbaden'
    },
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop',
    category: 'Wellness'
  },
  {
    id: 'dining',
    title: {
      id: 'Makan di Tepi Sungai',
      en: 'Riverfront Dining',
      zh: '????',
      de: 'Essen am Flussufer'
    },
    image: 'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?q=80&w=800&auto=format&fit=crop',
    category: 'Culinary'
  },
  {
    id: 'refresh',
    title: {
      id: 'Kolam Mata Air Alami',
      en: 'Natural Spring Pools',
      zh: '?????',
      de: 'Nat�rliche Quellpools'
    },
    image: 'https://images.unsplash.com/photo-1513258550130-9755146c6b41?q=80&w=800&auto=format&fit=crop',
    category: 'Relax'
  },
  {
    id: 'active',
    title: {
      id: 'Petualangan Skywalk',
      en: 'Skywalk Adventure',
      zh: '??????',
      de: 'Skywalk-Abenteuer'
    },
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop',
    category: 'Adventure'
  }
];

export const PACKAGES: Package[] = [
  {
    id: 'romantic',
    title: {
      id: 'Pelarian Romantis Gunung',
      en: 'Romantic Mountain Escape',
      zh: '??????',
      de: 'Romantische Bergflucht'
    },
    subtitle: {
      id: '2 Hari 1 Malam',
      en: '2 Days 1 Night',
      zh: '2?1?',
      de: '2 Tage 1 Nacht'
    },
    duration: '2D1N',
    includes: ['Executive Villa', 'Candlelight Dinner by the River', 'Couple Spa Treatment', 'Breakfast in Bed', 'Flower Arrangement'],
    originalPrice: 4500000,
    price: 3500000,
    unit: 'couple',
    image: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=800&auto=format&fit=crop',
    isFeatured: true,
    savings: 'Save 22%',
    type: 'romantic'
  },
  {
    id: 'family',
    title: {
      id: 'Ikatan Keluarga Utama',
      en: 'Ultimate Family Bonding',
      zh: '??????',
      de: 'Ultimative Familienbindung'
    },
    subtitle: {
      id: '3 Hari 2 Malam',
      en: '3 Days 2 Nights',
      zh: '3?2?',
      de: '3 Tage 2 N�chte'
    },
    duration: '3D2N',
    includes: ['Luxury Family Villa', 'Full Board Organic Meals', 'Private Bonfire & BBQ', 'Kids Nature Tour', 'Flying Fox Access'],
    originalPrice: 7500000,
    price: 5900000,
    unit: 'family (4-6 pax)',
    image: 'https://images.unsplash.com/photo-1542834323-5e025882fb84?q=80&w=800&auto=format&fit=crop',
    savings: 'Save 21%',
    type: 'family'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Clarissa S.',
    location: 'Jakarta Executive',
    rating: 5,
    text: "The silence here is expensive. Forest House gave us the privacy and luxury we couldn't find elsewhere in Bandung. Service was impeccable.",
    date: 'January 2025',
    avatar: 'https://i.pravatar.cc/150?u=clarissa',
    verified: true,
    platform: 'TripAdvisor'
  },
  {
    id: 2,
    name: 'David W.',
    location: 'Singapore',
    rating: 5,
    text: "A true hidden gem. The farm-to-table dining at Bale Puntang exceeded expectations. Highly recommend for a digital detox.",
    date: 'December 2024',
    avatar: 'https://i.pravatar.cc/150?u=david',
    verified: true,
    platform: 'Google'
  }
];

export const RESTO_MENU: MenuItem[] = [
  // SIGNATURE DISHES
  {
    id: 'soto-bandung',
    name: 'Soto Bandung',
    description: {
      id: 'Soto daging sapi bening khas Bandung, disajikan segar dengan lobak, kedelai goreng, dan kuah kaldu sapi kaya rasa.',
      en: 'Clear beef soup originating from Bandung, served fresh with radish, fried soybeans, and rich beef broth.',
      zh: '清炖万隆牛肉汤，配以萝卜、炸大豆和浓郁的牛肉清汤，味道鲜美。',
      de: 'Klare Rindfleischsuppe aus Bandung, frisch serviert mit Rettich, gebratenen Sojabohnen und reichhaltiger Rinderbrühe.'
    },
    price: 45000,
    category: 'mains',
    image: '/images/resto/Soto Bandung.webp',
    isSignature: true
  },
  {
    id: 'gurame-terbang',
    name: 'Gurame Terbang',
    description: {
      id: 'Ikan Gurame goreng krispi yang dibelah menyerupai sayap terbang, renyah di luar dan lembut di dalam.',
      en: 'Crispy fried Gourami fish split to resemble flying wings, crunchy on the outside and soft inside.',
      zh: '香脆炸飞鱼（古拉美鱼），劈开呈飞翼状，外酥里嫩。',
      de: 'Knusprig gebratener Gourami-Fisch, gespalten wie fliegende Flügel, außen knusprig und innen weich.'
    },
    price: 85000,
    category: 'mains',
    image: '/images/resto/Gurame Terbang.webp',
    isSignature: true
  },
  {
    id: 'ayam-woku',
    name: 'Ayam Woku',
    description: {
      id: 'Sajian ayam dengan bumbu kuning pedas khas Manado yang kaya rempah dan aroma kemangi yang menggugah selera.',
      en: 'Chicken dish with spicy Manado yellow seasoning rich in spices and appetizing basil aroma.',
      zh: '万鸦老风味黄姜辣味鸡肉，香料丰富，罗勒香气诱人',
      de: 'Hühnchengericht mit würzigem gelben Manado-Gewürz, reich an Gewürzen und appetitlichem Basilikumaroma.'
    },
    price: 65000,
    category: 'mains',
    image: '/images/resto/woku.webp',
    isSignature: true
  },
  // MENU RESTO REGULAR
  {
    id: 'gurame-goreng-500',
    name: 'Gurame Goreng Terbang 500 gr',
    description: {
      id: 'Ikan Gurame segar ukuran 500 gr digoreng kering dan renyah. Sangat cocok dinikmati bersama sambal dan nasi hangat.',
      en: 'Fresh 500gr Gourami fish deep-fried until dry and crispy. Perfect with sambal and warm rice.',
      zh: '500克新鲜古拉美鱼，炸至干脆。搭配参巴酱和热米饭，味道极佳。',
      de: 'Frischer 500g Gourami-Fisch, trocken und knusprig frittiert. Perfekt mit Sambal und warmem Reis.'
    },
    price: 90000,
    category: 'mains',
    image: '/images/resto/gurame.webp',
    isSignature: false
  },
  {
    id: 'sayur-asem',
    name: 'Sayur Asem',
    description: {
      id: 'Sayur asem segar dengan kuah yang gurih dan menyegarkan. Lengkap dengan jagung manis, melinjo, dan labu siam.',
      en: 'Fresh tamarind vegetable soup with savory and refreshing broth. Complete with sweet corn, melinjo, and chayote.',
      zh: '清爽的罗望子蔬菜汤，汤汁鲜美。配有甜玉米、买麻藤果和佛手瓜。',
      de: 'Frische Tamarinden-Gemüsesuppe mit herzhafter und erfrischender Brühe. Komplett mit Zuckermais, Melinjo und Chayote.'
    },
    price: 35000,
    category: 'mains',
    image: '/images/resto/Sayurasem.webp',
    isSignature: false
  },
  {
    id: 'ayam-bakar',
    name: 'Ayam Bakar',
    description: {
      id: 'Ayam bakar dengan bumbu kecap manis rempah meresap sempurna, diolah dengan gaya tradisional Sunda.',
      en: 'Grilled chicken perfectly marinated in sweet soy sauce and spices, prepared in traditional Sundanese style.',
      zh: '烤鸡完美腌制在甜酱油和香料中，以传统巽他风格烹制。',
      de: 'Gegrilltes Hähnchen, perfekt mariniert in süßer Sojasauce und Gewürzen, zubereitet auf traditionelle sundanesische Art.'
    },
    price: 45000,
    category: 'mains',
    image: '/images/resto/ayam-bakar.webp',
    isSignature: false
  },
  {
    id: 'nasi-timbel-komplit',
    name: 'Nasi Timbel Komplit Ayam Goreng',
    description: {
      id: 'Paket lengkap nasi bungkus daun pisang, ayam goreng, tahu, tempe, lalapan segar, dan sambal terasi khas.',
      en: 'Complete package of rice wrapped in banana leaf, fried chicken, tofu, tempeh, fresh vegetables, and signature shrimp paste sambal.',
      zh: '全套香蕉叶包饭、炸鸡、豆腐、丹贝、新鲜蔬菜和招牌虾酱参巴。',
      de: 'Komplettpaket mit in Bananenblatt gewickeltem Reis, gebratenem Hähnchen, Tofu, Tempeh, frischem Gemüse und typischem Garnelenpasten-Sambal.'
    },
    price: 60000,
    category: 'mains',
    image: '/images/resto/timbel.webp',
    isSignature: false
  },
  {
    id: 'sop-buntut',
    name: 'Sop Buntut',
    description: {
      id: 'Sup buntut sapi empuk berkuah kaldu gurih yang dimasak perlahan bersama wortel, kentang, dan taburan bawang goreng.',
      en: 'Tender oxtail soup in savory broth slow-cooked with carrots, potatoes, and sprinkled with fried shallots.',
      zh: '嫩滑的牛尾汤，在鲜美的肉汤中与胡萝卜、土豆慢炖，并撒上炸红葱头。',
      de: 'Zarte Ochsenschwanzsuppe in herzhafter Brühe, langsam gekocht mit Karotten, Kartoffeln und bestreut mit Röstzwiebeln.'
    },
    price: 95000,
    category: 'mains',
    image: '/images/resto/sop-buntut.webp',
    isSignature: false
  },
  {
    id: 'sambel-dadak',
    name: 'Sambel Dadak',
    description: {
      id: 'Sambal terasi segar yang dibuat langsung saat dipesan, pedas dan menggugah selera.',
      en: 'Fresh shrimp paste chili sauce made to order, spicy and appetizing.',
      zh: '现点现做的新鲜虾酱辣椒酱，辛辣开胃。',
      de: 'Frische, auf Bestellung zubereitete Garnelenpasten-Chilisauce, scharf und appetitanregend.'
    },
    price: 15000,
    category: 'sides',
    image: '/images/resto/sambal.webp',
    isSignature: false
  },
  {
    id: 'mie-tektek',
    name: 'Mie Tektek',
    description: {
      id: 'Mie goreng atau rebus gaya kampung dengan sayuran, telur, dan suwiran ayam. Rasanya sangat nostalgik.',
      en: 'Village-style fried or boiled noodles with vegetables, egg, and shredded chicken. Tastes very nostalgic.',
      zh: '乡村风味的炒面或汤面，配以蔬菜、鸡蛋和鸡肉丝。非常有怀旧感。',
      de: 'Gebratene oder gekochte Nudeln nach Art des Dorfes mit Gemüse, Ei und zerkleinertem Hähnchen. Schmeckt sehr nostalgisch.'
    },
    price: 40000,
    category: 'mains',
    image: '/images/resto/mie-tektek.webp',
    isSignature: false
  },
  {
    id: 'mie-baso',
    name: 'Mie Baso',
    description: {
      id: 'Mie kuning lezat disajikan dengan bakso sapi asli yang kenyal, tahu kaldu, dan sayuran segar.',
      en: 'Delicious yellow noodles served with chewy authentic beef meatballs, tofu broth, and fresh vegetables.',
      zh: '美味的黄面条，配以劲道的正宗牛肉丸、豆腐汤和新鲜蔬菜。',
      de: 'Köstliche gelbe Nudeln, serviert mit zähen, authentischen Rindfleischbällchen, Tofubrühe und frischem Gemüse.'
    },
    price: 40000,
    category: 'mains',
    image: '/images/resto/mie-baso.webp',
    isSignature: false
  },
  {
    id: 'bala-bala',
    name: 'Bala-bala',
    description: {
      id: 'Bakwan sayur renyah khas Sunda, disajikan panas dengan cocolan sambal atau cabe rawit.',
      en: 'Crispy Sundanese vegetable fritters, served hot with chili dip or whole bird\'s eye chilies.',
      zh: '香脆的巽他风格蔬菜杂烩煎饼，热腾腾地配以辣椒酱或朝天椒。',
      de: 'Knusprige sundanesische Gemüsepuffer, heiß serviert mit Chili-Dip oder ganzen kleinen Chilis.'
    },
    price: 25000,
    category: 'starters',
    image: '/images/resto/bala-bala.webp',
    isSignature: false
  },
  {
    id: 'pisang-goreng',
    name: 'Pisang Goreng',
    description: {
      id: 'Pisang manis pilihan digoreng tepung renyah. Cocok untuk hidangan penutup yang hangat menemani waktu sore.',
      en: 'Selected sweet bananas deep-fried in crispy batter. Perfect for a warm afternoon dessert.',
      zh: '精选甜香蕉裹上脆浆炸制。非常适合作为温暖的下午甜点。',
      de: 'Ausgewählte süße Bananen, in knusprigem Teig frittiert. Perfekt als warmes Dessert am Nachmittag.'
    },
    price: 25000,
    category: 'desserts',
    image: '/images/resto/pisang-goreng.webp',
    isSignature: false
  },
  {
    id: 'bebek-goreng',
    name: 'Bebek Goreng',
    description: {
      id: 'Bebek muda yang diungkep sempurna lalu digoreng gurih sampai tulang lunak, disajikan dengan sambal khas pencok pedas.',
      en: 'Perfectly braised young duck deep-fried to savory perfection until bones are soft, served with signature spicy pencok sambal.',
      zh: '完美焖炖的嫩鸭，炸至骨酥肉烂，配以招牌辛辣参巴酱。',
      de: 'Perfekt geschmorte junge Ente, herzhaft frittiert, bis die Knochen weich sind, serviert mit typisch scharfem Pencok-Sambal.'
    },
    price: 75000,
    category: 'mains',
    image: '/images/resto/bebek.webp',
    isSignature: false
  },
  {
    id: 'nasi-goreng-pete-teri',
    name: 'Nasi Goreng Pete Teri',
    description: {
      id: 'Nasi goreng harum dengan pete segar dan ikan teri Medan renyah, perpaduan rasa umami yang hakiki.',
      en: 'Fragrant fried rice with fresh stinky beans and crispy Medan anchovies, the ultimate umami blend.',
      zh: '香喷喷的炒饭，配以新鲜臭豆和香脆的棉兰凤尾鱼，极致的鲜味融合。',
      de: 'Duftender gebratener Reis mit frischen Stinkbohnen und knusprigen Medan-Sardellen, die ultimative Umami-Mischung.'
    },
    price: 50000,
    category: 'mains',
    image: '/images/resto/nasgor-pete.webp',
    isSignature: false
  }
];

export const ACTIVITY_CATEGORIES: ActivityCategory[] = [
  {
    id: 'nature',
    title: {
      id: 'Wisata Alam',
      en: 'Nature Discovery',
      zh: '自然探索',
      de: 'Naturentdeckung'
    },
    subtitle: {
      id: 'Kembali ke Alam',
      en: 'Reconnect with the Earth',
      zh: '重归自然',
      de: 'Wiederverbindung mit der Erde'
    },
    heroImage: '/images/facilities/Nature Discovery.jpg',
    description: {
      id: 'Jelajahi keindahan Gunung Puntang yang masih alami melalui jalur trekking dan skywalk kami.',
      en: 'Explore the untouched beauty of Mount Puntang through curated trekking paths and our signature skywalk.',
      zh: '探索原始普塘山的壮丽景色，体验我们的徒步路径和空中走廊。',
      de: 'Erkunden Sie die unber�hrte Sch�nheit des Mount Puntang auf kuratierten Trekkingpfaden und unserem charakteristischen Skywalk.'
    },
    items: [
      {
        title: {
          id: 'Jalur Air Terjun',
          en: 'Waterfall Track',
          zh: '瀑布小径',
          de: 'Wasserfall-Wanderung'
        },
        description: {
          id: 'Perjalanan menuju air terjun tersembunyi menembus hutan pinus dan perkebunan kopi lokal.',
          en: 'A journey to the hidden waterfall through pine forests and local coffee plantations.',
          zh: '穿越松林和当地咖啡种植园，寻找隐藏瀑布的旅程。',
          de: 'Eine Reise zum versteckten Wasserfall durch Kiefernw�lder und lokale Kaffeeplantagen.'
        },
        image: '/images/facilities/waterfall track.jpeg'
      },
      {
        title: {
          id: 'Canopy Skywalk',
          en: 'Canopy Skywalk',
          zh: '树冠空中走廊',
          de: 'Baumkronen-Skywalk'
        },
        description: {
          id: 'Berjalan di antara pepohonan di jembatan gantung kami, menawarkan pemandangan lembah yang indah.',
          en: 'Walk among the treetops on our suspension bridge, offering panoramic valley views.',
          zh: '在我们的吊桥上漫步于树梢之间，欣赏全景山谷美景。',
          de: 'Spazieren Sie auf unserer H�ngebr�cke zwischen den Baumwipfeln und genie�en Sie den Panoramablick auf das Tal.'
        },
        image: '/images/facilities/Canopy Skywalk.jpg'
      },
      {
        title: {
          id: 'Matahari Terbenam & Bintang',
          en: 'Stargazing',
          zh: '观星体验',
          de: 'Sternenbeobachtung'
        },
        description: {
          id: 'Nikmati pemandangan langit malam yang jernih di ketinggian pegunungan, jauh dari polusi cahaya kota.',
          en: 'Enjoy the clear night sky views at high altitude, far from city light pollution.',
          zh: '在高海拔地区享受清澈的夜空，远离城市光污染。',
          de: 'Genie�en Sie den klaren Nachthimmel in gro�er H�he, weit entfernt von der Lichtverschmutzung der Stadt.'
        },
        image: '/images/facilities/Stargazing.png'
      }
    ]
  },
  {
    id: 'wellness',
    title: {
      id: 'Kesehatan Gunung',
      en: 'Mountain Wellness',
      zh: '山地康养',
      de: 'Berg-Wellness'
    },
    subtitle: {
      id: 'Meremajakan Tubuh & Jiwa',
      en: 'Rejuvenate Body & Soul',
      zh: '焕活身心',
      de: 'K�rper & Seele verj�ngen'
    },
    heroImage: '/images/facilities/Mountain Wellness.jpeg',
    description: {
      id: 'Benamkan diri Anda dalam kekuatan penyembuhan air pegunungan dan udara segar.',
      en: 'Immerse yourself in the healing power of mountain water and fresh air.',
      zh: '沉浸在山泉水和新鲜空气的治愈力量中。',
      de: 'Tauchen Sie ein in die heilende Kraft von Bergwasser und frischer Luft.'
    },
    items: [
      {
        title: {
          id: 'Bermain Air di Sungai',
          en: 'River Playing',
          zh: '溪流戏水',
          de: 'Flussspiel'
        },
        description: {
          id: 'Bermain dan berendam di aliran sungai yang jernih dan segar di kawasan resort.',
          en: 'Play and wade in the clear, fresh river streams within the resort area.',
          zh: '在度假村内清澈凉爽的溪流中嬉戏游玩。',
          de: 'Spielen Sie und waten Sie in den klaren, frischen Flussstr�men im Resortbereich.'
        },
        image: '/images/facilities/Riverplaying.jpg'
      },
      {
        title: {
          id: 'Yoga Matahari Terbit',
          en: 'Sunrise Yoga',
          zh: '日出瑜伽',
          de: 'Sonnenaufgangs-Yoga'
        },
        description: {
          id: 'Sambut matahari saat terbit di atas lembah dari dek yoga kami.',
          en: 'Greet the sun as it rises over the valley from our yoga deck.',
          zh: '在我们的瑜伽平台上迎接山谷上空的日出。',
          de: 'Begr��en Sie die Sonne, wenn sie von unserem Yoga-Deck �ber dem Tal aufgeht.'
        },
        image: '/images/facilities/Sunrise Yoga.jpg'
      }
    ]
  },
  {
    id: 'family',
    title: {
      id: 'Rekreasi Keluarga',
      en: 'Family Recreation',
      zh: '家庭娱乐',
      de: 'Familienerholung'
    },
    subtitle: {
      id: 'Momen Bersama Keluarga',
      en: 'Quality Family Time',
      zh: '优质家庭时光',
      de: 'Wertvolle Familienzeit'
    },
    heroImage: '/images/facilities/Family Recreation.jpg',
    description: {
      id: 'Ciptakan kenangan berharga bersama keluarga Anda dengan berbagai aktivitas seru.',
      en: 'Create precious memories with your family through various exciting activities.',
      zh: '通过各种激动人心的活动与家人创造珍贵的回忆。',
      de: 'Schaffen Sie wertvolle Erinnerungen mit Ihrer Familie durch verschiedene aufregende Aktivit�ten.'
    },
    items: [
      {
        title: {
          id: 'Piknik Keluarga',
          en: 'Family Picnic',
          zh: '家庭野餐',
          de: 'Familienpicknick'
        },
        description: {
          id: 'Nikmati waktu bersama keluarga dengan piknik di area taman yang asri dan sejuk.',
          en: 'Enjoy quality time with family with a picnic in the lush and cool garden area.',
          zh: '在郁郁葱葱的凉爽花园区享受与家人的美好时光。',
          de: 'Genie�en Sie wertvolle Zeit mit der Familie bei einem Picknick im �ppigen und k�hlen Gartenbereich.'
        },
        image: '/images/facilities/Family Picnic.jpg'
      },
      {
        title: {
          id: 'Kolam Renang',
          en: 'Swimming Pool',
          zh: '游泳池',
          de: 'Schwimmbad'
        },
        description: {
          id: 'Berenang dan bermain air di kolam renang dengan air pegunungan yang segar dan jernih.',
          en: 'Swim and play in the pool with fresh and clear mountain water.',
          zh: '在拥有清新澄澈山泉水的泳池中游泳嬉戏。',
          de: 'Schwimmen und spielen Sie im Pool mit frischem und klarem Bergwasser.'
        },
        image: '/images/facilities/Swimming Pool.jpg'
      },
      {
        title: {
          id: 'Taman Bermain Anak',
          en: 'Children Playground',
          zh: '儿童游乐场',
          de: 'Kinderspielplatz'
        },
        description: {
          id: 'Area bermain anak-anak yang aman dan menyenangkan di tengah alam.',
          en: 'Safe and fun children play area in the middle of nature.',
          zh: '大自然中安全有趣的儿童游乐区。',
          de: 'Sicherer und lustiger Kinderspielbereich inmitten der Natur.'
        },
        image: '/images/facilities/Children Playground.jpg'
      }
    ]
  }
];

export const OFFERS: Offer[] = [
  {
    id: 'romantic-mountain-escape',
    title: {
      id: 'Pelarian Romantis Gunung',
      en: 'Romantic Mountain Escape',
      zh: '浪漫山地逃逸',
      de: 'Romantische Bergflucht'
    },
    description: {
      id: 'Ciptakan kenangan tak terlupakan bersama orang terkasih. Termasuk makan malam romantis di tepi sungai, spa pasangan, sarapan di tempat tidur, dan rangkaian bunga eksklusif.',
      en: 'Create unforgettable memories with your loved one. Includes candlelight dinner by the river, couple spa treatment, breakfast in bed, and exclusive flower arrangements.',
      zh: '与爱人创造难忘的回忆。包含河畔烛光晚餐、情侣SPA、床上早餐和专属鲜花布置。',
      de: 'Schaffen Sie unvergessliche Erinnerungen mit Ihrem Liebsten. Beinhaltet Candle-Light-Dinner am Fluss, Paar-Spa-Behandlung, Frühstück im Bett und exklusive Blumenarrangements.'
    },
    image: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=1600',
    validFrom: 'Jan 1, 2025',
    validTo: 'Mar 31, 2025',
    discount: 'Save 22%',
    price: 'Rp 3,500,000',
    inclusions: [
      '2 Days 1 Night in Executive Villa',
      'Candlelight Dinner by Cigeureuh River',
      'Couple Spa & Massage Treatment',
      'Breakfast in Bed with Mountain View',
      'Flower Arrangement & Decoration',
      'Complimentary Welcome Drink',
      'Late Check-out (2 PM)'
    ]
  },
  {
    id: 'family-bonding',
    title: {
      id: 'Ikatan Keluarga Utama',
      en: 'Ultimate Family Bonding',
      zh: '终极家庭团聚',
      de: 'Ultimative Familienbindung'
    },
    description: {
      id: 'Terhubung kembali dengan keluarga Anda di jantung alam. Makanan organik lengkap, api unggun pribadi, kegiatan alam untuk anak-anak, dan kenangan seumur hidup.',
      en: 'Reconnect with your family in the heart of nature. Full board organic meals, private bonfire, nature activities for kids, and memories that last a lifetime.',
      zh: '在大自然中心与家人重新连接。包含全食宿有机餐、私人篝火、儿童自然活动和终生难忘的回忆。',
      de: 'Verbinden Sie sich wieder mit Ihrer Familie im Herzen der Natur. Vollpension mit Bio-Mahlzeiten, privates Lagerfeuer, Naturaktivitäten für Kinder und Erinnerungen, die ein Leben lang halten.'
    },
    image: 'https://images.unsplash.com/photo-1542834323-5e025882fb84?q=80&w=1600',
    validFrom: 'Jan 15, 2025',
    validTo: 'Apr 30, 2025',
    discount: 'Save 21%',
    price: 'Rp 5,900,000',
    inclusions: [
      '3 Days 2 Nights in Luxury Family Villa',
      'Full Board Organic Farm-to-Table Meals',
      'Private Bonfire & BBQ Night',
      'Guided Nature Discovery Tour for Kids',
      'Flying Fox & Adventure Activities',
      'Family Photography Session',
      'Complimentary Snacks & Drinks',
      'Early Check-in & Late Check-out'
    ]
  },
  {
    id: 'wellness-retreat',
    title: {
      id: 'Retret Kesehatan Gunung',
      en: 'Mountain Wellness Retreat',
      zh: '山地康养静修',
      de: 'Berg-Wellness-Retreat'
    },
    description: {
      id: 'Kembalikan keseimbangan tubuh dan pikiran Anda. Yoga harian, meditasi, makanan detoksifikasi, dan akses tak terbatas ke kolam mata air alami kami.',
      en: 'Restore balance to your body and mind. Daily yoga, meditation, detox meals, and unlimited access to our natural spring pools.',
      zh: '恢复身心平衡。每日瑜伽、冥想、排毒餐，并可无限次使用我们的天然泉水池。',
      de: 'Stellen Sie das Gleichgewicht von Körper und Geist wieder her. Tägliches Yoga, Meditation, Detox-Mahlzeiten und unbegrenzter Zugang zu unseren natürlichen Quellpools.'
    },
    image: 'https://images.unsplash.com/photo-1544367563-12123d896889?q=80&w=1600',
    validFrom: 'Feb 1, 2025',
    validTo: 'May 31, 2025',
    discount: 'Save 15%',
    price: 'Rp 2,800,000',
    inclusions: [
      '2 Days 1 Night in Wellness Cabin',
      'Full Board Detox Meals & Juices',
      'Morning Sunrise Yoga Session',
      'Guided River Meditation',
      'Traditional Sundanese Massage (90 min)',
      'Forest Bathing Experience',
      'Wellness Gift Pack'
    ]
  }
];
