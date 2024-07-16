import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPokemon = createAsyncThunk(
    'pokemon/fetchPokemon',
    async ({ generationId, type }, thunkAPI) => {
        const generationResponse = await axios.get(`https://pokeapi.co/api/v2/generation/${generationId}/`);
        const typeResponse = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);

        const generationData = generationResponse.data;
        const typeData = typeResponse.data;

        const generationPokemon = generationData.pokemon_species.map(species => species.name);
        const typePokemon = typeData.pokemon.map(pokemon => pokemon.pokemon.name);

        const matchingPokemon = generationPokemon.filter(pokemon => typePokemon.includes(pokemon));

        return matchingPokemon;
    }
);

export const fetchPokemonDetails = createAsyncThunk(
    'pokemon/fetchPokemonDetails',
    async (pokemonName, thunkAPI) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        return response.data;
    }
);

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: { entities: [], loading: 'idle', error: null, details: {} },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchPokemon.pending, (state, action) => {
                state.loading = 'loading';
            })
            .addCase(fetchPokemon.fulfilled, (state, action) => {
                state.loading = 'idle';
                state.entities = action.payload;
            })
            .addCase(fetchPokemon.rejected, (state, action) => {
                state.loading = 'idle';
                state.error = action.error.message;
            })
            .addCase(fetchPokemonDetails.fulfilled, (state, action) => {
                state.details[action.payload.name] = action.payload;
            });
    }
});

export default pokemonSlice.reducer;