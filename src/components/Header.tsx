"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-transparent text-[#241F19] px-6 py-4 md:px-16 md:py-6 flex justify-between items-center relative">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo/logo.png"
          alt="Paras LED"
          width={160}
          height={160}
          className="w-32 md:w-40"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8 lg:space-x-12 text-lg">
        {["Home", "About", "Products", "Gallery", "Contact"].map(
          (item, index) => (
            <Link
              key={index}
              href={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(/\s+/g, "")}`
              }
              className="relative pb-1 hover:text-[#7B563B] transition"
            >
              {item}
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#7B563B] transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></span>
            </Link>
          )
        )}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#edeae3] shadow-lg flex flex-col items-center gap-6 py-6 text-lg z-50">
          {["Home", "About", "Products", "Gallery", "Contact"].map(
            (item, index) => (
              <Link
                key={index}
                href={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(/\s+/g, "")}`
                }
                className="relative pb-1 hover:text-[#7B563B] transition"
                onClick={() => setMenuOpen(false)}
              >
                {item}
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#7B563B] transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></span>
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}
