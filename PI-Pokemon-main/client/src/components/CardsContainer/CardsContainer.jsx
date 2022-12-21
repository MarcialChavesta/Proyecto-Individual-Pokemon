import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
/* import pokemons from "../../data/pokemons"; */
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import Paginated from "../Paginated/Paginated";
import style from "./CardsContainer.module.css";
import { getPokemons, orderByAZ, orderByZA,orderAttackAsc,orderAttackDesc } from "../../redux/actions";

const CardsContainer = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

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

  const [refreshState, setRefreshState] = useState(false);

  const handleSortTitle = (e) => {
    if (e.target.value === "orderAZ") {
      dispatch(orderByAZ(refreshState));
      setRefreshState(true);
      setCurrentPage(1);
    } else if (e.target.value === "orderZA") {
      dispatch(orderByZA(refreshState));
      setRefreshState((prevState) => !prevState);
      setCurrentPage(1);
    }
  };

  const handleSortAttack = (e) => {
    if (e.target.value === "Asc") {
      dispatch(orderAttackAsc(refreshState));
      setRefreshState(true);
      setCurrentPage(1);
    } else if (e.target.value === "Desc") {
      dispatch(orderAttackDesc(refreshState));
      setRefreshState((prevState) => !prevState);
      setCurrentPage(1);
    }
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={style.menuContainer}>
            <div className={style.subMenuContainer}>
              <div className={style.paginatedList}>
                <select onChange={handleSortTitle} defaultValue="default">
                  <option default>Order by Name</option>
                  <option value="orderAZ"> ▼ A-Z</option>
                  <option value="orderZA">▲ Z-A</option>
                </select>
                <select onChange={handleSortAttack} defaultValue="default">
                  <option default>Order by Attack</option>
                  <option value="Asc"> ▼ Ascendente</option>
                  <option value="Desc">▲ Descendente</option>
                </select>
                <Paginated
                  currentPage={currentPage}
                  pageNumber={pages}
                  amountPerPage={pokemonsPerPage}
                  totalAmount={pokemons.length}
                />
              </div>
            </div>
          </div>
          <div className={style.cardsContainer}>
            {currentPokemons.map((pokemon) => {
              return (
                <div key={pokemon.id}>
                  {" "}
                  <Card
                    id={pokemon.id}
                    img={pokemon.img}
                    name={
                      pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)
                    }
                    types={pokemon.types}
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
