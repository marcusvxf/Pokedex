import styled from "styled-components";
import Theme from '../../theme';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:${Theme.colors.tertiary};
    border-radius:0.6rem;
    height:13rem;
    width:9rem;
    margin: 2rem 0 2.4vw 2.4vw;
    border: 2px solid black;

    h2{
        font-family: ${Theme.fonts.regular};
        font-size:15px;
        color:white;
    }
`;


export const Button = styled.a`
    text-decoration:none;
    display:flex;
    align-items:center;
    justify-content:center;
    font-family: ${Theme.fonts.regular};
    color:white;
    border-radius: 2rem;
    background-color:${Theme.colors.primary};
    text-transform:uppercase;
    padding:3px;
    width:6rem;
    margin-top:0.5rem;
    margin-bottom:5px;
`;