const { register, login, googleLogin } = require("../controllers/AuthController");
const { createPokemon, getPokemons } = require("../controllers/PokemonController");
const isAuthorized = require("../middlewares/Auth");

const router = require(`express`).Router();

router.post(`/register`, register)
router.post(`/login`, login)
router.post(`/google-login`, googleLogin)

router.get(`/`, isAuthorized, (req, res) => res.send(`Hello World!`))
router.post(`/pokemon`, isAuthorized, createPokemon)
router.post(`/get-pokemons`, isAuthorized, getPokemons)
module.exports = router