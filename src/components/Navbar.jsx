import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar navbar-expand-lg bg-light fixed-top mb-4">

            <div className="container-fluid">
                <img src={logo} alt="Logo" className="navbar-logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button className="nav-link" onClick={() => scrollToSection("home")}>Home</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={() => scrollToSection("gatos")}>Gatos</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={() => scrollToSection("adotar")}>Adotar</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={() => scrollToSection("doar")}>Doar</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={() => scrollToSection("sobre")}>Sobre nós</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={() => scrollToSection("contato")}>Contato</button>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;