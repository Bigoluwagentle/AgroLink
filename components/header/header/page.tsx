"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Logo from "../../../public/Logo.png";
import User from "../../../public/user.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex fixed top-0 w-full items-center justify-between bg-white px-5 py-2 shadow-md z-50">
      <Link href="/">
        <Image
          src={Logo}
          alt="Logo"
          width={150}
          height={50}
          className="object-contain"
        />
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        <Link href="/">Home</Link>
        <Link href="/how">How it Works</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <div className="hidden md:flex items-center gap-4">
        <Image
          src={User}
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
          alt="User profile"
        />
      </div>

      <button
        className="md:hidden text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-4 p-4 md:hidden z-40">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/how" onClick={() => setIsMenuOpen(false)}>How it Works</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <div className="flex justify-start mt-2">
            <Image
              src={User}
              width={40}
              height={40}
              className="rounded-full cursor-pointer"
              alt="User profile"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
