import React, { useState } from 'react';
import { Heart, Star } from 'lucide-react';
import { useCurrency } from '../../hooks/useCurrency';

interface VillaCardProps {
    villa: {
        id: string;
        name: string;
        tagline: string;
        image: string;
        price: number;
        rating: number;
        reviews: number;
        capacity: number;
        area?: number;
    };
    onBook?: (id: string) => void;
}

export function VillaCard({ villa, onBook }: VillaCardProps) {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const { format } = useCurrency();

    const handleCardClick = () => {
        // Navigate to villa detail page
        window.dispatchEvent(new CustomEvent('navigate-villa', { detail: villa.id }));

        // Also call onBook if provided (for backwards compatibility)
        if (onBook) {
            onBook(villa.id);
        }
    };

    const handleWishlistClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsWishlisted(!isWishlisted);
        // TODO: Save to localStorage
    };

    return (
        <div
            className="group cursor-pointer"
            onClick={handleCardClick}
        >
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-md mb-4">
                <img
                    src={villa.image}
                    alt={villa.name}
                    loading="lazy"
                    className="
            w-full h-full object-cover
            transition-transform duration-500 ease-out
            group-hover:scale-105
          "
                />

                {/* Wishlist Heart */}
                <button
                    onClick={handleWishlistClick}
                    className="
            absolute top-3 right-3
            w-8 h-8 bg-white/90 backdrop-blur
            rounded-full
            flex items-center justify-center
            hover:scale-110 transition-transform
            z-10
          "
                    aria-label="Add to wishlist"
                >
                    <Heart
                        size={16}
                        className={`transition-colors ${isWishlisted
                            ? 'fill-error text-error'
                            : 'text-gray-900'
                            }`}
                    />
                </button>
            </div>

            {/* Content */}
            <div className="space-y-2">
                <h3 className="
          text-base font-medium text-gray-900
          transition-colors duration-200
          group-hover:text-forest
        ">
                    {villa.name} · Sleeps {villa.capacity}
                </h3>

                <p className="text-sm text-gray-600 line-clamp-1">
                    {villa.tagline}
                </p>

                {villa.area && (
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                        <span className="font-serif">m²</span>
                        <span>{villa.area} m²</span>
                    </div>
                )}

                <div className="flex items-baseline gap-1">
                    <span className="text-sm text-gray-600">From</span>
                    <span className="text-base font-semibold text-gray-900">
                        {format(villa.price)}
                    </span>
                    <span className="text-sm text-gray-600">/ night</span>
                </div>

                <div className="flex items-center gap-1 text-sm">
                    <Star size={14} className="fill-current text-gray-900" />
                    <span className="font-medium">{villa.rating}</span>
                    <span className="text-gray-600">
                        ({villa.reviews} {villa.reviews === 1 ? 'review' : 'reviews'})
                    </span>
                </div>
            </div>
        </div>
    );
}
