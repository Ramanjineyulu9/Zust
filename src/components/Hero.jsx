import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="section relative flex items-center min-h-screen pt-20 overflow-hidden" style={{ position: 'relative' }}>
            {/* Dynamic Background Elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 50, 0],
                    y: [0, -30, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute', top: '-10%', right: '-5%', width: '40%', height: '60%',
                    backgroundColor: 'rgba(9, 116, 176, 0.05)', borderRadius: '50%', filter: 'blur(100px)', zIndex: -10
                }}
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, -40, 0],
                    y: [0, 40, 0]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute', bottom: '-10%', left: '-5%', width: '30%', height: '50%',
                    backgroundColor: 'rgba(206, 34, 50, 0.05)', borderRadius: '50%', filter: 'blur(80px)', zIndex: -10
                }}
            />

            <div className="container grid grid-cols-1 lg-grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left"
                >
                    <h1 className="mb-6">
                        Everything you need to <span className="text-primary-blue">Optimize</span> your business
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 mx-auto lg:mx-0" style={{ maxWidth: '500px' }}>
                        Zustnext empowers your business with cutting-edge analytics, automation, and high-performance applications designed to drive real growth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start items-center lg:items-center">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-primary w-full sm:w-auto text-center justify-center"
                            style={{ padding: '1rem 2rem', fontSize: '1.25rem', textDecoration: 'none' }}
                        >
                            Start Free Trial
                        </motion.a>
                        <motion.a
                            href="/zustnext_demo.webp"
                            target="_blank"
                            whileHover={{ scale: 1.05, backgroundColor: '#f1f5f9' }}
                            whileTap={{ scale: 0.95 }}
                            className="btn w-full sm:w-auto text-center justify-center"
                            style={{ backgroundColor: 'white', border: '1px solid var(--border-light)', padding: '1rem 2rem', fontSize: '1.25rem', textDecoration: 'none' }}
                        >
                            Watch Demo
                        </motion.a>
                    </div>

                    <div className="flex flex-wrap gap-6 text-sm font-bold">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={18} style={{ color: 'var(--primary-green)' }} />
                            <span className="text-slate-500">No credit card required</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={18} style={{ color: 'var(--primary-green)' }} />
                            <span className="text-slate-500">14-day free trial</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{ position: 'relative' }}
                >
                    <div style={{
                        position: 'relative', zIndex: 10, borderRadius: '32px',
                        boxShadow: 'var(--shadow-xl)', overflow: 'hidden',
                        background: 'white' // Ensure background is white behind image if transparent
                    }}>
                        <img
                            src="/dashboard_hero.png"
                            alt="Zustnext Analytics Dashboard"
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                    </div>

                    {/* Floating Accents */}
                    <motion.div
                        animate={{ y: [0, -15, 0], rotate: [-12, -8, -12] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            position: 'absolute', top: '-40px', right: '-20px', width: '90px', height: '90px',
                            backgroundColor: 'var(--primary-yellow)', borderRadius: '16px', boxShadow: 'var(--shadow-lg)',
                            zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem'
                        }}
                    >
                        📊
                    </motion.div>
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        style={{
                            position: 'absolute', bottom: '-40px', left: '-40px', width: '120px', height: '120px',
                            backgroundColor: 'var(--primary-green)', borderRadius: '50%', zIndex: -1, opacity: 0.1
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
