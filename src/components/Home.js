import React from 'react'
import styled from 'styled-components'
import Product from './Product'
import Slider from './Slider'
import products from './products'

function Home() {
  return (
    <HomeContainer>
      <HomeDiv>
        <Slider />
        <HomeRow>
          {products.map((product) => (
            <Product
              product={product}
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              quantity={product.quantity}
            />
          ))}
        </HomeRow>
      </HomeDiv>
    </HomeContainer>
  )
}

export default Home

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1500px;
`

const HomeDiv = styled.div``

const HomeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`
