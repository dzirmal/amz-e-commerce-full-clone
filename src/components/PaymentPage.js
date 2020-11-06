import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useStateValue } from '../stateProvider/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurFormat from './CurFormat';

function Payment({ title, image, price, rating, id }) {
  const [{ cart, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const element = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [clientSecret, setClientSecret] = useState(true); // is for stripe

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios;
    };
    getClientSecret();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setProcessing(true);
    // const payload = await stripe
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
                <CurFormat />
                <Button disabled={processing || disabled || succeeded}>
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

const Form = styled.form``;

const Links = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Button = styled.button`
  background-color: #f0c14b;
  border-radius: 2px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: black;
  cursor: pointer;
`;
