import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
/* import pokemons from "../../data/pokemons"; */
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import Paginated from "../Paginated/Paginated";
import style from "./CardsContainer.module.css";
import { getPokemons } from "../../redux/actions";
import reload from "../../images/reload-icon.png";
import SideBar from "../SideBar/SideBar";
import SearchBar from "../NavBar/SearchBar";

const CardsContainer = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const pokemonsPerPage = 12;
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = pokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );
  const pages = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const handleClick = () => {
    dispatch(getPokemons());
    setCurrentPage(1);
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={style.menuContainer}>
            <SideBar setCurrentPage={setCurrentPage} />
            <SearchBar setCurrentPage={setCurrentPage} />
            <Paginated
              currentPage={currentPage}
              pageNumber={pages}
              amountPerPage={pokemonsPerPage}
              totalAmount={pokemons.length}
            />
            <div>
              <img
                src={reload}
                alt="Reload"
                onClick={handleClick}
                className={style.reload}
                title="Recargar página"
              />
            </div>
          </div>
          <div className={style.cardsContainer}>
            {currentPokemons.map((pokemon) => {
              return (
                <div key={pokemon.id}>
                  {" "}
                  <Card
                    id={pokemon.id}
                    hp={pokemon.hp}
                    attack={pokemon.attack}
                    defense={pokemon.defense}
                    height={pokemon.height}
                    weight={pokemon.weight}
                    speed={pokemon.speed}
                    img={pokemon.img}
                    name={
                      pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)
                    }
                    types={pokemon.types}
                    createdInDb={pokemon.createdInDb}
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default CardsContainer;
