import styled from "styled-components";
import Theme from "../../theme";


export const Header = styled.div`
    background-color: ${Theme.colors.primary};
    height:4rem;
    border-radius:3rem;
    align-items: center;
    display:flex;
    flex-direction:row;
    padding-left:5rem;
    margin: 0rem 25vw 1rem 25vw;
    border: 2px solid black;


`;

export const Button = styled.a`
    width:6.8rem;
    display:flex;
    align-items:center;
    justify-content:center;
    margin: 0 2rem 0 0;
    text-decoration:none;
    color:#000;
    font-size:0.9rem;
    transition:0.5s;
    text-align:center;
    justify-content:center;
    text-transform:uppercase;
    &:hover{
        color:#fff;
        background: grey;
        border-radius: 3rem;
        padding: 10px;

    }
`;

export const SearchBox = styled.div`
    background:#fff;
    border-radius:0.8rem;
    display:flex;
    justify-content:center;
    align-items:center;

`;


export const Input = styled.input`
    height:2.5rem;
    border-radius:0.6rem;
    padding:2px;
    margin-left:0.8rem;
    width:20vw;
    background:none;
    border:none;
    outline:none;
    font-size:1.3rem
`;

export const Span = styled.h3`
    font-family: ${Theme.fonts.regular};

`;