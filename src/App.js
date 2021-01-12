import { useEffect } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import { auth } from './Helpers/firebase'
import { useStateValue } from './stateProvider/StateProvider'

import GlobalStyle from './Helpers/globalStyles'

import { Header } from './components'

import {
  CheckoutPage,
  HomePage,
  LoginPage,
  OrdersPage,
  PaymentPage,
} from './Pages'

const promise = loadStripe(
  'pk_test_51HkbEXGYxOSRojkBfzeRmJZk76JKsi6i8aEBKv7xc4jlw784Y5vqkojIUrxzzjaaN5l8mc506iD0Q953Hu4iBjmK00yeek2bvw'
)

function App() {
  const [{}, dispatch] = useStateValue()

  // This is the listener for to keep track who is logged in
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: 'SET_USER', user: authUser })
      } else {
        dispatch({ type: 'SET_USER', user: null })
      }
    })
  }, [])

  return (
    <>
      <Router>
        <GlobalStyle />
        <AppContainer>
          <Switch>
            <Route path='/orders'>
              <Header />
              <OrdersPage />
            </Route>
            <Route path='/login'>
              <LoginPage />
            </Route>
            <Route path='/checkout'>
              <Header />
              <CheckoutPage />
            </Route>
            <Route path='/payment'>
              <Header />
              <Elements stripe={promise}>
                <PaymentPage />
              </Elements>
            </Route>
            <Route path='/'>
              <Header />
              <HomePage />
            </Route>
          </Switch>
        </AppContainer>
      </Router>
    </>
  )
}

export default App

const AppContainer = styled.div``
