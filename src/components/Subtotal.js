import React from 'react'
import styled from 'styled-components'
import { useStateValue } from '../stateProvider/StateProvider'
import { useHistory } from 'react-router'
import CurFormat from './CurFormat'

function Subtotal() {
  const history = useHistory()
  const [{ cart }, dispatch] = useStateValue()

  return (
    <SubtotalContainer>
      <CurFormat />
      <Button onClick={(e) => history.push('/payment')}>
        Proceed to Checkout
      </Button>
    </SubtotalContainer>
  )
}

export default Subtotal

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
  top: 0;
  position: sticky;
  z-index: 100;
`

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
`
