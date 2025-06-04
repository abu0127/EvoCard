import { FaBars, FaTimes } from 'react-icons/fa';
import './assets/styles/layout.css';
import { useState, useEffect, useRef } from 'react';
import Bar from './components/Bar';
import Card from './components/Card';

export default function Layout() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const mainRef = useRef(null);

    const toggleMenu = () => setMobileMenuOpen(prev => !prev);

    useEffect(() => {
        const setFullScreen = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        setFullScreen(); // Initial call

        window.addEventListener('resize', setFullScreen);
        window.addEventListener('orientationchange', setFullScreen);
        window.addEventListener('scroll', setFullScreen); // Safari uchun kerak

        return () => {
            window.removeEventListener('resize', setFullScreen);
            window.removeEventListener('orientationchange', setFullScreen);
            window.removeEventListener('scroll', setFullScreen);
        };
    }, []);

    return (
        <>
            <header>
                <div className="inner-header">
                    <h1>EvoInvite</h1>
                    <button onClick={toggleMenu} className='barBtn'>
                        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </header>
            <main className='main' ref={mainRef}>
                <Bar mobileMenuOpen={mobileMenuOpen} />
                <Card />
            </main>
        </>
    );
}
