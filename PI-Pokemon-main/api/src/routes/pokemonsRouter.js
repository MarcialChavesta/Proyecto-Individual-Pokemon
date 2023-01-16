const { Router } = require("express");
const pokemonsRouter = Router();
const {
  getAllPokemons,
  getPokemonsById,
  createPokemon,
} = require("../controllers/getPokemons");
const { checkCreatePokemon } = require("../middleware/checkCreatePokemon");

pokemonsRouter.get("/", getAllPokemons);
pokemonsRouter.get("/:id", getPokemonsById);
pokemonsRouter.post("/", checkCreatePokemon, createPokemon);

module.exports = pokemonsRouter;
