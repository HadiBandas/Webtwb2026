import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { TextReveal, FadeIn } from './animations';

interface VideoHeroProps {
  videoUrl?: string;
  fallbackImage: string;
  headline: string;
  subheadline: string;
  ctaText?: string;
  trustText?: string;
  scrollText?: string;
  onPrimaryCTA?: () => void;
  onSecondaryCTA?: () => void;
  children?: React.ReactNode;
}

export const VideoHero: React.FC<VideoHeroProps> = ({
  videoUrl,
  fallbackImage,
  headline,
  subheadline,
  ctaText = 'Reserve',
  trustText,
  scrollText = 'Scroll',
  onPrimaryCTA,
  onSecondaryCTA,
  children
}) => {
  const [useVideo, setUseVideo] = useState(false);

  useEffect(() => {
    // Only use video if URL is provided and device is not mobile
    if (videoUrl && window.innerWidth >= 768) {
      setUseVideo(true);
    }
  }, [videoUrl]);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background - Video or Image */}
      <div className="absolute inset-0">
        {useVideo && videoUrl ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster={fallbackImage}
          >
            <source src={videoUrl} type="video/mp4" />
            {/* Fallback to image if video fails */}
            <img
              src={fallbackImage}
              alt="Taman Wisata Bougenville"
              className="w-full h-full object-cover"
            />
          </video>
        ) : (
          <img
            src={fallbackImage}
            alt={headline || "Taman Wisata Bougenville"}
            fetchPriority="high"
            className="w-full h-full object-cover animate-slow-zoom"
          />
        )}
        {/* Refined gradient - darker for more sophistication */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Luxury Minimalist Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full">

        {/* Refined Headline - More Breathing Room */}
        <div className="mb-8">
          <TextReveal
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-relaxed tracking-wider justify-center"
            text={headline}
          />
        </div>

        {/* Subtle Divider */}
        <FadeIn delay={0.4}>
          <div className="w-24 h-px bg-gold/60 mx-auto mb-8"></div>
        </FadeIn>

        {/* Elegant Subheadline - Smaller, More Refined */}
        <FadeIn delay={0.6}>
          <p className="text-white/90 text-base md:text-lg font-light tracking-wide mb-12 max-w-2xl mx-auto leading-relaxed">
            {subheadline}
          </p>
        </FadeIn>

        {/* Single Refined CTA - Only show if no children (Booking Widget) are present, or if explicitly desired */}
        {!children && onPrimaryCTA && (
          <FadeIn delay={0.8}>
            <button
              onClick={onPrimaryCTA}
              className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/30 text-white px-12 py-4 rounded-sm text-sm font-medium uppercase tracking-[0.3em] hover:bg-white/20 hover:border-white/50 transition-all duration-500 inline-flex items-center gap-3"
            >
              <span>{ctaText}</span>
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </FadeIn>
        )}

        {/* Booking Widget Slot */}
        <FadeIn delay={0.8}>
          {children}
        </FadeIn>

        {/* Minimal Trust Line - Very Subtle */}
        {trustText && (
          <FadeIn delay={1.0}>
            <p className="mt-12 text-white/60 text-xs tracking-widest uppercase">
              {trustText}
            </p>
          </FadeIn>
        )}
      </div>

      {/* Refined Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <FadeIn delay={1.2} direction="down" distance={20}>
          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="text-xs tracking-widest uppercase">{scrollText}</span>
            <ArrowDown size={20} className="animate-bounce" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

