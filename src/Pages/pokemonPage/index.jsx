import React ,{useContext, useEffect, useState} from 'react';
import { firstContext } from '../../Store/store';
import { Ball, Bar, Header,Sprite,Nothing } from '../../components';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {Wrapper ,HeaderPokemonPage, Status, TypeBox} from './style';
import { Button } from '../../components';


const PokemonPage = ()=>{
    
    const {state} = useContext(firstContext);

    const [name,setName]= useState('');
 

    const firstLetterUppercase=(arr) => arr.charAt(0).toUpperCase() + arr.slice(1);

    function configStatus(status){
        if(status === 'special-attack'){
            return "sp attack";
        }else if(status === 'special-defense'){
            return "sp defense";
        }else{
            return(status);
        }
    };

    useEffect(() => {
        if (state.pokemon.name === 'mimikyu-disguised'){
            setName('mimikyu');
        }else if(state.pokemon.name === 'minior-red-meteor'){
            setName('minior');
        }else{
            setName(state.pokemon.name);
        }
    },[state.pokemon]);

    // <Title>Nome:{name.replace('-',' ')} /  Index:{state.pokemon.id}</Title>


    const pokeInfo = () => { 
        return (
        <div>
            <Header />
            <HeaderPokemonPage>
                <div>
                    <h2>Nome:{name} /  Index:{state.pokemon.id}</h2>
                </div>
                <Button page='cartas'>ir Para Cartas<AiOutlineArrowRight/></Button>
            </HeaderPokemonPage>
            <Wrapper>
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
                    <Ball/>
                    <Sprite/>
                </div>
            </Wrapper>
        </div> 
        
    );
}

    return(
        <>
        {state.def === true ? pokeInfo() : <Nothing margin='30vh'>Nemhum pokemon encontrado com esse nome.</Nothing>}
        </>
    );
}

export default PokemonPage;