import React ,{useContext, useEffect, useState} from 'react';
import { firstContext } from '../../Store/store';
import { Bar, Header } from '../../components';
import { setFavoritePokemon } from '../../Store/actions/actionPokemon';
import {AiFillStar,AiOutlineStar,AiOutlineArrowRight} from 'react-icons/ai';
import { Image, Tela ,ButtonPage,Ball,Sprite, BallSprite,InfoDiv,Title, Status, FavoriteButtom, ShinyButtom,DivSprite, TypeBox} from './style';
import { Button } from '../../components';


const PokemonPage = ()=>{
    
    const {state,dispatch} = useContext(firstContext)

    const [sprite,setSprite] = useState({url:'',name:''})

    const [star,setStar] = useState(()=> <AiOutlineStar/>)

    const [image,SetImage] = useState('')

    const firstLetterUppercase=(arr) => arr.charAt(0).toUpperCase() + arr.slice(1)

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
    
    function configStatus(status){
        if(status === 'special-attack'){
            return "sp attack"
        }else if(status === 'special-defense'){
            return "sp defense"
        }else{
            return(status)
        }
    }

    const favorite = (nome)=> {
        let res = check(state.pokemon)

        if(!res){
            console.log("pokemon ja registrao")
        }else{setFavoritePokemon(dispatch,nome)}


    }

    useEffect(()=>{
        let res = check(state.pokemon)
        if(state.def ){
            setSprite({url:state.pokemon.sprites.front_default,name:'Shiny'})}
        if(res){
            setStar(()=><AiOutlineStar/>)
        }else{
            setStar(()=><AiFillStar/>)
        }
    },[state])


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

    const pokeInfo = () => { 
        return (
        <div>
            <Header />
            <ButtonPage>
                <InfoDiv>
                    <Title>Nome:{state.pokemon.name.replace('-',' ')} /  Index:{state.pokemon.id}</Title>
                </InfoDiv>
                <Button page='cartas'>ir Para Cartas<AiOutlineArrowRight/></Button>
            </ButtonPage>
            <Tela>
                <div>
                    <TypeBox>
                    {state.pokemon.types.map((type)=>{
                        return(
                            <p>Tipo: {firstLetterUppercase(type.type.name)}</p>
                        )
                    })}

                    </TypeBox>

                    <Status>
                        {state.pokemon.stats.map((info)=> { 
                        return( 
                        <Bar key={info.stat.name} status={configStatus(info.stat.name)} number={info.base_stat} />
                        )})}

                    </Status>

                </div>
                <div>
                    <Ball>
                        <Image src={image} alt={state.pokemon.name} />
                        <FavoriteButtom href='#' onClick ={()=>favorite(state.pokemon.id)}>{star}Favoritar</FavoriteButtom>
                    </Ball>
                    <DivSprite>
                        <BallSprite>
                            <Sprite src={sprite.url} alt={state.pokemon.name} />
                        </BallSprite>                        
                        <ShinyButtom href='#' onClick={changeSprite}>{sprite.name}</ShinyButtom>
                    </DivSprite>
                    
                </div>

            </Tela>
        </div>
        
    ) }

    return(
        <>
        {state.def === true ? pokeInfo() : <div>Nemhum pokemon encontrado</div>}
        </>
    )
}

export default PokemonPage