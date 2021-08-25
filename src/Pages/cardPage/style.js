import Slider from "react-slick";
import styled from "styled-components";

export const Carrousel = styled(Slider)`
    width:100rem;
    margin-left:3rem;
`

export const Tela = styled.div`
    display:flex;
    margin-left:3rem;
`

export const Image = styled.img`
    height:20rem;
    &:hover{
        border:3px solid black;
        border-radius: 0.6rem;

    }
`

