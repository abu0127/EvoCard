import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import './assets/styles/layout.css';
import { useState, useEffect, useRef } from 'react';
import Bar from './components/Bar';
import Card from './components/Card';
import RightToolPanel from './components/RightToolPanel';

export default function Layout() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [toolOpen, setToolOpen] = useState(false);
    const mainRef = useRef(null);

    const toggleMenu = () => setMobileMenuOpen(prev => !prev);
    const toggleSearchBar = () => setShowSearchBar(prev => !prev);
    const closeSearchBar = () => setShowSearchBar(false); // 👈 Yopish funksiyasi

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
                        {/* Logo */}
                    </div>
                    <div className="bar-icons">
                        <button className="icon-button search-toggle" onClick={toggleSearchBar}>
                            <FaSearch className='search-icon' />
                        </button>
                        <button onClick={() => setToolOpen(true)} className="barBtn">
                            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                </div>
            </header>
            <RightToolPanel open={toolOpen} onClose={() => setToolOpen(false)} />


            <Bar
                search={searchTerm}
                setSearch={setSearchTerm}
                show={showSearchBar}
                onClose={closeSearchBar} // 👈 Barni yopish
            />

            <main className="main" ref={mainRef}>
                <Card search={searchTerm} />
            </main>
        </>
    );
}
