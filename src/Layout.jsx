import { FaBars, FaTimes } from 'react-icons/fa';
import './assets/styles/layout.css';
import { useState, useEffect } from 'react';
import Bar from './components/Bar';
import Card from './components/Card';

export default function Layout() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => setMobileMenuOpen(prev => !prev);

    // 👇 ANA SHU YERGA yozasiz
    useEffect(() => {
        const setFullScreen = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        setFullScreen(); // ilk marta
        window.addEventListener('resize', setFullScreen);
        window.addEventListener('scroll', setFullScreen);
        window.addEventListener('orientationchange', setFullScreen);

        return () => {
            window.removeEventListener('resize', setFullScreen);
            window.removeEventListener('scroll', setFullScreen);
            window.removeEventListener('orientationchange', setFullScreen);
        };
    }, []); // 👆 Faqat bir marta ishga tushadi

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
            <main className='main'>
                <Bar mobileMenuOpen={mobileMenuOpen} />
                <Card />
            </main>
        </>
    );
}
