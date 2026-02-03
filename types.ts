
import React from 'react';

export type Language = 'id' | 'en' | 'zh' | 'de';

export interface LocalizedString {
  id: string;
  en: string;
  zh: string;
  de: string;
}

export interface Translation {
  [key: string]: LocalizedString;
}

export interface Villa {
  id: string;
  name: string;
  capacity: string;
  bedrooms: number;
  area: number; // Area in square meters (m2)

  // Pricing structure (3-tier)
  price: number; // Base price for sorting (set to priceWeekday)
  priceWeekday: number; // Senin-Kamis, excluding red dates
  priceWeekend: number; // Jumat-Sabtu & tanggal merah
  priceHighSeason: number; // Lebaran, Natal & Tahun Baru

  // Villa classification
  category: 'luxury' | 'couple' | 'log_home';
  cluster?: string; // e.g., "Forest House Puntang", "Dandenong Villas"
  unit?: string; // e.g., "Emerald 02 (Unit Atas)"
  color?: string; // e.g., "Hijau", "Abu-abu", "Coklat"

  // Detailed room configuration
  bedConfiguration?: {
    room: number;
    beds: string; // e.g., "1 king bed (180x200 cm)"
  }[];
  toilets?: number;

  // Categorized facilities
  facilities?: {
    room?: LocalizedString[]; // Ruang tamu, Dapur, etc.
    amenities?: LocalizedString[]; // Water heater, Smart TV, WiFi, etc.
    meals?: LocalizedString[]; // Sarapan, makan siang, makan malam
    natural?: LocalizedString[]; // Kolam renang, Sungai, Skywalk, etc.
  };

  // Policies
  policies?: {
    checkIn: string; // "15.00 WIB"
    checkOut: string; // "12.00 WIB"
    smokeFree: boolean;
    specialNotes?: LocalizedString[]; // Villa-specific notes
  };

  // Keep existing fields
  features: string[];
  image: string;
  images?: string[]; // Gallery images for the villa
  badge?: string;
  description: LocalizedString;
  longDescription?: LocalizedString;
}

export interface Facility {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  iconName: string;
}

export interface Package {
  id: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  duration: string;
  includes: string[]; // Could be localized too, but keeping simple for now
  originalPrice?: number;
  price: number;
  unit: string;
  image: string;
  isFeatured?: boolean;
  savings?: string;
  type: 'romantic' | 'family' | 'corporate' | 'wellness';
}

export interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string; // Reviews are usually kept in original language
  date: string;
  avatar: string;
  verified: boolean;
  platform?: string;
}

export interface Experience {
  id: string;
  title: LocalizedString;
  image: string;
  category: string;
}

export interface BookingState {
  step: number;
  type: string;
  itemId: string;
  guests: number;
  checkIn: string;
  checkOut: string;
  name: string;
  email: string;
  phone: string;
  specialRequest: string;
  termsAccepted: boolean;
}

export interface MenuItem {
  id: string;
  name: string; // Names often kept original or bilingual in UI
  description: LocalizedString;
  price: number;
  image: string;
  category: 'mains' | 'beverages' | 'bites';
  isSignature?: boolean;
}

export interface ActivityItem {
  title: LocalizedString;
  description: LocalizedString;
  image: string;
}

export interface ActivityCategory {
  id: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  heroImage: string;
  description: LocalizedString;
  items: ActivityItem[];
}

export interface Offer {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  image: string;
  validFrom: string;
  validTo: string;
  discount: string;
  price: string;
  inclusions: string[]; // Keeping as string array for now, maybe localize later
}
