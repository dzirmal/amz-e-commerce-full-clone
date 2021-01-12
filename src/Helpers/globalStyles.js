import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import { devices } from './device'

const GlobalStyle = createGlobalStyle`
* {
 box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif ,}
`
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media ${devices.tabletL} {
    padding-right: 30px;
    padding-left: 30px;
  }
`

export const Rating = styled.div`
  display: flex;
`

export const Stars = styled.p``

export const Star = styled.img`
  object-fit: contain;
  margin: -2px;
`

export const Quantity = styled.p``

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ primary }) => (primary ? '#f0c14b' : 'darkgrey')};
  border-radius: 2px;
  border: 1px solid;
  width: ${({ big }) => (big ? '100%' : '50%')};
  height: 30px;
  margin-top: 10px;
  border-color: ${({ primary }) =>
    primary ? '#a88734 #9c7e31 #846a29;' : 'darkgrey'};

  padding: 5px;
  color: black;
  cursor: pointer;
`

// export const Button = styled.button`
//   display: flex;
//   justify-content: center;
//   border-radius: 4px;
//   align-items: center;
//   background: ${({ primary }) => (primary ? '#364f6b' : '#00adb5')};
//   white-space: nowrap;
//   padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
//   color: ${({ primary }) => (primary ? '#0BD5EA' : '#fff')};
//   font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
//   outline: none;
//   border: none;
//   cursor: pointer;
//   margin-right: ${({ marginRight }) => (marginRight ? '10px ' : '0')};
//   margin-left: ${({ marginLeft }) => (marginLeft ? '0 ' : '10')};

//   &:hover {
//     transition: all 0.3s ease-out;
//     color: ${({ primary }) => (primary ? '#000' : '#0BD5EA')};
//     background: ${({ primary }) => (primary ? '#00adb5' : '#364f6b')};
//     border: 1px solid ${({ primary }) => (primary ? '#364f6b' : '#0BD5EA')};
//   }

//   @media ${devices.mobileS} {
//     max-width: 100%;
//     margin-top: 10px;
//   }

//   @media ${devices.tabletL} {
//     width: 100%;
//     align-items: center;
//     margin-top: 10px;
//   }
// `

export const Links = styled(Link)`
  text-decoration: none;
  color: #fff;
`

export default GlobalStyle
