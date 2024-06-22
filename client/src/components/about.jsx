import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";

function About() {
  return (
    <main>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 5,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        {/* <SwiperSlide>
          <div
            className=" flex flex-wrap bg-white m-6 mt-non
          rounded-2xl p-4 text-center"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
          >
            <h2 className="text-xl font-bold text-center">
              Inspiration Behind Our Blogging Platform
            </h2>

            <div className="m-4 mt-2">
              <div className="w-3/8 ">
                <img
                  className="w-80 h-70 object-cover rounded-2xl float-right mb-4"
                  src="https://images.pexels.com/photos/1432528/pexels-photo-1432528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Inspiration"
                />
              </div>
              <div className=" w-3/5 h-70 justify-left">
                <p className="  p-4 mt-8">
                  In an era where information travels at the speed of light, I
                  envisioned a platform where voices from around the globe could
                  come together to share their unique perspectives, stories, and
                  insights. This blogging site was born out of a desire to
                  create a space where anyone, regardless of their background or
                  location, could freely express their thoughts and experiences.
                  The goal was to build a community that transcends borders,
                  fostering understanding and connection through the power of
                  words and images.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className=" bg-white m-4 pt-4 
          rounded-2xl text-center"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
          >
            <h2 className="text-xl font-bold  ">Development Journey</h2>{" "}
            <div className="w-full md:w-5/5 p-4 justify-left ">
              <div className="w-full  p-4 mt-9">
                <img
                  className="w-full  object-cover rounded-2xl float-right"
                  style={{
                    height: "50vh",
                  }}
                  src="https://images.pexels.com/photos/2079451/pexels-photo-2079451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Inspiration"
                />
              </div>
              <p className="justify-left ">
                <div className="mb-8">
                  <p>
                    The journey to create this blogging platform began with a
                    simple idea: to give everyone a voice. I wanted to design a
                    site that was not only visually appealing but also
                    user-friendly, ensuring that bloggers of all skill levels
                    could easily share their content. Leveraging the latest web
                    technologies and frameworks, the development process
                    involved several key stages:
                  </p>
                  <p>
                    <strong>1. Conceptualization:</strong> Defining the site's
                    purpose, target audience, and core features. This involved
                    extensive research and brainstorming to understand what
                    users would value most in a blogging platform.
                  </p>
                  <p>
                    <strong>2. Design:</strong> Crafting an intuitive and
                    aesthetically pleasing user interface using tools like Figma
                    and Adobe XD. The focus was on simplicity and elegance,
                    ensuring that users could navigate the site effortlessly.
                  </p>
                  <p>
                    <strong>3. Development:</strong> Utilizing React for a
                    responsive front-end experience and Node.js with Express for
                    the back-end. MongoDB was chosen as the database for its
                    scalability and flexibility. The development phase also
                    included implementing Tailwind CSS for styling, ensuring a
                    modern and cohesive look across the platform.
                  </p>
                  <p>
                    <strong>4. Testing and Optimization:</strong> Rigorous
                    testing was conducted to identify and fix bugs, improve
                    performance, and ensure compatibility across different
                    devices and browsers.
                  </p>
                </div>
              </p>
            </div>
          </div>
        </SwiperSlide> */}

        <SwiperSlide>
          <div
            className="flex flex-wrap bg-white m-6 mt-non
          rounded-2xl"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
          >
            <div className="w-full md:w-3/5 p-4 justify-left ">
              <h2 className="text-xl font-bold mb-4">Key Features</h2>
              <p
                className="justify-left "
                style={{ fontSize: "calc(0.3rem + 1vw)" }}
              >
                <p>
                  Our blogging platform is packed with features designed to
                  enhance the user experience and foster a vibrant community:
                </p>
                <p>
                  <strong>User-Friendly Interface:</strong> An intuitive design
                  that makes it easy for users to write, edit, and publish their
                  blogs. The editor supports rich text formatting, allowing for
                  creative and visually appealing posts.
                </p>
                <p>
                  <strong>Global Community:</strong> Connect with bloggers from
                  all around the world. Read diverse viewpoints and engage in
                  meaningful discussions through comments and likes.
                </p>
                <p>
                  <strong>Photo Sharing:</strong> Enhance your blogs with
                  beautiful images. Our platform supports high-quality photo
                  uploads, allowing you to add a visual dimension to your
                  stories.
                </p>
                <p>
                  <strong>Responsive Design:</strong> Access the platform
                  seamlessly from any device, be it a desktop, tablet, or mobile
                  phone. The site is designed to be fully responsive, ensuring a
                  smooth experience no matter where you are.
                </p>
              </p>
            </div>
            <div className=" p-4 m-4 ">
              <img
                style={{ height: "40vh", width: "30vw" }}
                className="object-cover rounded-2xl"
                src="https://images.pexels.com/photos/9969158/pexels-photo-9969158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Inspiration"
              />
            </div>
            <p
              className="justify-left p-4 "
              style={{ fontSize: "calc(0.3rem + 1vw)" }}
            >
              <p>
                <strong>Advanced Search and Categorization:</strong> Easily find
                blogs on topics that interest you using our advanced search and
                categorization features. Discover new content based on your
                preferences and interests.
              </p>
              <p>
                <strong>Secure and Private:</strong> Your security is our
                priority. We employ robust security measures to protect your
                data and ensure a safe blogging environment.
              </p>
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}

export default About;
