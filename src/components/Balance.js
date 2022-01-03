import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

const Balance = () => {
  const { transactions } = useContext(GlobalContext)
  const transactionAmounts = transactions.map(
    (transaction) => transaction.transactionAmount
  )
  const balance = transactionAmounts
    .reduce((acc, transaction) => (acc += transaction), 0)
    .toFixed(2)

  return (
    <div className={`text balance ${balance > 0 ? 'plus' : 'minus'}`}>
      <h3>current balance</h3>
      <h2>${balance}</h2>
    </div>
  )
}

export default Balance
