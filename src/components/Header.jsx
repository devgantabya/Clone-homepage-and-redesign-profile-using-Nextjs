"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(false), 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="relative z-50">
      <header className="text-primary bg-[#fbf6f1] relative">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Hamburger */}
          <div
            className="md:hidden flex flex-col gap-1 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block w-6 h-0.5 bg-[#223614] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#223614] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#223614] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </div>

          <h1 className="text-[24px] md:text-[32px] font-bold">
            <Link href="/">Lilac Template</Link>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10">
            <li className="hover:text-[#8c7c5f] text-[19px] cursor-pointer">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:text-[#8c7c5f] text-[19px] cursor-pointer">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="hover:text-[#8c7c5f] text-[19px] cursor-pointer">
              <Link href="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-[#fbf6f1] flex flex-col items-center justify-center space-y-10 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <ul className="flex flex-col items-center space-y-8 text-2xl">
          <li
            onClick={() => setIsOpen(false)}
            className="hover:text-[#8c7c5f] cursor-pointer"
          >
            <Link href="/blog">Blog</Link>
          </li>
          <li
            onClick={() => setIsOpen(false)}
            className="hover:text-[#8c7c5f] cursor-pointer"
          >
            <Link href="/contact">Contact</Link>
          </li>
          <li
            onClick={() => setIsOpen(false)}
            className="hover:text-[#8c7c5f] cursor-pointer"
          >
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
