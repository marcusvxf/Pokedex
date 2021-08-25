import React, { useContext } from 'react';
import { firstContext } from '../../Store/store';

const Favorite = ()=>{

    const {state} = useContext(firstContext)

    const pokemonCard = (pokemon) => {

        return(
            <div key={pokemon.name}>
                <img src = {pokemon.sprites.front_default} alt={pokemon.name} />
                <p>Nome:{pokemon.name.replace('-',' ')}</p>
                <p>Index:{pokemon.id}</p>
            </div>
        )
    }

    return(
        <>
            <hr/>
            <h1>Aqui estao seus pokemons Favoritos</h1>
            <hr/>
            {state.favorites.length > 0 ? state.favorites.map((pokemon)=> pokemonCard(pokemon)):<div>Nao salvou nada ainda</div>}

        </>
    )

}

export default Favorite