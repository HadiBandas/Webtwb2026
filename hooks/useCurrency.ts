/**
 * useCurrency Hook
 * Provides currency conversion based on current language
 */

import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
    fetchExchangeRates,
    formatCurrency,
    convertFromIDR,
    getCurrencyInfo,
    ExchangeRates,
    CURRENCY_MAP,
} from '../utils/currency';

interface UseCurrencyReturn {
    /** Format IDR amount to current language's currency */
    format: (amountIDR: number) => string;
    /** Convert IDR to current language's currency (raw number) */
    convert: (amountIDR: number) => number;
    /** Current currency info */
    currency: typeof CURRENCY_MAP.id;
    /** Exchange rates (null if not loaded) */
    rates: ExchangeRates | null;
    /** Loading state */
    loading: boolean;
    /** Error state */
    error: string | null;
}

export function useCurrency(): UseCurrencyReturn {
    const { i18n } = useTranslation();
    const lang = i18n.language?.split('-')[0] || 'id';

    const [rates, setRates] = useState<ExchangeRates | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch rates on mount and when language changes
    useEffect(() => {
        let cancelled = false;

        async function loadRates() {
            setLoading(true);
            setError(null);

            const fetchedRates = await fetchExchangeRates();

            if (!cancelled) {
                if (fetchedRates) {
                    setRates(fetchedRates);
                } else {
                    setError('Failed to load exchange rates');
                }
                setLoading(false);
            }
        }

        loadRates();

        return () => {
            cancelled = true;
        };
    }, [lang]);

    // Format function memoized for current lang
    const format = useCallback(
        (amountIDR: number): string => {
            return formatCurrency(amountIDR, lang, rates);
        },
        [lang, rates]
    );

    // Convert function memoized for current lang
    const convert = useCallback(
        (amountIDR: number): number => {
            const currencyInfo = getCurrencyInfo(lang);
            return convertFromIDR(amountIDR, currencyInfo.code, rates);
        },
        [lang, rates]
    );

    return {
        format,
        convert,
        currency: getCurrencyInfo(lang),
        rates,
        loading,
        error,
    };
}

export default useCurrency;
