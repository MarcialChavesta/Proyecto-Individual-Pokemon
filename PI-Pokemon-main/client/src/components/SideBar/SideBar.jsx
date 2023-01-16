import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { IoMdClose, IoMdOptions } from "react-icons/io";
import {
  filterType,
  filterCreated,
  orderByName,
  orderByAttack,
  getTypes,
  getPokemons,
  /* filterSpeed, */
} from "../../redux/actions";
import style from "./SideBar.module.css";
import clean from "../../images/iconoLimpiar.png";

const SideBar = ({ setCurrentPage }) => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const [active, setActive] = useState(false);
  const activateNav = () => setActive(!active);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const handleSortName = (e) => {
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
  };

  const handleSortAttack = (e) => {
    dispatch(orderByAttack(e.target.value));
    setCurrentPage(1);
  };
  const handleFilterType = (e) => {
    dispatch(filterType(e.target.value));
    setCurrentPage(1);
  };
  const handleFilterCreated = (e) => {
    dispatch(filterCreated(e.target.value));
    setCurrentPage(1);
  };

  const handleClean = () => {
    dispatch(getPokemons());
    setCurrentPage(1);
  };


  /* const filterSpeedH =()=>{
    dispatch(filterSpeed());
    setCurrentPage(1);

  } */
  return (
    <div className={active ? style.header : style.headerMobile}>
      <div className={style.menuIcon} onClick={activateNav}>
        {!active ? "Opciones" : ""}
      </div>
      <div className={style.menuIcon} onClick={activateNav}>
        {!active ? "" : <IoMdClose className={style.menu} />}
      </div>
      <div className={style.menuIcon} onClick={activateNav}>
        {!active ? <IoMdOptions className={style.menu} /> : "Filtrar por"}
      </div>
      <nav>
        <ul className={active ? style.ulItem : style.ulItemOicon}>
          <li className={style.icon}>
            <select onChange={handleFilterCreated}>
              <option value="all">ORIGEN</option>
              <option value="existing">PokeAPI</option>
              <option value="created">Base de datos</option>
            </select>

            <select onChange={handleFilterType}>
              <option value="default">TIPO</option>
              {types
                ?.filter((e) => e.name !== "unknown")
                .map((e) => (
                  <option key={e.name} value={e.name}>
                    {e.name.charAt(0).toUpperCase() + e.name.slice(1)}
                  </option>
                ))}
            </select>
          </li>
        </ul>
      </nav>
      <div className={style.menuIcon} onClick={activateNav}>
        {!active ? " " : "Ordenar por"}
      </div>
      <nav>
        <ul className={active ? style.ulItem : style.ulItemOicon}>
          <li className={style.icon}>
            <select onChange={handleSortName}>
              <option value="all">NOMBRE</option>
              <option value="ascending"> ▼ A - Z</option>
              <option value="descending"> ▲ Z - A</option>
            </select>
            <select onChange={handleSortAttack}>
              <option value="default">ATAQUE</option>
              <option value="powerful"> - Ataque</option>
              <option value="weak"> + Ataque</option>
            </select>
            <img
              src={clean}
              alt="Clean"
              onClick={handleClean}
              className={style.clean}
              title="Limpiar filtros"
            />
            {/* <button onclick={filterSpeedH}>FILTRAR CRITERIOR</button> */}
        
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
