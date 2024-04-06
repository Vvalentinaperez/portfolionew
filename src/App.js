import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navgeneral from "./Nav general/Navgeneral";
import Home from "./Home/Home";
import Diseño from "./Diseño/Diseño";
import Programacion from "./Programacion/Programacion";
import Contacto from "./Contacto/Contacto";

function App() {
  return (
    <div>
      <Navgeneral />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diseño" element={<Diseño />} />
        <Route path="/programacion" element={<Programacion />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;
