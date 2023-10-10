
import './App.css';
import AddNodes from './components/addNodes';
import { Box, styled} from '@mui/material';
import SelectNode from './components/selectNode';
import DisplayNodes from './components/displayNodes';


const Parent = styled(Box)`
display : flex;
`
function App() {
  return (
   <>
   <Parent>

<AddNodes />
<SelectNode />
   </Parent>

   <DisplayNodes />
   </>
  );
}

export default App;
