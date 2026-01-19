import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Layout, BarChart3, BrainCircuit, Workflow } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: 'Web App Development',
            description: 'Build scalable, secure, modern web apps tailored to your business needs.',
            icon: <Globe size={40} />,
            color: 'var(--primary-blue)',
            tags: ['Frontend & Backend', 'UX/UI']
        },
        {
            title: 'Mobile App Development',
            description: 'High-performance native & cross-platform apps for iOS and Android.',
            icon: <Smartphone size={40} />,
            color: 'var(--primary-green)',
            tags: ['iOS & Android', 'Hybrid']
        },
        {
            title: 'SaaS Solutions',
            description: 'Design, build & scale multi-tenant SaaS products with subscription management.',
            icon: <Layout size={40} />,
            color: 'var(--primary-red)',
            tags: ['Multi-tenant', 'Cloud']
        },
        {
            title: 'Data Engineering & BI',
            description: 'ETL, pipelines and visualization for reliable decision-making.',
            icon: <BarChart3 size={40} />,
            color: 'var(--primary-blue)',
            tags: ['Dashboards', 'KPIs']
        },
        {
            title: 'Predictive Analytics',
            description: 'Leverage ML for forecasting, automation and improved outcomes.',
            icon: <BrainCircuit size={40} />,
            color: 'var(--primary-red)',
            tags: ['ML Models', 'Forecasting']
        },
        {
            title: 'Automation & Workflow',
            description: 'Automate reports and business workflows to save hours monthly.',
            icon: <Workflow size={40} />,
            color: 'var(--primary-green)',
            tags: ['ETL', 'RPA']
        }
    ];

    return (
        <section id="services" className="section bg-slate-50">
            <div className="container">
                <div className="text-center mb-16" style={{ marginBottom: '4rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4"
                    >
                        Our Core Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-lg mx-auto"
                        style={{ maxWidth: '600px' }}
                    >
                        Comprehensive digital solutions designed to accelerate your business growth and operational efficiency.
                    </motion.p>
                </div>

                <div className="grid lg-grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, boxShadow: 'var(--shadow-xl)' }}
                            className="bg-white p-8 rounded-2xl border-slate-100 transition-all group"
                            style={{ padding: '2rem', transition: 'all 0.3s ease' }}
                        >
                            <div
                                className="mb-6 transition-transform group-hover-scale"
                                style={{ color: service.color, marginBottom: '1.5rem', transition: 'transform 0.3s ease' }}
                            >
                                {service.icon}
                            </div>
                            <h3 className="mb-3">{service.title}</h3>
                            <p className="text-slate-600 mb-6" style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                {service.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {service.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 rounded-full text-xs font-bold"
                                        style={{ padding: '0.25rem 0.75rem', backgroundColor: '#f1f5f9', color: '#64748b', borderRadius: '999px', fontSize: '11px' }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        .group:hover .group-hover-scale { transform: scale(1.1); }
      `}} />
        </section>
    );
};

export default Services;
