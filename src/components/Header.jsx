"use client";

import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Header */}
      <header className="text-[#223614] bg-[#fbf6f1] z-50 relative">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          
          {/* Hamburger LEFT */}
          <div
            className="md:hidden flex flex-col gap-1 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block w-6 h-0.5 bg-[#223614] transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#223614] transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#223614] transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>

          {/* Logo */}
          <h1 className="text-[24px] md:text-[32px] font-bold">
            Lilac Template
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10">
            <li className="hover:text-[#8c7c5f] text-[19px] cursor-pointer">
              Blog
            </li>
            <li className="hover:text-[#8c7c5f] text-[19px] cursor-pointer">
              Contact
            </li>
            <li className="hover:text-[#8c7c5f] text-[19px] cursor-pointer">
              Profile
            </li>
          </ul>
        </div>
      </header>

      {/* Mobile Fullscreen Fade Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#fbf6f1]
        flex flex-col items-center justify-center space-y-10 text-2xl
        transition-all duration-500
        ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          height: "calc(100vh - 72px)",
        }}
      >
        <li
          className="list-none hover:text-[#8c7c5f] cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          Blog
        </li>
        <li
          className="list-none hover:text-[#8c7c5f] cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </li>
        <li
          className="list-none hover:text-[#8c7c5f] cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          Profile
        </li>
      </div>
    </div>
  );
};

export default Header;
