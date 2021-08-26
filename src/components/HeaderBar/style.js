import styled from "styled-components";


export const Header = styled.div`
    background-color: #FF8C64;
    height:4rem;
    border-radius:3rem;
    align-items: center;
    display:flex;
    flex-direction:row;
    padding-left:5rem;
    margin: 0rem 25vw 1rem 25vw;


`

export const Button = styled.a`
    width:6.8rem;
    margin: 0 2rem 0 0;
    text-decoration:none;
    color:#000;
    font-size:1.3rem;
    transition:0.5s;
    text-align:center;
    justify-content:center;
    &:hover{
        color:#fff;
        background: grey;
        border-radius: 2rem;
        padding: 10px;

    }
`

export const SearchBox = styled.div`
    background:#fff;
    border-radius:0.8rem;
    display:flex;
    justify-content:center;
    align-items:center;

`


export const SearchButton = styled.a`
    padding:0.8rem;
    color:black;
    background:orange;
    border-radius:0.6rem;


`

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
`