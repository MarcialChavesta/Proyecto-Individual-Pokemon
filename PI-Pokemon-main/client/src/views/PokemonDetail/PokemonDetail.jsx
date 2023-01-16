import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetail, clearDetail } from "../../redux/actions";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import TypesPokemonDetail from "../../components/TypesPokemonDetail/TypesPokemonDetail";
import style from "./PokemonDetail.module.css";
import { Link } from "react-router-dom";
import icoHome from "../../images/iconoAtras.png";

const PokemonDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(clearDetail());
    dispatch(getPokemonDetail(id));
  }, [dispatch, id]);
  const pokemonInfo = useSelector((state) => state.pokemonDetail);
  const loading = useSelector((state) => state.loading);
  let idRedux;
  pokemonInfo.id < 200 ? (idRedux = pokemonInfo.id) : (idRedux = "||");

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className={style.backg}>
            <div className={style.bgImg}>
              <div>
                <h1 className={!(idRedux>99)? style.id:style.id2}>{idRedux}</h1>
              </div>
              <div>
                <h1 className={!(idRedux>99)? style.name:style.name2}>{pokemonInfo.name}</h1>
              </div >
              <div >
                <img
                  src={pokemonInfo.img}
                  alt={pokemonInfo.name}
                  className={style.imgPok}
                />
              </div>

              <div className={style.types}>
                <TypesPokemonDetail types={pokemonInfo.types} />
              </div>
              <div className={style.weight}>
                <h1>Peso: {(pokemonInfo.createdInDb===true)?pokemonInfo.weight:pokemonInfo.weight / 10} Kg</h1>
              </div>
              <div className={style.height}>
                <h1>Altura: {(pokemonInfo.createdInDb===true)?pokemonInfo.height:pokemonInfo.height / 10} m</h1>
              </div>
              <div>
                <div className={style.hp}>
                  <h1>Fuerza: {pokemonInfo.hp}</h1>
                </div>
                <div className={style.speed}>
                  <h1>Velocidad:{pokemonInfo.speed}</h1>
                </div>
                <div className={style.defense}>
                  <h1> Defensa:{pokemonInfo.defense} </h1>
                </div>{" "}
                <div className={style.attack}>
                  <h1> Ataque:{pokemonInfo.attack} </h1>
                </div>
              </div>
            </div>
          </div>
          <div className={style.botom}>
            <Link to="/pokemons">
              <img
                src={icoHome}
                alt="Landing Page"
                className={style.iconInicio}
              />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonDetail;
