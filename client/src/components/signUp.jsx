import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../features/testSlice"; // Adjust the import path as needed
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    profile: null,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setNewUser((prevUser) => ({
      ...prevUser,
      profile: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newUser);

    // const formData = new FormData();
    // formData.append("name", newUser.name);
    // formData.append("email", newUser.email);
    // formData.append("password", newUser.password);
    // if (newUser.profile) {
    //   formData.append("profile", newUser.profile);
    // }

    axios
      .post("http://localhost:5000/signup", newUser)
      .then((response) => {
        const { token, newUser } = response.data;
        dispatch(setToken(token));
        dispatch(setUser(newUser));
        // localStorage.setItem("token", token);
        navigate("/home");
      })
      .catch((e) => {
        console.log(e);
        alert(e.response.data.error);
      });
  };

  return (
    <main>
      <div
        className="h-80vh py-8"
        style={{ backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)" }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-11/12 lg:w-10/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div
              className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1530686350401-7de25243dd89?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              }}
            ></div>

            <div className="w-full lg:w-1/2 py-6 px-12">
              <h2 className="text-3xl ">Register</h2>
              <p className="mb-4">
                Create your account. It’s free and only take a minute
              </p>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border border-gray-400 py-1 px-2"
                    onChange={handleInputChange}
                    name="name"
                    // value={newUser.name}
                    required
                  />{" "}
                  <br />
                  <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-400 py-1 px-2"
                    onChange={handleInputChange}
                    name="email"
                    // value={newUser.email}
                    required
                  />{" "}
                  <br />
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <input
                    type="password"
                    placeholder="Password"
                    className="border border-gray-400 py-1 px-2"
                    onChange={handleInputChange}
                    name="password"
                    // value={newUser.password}
                    required
                  />{" "}
                  <br />
                  <input
                    type="file"
                    className="border border-gray-400 py-1 px-2"
                    onChange={handleFileChange}
                    name="profile"
                  />
                </div>{" "}
                <br />
                <div className="mt-5">
                  <input
                    type="checkbox"
                    className="border border-gray-400"
                    required
                  />
                  <span className="ml-2">
                    I accept the{" "}
                    <a href="#" className="text-purple-500 font-semibold">
                      Terms of Use
                    </a>{" "}
                    &{" "}
                    <a href="#" className="text-purple-500 font-semibold">
                      Privacy Policy
                    </a>
                  </span>
                </div>
                <div className="mt-5">
                  <button
                    className="w-full bg-purple-500 py-3 text-center text-white"
                    type="submit"
                  >
                    Register Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
