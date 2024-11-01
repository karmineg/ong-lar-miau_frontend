import React, { createContext, useState, useEffect } from 'react';
import { getGatosAPI } from '../services/gatosService';

const GatoContext = createContext();

export const GatoProvider = ({ children }) => {
    const [gatos, setGatos] = useState([]);

    useEffect(() => {
        const fetchGatos = async () => {
            try {
                const gatosData = await getGatosAPI();
                setGatos(gatosData);
            } catch (error) {
                console.error("Erro ao buscar os gatos: ", error);
            }
        };
        fetchGatos();
    }, []);

    return (
        <GatoContext.Provider value={{ gatos, setGatos }}> 
            {children}
        </GatoContext.Provider>
    );
};

export default GatoContext;
