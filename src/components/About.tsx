import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 about-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="src/assets/me.jpg"
              alt="Profile"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute inset-0 bg-blue-600/10 rounded-lg"></div>
          </div>
          <div>
            <p className="text-lg text-gray-700 mb-6">
              I'm a passionate Frontend engineer who likes to build sleek,
              high-performance web apps that turn ideas into interactive
              experiences. My interest lies in creating experiences that not
              only look grat but that are built for performance and usability
            </p>
            <p className="text-lg text-gray-700 mb-6">
              I am currently working at{" "}
              <a
                href="https://carestack.com/"
                target="_blank"
                style={{ textDecoration: "underline" }}
              >
                Carestack
              </a>{" "}
              where I created their new product Aeka. I worked on HTML canvas
              manipulation where performance and user interaction was the
              backbone of the application. I previously worked at{" "}
              <a
                href="https://www.inflection.io/"
                target="_blank"
                style={{ textDecoration: "underline" }}
              >
                Inflection.io
              </a>{" "}
              where I created UI components for the platform.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              My journey in technology started with a curiosity to understand
              how things work, which evolved into a career building innovative
              web applications and solving complex technical challenges.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              In my spare time I read both non fiction and fiction.{" "}
              <a
                href="https://www.goodreads.com/book/show/9777.The_God_of_Small_Things"
                target="_blank"
                style={{ textDecoration: "underline" }}
              >
                The God of Small things
              </a>{" "}
              is one of my favorite fiction book and{" "}
              <a
                href="https://www.goodreads.com/book/show/34272565-life-3-0"
                target="_blank"
                style={{ textDecoration: "underline" }}
              >
                Life 3.0
              </a>{" "}
              is one of my favorite non fiction book. You can see me scrolling
              through twitter to read about the new tech.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
