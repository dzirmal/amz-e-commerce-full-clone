import React from 'react'
import { star } from '../../stateProvider/reducer'
import { useStateValue } from '../../stateProvider/StateProvider'
import { Button, Rating, Stars, Quantity } from '../../Helpers/globalStyles'
import {
  CheckoutProductInfo,
  Container,
  Image,
  Price,
  Title,
} from './Checkout.elements'

function CheckoutProduct({
  item: { title, image, price, rating, id, hiddenButton, quantity },
}) {
  const [{ cart }, dispatch] = useStateValue()

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    })
  }

  return (
    <Container key={id}>
      <Image src={image} alt={title} />
      <CheckoutProductInfo>
        <Title className='title'>{title}</Title>
        <Price className='price'>
          <strong>{price}</strong>
        </Price>
        <Quantity>Quantity: {quantity}</Quantity>
        <Rating>
          {Array(rating)
            .fill()
            .map((_, id) => (
              <Stars key={id}>{star}</Stars>
            ))}
        </Rating>
        {!hiddenButton && (
          <Button primary onClick={removeFromCart}>
            Remove from Cart
          </Button>
        )}
      </CheckoutProductInfo>
    </Container>
  )
}

export default CheckoutProduct
