const axios = require("axios");
const { Pokemon, Type } = require("../db");

const pokemonsApi = async () => {
  try {
    let pokemonsFromApi = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100"
    );
    pokemonsFromApi = pokemonsFromApi.data.results.map((pok) => {
      return pok.url;
    });
    pokemonsFromApi = await Promise.all(pokemonsFromApi.map(axios.get));
    pokemonsFromApi = pokemonsFromApi.map((pokemon) => {
      return {
        id: pokemon.data.id,
        name: pokemon.data.name,
        hp: pokemon.data.stats.find((e) => e.stat.name === "hp").base_stat,
        attack: pokemon.data.stats.find((e) => e.stat.name === "attack")
          .base_stat,
        defense: pokemon.data.stats.find((e) => e.stat.name === "defense")
          .base_stat,
        speed: pokemon.data.stats.find((e) => e.stat.name === "speed")
          .base_stat,
        height: pokemon.data.height,
        weight: pokemon.data.weight,
        types: pokemon.data.types.map((e) => e.type.name),
        img: pokemon.data.sprites.other["official-artwork"].front_default,
      };
    });
    //console.log(pokemonsFromApi);
    return pokemonsFromApi;
  } catch (error) {
    console.log("Error: ", error);
  }
};

const pokemonsDb = async () => {
  try {
    const pokemonFromDb = await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    //console.log(pokemonFromDb);
    return pokemonFromDb;
  } catch (error) {
    console.log("Error:", error);
  }
};

const getAllPokemons = async (req, res) => {
  const { name } = req.query;
  if (!name) {
    try {
      const apiResponse = await pokemonsApi();
      const dbResponse = await pokemonsDb();
      return res.status(200).send([...apiResponse, ...dbResponse]);
    } catch (error) {
      res.status(400).send("ERROR: ", error);
    }
  } else {
    let pokemonApi = [];
    let pokemonDb = [];

    const apiResponse = await pokemonsApi();
    pokemonApi = apiResponse.filter((e) => {
      return e.name.toLowerCase().includes(name.toLowerCase());
    });
    const dbResponse = await pokemonsDb();
    pokemonDb = dbResponse.filter((e) => {
      return e.name.toLowerCase().includes(name.toLowerCase());
    });
    if (!pokemonApi.length & !pokemonDb.length) {
      return res.status(404).send("There are no results in the search");
    }
    return res.status(200).send([...pokemonApi, ...pokemonDb]);
  }
};

const pokemonsQueryById = async () => {
 try {
  const apiInfo = await pokemonsApi();
  const dbInfo = await pokemonsDb();
  const allPokemons = [...apiInfo, ...dbInfo];
  return allPokemons;
 } catch (error) {
  console.log(Error)
 }
};

const getPokemonsById = async (req, res) => {
  const { id } = req.params;
  const allPokemons = await pokemonsQueryById();
  let validate = id.includes("-");
  if (validate) {
    let dbId = await Pokemon.findByPk(id, { include: Type });
    //console.log(dbId);
    res.status(200).json([dbId]);
  } else {
    if (id) {
      const apiResponse = allPokemons.find(
        (pokemon) => pokemon.id == id
      );
      console.log(apiResponse)
      apiResponse
        ? res.status(200).json(apiResponse)
        : res.status(400).send("Error");
    }
  }
};

const createPokemon = async (req, res) => {
  try {
    const { name, hp, attack, defense, speed, height, weight, img, types } =
      req.body;
    const createPokemon = await Pokemon.create({
      name,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      img,
    });

    const typeDB = await Type.findAll({
      where: { name: types },
    });

    await createPokemon.addType(typeDB);
//console.log(createPokemon)
    res.send(`Personaje creado con éxito!!!!`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllPokemons,
  getPokemonsById,
  createPokemon,
};
