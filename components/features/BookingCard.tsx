import React, { useState } from 'react';
import { Star } from 'lucide-react';
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
        // Format WhatsApp message
        const message = `Hi, I'm interested in booking ${villaName}%0A%0ACheck-in: ${checkIn || 'TBD'}%0ACheck-out: ${checkOut || 'TBD'}%0AGuests: ${guests}%0A%0APlease confirm availability.`;
        const whatsappUrl = `https://wa.me/6281224178271?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="sticky top-24 bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
            {/* Price Header */}
            <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-semibold">{format(price)}</span>
                <span className="text-gray-600 text-sm">{t('common.perNight', '/ night')}</span>
            </div>

            {/* Rating */}
            {rating && reviews && (
                <div className="flex items-center gap-1 mb-6 text-sm">
                    <Star size={14} className="fill-current text-gray-900" />
                    <span className="font-semibold">{rating}</span>
                    <span className="text-gray-600">({reviews} {t('common.reviews', 'reviews')})</span>
                </div>
            )}

            {/* Booking Form */}
            <div className="border border-gray-300 rounded-lg mb-4">
                <div className="grid grid-cols-2 border-b border-gray-300">
                    <div className="p-3 border-r border-gray-300">
                        <label className="text-xs font-semibold uppercase block mb-1">{t('villa.checkIn', 'Check-in')}</label>
                        <input
                            type="date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            className="w-full text-sm focus:outline-none"
                        />
                    </div>
                    <div className="p-3">
                        <label className="text-xs font-semibold uppercase block mb-1">{t('villa.checkOut', 'Check-out')}</label>
                        <input
                            type="date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            className="w-full text-sm focus:outline-none"
                        />
                    </div>
                </div>
                <div className="p-3">
                    <label className="text-xs font-semibold uppercase block mb-1">{t('home.guestLabel_plural', 'Guests').replace('{{count}}', '')}</label>
                    <select
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                        className="w-full text-sm focus:outline-none"
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
            <Button variant="primary" size="lg" className="w-full mb-4" onClick={handleBook}>
                {t('footer.whatsappBooking', 'Reserve via WhatsApp')}
            </Button>

            {/* Note */}
            <p className="text-center text-xs text-gray-500">
                {t('booking.noCharge', "You won't be charged yet")}
            </p>

            {/* Price Breakdown (Optional) */}
            <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">{t('booking.serviceFee', 'Service fee')}</span>
                    <span className="font-medium">{t('booking.included', 'Included')}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{t('booking.cleaningFee', 'Cleaning fee')}</span>
                    <span className="font-medium">{t('booking.included', 'Included')}</span>
                </div>
            </div>
        </div>
    );
}
