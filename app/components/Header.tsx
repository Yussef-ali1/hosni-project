"use client"
import { useState } from "react"
import Link from "next/link"
import { Leaf, Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Training", href: "/training" },
  { name: "Calculator", href: "/calculator" },
  { name: "About", href: "/about" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-green-600 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Leaf className="h-8 w-8 mr-2" />
          <span className="text-2xl font-bold">Sustainability Gate</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="hover:text-green-200 transition-colors">
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link
            href="/signin"
            className="bg-white text-green-600 px-4 py-2 rounded-md font-semibold hover:bg-green-100 transition-colors"
          >
            Sign In
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="block hover:text-green-200 transition-colors">
                {item.name}
              </Link>
            ))}
            <Link
              href="/signin"
              className="block bg-white text-green-600 px-4 py-2 rounded-md font-semibold hover:bg-green-100 transition-colors mt-4"
            >
              Sign In
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

