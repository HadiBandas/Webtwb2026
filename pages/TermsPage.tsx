
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PageHero } from '../components/ui/PageHero';
import { SEOHead } from '../components/ui/SEOHead';
import { trackPageView } from '../utils/analytics';

export function TermsPage() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language.split('-')[0];

    useEffect(() => {
        trackPageView('/terms', 'Terms of Service | Taman Wisata Bougenville');
    }, []);

    const dateLocale = lang === 'id' ? 'id-ID' : 'en-US';
    const termsSections = t('terms.sections', { returnObjects: true });

    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title={t('footer.termsOfService') + ' | Taman Wisata Bougenville'}
                description="Terms and Conditions of usage and stay at Taman Wisata Bougenville."
                canonical="https://tamanwisatabougenville.com/terms"
            />

            <PageHero
                title={t('terms.title')}
                subtitle={t('terms.subtitle')}
                backgroundImage="/images/villas/forest-house/DSC09744WEB.jpg"
                overlay="dark"
            />

            <section className="py-20 md:py-28">
                <div className="container mx-auto px-6 md:px-8 max-w-4xl">
                    <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100 rounded-sm animate-fade-in-up">
                        <div className="space-y-8 text-gray-600 font-light leading-relaxed">
                            <p>{t('terms.lastUpdated')}: {new Date().toLocaleDateString(dateLocale, { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                            {Array.isArray(termsSections) && termsSections.map((section: any, index: number) => (
                                <section key={index}>
                                    <h3 className="font-serif text-2xl text-gray-900 mb-4">{section.title}</h3>
                                    <div dangerouslySetInnerHTML={{ __html: section.content }} />
                                </section>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
