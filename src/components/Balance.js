import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

const Balance = () => {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map((transaction) => transaction.amount)
  const balance = amounts
    .reduce((acc, transaction) => (acc += transaction), 0)
    .toFixed(2)

  return (
    <div>
      <h4>current balance</h4>
      <h2 className={`money ${balance > 0 ? 'plus' : 'minus'}`}>${balance}</h2>
    </div>
  )
}

export default Balance
