import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core/dist/cjs/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import logo from '../assets/logo1.png';
import pata from '../assets/pata.png';
import gato1 from '../assets/gato5.jpg';
import gato2 from '../assets/gato4.jpg';
import icon from '../assets/icon.png';
import GatoContext from '../context/GatoContext';
import { deleteGatoPorCodigoAPI } from '../services/gatosService';
import Cats from './Cats';
import DonateModal from './DonateModal';
import AddCats from './AddCats';
import React, { useContext, useState } from 'react';
import '../App.css';
import g1 from '../assets/carrossel/1.jpg';
import g2 from '../assets/carrossel/2.jpg';
import g3 from '../assets/carrossel/3.jpg';
import g4 from '../assets/carrossel/4.jpg';
import g5 from '../assets/carrossel/5.jpg';
import g6 from '../assets/carrossel/6.jpg';
import g7 from '../assets/carrossel/7.jpg';

const Home = () => {

    const { gatos, setGatos } = useContext(GatoContext);
    const [gatoAtualIndex, setGatoAtualIndex] = useState(0);

    const imagensCarrossel = [g1, g2, g3, g4, g5, g6, g7];

    const removerGatoAtual = async () => {
        const gatoAtual = gatos[gatoAtualIndex];

        if (!gatoAtual) return;

        try {
            await deleteGatoPorCodigoAPI(gatoAtual.codigo);

            const gatosAtualizados = gatos.filter(gato => gato.codigo !== gatoAtual.codigo);
            setGatos(gatosAtualizados);

            setGatoAtualIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : 0));
        } catch (error) {
            console.error("Erro ao remover o gato:", error);
        }
    };

    return (
        <>
            <div id="home" className="na"></div>
            <section className="secao1">
                <div className="gradient-div">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <div className="text1">
                    Cada gato merece um lar amoroso. Junte-se a nós e faça parte dessa mudança!
                </div>
                <div className="text2">
                    Adote ou apadrinhe um gato <img src={pata} alt="Pata" className="pata-icon" />
                </div>
            </section>
            <section id="gatos" className="secao2">
                <div className="text-carousel">
                    | Conheça nossos gatos
                    <AddCats />
                    <button className="btnx" onClick={removerGatoAtual}>
                        Remover gato
                    </button>
                </div>
                <div className="carousel-container">
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            {gatos.map((_, index) => (
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
                            {gatos.map((gato, index) => (
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
            </section>
            <section id="adotar" className="secao3">
                <div className="adotar-container">
                    <div className="text10">
                        | Adote um Felino
                    </div>
                    <div className="text11">
                        Adotar um gato é uma decisão cheia de amor e ​compaixão, e no Lar Miau, acreditamos que cada adoção ​tem o
                        poder de transformar vidas – tanto a do gato ​quanto a da pessoa que o acolhe.
                    </div>
                </div>
                <div className="gato-info4">
                    <img src={icon} alt="gato4" className="gato-icon" />
                </div>
            </section>
            <section id="doar" className="secao4">
                <div className="text5">
                    | Seja doador
                </div>
                <div className="text6">
                    No Lar Miau, acreditamos que cada contribuição faz uma ​diferença significativa na vida dos nossos amigos felinos.
                    Quando você se torna um doador, você não está apenas ​oferecendo suporte financeiro,
                    mas também ajudando a ​salvar vidas e a proporcionar um futuro melhor para ​inúmeros gatos que necessitam de ajuda.
                </div>
                <DonateModal />
            </section>
            <section id="sobre" className="secao5">
                <div className="sobre-container">
                    <div className="text7">
                        | Sobre nós
                    </div>
                    <div className="text8">
                        Bem-vindo ao Lar Miau, uma ONG dedicada ao resgate, ​cuidado e adoção de gatos.
                        Fundada por um grupo de ​apaixonados por felinos, nosso objetivo é proporcionar um ​lar temporário seguro e
                        amoroso para gatos resgatados ​das ruas, enquanto trabalhamos arduamente para ​encontrar famílias definitivas para eles.
                    </div>
                </div>
                <div className="gato-info1">
                    <img src={gato1} alt="gato1" className="gato-icon" />
                </div>
                <div className="gato-info2">
                    <img src={gato2} alt="gato2" className="gato-icon" />
                </div>
                <div className="text9">
                    Junte-se a nós nessa missão e ajude-nos a transformar ​vidas. Seja adotando, apadrinhando ou doando,
                    sua ​participação é vital para que possamos continuar a fazer a ​diferença na vida dos gatos que resgatamos.
                    No Lar Miau, ​cada gato é tratado com amor e respeito, e juntos ​podemos garantir um futuro melhor para eles.
                </div>
            </section>
            <section id="contato" className="secao6">
                <div className="text3">
                    | Entre em contato
                </div>
                <div className="text4">
                    <strong>Endereço:</strong> Cidade tal, rua tal <br />
                    <strong>Telefone:</strong> (54) 0000-0000 <br />
                    <strong>E-mail:</strong> ong.larmiau@onglarmiau.com.br
                </div>
            </section>
        </>
    );
}

export default Home;