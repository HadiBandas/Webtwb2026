import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryModalProps {
    images: string[];
    isOpen: boolean;
    onClose: () => void;
    initialIndex?: number;
}

export function ImageGalleryModal({ images, isOpen, onClose, initialIndex = 0 }: ImageGalleryModalProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'Escape') onClose();
    };

    React.useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown as any);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown as any);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, currentIndex]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 bg-black"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-10 p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                    >
                        <X size={24} className="text-white" />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute top-6 left-6 z-10 text-white text-sm font-medium">
                        {currentIndex + 1} / {images.length}
                    </div>

                    {/* Main Image */}
                    <div className="relative w-full h-full flex items-center justify-center px-4 py-24 md:px-20 md:py-28">
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex]}
                            alt={`Gallery image ${currentIndex + 1}`}
                            className="w-full h-full object-contain"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>

                    {/* Navigation Arrows */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={handlePrev}
                                className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                            >
                                <ChevronLeft size={32} className="text-white" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                            >
                                <ChevronRight size={32} className="text-white" />
                            </button>
                        </>
                    )}

                    {/* Thumbnail Strip */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 max-w-screen-lg overflow-x-auto px-6">
                        {images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`flex-shrink-0 w-16 h-16 rounded-sm overflow-hidden border-2 transition-all ${idx === currentIndex ? 'border-white scale-110' : 'border-transparent opacity-60 hover:opacity-100'
                                    }`}
                            >
                                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
