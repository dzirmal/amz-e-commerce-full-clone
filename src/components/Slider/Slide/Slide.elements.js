import styled from 'styled-components'

export const SlideContainer = styled.div`
  display: flex;
  min-width: 100%;
  overflow: hidden;
  transform: translateX(${(props) => props.xTranslation}%);
  transition: 0.5s;
`

export const SlideImage = styled.img`
  object-fit: contain;
  width: 100%;
  z-index: -1;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`
