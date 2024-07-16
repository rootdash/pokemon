import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './slices/pokemonSlice';

export default configureStore({
    reducer: {
        pokemon: pokemonReducer
    }
});