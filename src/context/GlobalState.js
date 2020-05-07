import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import AppReducer from './AppReducer';


// Initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getTransactions() {
    try {
      const res = await axios.get("https://hifi-corner.herokuapp.com/api/v1/products");
      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    error: state.error,
    loading: state.loading,
    getTransactions,
  }}>
    {children}
  </GlobalContext.Provider>);
}



