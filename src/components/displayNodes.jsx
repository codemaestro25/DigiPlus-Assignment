import React from 'react'
import Node from './node'
import {Box,  styled} from '@mui/material'

const Container = styled(Box)`
margin : 50px 60px;
align-items : center;
`

const DisplayNodes = () => {
  return (
    <Container>
      <Node />
    </Container>
  )
}

export default DisplayNodes
