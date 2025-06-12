import React, { useEffect, useState } from 'react';
import { taklifnomalar } from '../data/taklifnomalar';
import '../assets/styles/card.css';
import NativeShareButton from './NativeShareButton';

function Card({ search }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(taklifnomalar);
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const filteredData = data.filter(d =>
    d.title.toLowerCase().includes(search.toLowerCase()) ||
    d.type?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="cards">
      {loading ? (
        [...Array(4)].map((_, i) => (
          <div className="card skeleton" key={i}>
            <div className="skeleton-header"></div>
            <div className="skeleton-media"></div>
            <div className="skeleton-footer">
              <div className="skeleton-price"></div>
              <div className="skeleton-button"></div>
            </div>
          </div>
        ))
      ) : (
        filteredData.map((d) => (
          <div className="card" key={d.id}>
            <div className="card-frame">
              <div className="card-title">{d.title}</div>
              <iframe
                 width="97%"
                 height="95%"
                src={d.url}
                loading="lazy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
               
              ></iframe>

              <div className="ditals">
                <div className="price">{d.price}</div>
                <div className='shair'>
                  <div className="visite">
                    <NativeShareButton url={d.url} title={d.title} />
                  </div>
                  <a href={d.url} target="_blank" rel="noopener noreferrer">
                    <div>To'liq ekran</div>
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
