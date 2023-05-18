import { styled } from '@mui/system';
import Header from './component/header/Header';
import Home from './component/home/Home';
import { Box } from '@mui/material';
import DetailView from './component/details/DetailView'
import { BrowserRouter , Route, Routes} from 'react-router-dom';

const AppContainer = styled('div')`
  margin-top: 70px;
`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Box component={AppContainer}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<DetailView />} />
          </Routes>
        </Box>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
