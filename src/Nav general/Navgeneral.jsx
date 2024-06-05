import React from "react";
import "./Navgeneral.css";
import { Link } from "react-router-dom";

const Navgeneral = () => {
  return (
    <div className="container">
      <div className="navInt">
        {" "}
        <Link className="link" activeClassName="active" to="/">
          Home
        </Link>{" "}
        <Link className="link" activeClassName="active" to="/diseño">
          Diseño Ux/Ui
        </Link>{" "}
        <Link className="link" activeClassName="active" to="/diseñografico">
          Diseño Grafico
        </Link>
        <Link className="link" activeClassName="active" to="/programacion">
          Programacion
        </Link>{" "}
        <Link className="link" activeClassName="active" to="/contacto">
          Contacto
        </Link>
      </div>
    </div>
  );
};

export default Navgeneral;
