import React from 'react';
import { useTranslation } from 'react-i18next';
import { Star, Award, Users, Shield } from 'lucide-react';

interface TrustBadgesProps {
    variant?: 'hero' | 'inline';
}

export const TrustBadges: React.FC<TrustBadgesProps> = ({ variant = 'inline' }) => {
    const { t } = useTranslation();

    if (variant === 'hero') {
        // Below hero CTAs - horizontal badges
        return (
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-white/90 text-xs md:text-sm">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                    <Award size={14} className="text-gold" />
                    <span>{t('trust.featured')} {t('trust.media')}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                    <Star size={14} className="text-gold" />
                    <span className="font-serif italic font-bold">4.9</span>
                    <span>(328 {t('trust.reviews').replace('5-Star ', '')})</span>
                </div>
            </div>
        );
    }

    // Inline variant for other sections (Luxury Redesign)
    return (
        <div className="py-12 border-y border-forest-dark/5 bg-cream/30">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">

                    {/* Item 1: Reviews */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="flex gap-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} className="fill-gold text-gold" />
                            ))}
                        </div>
                        <div className="text-3xl md:text-4xl font-serif text-forest-dark mb-1">4.9</div>
                        <p className="text-xs uppercase tracking-widest text-forest-dark/60 font-medium">{t('trust.reviews')}</p>
                    </div>

                    {/* Divider (Desktop) */}
                    <div className="hidden md:block w-px h-12 bg-forest-dark/10"></div>

                    {/* Item 2: Guests */}
                    <div className="flex flex-col items-center text-center">
                        <Users size={24} className="text-gold mb-3 opacity-80" />
                        <div className="text-3xl md:text-4xl font-serif text-forest-dark mb-1">10k+</div>
                        <p className="text-xs uppercase tracking-widest text-forest-dark/60 font-medium">{t('trust.guests')}</p>
                    </div>



                </div>
            </div>
        </div>
    );
};
