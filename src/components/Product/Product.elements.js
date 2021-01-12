import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 20px;
  width: 300px;
  height: flex;
  background-color: white;
  z-index: 1;
  justify-content: flex-end;
`

export const ProductInfo = styled.div`
  height: 150px;
  margin-bottom: 15px;
`

export const ProductTitle = styled.p``

export const ProductPrice = styled.p`
  margin-top: 5px;
  &::before {
    content: '$';
  }
`

export const ProductImage = styled.img`
  max-width: 500px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 15px;
  background-color: white;
  max-height: 400px;
`
