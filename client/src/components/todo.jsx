import React, { useEffect, useState } from "react";

import Post from "./post";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:5000/api/blog")
      .catch((err) => console.log(err));
    const posts = await res.data;
    return posts;
  };

  useEffect(() => {
    sendRequest().then((posts) => setBlogs(posts.blogs));
  }, []);

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
      style={{ backgroundColor: "#DFCCFB" }}
    >
      {blogs.map((blog) => (
        <Post
          id={blog._id}
          imageUrl={blog.img}
          category={blog.category}
          title={blog.title}
          content={blog.data}
          description={blog.description}
          timeAgo={blog.date}
        />
      ))}
    </div>
  );
};

export default Blog;
