import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/image1.svg";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const { pathname } = useLocation();
  const subpage = pathname.split("/")[1]; // Adjusted to split by '/' directly

  // Function to toggle mobile view
  const toggleMobileView = () => {
    setIsMobile(!isMobile);
  };

  // Function to determine active link classes
  const getLinkClasses = (type) => {
    let classes = "rounded-full p-2";

    if (type === subpage) {
      classes += " bg-orange-500 text-white"; // Active link styles
    } else {
      classes += " bg-white text-gray-700"; // Inactive link styles
    }

    return classes;
  };

  return (
    <nav className="fixed w-full top-0 right-0 left-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 sm:py-5 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div>
            <Link to="/home">
              <img src={logo} alt="Logo" className="w-20 h-auto" />
            </Link>
          </div>
          <div className="hidden md:flex md:flex-col items-start">
            <div className="space-x-20 mb-3">
              <Link
                to="/home"
                className={`rounded-full p-2 ${getLinkClasses("home")}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`rounded-full p-2 ${getLinkClasses("about")}`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`rounded-full p-2 ${getLinkClasses("contact")}`}
              >
                Contact
              </Link>
            </div>
            <div className="space-x-20">
              <Link
                to="/schedule"
                className={`rounded-full p-2 ${getLinkClasses("schedule")}`}
              >
                Schedule
              </Link>
              <Link
                to="/partners"
                className={`rounded-full p-2 ${getLinkClasses("partners")}`}
              >
                Partners
              </Link>
              <Link
                to="/speakers"
                className={`rounded-full p-2 ${getLinkClasses("speakers")}`}
              >
                Speakers
              </Link>
            </div>
          </div>
          <div className="" />
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileView}
              className="focus:outline-none p-2"
            >
              {isMobile ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && (
        <div className="md:hidden flex flex-col mt-5 items-center">
          <div className="space-x-20 mb-3">
            <Link
              to="/home"
              className={`rounded-full p-2 ${getLinkClasses("home")}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`rounded-full p-2 ${getLinkClasses("about")}`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`rounded-full p-2 ${getLinkClasses("contact")}`}
            >
              Contact
            </Link>
          </div>
          <div className="space-x-20">
            <Link to="/schedule" className="rounded-full p-2">
              Schedule
            </Link>
            <Link to="/partners" className="rounded-full p-2">
              Partners
            </Link>
            <Link to="/speakers" className="rounded-full p-2">
              Speakers
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
