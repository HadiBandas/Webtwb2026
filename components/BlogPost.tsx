import React from 'react';
import { ArrowLeft, Calendar, User, Clock, Tag } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { BLOG_POSTS } from '../data/blogPosts';
import { SEO } from './SEO';
import { optimizeImage } from '../utils/imageOptimizer';
import DOMPurify from 'dompurify';

interface BlogPostProps {
    postId: string;
    onBack: () => void;
}

export function BlogPost({ postId, onBack }: BlogPostProps) {
    const { i18n } = useTranslation();
    const lang = (i18n.language?.split('-')[0] || 'id') as 'id' | 'en' | 'zh' | 'de';
    const post = BLOG_POSTS.find(p => p.id === postId);

    const getContent = (content: any) => {
        if (typeof content === 'string') return content;
        return content[lang] || content['en'] || content['id'] || '';
    };

    if (!post) {
        return (
            <div className="min-h-screen pt-32 px-4 text-center">
                <h2 className="text-2xl font-serif mb-4">Article Not Found</h2>
                <button onClick={onBack} className="text-forest-dark underline">Back to Blog</button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white pt-24 pb-20">
            <SEO
                title={getContent(post.title)}
                description={getContent(post.excerpt)}
                image={post.image}
                type="article"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": getContent(post.title),
                    "image": post.image,
                    "datePublished": post.date, // Should be ISO format ideally
                    "author": {
                        "@type": "Person",
                        "name": post.author
                    },
                    "description": getContent(post.excerpt)
                }}
            />

            <article className="container mx-auto px-4 max-w-4xl">
                <button
                    onClick={onBack}
                    className="group flex items-center gap-2 text-sm text-gray-500 hover:text-forest-dark mb-8 transition-colors"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Articles
                </button>

                <header className="mb-12 text-center">
                    <div className="inline-block px-3 py-1 bg-gray-100 text-xs font-medium tracking-widest uppercase text-gray-600 mb-6 rounded-sm">
                        {post.category}
                    </div>
                    <h1 className="font-serif text-3xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
                        {getContent(post.title)}
                    </h1>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 border-y border-gray-100 py-6">
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <User size={16} />
                            {post.author}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            {post.readTime} read
                        </div>
                    </div>
                </header>

                <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
                    <img
                        src={optimizeImage(post.image, 1000)}
                        alt={getContent(post.title)}
                        className="w-full h-[400px] md:h-[500px] object-cover"
                        width="1000"
                        height="500"
                    />
                </div>

                <div
                    className="prose prose-lg prose-headings:font-serif prose-headings:font-light prose-a:text-forest-dark prose-img:rounded-xl mx-auto text-gray-600 font-light leading-loose"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(getContent(post.content)) }}
                />

                <div className="mt-16 pt-8 border-t border-gray-100">
                    <div className="flex items-center gap-2 mb-4">
                        <Tag size={16} className="text-gray-400" />
                        <span className="text-sm font-medium text-gray-900">Tags:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
        </div>
    );
}
