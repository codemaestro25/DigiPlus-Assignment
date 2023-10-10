import React from 'react';
import {Box, styled} from '@mui/material'
const NodeDesign = styled(Box)`
background-color : #07ad0c;
width : 100px;
height : 30px;
wrap-content : true;
color : white;
padding : 4px 8px;
border-radius : 5px;
`

const Node = () => {
  return (
   <NodeDesign>Parent Node</NodeDesign>
  );
}

export default Node
