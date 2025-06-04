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
            // mainRef.current mavjudligini tekshiramiz
            if (mainRef.current) {
                const vh = mainRef.current.clientHeight * 0.01;
                document.documentElement.style.setProperty('--vh', `${vh}px`);
            }
        };

        const mainEl = mainRef.current;

        setFullScreen(); // birinchi chaqirish

        if (mainEl) {
            mainEl.addEventListener('scroll', setFullScreen);
        }
        window.addEventListener('resize', setFullScreen);
        window.addEventListener('orientationchange', setFullScreen);

        return () => {
            if (mainEl) {
                mainEl.removeEventListener('scroll', setFullScreen);
            }
            window.removeEventListener('resize', setFullScreen);
            window.removeEventListener('orientationchange', setFullScreen);
        };
    }, []);

    return (
        <>
            <header>
                <div className="inner-header">
                    <h1>EvoInvite</h1>
                    <button onClick={toggleMenu} className="barBtn">
                        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </header>
            <main className="main" ref={mainRef}>
                <Bar mobileMenuOpen={mobileMenuOpen} />
                <Card />
            </main>
        </>
    );
}
