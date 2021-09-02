import React from 'react';
import { Box,Percent,Svg,Number,Circle, Container } from './style';

const PointsBar = (props)=>{
    return(
        <Container>
            <h1>{props.status}</h1>
        <Box>
            <Percent>
                <Svg>
                    <Circle number={props.number} cx='70' cy='70' r='70'></Circle>
                    <Circle  number={props.number} cx='70' cy='70' r='70'></Circle>
                </Svg>
                <Number>
                    <h2>
                        {props.number}
                    </h2>
                </Number>
            </Percent>

        </Box>
        </Container>
    );
}

export default PointsBar;