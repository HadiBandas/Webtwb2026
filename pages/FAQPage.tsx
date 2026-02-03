import React, { useEffect } from 'react';
import { SEOHead } from '../components/ui/SEOHead';
import { StructuredData } from '../components/ui/StructuredData';
import { trackPageView } from '../utils/analytics';
import { useTranslation } from 'react-i18next';
import { PageHero } from '../components/ui/PageHero';
import { FAQAccordion } from '../components/ui/FAQAccordion';
import { StickyBookingCTA } from '../components/ui/StickyBookingCTA';

const FAQ_DATA = {
    booking: [
        {
            question: {
                en: 'How do I make a reservation?',
                id: 'Bagaimana cara melakukan reservasi?',
                zh: '我该如何预订？',
                de: 'Wie kann ich eine Reservierung vornehmen?'
            },
            answer: {
                en: 'You can make a reservation through WhatsApp (+62 811 910 2003), email (booking@tamanwisatabougenville.com), or by using the booking form on our website. Our team will respond within 24 hours to confirm availability and provide payment instructions.',
                id: 'Anda dapat melakukan reservasi melalui WhatsApp (+62 811 910 2003), email (booking@tamanwisatabougenville.com), atau menggunakan formulir pemesanan di website kami. Tim kami akan merespons dalam 24 jam untuk konfirmasi ketersediaan dan instruksi pembayaran.',
                zh: '您可以通过 WhatsApp (+62 811 910 2003)、电子邮件 (booking@tamanwisatabougenville.com) 或使用我们网站上的预订表格进行预订。我们的团队将在 24 小时内回复以确认空房情况并提供付款说明。',
                de: 'Sie können eine Reservierung über WhatsApp (+62 811 910 2003), E-Mail (booking@tamanwisatabougenville.com) oder über das Buchungsformular auf unserer Website vornehmen. Unser Team wird innerhalb von 24 Stunden antworten, um die Verfügbarkeit zu bestätigen und Zahlungsanweisungen zu geben.'
            }
        },
        {
            question: {
                en: 'What payment methods do you accept?',
                id: 'Metode pembayaran apa yang diterima?',
                zh: '你们接受什么付款方式？',
                de: 'Welche Zahlungsmethoden akzeptieren Sie?'
            },
            answer: {
                en: 'We accept bank transfers (BCA, Mandiri, BNI), credit cards (Visa, Mastercard), and digital wallets (OVO, GoPay, Dana). A 50% deposit is required to confirm your reservation, with full payment due 7 days before check-in.',
                id: 'Kami menerima transfer bank (BCA, Mandiri, BNI), kartu kredit (Visa, Mastercard), dan dompet digital (OVO, GoPay, Dana). Deposit 50% diperlukan untuk konfirmasi reservasi, dengan pelunasan 7 hari sebelum check-in.',
                zh: '我们接受银行转账（BCA, Mandiri, BNI）、信用卡（Visa, Mastercard）和数字钱包（OVO, GoPay, Dana）。确认预订需要支付 50% 的定金，余款需在入住前 7 天付清。',
                de: 'Wir akzeptieren Banküberweisungen (BCA, Mandiri, BNI), Kreditkarten (Visa, Mastercard) und digitale Geldbörsen (OVO, GoPay, Dana). Zur Bestätigung Ihrer Reservierung ist eine Anzahlung von 50 % erforderlich, die vollständige Zahlung ist 7 Tage vor dem Check-in fällig.'
            }
        },
        {
            question: {
                en: 'Can I modify my booking after confirmation?',
                id: 'Bisakah saya mengubah pesanan setelah konfirmasi?',
                zh: '确认后我可以修改预订吗？',
                de: 'Kann ich meine Buchung nach der Bestätigung ändern?'
            },
            answer: {
                en: 'Yes, you can modify your booking subject to availability. Changes requested more than 14 days before check-in are free of charge. Changes within 7-14 days may incur a modification fee. Please contact our reservations team as early as possible.',
                id: 'Ya, Anda dapat mengubah pesanan tergantung ketersediaan. Perubahan lebih dari 14 hari sebelum check-in gratis. Perubahan dalam 7-14 hari mungkin dikenakan biaya. Silakan hubungi tim reservasi kami secepatnya.',
                zh: '是的，您可以根据空房情况修改您的预订。入住前 14 天以上提出的更改是免费的。7-14 天内的更改可能会产生修改费。请尽早联系我们的预订团队。',
                de: 'Ja, Sie können Ihre Buchung je nach Verfügbarkeit ändern. Änderungen, die mehr als 14 Tage vor dem Check-in angefordert werden, sind kostenlos. Für Änderungen innerhalb von 7-14 Tagen kann eine Änderungsgebühr anfallen. Bitte kontaktieren Sie unser Reservierungsteam so früh wie möglich.'
            }
        },
        {
            question: {
                en: 'Is there a minimum stay requirement?',
                id: 'Apakah ada minimal menginap?',
                zh: '有最低住宿要求吗？',
                de: 'Gibt es einen Mindestaufenthalt?'
            },
            answer: {
                en: 'Minimum stay is 1 night for weekdays. During weekends, public holidays, and peak season (June-August, December-January), a minimum 2-night stay is required.',
                id: 'Minimal menginap 1 malam untuk hari kerja. Saat akhir pekan, hari libur nasional, dan peak season (Juni-Agustus, Desember-Januari), minimal menginap 2 malam.',
                zh: '平日最低住宿 1 晚。在周末、公共假期和旺季（6 月至 8 月、12 月至 1 月），至少需要入住 2 晚。',
                de: 'Der Mindestaufenthalt beträgt an Wochentagen 1 Nacht. An Wochenenden, Feiertagen und in der Hochsaison (Juni-August, Dezember-Januar) ist ein Mindestaufenthalt von 2 Nächten erforderlich.'
            }
        }
    ],
    checkin: [
        {
            question: {
                en: 'What time is check-in and check-out?',
                id: 'Jam berapa check-in dan check-out?',
                zh: '入住和退房时间是什么时候？',
                de: 'Wann ist Check-in und Check-out?'
            },
            answer: {
                en: 'Standard check-in time is 2:00 PM and check-out is 12:00 PM (noon). early check-in or late check-out can be arranged subject to availability and may incur additional charges. Please contact us in advance to arrange.',
                id: 'Waktu check-in standar jam 14:00 dan check-out jam 12:00 siang. Check-in awal atau check-out terlambat tergantung ketersediaan dan mungkin dikenakan biaya tambahan. Silakan hubungi kami sebelumnya.',
                zh: '标准入住时间为下午 2:00，退房时间为中午 12:00。提前入住或延迟退房可视供应情况安排，并可能产生额外费用。请提前联系我们安排。',
                de: 'Die Standard-Check-in-Zeit ist 14:00 Uhr und der Check-out ist 12:00 Uhr (mittags). Ein früher Check-in oder später Check-out kann je nach Verfügbarkeit arrangiert werden und kann zusätzliche Gebühren verursachen. Bitte kontaktieren Sie uns im Voraus, um dies zu arrangieren.'
            }
        },
        {
            question: {
                en: 'What documents do I need for check-in?',
                id: 'Dokumen apa yang diperlukan saat check-in?',
                zh: '入住需要什么文件？',
                de: 'Welche Dokumente benötige ich für den Check-in?'
            },
            answer: {
                en: 'Please bring a valid government-issued ID (KTP for Indonesian citizens, passport for international guests). The name on the ID must match the booking reservation name.',
                id: 'Harap bawa kartu identitas resmi yang berlaku (KTP untuk WNI, paspor untuk tamu internasional). Nama pada identitas harus sesuai dengan nama pemesanan.',
                zh: '请携带有效的政府签发的身份证件（印尼公民为 KTP，国际客人为护照）。身份证件上的姓名必须与预订姓名一致。',
                de: 'Bitte bringen Sie einen gültigen amtlichen Ausweis mit (KTP für indonesische Staatsbürger, Reisepass für internationale Gäste). Der Name auf dem Ausweis muss mit dem Namen der Buchungsreservierung übereinstimmen.'
            }
        },
        {
            question: {
                en: 'Can I check-in late at night?',
                id: 'Bisakah saya check-in larut malam?',
                zh: '我可以深夜入住吗？',
                de: 'Kann ich spät in der Nacht einchecken?'
            },
            answer: {
                en: 'Yes, we have 24-hour reception. However, please inform us in advance if you will arrive after 10:00 PM so we can prepare accordingly. Our mountain road is safe but better traveled during daylight hours.',
                id: 'Ya, resepsionis kami buka 24 jam. Namun, harap informasikan sebelumnya jika Anda akan tiba setelah jam 22:00 agar kami dapat bersiap. Jalan pegunungan aman namun lebih baik dilalui saat terang.',
                zh: '是的，我们有 24 小时前台。但是，如果您将在晚上 10:00 之后抵达，请提前通知我们，以便我们做好相应准备。我们的山路很安全，但在白天行驶更好。',
                de: 'Ja, wir haben eine 24-Stunden-Rezeption. Bitte informieren Sie uns jedoch im Voraus, wenn Sie nach 22:00 Uhr anreisen, damit wir uns entsprechend vorbereiten können. Unsere Bergstraße ist sicher, aber bei Tageslicht besser zu befahren.'
            }
        }
    ],
    policy: [
        {
            question: {
                en: 'What is your cancellation policy?',
                id: 'Bagaimana kebijakan pembatalan Anda?',
                zh: '你们的取消政策是什么？',
                de: 'Wie sind Ihre Stornierungsbedingungen?'
            },
            answer: {
                en: 'Free cancellation up to 14 days before arrival. Cancellations made 7-14 days before check-in incur a 50% charge. Cancellations within 7 days of check-in are non-refundable. No-shows are charged 100% of the total booking amount.',
                id: 'Pembatalan gratis hingga 14 hari sebelum kedatangan. Pembatalan 7-14 hari sebelum check-in dikenakan biaya 50%. Pembatalan dalam 7 hari sebelum check-in tidak dapat dikembalikan. No-show dikenakan biaya 100%.',
                zh: '抵达前 14 天可免费取消。入住前 7-14 天取消将收取 50% 的费用。入住前 7 天内取消概不退款。未入住将收取预订总额的 100%。',
                de: 'Kostenlose Stornierung bis 14 Tage vor Anreise. Bei Stornierungen 7-14 Tage vor Check-in fallen 50 % Gebühren an. Stornierungen innerhalb von 7 Tagen vor Check-in sind nicht erstattungsfähig. Bei Nichterscheinen werden 100 % des Gesamtbuchungsbetrags berechnet.'
            }
        },
        {
            question: {
                en: 'Can I get a refund if weather conditions are bad?',
                id: 'Bisakah refund jika cuaca buruk?',
                zh: '如果天气不好我可以退款吗？',
                de: 'Kann ich eine Rückerstattung erhalten, wenn das Wetter schlecht ist?'
            },
            answer: {
                en: 'Mountain weather can be unpredictable. We do not offer refunds for weather conditions unless there is an official government travel advisory. However, we can reschedule your booking without penalty if weather makes travel dangerous.',
                id: 'Cuaca pegunungan tidak dapat diprediksi. Kami tidak menawarkan refund karena cuaca kecuali ada himbauan resmi pemerintah. Namun, kami dapat menjadwalkan ulang tanpa denda jika cuaca membahayakan perjalanan.',
                zh: '山区天气变幻莫测。除非有政府官方的旅行建议，否则我们不因天气原因提供退款。但是，如果天气导致旅行危险，我们可以免费为您重新安排预订。',
                de: 'Das Bergwetter kann unvorhersehbar sein. Wir bieten keine Rückerstattungen für Wetterbedingungen an, es sei denn, es liegt eine offizielle Reisewarnung der Regierung vor. Wir können Ihre Buchung jedoch ohne Strafe verschieben, wenn das Wetter das Reisen gefährlich macht.'
            }
        },
        {
            question: {
                en: 'Do you allow pets?',
                id: 'Apakah hewan peliharaan diperbolehkan?',
                zh: '允许携带宠物吗？',
                de: 'Sind Haustiere erlaubt?'
            },
            answer: {
                en: 'We love animals! Well-behaved pets are welcome with prior notice. A pet cleaning fee of Rp 200,000 per stay applies. Pets must be supervised at all times and are not allowed on furniture or in restaurant areas.',
                id: 'Kami menyukai hewan! Hewan peliharaan yang terlatih diperbolehkan dengan pemberitahuan. Biaya kebersihan Rp 200.000 per masa inap berlaku. Hewan harus selalu diawasi dan tidak diperbolehkan di furnitur atau area restoran.',
                zh: '我们爱动物！只要提前通知，我们欢迎乖巧的宠物。每次入住需支付 200,000 印尼盾的宠物清洁费。宠物必须时刻受到监管，不得在家具上或餐厅区域内活动。',
                de: 'Wir lieben Tiere! Gut erzogene Haustiere sind nach vorheriger Ankündigung willkommen. Es fällt eine Haustierreinigungsgebühr von Rp 200.000 pro Aufenthalt an. Haustiere müssen jederzeit beaufsichtigt werden und sind auf Möbeln oder in Restaurantbereichen nicht gestattet.'
            }
        },
        {
            question: {
                en: 'Is smoking allowed?',
                id: 'Apakah boleh merokok?',
                zh: '允许吸烟吗？',
                de: 'Ist Rauchen erlaubt?'
            },
            answer: {
                en: 'Bougenville is a smoke-free property. Smoking is only permitted in designated outdoor areas. A cleaning fee of Rp 1,000,000 will be charged if smoking is detected inside villas.',
                id: 'Bougenville adalah properti bebas asap rokok. Merokok hanya diizinkan di area luar ruangan yang ditentukan. Denda Rp 1.000.000 akan dikenakan jika terdeteksi merokok di dalam villa.',
                zh: 'Bougenville 是无烟场所。仅允许在指定的室外区域吸烟。如果在别墅内吸烟，将收取 1,000,000 印尼盾的清洁费。',
                de: 'Bougenville ist eine rauchfreie Unterkunft. Rauchen ist nur in ausgewiesenen Außenbereichen gestattet. Wenn in den Villen geraucht wird, wird eine Reinigungsgebühr von Rp 1.000.000 erhoben.'
            }
        }
    ],
    transport: [
        {
            question: {
                en: 'Do you provide airport transfer?',
                id: 'Apakah menyediakan antar-jemput bandara?',
                zh: '你们提供机场接送服务吗？',
                de: 'Bieten Sie Flughafentransfers an?'
            },
            answer: {
                en: 'Yes, we offer airport transfer service from Husein Sastranegara Airport (Bandung) or Soekarno-Hatta Airport (Jakarta). Prices vary based on distance and vehicle type. Please book at least 48 hours in advance.',
                id: 'Ya, kami menawarkan layanan antar-jemput dari Bandara Husein Sastranegara (Bandung) atau Soekarno-Hatta (Jakarta). Harga bervariasi tergantung jarak dan jenis kendaraan. Harap pesan minimal 48 jam sebelumnya.',
                zh: '是的，我们提供从 Husein Sastranegara 机场（万隆）或 Soekarno-Hatta 机场（雅加达）的机场接送服务。价格因距离和车型而异。请至少提前 48 小时预订。',
                de: 'Ja, wir bieten einen Flughafentransferservice vom Flughafen Husein Sastranegara (Bandung) oder Flughafen Soekarno-Hatta (Jakarta) an. Die Preise variieren je nach Entfernung und Fahrzeugtyp. Bitte buchen Sie mindestens 48 Stunden im Voraus.'
            }
        },
        {
            question: {
                en: 'Is there parking available?',
                id: 'Apakah tersedia parkir?',
                zh: '有停车位吗？',
                de: 'Gibt es Parkplätze?'
            },
            answer: {
                en: 'Yes, we have complimentary secure parking for all guests. The parking area can accommodate cars, motorcycles, and small buses.',
                id: 'Ya, kami memiliki parkir aman gratis untuk semua tamu. Area parkir dapat menampung mobil, motor, dan bus kecil.',
                zh: '是的，我们为所有客人提供免费的安全停车场。停车场可容纳汽车、摩托车和小型巴士。',
                de: 'Ja, wir haben kostenlose sichere Parkplätze für alle Gäste. Der Parkplatz bietet Platz für Autos, Motorräder und kleine Busse.'
            }
        },
        {
            question: {
                en: 'How is the road condition to the resort?',
                id: 'Bagaimana kondisi jalan menuju resor?',
                zh: '通往度假村的路况如何？',
                de: 'Wie ist der Straßenzustand zum Resort?'
            },
            answer: {
                en: 'The road is fully paved and accessible year-round. However, it includes mountain curves and inclines. We recommend cautious driving, especially during rain. GPS signal is strong throughout the route.',
                id: 'Jalan sudah beraspal penuh dan dapat diakses sepanjang tahun. Namun, terdapat tikungan dan tanjakan pegunungan. Kami sarankan mengemudi dengan hati-hati, terutama saat hujan. Sinyal GPS kuat di sepanjang rute.',
                zh: '道路完全铺砌，全年通行。但是，它包括山路弯道和斜坡。我们建议谨慎驾驶，尤其是在下雨天。沿途 GPS 信号很强。',
                de: 'Die Straße ist vollständig asphaltiert und ganzjährig befahrbar. Sie enthält jedoch Bergkurven und Steigungen. Wir empfehlen vorsichtiges Fahren, insbesondere bei Regen. Das GPS-Signal ist auf der gesamten Strecke stark.'
            }
        }
    ],
    facilities: [
        {
            question: {
                en: 'Do you have WiFi?',
                id: 'Apakah ada WiFi?',
                zh: '你们有 WiFi 吗？',
                de: 'Haben Sie WLAN?'
            },
            answer: {
                en: 'Yes, complimentary high-speed WiFi is available in all villas and public areas. However, we encourage a digital detox—disconnect to truly connect with nature and loved ones!',
                id: 'Ya, WiFi berkecepatan tinggi gratis tersedia di semua villa dan area umum. Namun, kami menyarankan detoks digital—putuskan koneksi untuk benar-benar terhubung dengan alam dan orang terkasih!',
                zh: '是的，所有别墅和公共区域均提供免费高速 WiFi。但是，我们鼓励数字排毒——断开连接，真正与大自然和亲人联系！',
                de: 'Ja, kostenloses Highspeed-WLAN ist in allen Villen und öffentlichen Bereichen verfügbar. Wir empfehlen jedoch eine digitale Entgiftung – trennen Sie die Verbindung, um sich wirklich mit der Natur und Ihren Lieben zu verbinden!'
            }
        },
        {
            question: {
                en: 'Are there facilities for children?',
                id: 'Apakah ada fasilitas untuk anak-anak?',
                zh: '有儿童设施吗？',
                de: 'Gibt es Einrichtungen für Kinder?'
            },
            answer: {
                en: 'Absolutely! We have a children\'s playground, flying fox, nature discovery tours, and river play areas. High chairs and baby cots are available upon request (free of charge). All outdoor activities are supervised.',
                id: 'Tentu saja! Kami memiliki taman bermain anak, flying fox, tur penemuan alam, dan area bermain sungai. Kursi tinggi dan tempat tidur bayi tersedia berdasarkan permintaan (gratis). Semua aktivitas luar ruangan diawasi.',
                zh: '当然！我们有儿童游乐场、飞狐、自然探索之旅和河流游乐区。可应要求提供高脚椅和婴儿床（免费）。所有户外活动均有人监督。',
                de: 'Absolut! Wir haben einen Kinderspielplatz, Flying Fox, Naturentdeckungstouren und Flussspielbereiche. Hochstühle und Babybetten sind auf Anfrage erhältlich (kostenlos). Alle Outdoor-Aktivitäten werden beaufsichtigt.'
            }
        },
        {
            question: {
                en: 'Do you have wheelchair accessibility?',
                id: 'Apakah ada akses kursi roda?',
                zh: '你们有轮椅通道吗？',
                de: 'Haben Sie einen rollstuhlgerechten Zugang?'
            },
            answer: {
                en: 'Some of our villas and public areas are wheelchair accessible. Due to the mountainous terrain, not all areas can accommodate wheelchairs. Please contact us in advance so we can arrange suitable accommodation and assistance.',
                id: 'Beberapa villa dan area umum kami dapat diakses kursi roda. Karena medan pegunungan, tidak semua area dapat mengakomodasi kursi roda. Silakan hubungi kami sebelumnya agar kami dapat mengatur akomodasi dan bantuan yang sesuai.',
                zh: '我们的部分别墅和公共区域设有轮椅通道。由于山地地形，并非所有区域都能容纳轮椅。请提前联系我们，以便我们安排合适的住宿和协助。',
                de: 'Einige unserer Villen und öffentlichen Bereiche sind rollstuhlgerecht. Aufgrund des bergigen Geländes können nicht alle Bereiche Rollstühle aufnehmen. Bitte kontaktieren Sie uns im Voraus, damit wir eine geeignete Unterkunft und Unterstützung arrangieren können.'
            }
        },
        {
            question: {
                en: 'Is there a restaurant on-site?',
                id: 'Apakah ada restoran di lokasi?',
                zh: '现场有餐厅吗？',
                de: 'Gibt es ein Restaurant vor Ort?'
            },
            answer: {
                en: 'Yes! Bale Puntang Resto serves authentic Sundanese cuisine and modern fusion dishes using organic ingredients from our own garden. Operating hours: 7:00 AM  - 10:00 PM. Private in-villa dining can also be arranged.',
                id: 'Ya! Bale Puntang Resto menyajikan masakan Sunda otentik dan hidangan fusion modern menggunakan bahan organik dari kebun kami sendiri. Jam operasional: 07:00 - 22:00. Makan malam pribadi di villa juga dapat diatur.',
                zh: '是的！Bale Puntang 餐厅使用我们自己花园的有机食材供应正宗的巽他菜肴和现代融合菜肴。营业时间：上午 7:00 - 晚上 10:00。还可以安排私人别墅内用餐。',
                de: 'Ja! Das Bale Puntang Resto serviert authentische sundanesische Küche und moderne Fusionsgerichte mit Bio-Zutaten aus unserem eigenen Garten. Öffnungszeiten: 7:00 - 22:00 Uhr. Privates Essen in der Villa kann ebenfalls arrangiert werden.'
            }
        }
    ]
};

