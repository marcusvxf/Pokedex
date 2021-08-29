import React  from 'react';
import { useHistory } from 'react-router';
import {AiFillStar} from 'react-icons/ai';
import {Header,Button,Span} from './style'
import { Search } from '../index';

const HeaderBar = ()=>{

    let history = useHistory()

    const changePages = (page) =>{
        history.push(`/${page}`)
    }
    return(
        <Header>
            <Button href='#' onClick={()=> changePages('Home')}><Span>Home</Span></Button>
            <Button href="#"  onClick={()=> changePages('favorites')}><AiFillStar/><Span>Favoritos</Span></Button>
            <Search />
        </Header>
    )

}


export default HeaderBar