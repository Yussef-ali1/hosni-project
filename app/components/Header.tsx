"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Leaf, Menu, X, ChevronDown } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { 
    name: "Products", 
    href: "/products",
    dropdown: [
      { name: "Energy Efficient", href: "/products/energy-efficient" },
      { name: "Eco-Friendly Home", href: "/products/eco-home" },
      { name: "Sustainable Living", href: "/products/sustainable-living" }
    ]
  },
  { name: "Services", href: "/services" },
  { name: "Training", href: "/training" },
  { name: "Calculator", href: "/calculator" },
  { name: "About", href: "/about" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const toggleDropdown = (i:any) => {
    setActiveDropdown(activeDropdown === i ? null : i)
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-green-700 shadow-md" : "bg-green-600"
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <div className="relative">
            <Leaf className="h-8 w-8 mr-2 text-white transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </div>
          <span className="text-2xl font-bold text-white">
            <span className="text-green-200">S</span>ustainability 
            <span className="text-green-200">G</span>ate
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item, i) => (
            <div key={item.name} className="relative group">
              <div className="flex items-center">
                <Link 
                  href={item.href} 
                  className={`px-3 py-2 rounded-md text-white hover:text-green-100 hover:bg-green-700 transition-colors ${
                    activeDropdown === i ? "bg-green-700 text-green-100" : ""
                  }`}
                  onClick={(e) => item.dropdown && (e.preventDefault(), toggleDropdown(i))}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className={`ml-1 w-4 h-4 inline-block transition-transform ${
                      activeDropdown === i ? "rotate-180" : ""
                    }`} />
                  )}
                </Link>
              </div>
              
              {item.dropdown && activeDropdown === i && (
                <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        
        {/* Desktop Sign In Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/signin"
            className="bg-white text-green-600 px-5 py-2 rounded-md font-semibold hover:bg-green-50 transition-colors shadow-sm hover:shadow"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="bg-green-500 text-white px-5 py-2 rounded-md font-semibold hover:bg-green-400 transition-colors shadow-sm hover:shadow"
          >
            Join Us
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-green-700 hover:bg-green-800 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-green-700 rounded-b-lg shadow-lg">
          <nav className="px-4 pt-2 pb-6 divide-y divide-green-600">
            <div className="py-2 space-y-1">
              {navItems.map((item, i) => (
                <div key={item.name}>
                  <div className="flex items-center justify-between">
                    <Link 
                      href={item.href} 
                      className="block py-2 px-3 rounded-md hover:bg-green-600 transition-colors"
                      onClick={() => !item.dropdown && setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <button
                        onClick={() => toggleDropdown(i)}
                        className="p-2 rounded-full hover:bg-green-600 transition-colors"
                      >
                        <ChevronDown className={`w-5 h-5 transition-transform ${
                          activeDropdown === i ? "rotate-180" : ""
                        }`} />
                      </button>
                    )}
                  </div>
                  
                  {item.dropdown && activeDropdown === i && (
                    <div className="pl-4 mt-1 mb-2 space-y-1 border-l-2 border-green-500">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-2 px-3 text-green-100 hover:bg-green-600 rounded-md transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="pt-4 flex flex-col space-y-2">
              <Link
                href="/signin"
                className="block bg-white text-green-600 px-4 py-3 rounded-md font-semibold hover:bg-green-50 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="block bg-green-500 text-white px-4 py-3 rounded-md font-semibold hover:bg-green-400 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}