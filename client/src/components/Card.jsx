
import { useState } from 'react';
import api from '../../utils/api/api';

const Card = ({ id, name, image }) => {
    const dialogId = `dialog-${id}`;
    console.log(image.props.src, `image nih`)
    const [pokemonDetails, setPokemonDetails] = useState('Loading details...');
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const handleCatch = async () => {
        try {
            const response = await api.post('/pokemon', {
                name: name,
                image: image.props.src
            }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            });

            alert('Saved successfully!');
        } catch (error) {

            console.log(error);
            console.error('Failed to save:', error);
            alert('Failed to save.');
        }

    };
    const fetchPokemonDetails = async () => {
        try {
            const response = await api.post('/get-pokemons', {
                name: name
            }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            });
            setPokemonDetails(response.data.details);
        } catch (error) {
            console.error('Failed to fetch details:', error);
            setPokemonDetails('Failed to load details.');
        }
    };
    const handleDetailsClick = () => {
        fetchPokemonDetails();
        document.getElementById(dialogId).showModal();
    };
    return (
        <div className="w-64 h-64 flex items-center justify-center ">
            <div className="nes-container is-rounded flex flex-col items-center justify-center">
                <h1>{capitalizeFirstLetter(name)}</h1>
                <p>{image}</p>
                <section>
                    <button
                        type="button"
                        className="nes-btn is-primary"
                        onClick={handleDetailsClick}
                    >
                        -Details-
                    </button>
                    <dialog className="nes-dialog gap-2" id={dialogId}>
                        <form onSubmit={handleCatch} method="dialog">
                            <p className="title">{capitalizeFirstLetter(name)}</p>
                            <p>{pokemonDetails}</p>
                            <menu className="dialog-menu ">
                                <button className="nes-btn" onClick={() => document.getElementById(dialogId).close()}>Cancel</button>
                                <button className="nes-btn is-primary" >Catch</button>
                            </menu>
                        </form>
                    </dialog>
                </section>

            </div>
        </div>
    );
}

export default Card;