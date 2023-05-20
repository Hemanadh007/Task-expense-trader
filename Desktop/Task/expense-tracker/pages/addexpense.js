// pages/AddExpense.js

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../store';
import Link from 'next/link';
import styles from './addexpense.module.css';


const AddExpense = () => {
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('debit');
    const dispatch = useDispatch();

    const handleAddExpense = (e) => {
        e.preventDefault();
        // Create an expense object
        const expense = {
            date,
            title,
            amount,
            type,
        };
        // Dispatch action to add expense to the state
        dispatch(addExpense(expense));
        // Save the updated expenses array to local storage
        const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
        savedExpenses.push(expense);
        localStorage.setItem('expenses', JSON.stringify(savedExpenses));
        // Reset the form
        setDate('');
        setTitle('');
        setAmount('');
        setType('debit');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Add Expense</h1>
            <Link href="/dashboard" className={styles.link}>View Expenses</Link>
            <form onSubmit={handleAddExpense} className={styles.form}>

                <div>
                    <div> 
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className={styles.input}
                        />
                        <input
                            type="Date"
                            placeholder="Date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            placeholder="Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className={styles.input}
                        />
                        <select value={type} onChange={(e) => setType(e.target.value)} className={styles.select}>
                            <option value="debit">Debit</option>
                            <option value="credit">Credit</option>
                        </select>
                    </div>
                </div>

                <button type="submit" className={styles.button}>Add Expense</button>
            </form>
        </div>
    );
};

export default AddExpense;
