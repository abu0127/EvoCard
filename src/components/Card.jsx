import React, { useEffect, useState } from 'react'
import { taklifnomalar } from '../data/taklifnomalar'
import '../assets/styles/card.css'
import NativeShareButton from './NativeShareButton'

function Card() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(taklifnomalar);
        setTimeout(() => setLoading(false), 1000)

    }, []);

    return (
        <div className="cards">

            {loading ? (
                <p>Yuklanmoqda...</p>
            ) : (
                data.map((d) => (
                    <div className="card" key={d.id}>
                        <div className="card-frame">
                            <h1>{d.title}</h1>
                            <iframe width="97%" height="95%"
                                src={d.url}
                                loading="lazy"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                            </iframe>

                            <div className="ditals">
                                <div className="price">{d.price}</div>

                                <div className='shair'>
                                    <div className="visite">
                                        <NativeShareButton url={d.url} title={d.title} />
                                        <div>Ulashish</div>
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

    )
}

export default Card