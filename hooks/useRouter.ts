import { useState, useEffect, useCallback } from 'react';

type ViewState = 'home' | 'villas' | 'resto' | 'facility' | 'gallery' | 'villa-detail' | 'offers' | 'about' | 'location' | 'contact' | 'faq' | 'blog' | 'membership' | 'privacy' | 'terms' | 'booking';

export function useRoute(initialView: ViewState = 'home') {
    const [view, setView] = useState<ViewState>(initialView);
    const [params, setParams] = useState<Record<string, string>>({});
    const [lang, setLang] = useState<'id' | 'en'>('id');

    // Initialize from URL on mount
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const page = searchParams.get('page') as ViewState;
        const id = searchParams.get('id');
        const urlLang = searchParams.get('lang') as 'id' | 'en';

        if (page && isValidView(page)) {
            setView(page);
        }
        if (id) {
            setParams(prev => ({ ...prev, id }));
        }
        if (urlLang && (urlLang === 'id' || urlLang === 'en')) {
            setLang(urlLang);
        }
    }, []);

    // Update URL when view changes
    const navigate = useCallback((newView: ViewState, newParams?: Record<string, string>, newLang?: 'id' | 'en') => {
        setView(newView);
        if (newParams) {
            setParams(newParams);
        }

        const currentLang = newLang || lang;
        if (newLang) {
            setLang(newLang);
        }

        const url = new URL(window.location.href);
        url.searchParams.set('page', newView);

        if (newParams?.id) {
            url.searchParams.set('id', newParams.id);
        } else {
            url.searchParams.delete('id');
        }

        if (currentLang !== 'id') {
            url.searchParams.set('lang', currentLang);
        } else {
            url.searchParams.delete('lang');
        }

        window.history.pushState({ view: newView, params: newParams, lang: currentLang }, '', url.toString());

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [lang]);

    // Handle back button
    useEffect(() => {
        const handlePopState = (event: PopStateEvent) => {
            if (event.state) {
                setView(event.state.view || 'home');
                setParams(event.state.params || {});
                if (event.state.lang) setLang(event.state.lang);
            } else {
                // Fallback to parsing URL if no state
                const searchParams = new URLSearchParams(window.location.search);
                const page = searchParams.get('page') as ViewState;
                const urlLang = searchParams.get('lang') as 'id' | 'en';

                if (page && isValidView(page)) {
                    setView(page);
                } else {
                    setView('home');
                }

                if (urlLang) setLang(urlLang);
            }
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    return { view, navigate, params, lang, setLang };
}

function isValidView(view: string): view is ViewState {
    const validViews = ['home', 'villas', 'resto', 'facility', 'gallery', 'villa-detail', 'offers', 'about', 'location', 'contact', 'faq', 'blog', 'membership', 'privacy', 'terms', 'sustainability', 'booking'];
    return validViews.includes(view);
}
