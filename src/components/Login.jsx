import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gravaAutenticacao, getToken } from "../seguranca/Autenticacao"; 
import '../App.css';

function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [carregando, setCarregando] = useState(false);
    const navigate = useNavigate();

    const acaoLogin = async (e) => {
        e.preventDefault();

        try {
            const body = { email, senha };
            setCarregando(true);

            const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            const json = await response.json();

            if (json.auth === false) {
                setAlerta({ status: "error", message: json.message });
            } else if (json.auth === true) {
                gravaAutenticacao(json); 
                navigate("/privado"); 
            }
        } catch (err) {
            setAlerta({ status: "error", message: err.message });
        } finally {
            setCarregando(false);
        }
    };

    // Redireciona se o usuário já estiver autenticado
    useEffect(() => {
        const token = getToken();
        if (token) {
            navigate("/privado");
        }
    }, [navigate]);

    return (
        <div className="login-container">
            <h2>Login</h2>
            {alerta.message && (
                <div className={`alert alert-${alerta.status}`}>
                    {alerta.message}
                </div>
            )}
            <form onSubmit={acaoLogin}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="senha">Senha:</label>
                    <input
                        type="password"
                        id="senha"
                        className="form-control"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary" disabled={carregando}>
                    {carregando ? "Carregando..." : "Entrar"}
                </button>
            </form>
        </div>
    );
}

export default Login;
