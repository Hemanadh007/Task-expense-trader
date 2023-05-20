// pages/Login.js

import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './login.module.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        // Check credentials
        if (email === 'admin@gmail.com' && password === 'abcd1234') {
            // Redirect to Dashboard on successful login
            router.push('/dashboard');
        } else {
            // Show error message or perform necessary actions on failed login
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Login</h1>
            <form onSubmit={handleLogin} className={styles.form}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                />
                <button className={styles.button} type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
