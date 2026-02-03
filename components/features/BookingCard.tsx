import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { trackWhatsAppBooking } from '../../utils/analytics';
import { Button } from '../ui/Button';
import { useCurrency } from '../../hooks/useCurrency';

interface BookingCardProps {
    price: number;
    rating?: number;
    reviews?: number;
    villaId: string;
    villaName: string;
}

import { useTranslation } from 'react-i18next';

export function BookingCard({ price, rating = 4.9, reviews = 120, villaId, villaName }: BookingCardProps) {
    const { t } = useTranslation();
    const { format } = useCurrency();
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(2);

    const handleBook = () => {
        // Track booking attempt
        trackWhatsAppBooking(villaName || 'Unknown Villa');

        // Format WhatsApp message
        const message = `Hi, I'm interested in booking ${villaName}%0A%0ACheck-in: ${checkIn || 'TBD'}%0ACheck-out: ${checkOut || 'TBD'}%0AGuests: ${guests}%0A%0APlease confirm availability.`;
        const whatsappUrl = `https://wa.me/628119102003?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
            {/* Price Header */}
            <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-bold text-gray-900">{format(price)}</span>
                <span className="text-gray-500 text-sm">{t('common.perNight', 'night')}</span>
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
                            onChange={(e) => setCheckIn(e.target.value)}
                            className="w-full text-sm bg-transparent focus:outline-none text-gray-700 font-light cursor-pointer"
                        />
                    </div>
                    <div className="p-3 relative hover:bg-gray-50 transition-colors cursor-pointer">
                        <label className="text-[10px] uppercase font-bold text-gray-800 block mb-0.5">{t('villa.checkOut', 'Check-out')}</label>
                        <input
                            type="date"
                            value={checkOut}
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
                {t('footer.whatsappBooking', 'Reserve')}
            </Button>

            {/* Note */}
            <p className="text-center text-xs text-gray-500 mb-6 font-light">
                {t('booking.noCharge', "You won't be charged yet")}
            </p>

            {/* Price Breakdown (Optional) */}
            <div className="pt-4 border-t border-gray-100 space-y-3">
                <div className="flex justify-between text-gray-600 text-sm font-light">
                    <span className="underline decoration-gray-300 decoration-1 underline-offset-2">{t('booking.serviceFee', 'Service fee')}</span>
                    <span className="font-medium text-gray-900">{format(0)}</span>
                </div>
                <div className="flex justify-between text-gray-600 text-sm font-light">
                    <span className="underline decoration-gray-300 decoration-1 underline-offset-2">{t('booking.cleaningFee', 'Cleaning fee')}</span>
                    <span className="font-medium text-gray-900">{format(0)}</span>
                </div>
                <hr className="border-gray-200 my-4" />
                <div className="flex justify-between text-base font-bold text-gray-900">
                    <span>{t('booking.total', 'Total')}</span>
                    <span>{format(price)}</span>
                </div>
            </div>
        </div>
    );
}
