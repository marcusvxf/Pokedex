import Slider from "react-slick";
import styled from "styled-components";

export const Carrousel = styled(Slider)`
    width:100rem;
    margin-left:3rem;
`

export const Image = styled.img`
    height:20rem;
    transition: transform .2s;
    &:hover{
 
        border-radius: 0.6rem;
        transform: scale(1.1);
    }
`

export const Constainer = styled.div`
    margin-left:2rem;
    margin-right:2rem;
    margin-bottom:3rem;
    display:inline-block

`

export const Display = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: space-around;
    overflow-y: scroll;
    height:75vh;
    width:95vw;
    margin-left:2.4vw;
    border:5px solid black;
    border-radius:0.6rem;
    background-color:white;
    padding-top:1rem;

`

export const Title = styled.h2`
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 40px; 
    font-weight: 1000; 
    letter-spacing: 2px;
    color:white;
    margin:-2rem 0 1rem 2.4vw;
    border:2px solid black;
    width:12rem;
    text-align:center;
    border-radius: 2rem;
    background-color:rgba(255, 140, 100, 1)

`

export const HeaderCardPage = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`

export const Button = styled.a`
    font-family: 'Helvetica Neue', sans-serif;
    font-weight: 800;
    font-size:18px;
    letter-spacing: 1px;
    color:white;
    width:15rem;
    margin:-2rem 2.4vw 1rem 0;
    border:2px solid black;
    border-radius: 2rem;
    background-color:rgba(255, 140, 100, 0.5);
    display:flex;
    justify-content:center;
    align-items:center;
    text-transform:uppercase;
    text-decoration:none;
    transition:0.5s;
    &:hover{
        background-color:rgba(255, 140, 100, 1);
    }
`