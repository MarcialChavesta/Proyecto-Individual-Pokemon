import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetail, clearDetail } from "../../redux/actions";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import TypesPokemonDetail from "../../components/TypesPokemonDetail/TypesPokemonDetail";

const PokemonDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(clearDetail());
    dispatch(getPokemonDetail(id));
  }, [dispatch, id]);
  const pokemonInfo = useSelector((state) => state.pokemonDetail);
  const loading = useSelector((state) => state.loading);
  console.log(pokemonInfo);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
            <h1>N°: {pokemonInfo.id}</h1>
            <img src={pokemonInfo.img} alt ={pokemonInfo.name}/>
          <h1>Nombre: {pokemonInfo.name}</h1>
          <h1>HP: {pokemonInfo.hp}</h1>
          <h1>Ataque: {pokemonInfo.attack}</h1>
          <h1>Defensa: {pokemonInfo.defense}</h1>
          <h1>Peso: {pokemonInfo.weight}</h1>
          <h1>Altura: {pokemonInfo.height}</h1>
          <TypesPokemonDetail types={pokemonInfo.types}/>
         

        </div>
      )}
    </>
  );
};

export default PokemonDetail;
