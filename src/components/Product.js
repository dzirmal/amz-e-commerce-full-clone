import React from 'react'
import styled from 'styled-components'
import { useStateValue } from '../stateProvider/StateProvider'
import { star } from '../stateProvider/reducer'

function Product({
  product,
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
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div>Quantity: {quantity}</div>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, id) => (
              <p key={id}>{star}</p>
            ))}
        </div>
      </ProductInfo>
      <Image src={image} alt='' />
      <Button onClick={addToCart}>Add to Cart</Button>
    </ProductContainer>
  )
}

export default Product

const ProductContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 10px;
  padding: 20px;
  width: 100%;
  max-height: 400px;
  min-width: 100px;
  background-color: white;
  z-index: 1; */

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 20px;
  width: 300px;
  height: flex;
  background-color: white;
  /* text-align: center; */
  z-index: 1;
  justify-content: flex-end;
`

const ProductInfo = styled.div`
  height: 150px;
  margin-bottom: 15px;
  & > div {
    display: flex;
  }
  & > p {
    &.product__price {
      margin-top: 5px;
    }
  }
`

const Image = styled.img`
  max-width: 500px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 15px;
  background-color: white;
  max-height: 400px;
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
