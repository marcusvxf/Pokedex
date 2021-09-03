import styled from 'styled-components';
import Theme from '../../theme';

export const SearchBox = styled.div`
    background:#fff;
    border-radius:0.8rem;
    display:flex;
    justify-content:center;
    align-items:center;
    box-sizing: border-box;
    input{
        font-style: ${Theme.fonts.regular};
        height:2.5rem;
        border-radius:0.6rem;
        padding:2px;
        margin-left:0.8rem;
        width:20vw;
        background:none;
        border:none;
        outline:none;
        font-size:1.3rem;
    }
    button{
        padding:1rem;
        color:black;
        background:${Theme.colors.secondary};
        border: 0px;
        border-radius:0.6rem;
        cursor: pointer;
    }

`;
