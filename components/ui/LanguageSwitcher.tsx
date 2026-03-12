import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Check } from 'lucide-react';
import { trackLanguageChange } from '../../utils/analytics';

interface Language {
    code: string;
    name: string;
    nativeName: string;
    flag: string;
}

const languages: Language[] = [
    { code: 'id', name: 'Indonesian', nativeName: 'Indonesia', flag: '' },
    { code: 'en', name: 'English', nativeName: 'English', flag: '' },
    { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '' },
    { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '' },
];

interface LanguageSwitcherProps {
    isScrolled?: boolean;
    isHomePage?: boolean;
}

export function LanguageSwitcher({ isScrolled = false, isHomePage = false }: LanguageSwitcherProps) {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

    const handleLanguageChange = (langCode: string) => {
        i18n.changeLanguage(langCode);
        trackLanguageChange(langCode);
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const textColorClass = isScrolled || !isHomePage
        ? 'text-forest-dark'
        : 'text-white';

    const borderColorClass = isScrolled || !isHomePage
        ? 'border-gray-200'
        : 'border-white/20';

    const hoverBgClass = isScrolled || !isHomePage
        ? 'hover:bg-gray-50'
        : 'hover:bg-white/10';

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-2 px-3 py-2 border rounded-sm transition-all ${borderColorClass} ${hoverBgClass} ${textColorClass}`}
                aria-label="Change language"
            >
                <Globe size={16} />
                <span className="text-sm font-medium">{currentLanguage.nativeName}</span>
                <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-sm shadow-xl border border-gray-200 py-2 z-50 animate-fadeIn">
                    {languages.map((language) => (
                        <button
                            key={language.code}
                            onClick={() => handleLanguageChange(language.code)}
                            className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors ${language.code === currentLanguage.code
                                ? 'bg-forest-dark/5 text-forest-dark'
                                : 'text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            <span className="font-medium">{language.nativeName}</span>
                            {language.code === currentLanguage.code && (
                                <Check size={16} className="text-forest-dark" />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
