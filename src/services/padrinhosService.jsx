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
