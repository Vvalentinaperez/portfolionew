import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navgeneral from "./Nav general/Navgeneral";
import Home from "./Home/Home";
import Diseño from "./Diseño/Diseño";
import Programacion from "./Programacion/Programacion";
import Contacto from "./Contacto/Contacto";
import DiseñoGrafico from "./DiseñoGrafico/DiseñoGrafico";

function App() {
  return (
    <div>
      <Navgeneral />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diseño" element={<Diseño />} />
        <Route path="/programacion" element={<Programacion />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/diseñografico" element={<DiseñoGrafico />} />
      </Routes>
    </div>
  );
}

export default App;
