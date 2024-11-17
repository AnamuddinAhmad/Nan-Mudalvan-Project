import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Asignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { name, email, password };

    axios
      .post("http://localhost:4000/asignup", payload)
      .then((result) => {
        alert('Account created');
        console.log(result);
        navigate('/alogin');
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to create an account");
      });
  };

  let formHandle1 = (e) => {
    e.preventDefault();
    navigate("/alogin");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-hidden">
      <div className="overflow-hidden relative max-w-md w-full p-8 rounded-lg shadow-xl bg-gradient-to-r from-indigo-600 to-pink-600 transform -skew-x-6 origin-bottom-right">
        {/* Front side of the card */}
        <div className="relative z-10">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-100 text-center mb-4">
              Seller Registration
            </h2>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-100">
                Name
              </label>
              <input
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-100">
                Email address
              </label>
              <input
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-100">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300"
              >
                Signup
              </button>
            </div>

            <p className="text-sm text-gray-100">
              Already have an account?{' '}
              <button
                onClick={formHandle1}
                className="text-indigo-500 hover:underline focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300 text-white"
              >
                Login
              </button>
            </p>
          </form>
        </div>

        {/* Backside tilted gradient background */}
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-indigo-600 to-pink-600 transform -skew-y-6 origin-bottom-right"></div>
      </div>
    </div>
  );
};

export default Asignup;
