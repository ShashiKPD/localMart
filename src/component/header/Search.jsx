import { InputBase, Box } from '@mui/material';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    background: #fff;
    width: 80%;
    border-radius: 10px;
    margin-left: 30px;
    display: flex;
    
`;

const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
`;

const SearchIconWrapper = styled(Box)`
    color: #466a8b;
    padding: 5px;
`;

const Search = () => {
    return (
        <SearchContainer>
            <InputSearchBase placeholder="Search in Local Mart" />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
        </SearchContainer>
    );
};

export default Search;
