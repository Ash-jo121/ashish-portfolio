import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-background min-h-screen flex items-center justify-center relative">
      <div className="text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Hello, I'm{' '}
          <span className="gradient-text font-extrabold">
            Ashish
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Frontend Developer | Problem Solver | Tech Enthusiast
        </p>
        <a
          href="#about"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-200"
        >
          Learn More
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default Hero;