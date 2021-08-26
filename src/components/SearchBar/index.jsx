import React,{useState,useContext}  from 'react';
import { SearchBox,Input,SearchButton } from './style';
import { firstContext } from '../../Store/store';
import {AiOutlineSearch} from 'react-icons/ai';
import { useHistory,useLocation } from 'react-router-dom';
import {searchPoke, searchPokeCard} from '../../Store/actions/actionPokemon';


const SearchBar = () => {

    const [pokename,setPokename] = useState('')

    const {dispatch} = useContext(firstContext)
    

    let history = useHistory()

    let location = useLocation()

    function tratarEntrada(poke){
        poke = poke.toLowerCase()
        if(poke === ""){
            poke = 'none'
        }
        return poke.replace(' ','-')
    }


    const changePokemon = (e)=>{
        if(e.key === 'Enter'){
            search()
        }
    }

    const search = () => {
        let pokeI = tratarEntrada(pokename)
        searchPoke(dispatch,pokeI)
        searchPokeCard(dispatch,pokeI)
        if(location.pathname === '/cartas'){
            history.push("/cartas")
        }else{
            history.push("/pokemon")
        }

    }

    return(
        <SearchBox>
            <Input value={pokename} onKeyPress={changePokemon} onChange={(e) => setPokename(e.target.value) } placeholder='Escolha seu pokemon ...'></Input>
            <SearchButton onClick={search} href='#'><AiOutlineSearch/></SearchButton>        
        </SearchBox>
    )

}

export default SearchBar