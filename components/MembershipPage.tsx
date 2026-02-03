import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Star, Gift, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEOHead } from './ui/SEOHead';
import { optimizeImage } from '../utils/imageOptimizer';

export function MembershipPage() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        villaPreference: 'Forest House Collection',
        occasion: 'Family Vacation'
    });
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = `*Request to Join Bougenville Circle*\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCity: ${formData.location}\nPreference: ${formData.villaPreference}\nOccasion: ${formData.occasion}`;
        window.open(`https://wa.me/628119102003?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-[#FDFBF7]"> {/* Creamy paper background */}
            <SEOHead
                title="Bougenville Circle | The Private Collection"
                description="An invitation to the extraordinary. Join our private circle for curated experiences in nature's most exclusive sanctuary."
            />

            {/* 1. Cinematic Hero - Full Height */}
            <div className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={optimizeImage("/images/membership/membership-hero.jpg", 2560)}
                        alt="Mist over mountains"
                        className="w-full h-full object-cover scale-105 animate-slow-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#FDFBF7]"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
                    <div className="inline-block border-t border-b border-white/60 py-2 mb-8">
                        <span className="text-white text-xs md:text-sm tracking-[0.3em] uppercase font-light">{t('membership.collectionLabel')}</span>
                    </div>
                    <h1 className="font-serif text-5xl md:text-8xl text-white mb-8 tracking-tight drop-shadow-lg">
                        Bougenville <br /><span className="italic font-light">Circle</span>
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                        {t('membership.heroSubtitle')}
                    </p>

                    <button
                        onClick={() => document.getElementById('join-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="mt-12 bg-white/10 backdrop-blur-md border border-white/40 text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-forest-dark transition-all duration-500 rounded-sm"
                    >
                        {t('membership.joinNow')}
                    </button>
                </div>
            </div>

            {/* 2. Editorial Philosophy Section */}
            <section className="py-24 md:py-32 px-4 relative">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="w-full md:w-1/2">
                            <div className="aspect-[4/5] relative overflow-hidden rounded-sm">
                                <img
                                    src="/images/membership/invitation-privilege.jpg"
                                    alt="Luxury Detail"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 space-y-8">
                            <h2 className="font-serif text-4xl md:text-5xl text-forest-dark leading-tight">
                                {t('membership.invitationTitle')}
                            </h2>
                            <div className="w-20 h-px bg-gold"></div>
                            <p className="text-gray-600 leading-loose font-light text-lg">
                                {t('membership.invitationDesc')}
                            </p>
                            <div className="grid grid-cols-1 gap-6 pt-4">
                                <div className="flex items-start gap-4">
                                    <Star className="w-6 h-6 text-gold shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-serif text-xl text-forest-dark mb-2">{t('membership.privilege1Title')}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed font-light">{t('membership.privilege1Desc')}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Gift className="w-6 h-6 text-gold shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-serif text-xl text-forest-dark mb-2">{t('membership.privilege2Title')}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed font-light">{t('membership.privilege2Desc')}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Shield className="w-6 h-6 text-gold shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-serif text-xl text-forest-dark mb-2">{t('membership.privilege3Title')}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed font-light">{t('membership.privilege3Desc')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The 'Invitation Card' Form Section */}
            <section id="join-form" className="py-24 bg-forest-dark relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#C8A95B 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-2xl mx-auto bg-[#FDFBF7] p-8 md:p-16 rounded-sm shadow-2xl transform hover:-translate-y-2 transition-transform duration-500">
                        <div className="text-center mb-10">
                            <span className="text-gold text-xs font-bold uppercase tracking-widest block mb-4">{t('membership.formTitle')}</span>
                            <h2 className="font-serif text-4xl text-forest-dark mb-6">{t('membership.formHeading')}</h2>
                            <p className="text-gray-500 font-light text-sm">
                                {t('membership.formSubtitle')}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase tracking-wider text-forest-dark/50">{t('contact.name')}</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-transparent border-b border-gray-300 py-3 text-forest-dark focus:outline-none focus:border-gold transition-colors text-lg font-serif"
                                    placeholder={t('membership.placeholders.name')}
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase tracking-wider text-forest-dark/50">{t('contact.email')}</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-transparent border-b border-gray-300 py-3 text-forest-dark focus:outline-none focus:border-gold transition-colors text-lg font-serif"
                                        placeholder={t('membership.placeholders.email')}
                                        required
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase tracking-wider text-forest-dark/50">{t('contact.phone')}</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full bg-transparent border-b border-gray-300 py-3 text-forest-dark focus:outline-none focus:border-gold transition-colors text-lg font-serif"
                                        placeholder={t('membership.placeholders.phone')}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase tracking-wider text-forest-dark/50">{t('membership.city')}</label>
                                <input
                                    type="text"
                                    value={formData.location}
                                    onChange={e => setFormData({ ...formData, location: e.target.value })}
                                    className="w-full bg-transparent border-b border-gray-300 py-3 text-forest-dark focus:outline-none focus:border-gold transition-colors text-lg font-serif"
                                    placeholder={t('membership.placeholders.city')}
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase tracking-wider text-forest-dark/50">{t('membership.villaPreference')}</label>
                                    <select
                                        value={formData.villaPreference}
                                        onChange={e => setFormData({ ...formData, villaPreference: e.target.value })}
                                        className="w-full bg-transparent border-b border-gray-300 py-3 text-forest-dark focus:outline-none focus:border-gold transition-colors text-lg font-serif appearance-none cursor-pointer"
                                    >
                                        <option value="Forest House Puntang">Forest House Puntang</option>
                                        <option value="Mooi Lake House Puntang">Mooi Lake House Puntang</option>
                                        <option value="Dandenong Villas">Dandenong Villas</option>
                                        <option value="Provincial Villas">Provincial Villas</option>
                                        <option value="Riverside Villas">Riverside Villas</option>
                                        <option value="Nawabumi">Nawabumi</option>
                                        <option value="Kampuh Becik">Kampuh Becik</option>
                                    </select>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase tracking-wider text-forest-dark/50">{t('membership.occasion')}</label>
                                    <select
                                        value={formData.occasion}
                                        onChange={e => setFormData({ ...formData, occasion: e.target.value })}
                                        className="w-full bg-transparent border-b border-gray-300 py-3 text-forest-dark focus:outline-none focus:border-gold transition-colors text-lg font-serif appearance-none cursor-pointer"
                                    >
                                        <option value="Family Vacation">{t('membership.occasionOptions.family')}</option>
                                        <option value="Honeymoon / Couple">{t('membership.occasionOptions.honeymoon')}</option>
                                        <option value="Corporate Event">{t('membership.occasionOptions.corporate')}</option>
                                        <option value="Wellness Retreat">{t('membership.occasionOptions.wellness')}</option>
                                        <option value="Other">{t('membership.occasionOptions.other')}</option>
                                    </select>
                                </div>
                            </div>

                            <div className="pt-8">
                                <button
                                    type="submit"
                                    className="w-full bg-forest-dark text-white py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-forest-dark transition-all duration-500 flex items-center justify-center gap-2 group"
                                >
                                    <span>{t('membership.submit')}</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MembershipPage;
