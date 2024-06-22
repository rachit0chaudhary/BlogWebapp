import { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import store from "./redux/store"; // Adjust the path if neces
import Loader from "./components/loder";
import Navbar from "./components/header";
import Footer from "./components/footer";
import Test from "./components/test";
import { store } from "./store";

const Blogs = lazy(() => import("./components/todo"));
const Login = lazy(() => import("./components/login"));
const SignUp = lazy(() => import("./components/signUp"));
const Userpanel = lazy(() => import("./components/userPanel"));

const ReadMore = lazy(() => import("./components/readMore"));
const Home = lazy(() => import("./components/home"));
const CreatePost = lazy(() => import("./components/createPost"));
const EditPost = lazy(() => import("./components/editPost"));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Loader />}>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/user/id/profile" element={<Userpanel />} />
            <Route path="/post/:id" element={<ReadMore />} />
            <Route path="/post/new" element={<CreatePost />} />
            <Route path="/post/:id/edit" element={<EditPost />} />
            <Route path="/test" element={<Test />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </Provider>
  );
}
export default App;
