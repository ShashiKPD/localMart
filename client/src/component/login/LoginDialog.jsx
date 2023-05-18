import { styled } from '@mui/system';
import { Dialog, Box, TextField, Button, Typography } from '@mui/material';
import { useState } from 'react';
const Component = styled(Box)`
  height: 90vh;
  width: 50vh;
  display: flex;
  flex-direction: column;
  padding: 40px 30px ;
  flex: 1;
  text-align: center;
`;
const TextInput = styled(TextField)`
    margin: 15px;
    height: 40px;
`
const InputBtn = styled(Button)`
    margin: 15px;
    background: #E57C23;
    color: #fff;
    height: 40px;
`
const Text = styled(Typography)`
font-size: 12px;
color: #878787;
`;

const CreateAccount = styled(Typography)`
font-size: 14px;
text-align : center;
color: #2874f0;
font-weight: 600;
cursor: pointer;
`;

const accountIntitialValues = {
    login: {
        view:'login'
    },
    signup:{
        view: 'signup'
    }
}

const setSignupInitialValues = {
  username: '',
  email: '',
  password: ''

}

const LoginDialog = ({ open, setOpen }) => {

  const[account,toggleAccount] = useState(accountIntitialValues.login)
  const[signup,setSignup] = useState(setSignupInitialValues)

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountIntitialValues.login);
  };

  const toggleSignup = () => {
    toggleAccount(accountIntitialValues.signup);
  }

  const onInputChange = (e) => {
    console.log(e.target.value);
  }

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxwidth: 'unset'}}}>
        {
            account.view === 'login' ?
            <Component>
                <TextInput id="outlined-basic" label="Email" variant="outlined" />
                <TextInput id="outlined-basic" label="Password" variant="outlined" />
                <InputBtn style={{marginTop: 35}}>Login</InputBtn>
                <Text>
                  By continuing, you agree to LocalMart's Conditions of Use and Privacy Notice.
                </Text>
                <CreateAccount onClick={() =>toggleSignup()}>New to LocalMart? Sign Up</CreateAccount>
          </Component>
          :
          <Component>
                <TextInput id="outlined-basic" label="User Name" variant="outlined onChange={(e)=>onInputChange(e)}" />
                <TextInput id="outlined-basic" label="Email" variant="outlined onChange={(e)=>onInputChange(e)}" />
                <TextInput id="outlined-basic" label="Password" variant="outlined onChange={(e)=>onInputChange(e)}" />
                <InputBtn style={{marginTop: 35}}>Submit</InputBtn>

                
          </Component>

        }
      
    </Dialog>
  );
};

export default LoginDialog;
