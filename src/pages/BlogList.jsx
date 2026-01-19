import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { ArrowRight } from 'lucide-react';

const BlogList = () => {
    return (
        <div className="bg-white min-h-screen pt-40 pb-20">
            <div className="container">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-extrabold mb-4"
                    >
                        Insights & <span className="text-primary-blue">Innovations</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 text-lg max-w-2xl mx-auto"
                    >
                        Explore our latest thoughts on AI, technology, and business transformation.
                    </motion.p>
                </div>

                <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-primary-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="text-sm text-gray-500 mb-2">{post.date} • {post.author}</div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-blue transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <Link
                                    to={`/blog/${post.id}`}
                                    className="inline-flex items-center gap-2 font-bold text-primary-blue hover:gap-3 transition-all"
                                >
                                    Read Full Story <ArrowRight size={18} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogList;
