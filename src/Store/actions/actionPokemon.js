import {api,apiCards} from '../../services/api';

const searchPoke = (dispatch,pokename) => {
    api.get(`pokemon/${pokename}`).then((response)=> { 
        dispatch({type:'changePokemon',payload: response});
    })
    .catch((err)=> {
        dispatch({type:'setFalse'});
        })
    //apiCards.get(`?q=name:${pokename}`).then((response)=> console.log(response)).catch((err)=> console.log('Erro',err))
    
}

const setFavoritePokemon =(dispatch,pokename)=> {
    
    api.get(`pokemon/${pokename}`).then((response)=> { 
        dispatch({type:'favPokemon',payload:response.data});
    })
    .catch((err)=> {
        console.log(err);
        })
    
}

const searchPokeCard = (dispatch,pokename) =>{
    apiCards.get(`?q=name:${pokename}`).then((response)=>{
        dispatch({type:'pokemonCard',payload:response.data.data});
    }).catch((err)=> console.log('Erro',err));
}



export {
    searchPoke,
    setFavoritePokemon,
    searchPokeCard,

};