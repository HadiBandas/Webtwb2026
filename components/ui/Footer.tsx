
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mountain, Facebook, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
    navigate: (page: string) => void;
    isHomePage?: boolean;
}

export function Footer({ navigate, isHomePage = false }: FooterProps) {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Facebook, href: 'https://www.facebook.com/tamanwisatabougenvillebdg/?locale=id_ID' },
        { icon: Instagram, href: 'https://www.instagram.com/tamanwisatabougenville/' },
        { icon: Youtube, href: 'https://www.youtube.com/@tamanwisatabougenville' }
    ];

    return (
        <footer className={`bg-forest-dark text-white/80 pt-24 pb-12 border-t border-white/10 ${isHomePage ? 'lg:pb-32' : ''}`}>
            <div className="container mx-auto px-6 md:px-8">

                <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
                    <div className="max-w-md">
                        <div className="flex items-center gap-3 mb-6">
                            <Logo variant="white" className="h-20 w-auto" />
                        </div>
                        <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
                            {t('footer.tagline')}
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map(({ icon: Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-gold hover:border-gold hover:text-forest-dark transition-all duration-300 group"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="max-w-md w-full">
                        <h4 className="text-white font-serif text-2xl mb-6">{t('footer.newsletterTitle')}</h4>
                        <p className="text-white/60 font-light mb-6">{t('footer.newsletterDesc') || "Join our exclusive list for updates and special offers."}</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder={t('footer.newsletterPlaceholder')}
                                className="w-full bg-white/5 border border-white/10 px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors pr-16"
                            />
                            <button className="absolute right-2 top-2 bottom-2 w-12 bg-gold text-forest-dark flex items-center justify-center hover:bg-white transition-colors">
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16"></div>

                {/* Middle Section: Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-20">
                    {/* Explore */}
                    <div>
                        <h4 className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-8">{t('footer.exploreTitle')}</h4>
                        <ul className="space-y-4">
                            {[
                                { id: 'villas', label: 'nav.villas' },
                                { id: 'resto', label: 'nav.resto' },
                                { id: 'facility', label: 'nav.facility' },
                                { id: 'offers', label: 'nav.offers' }
                            ].map(item => (
                                <li key={item.id}>
                                    <button onClick={() => navigate(item.id)} className="text-white/60 hover:text-gold transition-colors text-sm tracking-wide">
                                        {t(item.label)}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h4 className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-8">{t('footer.infoTitle')}</h4>
                        <ul className="space-y-4">
                            {[
                                { id: 'about', label: 'nav.about' },
                                { id: 'location', label: 'location.title' }, // Changed to verify key exists
                                { id: 'faq', label: 'nav.faq' }, // Changed to nav.faq or faq.title
                                { id: 'contact', label: 'nav.contact' }
                            ].map(item => (
                                <li key={item.id}>
                                    <button onClick={() => navigate(item.id)} className="text-white/60 hover:text-gold transition-colors text-sm tracking-wide">
                                        {t(item.label)}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact - Desktop Col Span 2 */}
                    <div className="col-span-2 md:col-span-2 lg:col-span-1">
                        <h4 className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-8">{t('footer.contactTitle')}</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-white/60">
                                <Phone size={18} className="text-gold mt-1 shrink-0" />
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase tracking-wider mb-1 text-white/40">{t('footer.reception', 'Reception')}</span>
                                    <span className="hover:text-white transition-colors cursor-pointer">+62 811 910 2003</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 text-white/60">
                                <Mail size={18} className="text-gold mt-1 shrink-0" />
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase tracking-wider mb-1 text-white/40">{t('footer.inquiries', 'Inquiries')}</span>
                                    <span className="hover:text-white transition-colors cursor-pointer">booking@tamanwisatabougenville.com</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 text-white/60">
                                <MapPin size={18} className="text-gold mt-1 shrink-0" />
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase tracking-wider mb-1 text-white/40">{t('footer.visitUs', 'Visit Us')}</span>
                                    <span className="hover:text-white transition-colors">Jl. Gn. Puntang, Bandung, Jawa Barat</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Legal / Extra (Optional) */}
                    <div className="hidden lg:block">
                        <h4 className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-8">{t('footer.resources', 'Resources')}</h4>
                        <ul className="space-y-4">
                            <li>
                                <button
                                    onClick={() => navigate('sustainability')}
                                    className="text-white/60 hover:text-gold transition-colors text-sm tracking-wide"
                                >
                                    {t('footer.sustainability', 'Sustainability')}
                                </button>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 pb-24 lg:pb-0 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-widest">
                    <p className="text-center md:text-left">&copy; 2020 - {currentYear} Taman Wisata Bougenville. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <button onClick={() => navigate('privacy')} className="hover:text-white transition-colors py-2">{t('footer.privacyPolicy')}</button>
                        <button onClick={() => navigate('terms')} className="hover:text-white transition-colors py-2">{t('footer.termsOfService')}</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
