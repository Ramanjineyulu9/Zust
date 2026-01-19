import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#0f172a', padding: '5rem 0', borderTop: '1px solid rgba(226, 232, 240, 0.1)' }}>
            <div className="container">
                <div className="grid lg-grid-cols-3 gap-16" style={{ marginBottom: '4rem', color: '#94a3b8' }}>
                    <div style={{ flex: 1 }}>
                        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                            <img src="/logo.svg" alt="Zustnext Logo" style={{ width: '40px', height: '40px', filter: 'brightness(5) grayscale(1)' }} />
                            <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', letterSpacing: '-0.025em' }}>
                                Zust<span style={{ color: 'var(--primary-blue)' }}>next</span>
                            </span>
                        </a>
                        <p style={{ fontSize: '0.875rem', lineHeight: 1.8, marginBottom: '2rem', color: '#64748b', fontWeight: 500 }}>
                            Empowering businesses with modern technology solutions. Your trusted partner in digital transformation and operational excellence.
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '4rem' }}>
                        <div>
                            <h4 style={{ color: 'white', fontWeight: 700, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '10px' }}>Company</h4>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.875rem', fontWeight: 500 }}>
                                <li><a href="#about" className="footer-link">About Us</a></li>
                                <li><a href="#contact" className="footer-link">Careers</a></li>
                                <li><a href="#contact" className="footer-link">Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ color: 'white', fontWeight: 700, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '10px' }}>Solutions</h4>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.875rem', fontWeight: 500 }}>
                                <li><a href="#services" className="footer-link">Web Apps</a></li>
                                <li><a href="#services" className="footer-link">Mobile Apps</a></li>
                                <li><a href="#products" className="footer-link">SaaS Products</a></li>
                                <li><Link to="/blog" className="footer-link">Our Blog</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ flex: 1 }}>
                        <h4 style={{ color: 'white', fontWeight: 700, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '10px' }}>Connect</h4>
                        <p style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '1.5rem', color: '#cbd5e1' }}>Stay updated with our latest technology insights.</p>
                        <div style={{ display: 'flex', background: 'rgba(30, 41, 59, 0.5)', padding: '6px', borderRadius: '12px', border: '1px solid rgba(71, 85, 105, 0.5)' }}>
                            <input type="email" placeholder="Your email" style={{ background: 'transparent', border: 'none', outline: 'none', padding: '0 12px', width: '100%', color: 'white', fontSize: '14px' }} />
                            <button style={{ backgroundColor: 'var(--primary-blue)', color: 'white', padding: '8px 16px', borderRadius: '8px', fontWeight: 700, fontSize: '12px', border: 'none', cursor: 'pointer' }}>Join</button>
                        </div>
                    </div>
                </div>

                <div style={{ paddingTop: '2.5rem', borderTop: '1px solid rgba(226, 232, 240, 0.05)', textAlign: 'center' }}>
                    <p style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.25em', color: '#475569' }}>
                        &copy; {new Date().getFullYear()} Zustnext Corporation. All rights reserved.
                    </p>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        .footer-link { transition: color 0.3s ease; color: #94a3b8; }
        .footer-link:hover { color: white; }
      `}} />
        </footer>
    );
};

export default Footer;
