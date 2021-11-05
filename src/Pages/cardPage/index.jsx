import React,{useContext,useEffect} from 'react';
import { firstContext } from '../../Store/store';
import { searchPokeCard } from '../../Store/actions/actionPokemon';
import { Image,Constainer, Display ,HeaderCardPage,Content} from '../cardPage/style';
import {Button, Header, Loader, Nothing } from '../../components';
import {AiOutlineArrowRight} from 'react-icons/ai';



const CardPage = () =>{

    const {state,dispatch} = useContext(firstContext);

    useEffect(()=>{

        dispatch({type:'resetCard'});

        if(state.pokemon !== 'inicial'){
            if(state.pokemon.name.replace('-',' ').split(" ")[0] === "tapu" || state.pokemon.name.replace('-',' ').split(" ")[0] === "mime"  ){
                searchPokeCard(dispatch,`"${state.pokemon.name.replace('-',' ')}"`);
            }else if(state.pokemon.name.replace('-',' ').split(" ")[0] === 'mr'){
                searchPokeCard(dispatch,`"${state.pokemon.name.replace('-',' ').split(" ")[0]}. ${state.pokemon.name.replace('-',' ').split(" ")[1]}"`);
            }else if(state.pokemon.name === 'farfetchd'){
                searchPokeCard(dispatch,`farfetch'd`);
            }else if(state.pokemon.name === 'sirfetchd'){
                searchPokeCard(dispatch,`sirfetch'd`);
            }else{
                searchPokeCard(dispatch,state.pokemon.name.replace('-',' ').split(" ")[0]);
            }
        }
    },[state.pokemon,dispatch]);

    const cardInfo = ()=>{

        return(
            <div>
                <div>
                    <Header/>
                    <HeaderCardPage>
                        <h2>CARTAS</h2>
                        <Button page='pokemon'>ir Para Pokemon<AiOutlineArrowRight/></Button>
                    </HeaderCardPage>
                </div>
                <Content>
                <Display>
                    {state.cards.length >0? 
                        <>
                            {state.cards.map((cards)=>{
                                    return(
                                        <Constainer>
                                            <Image src={cards.images.small} alt={cards.id}/>
                                        </Constainer>
                                        )

                                })}
                                
                        </>
                    :<Loader/>}
                </Display>
                </Content>
            </div>
        );
    }
    return(
        <>
        {state.def === true ? cardInfo() : <Nothing margin='30vh'>Nemhum Card encontrado, procure outro nome</Nothing>}
        </>
    );
}

export default CardPage;