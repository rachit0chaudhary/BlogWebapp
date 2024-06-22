import React from "react";
import About from "./about";
import Guid from "./guid";

function Home() {
  return (
    <main
      style={{
        backgroundColor: "#FEFAF6",
      }}
    >
      <section
        className="bg-yellow-300 bg-cover bg-center"
        style={{
          height: "90vh",
          width: "auto",
          backgroundImage:
            "url(https://images.pexels.com/photos/1432528/pexels-photo-1432528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          opacity: "0.8",
          // backgroundColor: "",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <p
          className="mt-12"
          style={{
            fontSize: "3rem",
            color: "white",
          }}
        >
          Good blogging lines
        </p>
        <p>vire or aim stuff like that</p>
      </section>
      <About />
      <Guid />
    </main>
  );
}

export default Home;
