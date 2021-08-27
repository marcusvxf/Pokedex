import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { firstContext } from '../../Store/store';
import { searchPoke,searchPokeCard  } from '../../Store/actions/actionPokemon';
import { Text,Container, Button } from './style';


const FavoiteCard = (props) =>{
    let history = useHistory()

    const {state,dispatch} = useContext(firstContext)

    const searchPokemon = (pokeI) =>{
        searchPoke(dispatch,pokeI)
        searchPokeCard(dispatch,pokeI)
        history.push("/pokemon")
    }

    const remove = (index)=>{
        for( var x in state.favorites){
            if(index === state.favorites[x].id){
                dispatch({type: 'removeFavorite',payload:x})
            }
        }
    }


    return(
        <Container >
            <div onClick={ () => searchPokemon(props.id)}>
                <div>
                    <img src={props.src} alt={props.name} />            
                </div>
                <div>
                    <Text>Nome: {props.name}</Text>
                    <Text>Index : {props.id} </Text>  
                </div>

            </div>
                <Button href='#' onClick={() => remove(props.id)}>Excluir</Button>

        </Container>
    )

}

export default FavoiteCard