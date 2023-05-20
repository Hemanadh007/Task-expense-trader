
import { setAll, setExpenses } from '@/store';
import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './dashboard.module.css';

const Dashboard = () => {
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem('expenses'));
    if (savedExpenses) {
      dispatch(setExpenses(savedExpenses))
    }
  }, []);

  

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <Link href="/addexpense" className={styles.link}  >Add Expense</Link>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr >
            <th className={styles.th}>Date</th>
            <th className={styles.th}>Title</th>
            <th className={styles.th}>Amount</th>
            <th className={styles.th}>Type</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {expenses.map((expense, index) => (
            <tr key={index} className={styles.tr}>
              <td className={styles.td}>{expense.date}</td>
              <td className={styles.td}>{expense.title}</td>
              <td className={styles.td}>{expense.amount}</td>
              <td className={styles.td}>{expense.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
