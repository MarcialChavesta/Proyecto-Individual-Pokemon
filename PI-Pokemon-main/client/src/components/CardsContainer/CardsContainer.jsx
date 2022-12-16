import React from "react";
import pokemons from "../../data/pokemons";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = () => {
  return (
    <div className={style.cardsContainer}>
      {pokemons.map((pokemon) => {
        return (
          <div key={pokemon.id} >
            {" "}
            <Card
              id={pokemon.id}
              img={pokemon.img}
              name={pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}
              types={pokemon.types}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardsContainer;
