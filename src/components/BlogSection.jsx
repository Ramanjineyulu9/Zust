import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { ArrowRight } from 'lucide-react';

const BlogSection = () => {
    // Show only the latest 3 posts
    const latestPosts = blogPosts.slice(0, 3);

    return (
        <section id="blog" className="section bg-gray-50">
            <div className="container">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-4"
                        >
                            Latest from <span className="text-primary-blue">Insights</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 max-w-xl"
                        >
                            Stay updated with our latest thoughts on AI, technology trends, and business transformation strategies.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="hidden md-block"
                    >
                        <Link
                            to="/blog"
                            className="btn btn-secondary flex items-center gap-2"
                            style={{ padding: '0.75rem 1.5rem', borderRadius: '12px' }}
                        >
                            View All Posts <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid md-grid-cols-3 gap-8">
                    {latestPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="text-xs text-primary-rule font-bold uppercase tracking-wider mb-2">
                                    {post.category}
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-blue transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto">
                                    <Link
                                        to={`/blog/${post.id}`}
                                        className="text-sm font-bold flex items-center gap-2 text-gray-900 hover:text-primary-blue transition-colors"
                                    >
                                        Read More <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md-hidden">
                    <Link
                        to="/blog"
                        className="btn btn-secondary w-full py-4 rounded-2xl inline-block"
                    >
                        View All Posts
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
