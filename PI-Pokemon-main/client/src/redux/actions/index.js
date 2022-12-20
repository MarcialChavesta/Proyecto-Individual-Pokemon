import axios from "axios";
import { GET_POKEMONS, LOADING, GET_TYPES, GET_POKEMON_DETAIL, CLEAR_DETAIL } from "../types";

/* HACIENDO PROMESAS*/
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

/* PRACTICANDO ASYNC AWAIT*/

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
    console.log(error)
   }
  };
};

export function clearDetail() {
  return { type: CLEAR_DETAIL, payload:{} };
}


/* export function getPokemonDetail(id) {
  return async function (dispatch) {
    const pokeInfo = await axios.get(`http://localhost:3001/pokemons/${id}`);
    return dispatch({ type: GET_POKEMON_DETAIL, payload: pokeInfo.data });
  };
} */
