import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 about-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/path/to/uploaded/image.jpg"
              alt="Profile"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute inset-0 bg-blue-600/10 rounded-lg"></div>
          </div>
          <div>
            <p className="text-lg text-gray-700 mb-6">
              I'm a passionate Full Stack Developer with expertise in modern web technologies.
              With a strong foundation in both frontend and backend development, I create
              scalable and efficient solutions that solve real-world problems.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              My journey in technology started with a curiosity to understand how things work,
              which evolved into a career building innovative web applications and solving
              complex technical challenges.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-800 mb-2">Frontend</h3>
                <p className="text-gray-600">React, TypeScript, Tailwind CSS</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-800 mb-2">Backend</h3>
                <p className="text-gray-600">Node.js, Express, PostgreSQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;