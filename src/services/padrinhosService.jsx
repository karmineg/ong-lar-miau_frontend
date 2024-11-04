export const getPadrinhosAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/padrinho`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    
    if (!response.ok) {
        throw new Error('Erro ao buscar padrinhos');
    }

    const data = await response.json();
    return data;
};

export const getPadrinhoPorCodigoAPI = async (codigo) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/padrinho/${codigo}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    
    if (!response.ok) {
        throw new Error(`Erro ao buscar padrinho com código ${codigo}`);
    }

    const data = await response.json();
    return data;
};

export const deletePadrinhoPorCodigoAPI = async (codigo) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/padrinho/${codigo}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
    
    if (!response.ok) {
        throw new Error(`Erro ao deletar padrinho com código ${codigo}`);
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
    return data;
};

export const atualizarPadrinhoAPI = async (codigo, dadosAtualizados) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/padrinho/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosAtualizados)
    });
    
    if (!response.ok) {
        throw new Error(`Erro ao atualizar padrinho com código ${codigo}`);
    }

    const data = await response.json();
    return data;
};