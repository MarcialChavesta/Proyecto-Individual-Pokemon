import {
  GET_POKEMONS,
  GET_POKEMON_DETAIL,
  GET_TYPES,
  LOADING,
  CLEAR_DETAIL,
  ORDER_BY_NAME,
  ORDER_BY_ATTACK,
  FILTER_TYPES,
  FILTER_CREATED,
  GET_POKEMON_NAME,
  CREATE_POKEMON,
  FILTER_SPEED,
} from "../types";

const initialState = {
  pokemons: [],
  allPokemons: [],
  pokemonFilteredTypes: [],
  pokemonFilteredSpeed: [],
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
        allPokemons: action.payload,
        pokemonFilteredTypes: action.payload,
        pokemonFilteredSpeed: action.payload,

        loading: false,
      };
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };

    case GET_POKEMON_NAME:
      return {
        ...state,
        pokemons: action.payload,
        loading: false,
      };
    case GET_POKEMON_DETAIL:
      return {
        ...state,
        pokemonDetail: action.payload,
        loading: false,
      };

    case CREATE_POKEMON:
      return {
        ...state,
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        pokemonDetail: action.payload,
      };
    case ORDER_BY_NAME:
      const currentPokemonsName = [...state.pokemons];
      if (action.payload === "all") {
        currentPokemonsName.sort((a, b) => {
          if (a.id > b.id) return 1;
          if (a.id < b.id) return -1;
          return 0;
        });
      }
      if (action.payload === "ascending") {
        currentPokemonsName.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          return 0;
        });
      }
      if (action.payload === "descending") {
        currentPokemonsName.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
          if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
          return 0;
        });
      }
      return {
        ...state,
        pokemons: currentPokemonsName,
      };

    case ORDER_BY_ATTACK:
      const currentPokemonsAttack = [...state.pokemons];
      if (action.payload === "default") {
        currentPokemonsAttack.sort((a, b) => {
          if (a.id > b.id) return 1;
          if (a.id < b.id) return -1;
          return 0;
        });
      }
      if (action.payload === "powerful") {
        currentPokemonsAttack.sort((a, b) => {
          if (a.attack > b.attack) return 1;
          if (a.attack < b.attack) return -1;
          return 0;
        });
      }
      if (action.payload === "weak") {
        currentPokemonsAttack.sort((a, b) => {
          if (a.attack > b.attack) return -1;
          if (a.attack < b.attack) return 1;
          return 0;
        });
      }
      return {
        ...state,
        pokemons: currentPokemonsAttack,
      };

    case FILTER_TYPES:
      const pokemonsByType = [...state.pokemonFilteredTypes];
      if (action.payload === "default") {
        return {
          ...state,
          pokemons: pokemonsByType,
        };
      } else {
        const typeFilter = pokemonsByType.filter(
          (pokemon) =>
            pokemon.types[0] === action.payload ||
            pokemon.types[1] === action.payload ||
            pokemon.types[0]?.name === action.payload ||
            pokemon.types[1]?.name === action.payload
        );

        return {
          ...state,
          pokemons: typeFilter,
        };
      }
    case FILTER_CREATED:
      const currentPokemonsOrigin = [...state.allPokemons];
      if (action.payload === "existing") {
        const createdInApi = currentPokemonsOrigin.filter(
          (pokemon) => pokemon.id < 200
        );
        return {
          ...state,
          pokemons: createdInApi,
          pokemonFilteredTypes: createdInApi,
        };
      } else if (action.payload === "created") {
        const createdInDb = currentPokemonsOrigin.filter(
          (pokemon) => pokemon.id.length > 3
        );
        return {
          ...state,
          pokemons: createdInDb,
          pokemonFilteredTypes: createdInDb,
        };
      }
      return {
        ...state,
        pokemons: currentPokemonsOrigin,
        pokemonFilteredTypes: currentPokemonsOrigin,
      };

    case FILTER_SPEED:
      const currentPokemonsSpeed = [...state.pokemons];
      const currentSpeed = currentPokemonsSpeed.filter(
        (pokemon) => pokemon.speed > 100
      );
      return {
        ...state,
        pokemons: currentSpeed,
      };
    default:
      return state;
  }
};
export default rootReducer;
