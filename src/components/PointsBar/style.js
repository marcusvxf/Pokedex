import styled,{keyframes} from "styled-components";


const barLoading =keyframes`
    0%{
        stroke-dashoffset:440; 
    }100%{
        stroke-dashoffset:calc(440 - ( 440 * ${props =>parseInt( props.number,10)} ) / 150);
    }
`

export const Container = styled.div`
    display:inline-block;
    margin-left:2rem
`


export const Box = styled.div`
    position:relative;
    width:10rem;
    height:10rem;
    justify-content:center;
    align-tens:center;
    flex-direction:column;

` 

export const Percent = styled.div`
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    width:10rem;
    height:10rem;

` 

export const Number = styled.div`
    position:absolute;

    display:flex;
    justify-content:center;
    align-itens:center;
    text-align:center;
` 

export const Svg = styled.svg`
    position:relative;
    width:10rem;
    height:10rem;

`

export const Circle = styled.circle`
    width:10rem;
    height:10rem;
    fill:none;
    stroke-width:10;
    stroke:#000;
    transform:translate(5px,5px);
    stroke-dasharray:440;
    stroke-dashoffset:440;
    stroke-linecap:round;
    :nth-child(1){
        stroke-dashoffset:0;
        stroke:#f3f3f3;
    }
    :nth-child(2){
        animation:2s ${barLoading} ;
        stroke-dashoffset:calc(440 - ( 440 * ${props =>parseInt( props.number,10)} ) / 255);
        stroke:red;
    }

`

export const Numero = styled.h2`
    margin-right:0.9rem;
    margin-bottom:2rem;
    font-size:32px;
`

export const Title = styled.h2`
    text-transform:uppercase;
    margin-left:1rem;
    background-color:rgba(255, 140, 100, 1);
    border-radius:2rem;
    padding-left:7px;
    font-size:22px;
    width:9rem;
    color:white;
    font-family: 'Helvetica Neue', sans-serif;
    border:1px solid black

`
