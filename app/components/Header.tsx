"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Home, ShoppingBag, Book, Calculator, Users, LogIn, UserPlus } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { 
    name: "Products", 
    href: "#",
    icon: ShoppingBag,
    dropdown: [
      { name: "Eco-Friendly Products", href: "https://store.sustainabilitygate.com/", external: true },
      { name: "Coming Soon", href: "/coming-soon" }
    ]
  },
  { name: "Training", href: "/training", icon: Book }, 
  { name: "Calculator", href: "/calculator", icon: Calculator },
  { name: "Our Story", href: "/about", icon: Users },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 20)
      
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    const token = localStorage.getItem('accessToken')
    setIsLoggedIn(!!token)
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('user')
    setIsLoggedIn(false)
    router.push('/')
  }

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <>
      <header className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300 backdrop-blur-sm
        ${scrolled ? "bg-green-700/95 shadow-lg" : "bg-green-600/90"}
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 relative">
            {/* Menu Button - Left Side */}
            <button 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>

            {/* Logo - Center */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Link href="/" className="block">
                <Image
                  src="/logo.png"
                  alt="Sustainability Gate"
                  width={180}
                  height={40}
                  className="h-12 w-auto transition-transform duration-300 hover:scale-105"
                  priority
                />
              </Link>
            </div>

            {/* Auth Buttons - Right Side */}
            <div className="hidden lg:flex items-center space-x-3">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              ) : (
                <>
                  <Link
                    href="/signin"
                    className="flex items-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Sign In</span>
                  </Link>
                  <Link
                    href="/signup"
                    className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-400 transition-all duration-300"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Join Us</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Slide-in Navigation Menu */}
        <div 
          className={`
            fixed left-0 top-20 h-[calc(100vh-5rem)] w-80 bg-green-700/95 
            shadow-xl transition-transform duration-300 transform
            ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          <nav className="h-full overflow-y-auto py-6 px-4">
            <div className="space-y-6">
              {navItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  {item.dropdown ? (
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 text-white"
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )}
                  
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="pl-12 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          target={subItem.external ? "_blank" : undefined}
                          rel={subItem.external ? "noopener noreferrer" : undefined}
                          className="block px-4 py-2 text-white/80 hover:text-white rounded-xl hover:bg-white/10 transition-all duration-300"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Auth Buttons */}
              <div className="lg:hidden pt-4 space-y-3 border-t border-white/10">
                {!isLoggedIn && (
                  <>
                    <Link
                      href="/signin"
                      className="flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <LogIn className="w-5 h-5" />
                      <span className="font-medium">Sign In</span>
                    </Link>
                    <Link
                      href="/signup"
                      className="flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-green-500 text-white hover:bg-green-400 transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <UserPlus className="w-5 h-5" />
                      <span className="font-medium">Join Us</span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className={`h-20 transition-all duration-300 ${!isVisible ? 'h-0' : ''}`} />
    </>
  )
}
