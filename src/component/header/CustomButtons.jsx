import {Box, Button} from '@mui/material';
import { styled } from '@mui/system';

const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 20%;

    & > button {
        margin-right: 20px;
    }

    
`;

const LoginButton = styled(Button)`

color: #466a8b;
background: #fff;
text-transform: none;
padding: 5px 40px;
font-weight: 600;


`;

const CustomButtons = () => {
    return(
        <Wrapper>
            <LoginButton  variant="contained">Login</LoginButton >
            <LoginButton  variant="contained">Sell</LoginButton >
            
        </Wrapper>
    )
}

export default CustomButtons;