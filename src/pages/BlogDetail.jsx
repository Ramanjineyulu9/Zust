import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogData';
import { ArrowLeft, Share2, Calendar, User } from 'lucide-react';

const BlogDetail = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Post not found</h2>
                    <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pt-40 pb-20">
            <div className="container max-w-4xl">
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-blue mb-8 transition-colors"
                >
                    <ArrowLeft size={18} /> Back to Insights
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className="bg-primary-blue/10 text-primary-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6 inline-block">
                        {post.category}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-10 border-b border-gray-100 pb-10">
                        <div className="flex items-center gap-2">
                            <Calendar size={18} /> {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <User size={18} /> {post.author}
                        </div>
                        <button className="flex items-center gap-2 hover:text-primary-blue transition-colors ml-auto">
                            <Share2 size={18} /> Share
                        </button>
                    </div>

                    <div className="rounded-3xl overflow-hidden mb-12 shadow-2xl">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    <div
                        className="blog-content prose prose-lg max-w-none text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </motion.div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .blog-content p { margin-bottom: 2rem; font-size: 1.125rem; }
                .blog-content h2 { font-size: 2rem; font-weight: 800; color: #1e293b; margin: 3rem 0 1.5rem; }
                .blog-content ul { margin-bottom: 2rem; list-style-type: disc; padding-left: 1.5rem; }
                .blog-content li { margin-bottom: 0.75rem; }
                .blog-content strong { color: #1e293b; font-weight: 700; }
            `}} />
        </div>
    );
};

export default BlogDetail;
