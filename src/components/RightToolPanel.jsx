import { FaTelegramPlane, FaPhone, FaInstagram, FaTimes } from 'react-icons/fa';
import '../assets/styles/rightToolPanel.css';

export default function RightToolPanel({ open, onClose }) {
  return (
    <div className={`right-panel ${open ? 'show' : ''}`}>
      <div className="panel-header">
        <h3>Biz bilan bog‘lanish</h3>
        <button onClick={onClose} className="close-btn">
          <FaTimes />
        </button>
      </div>
      <div className="panel-content">
        <a href="https://t.me/Abubakr_Tolipov" target="_blank" rel="noreferrer" className="contact-link">
          <FaTelegramPlane /> Telegram
        </a>
        <a href="tel:+998500061234" className="contact-link">
          <FaPhone /> +998 50 006 12 34
        </a>
        <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer" className="contact-link">
          <FaInstagram /> Instagram
        </a>
      </div>
    </div>
  );
}
