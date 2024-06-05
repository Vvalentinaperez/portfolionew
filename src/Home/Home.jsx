import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="containerHome">
      <div className="ladoIzquierdo">
        <img
          src={`${process.env.PUBLIC_URL}/yo.jpeg`}
          alt="Yo"
          className="imagenPrincipal"
        />
        <img
          src={`${process.env.PUBLIC_URL}/yo.jpeg`}
          alt="Yo"
          className="imagenSecundaria"
        />
      </div>

      <div className="ladoDerecho">
        <h1>¿QUIEN SOY?</h1>
        <p>
          Soy una mente creativa que transforma ideas en experiencias digitales
          cautivadoras. <br /> Mi pasión es capturar conceptos y llevarlos al
          lienzo digital. <br />
          Mi proceso creativo comienza captando ideas e maquetándolas con las
          herramientas implementadas en Diseño Ux/Ui, buscando colores e
          imágenes que hagan que la esencia del proyecto se note a simple vista.
          Luego, el proceso continua por llevar ese concepto al mundo del
          Front-End, materializando cada idea y haciéndolas realidad.{" "}
        </p>
      </div>
    </div>
  );
};

export default Home;
