import React from 'react'
import { Box,Percent,Svg,Number,Numero,Circle, Container,Title } from './style'

const PointsBar = (props)=>{
    return(
        <Container>
            <Title>{props.status}</Title>
        <Box>
            <Percent>
                <Svg>
                    <Circle number={props.number} cx='70' cy='70' r='70'></Circle>
                    <Circle  number={props.number} cx='70' cy='70' r='70'></Circle>
                </Svg>
                <Number>
                    <Numero>
                        {props.number}
                    </Numero>
                </Number>
            </Percent>

        </Box>
        </Container>
    )
}

export default PointsBar