import React from 'react'
import { Box, Button, styled, TextField, Typography, MenuItem, Select } from "@mui/material";
import { useState } from 'react';


const Container = styled(Box)`
    
display : flex;
flex-direction : column;
margin : 20px;
justify-content : space-between;
`

const AddNodes = () => {
    const [nodeType, setNodeType] = useState('');
    let nodeVal;

    const handleChange = (e) => {
        setNodeType(e.target.value);
    }
    const submitValues = () =>{
            
    }
    return (
        <Container>
            <Typography>Select Node Type</Typography>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={nodeType}
                label="Node Type"
                onChange={handleChange}
            >
                <MenuItem value={'s'}>Single Node</MenuItem>
                <MenuItem value={'p'}>Parent Node</MenuItem>
                <MenuItem value={'c'}>Child Node</MenuItem>
            </Select>

            <Typography>Select Node Value</Typography>
            <TextField id="filled-basic" label="Name for Node" variant="filled" value={nodeVal} />

            <Button variant='contained' onClick={submitValues}>Add Node</Button>
        </Container>
    )
}

export default AddNodes
