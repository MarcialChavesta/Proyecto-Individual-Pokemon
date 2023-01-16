const { Router } = require("express");

const router = Router();
const pokemonsRouter = require("./pokemonsRouter");
const typesPokemonsRouter = require("./typesPokemonsRouter");

router.use("/pokemons", pokemonsRouter);
router.use("/types", typesPokemonsRouter);

module.exports = router;
