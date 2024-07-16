require('dotenv').config();
const { Pokemon } = require('../models');
const { Configuration, OpenAIApi } = require("openai");

class PokemonController {
    static async createPokemon(req, res, next) {
        try {
            const { name, image } = req.body
            console.log({ name, image }, `hereee`)
            const UserId = req.user.id
            console.log(UserId, `HREEEE`)
            const newPokemon = await Pokemon.create({ name, image, UserId })
            res.status(201).json(newPokemon)
        } catch (error) {
            console.log(error)
            next(error);
        }
    }
    static async getPokemons(req, res, next) {
        try {
            const openai = new OpenAIApi(new Configuration({
                apiKey: process.env.OPENAI_API_KEY,
            }));
            const { name } = req.body;
            if (!name) {
                return res.status(400).json({ error: "Name is required" });
            }
            console.log({ name }, `hereese`)
            const response = await openai.createCompletion({
                model: "gpt-3.5-turbo",
                prompt: `Generate a detailed description for a Pokémon named ${name}.`,
                temperature: 0.7,
                max_tokens: 150,
                top_p: 1.0,
                frequency_penalty: 0.0,
                presence_penalty: 0.0,
            });
            console.log(response, `response nih`)
            res.json({ details: response.data.choices[0].text.trim() });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = PokemonController