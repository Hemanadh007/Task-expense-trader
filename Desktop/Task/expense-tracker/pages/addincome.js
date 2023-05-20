// pages/AddIncome.js

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addIncome } from '../store';

const AddIncome = () => {
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('credit');
  const dispatch = useDispatch();

  const handleAddIncome = (e) => {
    e.preventDefault();
    // Create an income object
    const income = {
      date,
      title,
      amount,
      type,
    };
    // Dispatch action to add income to the state
    dispatch(addIncome(income));
    // Save the updated incomes array to local storage
    const savedIncomes = JSON.parse(localStorage.getItem('incomes')) || [];
    savedIncomes.push(income);
    localStorage.setItem('incomes', JSON.stringify(savedIncomes));
    // Reset the form
    setDate('');
    setTitle('');
    setAmount('');
    setType('credit');
  };

  return (
    <div>
      <h1>Add Income</h1>
      <form onSubmit={handleAddIncome}>
        <input
          type="text"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="debit">Debit</option>
          <option value="credit">Credit</option>
        </select>
        <button type="submit">Add Income</button>
      </form>
    </div>
  );
};

export default AddIncome;
