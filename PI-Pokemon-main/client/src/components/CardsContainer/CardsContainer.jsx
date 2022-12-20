import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
/* import pokemons from "../../data/pokemons"; */
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import style from "./CardsContainer.module.css";
import { getPokemons } from "../../redux/actions";

const CardsContainer = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={style.cardsContainer}>
          {pokemons.map((pokemon) => {
            return (
              <div key={pokemon.id}>
                {" "}
                <Card
                  id={pokemon.id}
                  img={pokemon.img}
                  name={
                    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
                  }
                  types={pokemon.types}
                />
              </div>
            );
          })}
          
        </div>
      )}
    </>
  );
};

export default CardsContainer;
