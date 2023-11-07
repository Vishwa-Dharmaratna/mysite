import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const loginNavigate = () => {
    navigate('/')
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      setError('No user is registered. Please register first.');
      return;
    }

    const registeredUser = JSON.parse(storedUser);
    if (
      formData.email === registeredUser.email &&
      formData.password === registeredUser.password
    ) {
      // Login successful
      setError('');
      // You can redirect to another page or show a success message
    } else {
      setError('Invalid email or password. Please try again.');
    }

    loginNavigate()


  };

  return (
    <div className="container">
      <h2>Login</h2>
      {error && <div className="error">{error}</div>}
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
