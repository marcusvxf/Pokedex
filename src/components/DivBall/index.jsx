import React, { useContext,useState,useEffect, useCallback } from 'react';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';
import { firstContext } from '../../Store/store';
import { Ball,Image,FavoriteButtom } from './style';
import { setFavoritePokemon } from '../../Store/actions/actionPokemon';

const DivBall = ()=>{

    const [star,setStar] = useState(()=> <AiOutlineStar/>)

    const [image,SetImage] = useState('')

    const {state,dispatch} = useContext(firstContext)


    const check = useCallback(
        (obj)=>{
        for( var x in state.favorites){
            if(obj.name === state.favorites[x].name){
                return false
            }
        }
        return true
    },[state.favorites])

    
    useEffect(()=>{
        let res = ()=>check(state.pokemon)
        if(res){
            setStar(()=><AiOutlineStar/>)
        }else{
            setStar(()=><AiFillStar/>)
        }
    },[state,check])


    useEffect(()=>{
        // SetImage(`https://img.pokemondb.net/artwork/large/altaria-mega.jpg`)
        if (state.pokemon.id < 10){
            SetImage(`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/00${state.pokemon.id}.png`)
        }else if (state.pokemon.id <100){
            SetImage(`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/0${state.pokemon.id}.png`)
        }else{
            SetImage(`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${state.pokemon.id}.png`)
        }

    },[state.pokemon])


    const favorite = (index)=> {
        let res = check(state.pokemon)

        if(!res){
            for( var x in state.favorites){
                if(index === state.favorites[x].id){
                    dispatch({type: 'removeFavorite',payload:x})
                }
            }
        }else{setFavoritePokemon(dispatch,index)}

    }

    return(
        <Ball>
            <Image src={image} alt={state.pokemon.name} />
            <FavoriteButtom href='#' onClick ={()=> favorite(state.pokemon.id)}>{star}Favoritar</FavoriteButtom>
        </Ball>

    )

}

export default DivBall