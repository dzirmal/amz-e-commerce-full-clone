import React from 'react'
import { useHistory } from 'react-router'
import { CurFormat } from '..'
import { Button } from '../../Helpers/globalStyles'
import { SubtotalContainer } from './Subtotal.elements'

function Subtotal() {
  const history = useHistory()

  return (
    <SubtotalContainer>
      <CurFormat />
      <Button primary big onClick={() => history.push('/payment')}>
        Proceed to Checkout
      </Button>
    </SubtotalContainer>
  )
}

export default Subtotal
