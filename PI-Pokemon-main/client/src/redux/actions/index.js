import axios from "axios";
import {
  GET_POKEMONS,
  LOADING,
  GET_TYPES,
  GET_POKEMON_DETAIL,
  CLEAR_DETAIL,
  ORDER_BY_NAME,
  ORDER_BY_ATTACK,
  FILTER_TYPES,
  FILTER_CREATED,
  GET_POKEMON_NAME,
  CREATE_POKEMON,
  FILTER_SPEED,
} from "../types";

import swal from "sweetalert";
/* PRACTICANDO PROMESAS*/
export const getPokemons = () => {
  return (dispatch) => {
    dispatch({
      type: LOADING,
    });
    axios
      .get("http://localhost:3001/pokemons")
      .then((response) => {
        dispatch({
          type: GET_POKEMONS,
          payload: response.data,
        });
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
};

export const getTypes = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/types")
      .then((response) => {
        dispatch({
          type: GET_TYPES,
          payload: response.data,
        });
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
};

export const createPokemon = (value) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3001/pokemons", value)
      .then((response) => {
        dispatch({ type: CREATE_POKEMON, payload: response.value });
      })
      .catch((error) => {
        alertCreated()
      });
  };
};

const alertCreated = () => { 
  swal({
    title: "Pokémon no encontrado",
    text: "¿Deseas crearlo?",
    icon: "warning",
    buttons: ["No", "Sí"],
  }).then((respuesta) => {
    if (respuesta) {
      window.location="http://localhost:3000/createpokemon"
    } else{
      window.location="http://localhost:3000/pokemons"
    }
  });
};

/* PRACTICANDO ASYNC AWAIT*/
export function getPokemonsName(name) {
  
  return async function (dispatch) {
    dispatch({
      type: LOADING,
    });
    try {
      const pokemonName = await axios(
        `http://localhost:3001/pokemons?name=${name}`
      );
      return dispatch({ type: GET_POKEMON_NAME, payload: pokemonName.data });
    } catch (error) {
      alertCreated()
    }
  };
}

export const getPokemonDetail = (id) => {
  return async (dispatch) => {
    dispatch({
      type: LOADING,
    });
    try {
      const pokeInfo = await axios.get(`http://localhost:3001/pokemons/${id}`);
      return dispatch({
        type: GET_POKEMON_DETAIL,
        payload: pokeInfo.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

/*Empezamos con lo bueno */
export function clearDetail() {
  return { type: CLEAR_DETAIL, payload: {} };
}

export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
}
export function orderByAttack(payload) {
  return {
    type: ORDER_BY_ATTACK,
    payload,
  };
}

export function filterType(payload) {
  return {
    type: FILTER_TYPES,
    payload,
  };
}
export function filterCreated(payload) {
  return {
    type: FILTER_CREATED,
    payload,
  };
}

export function filterSpeed(payload){
  return{
    type:FILTER_SPEED,
    payload,
  }
}
