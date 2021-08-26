import React  from 'react';
import { useHistory } from 'react-router';
import {AiFillStar} from 'react-icons/ai';
import {Header,Button} from './style'
import { Search } from '../index';

const HeaderBar = ()=>{

    let history = useHistory()

    const changePages = (page) =>{
        history.push(`/${page}`)
    }
    return(
        <Header>
            <Button href='#' onClick={()=> changePages('Home')}><span>Home</span></Button>
            <Button href="#"  onClick={()=> changePages('favorites')}><AiFillStar/><span>Favoritos</span></Button>
            <Search />
        </Header>
    )

}


export default HeaderBar