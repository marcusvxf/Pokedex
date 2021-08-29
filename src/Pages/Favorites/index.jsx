import React, { useContext } from 'react';
import { firstContext } from '../../Store/store';
import {Card} from '../../components'
import { Display, Nothing, Title } from './style';

const Favorite = ()=>{

    const {state} = useContext(firstContext)
    

    const pokemonCard = (pokemon) => {

        return(
                <Card key={pokemon.name} src={pokemon.sprites.front_default} name={pokemon.name.replace('-',' ')} id={pokemon.id} ></Card>
        )
    }

    return(
        <>

            <Title>Pokemons Favoritos</Title>
            <Display>
                {state.favorites.length > 0 ? state.favorites.map((pokemon)=> pokemonCard(pokemon)):<Nothing> você Não salvou nada ainda, pesquise um nome ou numero.</Nothing>}
            </Display>
            

        </>
    )

}

export default Favorite