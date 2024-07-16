import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  
  const [isMobile, setIsMobile] = useState(false)

  const MobileView = () => {
    setIsMobile(!isMobile)
    console.log(isMobile);
  }

  return (
    <nav className="fixed w-full top-0 right-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 sm:py-5 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div>
            <Link to="/home" className="">
              <img src={logo} alt="Logo" className="w-20 h-auto" />
            </Link>
          </div>
          <div className="hidden flex-col content-start md:flex">
            <div className="space-x-20 mb-3 ">
              <Link
                to="/home"
                className="active:rounded-full p-2 active:bg-custom-active"
              >
                Home
              </Link>
              <Link to="/about" className="">
                About
              </Link>
              <Link to="/contact" className="">
                Contact
              </Link>
            </div>
            <div className="space-x-20 ">
              <Link to="/schedule" className="">
                Schedule
              </Link>
              <Link to="/partners" className="">
                Partners
              </Link>
              <Link to="/speakers" className="">
                Speakers
              </Link>
            </div>
          </div>
          <div className="" />
          <div className="md:hidden flex items-center">
            <button onClick={MobileView} className="focus:outline-none">
              {isMobile ? (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )
            }
            </button>
          </div>
        </div>
      </div>
      {isMobile && (
        <div className="flex flex-col md:hidden mt-5 items-center transition-transform duration-500">
        <div className="space-x-20 mb-3">
          <Link
            to="/home"
            className="active:rounded-full p-2 active:bg-custom-active"
          >
            Home
          </Link>
          <Link to="/about" className="text-base font-medium">
            About
          </Link>
          <Link to="/contact" className="hover:bg-orange-200 peer-active:bg-orange-500 rounded-full p-2">
            Contact
          </Link>
        </div>
        <div className="space-x-20 ">
          <Link to="/schedule" className="">
            Schedule
          </Link>
          <Link to="/partners" className="">
            Partners
          </Link>
          <Link to="/speakers" className="">
            Speakers
          </Link>
        </div>
      </div>
      )}
    </nav>
  );
}

export default Navbar;
