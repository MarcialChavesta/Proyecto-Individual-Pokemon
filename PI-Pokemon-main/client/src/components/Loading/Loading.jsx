import React from "react";
import style from "./Loading.module.css";
import imgLoading from "../../images/loading.gif";

const Loading = () => {
  return (
    <div className={style.containerLoading}>
      <img src={imgLoading} className={style.gifLoading} alt="Cargando" />
      <div className={style.pokebolita}>
        <div className={style.pokebolabotao}></div>
      </div>
    </div>
  );
};

export default Loading;
