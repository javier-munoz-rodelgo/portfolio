"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all backdrop-blur bg-white/70 
      ${scrolled ? "py-3 shadow-sm" : "py-5"}`}
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <span className="font-semibold text-xl">
          <Link href="#home" className={`${caveat.className}`} title="Go Home">
            JM
          </Link>
        </span>

        <div className="flex gap-6">
          <Link href="#about" className="hover:text-purple-600">
            About
          </Link>
          <Link href="#projects" className="hover:text-purple-600">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-purple-600">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
