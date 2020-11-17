import React from 'react'
import { getCartTotal } from '../stateProvider/reducer'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../stateProvider/StateProvider'
import { getQuantityInCart } from '../stateProvider/reducer'

function CurFormat() {
  const [{ cart, user }, dispatch] = useStateValue()

  return (
    <div>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({getQuantityInCart(cart)}{' '}
              {getQuantityInCart(cart) > 1 ? 'items' : 'item'}) :{' '}
              <strong> {value}</strong>
            </p>
            <small
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '5px',
                cursor: 'pointer',
              }}>
              <input
                style={{ marginRight: '5px', cursor: 'pointer' }}
                type='checkbox'
              />{' '}
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={'text'}
        prefix={'$'}
      />
    </div>
  )
}

export default CurFormat
