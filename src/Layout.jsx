import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import './assets/styles/layout.css'
import { useState, useEffect, useRef } from 'react';
import Bar from './components/Bar';
import Card from './components/Card';

export default function Layout() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const mainRef = useRef(null);

    const toggleMenu = () => setMobileMenuOpen(prev => !prev);

    useEffect(() => {
        const setFullScreen = () => {
            if (mainRef.current) {
                const vh = mainRef.current.clientHeight * 0.01;
                document.documentElement.style.setProperty('--vh', `${vh}px`);
            }
        };

        window.addEventListener('resize', setFullScreen);
        setFullScreen(); // Initial call

        return () => window.removeEventListener('resize', setFullScreen); // Cleanup
    }, []);

    return (
        <>
            <header>
                <div className="inner-header">
                    <h1>salom</h1>
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
