import styled from "styled-components";



export const Title = styled.h1`
    font-family: 'Helvetica Neue', sans-serif;
    font-size:5em;
    text-transform:uppercase;

`

export const SubTitle = styled.h3`
    font-family: 'Helvetica Neue', sans-serif;
    font-size:1.2rem;
    text-transform:uppercase;
    margin:0;
    text-align:center;

`

export const Container = styled.div`
    height:55vh;
    padding:0 6rem 0 6rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
    @media(max-width: 800px) {
        padding: 2rem;

    }
`