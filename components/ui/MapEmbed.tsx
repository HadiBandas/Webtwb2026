import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export interface MapEmbedProps {
    latitude?: number;
    longitude?: number;
    address?: string;
    googleMapsUrl?: string;
    embedUrl?: string;
}

export function MapEmbed({
    latitude = -7.1111615,
    longitude = 107.601865,
    address = 'Jl. Gn. Puntang, Campakamulya, Kec. Cimaung, Kabupaten Bandung, Jawa Barat 40374',
    googleMapsUrl = 'https://www.google.com/maps/place/Taman+Wisata+Bougenville/@-7.1111615,107.601865,17z',
    embedUrl
}: MapEmbedProps) {
    // Generate embed URL from coordinates if not provided
    const finalEmbedUrl = embedUrl || `https://maps.google.com/maps?q=${latitude},${longitude}&hl=en&z=14&output=embed`;

    return (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            {/* Map Embed */}
            <div className="relative h-96 bg-gray-100">
                <iframe
                    src={finalEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Taman Wisata Bougenville Location"
                    className="w-full h-full"
                />
            </div>

            {/* Address Info */}
            <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-forest mt-1 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                        <p className="text-gray-600 leading-relaxed">{address}</p>
                    </div>
                </div>

                <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-forest-dark text-white px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-forest transition-colors group"
                >
                    <Navigation size={18} />
                    <span>Get Directions</span>
                </a>
            </div>
        </div>
    );
}
