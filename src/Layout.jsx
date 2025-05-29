import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import './assets/styles/layout.css'
import { useState } from 'react';
import Bar from './components/Bar';
import Card from './components/Card';

export default function Layout() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => setMobileMenuOpen(prev => !prev);

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
            <main>
                <Bar mobileMenuOpen={mobileMenuOpen} />
                <Card/>
            </main>
        </>
    )
}