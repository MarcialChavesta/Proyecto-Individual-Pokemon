import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getTypes, createPokemon } from "../../redux/actions";
import style from "../CreatePokemon/CreatePokemon.module.css";
import { validations } from "../CreatePokemon/CreatePokemonValidate.jsx";
import swal from "sweetalert";


const CreatePokemon = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const types = useSelector((state) => state.types);
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(true);
  const [input, setInput] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    img: "",
    types: [],
  });

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setInput({
      ...input,
      [property]: value,
    });
    setErrors(validations({ ...input, [property]: value }));
  };

  const handleSelect = (e) => {
    if (!input.types.includes(e.target.value))
      setInput({
        ...input,
        types: [...input.types, e.target.value],
      });
  };
  const alertCreated = () => {
    swal({
      title: "Pokémon creado exitosamente",
      text: "¿Deseas crear otro pokémon?",
      icon: "success",
      buttons: ["No", "Sí"],
    }).then((respuesta) => {
      if (respuesta) {
        history.push("/createpokemon");
      } else {
        history.push("/pokemons");
      }
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    if (
      input.name &&
      input.hp &&
      input.attack &&
      input.defense &&
      input.speed &&
      input.height &&
      input.weight &&
      input.img
    ) {
      dispatch(createPokemon(input));
      alertCreated();
      setInput({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        img: "",
        types: [],
      });
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      types: input.types.filter((type) => type !== e.target.value),
    });
  };

  useEffect(() => {
    if (
      input.name.length > 0 &&
      input.types.length > 0 &&
      input.types.length < 3 &&
      !errors.hasOwnProperty("img") &&
      !errors.hasOwnProperty("hp") &&
      !errors.hasOwnProperty("attack") &&
      !errors.hasOwnProperty("defense") &&
      !errors.hasOwnProperty("speed") &&
      !errors.hasOwnProperty("height") &&
      !errors.hasOwnProperty("weight")
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [errors, input, setDisabled]);

  return (
    <div className={style.create_container}>
      <div className={style.logo}>
        <h1 className={style.h1}>
          <i> Crea un pokémon</i>
        </h1>
      </div>
      <div className={style.createPokemon}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={style.fadeBox}>
            <div>
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                value={input.name}
                name="name"
                onChange={handleChange}
                placeholder={errors.name}
                autoComplete="off"
              />
              {errors.name && (
                <p className={style.errorInput}> {errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="hp">Fuerza:</label>
              <input
                type="number"
                value={input.hp}
                name="hp"
                onChange={handleChange}
                placeholder="Fuerza"
                title="Valor entre 1 y 150"
              />
              {errors.hp && <p className={style.errorInput}>{errors.hp}</p>}
            </div>
            <div>
              <label htmlFor="attack">Ataque: </label>
              <input
                type="number"
                value={input.attack}
                name="attack"
                onChange={handleChange}
                placeholder="Ataque"
                title="Valor entre 1 y 150"
              />
              {errors.attack && (
                <p className={style.errorInput}>{errors.attack}</p>
              )}
            </div>
            <div>
              <label htmlFor="defense">Defensa: </label>
              <input
                type="number"
                value={input.defense}
                name="defense"
                onChange={handleChange}
                placeholder="Defensa"
                title="Valor entre 1 y 150"
              />
              {errors.defense && (
                <p className={style.errorInput}>{errors.defense}</p>
              )}
            </div>
            <div>
              <label htmlFor="speed">Velocidad: </label>
              <input
                type="number"
                value={input.speed}
                name="speed"
                onChange={handleChange}
                placeholder="Velocidad"
                title="Valor entre 1 y 150"
              />
              {errors.speed && (
                <p className={style.errorInput}>{errors.speed}</p>
              )}
            </div>
            <div>
              <label htmlFor="height">Altura(m): </label>
              <input
                type="number"
                value={input.height}
                name="height"
                onChange={handleChange}
                placeholder="Altura"
                title="Valor entre 1 y 3"
              />
              {errors.height && (
                <p className={style.errorInput}>{errors.height}</p>
              )}
            </div>
            <div>
              <label htmlFor="weight">Peso(Kg): </label>
              <input
                type="number"
                value={input.weight}
                name="weight"
                onChange={handleChange}
                placeholder="Peso"
                title="Valor entre 1 y 250"
              />
              {errors.weight && (
                <p className={style.errorInput}>{errors.weight}</p>
              )}
            </div>
            <div>
              <label htmlFor="img">Imagen: </label>
              <input
                alt="not found"
                value={input.img}
                name="img"
                title="En formato URL"
                onChange={handleChange}
              />
              {errors.img && <p className={style.errorInput}>{errors.img}</p>}
            </div>
            <div>
              <label>Tipo</label>
              <select className={style.typesSelect} onChange={handleSelect}>
                <option default>Selecciona</option>
                {types
                  .filter((type) => type.name !== "unknown")
                  .map((type) => (
                    <option key={type.id} value={type.name}>
                      {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                    </option>
                  ))}
              </select>
              <div>
                <div className={style.types}>
                  <div className={style.labelTypes}>
                    {input.types.map((e) => (
                      <div key={e}>
                        <button value={e} onClick={handleDelete}>
                          x
                        </button>
                        <h4 key={e} value={e} className={style.type}>
                          {e}
                        </h4>
                        {input.types.length > 2 ? (
                          <p className={style.maxTwoTypes}>
                            Seleccione Máximo 2 Tipos
                          </p>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              disabled={disabled}
              className={disabled ? style.btnSend : style.button}
            >
              Crear pokémon
            </button>
            <Link to="/pokemons">
              {"  "}
              <button className={style.button}>Volver</button>
            </Link>
          </div>
        </form>
      </div>

      <div className={style.circle1}>
        <div className={style.innerCirlce1}>
          <h2> </h2>
        </div>
      </div>
    </div>
  );
};

export default CreatePokemon;
