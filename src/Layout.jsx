import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import './assets/styles/layout.css';
import { useState, useEffect, useRef } from 'react';
import Bar from './components/Bar';
import Card from './components/Card';

export default function Layout() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const mainRef = useRef(null);

    const toggleMenu = () => setMobileMenuOpen(prev => !prev);

    useEffect(() => {
        const setFullScreen = () => {
            if (mainRef.current) {
                const vh = mainRef.current.clientHeight * 0.01;
                document.documentElement.style.setProperty('--vh', `${vh}px`);
            }
        };

        const mainEl = mainRef.current;
        setFullScreen();

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
                    <div className="logo-container">
                        {/* Logoni bu yerga qo'yish mumkin */}
                    </div>

                    <div className="search-box">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Qidirish..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <button onClick={toggleMenu} className="barBtn">
                        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </header>

            <main className="main" ref={mainRef}>
                <Bar mobileMenuOpen={mobileMenuOpen} />
                <Card search={searchTerm} />
            </main>
        </>
    );
}
