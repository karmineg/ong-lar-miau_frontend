import 'bootstrap/dist/css/bootstrap.min.css';
import Cats from './Cats';
import '../App.css';
import React, { useEffect, useState } from 'react';
import g1 from '../assets/carrossel/1.jpg';
import g2 from '../assets/carrossel/2.jpg';
import g3 from '../assets/carrossel/3.jpg';
import g4 from '../assets/carrossel/4.jpg';
import g5 from '../assets/carrossel/5.jpg';
import g6 from '../assets/carrossel/6.jpg';
import g7 from '../assets/carrossel/7.jpg';

const Carousel = ({ gatos }) => {
    const [gatosAtualizados, setGatosAtualizados] = useState(gatos);
    const imagensCarrossel = [g1, g2, g3, g4, g5, g6, g7];

    useEffect(() => {
        if (gatos && Array.isArray(gatos)) {
            setGatosAtualizados(gatos);
        }
    }, [gatos]);

    return (
        <div className="carousel-container">
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    {gatosAtualizados.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={index}
                            className={index === 0 ? "active" : ""}
                            aria-current={index === 0 ? "true" : "false"}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner">
                    {gatosAtualizados.map((gato, index) => (
                        <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={gato.codigo}>
                            <img src={imagensCarrossel[index % imagensCarrossel.length]} className="d-block w-100" alt={`Gato ${index + 1}`} />
                            <div className="carousel-caption d-none d-md-block">
                                <Cats gato={gato} />
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;
