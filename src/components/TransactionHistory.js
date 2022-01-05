import React, { useContext } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import GlobalContext from '../context/GlobalContext'
const TransactionHistory = () => {
  const { transactions, delTransaction } = useContext(GlobalContext)
  return (
    <div>
      <h3>transaction history</h3>

      {transactions.map((item) => {
        const { id, description, amount } = item
        const sign = amount > 0 ? '' : '-'
        return (
          <ul className={`list `} key={id}>
            <li className={`${sign === '-' ? 'minus' : 'plus'}`}>
              <span>{description}</span>
              <span>
                {sign}${Math.abs(amount)}
              </span>
              <button className='delete-btn' onClick={() => delTransaction(id)}>
                <FaTrashAlt />
              </button>
            </li>
          </ul>
        )
      })}
    </div>
  )
}

export default TransactionHistory
