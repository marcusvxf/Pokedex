import React from 'react';
import styled from 'styled-components';
import Theme from '../../theme';


const Wrapper = styled.div`
    display:flex;
    justify-content: center;
    margin-top:${props=> props.margin};
    align-items:center;
    font-family: ${Theme.fonts.regular};
    font-weight:800;
    font-size:3rem;
    text-transform:uppercase;
    width:100vw
`;


const NothingFound = (props) =>{
    return(
        <Wrapper margin={props.margin}>
            {props.children}
        </Wrapper>

    );

}

export default NothingFound;