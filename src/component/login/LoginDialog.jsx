import { styled } from '@mui/system';
import { Dialog, Box, TextField, Button, Typography } from '@mui/material';

const Component = styled(Box)`
  height: 90vh;
  width: 70vh;
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
const LoginDialog = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <Component>
        <TextInput id="outlined-basic" label="Email" variant="outlined" />
        <TextInput id="outlined-basic" label="Password" variant="outlined" />
        <InputBtn>Login</InputBtn>
        <Typography>
          By continuing, you agree to LocalMart's Conditions of Use and Privacy Notice.
        </Typography>
        <Typography>New to LocalMart? Sign Up</Typography>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
