import React from "react";
import "./WaveSec.css";

const WaveSec = () => {
  return (
    <div className="wavesSec">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FF651B"
          fill-opacity="1"
          d="M0,64L48,74.7C96,85,192,107,288,106.7C384,107,480,85,576,112C672,139,768,213,864,202.7C960,192,1056,96,1152,101.3C1248,107,1344,213,1392,266.7L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default WaveSec;
