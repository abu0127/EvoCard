import React, { useEffect, useState } from 'react';
import { taklifnomalar } from '../data/taklifnomalar';
import '../assets/styles/card.css';
import NativeShareButton from './NativeShareButton';
import { FaExpand, FaShareAlt } from 'react-icons/fa';

function Card({ search }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(taklifnomalar);
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const filteredData = data.filter(d =>
    d.title.toLowerCase().includes(search.toLowerCase()) ||
    d.type?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="cards">
        {[...Array(3)].map((_, index) => (
          <div className="skeleton" key={index}>
            <div className="skeleton-header"></div>
            <div className="skeleton-media"></div>
            <div className="skeleton-footer">
              <div className="skeleton-price"></div>
              <div className="skeleton-button"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="cards">
      {filteredData.length === 0 ? (
        <div className="no-results">
          <img src="/no-results.svg" alt="Topilmadi" />
          <p>Hech narsa topilmadi. Qidiruv so‘zingizni tekshiring.</p>
        </div>
      ) : (
        filteredData.map((d) => (
          <div className="card" key={d.id}>
            <div className="card-frame">
              <div className="card-title">{d.title}</div>
              <iframe
                src={d.url}
                loading="lazy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="ditals">
                <div className="price">{d.price}</div>
                <div className="shair">
                  <div className="icon-btn">
                    <FaShareAlt className='shair-icon' />
                    <NativeShareButton url={d.url} title={d.title} />
                  </div>
                  <a href={d.url} target="_blank" rel="noopener noreferrer" className="icon-btn">
                    <FaExpand />
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Card;
