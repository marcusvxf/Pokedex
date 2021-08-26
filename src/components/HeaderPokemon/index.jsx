import React, { useContext } from 'react';
import { firstContext } from '../../Store/store';
import {  searchPoke } from '../../Store/actions/actionPokemon';
import { Container } from './style';


const HeaderPokemon = ()=> {

    const {state,dispatch} = useContext(firstContext)

    const next = (i)=>{
        let id
        if(i === -1){
            if(state.pokemon.id === 1){
                id = 898
                searchPoke(dispatch,id)

            }else{
                id = state.pokemon.id + i
                searchPoke(dispatch,id)
            }
        }else{
            if(state.pokemon.id === 898){
                id = 1
                searchPoke(dispatch,id)

            }else{
                id = state.pokemon.id + i
                searchPoke(dispatch,id)  
            }
        }
    }

    return(
        <Container>
        <div>
            <button onClick={()=>next(-1)}>Numero {state.pokemon.id -1}</button>
            <button onClick={()=>next(1)}>Numero {state.pokemon.id +1}</button>
        </div>

        </ Container>
    )

}

export default HeaderPokemon