import { useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// components
import Home from './components/Home';
import Header from './components/Header';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase';
import { useStateValue } from './stateProvider/StateProvider';
import PaymentPage from './components/PaymentPage';

const promise = loadStripe(
  'pk_test_51HkbEXGYxOSRojkBfzeRmJZk76JKsi6i8aEBKv7xc4jlw784Y5vqkojIUrxzzjaaN5l8mc506iD0Q953Hu4iBjmK00yeek2bvw'
);

function App() {
  const [{}, dispatch] = useStateValue();

  // This is the listener for to keep track who is logged in
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({ type: 'SET_USER', user: authUser });
      } else {
        dispatch({ type: 'SET_USER', user: null });
      }
    });
  }, []);

  return (
    <Router>
      <AppContainer>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <PaymentPage />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;

const AppContainer = styled.div``;
