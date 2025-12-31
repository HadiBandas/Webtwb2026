import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { MobileMenu } from '../layout/MobileMenu';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
import { LanguageSwitcher } from '../features/LanguageSwitcher';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState('id');

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigate = (section: string) => {
        setMobileOpen(false);

        // For page routes (villas, resto, facility, gallery)
        const pageRoutes = ['villas', 'resto', 'facility', 'gallery'];
        if (pageRoutes.includes(section)) {
            // Trigger navigation in parent App component
            window.dispatchEvent(new CustomEvent('navigate', { detail: section }));
        } else if (section === 'booking' || section === 'home') {
            // Scroll to section
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // Try scrolling to element ID
            const el = document.getElementById(section);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const handleLanguageChange = (lang: string) => {
        setCurrentLang(lang);
        // TODO: Update app-wide language context
    };

    return (
        <>
            {/* Desktop Header */}
            <motion.header
                className={`fixed inset-x-0 top-0 z-30 flex items-center justify-between px-8 py-4 transition-colors duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
                    }`}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <Logo className="h-14 w-auto" />
                <nav className="hidden md:flex gap-6 items-center">
                    <Button variant="ghost" size="sm" onClick={() => handleNavigate('villas')}>Villas</Button>
                    <Button variant="ghost" size="sm" onClick={() => handleNavigate('resto')}>Dining</Button>
                    <Button variant="ghost" size="sm" onClick={() => handleNavigate('facility')}>Experiences</Button>
                    <Button variant="ghost" size="sm" onClick={() => handleNavigate('gallery')}>Gallery</Button>
                    <LanguageSwitcher currentLang={currentLang} onLanguageChange={handleLanguageChange} />
                    <Button variant="primary" size="sm" onClick={() => handleNavigate('booking')}>Book Now</Button>
                </nav>
                {/* Mobile menu button */}
                <div className="md:hidden flex items-center gap-2">
                    <LanguageSwitcher currentLang={currentLang} onLanguageChange={handleLanguageChange} />
                    <button
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        onClick={() => setMobileOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu size={24} className="text-gray-900" />
                    </button>
                </div>
            </motion.header>

            {/* Mobile overlay */}
            <MobileMenu
                isOpen={mobileOpen}
                onClose={() => setMobileOpen(false)}
                onNavigate={handleNavigate}
            />
        </>
    );
}
