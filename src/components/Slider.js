import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Slide from './Slide'

// import { Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

function Slider() {
  const [xTranslation, setXTranslation] = useState(0)

  const images = [
    'https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MzllYzFlMWMt/MzllYzFlMWMt-ZDIxMDFkOTAt-w1500._CB418095224_.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YzExNTRjZmUt/YzExNTRjZmUt-ZWRmYzNiOWQt-w1500._CB418546933_.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/journeys/NWIxMGIwNWIt/NWIxMGIwNWIt-NjE4MWNhNDQt-w1500._CB417433447_.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/img20/events/OFT/gateway/oft20_desktop_tallhero_1500x600_1x._CB418937950_.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/IMDbTV/gateway/chicagomed/GW_DHERO_ChicagoMed_1500x600_EN-US_8549_v1._CB406110094_.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/kindle/education/merch/gw/GW_Hero_Holiday_Dark_Math_D1x._CB404344480_.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/Events/Holiday/Gateway/US-EN_100220_3monthsfree_ACQ_GW_Hero_D_1500x600_CV59._CB403490035_.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/Brand/JD/2020/1225157-gw_desk_tall-multi_ben-en-songs-1x_1594231150._CB410279486_.png',
    'https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZGNjMmZhYmUt/ZGNjMmZhYmUt-MDNjMDg4ZDgt-w1500._CB416703268_.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/RB-3092_SVOD_TheSecret_DaretoDream/Amazon_GW_DesktopTallHero_RB-3092_SVOD_TheSecret_DaretoDream_v2_1500x600._CB418652501_.jpg',
  ]
  const [autoPlay, setAutoPlay] = useState(12)

  const autoPlayRef = useRef()

  useEffect(() => {
    autoPlayRef.current = goRight
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }
    setInterval(play, autoPlay * 1000)
  }, [autoPlay])

  const goLeft = (e) => {
    e.preventDefault()
    xTranslation === 0
      ? setXTranslation(-100 * (images.length - 1))
      : setXTranslation(xTranslation + 100)
  }

  const goRight = (e) => {
    xTranslation === -100 * (images.length - 1)
      ? setXTranslation(0)
      : setXTranslation(xTranslation - 100)
  }

  return (
    <SliderContainer>
      {images.map((image, index) => (
        <Slide key={index} image={image} xTranslation={xTranslation} />
      ))}
      <Button className='go__left' onClick={goLeft}>
        <ArrowBackIosIcon
          fontSize='large'
          style={{ color: '#db6400', fontSize: 60 }}
        />
      </Button>
      <Button className='go__right' onClick={goRight}>
        <ArrowForwardIosIcon
          fontSize='large'
          style={{ color: '#db6400', fontSize: 60 }}
        />
      </Button>
    </SliderContainer>
  )
}

export default Slider

const SliderContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: -150px;
  overflow: hidden;
`

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 10%;
  border: 1px solid lightgray;
  border-radius: 50%;
  height: 100px;
  background: none;
  cursor: pointer;
  outline: none;
  transition: 0.5s;
  align-items: center;
  &:hover {
    background: rgba(0, 0, 0, 0.356);
  }
  &.go__left {
    left: 0;
  }
  &.go__right {
    right: 0;
  }
`
