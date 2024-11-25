import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core/dist/cjs/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { GatoProvider } from "./context/GatoContext";
import { PadrinhoProvider } from './context/PadrinhoContext';
import { getToken } from "./seguranca/Autenticacao";
import NavPrivado from "./components/NavPrivado";
import TelaPrivado from "./components/TelaPrivado";
import Login from "./components/Login";
import './App.css';

function RotaPrivada({ children }) {
  const token = getToken();
  return token ? children : <Navigate to="/" replace />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <GatoProvider>
        <PadrinhoProvider>
          <Navbar />
          <Home />
        </PadrinhoProvider>
      </GatoProvider>
    ),
    index: true,
  },
  {
    path: "/login", 
    element: <Login />, 
  },
  {
    path: "/privado",
    element: (
      <RotaPrivada>
        <GatoProvider>
          <PadrinhoProvider>
            <NavPrivado />
            <TelaPrivado />
          </PadrinhoProvider>
        </GatoProvider>
      </RotaPrivada>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;