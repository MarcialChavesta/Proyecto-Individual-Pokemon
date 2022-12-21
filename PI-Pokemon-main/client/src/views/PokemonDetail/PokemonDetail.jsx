import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetail, clearDetail } from "../../redux/actions";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import TypesPokemonDetail from "../../components/TypesPokemonDetail/TypesPokemonDetail";
import style from "./PokemonDetail.module.css";

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
        <div className={style.bgImg}>
          <div>
            <h1 className={style.id}>{pokemonInfo.id}</h1>
            <div>
              <h1 className={style.name}>{pokemonInfo.name}</h1>
            </div>
            <div>
              <img
                src={pokemonInfo.img}
                alt={pokemonInfo.name}
                className={style.imgPok}
              />
            </div>
          </div>
          <div className={style.types}><TypesPokemonDetail types={pokemonInfo.types} /></div>
          
          <h1 className={style.peso}>Peso: {(pokemonInfo.weight)/10} kg</h1>
          <h1  className={style.altura}>Altura: {(pokemonInfo.height)/10} m</h1>
          <h1 className={style.hp}>HP: {pokemonInfo.hp}</h1>
          <div className={style.ataque}><h1 >Ataque: {pokemonInfo.attack} Defensa: {pokemonInfo.defense}</h1>
          
          </div>
          
          
        </div>
      )}
    </>
  );
};

export default PokemonDetail;
