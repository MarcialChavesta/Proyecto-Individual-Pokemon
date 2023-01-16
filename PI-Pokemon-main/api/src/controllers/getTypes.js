const axios = require("axios");
const { Type } = require("../db");

const getTypes = async (req, res) => {
  try {
    const typesDb = await Type.findAll();
    //console.log(typesDb)
    if (!typesDb.length) {
      let typesAPI = await axios.get(`https://pokeapi.co/api/v2/type`);
      // console.log(typesAPI)
      typesAPI = await typesAPI.data.results.map((type) => {
        return { name: type.name }; //Aquí estaba la razón por la cual me guardaba los tipos como array de objetos
      });
      /* console.log(typesAPI.map(e=>e.name)) */
      await Type.bulkCreate(typesAPI);
      const newCallTypesDb = await Type.findAll();
      //console.log(newCallTypesDb)
      return res.status(200).json(newCallTypesDb);
    }
    res.status(200).json(typesDb);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { getTypes };
