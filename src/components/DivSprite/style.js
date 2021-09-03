import styled from "styled-components";
import Theme from "../../theme";

export const ShinyButtom = styled.a`
    text-decoration:none;
    display:flex;
    align-items:center;
    justify-content:center;
    font-family:${Theme.fonts.regular};
    color:white;
    border-radius: 2rem;
    background-color:${Theme.colors.primary};
    text-transform:uppercase;
    padding:3px;
    width:6rem;
    margin-top:0.5rem;
`;

export const ContainerSprite = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-left:-15rem;

    div{
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:white;
        border-radius:50%;
        height:7rem;
        width:7rem;

    }
`;
