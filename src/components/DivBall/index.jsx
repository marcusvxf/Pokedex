import React, { useContext,useState,useEffect, useCallback } from 'react';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';
import { firstContext } from '../../Store/store';
import { Ball,FavoriteButtom } from './style';
import { setFavoritePokemon } from '../../Store/actions/actionPokemon';

const DivBall = ()=>{

    const [star,setStar] = useState(()=> <AiOutlineStar/>);

    const [image,SetImage] = useState('');

    const {state,dispatch} = useContext(firstContext);


    const check = useCallback(
        (obj)=>{
        for( var x in state.favorites){
            if(obj.name === state.favorites[x].name){
                return false;
            }
        }
        return true;
    },[state.favorites]);
    
    
    useEffect(()=>{
        let res = check(state.pokemon);
        if(res){
            setStar(()=><AiOutlineStar/>);
        }else{
            setStar(()=><AiFillStar/>);
        }
    },[state,check]);

    useEffect(()=>{
        switch (state.pokemon.name){
            case 'mimikyu-disguised':
                SetImage(`https://img.pokemondb.net/artwork/large/mimikyu.jpg`);
                break;
            case 'minior-red-meteor':
                SetImage(`https://img.pokemondb.net/artwork/large/minior.jpg`);
                break;
            case 'morpeko':
                SetImage(`https://img.pokemondb.net/artwork/large/morpeko-full-belly.jpg`);
                break;
            default:
                SetImage(`https://img.pokemondb.net/artwork/large/${state.pokemon.name}.jpg`);
                break;
        }

    },[state.pokemon]);


    const favorite = (index)=> {
        let res = check(state.pokemon);

        if(!res){
            for( var x in state.favorites){
                if(index === state.favorites[x].id){
                    dispatch({type: 'removeFavorite',payload:x});
                }
            }
        }else{setFavoritePokemon(dispatch,index)}

    }

    return(
        <Ball>
            <img src={image} alt={state.pokemon.name} />
            <FavoriteButtom href='#' onClick ={()=> favorite(state.pokemon.id)}>{star}Favoritar</FavoriteButtom>
        </Ball>

    );

}

export default DivBall;