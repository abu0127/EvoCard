import React, { useEffect, useState } from 'react'
import { taklifnomalar } from '../data/taklifnomalar'
import '../assets/styles/card.css'

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
                            <p>{d.description}</p>
                            <a href={d.url} target="_blank" rel="noopener noreferrer">
                                Ko'rish
                            </a>
                        </div>
                    </div>
                ))
            )}
        </div>

    )
}

export default Card