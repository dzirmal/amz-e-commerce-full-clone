import React from 'react'
import styled from 'styled-components'

function Slide({ image, xTranslation }) {
  return (
    <SlideContainer xTranslation={xTranslation}>
      <Image src={image} alt='' />
    </SlideContainer>
  )
}

export default Slide

const SlideContainer = styled.div`
  display: flex;
  min-width: 100%;
  overflow: hidden;
  transform: translateX(${(props) => props.xTranslation}%);
  transition: 0.5s;
`

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  z-index: -1;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`
