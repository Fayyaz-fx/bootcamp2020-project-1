import React, { useContext, useState } from 'react'

import GlobalContext from '../context/GlobalContext'

const AddTransaction = () => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')

  const { addTransaction } = useContext(GlobalContext)
  const onSubmit = (e) => {
    e.preventDefault()
    const newTransaction = {
      id: new Date().getTime(),
      description,
      amount: +amount,
    }

    addTransaction(newTransaction)
  }
  return (
    <div>
      <h3>add new transaction</h3>

      <form onSubmit={onSubmit} className='form-control'>
        <div>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Detail of Transaction'
            required='required'
          />
        </div>
        <div>
          <label htmlFor='amount'>Transaction Amount</label>
          <input
            type='number'
            id='amount'
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value)
            }}
            placeholder='Dollar value of Transaction'
            required='required'
          />
        </div>
        <button className='btn'>Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
