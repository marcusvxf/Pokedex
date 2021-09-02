import styled from "styled-components";
import Theme from '../../theme';

export const Container = styled.div`
    text-align:center;
    display:flex;
    justify-content:center;
    margin-bottom:3px
`;

export const Buttonsbox = styled.div`
    text-align:center;
    background-color:${Theme.colors.primary};
    display:flex;
    justify-content:center;
    width:20.5rem;
    border-radius:1rem;


`;
export const Button = styled.a`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: transparent;
    text-decoration:none;
    color:white;
    margin:0.5rem;
    font-family: ${Theme.fonts.regular};
    font-weight: 800;
    font-size:18px;
    letter-spacing: 1px;
    text-transform:uppercase;
`;
export const Line = styled.div`
    border:1px solid grey;
`;