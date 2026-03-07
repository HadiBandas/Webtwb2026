import React from 'react';
import { Logo } from './Logo';

export const Loading: React.FC = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-cream">
            <div className="relative flex flex-col items-center">
                {/* Clean Logo Animation - Larger & Pop Up */}
                <div className="animate-fade-up">
                    <Logo className="w-[480px] md:w-[600px] h-auto" />
                </div>

                {/* Subtle loading indicator below */}
                <div className="mt-12 flex gap-3">
                    <div className="w-3 h-3 rounded-full bg-gold/60 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-3 h-3 rounded-full bg-gold/60 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-3 h-3 rounded-full bg-gold/60 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
            </div>
        </div>
    );
};
