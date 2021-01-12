import React from 'react'
import products from '../../Helpers/products'
import { Product, Slider } from '../../components'
import {
  HomePageContainer,
  HomePageDiv,
  HomePageRow,
} from './HomePage.elements'

function HomePage() {
  return (
    <HomePageContainer>
      <HomePageDiv>
        <Slider />
        <HomePageRow>
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </HomePageRow>
      </HomePageDiv>
    </HomePageContainer>
  )
}

export default HomePage
