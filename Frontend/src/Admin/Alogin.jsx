import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Home from '../Componenets/Home';

const Alogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { email, password };
    axios
      .post("http://localhost:4000/alogin", payload)
      .then((res) => {
        console.log("login: " + res.data.Status);
        if (res.data.Status === "Success") {
          console.log(res.data.user);
          localStorage.setItem('user', JSON.stringify(res.data.user));
          navigate('/ahome');
          alert("Login successful");
        } else {
          alert("Wrong credentials");
        }
      })
      .catch((err) => console.log(err));
  };

  let formHandle1 = (e) => {
    e.preventDefault();
    navigate("/asignup");
  };

  return (
    <div>
      <Home />
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative max-w-md w-full p-8 rounded-lg shadow-xl bg-gradient-to-r from-indigo-600 to-pink-600 transform -skew-x-6 origin-bottom-right overflow-hidden">
          {/* Front side of the card */}
          <div className="relative z-10">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-100 text-center mb-4">
                Log into Admin account
              </h2>
            </div>
          
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-md font-medium text-gray-100">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-md font-medium text-gray-100">
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
                  Log in
                </button>
                <br />
                <p className="mt-2 text-sm text-gray-100">
                  Don't have an account? Create
                  <button
                    onClick={formHandle1}
                    className="ml-2 text-indigo-500 hover:underline focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300 text-white"
                  >
                    Signup
                  </button>
                </p>
              </div>
            </form>
          </div>

          {/* Backside tilted gradient background */}
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-indigo-600 to-pink-600 transform -skew-y-6 origin-bottom-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Alogin;
