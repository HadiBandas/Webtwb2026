import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface PageHeroProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
    backgroundVideo?: string;
    ctaPrimary?: {
        text: string;
        onClick: () => void;
    };
    ctaSecondary?: {
        text: string;
        onClick: () => void;
    };
    overlay?: 'dark' | 'light' | 'gradient';
}

export function PageHero({
    title,
    subtitle,
    backgroundImage,
    backgroundVideo,
    ctaPrimary,
    ctaSecondary,
    overlay = 'dark'
}: PageHeroProps) {
    const overlayClasses = {
        dark: 'bg-gradient-to-b from-black/60 via-black/40 to-black/60',
        light: 'bg-gradient-to-b from-white/40 via-white/20 to-white/40',
        gradient: 'bg-gradient-to-r from-forest-dark/80 via-forest/60 to-transparent'
    };

    return (
        <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
            {/* Background Media */}
            {backgroundVideo ? (
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
            ) : backgroundImage ? (
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center animate-ken-burns"
                    style={{ backgroundImage: `url("${backgroundImage}")` }}
                />
            ) : (
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-forest-dark via-forest to-forest-dark" />
            )}

            {/* Overlay */}
            <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-up">
                    {title}
                </h1>

                {subtitle && (
                    <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                        {subtitle}
                    </p>
                )}

                {(ctaPrimary || ctaSecondary) && (
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
                        {ctaPrimary && (
                            <button
                                onClick={ctaPrimary.onClick}
                                className="bg-white text-forest-dark px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-gray-50 transition-all hover:scale-105 flex items-center gap-2 group"
                            >
                                {ctaPrimary.text}
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        )}

                        {ctaSecondary && (
                            <button
                                onClick={ctaSecondary.onClick}
                                className="border-2 border-white text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-forest-dark transition-all"
                            >
                                {ctaSecondary.text}
                            </button>
                        )}
                    </div>
                )}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
                </div>
            </div>
        </section>
    );
}
