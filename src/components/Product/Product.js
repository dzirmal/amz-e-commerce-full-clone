import React from 'react'
import { Button, Quantity, Rating } from '../../Helpers/globalStyles'
import { star } from '../../stateProvider/reducer'
import { useStateValue } from '../../stateProvider/StateProvider'
import {
  ProductContainer,
  ProductInfo,
  ProductImage,
  ProductTitle,
  ProductPrice,
} from './Product.elements'

function Product({
  product: { title, image, price, rating, id, quantity = 1 },
}) {
  const [{ cart }, dispatch] = useStateValue()

  const addToCart = () => {
    // Dispatch the item to the data layer
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        quantity: quantity,
      },
    })
  }

  return (
    <ProductContainer key={id}>
      <ProductInfo>
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>
          <strong>{price}</strong>
        </ProductPrice>
        <Quantity>Quantity: {quantity}</Quantity>
        <Rating>
          {Array(rating)
            .fill()
            .map((_, id) => (
              <p key={id}>{star}</p>
            ))}
        </Rating>
      </ProductInfo>
      <ProductImage src={image} alt='' />
      <Button primary onClick={addToCart}>
        Add to Cart
      </Button>
    </ProductContainer>
  )
}

export default Product
