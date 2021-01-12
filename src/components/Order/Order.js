import React from 'react'
import moment from 'moment'
import CurrencyFormat from 'react-currency-format'
import { CheckoutProduct } from '..'
import { OrderContainer, OrderId, Moment, OrderH2 } from './Order.elements'

function Order({ order }) {
  return (
    <OrderContainer>
      <OrderH2>Order</OrderH2>
      <Moment>
        {moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}
      </Moment>
      <OrderId> Order ID: {order.id}</OrderId>

      {order.data.cart?.map((item, i) => (
        <CheckoutProduct key={item.id} item={item} hiddenButton />
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
