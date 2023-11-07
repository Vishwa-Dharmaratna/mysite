import React, { useState } from "react";
import "./register.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const registerNavigate = () =>{
    navigate('/login')
  }

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = () => {
    if (!formData.username || !formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    // Reset the form and clear any previous errors
    setFormData({
      username: "",
      email: "",
      password: "",
    });
    setError("");
    // Save the user data to localStorage
    localStorage.setItem("user", JSON.stringify(formData));

    registerNavigate()

    // You can add more validation and error handling here

    // Redirect to another page or show a success message
  };

  return (
    <div className="container">
      <h2>Register</h2>
      {error && <div className="error">{error}</div>}
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
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
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
