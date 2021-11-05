import styled from "styled-components";
import Theme from "../../theme";


export const Display = styled.div`
    display:flex;
    flex-wrap:wrap;
    height:70vh;
    width:95vw;
    margin-left:2.4vw;
    overflow-y: scroll;
    border: 3px solid black;
    border-radius:0.6rem;
    background-color:white;
    @media(max-width:800px){
        justify-content: space-around;

        margin:0.5em;
    }
`;

export const Title = styled.h2`
    font-family: ${Theme.fonts.regular};
    font-size: 2em; 
    font-weight: 1000; 
    letter-spacing: 2px;
    color:white;
    padding:10px;
    margin:0em 0 0.5rem 2.4vw;
    border:2px solid black;
    width:28rem;
    text-align:center;
    border-radius: 2rem;
    background-color:${Theme.colors.primary};
    text-transform: uppercase;
    @media(max-width:800px){
        max-width: 80vw;
    }

`;
