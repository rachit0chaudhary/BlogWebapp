import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Select, Option } from "@material-tailwind/react";

function CreatePost() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [newPost, setNewPost] = useState({
    title: "",
    img: null,
    content: "",
    description: "",
    category: "",
  });
  const handleFileChange = (e) => {
    setNewPost((prev) => ({
      ...prev,
      profile: e.target.files[0],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/post/new", newPost)
      .then((result) => {
        navigate("/blogs");
        console.log(result);
      })
      .catch((e) => console.log(e));
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
                    placeholder="Title"
                    className="border border-gray-400 py-1 px-2"
                    onChange={handleInputChange}
                    name="title"
                    value={newPost.title}
                    required
                    style={{ width: "35vh", height: "5vh" }}
                  />

                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    style={{ width: "35vh", height: "5.4vh" }}
                    name="category"
                    value={newPost.category} // Replace 'selectedCategory' with your actual state value
                    onChange={handleInputChange}
                  >
                    <option value="">Choose a Category</option>
                    <option value="Tech">Tech</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Family">Family</option>
                    <option value="Art">Art</option>
                    <option value="Sports">Sports</option>
                    <option value="Religious">Religious</option>
                  </select>
                </div>
                <div className="mt-5 cols-2 gap-5">
                  {" "}
                  <input
                    type="text"
                    className="border border-gray-400 py-1 px-2"
                    onChange={handleInputChange}
                    name="description"
                    value={newPost.description}
                    placeholder="Description"
                  />{" "}
                </div>

                <div className="mt-5 cols-2 gap-5">
                  <label htmlFor="file-upload" className="block text-gray-700">
                    Upload File
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    className=" mr-20 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                    onChange={handleFileChange}
                    name="img"
                  />
                </div>
                <div className="mt-5">
                  <textarea
                    type="text"
                    rows="6"
                    placeholder="Blog"
                    className="border border-gray-400 py-1 px-2 w-full rounded-sm"
                    onChange={handleInputChange}
                    name="content"
                    value={newPost.content}
                    required
                  />
                </div>

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

export default CreatePost;
