import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // #ffc100
  return (
    <nav className=" border-gray-200 " style={{ backgroundColor: "#E59BE9" }}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
            className="h-8" //www.flaticon.com/free-icons/to-do" title="to do icons">To do icons created by Freepik - Flaticon</a>"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>
        <div className="flex md:order-2">
          <div className="relative hidden md:block">
            <Link
              to={"/login"}
              type="button"
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Login!
            </Link>
          </div>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <Link
              to={"/login"}
              type="button"
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Login!
            </Link>
          </div>
          <ul
            className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  "
            style={{
              fontSize: "1.4rem",
            }}
          >
            <li>
              <Link
                to={"/home"}
                className="block py-2 px-3 text-orange-900  rounded md:bg-transparent  md:p-0 md:hover:text-black  "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/blogs"}
                className="block py-2 px-3 text-orange-900  rounded md:bg-transparent  md:p-0 md:hover:text-black   "
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to={"/post/new"}
                className="block py-2 px-3 text-red-900  rounded md:bg-transparent  md:p-0 md:hover:text-black   "
              >
                Create Post
              </Link>
            </li>
            <li>
              <Link
                to={"/post/new"}
                className="block py-2 px-3 text-red-900  rounded md:bg-transparent  md:p-0 md:hover:text-black   "
              >
                Membership
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
