import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { useStateValue } from '../../stateProvider/StateProvider'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { getCartTotal } from '../../stateProvider/reducer'
import axios from '../../Helpers/axios'
import { db } from '../../Helpers/firebase'
import CurrencyFormat from 'react-currency-format'
import { CheckoutProduct } from '../../components'
import { Button, Links } from '../../Helpers/globalStyles'
import {
  CheckoutItems,
  Form,
  PaymentContainer,
  PaymentDiv,
  PaymentSection,
  PaymentTitle,
  PaymentAddress,
  PaymentItems,
  PaymentDetails,
} from './PaymentPage.elements'

function PaymentPage({ title, image, price, rating, id }) {
  const [{ cart, user }, dispatch] = useStateValue()
  const history = useHistory()
  const stripe = useStripe()
  const elements = useElements()

  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState('')
  const [clientSecret, setClientSecret] = useState(true) // is for stripe

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getCartTotal(cart) * 100}`,
      })
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret()
  }, [cart])

  // console.log('the secret is ', clientSecret);
  // console.log('user', user);

  const handleSubmit = async (event) => {
    event.preventDefault()
    setProcessing(true)

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true)
        setError(null)
        setProcessing(false)
        dispatch({ type: 'EMPTY_CART' })

        // Dispatch the data to the firebase and create a new table of order for the user.
        db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          })
        history.replace('/orders')
      })
    // console.log('payload', payload);
  }

  const handleChange = (event) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  return (
    <PaymentContainer>
      <PaymentDiv>
        <CheckoutItems>
          Checkout ( <Links to='/checkout'>{cart?.length} items</Links>)
        </CheckoutItems>
        <PaymentSection>
          <PaymentTitle>
            <h3>Deliver Address</h3>
          </PaymentTitle>
          <PaymentAddress>
            <p>{user?.email}</p>
            <p>8817 ETA Street</p>
            <p>National City</p>
          </PaymentAddress>
        </PaymentSection>

        <PaymentSection>
          <PaymentTitle>
            <h3>Review items and delivery</h3>
          </PaymentTitle>
          <PaymentItems>
            {cart?.map((item) => (
              <CheckoutProduct item={item} key={item.id} />
            ))}
          </PaymentItems>
        </PaymentSection>

        <PaymentSection>
          <PaymentTitle>
            <h3>Payment Method</h3>
          </PaymentTitle>
          <PaymentDetails className='payment__details'>
            <Form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div>
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3 style={{ fontWeight: '500' }}>
                        Order Total: {value}
                      </h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <Button
                  primary
                  type='submit'
                  disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing...</p> : 'Buy Now'}</span>
                </Button>
              </div>
              {error && <div>{error}</div>}
            </Form>
          </PaymentDetails>
        </PaymentSection>
      </PaymentDiv>
    </PaymentContainer>
  )
}

export default PaymentPage
