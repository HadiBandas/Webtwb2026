import React, { useState, useMemo } from 'react';
import { Star, Calculator } from 'lucide-react';
import { trackWhatsAppBooking } from '../../utils/analytics';
import { Button } from '../ui/Button';
import { useCurrency } from '../../hooks/useCurrency';
import { useTranslation } from 'react-i18next';

interface BookingCardProps {
    price: number;
    priceWeekday?: number;
    priceWeekend?: number;
    priceHighSeason?: number;
    rating?: number;
    reviews?: number;
    villaId: string;
    villaName: string;
}

// Indonesian Public Holidays 2025-2026 (YYYY-MM-DD)
const PUBLIC_HOLIDAYS = new Set([
    // 2025
    '2025-01-01', // Tahun Baru
    '2025-01-27', // Isra Mi'raj
    '2025-01-29', // Tahun Baru Imlek
    '2025-01-30', // Cuti Bersama Imlek
    '2025-03-29', // Cuti Bersama Nyepi
    '2025-03-30', // Nyepi
    '2025-03-31', // Idul Fitri
    '2025-04-01', // Idul Fitri
    '2025-04-02', // Cuti Bersama Idul Fitri
    '2025-04-03', // Cuti Bersama Idul Fitri
    '2025-04-04', // Cuti Bersama Idul Fitri
    '2025-04-05', // Cuti Bersama Idul Fitri
    '2025-04-07', // Cuti Bersama Idul Fitri
    '2025-04-18', // Wafat Isa Al Masih
    '2025-05-01', // Hari Buruh
    '2025-05-12', // Hari Raya Waisak
    '2025-05-29', // Kenaikan Isa Al Masih
    '2025-05-30', // Cuti Bersama
    '2025-06-01', // Hari Lahir Pancasila
    '2025-06-06', // Idul Adha
    '2025-06-27', // Tahun Baru Islam
    '2025-08-17', // HUT RI
    '2025-08-18', // Cuti Bersama HUT RI
    '2025-09-05', // Maulid Nabi
    '2025-12-24', // Cuti Bersama Natal
    '2025-12-25', // Natal
    '2025-12-26', // Cuti Bersama Natal
    // 2026
    '2026-01-01', // Tahun Baru
    '2026-01-17', // Isra Mi'raj
    '2026-01-28', // Cuti Bersama Imlek
    '2026-03-19', // Nyepi
    '2026-03-20', // Idul Fitri
    '2026-03-21', // Cuti Bersama Idul Fitri
    '2026-03-22', // Cuti Bersama Idul Fitri
    '2026-03-23', // Cuti Bersama Idul Fitri
    '2026-04-03', // Wafat Isa Al Masih
    '2026-05-01', // Hari Buruh
    '2026-05-27', // Kenaikan Isa Al Masih
    '2026-05-31', // Cuti Bersama
    '2026-06-01', // Hari Lahir Pancasila
    '2026-08-17', // HUT RI
    '2026-12-25', // Natal
]);

type NightType = 'weekday' | 'weekend' | 'highSeason';

function getDateString(date: Date): string {
    return date.toISOString().split('T')[0];
}

function getNightType(date: Date): NightType {
    const dateStr = getDateString(date);
    if (PUBLIC_HOLIDAYS.has(dateStr)) return 'highSeason';
    // day 5 = Friday, day 6 = Saturday (weekend check-in nights)
    const day = date.getDay();
    if (day === 5 || day === 6) return 'weekend';
    return 'weekday';
}

interface PriceBreakdown {
    weekdayNights: number;
    weekendNights: number;
    highSeasonNights: number;
    weekdayTotal: number;
    weekendTotal: number;
    highSeasonTotal: number;
    totalNights: number;
    grandTotal: number;
}

function calculatePriceBreakdown(
    checkIn: string,
    checkOut: string,
    priceWeekday: number,
    priceWeekend: number,
    priceHighSeason: number
): PriceBreakdown | null {
    if (!checkIn || !checkOut) return null;

    const start = new Date(checkIn);
    const end = new Date(checkOut);
    if (end <= start) return null;

    let weekdayNights = 0;
    let weekendNights = 0;
    let highSeasonNights = 0;

    const current = new Date(start);
    while (current < end) {
        const type = getNightType(current);
        if (type === 'highSeason') highSeasonNights++;
        else if (type === 'weekend') weekendNights++;
        else weekdayNights++;
        current.setDate(current.getDate() + 1);
    }

    const totalNights = weekdayNights + weekendNights + highSeasonNights;

    return {
        weekdayNights,
        weekendNights,
        highSeasonNights,
        weekdayTotal: weekdayNights * priceWeekday,
        weekendTotal: weekendNights * priceWeekend,
        highSeasonTotal: highSeasonNights * priceHighSeason,
        totalNights,
        grandTotal:
            weekdayNights * priceWeekday +
            weekendNights * priceWeekend +
            highSeasonNights * priceHighSeason,
    };
}

