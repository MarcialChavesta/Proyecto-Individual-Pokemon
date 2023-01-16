import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import detailCard from "../../images/iconoDetalle.png";
import TypesPokemonDetail from "../../components/TypesPokemonDetail/TypesPokemonDetail";
import { useState } from "react";
import logoPokemon from "../../images/logoPokemon.png";

const Card = ({
  id,
  img,
  name,
  types,
  hp,
  height,
  weight,
  attack,
  defense,
  speed,
  createdInDb,
}) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  let idRedux;
  id < 200 ? (idRedux = id) : (idRedux = "⚙");
  return (
    <div className={style.card} onClick={toggleModal}>
      {modal && (
        <div>
          <div onClick={toggleModal} className={style.encabezado}>
            <h2>N° {idRedux}: </h2>
            <h3>{name}</h3>
          </div>
          <div className={style.table}>
            <div className={style.reverseCard}>
              <h2>Altura: {createdInDb === true ? height : height / 10}m</h2>
              <h2>Peso: {createdInDb === true ? weight : weight / 10}kg</h2>
              <h2>Fuerza: {hp} </h2>
              <h2>Ataque: {attack}</h2>
              <h2>Defensa: {defense}</h2>
              <h2>Velocidad: {speed}</h2>
              <div className={style.type}>
                {types ? (
                  <TypesPokemonDetail types={types} />
                ) : (
                  <h5>Not types</h5>
                )}
                <div>
                  <img src={logoPokemon} alt="Detalle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        <Link to={`/pokemons/${id}`}>
          <img
            className={style.iconPokebola}
            src={detailCard}
            alt="detalle"
            title="Ver detalle"
          />
        </Link>
      </div>
      <h1 className={style.namePokemon}>{name}</h1>
      <div className={style.pokebola}>
        <img className={style.mediana} src={img} alt={name} title={name} />
      </div>
    </div>
  );
};

export default Card;
