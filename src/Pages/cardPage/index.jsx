import React,{useContext,useEffect} from 'react';
import { firstContext } from '../../Store/store';
import { searchPokeCard } from '../../Store/actions/actionPokemon';
import { Image,Constainer, Display } from '../cardPage/style';
import { Header } from '../../components';



const CardPage = () =>{

    const {state,dispatch} = useContext(firstContext)

    useEffect(()=>{
        dispatch({type:'resetCard'})
        //Erros com nomes sirfetchd,mr-rime
        if(state.pokemon !== 'inicial'){
            if(state.pokemon.name.replace('-',' ').split(" ")[0] === "tapu" || state.pokemon.name.replace('-',' ').split(" ")[0] === "mime"  ){
                searchPokeCard(dispatch,`"${state.pokemon.name.replace('-',' ')}"`)
            }else{
                searchPokeCard(dispatch,state.pokemon.name.replace('-',' ').split(" ")[0])
            }
        }
    },[state.pokemon])

    const cardInfo = ()=>{
        return(

            <div>
                <div>
                    <Header/>
                    <h3>Cartas</h3>

                </div>
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
                    
                    :<h2>carregando cartas</h2>}
                </Display>

            </div>
            
        )
    }

    return(
        <>
        {state.def === true ? cardInfo() : <div>Nemhum Card encontrado</div>}
        </>
    )
}

export default CardPage