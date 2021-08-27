import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:rgba(124, 106, 124, 1);
    border-radius:0.6rem;
    height:13rem;
    width:9rem;
    margin: 2rem 0 2.4vw 2.4vw;
    border: 2px solid black;
` 

export const Text = styled.h2`
    font-family: 'Helvetica Neue', sans-serif;
    font-size:15px;
    color:white;
`

export const Button = styled.a`
    text-decoration:none;
    display:flex;
    align-items:center;
    justify-content:center;
    font-family: 'Helvetica Neue', sans-serif;
    color:white;
    border-radius: 2rem;
    background-color:rgba(255, 140, 100, 1);
    text-transform:uppercase;
    padding:3px;
    width:6rem;
    margin-top:0.5rem;
    margin-bottom:5px;
`