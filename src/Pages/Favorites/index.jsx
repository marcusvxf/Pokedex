import React, { useContext } from 'react';
import { firstContext } from '../../Store/store';
import { searchPoke,searchPokeCard } from '../../Store/actions/actionPokemon';
import { useHistory } from 'react-router';
import {Card} from '../../components'
import { Display, Title } from './style';

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
                <Card key={pokemon.name} src={pokemon.sprites.front_default} name={pokemon.name.replace('-',' ')} id={pokemon.id} ></Card>
        )
    }

    return(
        <>

            <Title>Pokemons Favoritos</Title>
            <Display>
                {state.favorites.length > 0 ? state.favorites.map((pokemon)=> pokemonCard(pokemon)):<div>Nao salvou nada ainda</div>}
            </Display>
            

        </>
    )

}

export default Favorite