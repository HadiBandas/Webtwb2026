import { Villa, Package, BlogPost, GalleryImage, Review, MenuItem, FAQ, Booking, CMSSettings, DashboardStats } from '../types';

const API_URL = 'http://localhost:3000/api';

const fetchWithAuth = async (endpoint: string, options: RequestInit = {}) => {
    const token = localStorage.getItem('cms_token');
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };

    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers,
    });

    if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
};

export const dataService = {
    // Upload
    uploadImage: async (file: File): Promise<string> => {
        const formData = new FormData();
        formData.append('image', file);

        const token = localStorage.getItem('cms_token');
        const response = await fetch(`${API_URL}/upload`, {
            method: 'POST',
            headers: {
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Upload failed');
        }

        const data = await response.json();
        return data.url;
    },

    // Villas
    getVillas: async (): Promise<Villa[]> => {
        return fetchWithAuth('/villas');
    },

    createVilla: async (villa: Omit<Villa, 'id' | 'createdAt' | 'updatedAt'>): Promise<Villa> => {
        return fetchWithAuth('/villas', {
            method: 'POST',
            body: JSON.stringify(villa),
        });
    },

    updateVilla: async (id: string, villa: Partial<Villa>): Promise<void> => {
        return fetchWithAuth(`/villas/${id}`, {
            method: 'PUT',
            body: JSON.stringify(villa),
        });
    },

    deleteVilla: async (id: string): Promise<void> => {
        return fetchWithAuth(`/villas/${id}`, {
            method: 'DELETE',
        });
    },

    // Packages
    getPackages: async (): Promise<Package[]> => {
        return fetchWithAuth('/packages');
    },

    createPackage: async (pkg: Omit<Package, 'id' | 'createdAt' | 'updatedAt'>): Promise<Package> => {
        return fetchWithAuth('/packages', {
            method: 'POST',
            body: JSON.stringify(pkg),
        });
    },

    updatePackage: async (id: string, pkg: Partial<Package>): Promise<void> => {
        return fetchWithAuth(`/packages/${id}`, {
            method: 'PUT',
            body: JSON.stringify(pkg),
        });
    },

    deletePackage: async (id: string): Promise<void> => {
        return fetchWithAuth(`/packages/${id}`, {
            method: 'DELETE',
        });
    },

    // Blog Posts
    getBlogPosts: async (): Promise<BlogPost[]> => {
        return fetchWithAuth('/blog');
    },

    createBlogPost: async (post: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>): Promise<BlogPost> => {
        return fetchWithAuth('/blog', {
            method: 'POST',
            body: JSON.stringify(post),
        });
    },

    updateBlogPost: async (id: string, post: Partial<BlogPost>): Promise<void> => {
        return fetchWithAuth(`/blog/${id}`, {
            method: 'PUT',
            body: JSON.stringify(post),
        });
    },

    deleteBlogPost: async (id: string): Promise<void> => {
        return fetchWithAuth(`/blog/${id}`, {
            method: 'DELETE',
        });
    },

    // Gallery (Mock for now, will implement API later if needed)
    getGalleryImages: async (): Promise<GalleryImage[]> => {
        const stored = localStorage.getItem('cms_gallery');
        return stored ? JSON.parse(stored) : [];
    },

    addGalleryImage: async (image: Omit<GalleryImage, 'id' | 'uploadedAt'>): Promise<GalleryImage> => {
        const images = await dataService.getGalleryImages();
        const newImage: GalleryImage = {
            ...image,
            id: Date.now().toString(),
            uploadedAt: new Date().toISOString(),
        };
        images.unshift(newImage);
        localStorage.setItem('cms_gallery', JSON.stringify(images));
        return newImage;
    },

    deleteGalleryImage: async (id: string): Promise<void> => {
        const images = await dataService.getGalleryImages();
        const filtered = images.filter(img => img.id !== id);
        localStorage.setItem('cms_gallery', JSON.stringify(filtered));
    },

    // Reviews (Mock for now)
    getReviews: async (): Promise<Review[]> => {
        const stored = localStorage.getItem('cms_reviews');
        return stored ? JSON.parse(stored) : [];
    },

    updateReviewStatus: async (id: string, status: Review['status']): Promise<void> => {
        const reviews = await dataService.getReviews();
        const index = reviews.findIndex(r => r.id === id);
        if (index !== -1) {
            reviews[index].status = status;
            localStorage.setItem('cms_reviews', JSON.stringify(reviews));
        }
    },

    deleteReview: async (id: string): Promise<void> => {
        const reviews = await dataService.getReviews();
        const filtered = reviews.filter(r => r.id !== id);
        localStorage.setItem('cms_reviews', JSON.stringify(filtered));
    },

    // Menu (Mock for now)
    getMenuItems: async (): Promise<MenuItem[]> => {
        const stored = localStorage.getItem('cms_menu');
        return stored ? JSON.parse(stored) : [];
    },

    createMenuItem: async (item: Omit<MenuItem, 'id' | 'createdAt' | 'updatedAt'>): Promise<MenuItem> => {
        const items = await dataService.getMenuItems();
        const newItem: MenuItem = {
            ...item,
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        items.push(newItem);
        localStorage.setItem('cms_menu', JSON.stringify(items));
        return newItem;
    },

    updateMenuItem: async (id: string, item: Partial<MenuItem>): Promise<void> => {
        const items = await dataService.getMenuItems();
        const index = items.findIndex(i => i.id === id);
        if (index !== -1) {
            items[index] = { ...items[index], ...item, updatedAt: new Date().toISOString() };
            localStorage.setItem('cms_menu', JSON.stringify(items));
        }
    },

    deleteMenuItem: async (id: string): Promise<void> => {
        const items = await dataService.getMenuItems();
        const filtered = items.filter(i => i.id !== id);
        localStorage.setItem('cms_menu', JSON.stringify(filtered));
    },

    // FAQs (Mock for now)
    getFAQs: async (): Promise<FAQ[]> => {
        const stored = localStorage.getItem('cms_faqs');
        return stored ? JSON.parse(stored) : [];
    },

    createFAQ: async (faq: Omit<FAQ, 'id' | 'createdAt' | 'updatedAt'>): Promise<FAQ> => {
        const faqs = await dataService.getFAQs();
        const newFAQ: FAQ = {
            ...faq,
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        faqs.push(newFAQ);
        localStorage.setItem('cms_faqs', JSON.stringify(faqs));
        return newFAQ;
    },

    updateFAQ: async (id: string, faq: Partial<FAQ>): Promise<void> => {
        const faqs = await dataService.getFAQs();
        const index = faqs.findIndex(f => f.id === id);
        if (index !== -1) {
            faqs[index] = { ...faqs[index], ...faq, updatedAt: new Date().toISOString() };
            localStorage.setItem('cms_faqs', JSON.stringify(faqs));
        }
    },

    deleteFAQ: async (id: string): Promise<void> => {
        const faqs = await dataService.getFAQs();
        const filtered = faqs.filter(f => f.id !== id);
        localStorage.setItem('cms_faqs', JSON.stringify(filtered));
    },

    // Bookings (Mock for now)
    getBookings: async (): Promise<Booking[]> => {
        const stored = localStorage.getItem('cms_bookings');
        return stored ? JSON.parse(stored) : [];
    },

    updateBookingStatus: async (id: string, status: Booking['status']): Promise<void> => {
        const bookings = await dataService.getBookings();
        const index = bookings.findIndex(b => b.id === id);
        if (index !== -1) {
            bookings[index].status = status;
            bookings[index].updatedAt = new Date().toISOString();
            localStorage.setItem('cms_bookings', JSON.stringify(bookings));
        }
    },

    // Settings (Mock for now)
    getSettings: async (): Promise<CMSSettings> => {
        const stored = localStorage.getItem('cms_settings');
        return stored ? JSON.parse(stored) : {
            siteName: 'Taman Wisata Bougenville',
            siteDescription: 'Luxury Nature Resort',
            contactEmail: 'info@bougenville.com',
            contactPhone: '+62 811 910 2003',
            whatsappNumber: '+62 811 910 2003',
            socialMedia: {},
            booking: {
                maxAdvanceDays: 90,
                minStayNights: 1,
                checkInTime: '14:00',
                checkOutTime: '12:00'
            }
        };
    },

    updateSettings: async (settings: CMSSettings): Promise<void> => {
        localStorage.setItem('cms_settings', JSON.stringify(settings));
    },

    // Dashboard Stats (Mock for now)
    getDashboardStats: async (): Promise<DashboardStats> => {
        // In a real app, this would be an API call to /stats
        const villas = await dataService.getVillas();
        const bookings = await dataService.getBookings();
        const reviews = await dataService.getReviews();

        return {
            totalVillas: villas.length,
            activeBookings: bookings.filter(b => b.status === 'confirmed').length,
            pendingReviews: reviews.filter(r => r.status === 'pending').length,
            revenue: 150000000, // Mock revenue
            occupancyRate: 75, // Mock occupancy
            monthlyBookings: [
                { month: 'Jan', count: 45 },
                { month: 'Feb', count: 52 },
                { month: 'Mar', count: 38 },
                { month: 'Apr', count: 65 },
                { month: 'May', count: 48 },
                { month: 'Jun', count: 72 },
            ],
            popularVillas: villas.slice(0, 5).map(v => ({ name: v.name, bookings: Math.floor(Math.random() * 50) + 10 }))
        };
    }
};
