export const getGatosAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/gato`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    
    if (!response.ok) {
        throw new Error('Erro ao buscar gatos');
    }

    const data = await response.json();
    return data;
};

export const getGatoPorCodigoAPI = async (codigo) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/gato/${codigo}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    
    if (!response.ok) {
        throw new Error(`Erro ao buscar gato com código ${codigo}`);
    }

    const data = await response.json();
    return data;
};

export const deleteGatoPorCodigoAPI = async (codigo) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/gato/${codigo}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
    
    if (!response.ok) {
        throw new Error(`Erro ao deletar gato com código ${codigo}`);
    }

    const data = await response.json();
    return data;
};

export const cadastraGatoAPI = async (objeto, metodo) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/gato`, {
        method: metodo,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objeto)
    });
    
    if (!response.ok) {
        throw new Error('Erro ao cadastrar gato');
    }

    const data = await response.json();
    return data;
};

export const cadastraPadrinhoAPI = async (padrinhoData) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/padrinho`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(padrinhoData)
    });
    
    if (!response.ok) {
        throw new Error('Erro ao cadastrar padrinho');
    }

    const data = await response.json();
    console.log(data)
    return data;
};

export const atualizarGatoAPI = async (codigo, dadosAtualizados) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/gato/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosAtualizados)
    });
    
    if (!response.ok) {
        throw new Error(`Erro ao atualizar gato com código ${codigo}`+response.json);
    }

    const data = await response.json();
    return data;
};