import { AppBar, Toolbar, Box } from '@mui/material';
import { styled } from '@mui/system';
import LocalMartLogo from './LocalMart.png';
import Search from './Search';
import CustomButtons from './CustomButtons';

const StyledHeader = styled(AppBar)`
    background: #025464;
`;

const Logo = styled('img')`
    display: flex;
    width: 100px;
    border-radius: 5px;
`; 


const Header = () => {
    return (
        <StyledHeader>
            <Toolbar>
                <Box component="div">
                    <Logo src={LocalMartLogo} alt="logo" />
                </Box>
                <Search />
                <Box>
                    <CustomButtons/>
                </Box>
            </Toolbar>
        </StyledHeader>
    );
};

export default Header;