function formatDateDisplay(dateStr: string): string {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });
}

export function BookingCard({
    price,
    priceWeekday,
    priceWeekend,
    priceHighSeason,
    rating = 4.9,
    reviews = 120,
    villaId,
    villaName,
}: BookingCardProps) {
    const { t } = useTranslation();
    const { format } = useCurrency();
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(2);

    // Use provided tier prices, fall back to base price for all tiers
    const effectiveWeekday = priceWeekday ?? price;
    const effectiveWeekend = priceWeekend ?? price;
    const effectiveHighSeason = priceHighSeason ?? price;

    const breakdown = useMemo(
        () =>
            calculatePriceBreakdown(
                checkIn,
                checkOut,
                effectiveWeekday,
                effectiveWeekend,
                effectiveHighSeason
            ),
        [checkIn, checkOut, effectiveWeekday, effectiveWeekend, effectiveHighSeason]
    );

    const handleBook = () => {
        trackWhatsAppBooking(villaName || 'Unknown Villa');

        let message: string;

        if (breakdown && breakdown.totalNights > 0) {
            // Use translated template with price estimation
            const template = t('booking.whatsappMessageVilla',
                'Hello, I would like to book {{villaName}}.%0A%0ACheck-in: {{checkIn}}%0ACheck-out: {{checkOut}}%0AGuests: {{guests}}%0A%0AEstimated {{nights}} night(s): {{price}}%0A%0APlease confirm availability.',
                {
                    villaName: villaName,
                    checkIn: formatDateDisplay(checkIn),
                    checkOut: formatDateDisplay(checkOut),
                    guests: guests,
                    nights: breakdown.totalNights,
                    price: format(breakdown.grandTotal),
                }
            );
            // i18next may return the already-interpolated string, but if not, do manual replacement
            message = template
                .replace('{{villaName}}', villaName)
                .replace('{{checkIn}}', formatDateDisplay(checkIn))
                .replace('{{checkOut}}', formatDateDisplay(checkOut))
                .replace('{{guests}}', String(guests))
                .replace('{{nights}}', String(breakdown.totalNights))
                .replace('{{price}}', format(breakdown.grandTotal));
        } else {
            // No dates selected — use general template
            const template = t('booking.whatsappMessageVilla',
                'Hello, I would like to book {{villaName}}.%0A%0ACheck-in: {{checkIn}}%0ACheck-out: {{checkOut}}%0AGuests: {{guests}}%0A%0AEstimated {{nights}} night(s): {{price}}%0A%0APlease confirm availability.',
                {
                    villaName: villaName,
                    checkIn: checkIn || 'TBD',
                    checkOut: checkOut || 'TBD',
                    guests: guests,
                    nights: '-',
                    price: '-',
                }
            );
            message = template
                .replace('{{villaName}}', villaName)
                .replace('{{checkIn}}', checkIn || 'TBD')
                .replace('{{checkOut}}', checkOut || 'TBD')
                .replace('{{guests}}', String(guests))
                .replace('{{nights}}', '-')
                .replace('{{price}}', '-');
        }

        const whatsappUrl = `https://wa.me/628119102003?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    // Today's date string for min attribute
    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
            {/* Price Header */}
            <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-bold text-gray-900">{format(effectiveWeekday)}</span>
                <span className="text-gray-500 text-sm">{t('common.perNight', '/ night')}</span>
            </div>

            {/* Rating */}
            {rating && reviews && (
                <div className="flex items-center gap-1 mb-6 text-sm">
                    <Star size={14} className="fill-current text-gray-900" />
                    <span className="font-medium text-gray-900">{rating}</span>
                    <span className="text-gray-500"> · </span>
                    <span className="text-gray-500 underline decoration-gray-400 decoration-1 underline-offset-2 cursor-pointer">{reviews} {t('common.reviews', 'reviews')}</span>
                </div>
            )}

            {/* Booking Form */}
            <div className="border border-gray-400 rounded-lg mb-4 overflow-hidden relative">
                <div className="grid grid-cols-2 border-b border-gray-400">
                    <div className="p-3 border-r border-gray-400 relative hover:bg-gray-50 transition-colors cursor-pointer">
                        <label className="text-[10px] uppercase font-bold text-gray-800 block mb-0.5">{t('villa.checkIn', 'Check-in')}</label>
                        <input
                            type="date"
                            value={checkIn}
                            min={today}
                            onChange={(e) => {
                                setCheckIn(e.target.value);
                                // Reset checkout if it's before new check-in
                                if (checkOut && e.target.value >= checkOut) {
                                    setCheckOut('');
                                }
                            }}
                            className="w-full text-sm bg-transparent focus:outline-none text-gray-700 font-light cursor-pointer"
                        />
                    </div>
                    <div className="p-3 relative hover:bg-gray-50 transition-colors cursor-pointer">
                        <label className="text-[10px] uppercase font-bold text-gray-800 block mb-0.5">{t('villa.checkOut', 'Check-out')}</label>
                        <input
                            type="date"
                            value={checkOut}
                            min={checkIn || today}
                            onChange={(e) => setCheckOut(e.target.value)}
                            className="w-full text-sm bg-transparent focus:outline-none text-gray-700 font-light cursor-pointer"
                        />
                    </div>
                </div>
                <div className="p-3 relative hover:bg-gray-50 transition-colors cursor-pointer">
                    <label className="text-[10px] uppercase font-bold text-gray-800 block mb-0.5">{t('home.guestLabel_plural', 'Guests').replace('{{count}}', '')}</label>
                    <select
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                        className="w-full text-sm bg-transparent focus:outline-none text-gray-700 font-light cursor-pointer"
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16].map((num) => (
                            <option key={num} value={num}>
                                {num} {num === 1 ? t('home.guestLabel', 'Guest').replace('{{count}}', '') : t('home.guestLabel_plural', 'Guests').replace('{{count}}', '')}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Book Button */}
            <Button
                variant="primary"
                size="lg"
                className="w-full mb-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] border-none text-white font-bold py-3.5 rounded-lg shadow-md hover:shadow-lg transform active:scale-[0.98] transition-all duration-200"
                onClick={handleBook}
                id="btn-booking-card-submit"
            >
                {t('booking.whatsappBooking', 'Book via WhatsApp')}
            </Button>

            {/* Note */}
            <p className="text-center text-xs text-gray-500 mb-4 font-light">
                {t('booking.noCharge', "You won't be charged yet")}
            </p>

            {/* Price Breakdown - shown when dates selected */}
            <div className="pt-4 border-t border-gray-100 space-y-3">
                {breakdown && breakdown.totalNights > 0 ? (
                    <>
                        {/* Breakdown rows */}
                        <div className="flex items-center gap-2 mb-3">
                            <Calculator size={14} className="text-forest-dark" />
                            <span className="text-xs uppercase tracking-widest text-gray-500">{t('booking.estimatedTotal', 'Estimated Total')}</span>
                        </div>

                        {breakdown.weekdayNights > 0 && (
                            <div className="flex justify-between text-gray-600 text-sm font-light">
                                <span>{t('booking.weekdayNights', 'Weekday')} × {breakdown.weekdayNights} {breakdown.weekdayNights === 1 ? t('booking.night', 'night') : t('booking.nights', 'nights')}</span>
                                <span className="font-medium text-gray-900">{format(breakdown.weekdayTotal)}</span>
                            </div>
                        )}

                        {breakdown.weekendNights > 0 && (
                            <div className="flex justify-between text-gray-600 text-sm font-light">
                                <span>{t('booking.weekendNights', 'Weekend')} × {breakdown.weekendNights} {breakdown.weekendNights === 1 ? t('booking.night', 'night') : t('booking.nights', 'nights')}</span>
                                <span className="font-medium text-gray-900">{format(breakdown.weekendTotal)}</span>
                            </div>
                        )}

                        {breakdown.highSeasonNights > 0 && (
                            <div className="flex justify-between text-gray-600 text-sm font-light">
                                <span>{t('booking.highSeasonNights', 'High Season')} × {breakdown.highSeasonNights} {breakdown.highSeasonNights === 1 ? t('booking.night', 'night') : t('booking.nights', 'nights')}</span>
                                <span className="font-medium text-gray-900">{format(breakdown.highSeasonTotal)}</span>
                            </div>
                        )}

                        <hr className="border-gray-200 my-4" />
                        <div className="flex justify-between text-base font-bold text-gray-900">
                            <span>{t('booking.total', 'Total')} ({breakdown.totalNights} {breakdown.totalNights === 1 ? t('booking.night', 'night') : t('booking.nights', 'nights')})</span>
                            <span className="text-forest-dark">{format(breakdown.grandTotal)}</span>
                        </div>
                        <p className="text-[11px] text-gray-400 text-center mt-1">
                            *{t('booking.priceNote', 'Estimated price, excludes 10% tax')}
                        </p>
                    </>
                ) : (
                    <>
                        {/* Default - no dates selected */}
                        <div className="flex justify-between text-gray-600 text-sm font-light">
                            <span className="underline decoration-gray-300 decoration-1 underline-offset-2">{t('booking.serviceFee', 'Service fee')}</span>
                            <span className="font-medium text-gray-900">{format(0)}</span>
                        </div>
                        <div className="flex justify-between text-gray-600 text-sm font-light">
                            <span className="underline decoration-gray-300 decoration-1 underline-offset-2">{t('booking.cleaningFee', 'Cleaning fee')}</span>
                            <span className="font-medium text-gray-900">{format(0)}</span>
                        </div>
                        <hr className="border-gray-200 my-4" />
                        <div className="flex justify-between text-sm text-gray-500 italic">
                            <span>{t('booking.selectDates', 'Select dates to see price estimate')}</span>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
