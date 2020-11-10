import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useStateValue } from '../stateProvider/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { getCartTotal } from '../stateProvider/reducer';
import axios from '../axios';
import { db } from '../firebase';
import CurrencyFormat from 'react-currency-format';

function Payment({ title, image, price, rating, id }) {
  const [{ cart, user }, dispatch] = useStateValue();
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [clientSecret, setClientSecret] = useState(true); // is for stripe

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getCartTotal(cart) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [cart]);

  // console.log('the secret is ', clientSecret);
  // console.log('user', user);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({ type: 'EMPTY_CART' });

        // Dispatch the data to the firebase and create a new table of order for the user.
        db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        history.replace('/orders');
      });
    // console.log('payload', payload);
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  return (
    <PaymentContainer>
      <PaymentDiv>
        <h1>
          Checkout ( <Links to='/checkout'>{cart?.length} items</Links>)
        </h1>
        <PaymentSection>
          <div className='payment__title'>
            <h3>Deliver Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>817 ETA Street</p>
            <p>National City</p>
          </div>
        </PaymentSection>

        <PaymentSection>
          <div className='payment__title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment__items'>
            {cart?.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </PaymentSection>

        <PaymentSection>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__details'>
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
                  type='submit'
                  disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing...</p> : 'Buy Now'}</span>
                </Button>
              </div>
              {error && <div>{error}</div>}
            </Form>
          </div>
        </PaymentSection>
      </PaymentDiv>
    </PaymentContainer>
  );
}

export default Payment;

const PaymentContainer = styled.div`
  background-color: white;
`;

const PaymentDiv = styled.div`
  & > h1 {
    text-align: center;
    padding: 10px;
    font-weight: 400px;
    background-color: rgb(234, 237, 237);
    border-bottom: 1px solid lightgray;
  }
`;

const PaymentSection = styled.div`
  display: flex;
  padding: 20px;
  margin: 0 20px;
  border-bottom: 1px solid lightgray;
  & > div {
    &.payment__title {
      flex: 0.2;
    }
    &.payment__address {
      flex: 0.8;
    }
    &.payment__items {
      flex: 0.8;
    }
    &.payment__details {
      flex: 0.8;
    }
  }
`;

const Form = styled.form`
  max-width: 400px;
`;

const Links = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Button = styled.button`
  background-color: #f0c14b;
  width: 100%;
  height: 30px;
  border-radius: 2px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: black;
  font-weight: bolder;
  cursor: pointer;
`;
