import React from "react";
import style from "../LandingPage/LandingPage.module.css";
import { Link } from "react-router-dom";

import fondoLanding from "../.././images/fondoWeb.mp4";

const LandingPage = () => {
  return (
    <div className={style.backgPrincipal}>
      <div className={style.wrap}>
        <Link to="/pokemons">
          <button className={style.button}>INGRESAR</button>
        </Link>
        <video src={fondoLanding} autoPlay loop muted></video>
      </div>
    </div>
  );
};

export default LandingPage;
