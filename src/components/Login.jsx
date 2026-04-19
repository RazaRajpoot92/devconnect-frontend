import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    try {
      if(email == "" || password ==""){
        toast.error("Please enter email and password")
        return
      }
      const res = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      toast.success(`Welcome ${res.data.data.firstName}, Logged in Successfully`,{
        theme:"dark"
      })
      console.log(res.data.data.firstName);

    } catch (err) {
      console.log(err.response.data.message);
      toast.error(err.response.data.message)
    }
  };

  return (
    <div className="flex justify-center my-5 ">
      <ToastContainer/>
      <div className="card card-border bg-primary w-96 h-80">
        <div className="card-body flex flex-col items-center gap-4">
          <h1 className="text-3xl text-center font-semibold mb-3">Login</h1>
          {/* email */}

          <label className="input ">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              required
            />
          </label>

          {/* Password */}

          <label className="input ">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
          </label>

          <div className="card-actions justify-center mt-5">
            <button onClick={handleClick} className="btn btn-neutral w-30 ">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
