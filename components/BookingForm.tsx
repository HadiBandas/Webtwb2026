
import React, { useState, useEffect } from 'react';
import {
  Calendar, Users, CheckCircle, ArrowRight, ArrowLeft,
  Send, Info, MessageCircle, BedDouble, Sparkles, ChevronDown
} from 'lucide-react';
import { BookingState, Villa, Package } from '../types';
import { VILLAS, PACKAGES } from '../constants';
import { trackEvent, trackBookingStart } from '../utils/analytics';

interface BookingFormProps {
  initialVilla?: string;
  initialPackage?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ initialVilla, initialPackage }) => {
  const [state, setState] = useState<BookingState>({
    step: 1,
    type: initialPackage ? 'package' : 'villa',
    itemId: initialVilla || initialPackage || '',
    guests: 2,
    checkIn: '',
    checkOut: '',
    name: '',
    email: '',
    phone: '',
    specialRequest: '',
    termsAccepted: false
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRefId, setBookingRefId] = useState('');

  useEffect(() => {
    if (initialVilla) {
      setState(s => ({ ...s, type: 'villa', itemId: initialVilla, step: 1 }));
    } else if (initialPackage) {
      setState(s => ({ ...s, type: 'package', itemId: initialPackage, step: 1 }));
    }
  }, [initialVilla, initialPackage]);

  const handleNext = () => {
    if (state.step === 1 && !state.itemId) return;
    if (state.step === 2 && (!state.checkIn || !state.checkOut)) return;

    // Track step completion
    trackEvent({
      action: 'booking_step_' + state.step,
      category: 'engagement',
      label: state.itemId
    });

    setState(s => ({ ...s, step: s.step + 1 }));
  };

  const handlePrev = () => setState(s => ({ ...s, step: s.step - 1 }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!state.termsAccepted) return;

    // Track submission
    trackEvent({
      action: 'booking_submit',
      category: 'conversion',
      label: state.type,
      value: calculateEstimate()
    });

    setTimeout(() => {
      setBookingRefId(`TWB-${Math.floor(1000 + Math.random() * 9000)}`);
      setIsSuccess(true);
    }, 1000);
  };

  const getSelectedItem = () => {
    if (state.type === 'villa') {
      return VILLAS.find(v => v.id === state.itemId);
    }
    return PACKAGES.find(p => p.id === state.itemId);
  };

  const selectedItem = getSelectedItem();

  const calculateEstimate = () => {
    if (!selectedItem) return 0;
    let price = selectedItem.price;
    if (state.checkIn && state.checkOut) {
      const start = new Date(state.checkIn);
      const end = new Date(state.checkOut);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;

      if (state.type === 'villa') return price * nights;
    }
    return price;
  };

  const getWhatsappLink = () => {
    const itemName = selectedItem ? ('name' in selectedItem ? selectedItem.name : selectedItem.title) : 'Stay';
    const text = `Greetings Bougenville Concierge,\n\nI would like to confirm my reservation request (Ref: ${bookingRefId}).\n\nSelection: ${itemName}\nDates: ${state.checkIn} to ${state.checkOut}\nGuests: ${state.guests}\nName: ${state.name}\n\nSpecial Request: ${state.specialRequest}`;
    return `https://wa.me/6281224178271?text=${encodeURIComponent(text)}`;
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-none border border-gold/30 shadow-card overflow-hidden animate-fade-in p-10 text-center max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-8 shadow-glow">
          <CheckCircle className="w-10 h-10 text-gold" />
        </div>
        <h3 className="font-serif text-3xl font-bold text-forest-dark mb-4">Request Received</h3>
        <p className="text-gray-600 mb-8 leading-relaxed">Our concierge team will review your request and contact you via WhatsApp shortly to finalize availability and payment.</p>

        <div className="bg-sand-light p-8 border-l-4 border-gold text-left mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Booking Reference</span>
            <span className="font-mono text-lg font-bold text-forest-dark">{bookingRefId}</span>
          </div>
          <h4 className="font-serif text-xl font-bold text-forest-dark mb-1">{selectedItem ? ('name' in selectedItem ? selectedItem.name : selectedItem.title) : ''}</h4>
          <p className="text-sm text-gray-600">{state.checkIn} — {state.checkOut}</p>
        </div>

        <a
          href={getWhatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-whatsapp text-white font-bold py-4 px-10 text-sm uppercase tracking-widest hover:bg-green-600 transition-all shadow-lg"
        >
          <MessageCircle className="w-5 h-5" />
          Chat to Confirm
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-card flex flex-col lg:flex-row min-h-[600px] border-t-4 border-gold">
      {/* Sidebar Summary */}
      <div className="lg:order-2 lg:w-1/3 bg-forest-dark text-white p-8 lg:p-12 flex flex-col">
        <h3 className="font-serif text-2xl font-bold text-gold mb-8">Your Stay</h3>

        <div className="space-y-6 flex-1">
          <div className="border-b border-white/10 pb-6">
            <p className="text-xs text-white/50 uppercase tracking-widest mb-2">Selection</p>
            <p className="font-serif text-xl font-bold">{selectedItem ? ('name' in selectedItem ? selectedItem.name : selectedItem.title) : 'Select an option'}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 border-b border-white/10 pb-6">
            <div>
              <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Check-in</p>
              <p className="font-medium">{state.checkIn || '-'}</p>
            </div>
            <div>
              <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Check-out</p>
              <p className="font-medium">{state.checkOut || '-'}</p>
            </div>
          </div>

          <div>
            <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Guests</p>
            <p className="font-medium">{state.guests} People</p>
          </div>

          <div className="mt-auto pt-8">
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs text-white/50 uppercase tracking-widest">Est. Total</span>
              <span className="text-2xl font-serif font-bold text-gold">
                Rp {calculateEstimate().toLocaleString('id-ID')}
              </span>
            </div>
            <p className="text-[10px] text-white/40 italic text-right">*Excludes taxes & service</p>
          </div>
        </div>
      </div>

      {/* Main Form */}
      <div className="lg:order-1 lg:w-2/3 p-8 lg:p-12">
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-6">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border transition-colors ${state.step >= s ? 'bg-forest-dark text-white border-forest-dark' : 'text-gray-400 border-gray-200'}`}>
                  {s}
                </div>
                {s < 3 && <div className={`w-12 h-[1px] ${state.step > s ? 'bg-forest-dark' : 'bg-gray-200'}`}></div>}
              </div>
            ))}
          </div>
          <h2 className="font-serif text-3xl font-bold text-forest-dark">
            {state.step === 1 ? 'Choose Accommodation' : state.step === 2 ? 'Select Dates' : 'Guest Details'}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* STEP 1 */}
          {state.step === 1 && (
            <div className="animate-fade-in space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <button
                  type="button"
                  onClick={() => setState(s => ({ ...s, type: 'villa', itemId: '' }))}
                  className={`p-6 border text-left transition-all hover:border-gold group ${state.type === 'villa' ? 'border-gold bg-gold/5' : 'border-gray-200'}`}
                >
                  <BedDouble className={`w-6 h-6 mb-3 ${state.type === 'villa' ? 'text-gold' : 'text-gray-400 group-hover:text-gold'}`} />
                  <span className="font-serif font-bold block text-lg text-forest-dark">Villa Only</span>
                  <span className="text-xs text-gray-500">Accommodation specific</span>
                </button>
                <button
                  type="button"
                  onClick={() => setState(s => ({ ...s, type: 'package', itemId: '' }))}
                  className={`p-6 border text-left transition-all hover:border-gold group ${state.type === 'package' ? 'border-gold bg-gold/5' : 'border-gray-200'}`}
                >
                  <Sparkles className={`w-6 h-6 mb-3 ${state.type === 'package' ? 'text-gold' : 'text-gray-400 group-hover:text-gold'}`} />
                  <span className="font-serif font-bold block text-lg text-forest-dark">Curated Package</span>
                  <span className="text-xs text-gray-500">Stay + Dining + Activity</span>
                </button>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Select Unit</label>
                <div className="relative">
                  <select
                    value={state.itemId}
                    onChange={(e) => setState(s => ({ ...s, itemId: e.target.value }))}
                    className="w-full p-4 bg-white border border-gray-200 focus:border-gold focus:ring-0 text-forest-dark appearance-none cursor-pointer text-lg font-serif"
                  >
                    <option value="">-- View Options --</option>
                    {state.type === 'villa'
                      ? VILLAS.map(v => <option key={v.id} value={v.id}>{v.name} (Max {v.capacity})</option>)
                      : PACKAGES.map(p => <option key={p.id} value={p.id}>{p.title} ({p.duration})</option>)
                    }
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" size={20} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Number of Guests</label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setState(s => ({ ...s, guests: Math.max(1, s.guests - 1) }))}
                    className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-lg text-forest-dark hover:bg-gray-50 active:bg-gray-100 transition-colors"
                    aria-label="Decrease guests"
                  >
                    <span className="text-xl font-bold">-</span>
                  </button>
                  <div className="flex-1 relative">
                    <input
                      type="number"
                      min="1"
                      max="30"
                      value={state.guests}
                      onChange={(e) => setState(s => ({ ...s, guests: parseInt(e.target.value) || 1 }))}
                      className="w-full h-12 text-center bg-white border border-gray-200 focus:border-gold focus:ring-0 text-forest-dark text-lg font-bold"
                    />
                    <Users className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                  </div>
                  <button
                    type="button"
                    onClick={() => setState(s => ({ ...s, guests: Math.min(30, s.guests + 1) }))}
                    className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-lg text-forest-dark hover:bg-gray-50 active:bg-gray-100 transition-colors"
                    aria-label="Increase guests"
                  >
                    <span className="text-xl font-bold">+</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {state.step === 2 && (
            <div className="animate-fade-in space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Check-in Date</label>
                  <input
                    type="date"
                    value={state.checkIn}
                    onChange={(e) => setState(s => ({ ...s, checkIn: e.target.value }))}
                    className="w-full p-4 bg-white border border-gray-200 focus:border-gold focus:ring-0 text-forest-dark uppercase tracking-wider"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Check-out Date</label>
                  <input
                    type="date"
                    value={state.checkOut}
                    onChange={(e) => setState(s => ({ ...s, checkOut: e.target.value }))}
                    className="w-full p-4 bg-white border border-gray-200 focus:border-gold focus:ring-0 text-forest-dark uppercase tracking-wider"
                  />
                </div>
              </div>

              <div className="bg-cream p-6 flex items-start gap-4 text-sm text-forest-dark/80 italic">
                <Info className="w-5 h-5 shrink-0 mt-0.5 text-gold" />
                <p>Standard Check-in: 14:00 | Check-out: 12:00. <br />Early check-in is subject to villa availability upon arrival.</p>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {state.step === 3 && (
            <div className="animate-fade-in space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={state.name}
                    onChange={(e) => setState(s => ({ ...s, name: e.target.value }))}
                    className="w-full p-4 bg-white border-b border-gray-200 focus:border-gold focus:ring-0 text-forest-dark"
                    placeholder="e.g. John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">WhatsApp / Phone</label>
                  <input
                    type="tel"
                    required
                    value={state.phone}
                    onChange={(e) => setState(s => ({ ...s, phone: e.target.value }))}
                    className="w-full p-4 bg-white border-b border-gray-200 focus:border-gold focus:ring-0 text-forest-dark"
                    placeholder="+62..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={state.email}
                  onChange={(e) => setState(s => ({ ...s, email: e.target.value }))}
                  className="w-full p-4 bg-white border-b border-gray-200 focus:border-gold focus:ring-0 text-forest-dark"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Special Requests</label>
                <textarea
                  rows={3}
                  value={state.specialRequest}
                  onChange={(e) => setState(s => ({ ...s, specialRequest: e.target.value }))}
                  className="w-full p-4 bg-white border border-gray-200 focus:border-gold focus:ring-0 text-forest-dark resize-none"
                  placeholder="Dietary restrictions, honeymoon setup, etc."
                />
              </div>

              <div className="flex items-center gap-3 pt-4">
                <input
                  type="checkbox"
                  id="terms"
                  checked={state.termsAccepted}
                  onChange={(e) => setState(s => ({ ...s, termsAccepted: e.target.checked }))}
                  className="w-5 h-5 text-forest-green rounded focus:ring-gold border-gray-300"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the <a href="#" className="text-forest-dark underline">Reservation Policy</a>
                </label>
              </div>
            </div>
          )}

          <div className="flex gap-4 pt-6 border-t border-gray-100">
            {state.step > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className="px-8 py-4 border border-gray-300 font-bold uppercase tracking-widest text-xs text-gray-500 hover:text-forest-dark hover:border-forest-dark transition-colors"
              >
                Back
              </button>
            )}

            {state.step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={state.step === 1 && !state.itemId}
                className="flex-1 bg-forest-dark text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-forest-green transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-4"
              >
                Next Step <ArrowRight size={16} />
              </button>
            ) : (
              <button
                type="submit"
                disabled={!state.termsAccepted}
                className="flex-1 bg-gold text-forest-dark py-4 font-bold uppercase tracking-widest text-xs hover:bg-yellow-500 transition-all disabled:opacity-50 flex items-center justify-center gap-4"
              >
                <Send size={16} /> Submit Request
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
