import React,{useContext,useEffect} from 'react';
import { firstContext } from '../../Store/store';
import { searchPokeCard } from '../../Store/actions/actionPokemon';
import { Image,Carrousel } from '../cardPage/style';
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
        const settings = {
            className: "",
            dots: false,
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 1,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 500,
          };
        return(
            <div>
                <Header/>
                <h3>Cartas</h3>
                {state.cards.length >0? 
                    <>
                        <Carrousel {...settings}>
                            {state.cards.map((cards)=>{
                                return(
                                    <div>
                                        <Image src={cards.images.small} alt={cards.id}/>
                                    </div>

                                )
                            })}
                        </Carrousel>
                    </>
                
                : <h2>carregando cartas</h2>}
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