import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

const TransactionSummary = () => {
  const { transactions } = useContext(GlobalContext)
  const transactionAmounts = transactions.map((item) => item.amount)

  return (
    <div className='summary-container'>
      <div>
        <h4>income</h4>
        <p className='money plus'>
          ${transactionAmounts.filter((item) => item > 0)}
        </p>
      </div>
      <div>
        <h4>expense</h4>
        <p className='money minus'>
          -${Math.abs(transactionAmounts.filter((item) => item < 0))}
        </p>
      </div>
    </div>
  )
}

export default TransactionSummary
