import React, { useContext, useState } from 'react'

import GlobalContext from '../context/GlobalContext'

const AddTransaction = () => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0)

  const { addTransaction } = useContext(GlobalContext)
  const onSubmit = (e) => {
    e.preventDefault()
    const newTransaction = {
      id: new Date().getTime(),
      description,
      amount,
    }
    addTransaction(newTransaction)
  }
  return (
    <div>
      <h3>add new transaction</h3>
      <hr />
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Detail of Transaction'
          />
        </div>
        <div>
          <label htmlFor='amount'>Transaction Amount</label>
          <input
            type='text'
            id='amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Dollar value of Transaction'
          />
        </div>
        <button className='btn'>Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
