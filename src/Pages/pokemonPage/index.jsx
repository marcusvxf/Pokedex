import React ,{useContext, useEffect, useState} from 'react';
import { firstContext } from '../../Store/store';
import { Header } from '../../components';
import { setFavoritePokemon } from '../../Store/actions/actionPokemon';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';
import { Tela } from './style';


const PokemonPage = ()=>{
    
    const {state,dispatch} = useContext(firstContext)

    const [sprite,setSprite] = useState({url:'',name:''})

    const [star,setStar] = useState(()=> <AiOutlineStar/>)


    const changeSprite =()=>{
        sprite.name === 'Shiny' ?
        setSprite({url:state.pokemon.sprites.front_shiny,name:'Normal'}) :
        setSprite({url: state.pokemon.sprites.front_default,name:'Shiny'})
    }

    const check = (obj)=>{

        for( var x in state.favorites){
            if(obj.name === state.favorites[x].name){
                return false
            }
        }
        return true

    }

    const favorite = (nome)=> {
        let res = check(state.pokemon)

        if(!res){
            console.log("pokemon ja registrao")
        }else{setFavoritePokemon(dispatch,nome)}


    }

    useEffect(()=>{
        let res = check(state.pokemon)
        if(state.def){
            setSprite({url:state.pokemon.sprites.front_default,name:'Shiny'})}
        if(res){
            setStar(()=><AiOutlineStar/>)
        }else{
            setStar(()=><AiFillStar/>)
        }
    },[state])


    useEffect(()=>{

    },[state.pokemon])


    const pokeInfo = () => { 
        return (
        <Tela>
            <div>
            <Header />
                <p>Nome:{state.pokemon.name.replace('-',' ')}</p>
                <p>index:{state.pokemon.id}</p>
                {state.pokemon.types.map((type)=>{
                    return(
                        <p >Tipo:{type.type.name}</p>
                    )
                })}
                <img src={sprite.url} alt={state.pokemon.name} />
                <button onClick={changeSprite}>{sprite.name}</button>
                <button onClick ={()=>favorite(state.pokemon.id)}>{star}Favoritar</button>
                {state.pokemon.stats.map((info)=> { 
                    return( 
                    <div  key={info.stat.name}>
                    <p>{info.stat.name}</p>
                    <p>{info.base_stat}</p>
                    </div>)})}
            </div>
        </Tela>
        
    ) }

    return(
        <>
        {state.def === true ? pokeInfo() : <div>Nemhum pokemon encontrado</div>}
        </>
    )
}

export default PokemonPage