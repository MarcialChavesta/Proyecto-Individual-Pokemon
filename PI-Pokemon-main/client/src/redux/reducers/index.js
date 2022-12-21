import {
  GET_POKEMONS,
  GET_POKEMON_DETAIL,
  GET_TYPES,
  LOADING,
  CLEAR_DETAIL,
  ORDER_AZ,
  ORDER_ZA,
  ORDER_ATTACK_ASC,
  ORDER_ATTACK_DESC,
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
        loading: false,
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        pokemonDetail: action.payload,
      };
    case ORDER_AZ:
      let resultAZ = state.pokemons.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        return 0;
      });
      return {
        ...state,
        pokemons: resultAZ,
      };
    case ORDER_ZA:
      let resultZA = state.pokemons.sort((a, b) => {
        if (b.name.toLowerCase() > a.name.toLowerCase()) return 1;
        if (b.name.toLowerCase() < a.name.toLowerCase()) return -1;
        return 0;
      });
      return {
        ...state,
        pokemons: resultZA,
      };
    case ORDER_ATTACK_ASC:
      let resultAsc = state.pokemons.sort((a, b) => a.attack - b.attack);
      return {
        ...state,
        pokemons: resultAsc,
      };
    case ORDER_ATTACK_DESC:
      let resultDesc = state.pokemons.sort((a, b) =>b.attack - a.attack);
      return {
        ...state,
        pokemons: resultDesc,
      };
    default:
      return state;
  }
};
export default rootReducer;
