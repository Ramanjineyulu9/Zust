import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import BlogSection from './components/BlogSection';

const Home = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return (
        <>
            <Hero />
            <Services />
            <Products />
            <About />
            <BlogSection />
            <Contact />
        </>
    );
};

export default Home;
