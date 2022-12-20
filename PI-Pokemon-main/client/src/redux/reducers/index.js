import {
  GET_POKEMONS,
  GET_POKEMON_DETAIL,
  GET_TYPES,
  LOADING,
  CLEAR_DETAIL,
} from "../types";

const initialState = {
  pokemons: [],
  types: [],
  pokemonDetail: {},
  loading: false,
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        loading: false,
      };
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case GET_POKEMON_DETAIL:
      return {
        ...state,
        pokemonDetail: action.payload,
        loading:false,
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        pokemonDetail: action.payload,
      };
    default:
      return state;
  }
};
export default rootReducer;
