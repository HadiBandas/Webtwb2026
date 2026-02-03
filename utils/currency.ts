/**
 * Currency Conversion Utilities
 * Converts IDR to other currencies based on selected language
 */

// Currency mapping based on language
export const CURRENCY_MAP: Record<string, { code: string; symbol: string; locale: string }> = {
    id: { code: 'IDR', symbol: 'Rp', locale: 'id-ID' },
    en: { code: 'USD', symbol: '$', locale: 'en-US' },
    zh: { code: 'CNY', symbol: '¥', locale: 'zh-CN' },
    de: { code: 'EUR', symbol: '€', locale: 'de-DE' },
};

// Cache key for localStorage
const CACHE_KEY = 'twb_exchange_rates';
const CACHE_EXPIRY_MS = 60 * 60 * 1000; // 1 hour

export interface ExchangeRates {
    rates: {
        USD: number;
        CNY: number;
        EUR: number;
    };
    base: string;
    date: string;
    timestamp: number;
}

/**
 * Fetch exchange rates from Frankfurter API
 * Falls back to cached rates if API fails
 */
export async function fetchExchangeRates(): Promise<ExchangeRates | null> {
    // Check cache first
    try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
            const parsed: ExchangeRates = JSON.parse(cached);
            const now = Date.now();
            if (now - parsed.timestamp < CACHE_EXPIRY_MS) {
                console.log('[Currency] Using cached rates from', new Date(parsed.timestamp).toISOString());
                return parsed;
            }
        }
    } catch (e) {
        console.warn('[Currency] Cache read error:', e);
    }

    // Fetch from API
    try {
        const response = await fetch('https://api.frankfurter.app/latest?from=IDR&to=USD,CNY,EUR');
        if (!response.ok) throw new Error(`API error: ${response.status}`);

        const data = await response.json();
        const rates: ExchangeRates = {
            rates: {
                USD: data.rates.USD,
                CNY: data.rates.CNY,
                EUR: data.rates.EUR,
            },
            base: data.base,
            date: data.date,
            timestamp: Date.now(),
        };

        // Cache the rates
        localStorage.setItem(CACHE_KEY, JSON.stringify(rates));
        console.log('[Currency] Fetched fresh rates:', rates);
        return rates;
    } catch (e) {
        console.error('[Currency] API fetch error:', e);

        // Try to use expired cache as fallback
        try {
            const cached = localStorage.getItem(CACHE_KEY);
            if (cached) {
                console.warn('[Currency] Using expired cache as fallback');
                return JSON.parse(cached);
            }
        } catch { }

        // Static fallback rates (approximate as of Jan 2026)
        // 1 IDR ≈ 0.0000625 USD, 0.0000589 EUR, 0.000455 CNY
        console.warn('[Currency] Using static fallback rates');
        return {
            rates: {
                USD: 0.0000625,  // ~16,000 IDR = 1 USD
                EUR: 0.0000589,  // ~17,000 IDR = 1 EUR  
                CNY: 0.000455,   // ~2,200 IDR = 1 CNY
            },
            base: 'IDR',
            date: new Date().toISOString().split('T')[0],
            timestamp: Date.now(),
        };
    }
}

/**
 * Convert amount from IDR to target currency
 */
export function convertFromIDR(
    amountIDR: number,
    targetCurrency: string,
    rates: ExchangeRates | null
): number {
    if (targetCurrency === 'IDR' || !rates) {
        return amountIDR;
    }

    const rate = rates.rates[targetCurrency as keyof typeof rates.rates];
    if (!rate) return amountIDR;

    return amountIDR * rate;
}

/**
 * Format currency with proper locale and symbol
 */
export function formatCurrency(
    amountIDR: number,
    lang: string,
    rates: ExchangeRates | null
): string {
    const currencyInfo = CURRENCY_MAP[lang] || CURRENCY_MAP.id;
    const convertedAmount = convertFromIDR(amountIDR, currencyInfo.code, rates);

    // Format based on currency
    if (currencyInfo.code === 'IDR') {
        // Indonesian format: Rp 2.500.000
        return `Rp ${Math.round(convertedAmount).toLocaleString('id-ID')}`;
    }

    // Other currencies: use Intl formatter
    try {
        return new Intl.NumberFormat(currencyInfo.locale, {
            style: 'currency',
            currency: currencyInfo.code,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(Math.round(convertedAmount));
    } catch {
        // Fallback
        return `${currencyInfo.symbol}${Math.round(convertedAmount).toLocaleString()}`;
    }
}

/**
 * Get currency info for a language
 */
export function getCurrencyInfo(lang: string) {
    return CURRENCY_MAP[lang] || CURRENCY_MAP.id;
}
