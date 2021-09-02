import React from 'react';
import styled from 'styled-components';
import Theme from '../../theme';


const Wrapper = styled.div`
    display:flex;
    justify-content: center;
    margin-top:30vh;
    align-items:center;
    font-family: ${Theme.fonts.regular};
    font-weight:800;
    font-size:3rem;
    text-transform:uppercase;
    width:100vw
`;


const NothingFound = (props) =>{
    return(
        <Wrapper>
            {props.children}
        </Wrapper>

    );

}

export default NothingFound;