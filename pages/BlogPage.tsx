import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PageHero } from '../components/ui/PageHero';
import { BlogPostCard } from '../components/ui/BlogPostCard';
import { StickyBookingCTA } from '../components/ui/StickyBookingCTA';
import { BLOG_POSTS } from '../data/blogPosts';
import { useRoute } from '../hooks/useRouter';
import { BlogPost } from '../components/BlogPost';
import { SEOHead } from '../components/ui/SEOHead';
import { StructuredData } from '../components/ui/StructuredData';
import { trackPageView } from '../utils/analytics';

const CATEGORIES = ['All', 'Wellness', 'Culinary', 'Culture', 'Travel Tips', 'Sustainability', 'Photography', 'Honeymoon', 'Family', 'History', 'Seasonal'];

export function BlogPage() {
    const { t } = useTranslation();
    const { params, navigate } = useRoute();
    const [selectedCategory, setSelectedCategory] = useState('All');

    // If a post ID is present in the URL, show the single post
    if (params.id) {
        return <BlogPost postId={params.id} onBack={() => navigate('blog')} />;
    }

    const filteredPosts = selectedCategory === 'All'
        ? BLOG_POSTS
        : BLOG_POSTS.filter(post => post.category === selectedCategory);

    const handleReadMore = (postId: string) => {
        navigate('blog', { id: postId });
    };

    const handleBookingClick = () => {
        const booking = document.getElementById('booking');
        if (booking) {
            booking.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.open('https://wa.me/628119102003?text=I would like to make a reservation', '_blank');
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        trackPageView('/blog', 'Blog | Taman Wisata Bougenville');
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title={t('blog.title') + ' - Taman Wisata Bougenville'}
                description={t('blog.subtitle')}
                canonical="https://tamanwisatabougenville.com/blog"
            />
            <StructuredData
                type="Organization" // Using Organization as a fallback or we can create a specific Blog schema if needed, but for now Organization or just SEOHead is good. Actually, let's use a custom script for Blog Listing if needed, but SEOHead covers most.
                data={{
                    "@context": "https://schema.org",
                    "@type": "Blog",
                    "name": "Taman Wisata Bougenville Blog",
                    "description": t('blog.subtitle'),
                    "url": "https://tamanwisatabougenville.com/blog"
                }}
            />
            <PageHero
                title="Stories from the Mountain"
                subtitle="Insights, adventures, and inspiration from Bougenville"
                backgroundImage="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073"
                overlay="dark"
            />

            {/* Category Filter */}
            <section className="py-12 bg-gray-50 border-b border-gray-200 sticky top-16 z-10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-5 py-2 text-xs uppercase tracking-[0.2em] font-medium transition-all ${selectedCategory === category
                                    ? 'border-b-2 border-forest-dark text-forest-dark'
                                    : 'text-gray-400 hover:text-gray-600'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post) => (
                            <BlogPostCard
                                key={post.id}
                                post={post}
                                onReadMore={handleReadMore}
                            />
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-gray-500 text-lg">No articles found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-20 bg-forest-dark text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-serif text-3xl font-light mb-4 tracking-wide">
                            Subscribe to Our Newsletter
                        </h2>
                        <p className="text-white/90 font-light mb-8">
                            Get the latest stories, travel tips, and exclusive offers delivered to your inbox.
                        </p>

                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-5 py-3 rounded-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <button
                                type="submit"
                                className="bg-white text-forest-dark px-8 py-3 font-medium uppercase tracking-[0.2em] text-xs hover:bg-gray-100 transition-colors"
                            >
                                {t('footer.subscribe')}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <StickyBookingCTA onBookClick={handleBookingClick} />
        </div>
    );
}
