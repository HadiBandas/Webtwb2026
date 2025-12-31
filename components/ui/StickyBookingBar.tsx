import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface StickyBookingBarProps {
    lang?: 'id' | 'en';
    villaName?: string;
    basePrice?: number;
}

export const StickyBookingBar: React.FC<StickyBookingBarProps> = ({
    lang = 'id',
    villaName,
    basePrice
}) => {
    // Mobile expand state
    const [isExpanded, setIsExpanded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(2);
    const [nights, setNights] = useState(0);

    // Show/hide based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsVisible(scrollPosition > 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate nights between dates
    useEffect(() => {
        if (checkIn && checkOut) {
            const start = new Date(checkIn);
            const end = new Date(checkOut);
            const diffTime = Math.abs(end.getTime() - start.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            setNights(diffDays);
        }
    }, [checkIn, checkOut]);

    // Close expanded menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (isExpanded && !target.closest('.mobile-booking-bar')) {
                setIsExpanded(false);
            }
        };

        if (isExpanded) {
            document.addEventListener('click', handleClickOutside);
        }
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isExpanded]);

    const handleCheckAvailability = () => {
        const baseMessage = lang === 'id'
            ? `Halo Taman Wisata Bougenville, saya ingin cek ketersediaan`
            : `Hello Taman Wisata Bougenville, I'd like to check availability`;

        const dateInfo = checkIn && checkOut
            ? ` untuk ${checkIn} - ${checkOut} (${nights} malam)`
            : '';

        const guestInfo = ` untuk ${guests} tamu`;
        const villaInfo = villaName ? `. Saya tertarik dengan ${villaName}` : '';

        const message = encodeURIComponent(baseMessage + dateInfo + guestInfo + villaInfo);
        window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
    };

    // Get minimum date (today)
    const getMinDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    };

    return (
        <>
            {/* Desktop Sticky Bar - Luxury Minimalism */}
            <div
                className={`hidden lg:block fixed bottom-0 left-0 right-0 z-50 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                    }`}
            >
                <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-soft">
                    <div className="container mx-auto px-4 py-4">
                        <div className="max-w-5xl mx-auto flex items-center gap-3">
                            {/* Check-in - Minimal Design */}
                            <div className="flex-1">
                                <label className="block text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-1.5 font-medium">
                                    {lang === 'id' ? 'Check In' : 'Check In'}
                                </label>
                                <input
                                    type="date"
                                    value={checkIn}
                                    onChange={(e) => setCheckIn(e.target.value)}
                                    min={getMinDate()}
                                    className="w-full px-3 py-2 bg-transparent border-b border-gray-200 text-sm font-light focus:outline-none focus:border-gray-400 transition-colors cursor-pointer"
                                />
                            </div>

                            {/* Check-out */}
                            <div className="flex-1">
                                <label className="block text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-1.5 font-medium">
                                    {lang === 'id' ? 'Check Out' : 'Check Out'}
                                </label>
                                <input
                                    type="date"
                                    value={checkOut}
                                    onChange={(e) => setCheckOut(e.target.value)}
                                    min={checkIn || getMinDate()}
                                    className="w-full px-3 py-2 bg-transparent border-b border-gray-200 text-sm font-light focus:border-gray-400 transition-colors cursor-pointer"
                                />
                            </div>

                            {/* Guests */}
                            <div className="flex-1">
                                <label className="block text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-1.5 font-medium">
                                    {lang === 'id' ? 'Tamu' : 'Guests'}
                                </label>
                                <select
                                    value={guests}
                                    onChange={(e) => setGuests(Number(e.target.value))}
                                    className="w-full px-3 py-2 bg-transparent border-b border-gray-200 text-sm font-light focus:outline-none focus:border-gray-400 transition-colors cursor-pointer appearance-none"
                                >
                                    {[2, 4, 6, 8, 10, 12].map(num => (
                                        <option key={num} value={num}>{num} {lang === 'id' ? 'Tamu' : 'Guests'}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Refined CTA */}
                            <div className="flex-1">
                                {nights > 0 && (
                                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1.5">
                                        {nights} {lang === 'id' ? 'malam' : 'nights'}
                                    </p>
                                )}
                                <button
                                    onClick={handleCheckAvailability}
                                    className="w-full bg-forest-dark hover:bg-black text-white px-6 py-2.5 text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 group"
                                >
                                    {lang === 'id' ? 'Reservasi' : 'Reserve'}
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Sticky Bar - Compact & Expandable */}
            <div
                className={`lg:hidden fixed bottom-0 left-0 right-0 z-30 transition-all duration-500 mobile-booking-bar ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                    }`}
            >
                <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] pb-safe">
                    {/* Compact View (Default) */}
                    {!isExpanded && (
                        <div
                            className="px-4 py-3 flex items-center justify-between gap-4 cursor-pointer active:bg-gray-50 transition-colors"
                            onClick={() => setIsExpanded(true)}
                        >
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-widest text-forest-dark font-bold flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse"></span>
                                    {lang === 'id' ? 'Mulai Reservasi' : 'Start Your Journey'}
                                </span>
                                <span className="text-sm font-serif text-gray-900">From Rp 2.000.000/night</span>
                            </div>
                            <button
                                onClick={(e) => { e.stopPropagation(); setIsExpanded(true); }}
                                className="bg-forest-dark text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors"
                            >
                                {lang === 'id' ? 'Book' : 'Book'}
                            </button>
                        </div>
                    )}

                    {/* Expanded View */}
                    {isExpanded && (
                        <div className="px-5 py-5 animate-slide-up">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-serif text-lg text-gray-900">Plan Your Stay</h3>
                                <button
                                    onClick={() => setIsExpanded(false)}
                                    className="p-2 -mr-2 text-gray-400 hover:text-gray-900"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 6L6 18M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1.5">Check In</label>
                                        <input
                                            type="date"
                                            value={checkIn}
                                            onChange={(e) => setCheckIn(e.target.value)}
                                            min={getMinDate()}
                                            className="w-full px-0 py-2 bg-transparent border-b border-gray-200 text-sm focus:border-forest-dark focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1.5">Check Out</label>
                                        <input
                                            type="date"
                                            value={checkOut}
                                            onChange={(e) => setCheckOut(e.target.value)}
                                            min={checkIn || getMinDate()}
                                            className="w-full px-0 py-2 bg-transparent border-b border-gray-200 text-sm focus:border-forest-dark focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1.5">Guests</label>
                                    <select
                                        value={guests}
                                        onChange={(e) => setGuests(Number(e.target.value))}
                                        className="w-full px-0 py-2 bg-transparent border-b border-gray-200 text-sm focus:border-forest-dark focus:outline-none appearance-none"
                                    >
                                        {[2, 4, 6, 8, 10, 12].map(num => (
                                            <option key={num} value={num}>{num} {lang === 'id' ? 'Tamu' : 'Guests'}</option>
                                        ))}
                                    </select>
                                </div>

                                <button
                                    onClick={handleCheckAvailability}
                                    className="w-full bg-forest-dark text-white py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-black transition-colors flex items-center justify-center gap-2 mt-2"
                                >
                                    {lang === 'id' ? 'Check Availability' : 'Check Availability'}
                                    <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
