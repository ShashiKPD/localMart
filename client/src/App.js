import { styled } from '@mui/system';
import Header from './component/header/Header';
import Home from './component/home/Home';
import { Box } from '@mui/material';

const AppContainer = styled('div')`
  margin-top: 70px;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <Box component={AppContainer}>
        <Home />
      </Box>
    </div>
  );
}

export default App;
