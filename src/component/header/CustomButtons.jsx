import {Box, Button} from '@mui/material';
import { styled } from '@mui/system';

import {useState} from 'react';

import LoginDialog from '../login/LoginDialog';

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
    const [open, setOpen] = useState(false);
    const openDialog = () =>{
        setOpen(true);
    }
    return(
        <Wrapper>
            <LoginButton  variant="contained" onClick = {() => openDialog()}>Login</LoginButton >
            <LoginButton  variant="contained">Sell</LoginButton >
            <LoginDialog open = {open} setOpen = {setOpen}/>
        </Wrapper>
    )
}

export default CustomButtons;