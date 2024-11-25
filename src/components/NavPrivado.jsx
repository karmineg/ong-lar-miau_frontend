import logo from '../assets/logo.png';
import '../App.css';
import { getUsuario, logout } from '../seguranca/Autenticacao';

const MenuPrivado = () => {
    const usuario = getUsuario();

    const handleLogout = () => {
        logout(); 
        window.location.href = "/"; 
    };

    return (
        <nav className="navbar navbar-expand-lg bg-light fixed-top mb-4">
            <div className="container-fluid">
                <img src={logo} alt="Logo" className="navbar-logo" />
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        {usuario ? (
                            <button
                                className="btn btn-link nav-link"
                                onClick={handleLogout}
                            >
                                Logout ({usuario.nome})
                            </button>
                        ) : (
                            <span className="nav-link">Usuário não autenticado</span>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default MenuPrivado;
