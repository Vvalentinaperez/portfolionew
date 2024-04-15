import React from "react";
import Waves from "./Waves";
import "./Home.css";
import About from "./About";
import WaveSec from "./WaveSec";

const Home = () => {
  return (
    <div className="containerHome">
      <div className="textprincipal">
        “nunca olvides <br /> por que empezaste”
      </div>
      <div className="textsecundario">
        <p>
          Una vez escuche, que la vida es como una hoja en blanco y que <br />{" "}
          somos nosotros los encargados de trazar las líneas de nuestro futuro.{" "}
          <br />
          Te invito a apreciar mis primeros trazos.{" "}
        </p>
      </div>
      <Waves />
      <WaveSec />
      <About />
    </div>
  );
};

export default Home;
