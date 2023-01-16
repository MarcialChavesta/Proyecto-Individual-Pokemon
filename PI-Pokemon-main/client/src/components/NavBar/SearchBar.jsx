import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonsName } from "../../redux/actions";
import style from "./NavBar.module.css";
import Lupa from "../../images/lupa.png";
import { Link } from "react-router-dom";
import inicio from "../../images/iconoInicio.jpg";
import about from "../../images/aboutme.png";
import swal from "sweetalert";

export default function SearchBar({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const handleInputChange = (e) => setName(e.target.value);
  const handleSubmit = () => {
    if (name) {
      dispatch(getPokemonsName(name));
      setName("");
      setCurrentPage(1);
    } else {
      swal({
        title: "ERROR",
        text: "Debes ingresar un nombre",
        icon: "warning",
        button: "Aceptar",
      });
    }
  };

  return (
    <div className={style.bgNavContainer}>
      <div className={style.bgSearch}>
        <div className={style.bgSearchBar}>
          <div>
            <Link to="/">
              <img src={inicio} alt="Landing Page" title="Landing Page" />
            </Link>
            <Link to="/about">
              <img src={about} alt="about me" title="Acerca de mí" />
            </Link>
          </div>
          <div>
            <Link to="/createPokemon">
              <button className={style.createButton}>Crea un pokémon</button>
            </Link>
          </div>
          <div>
            <input
              type="text"
              placeholder="Encuentráme...!!!"
              onChange={handleInputChange}
              value={name}
            />
            <img
              src={Lupa}
              alt="Buscar"
              onClick={handleSubmit}
              title="Busca un pokémon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
