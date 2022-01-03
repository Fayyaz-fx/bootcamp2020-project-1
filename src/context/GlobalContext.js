import { createContext, useReducer } from 'react'
import { AppReducer } from './AppReducer'

const initialState = {
  transactions: [
    { id: 1, description: 'project 1 income', transactionAmount: 1500 },
    { id: 2, description: 'project 2 income', transactionAmount: -500 },
  ],
}
const GlobalContext = createContext(initialState)
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  function delTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    })
  }
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    })
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        delTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
