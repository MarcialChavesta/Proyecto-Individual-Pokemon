import { GET_POKEMONS, LOADING } from "../types";

const initialState = {
  pokemons: [],
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
    default:
      return state;
  }
};
export default rootReducer;
