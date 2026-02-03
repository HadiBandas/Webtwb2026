
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PageHero } from '../components/ui/PageHero';
import { SEOHead } from '../components/ui/SEOHead';
import { trackPageView } from '../utils/analytics';

export function PrivacyPage() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language.split('-')[0];

    useEffect(() => {
        trackPageView('/privacy', 'Privacy Policy | Taman Wisata Bougenville');
    }, []);

    const dateLocale = lang === 'id' ? 'id-ID' : 'en-US';

    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title={t('footer.privacyPolicy') + ' | Taman Wisata Bougenville'}
                description="Privacy Policy and Data Protection practices of Taman Wisata Bougenville."
                canonical="https://tamanwisatabougenville.com/privacy"
            />

            <PageHero
                title={t('privacy.title')}
                subtitle={t('privacy.subtitle')}
                backgroundImage="/images/membership/membership-hero.jpg"
                overlay="dark"
            />

            <section className="py-20 md:py-28">
                <div className="container mx-auto px-6 md:px-8 max-w-4xl">
                    <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100 rounded-sm animate-fade-in-up">
                        <div className="space-y-8 text-gray-600 font-light leading-relaxed">
                            <p>{t('privacy.lastUpdated')}: {new Date().toLocaleDateString(dateLocale, { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                            <section>
                                <h3 className="font-serif text-2xl text-gray-900 mb-4">{t('privacy.intro.title')}</h3>
                                <div dangerouslySetInnerHTML={{ __html: t('privacy.intro.content') }} />
                            </section>

                            <section>
                                <h3 className="font-serif text-2xl text-gray-900 mb-4">{t('privacy.collection.title')}</h3>
                                <div dangerouslySetInnerHTML={{ __html: t('privacy.collection.content') }} />
                            </section>

                            <section>
                                <h3 className="font-serif text-2xl text-gray-900 mb-4">{t('privacy.use.title')}</h3>
                                <div dangerouslySetInnerHTML={{ __html: t('privacy.use.content') }} />
                            </section>

                            <section>
                                <h3 className="font-serif text-2xl text-gray-900 mb-4">{t('privacy.protection.title')}</h3>
                                <div dangerouslySetInnerHTML={{ __html: t('privacy.protection.content') }} />
                            </section>

                            <section>
                                <h3 className="font-serif text-2xl text-gray-900 mb-4">{t('privacy.sharing.title')}</h3>
                                <div dangerouslySetInnerHTML={{ __html: t('privacy.sharing.content') }} />
                            </section>

                            <section>
                                <h3 className="font-serif text-2xl text-gray-900 mb-4">{t('privacy.contact.title')}</h3>
                                <div dangerouslySetInnerHTML={{ __html: t('privacy.contact.content') }} />
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
