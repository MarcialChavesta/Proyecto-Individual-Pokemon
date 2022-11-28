const checkCreatePokemon = (req, res, next) => {
    const { name } = req.body;
    if (!name) {
      return res
        .status(404)
        .send("¡ The name is required fields !");
    }
    next();
  };
  
  module.exports = { checkCreatePokemon };
  