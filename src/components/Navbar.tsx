import React from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4 w-full justify-between">
              <div>
                <a
                  href="#home"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2"
                >
                  About
                </a>
                <a
                  href="#experience"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2"
                >
                  Experience
                </a>
                <a
                  href="#projects"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2"
                >
                  Contact
                </a>
              </div>
              <div className="flex items-center space-x-4 ml-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 text-gray-700 hover:text-gray-900" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 text-gray-700 hover:text-gray-900" />
                </a>
                <a href="mailto:your.email@example.com">
                  <Mail className="w-5 h-5 text-gray-700 hover:text-gray-900" />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block text-gray-700 hover:text-gray-900 px-3 py-2"
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-gray-700 hover:text-gray-900 px-3 py-2"
            >
              About
            </a>
            <a
              href="#experience"
              className="block text-gray-700 hover:text-gray-900 px-3 py-2"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="block text-gray-700 hover:text-gray-900 px-3 py-2"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-gray-900 px-3 py-2"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
