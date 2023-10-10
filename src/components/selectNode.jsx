import React from 'react'
import {Box, Typography, Button, TextField, styled} from '@mui/material'

const Container = styled(Box)`
display : flex;
flex-direction : column;
margin : 20px;
justify-content : space-between;
`

const SelectNode = () => {
  return (
    <Container>
             <Typography>Node Value</Typography>
             <TextField id="filled-basic" label="Node Label" variant="filled"  />

            <Button variant='contained' >Updatee</Button>
            <Button variant='contained' >Delete</Button>
    </Container>
  )
}

export default SelectNode
