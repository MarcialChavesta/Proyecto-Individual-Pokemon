import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import iconPokebola from "../../images/detailPokebola.png"
import TypesPokemonDetail from "../../components/TypesPokemonDetail/TypesPokemonDetail";


const Card = ({ id, img, name, types }) => {
  return (
    <div className={style.card} >
      <h3>
        {name}
        <Link to={`/pokemons/${id}`}>
          <img className={style.iconPokebola}src={iconPokebola } alt="detalle"/>
         
        </Link>
      </h3>
      <div className={style.pokebola}>
        <img className={style.mediana} src={img} alt="Img not found" />
      </div>
      

      <div >
        {types ? (
          <TypesPokemonDetail types={types}/>
        ) : (
          <h5>Not types</h5>
        )}

        
         

      </div>
    </div>
  );
};

export default Card;
