import React, { useContext } from 'react';
import { firstContext } from '../../Store/store';
import {  searchPoke } from '../../Store/actions/actionPokemon';
import { Container,Button, Buttonsbox ,Line } from './style';
import {AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai';


const HeaderPokemon = ()=> {

    const {state,dispatch} = useContext(firstContext);

    const next = (i)=>{
        let id
        if(i === -1){
            if(state.pokemon.id === 1){
                id = 898;
                searchPoke(dispatch,id);

            }else{
                id = state.pokemon.id + i;
                searchPoke(dispatch,id);
            }
        }else{
            if(state.pokemon.id === 898){
                id = 1;
                searchPoke(dispatch,id);

            }else{
                id = state.pokemon.id + i;
                searchPoke(dispatch,id);
            }
        }
    }

    return(
        <Container>
            <Buttonsbox>
                <Button href='#' onClick={()=>next(-1)}><AiOutlineArrowLeft/> Numero {state.pokemon.id -1}</Button>
                <Line></Line>
                <Button href='#' onClick={()=>next(1)}>Numero {state.pokemon.id +1} <AiOutlineArrowRight/> </Button>
            </Buttonsbox>
        </ Container>
    );

}

export default HeaderPokemon;