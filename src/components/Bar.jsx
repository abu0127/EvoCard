import { FaTimes } from 'react-icons/fa';
import '../assets/styles/bar.css';

export default function Bar({ search, setSearch, show, onClose }) {
    return (
        <div className={`search-bar-container ${show ? 'show' : ''}`}>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Nimani qidiryapsiz?"
                inputMode="text"
                autoComplete="off"
            />
            <button className="close-btn" onClick={onClose} aria-label="Yopish">
                <FaTimes />
            </button>
        </div>
    );
}
