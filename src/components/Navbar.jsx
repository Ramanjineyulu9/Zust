import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/#home' },
        { name: 'Services', href: '/#services' },
        { name: 'Products', href: '/#products' },
        { name: 'About', href: '/#about' },
        { name: 'Contact', href: '/#contact' },
    ];

    const isHomePage = location.pathname === '/';

    const handleLinkClick = (e, href) => {
        if (isHomePage && href.startsWith('/#')) {
            e.preventDefault();
            const id = href.replace('/#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false);
            }
        }
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-4'}`}
            style={{
                position: 'fixed',
                width: '100%',
                top: 0,
                left: 0,
                zIndex: 50,
                backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none'
            }}>
            <div className="container flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                    <img src="/logo.svg" alt="Zustnext Logo" style={{ width: '40px', height: '40px' }} />
                    <span className="text-2xl font-extrabold tracking-tight">
                        Zust<span className="text-primary-blue">next</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md-flex items-center gap-8">
                    <div className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="font-medium nav-hover-link"
                                style={{ position: 'relative' }}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/#contact" onClick={(e) => handleLinkClick(e, '/#contact')} className="btn btn-primary">
                            Get Started
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md-hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mobile-nav-menu"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-lg font-medium p-4"
                                onClick={(e) => {
                                    handleLinkClick(e, link.href);
                                    setIsOpen(false);
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/#contact"
                            className="btn btn-primary"
                            style={{ margin: '1rem', textAlign: 'center' }}
                            onClick={(e) => {
                                handleLinkClick(e, '/#contact');
                                setIsOpen(false);
                            }}
                        >
                            Get Started
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>

            <style dangerouslySetInnerHTML={{
                __html: `

        .nav-hover-link:hover { color: var(--primary-blue); }
        .mobile-nav-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: white;
          display: flex;
          flex-direction: column;
          padding: 2rem;
          box-shadow: var(--shadow-xl);
        }
      `}} />
        </nav>
    );
};

export default Navbar;

