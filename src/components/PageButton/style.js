import styled from "styled-components";

export const Button = styled.a`
    font-family: 'Helvetica Neue', sans-serif;
    font-weight: 800;
    font-size:18px;
    letter-spacing: 1px;
    color:white;
    width:15rem;
    margin:0rem 2.4vw 0.5rem 2.4vw;
    border:2px solid black;
    border-radius: 2rem;
    background-color:rgba(255, 140, 100, 0.5);
    display:flex;
    justify-content:center;
    align-items:center;
    text-transform:uppercase;
    text-decoration:none;
    transition:0.5s;
    height:2.8rem;

    &:hover{
        background-color:rgba(255, 140, 100, 1);
    }
`