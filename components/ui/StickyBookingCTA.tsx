import React, { useState, useEffect } from 'react';
import { Calendar, MessageCircle } from 'lucide-react';
import { trackWhatsAppBooking, trackBookingStart } from '../../utils/analytics';

export interface StickyBookingCTAProps {
    onBookClick: () => void;
    whatsappNumber?: string;
}

export function StickyBookingCTA({
    onBookClick,
    whatsappNumber = '6281224178271'
}: StickyBookingCTAProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show CTA after scrolling 400px
            setIsVisible(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello! I would like to make a reservation at Taman Wisata Bougenville.')}`;

    return (
        <>
            {/* Desktop: Bottom Right Floating Button */}
            <div
                className={`hidden lg:block fixed bottom-8 right-8 z-50 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col gap-3">
                    {/* WhatsApp Button */}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Chat on WhatsApp"
                        id="btn-sticky-whatsapp-desktop"
                        onClick={() => trackWhatsAppBooking('Sticky CTA Desktop')}
                        className="bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center justify-center group"
                        title="Chat on WhatsApp"
                    >
                        <MessageCircle size={24} />
                    </a>

                    {/* Check Availability Button */}
                    <button
                        onClick={() => {
                            trackBookingStart('Sticky CTA Desktop');
                            onBookClick();
                        }}
                        aria-label="Check Availability"
                        id="btn-sticky-book-desktop"
                        className="bg-forest-dark text-white px-6 py-4 rounded-full shadow-xl hover:bg-forest hover:scale-105 transition-all flex items-center gap-2 font-bold text-sm uppercase tracking-wider"
                    >
                        <Calendar size={20} />
                        <span>Check Availability</span>
                    </button>
                </div>
            </div>

            {/* Mobile: Bottom Bar */}
            <div
                className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${isVisible ? 'translate-y-0' : 'translate-y-full'
                    }`}
            >
                <div className="bg-white border-t border-gray-100 shadow-xl px-4 py-3 flex gap-3">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Chat on WhatsApp"
                        id="btn-sticky-whatsapp-mobile"
                        onClick={() => trackWhatsAppBooking('Sticky CTA Mobile')}
                        className="flex-1 bg-[#25D366] text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform"
                    >
                        <MessageCircle size={18} />
                        <span>WhatsApp</span>
                    </a>

                    <button
                        onClick={() => {
                            trackBookingStart('Sticky CTA Mobile');
                            onBookClick();
                        }}
                        aria-label="Book Now"
                        id="btn-sticky-book-mobile"
                        className="flex-1 bg-forest-dark text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform"
                    >
                        <Calendar size={18} />
                        <span>Book Now</span>
                    </button>
                </div>
            </div>
        </>
    );
}
