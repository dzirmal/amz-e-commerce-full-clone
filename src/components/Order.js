import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'

function Order({ order }) {
  return (
    <OrderContainer>
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
      <p>
        <OrderId> Order ID: {order.id}</OrderId>
      </p>

      {order.data.cart?.map((item, i) => (
        <CheckoutProduct
          key={item.id}
          item={item}
          // id={item.id}
          // title={item.title}
          // image={item.image}
          // price={item.price}
          // rating={item.rating}
          // quantity={item.quantity}
          hiddenButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 style={{ fontWeight: '500', textAlign: 'right' }}>
              Order Total: {value}
            </h3>
          </>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </OrderContainer>
  )
}

export default Order

const OrderContainer = styled.div`
  padding: 40px;
  margin: 20px 0;
  border: 1px solid lightgray;
  background-color: white;
  position: relative;
`

const OrderId = styled.small`
  position: absolute;
  top: 40px;
  right: 20px;
`
