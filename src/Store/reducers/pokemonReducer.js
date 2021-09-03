
const reducer = (state,action)=>{
    switch(action.type){
        case 'changePokemon':
            return {...state ,pokemon: action.payload.data , def: true};
        case 'favPokemon':
            return {...state, favorites: state.favorites.concat(action.payload),def:true};
        case 'setFalse':
            return {...state, def:false};
        case 'pokemonCard':
            return {...state , cards: action.payload};
        case 'resetCard':
            return { ...state,cards: ''};
        case 'removeFavorite':
            state.favorites.splice(action.payload,1)
            return { ...state,favorites: state.favorites};
        default: 
            console.log("erro")
    }
}

export default reducer;