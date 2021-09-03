import styled, { keyframes } from "styled-components";
import Theme from "../../theme";


const spin = keyframes`
    0%{
        transform:rotate(0deg);
    }100%{
        transform:rotate(360deg);
    }
`;


export const Loader = styled.div`
    border: 16px solid ${Theme.colors.tertiary};
    border-top: 16px solid ${Theme.colors.primary};
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: ${spin} 2s infinite;
    justify-content:center;
    align-items:center;
    margin-top:15vw;
`;