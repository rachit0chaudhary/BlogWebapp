import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../features/testSlice";
// import { setTo, setInfo } from "../redux/userSlice";

function Login() {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", user)
      .then((response) => {
        console.log(response.data);
        const { token, user: userInfo } = response.data;
        console.log(token);
        console.log(userInfo);
        localStorage.setItem("token", token);
        dispatch(setToken(token));
        dispatch(setUser(userInfo));
        // dispatch(setTo(token));
        // dispatch(setInfo(userInfo));

        if (token) console.log(token);
        Navigate("/home");
      })

      .catch((e) => {
        console.log(e);
        alert(e.response.data.error);
      });

    console.log(user);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
        <div className="flex-1 ml-8 bg-gray-900 text-center hidden md:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://www.tailwindtap.com/assets/common/marketing.svg)`,
            }}
          ></div>
        </div>
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className=" flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold text-gray-900">
                User Login
              </h1>
              <p className="text-[12px] text-gray-500">
                Hey enter your details to Login
              </p>
            </div>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs flex flex-col gap-4">
                {/* <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Enter your name"
                  onChange={(e) => setuser({ ...user, name: e.target.value })}
                /> */}
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setuser({ ...user, email: e.target.value })}
                />

                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setuser({ ...user, password: e.target.value })
                  }
                />
                <button
                  type="submit"
                  className="mt-5 tracking-wide font-semibold bg-gray-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">LogIn</span>
                </button>
                <p className="mt-6 text-lg text-gray-600 text-center">
                  Don't have an account?{" "}
                  <Link to={"/signUp"}>
                    {" "}
                    <span className="text-blue-700 font-semibold font-bold">
                      Register
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
