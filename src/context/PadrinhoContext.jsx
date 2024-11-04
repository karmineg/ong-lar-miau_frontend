import React, { createContext, useState, useEffect } from 'react';
import { getGatosAPI, atualizarGatoAPI } from '../services/gatosService';
import { cadastraPadrinhoAPI } from '../services/padrinhosService';

const PadrinhoContext = createContext();

export const PadrinhoProvider = ({ children }) => {
    const [gatos, setGatos] = useState([]);
    const adicionarPadrinho = async (padrinhoData, codigoGato, descricaoGato, vacinasGato) => {
        try {
            const padrinhoCadastrado = await cadastraPadrinhoAPI(padrinhoData);

            const dadosAtualizados = {
                codigo: codigoGato,
                descricao: descricaoGato,
                vacinas: vacinasGato,
                nome: padrinhoData.nomeGato,
                padrinhoId: padrinhoCadastrado.objeto.codigo
            };

            await atualizarGato(codigoGato, dadosAtualizados);

        } catch (error) {
            console.error("Erro ao adicionar padrinho:", error);
            throw error;
        }
    };

    const atualizarGato = async (codigo, dadosAtualizados) => {
        try {
            const gatoAtualizado = await atualizarGatoAPI(codigo, dadosAtualizados);
            return gatoAtualizado.objeto;
        } catch (error) {
            console.error("Erro ao atualizar gato:", error);
            throw error;
        }
    };

    const fetchGatos = async () => {
        try {
            const gatosData = await getGatosAPI();
            setGatos(gatosData);
        } catch (error) {
            console.error("Erro ao buscar gatos:", error);
        }
    };

    useEffect(() => {
        fetchGatos();
    }, []);

    return (
        <PadrinhoContext.Provider value={{ gatos, adicionarPadrinho }}>
            {children}
        </PadrinhoContext.Provider>
    );
};

export default PadrinhoContext;
