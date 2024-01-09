import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the login data to your authentication endpoint for verification
      console.log(formData.username)
      console.log(formData.password)
      const response = await axios.get(`http://localhost:8091/verifyadmin/${formData.username}/${formData.password}`);

      // Assuming your API returns a success status or some indication of successful login
      if (response.data==="OK") {
        // Redirect to the admin home page
        localStorage.setItem('username',formData.username)
        navigate('/adminhome');
      } else {
        // Show an alert for invalid credentials
        toast.error('Invalid username or password');
      }
    } catch (error) {
      console.error('Error submitting login data:', error);
      // Handle other errors if needed
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
