import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  & > img {
  }
`

export const CheckoutProductInfo = styled.div`
  padding-left: 20px;
`

export const Title = styled.p`
  font-size: 17px;
  font-weight: 800px;
`

export const Image = styled.img`
  object-fit: contain;
  width: 180px;
  height: 180px;
`

export const Price = styled.p`
  &::before {
    content: '$';
  }
`
