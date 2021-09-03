import styled from "styled-components";
import Theme from "../../theme";


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
    img{
        margin-bottom:1rem;
        max-height:15rem;
        max-width:17rem;
    }

`;

export const FavoriteButtom = styled.a`
    text-decoration:none;
    display:flex;
    align-items:center;
    justify-content:center;
    font-family: ${Theme.fonts.regular};
    color:white;
    border-radius: 2rem;
    background-color:${Theme.colors.primary};
    text-transform:uppercase;
    padding:8px;
`;
