import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
const TransactionHistory = () => {
  const { transactions, delTransaction } = useContext(GlobalContext)
  return (
    <div>
      <h3>transaction history</h3>
      <hr />
      {transactions.map((item) => {
        const { id, description, transactionAmount } = item
        const sign = transactionAmount > 0 ? '' : '-'
        return (
          <li key={id}>
            <span>{description}</span>
            <span>
              {sign}${Math.abs(transactionAmount)}
            </span>
            <button className='delete-btn' onClick={() => delTransaction(id)}>
              X
            </button>
          </li>
        )
      })}
    </div>
  )
}

export default TransactionHistory
