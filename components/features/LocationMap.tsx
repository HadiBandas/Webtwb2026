import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface LocationMapProps {
    address?: string;
    coordinates?: { lat: number; lng: number };
}

const DEFAULT_LOCATION = {
    address: 'Jl. Gn. Puntang, Campakamulya, Kec. Cimaung, Kabupaten Bandung, Jawa Barat 40374',
    coordinates: { lat: -7.1111615, lng: 107.601865 }, // Taman Wisata Bougenville
};

export function LocationMap({ address = DEFAULT_LOCATION.address, coordinates = DEFAULT_LOCATION.coordinates }: LocationMapProps) {
    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${coordinates.lat},${coordinates.lng}&zoom=14`;

    const handleGetDirections = () => {
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`;
        window.open(googleMapsUrl, '_blank');
    };

    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
            {/* Map Header */}
            <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">Where you'll be</h3>
                <div className="flex items-start gap-2 text-gray-600">
                    <MapPin size={20} className="flex-shrink-0 mt-1" />
                    <p>{address}</p>
                </div>
            </div>

            {/* Map Embed */}
            <div className="relative w-full h-[400px] bg-gray-100">
                <iframe
                    src={mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                />
            </div>

            {/* Get Directions Button */}
            <div className="p-6 bg-white border-t border-gray-200">
                <button
                    onClick={handleGetDirections}
                    className="flex items-center gap-2 text-forest font-semibold hover:underline"
                >
                    <Navigation size={18} />
                    <span>Get directions</span>
                </button>

                {/* Location Details */}
                <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-600">
                    <p className="mb-2">
                        <strong>Exact location provided after booking.</strong>
                    </p>
                    <p>
                        The villa is located in the Gunung Puntang area, approximately 2 hours from Jakarta.
                        Detailed directions and check-in instructions will be shared upon confirmation.
                    </p>
                </div>
            </div>
        </div>
    );
}
