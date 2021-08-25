import React, { useContext } from 'react';
import { firstContext } from '../../Store/store';
import {  searchPoke } from '../../Store/actions/actionPokemon';
import { useHistory } from 'react-router-dom';


const HeaderPokemon = ()=> {

    const {state,dispatch} = useContext(firstContext)
    let history = useHistory()

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

    const changePages = (page) =>{
        history.push(`/${page}`)
    }

    return(
        <>
        <div>
            <button onClick={()=>next(-1)}>Numero {state.pokemon.id -1}</button>
            <button onClick={()=>next(1)}>Numero {state.pokemon.id +1}</button>
        </div>
        <div>
            <button href="#"  onClick={()=> changePages('pokemon')}>pokemon</button>
            <button href="#"  onClick={()=> changePages('cartas')}>cartas</button>
        </div>

        </>
    )

}

export default HeaderPokemon