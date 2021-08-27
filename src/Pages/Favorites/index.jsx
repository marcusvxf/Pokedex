import React, { useContext } from 'react';
import { firstContext } from '../../Store/store';
import { searchPoke,searchPokeCard } from '../../Store/actions/actionPokemon';
import { useHistory } from 'react-router';

const Favorite = ()=>{

    const {state,dispatch} = useContext(firstContext)
    
    let history = useHistory()

    const searchPokemon = (pokeI) =>{
        searchPoke(dispatch,pokeI)
        searchPokeCard(dispatch,pokeI)
        history.push("/pokemon")
    }

    const pokemonCard = (pokemon) => {

        return(
            <div onClick={()=>searchPokemon(pokemon.id)} key={pokemon.name}>
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