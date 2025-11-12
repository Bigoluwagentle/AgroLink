"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Logo from "../../public/Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between bg-[#FAFAF5] px-5 py-2 relative">
      <Link href="/">
        <Image src={Logo} alt="Logo" width={150} height={50} className="object-contain" />
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        <Link href="/">Home</Link>
        <Link href="/how">How it Works</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <nav className="hidden md:flex items-center gap-4">
        <Link href="/login">
          <button className="text-[#1E8449] cursor-pointer">Login</button>
        </Link>
        <Link href="/register">
          <button className="bg-[#1E8449] px-4 py-2 text-white rounded-sm cursor-pointer">
            Sign Up
          </button>
        </Link>
      </nav>

      <button
        className="md:hidden text-[#1E8449]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-4 p-4 md:hidden z-50">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/how" onClick={() => setIsMenuOpen(false)}>How it Works</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Link href="/login" onClick={() => setIsMenuOpen(false)}>
            <button className="text-[#1E8449] w-full text-left">Login</button>
          </Link>
          <Link href="/register" onClick={() => setIsMenuOpen(false)}>
            <button className="bg-[#1E8449] w-full text-white px-4 py-2 rounded-sm text-left">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
