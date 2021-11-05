import styled from "styled-components";
import Theme from "../../theme";

export const Wrapper = styled.div`
    display:flex;
    justify-content:space-around;
    margin-left:3rem;
    @media(max-width:1133px){
        flex-direction: column;
        margin-left: 0;
        justify-content: center;


    }
`;


export const HeaderPokemonPage = styled.div`
    display:flex;
    justify-content:space-between;

    div{
        display:flex;
        justify-content:center;
        align-items:center;

        h2{
            display:flex;
            align-items:center;
            justify-content:center;
            font-family: ${Theme.fonts.regular};
            font-size: 20px; 
            font-weight: 1000; 
            letter-spacing: 2px;
            color:white;
            margin:0rem 2.4vw 0.5rem 2.4vw;
            border:2px solid black;
            width:25rem;
            border-radius: 2rem;
            background-color: ${Theme.colors.primary};
            height:2.8rem;
            text-transform:uppercase;
        }

    }
    @media(max-width:1133px){
           flex-direction: column-reverse;
           div{
                h2{
                font-size: 15px;
            }
           }

    }
`;


export const Status = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    width:33vw;
    @media(max-width:1133px){
        justify-content: center;
        width: 90vw;
        align-items: center;

    }

`;

export const TypeBox = styled.div`
    font-family: ${Theme.fonts.regular};
    text-align:start;
    border-radius:3rem;
    border: 2px solid black;
    font-size:15px;
    font-weight:bold;
    width:10rem;
    text-transform:uppercase;
    background-color:${Theme.colors.primary};
    color:white;
    padding-left:20px;
    margin-left:3rem;
    @media(max-width:1133px){
      margin-left: 0.5rem;

    }
`;

export const Images = styled.div`
    @media(max-width:1133px){
        display: flex;
        width: 100vw;
        align-items: center;
        justify-content: center;
    }


`;