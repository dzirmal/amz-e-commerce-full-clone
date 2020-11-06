import React, { createContext, useContext, useReducer } from 'react';

// Setup data layer
// We need this to track the cart

// THIS IS THE DATA LAYER
export const StateContext = createContext();

// This one wraps our app and provides the data layer
//BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// After creating this file "StateProvider.js" we must import it in index.js and use it to wrapped the entire App in this file. see below. Then create the reducer.js file
// <StateProvider> <App/> </StateProvider>

// This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);
