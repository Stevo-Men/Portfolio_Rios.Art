// components/Navbar.tsx

'use client'
import Link from 'next/link'
import { useState } from 'react'


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/">
            <span className="text-2xl font-bold text-gray-800 cursor-pointer">
              MyPortfolio
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link className="text-gray-600 hover:text-indigo-500 transition" href="/">
              Home
            </Link>
            <Link className="text-gray-600 hover:text-indigo-500 transition" href="/graphics">
              Graphics
            </Link>
            <Link className="text-gray-600 hover:text-indigo-500 transition" href="/videos">
              Videos
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-indigo-500 transition">
              About
            </Link>
            <Link className="text-gray-600 hover:text-indigo-500 transition" href="/contact">
              Contact
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 pb-4">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-indigo-500 transition">
              Home
            </Link>
            <Link href="/graphics" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-indigo-500 transition">
              Graphics
            </Link>
            <Link href="/videos" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-indigo-500 transition">
              Videos
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-indigo-500 transition">
              About
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-indigo-500 transition">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
