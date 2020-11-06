import React from 'react';
import styled from 'styled-components';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../stateProvider/StateProvider';
import { getCartTotal } from '../stateProvider/reducer';

function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <SubtotalContainer>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart?.length} {cart?.length > 1 ? 'items' : 'item'}) :{' '}
              <strong> {value}</strong>
            </p>
            <small style={{ display: 'flex', alignItems: 'center' }}>
              <input style={{ marginRight: '5px' }} type='checkbox' /> This
              order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={'text'}
        prefix={'$'}
      />
      <Button>Proceed to Checkout</Button>
    </SubtotalContainer>
  );
}

export default Subtotal;

const SubtotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100px;
  padding: 20px;
  background-color: #f3f3f3;
  border: 1px solid #dddddd;
  border-radius: 3px;
`;

const Button = styled.button`
  background-color: #f0c14b;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: black;
  cursor: pointer;
`;
