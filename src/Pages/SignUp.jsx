import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    if(password !== confirmPassword){
      setPasswordError('Passwords do not match');
    }else{
      setPasswordError('');
      axios.post("http://localhost:3001/signup", { username, email, password })
        .then(result => {
          console.log(result)
          navigate('/login')
        })
        .catch(err => console.log(err))
    }
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if(e.target.value !== confirmPassword){
      setPasswordError('Passwords do not match');
    }else{
      setPasswordError('');
    }
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if(e.target.value !== password){
      setPasswordError('Passwords do not match');
    }else{
      setPasswordError('');
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 mt-2">Sign Up</h1>
      <main className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 sm:max-w-lg md:max-w-xl lg:flex lg:items-center lg:p-12 lg:bg-blue-400 relative overflow-hidden">
        <div className="w-full lg:w-1/2 lg:relative z-20">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your name"
                required
                name='username'
                onChange={(e) => {
                  setUsername(e.target.value)
                }
                }
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
                name='email'
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Create a password"
                required
                onChange={handlePasswordChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                required
                onChange={handleConfirmPasswordChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
              {passwordError && <p style={{color: 'red'}}>{passwordError}</p>}
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Sign Up
            </button>
          </form>

          {/* Already have an account? */}
          <p className="mt-4 text-center text-gray-700">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>

        {/* Image for large screens */}
        <img
          src="./images/signup.png"
          alt="Bookshelves"
          className="hidden lg:block lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full object-contain"
        />
      </main>
    </div>
  );
};

export default SignUp;