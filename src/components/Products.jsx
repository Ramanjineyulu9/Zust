import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Products = () => {
    const products = [
        {
            name: 'Email Automation',
            description: 'Intelligent email automation solution to boost engagement and conversions.',
            color: '#EA4335', // red
            accent: 'AI-Powered',
            category: 'Marketing'
        },
        {
            name: 'Results Platform',
            description: 'Secure, user-friendly platform for educational institutions to publish results.',
            color: '#4285F4', // blue
            accent: 'Secure',
            category: 'Education'
        },
        {
            name: 'Analytics Dashboard',
            description: 'Real-time business intelligence with customizable reports and KPI tracking.',
            color: '#FBBC05', // yellow
            accent: 'Real-time',
            category: 'Analytics'
        },
        {
            name: 'Project Suite',
            description: 'Comprehensive project management with task tracking and collaboration.',
            color: '#34A853', // green
            accent: 'Productivity',
            category: 'Collaboration'
        },
        {
            name: 'CRM System',
            description: 'End-to-end CRM solution for managing customer interactions and sales.',
            color: '#4285F4', // blue
            accent: 'Sales',
            category: 'Customer Support'
        },
        {
            name: 'Inventory Sync',
            description: 'Automated inventory tracking and order management for retail businesses.',
            color: '#EA4335', // red
            accent: 'Automation',
            category: 'Logistics'
        }
    ];

    return (
        <section id="products" className="section bg-white">
            <div className="container">
                <div className="flex flex-col md-flex-row justify-between" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', marginBottom: '4rem', gap: '1rem' }}>
                    <div style={{ maxWidth: '600px' }}>
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-4"
                        >
                            Our Powerful Products
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 text-lg"
                        >
                            Innovative tools built to streamline your operations and maximize efficiency.
                        </motion.p>
                    </div>
                    <motion.a
                        href="#"
                        whileHover={{ x: 5 }}
                        className="vibrant-link text-lg"
                    >
                        View All Products <ArrowRight size={20} />
                    </motion.a>
                </div>

                <div className="grid lg-grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, backgroundColor: 'white' }}
                            className="rounded-3xl border-slate-100 transition-all group"
                            style={{
                                padding: '2.5rem',
                                backgroundColor: `${product.color}08`,
                                borderColor: `${product.color}15`,
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div
                                className="product-card-blur"
                                style={{
                                    position: 'absolute', top: 0, right: 0, width: '128px', height: '128px',
                                    opacity: 0.1, filter: 'blur(32px)', margin: '-64px -64px 0 0',
                                    transition: 'all 0.5s ease',
                                    backgroundColor: product.color
                                }}
                            ></div>

                            <div className="flex justify-between items-start mb-6" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                <div
                                    style={{ width: '48px', height: '6px', borderRadius: '999px', backgroundColor: product.color }}
                                ></div>
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-500" style={{ fontSize: '10px' }}>
                                    {product.category}
                                </span>
                            </div>

                            <h3 className="mb-4">{product.name}</h3>
                            <p className="text-slate-600 mb-8" style={{ marginBottom: '2rem', lineHeight: '1.6' }}>
                                {product.description}
                            </p>

                            <div className="flex items-center justify-between" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                                <span className="text-xs font-bold" style={{ padding: '0.4rem 0.8rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-light)' }}>
                                    {product.accent}
                                </span>
                                <motion.button
                                    whileHover={{ scale: 1.1, backgroundColor: '#0f172a', color: 'white' }}
                                    className="product-arrow-btn"
                                    style={{
                                        width: '40px', height: '40px', borderRadius: '50%', display: 'flex',
                                        alignItems: 'center', justifyContent: 'center', backgroundColor: 'white',
                                        boxShadow: 'var(--shadow-md)', border: '1px solid var(--bg-light)', cursor: 'pointer'
                                    }}
                                >
                                    <ArrowRight size={18} />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        .group:hover .product-card-blur { transform: scale(1.5); }
      `}} />
        </section>
    );
};

export default Products;
