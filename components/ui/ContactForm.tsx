import React, { useState } from 'react';
import { Send, Loader } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export interface ContactFormProps {
    onSubmit?: (data: ContactFormData) => void;
    prefilledData?: Partial<ContactFormData>;
}

export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    checkIn?: string;
    checkOut?: string;
    message: string;
    honeypot?: string; // Anti-spam
}

export function ContactForm({ onSubmit, prefilledData }: ContactFormProps) {
    const { t } = useTranslation();
    const [formData, setFormData] = useState<ContactFormData>({
        name: prefilledData?.name || '',
        email: prefilledData?.email || '',
        phone: prefilledData?.phone || '',
        checkIn: prefilledData?.checkIn || '',
        checkOut: prefilledData?.checkOut || '',
        message: prefilledData?.message || '',
        honeypot: ''
    });

    const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePhone = (phone: string) => {
        return /^[\d\s\-\+\(\)]+$/.test(phone) && phone.replace(/\D/g, '').length >= 10;
    };

    const validate = (): boolean => {
        const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

        if (!formData.name.trim()) newErrors.name = t('contact.form.validation.nameRequired', 'Name is required');
        if (!formData.email.trim()) newErrors.email = t('contact.form.validation.emailRequired', 'Email is required');
        else if (!validateEmail(formData.email)) newErrors.email = t('contact.form.validation.emailInvalid', 'Invalid email format');
        if (!formData.phone.trim()) newErrors.phone = t('contact.form.validation.phoneRequired', 'Phone number is required');
        else if (!validatePhone(formData.phone)) newErrors.phone = t('contact.form.validation.phoneInvalid', 'Invalid phone number');
        if (!formData.message.trim()) newErrors.message = t('contact.form.validation.messageRequired', 'Message is required');

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Honeypot check
        if (formData.honeypot) {
            return; // Bot detected
        }

        if (!validate()) return;

        setIsSubmitting(true);

        try {
            if (onSubmit) {
                await onSubmit(formData);
            } else {
                // Default: WhatsApp submission
                const whatsappMessage = [
                    '*New Inquiry from Website*',
                    '',
                    `Name: ${formData.name}`,
                    `Email: ${formData.email}`,
                    `Phone: ${formData.phone}`,
                    formData.checkIn ? `Check-in: ${formData.checkIn}` : '',
                    formData.checkOut ? `Check-out: ${formData.checkOut}` : '',
                    '',
                    'Message:',
                    formData.message
                ].filter(Boolean).join('\n');

                const whatsappLink = `https://wa.me/628119102003?text=${encodeURIComponent(whatsappMessage)}`;
                window.open(whatsappLink, '_blank');
            }

            setSubmitSuccess(true);
            setFormData({ name: '', email: '', phone: '', checkIn: '', checkOut: '', message: '', honeypot: '' });

            setTimeout(() => setSubmitSuccess(false), 5000);
        } catch (error) {
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (field: keyof ContactFormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error on change
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot - hidden from users */}
            <input
                type="text"
                name="website"
                value={formData.honeypot}
                onChange={(e) => handleChange('honeypot', e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                        {t('contact.form.fullName')} *
                    </label>
                    <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder={t('contact.form.placeholders.name')}
                        className={`w-full h-12 px-4 border rounded-sm focus:outline-none focus:ring-2 focus:ring-forest transition-all ${errors.name ? 'border-error' : 'border-gray-300'
                            }`}
                    />
                    {errors.name && <p className="text-error text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                        {t('contact.form.emailAddress')} *
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder={t('contact.form.placeholders.email')}
                        className={`w-full h-12 px-4 border rounded-sm focus:outline-none focus:ring-2 focus:ring-forest transition-all ${errors.email ? 'border-error' : 'border-gray-300'
                            }`}
                    />
                    {errors.email && <p className="text-error text-sm mt-1">{errors.email}</p>}
                </div>
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
                    {t('contact.form.phone')} *
                </label>
                <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder={t('contact.form.placeholders.phone')}
                    className={`w-full h-12 px-4 border rounded-sm focus:outline-none focus:ring-2 focus:ring-forest transition-all ${errors.phone ? 'border-error' : 'border-gray-300'
                        }`}
                />
                {errors.phone && <p className="text-error text-sm mt-1">{errors.phone}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="checkIn" className="block text-sm font-bold text-gray-900 mb-2">
                        {t('contact.form.checkIn')}
                    </label>
                    <input
                        id="checkIn"
                        type="date"
                        value={formData.checkIn}
                        onChange={(e) => handleChange('checkIn', e.target.value)}
                        className="w-full h-12 px-4 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-forest transition-all"
                    />
                </div>

                <div>
                    <label htmlFor="checkOut" className="block text-sm font-bold text-gray-900 mb-2">
                        {t('contact.form.checkOut')}
                    </label>
                    <input
                        id="checkOut"
                        type="date"
                        value={formData.checkOut}
                        onChange={(e) => handleChange('checkOut', e.target.value)}
                        className="w-full h-12 px-4 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-forest transition-all"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                    {t('contact.form.messageLabel')} *
                </label>
                <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder={t('contact.form.placeholders.message')}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-forest transition-all ${errors.message ? 'border-error' : 'border-gray-300'
                        }`}
                />
                {errors.message && <p className="text-error text-sm mt-1">{errors.message}</p>}
            </div>

            {submitSuccess && (
                <div className="bg-success/10 border border-success text-success px-4 py-3 rounded-sm">
                    {t('contact.form.success', 'Thank you! Your message has been sent successfully.')}
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-forest-dark text-white py-4 font-bold uppercase tracking-wider text-sm hover:bg-forest transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <>
                        <Loader size={18} className="animate-spin" />
                        <span>{t('contact.form.sending', 'Sending...')}</span>
                    </>
                ) : (
                    <>
                        <Send size={18} />
                        <span>{t('contact.form.submit', 'Send Message')}</span>
                    </>
                )}
            </button>
        </form>
    );
}
