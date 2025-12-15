"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tight">Celesté</span>
            <span className="text-sm font-light">MOTORS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-400 transition-colors">
              About Us
            </Link>
            <Link href="/innovation" className="hover:text-blue-400 transition-colors">
              Innovation
            </Link>
            <Link href="/research-development" className="hover:text-blue-400 transition-colors">
              R&D
            </Link>
            <Link href="/models" className="hover:text-blue-400 transition-colors">
              Models
            </Link>
            <Link href="/customization" className="hover:text-blue-400 transition-colors">
              Build Your Own
            </Link>
            <Link href="/dealerships" className="hover:text-blue-400 transition-colors">
              Dealerships
            </Link>
            <Link href="/contact" className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="hover:text-blue-400 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="hover:text-blue-400 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
              <Link href="/innovation" className="hover:text-blue-400 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Innovation
              </Link>
              <Link href="/research-development" className="hover:text-blue-400 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                R&D
              </Link>
              <Link href="/models" className="hover:text-blue-400 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Models
              </Link>
              <Link href="/customization" className="hover:text-blue-400 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Build Your Own
              </Link>
              <Link href="/dealerships" className="hover:text-blue-400 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Dealerships
              </Link>
              <Link href="/contact" className="hover:text-blue-400 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
