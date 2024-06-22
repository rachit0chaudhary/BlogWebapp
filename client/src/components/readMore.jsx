import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ReadMore() {
  const id = useParams().id;
  const [blog, setBlog] = useState({});

  const getBlog = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/blog/${id}`)
      .catch((err) => console.log(err));
    const post = await res.data;
    return post;
  };

  useEffect(() => {
    getBlog().then((post) => setBlog(post.blog));
  }, []);

  return (
    <div>
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${blog.img})`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0px)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section
          className="relative py-4 "
          style={{ backgroundColor: "#E5D4FF" }}
        >
          <div className="container mx-auto px-4">
            <div
              className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-xl rounded-lg -mt-64"
              style={{ backgroundColor: "#FDF7E4" }}
            >
              <div className="px-6">
                {/* <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div> */}

                <div className="text-center mt-6">
                  <h3 className="text-4xl font-semibold leading-normal  text-blueGray-700 mb-2">
                    {blog.title}
                  </h3>
                </div>
                <div className="mt-4 py-2  text-center border-t-2 border-pink-300">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        {blog.content}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-left lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <p
                        className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        User Name
                      </p>
                    </div>
                  </div>

                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          {blog.date}
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Created At
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ReadMore;
