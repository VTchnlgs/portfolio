"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
      <Link href="/" className="flex items-center gap-2 border-4 border-transparent rounded-lg px-6 py-2 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 bg-clip-text text-transparent">
  <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-red-500 bg-clip-text text-transparent">
    VTechnologies
  </span>
</Link>

        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/courses" className="text-sm font-medium hover:underline underline-offset-4">
            Courses
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/locations" className="text-sm font-medium hover:underline underline-offset-4">
            Locations
          </Link>
          <Link href="/faq" className="text-sm font-medium hover:underline underline-offset-4">
            FAQ
          </Link>
          <Link href="/#contact-form" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <nav className="hidden md:flex gap-6">
        <div className="hidden md:flex gap-4">
          <Link href="#">
            <Button>Login</Button>
          </Link>
        </div>
        <div className="hidden md:flex gap-4">
          <Link href="/#contact-form">
            <Button>Enroll Now</Button>
          </Link>
        </div>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t py-4">
          <nav className="container flex flex-col gap-4 px-4 md:px-6">
            <Link
              href="/"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/locations"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Locations
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/#contact-form"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href="/#contact-form" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full">Enroll Now</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

