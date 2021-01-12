import React from 'react'
import { SlideContainer, SlideImage } from './Slide.elements'

function Slide({ image, xTranslation }) {
  return (
    <SlideContainer xTranslation={xTranslation}>
      <SlideImage src={image} alt='' />
    </SlideContainer>
  )
}

export default Slide
