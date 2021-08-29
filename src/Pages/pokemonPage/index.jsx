import React ,{useContext} from 'react';
import { firstContext } from '../../Store/store';
import { Ball, Bar, Header,Sprite } from '../../components';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {Tela ,ButtonPage,InfoDiv,Title, Status, TypeBox, Nothing} from './style';
import { Button } from '../../components';


const PokemonPage = ()=>{
    
    const {state} = useContext(firstContext)


    const firstLetterUppercase=(arr) => arr.charAt(0).toUpperCase() + arr.slice(1)

    function configStatus(status){
        if(status === 'special-attack'){
            return "sp attack"
        }else if(status === 'special-defense'){
            return "sp defense"
        }else{
            return(status)
        }
    }


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
                    <Ball/>
                    <Sprite/>
                </div>
            </Tela>
        </div> 
        
    ) }

    return(
        <>
        {state.def === true ? pokeInfo() : <Nothing>Nemhum pokemon encontrado com esse nome.</Nothing>}
        </>
    )
}

export default PokemonPage