import React from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const Components = styled(Box)`
  padding: 20px 10px;
  background: #F2F2F2;
`;

const Home = () => {
  return (
    <>
      <NavBar />
      <Components>
        <Banner />
      </Components>
    </>
  );
};

export default Home;
