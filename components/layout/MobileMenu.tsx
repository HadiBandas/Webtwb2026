import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '../ui/Button';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (section: string) => void;
}

const MENU_ITEMS = [
    { label: 'Villas', id: 'villas' },
    { label: 'Dining', id: 'resto' },
    { label: 'Experiences', id: 'facility' },
    { label: 'Gallery', id: 'gallery' },
];

export function MobileMenu({ isOpen, onClose, onNavigate }: MobileMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 bg-white flex flex-col"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                >
                    {/* Header */}
                    <div className="flex justify-between items-center p-6 border-b border-gray-100">
                        <span className="font-serif text-lg font-bold text-forest-dark">Taman Wisata Bougenville</span>
                        <button
                            onClick={onClose}
                            aria-label="Close menu"
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X size={24} className="text-gray-900" />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <nav className="flex-1 flex flex-col justify-center px-8 gap-8">
                        {MENU_ITEMS.map((item, index) => (
                            <motion.button
                                key={item.id}
                                onClick={() => onNavigate(item.id)}
                                className="text-left font-serif text-4xl font-light text-gray-900 hover:text-forest transition-colors"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                            >
                                {item.label}
                            </motion.button>
                        ))}
                    </nav>

                    {/* Footer CTA */}
                    <motion.div
                        className="p-8 border-t border-gray-100"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Button
                            variant="primary"
                            size="lg"
                            className="w-full"
                            onClick={() => onNavigate('booking')}
                        >
                            Book Your Stay
                        </Button>

                        <div className="mt-6 text-center text-sm text-gray-500">
                            <p>Jl. Gunung Puntang, Bandung</p>
                            <p>+62 812 3456 7890</p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
