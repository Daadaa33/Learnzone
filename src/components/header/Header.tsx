import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom";

import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Header = () => {
    const [open, setOpen] = useState(false);
    // const toggle = () => setOpen(!open);
    const menuRef = useRef()

    // window.addEventListener("scroll", function () {
    //     const header = document.querySelector(".headers");
    //     if (window.scrollY >= 10) {
    //       header.style.backgroundColor = "";
    //       header.classList.add = "";
    //     } else {
    //       header.style.backgroundColor = "";
    //     }
    //   });
    
    //   const scrollToTop = () => {
    //     window.scrollTo({
    //       top: 0,
    //       behavior: "smooth",
    //     });
    
    //     setCurrentPage("home");
    //     setOpen(false);
    //   };
    
    //   useEffect(() => {
    //     // const handleClickOutside = (event) => {
    //     //   if (menuRef.current && !menuRef.current.contains(event.target)) {
    //     //     setOpen(false);
    //     //   }
    //     // };
    
    //     const handleEscape = (event) => {
    //       if (event.key === "Escape") {
    //         setOpen(false);
    //       }
    //     };
    
    //     if (open) {
    //       document.addEventListener("mousedown", handleClickOutside);
    //       document.addEventListener("keydown", handleEscape);
    //     } else {
    //       document.removeEventListener("mousedown", handleClickOutside);
    //       document.removeEventListener("keydown", handleEscape);
    //     }
    
    //     return () => {
    //       document.removeEventListener("mousedown", handleClickOutside);
    //       document.removeEventListener("keydown", handleEscape);
    //     };
    //   }, [open]);
    
  return (
    <nav className="headers relative max-w-6xl mx-auto  flex items-center justify-between px-4 py-2">
      <h1 className="text-3xl text-primary font-bold cursor-pointer">
        <Link to="/">LearnZone</Link>
      </h1>

      <nav>
        <ul className="md:flex items-center space-x-10 hidden text-secondary">
          <li className="text-md font-medium ">
            <Link to="">Home</Link>
          </li>
          <li className="font-normal hover:font-medium">
            <Link to="">About</Link>
          </li>
          <li className="font-normal hover:font-medium">
            <Link to="">Courses</Link>
          </li>
          <li className="font-normal hover:font-medium">
            <Link to="">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <div className="md:flex items-center gap-4 hidden">
        <button className="bg-primaryBlue hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
          Login
        </button>
        <button className="bg-secondary hover: text-tertiary font-medium py-2 px-4 rounded">
          Join for Free
        </button>
      </div>
      <div className="md:hidden">
        <FiMenu
          className="w-7 h-7 cursor-pointer"
          onClick={() => setOpen(true)}
        />
      </div>
      {open && (
        <div
          // ref={menuRef}
          className="absolute md:hidden top-0 right-0 w-[17rem] h-screen bg-white"
        >
          <div className="relative flex flex-col items-center justify-center space-y-[10rem] pt-20">
            <ul className="flex flex-col items-center justify-center space-y-10">
              <li className="text-secondary font-medium">
                <Link to="">Home</Link>
              </li>
              <li className="text-secondary font-medium">
                <Link to="">About</Link>
              </li>
              <li className="text-secondary font-medium">
                <Link to="">Courses</Link>
              </li>
              <li className="text-secondary font-medium">
                <Link to="">Contact</Link>
              </li>
            </ul>

            <div className="flex flex-col w-full gap-4">
              <button className="bg-primaryBlue text-center font-medium rounded-full p-2 text-white">
                Sign In
              </button>
              <button className="bg-secondary text-center font-medium rounded-full p-2 text-primary">
                Sign Up
              </button>
            </div>
          </div>
          <MdClose
            className="absolute top-3 right-3 text-secondary w-7 h-7 cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>
      )}
    </nav>
  );
}

export default Header