import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core/dist/cjs/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import GatoContext from '../context/GatoContext';
import { deleteGatoPorCodigoAPI } from '../services/gatosService';
import AddCats from './AddCats';
import ListPadrinhos from './ListPadrinhos';
import React, { useContext, useState } from 'react';
import Carousel from './Carousel';
import '../App.css';

const TelaPrivado = () => {

    const { gatos, setGatos } = useContext(GatoContext);
    const [gatoAtualIndex, setGatoAtualIndex] = useState(0);

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
            <section id="gatos" className="secao2">
                <div className="text-carousel">
                    | Área administrativa da ONG Lar Miau
                    <AddCats />
                    <button className="btnx" onClick={removerGatoAtual}>
                        Remover gato
                    </button>
                    <ListPadrinhos />
                </div>
                <Carousel />
            </section>
        </>
    );
}

export default TelaPrivado;