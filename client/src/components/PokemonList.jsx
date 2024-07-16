import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemon, fetchPokemonDetails } from '../slices/pokemonSlice';
import Card from './Card';
const PokemonList = ({ selected, type }) => {
    const dispatch = useDispatch();
    const pokemon = useSelector(state => state.pokemon.entities);
    const loading = useSelector(state => state.pokemon.loading);
    const error = useSelector(state => state.pokemon.error);
    const details = useSelector(state => state.pokemon.details);

    const [fetchedDetails, setFetchedDetails] = useState(false);

    useEffect(() => {
        setFetchedDetails(false);
    }, [selected, type]);

    useEffect(() => {
        if (!fetchedDetails) {
            dispatch(fetchPokemon({ generationId: selected, type: type }))
                .then(async () => {
                    await Promise.all(pokemon.map(p => dispatch(fetchPokemonDetails(p))));
                    setFetchedDetails(true);
                });
        }
    }, [dispatch, pokemon, fetchedDetails, selected, type]);

    console.log(details)
    return (
        <div className='flex flex-wrap overflow-auto justify-center'>
            {loading === 'loading' && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {pokemon && pokemon.map(p => (
                <div key={p}>
                    {details[p] && (
                        <Card
                            id={details[p].name}
                            name={details[p].name}
                            image={<img src={details[p].sprites.front_default} alt={details[p].name} />}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}

export default PokemonList;