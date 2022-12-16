import React from "react";
import style from "./Card.module.css";

const Card = ({ id, img, name, types }) => {
  return (
    <div className={style.card}>
      <div className={style.pokebola}>
        <img className={style.mediana} src={img} alt="Img not found" />
      </div>
      <h3>{name}</h3>
      <div>
        {types ? (
          types.map((type) => <h5 key={type}> {type} </h5>)
        ) : (
          <h5>Not types</h5>
        )}
      </div>
    </div>
  );
};

export default Card;
