import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Home from '../Componenets/Home';

const Slogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { email, password };
    axios
      .post("http://localhost:4000/slogin", payload)
      .then((res) => {
        console.log("login: " + res.data.Status);
        if (res.data.Status === "Success") {
          localStorage.setItem('user', JSON.stringify(res.data.user));
          navigate('/shome');
          alert("Login successful");
        } else {
          alert("Wrong credentials");
        }
      })
      .catch((err) => console.log(err));
  };

  let formHandle1 = (e) => {
    e.preventDefault();
    navigate("/ssignup");
  };

  return (
    <div>
      <Home />
      <div className="flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="relative w-full max-w-md p-8 overflow-hidden origin-bottom-right transform -skew-x-6 rounded-lg shadow-xl bg-gradient-to-r from-indigo-600 to-pink-600">
          {/* Front side of the card */}
          <div className="relative z-10">
            <div>
              <h2 className="mb-4 text-3xl font-extrabold text-center text-gray-100">
                Login to Seller account
              </h2>
            </div>
          
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block font-medium text-gray-100 text-md">
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
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block font-medium text-gray-100 text-md">
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
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="px-4 py-2 font-bold text-white transition-all duration-300 bg-indigo-500 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:border-indigo-300"
                >
                  Log in
                </button>
                <br />
                <p className="mt-2 text-sm text-gray-100">
                  Don't have an account? Create
                  <button
                    onClick={formHandle1}
                    className="ml-2 text-white text-indigo-500 transition-all duration-300 hover:underline focus:outline-none focus:ring focus:border-indigo-300"
                  >
                    Signup
                  </button>
                </p>
              </div>
            </form>
          </div>

          {/* Backside tilted gradient background */}
          <div className="absolute top-0 left-0 w-full h-full origin-bottom-right transform -skew-y-6 bg-gradient-to-r from-indigo-600 to-pink-600"></div>
        </div>
      </div>
    </div>
  );
};

export default Slogin;
