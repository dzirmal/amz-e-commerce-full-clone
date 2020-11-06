import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import Product from './Product';

function Home() {
  return (
    <HomeContainer>
      <HomeDiv>
        <Image src='https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MzllYzFlMWMt/MzllYzFlMWMt-ZDIxMDFkOTAt-w1500._CB418095224_.jpg' />
        <HomeRow>
          <Product
            id={uuidv4()}
            title='Sony Alpha A6100 Mirrorless Camera with 16-50mm Zoom Lens, Black (ILCE6100L/B)'
            price={1583.22}
            image='https://m.media-amazon.com/images/I/41kNfeZWcnL._AC_SY200_.jpg'
            rating={5}
          />

          <Product
            id={uuidv4()}
            title='Canon EOS 80D DSLR Camera Deluxe Video Kit with Canon EF-S 18-55mm f/3.5-5.6 is STM Lens +Video Pro Microphone + SanDisk 32GB SD Memory Card + Accessory Bundle'
            price={1823.32}
            image='https://m.media-amazon.com/images/I/51yxhAhP0NL._AC_SY200_.jpg'
            rating={4}
          />
        </HomeRow>
        <HomeRow>
          <Product
            id={uuidv4()}
            title='Garmin vivoactive 4, GPS Smartwatch, Features Music, Body Energy Monitoring, Animated Workouts, Pulse Ox Sensors and More, Black'
            price={483.2}
            image='https://m.media-amazon.com/images/I/41DwmM5SHdL._AC_SY200_.jpg'
            rating={4}
          />
          <Product
            id={uuidv4()}
            title='Sonos Move - Battery-powered Smart Speaker, Wi-Fi and Bluetooth with Alexa built-in - Black​​​​​​​'
            price={194.45}
            image='https://m.media-amazon.com/images/I/51nVecRsxiL._AC_SY200_.jpg'
            rating={5}
          />
          <Product
            id={uuidv4()}
            title='Panasonic ErgoFit In-Ear Earbud Headphones RP-HJE120K Dynamic Crystal-Clear Sound, Ergonomic Comfort-Fit, 9mm, Black'
            price={173.22}
            image='https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/AA/Headphones_Storefront_Budget.jpg'
            rating={5}
          />
        </HomeRow>
        <HomeRow>
          <Product
            id={uuidv4()}
            title='Samsung CJ89 43" Curved UltraWide 3840 X 1200 Resolution 120Hz Monitor (LC43J890DKNXZA)'
            price={2461.12}
            image='https://m.media-amazon.com/images/I/81v90JtbImL._AC_UY218_.jpg'
            rating={5}
          />
        </HomeRow>
      </HomeDiv>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1500px;
`;

const HomeDiv = styled.div``;

const Image = styled.img`
  width: 100%;
  z-index: -1;
  margin-bottom: -150px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const HomeRow = styled.div`
  display: flex;
  z-index: 1;
  margin-left: 5px;
  margin-right: 5px;
`;
