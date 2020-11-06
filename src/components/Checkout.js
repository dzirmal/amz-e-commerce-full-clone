import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../stateProvider/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <CheckoutContainer>
      <CheckoutLeft>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Consumer_Electronics/XCM_Manual_ORIGIN_1270501_1388435_US_GH20_us_ce_egg_storefront_2_3416994_1500x90_en_US.jpg'
          alt=''
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2>Your Shopping Cart</h2>
          {cart.map((item, i) => (
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
      </CheckoutLeft>
      <CheckoutRight>
        <Subtotal />
      </CheckoutRight>
    </CheckoutContainer>
  );
}

export default Checkout;

const CheckoutContainer = styled.div`
  display: flex;
  padding: 20px;
  background-color: white;
  height: max-content;
`;

const CheckoutLeft = styled.div`
  & > div {
    & > h2 {
      margin-right: 10px;
      padding: 10px;
      border-bottom: 1px solid lightgray;
    }
  }
  & > img {
    width: 100%;
    margin-bottom: 10px;
  }
`;
const CheckoutRight = styled.div``;
