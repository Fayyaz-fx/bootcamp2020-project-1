import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

const TransactionSummary = () => {
  const { transactions } = useContext(GlobalContext)
  const transactionAmounts = transactions.map((item) => item.transactionAmount)
  console.log(transactionAmounts)
  return (
    <div className='summary-container'>
      <div>
        <h3>income</h3>
        <p className='money plus'>
          ${transactionAmounts.filter((item) => item > 0)}
        </p>
      </div>
      <div>
        <h3>expense</h3>
        <p className='money minus'>
          -${Math.abs(transactionAmounts.filter((item) => item < 0))}
        </p>
      </div>
    </div>
  )
}

export default TransactionSummary
