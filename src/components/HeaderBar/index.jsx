import React ,{useState,useContext} from 'react';
import {firstContext} from '../../Store/store';
import {searchPoke, searchPokeCard} from '../../Store/actions/actionPokemon';
import { useHistory } from 'react-router';
import {AiFillStar,AiOutlineSearch} from 'react-icons/ai';
import {Header,Button,SearchButton,Input,SearchBox} from './style'
import { useLocation } from 'react-router-dom';



function tratarEntrada(poke){
    poke = poke.toLowerCase()
    if(poke === ""){
        poke = 'none'
    }
    return poke.replace(' ','-')
}

const HeaderBar = ()=>{

    const {dispatch} = useContext(firstContext)

    let history = useHistory();

    const [pokename,setPokename] = useState('');

    let location = useLocation()


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

    const changePages = (page) =>{
        history.push(`/${page}`)
    }
    return(
        <Header>

            <Button href='#' onClick={()=> changePages('Home')}><span>Home</span></Button>
            <Button href="#"  onClick={()=> changePages('favorites')}><AiFillStar/><span>Favoritos</span></Button>
            <SearchBox>
                <Input value={pokename} onKeyPress={changePokemon} onChange={(e) => setPokename(e.target.value) } placeholder='Escolha seu pokemon ...'></Input>
                <SearchButton onClick={search} href='#'><AiOutlineSearch/></SearchButton>        

            </SearchBox>


            
        </Header>
    )

}


export default HeaderBar