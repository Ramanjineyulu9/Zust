import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const About = () => {
    const stats = [
        { label: 'Projects Delivered', value: '500+' },
        { label: 'Team Members', value: '50+' },
        { label: 'Years Experience', value: '10+' },
        { label: 'Client Satisfaction', value: '98%' }
    ];

    return (
        <section id="about" className="section bg-slate-50">
            <div className="container grid lg-grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'relative' }}
                >
                    <div style={{ aspectRegular: '1/1', position: 'relative', borderRadius: '40px', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', transform: 'rotate(2deg)', zIndex: 10 }}>
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                            alt="Team Meeting"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'rotate(-2deg) scale(1.1)' }}
                        />
                    </div>
                    <div style={{ position: 'absolute', top: '40px', left: '-40px', width: '100%', height: '100%', border: '4px solid var(--primary-blue)', borderRadius: '40px', zIndex: 0, opacity: 0.2 }}></div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        style={{ position: 'absolute', bottom: '-24px', right: '-24px', background: 'white', padding: '1.5rem', borderRadius: '20px', boxShadow: 'var(--shadow-xl)', zIndex: 20, display: 'flex', gap: '1rem', alignItems: 'center', border: '1px solid var(--border-light)' }}
                    >
                        <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--primary-green)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                            <Check size={24} strokeWidth={3} />
                        </div>
                        <div>
                            <p style={{ fontSize: '10px', fontWeight: 'bold', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Certified Partner</p>
                            <p style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>Trusted Globally</p>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span style={{ color: 'var(--primary-blue)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem', marginBottom: '1rem', display: 'block' }}>Our Story</span>
                    <h2 className="mb-6">Transforming Ideas into Digital Reality</h2>
                    <p className="text-slate-600 text-lg mb-8" style={{ lineHeight: '1.8' }}>
                        Zustnext is a leading technology partner dedicated to transforming businesses through innovative digital solutions. We combine strategic thinking with technical excellence to help our clients scale and succeed.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2.5rem' }}>
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + idx * 0.1 }}
                            >
                                <h4 style={{ fontSize: '1.875rem', fontWeight: '800', color: 'var(--primary-blue)', marginBottom: '0.25rem' }}>{stat.value}</h4>
                                <p style={{ fontSize: '10px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        style={{ padding: '2rem', background: 'white', borderLeft: '4px solid var(--primary-blue)', borderRadius: '0 16px 16px 0', boxShadow: 'var(--shadow-sm)', fontStyle: 'italic', color: '#334155', lineHeight: '1.6' }}
                    >
                        "Our mission is to empower businesses with cutting-edge technology solutions that drive growth, enhance efficiency, and unlock new opportunities in the digital world."
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
