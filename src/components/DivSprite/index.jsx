import React, { useContext,useState,useEffect } from 'react';
import { firstContext } from '../../Store/store';
import { ContainerSprite,BallSprite,Sprite,ShinyButtom } from './style';


const DivSprite = () =>{
    const {state} = useContext(firstContext);

    const [sprite,setSprite] = useState({url:'',name:''});

    const changeSprite =()=>{
        sprite.name === 'Shiny' ?
        setSprite({url:state.pokemon.sprites.front_shiny,name:'Normal'}) :
        setSprite({url: state.pokemon.sprites.front_default,name:'Shiny'});
    }

    useEffect(()=>{
        if(state.def ){
            setSprite({url:state.pokemon.sprites.front_default,name:'Shiny'});
        }
    },[state]);

    return(
        <ContainerSprite>
            <div>
                <img src={sprite.url} alt={state.pokemon.name} />
            </div>                        
            <ShinyButtom href='#' onClick={changeSprite}>{sprite.name}</ShinyButtom>
        </ContainerSprite>
    );
}

export default DivSprite;