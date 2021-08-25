import Slider from "react-slick";
import styled from "styled-components";

export const Carrousel = styled(Slider)`
    width:100rem;
    margin-left:3rem;
`

export const Image = styled.img`
    height:20rem;
    &:hover{
        border:3px solid black;
        border-radius: 0.6rem;

    }
`

export const Constainer = styled.div`
    margin-left:2rem;
    margin-right:2rem;
    margin-bottom:3rem;

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