export function FAQPage() {
    const { t, i18n } = useTranslation();
    const lang = (i18n.language?.split('-')[0] || 'id') as 'id' | 'en' | 'zh' | 'de';

    const getContent = (content: any) => {
        if (typeof content === 'string') return content;
        return content[lang] || content['en'] || content['id'] || '';
    };

    // Flatten all FAQ items for schema
    const allFAQItems = [
        ...FAQ_DATA.booking,
        ...FAQ_DATA.checkin,
        ...FAQ_DATA.policy,
        ...FAQ_DATA.transport,
        ...FAQ_DATA.facilities
    ].map(item => ({
        question: getContent(item.question),
        answer: getContent(item.answer)
    }));

    useEffect(() => {
        window.scrollTo(0, 0);
        trackPageView('/faq', 'FAQ | Taman Wisata Bougenville');
    }, []);

    const getLocalizedItems = (items: any[]) => {
        return items.map(item => ({
            question: getContent(item.question),
            answer: getContent(item.answer)
        }));
    };

    const handleBookingClick = () => {
        const booking = document.getElementById('booking');
        if (booking) {
            booking.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.open('https://wa.me/628119102003?text=I would like to make a reservation', '_blank');
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title={t('faq.title') + ' | Taman Wisata Bougenville'}
                description={t('faq.subtitle')}
                canonical="https://tamanwisatabougenville.com/faq"
            />
            <StructuredData
                type="FAQPage"
                data={allFAQItems}
            />
            <PageHero
                title={t('faq.title')}
                subtitle={t('faq.subtitle')}
                backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069"
                overlay="dark"
            />

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Booking */}
                        <div className="mb-12">
                            <h2 className="font-serif text-3xl font-light text-gray-900 mb-8 tracking-wide">
                                {t('faq.sections.booking', 'Booking & Reservations')}
                            </h2>
                            <FAQAccordion items={getLocalizedItems(FAQ_DATA.booking)} />
                        </div>

                        {/* Check-in/out */}
                        <div className="mb-12">
                            <h2 className="font-serif text-3xl font-light text-gray-900 mb-8 tracking-wide">
                                {t('faq.sections.checkin', 'Check-in & Check-out')}
                            </h2>
                            <FAQAccordion items={getLocalizedItems(FAQ_DATA.checkin)} />
                        </div>

                        {/* Policy */}
                        <div className="mb-12">
                            <h2 className="font-serif text-3xl font-light text-gray-900 mb-8 tracking-wide">
                                {t('faq.sections.policy', 'Policies & Rules')}
                            </h2>
                            <FAQAccordion items={getLocalizedItems(FAQ_DATA.policy)} />
                        </div>

                        {/* Transport */}
                        <div className="mb-12">
                            <h2 className="font-serif text-3xl font-light text-gray-900 mb-8 tracking-wide">
                                {t('faq.sections.transport', 'Transportation & Directions')}
                            </h2>
                            <FAQAccordion items={getLocalizedItems(FAQ_DATA.transport)} />
                        </div>

                        {/* Facilities */}
                        <div className="mb-12">
                            <h2 className="font-serif text-3xl font-light text-gray-900 mb-8 tracking-wide">
                                {t('faq.sections.facilities', 'Facilities & Amenities')}
                            </h2>
                            <FAQAccordion items={getLocalizedItems(FAQ_DATA.facilities)} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Still have questions */}
            <section className="py-20 bg-forest-dark text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-serif text-3xl font-light mb-4 tracking-wide">
                        {t('faq.stillHaveQuestions.title', 'Still Have Questions?')}
                    </h2>
                    <p className="text-white/90 text-lg font-light mb-8 max-w-2xl mx-auto">
                        {t('faq.stillHaveQuestions.desc', "Our friendly team is here to help. Reach out via WhatsApp, phone, or email and we'll get back to you within 24 hours.")}
                    </p>
                    <button
                        onClick={() => {
                            const event = new CustomEvent('navigate', { detail: 'contact' });
                            window.dispatchEvent(event);
                        }}
                        className="bg-white text-forest-dark px-8 py-4 font-medium uppercase tracking-[0.2em] text-xs hover:bg-gray-100 transition-all"
                    >
                        {t('nav.contact')}
                    </button>
                </div>
            </section>

            <StickyBookingCTA onBookClick={handleBookingClick} />
        </div>
    );
}
