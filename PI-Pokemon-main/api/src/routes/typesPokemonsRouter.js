const { Router } = require("express");
const typesPokemonsRouter = Router();
const{getTypes} = require("../controllers/getTypes")

typesPokemonsRouter.get("/",getTypes)

module.exports = typesPokemonsRouter