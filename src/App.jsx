import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core/dist/cjs/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { GatoProvider } from "./context/GatoContext";
import { PadrinhoProvider } from './context/PadrinhoContext';
import './App.css';

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
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;