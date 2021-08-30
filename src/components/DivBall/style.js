import styled from "styled-components";


export const Ball = styled.div`
    background-color:white;
    border-radius:50%;
    height:25rem;
    width:25rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    margin-right:38vw;


`

export const FavoriteButtom = styled.a`
    text-decoration:none;
    display:flex;
    align-items:center;
    justify-content:center;
    font-family: 'Helvetica Neue', sans-serif;
    color:white;
    border-radius: 2rem;
    background-color:rgba(255, 140, 100, 1);
    text-transform:uppercase;
    padding:8px;
`

export const Image = styled.img`
    margin-bottom:1rem;
    max-height:15rem;
    max-width:17rem;
`