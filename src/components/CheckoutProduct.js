import React from 'react'
import styled from 'styled-components'
import { star } from '../stateProvider/reducer'
import { useStateValue } from '../stateProvider/StateProvider'

function CheckoutProduct({
  title,
  image,
  price,
  rating,
  id,
  hiddenButton,
  quantity,
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
      <img src={image} alt={title} />
      <CheckoutProductInfo>
        <p className='title'>{title}</p>
        <p className='price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div>Quantity: {quantity}</div>
        <Rating>
          {Array(rating)
            .fill()
            .map((_, id) => (
              <p key={id}>{star}</p>
            ))}
        </Rating>
        {!hiddenButton && (
          <Button onClick={removeFromCart}>Remove from Cart</Button>
        )}
      </CheckoutProductInfo>
    </Container>
  )
}

export default CheckoutProduct

const Container = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  & > img {
    object-fit: contain;
    width: 180px;
    height: 180px;
  }
`

const CheckoutProductInfo = styled.div`
  padding-left: 20px;
  & > p {
    &.title {
      font-size: 17px;
      font-weight: 800px;
    }
  }
`

const Rating = styled.div`
  display: flex;
`

const Button = styled.button`
  background-color: #f0c14b;
  border-radius: 2px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: black;
  cursor: pointer;
`
