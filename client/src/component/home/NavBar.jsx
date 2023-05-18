import { Box, Button } from "@mui/material";
import { navData } from '../constants/data';
import { styled } from '@mui/system';

const Container = styled(Box)`
  padding: 12px 8px;
  display: flex;
  justify-content: center;
`;

const Component = styled(Box)`
  display: flex;
  padding: 0 25%;
  justify-content: space-between;
  pointer : hover:
`;

// const categories = styled(Button)`
//     font-size: 14px;
// `;

const NavBar = () => {
  return (
    <Component>
      {navData.map((data) => (
        <Container>
          <Button sx={{backgroundColor: '#025464',}} variant="contained">{data.text}</Button>
        </Container>
      ))}
    </Component>
  );
}

export default NavBar;