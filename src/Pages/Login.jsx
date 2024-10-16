import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", { email, password })
      .then(result => {
        console.log(result);
        if(result.data.message === 'Login successful'){
          localStorage.setItem('data', result.data);
          localStorage.setItem('message', result.data.message);
        localStorage.setItem('user', JSON.stringify({
          name: result.data.user.username,         // Assuming 'name' comes from the backend
          email: result.data.user.email,       // Assuming 'email' comes from the backend
        }));
        navigate('/home');
          location.reload()
          
        }else{
          alert('Invalid credentials');
        }
      })
      .catch(err => {
        if (err.code === 'ERR_NETWORK') {
          console.log('Network error. Please check your backend server.');
        } else {
          console.log(err);
  }})
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold font-monospace text-center text-gray-800 mb-6">Login</h1>
      <main className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 sm:max-w-lg md:max-w-xl lg:flex lg:items-center lg:p-12 lg:bg-blue-400 relative overflow-hidden">
        <div className="w-full lg:w-1/2 lg:relative z-20">

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
            </div>
            <div className="form-group">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="text"
                id="email"
                name='email'
                placeholder="Enter email"
                required
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                required
                name='password'
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>
            <div className="form-group form-check flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                className="h-4 w-4 text-blue-600 focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded"
              />
              <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-gray-700">
            Don't have an account?{' '}
            <Link to="/Signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        {/* Image for large screens */}
        <img
          src="./images/bookshelves.png"
          alt="Bookshelves"
          className="hidden lg:block lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full object-contain"
        />
      </main>
    </div>
  );
};

export default Login;
