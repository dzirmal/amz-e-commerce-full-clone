import React from 'react';
import styled from 'styled-components';
import Product from './Product';

function Home() {
  return (
    <HomeContainer>
      <HomeDiv>
        <Image src='https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MzllYzFlMWMt/MzllYzFlMWMt-ZDIxMDFkOTAt-w1500._CB418095224_.jpg' />
      </HomeDiv>

      <HomeRow>
        <Product />
        <Product />
      </HomeRow>
      <HomeRow>
        <Product />
        <Product />
        <Product />
      </HomeRow>
      <HomeRow>
        {' '}
        <Product />
      </HomeRow>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div``;

const HomeDiv = styled.div``;

const Image = styled.img`
  width: 100%;
  z-index: -1;
  margin-bottom: -150px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const HomeRow = styled.div``;
