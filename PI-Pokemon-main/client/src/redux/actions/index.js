import axios from "axios";
import { GET_POKEMONS, LOADING } from "../types";

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

