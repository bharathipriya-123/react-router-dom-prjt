import React, { useState } from 'react';
import axios from 'axios'; 
import '../style/Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null); 
  const [messageType, setMessageType] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = { email, password };

    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        loginData
      );
      setMessage('Login successful!');
      setMessageType('success');
    } catch (error) {
      setMessage('Login failed.');
      setMessageType('error');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && (
        <p className={`message ${messageType}`}>{message}</p>
      )}
    </div>
  );
}
