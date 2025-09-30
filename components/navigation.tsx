"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { HandCoins, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

export function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Pre-Order", href: "/preorder" },
    { name: "Contact Us", href: "/contact" },
    { name: "Support", href: "/support" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full transition-all duration-300 border-b z-50 shadow-lg ${isScrolled ? "backdrop-blur-xl border-gray-800" : "bg-transparent border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.png" alt="Fulgo Logo" width={100} height={40} className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-8 text-md font-semibold transition-all duration-300 group ${pathname === item.href ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
              >
                {item.name}
                {pathname === item.href ? (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
                ) : (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Security/Lock Icon */}
            <div className="hover:scale-105 duration-400">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 9.12981C16.09 9.12981 15.75 8.78981 15.75 8.37981V6.99981C15.75 5.94981 15.3 4.92981 14.52 4.21981C13.73 3.49981 12.71 3.16981 11.63 3.26981C9.83 3.43981 8.25 5.27981 8.25 7.19981V8.16981C8.25 8.57981 7.91 8.91981 7.5 8.91981C7.09 8.91981 6.75 8.57981 6.75 8.16981V7.18981C6.75 4.49981 8.92 2.01981 11.49 1.76981C12.99 1.62981 14.43 2.09981 15.53 3.10981C16.62 4.09981 17.25 5.51981 17.25 6.99981V8.37981C17.25 8.78981 16.91 9.12981 16.5 9.12981Z" fill="white" />
                <path d="M15.0001 23.25H9.00006C4.38006 23.25 3.52006 21.1 3.30006 19.01L2.55006 13.02C2.44006 11.94 2.40006 10.39 3.45006 9.23C4.35006 8.23 5.84006 7.75 8.00006 7.75H16.0001C18.1701 7.75 19.6601 8.24 20.5501 9.23C21.5901 10.39 21.5601 11.94 21.4501 13L20.7001 19.01C20.4801 21.1 19.6201 23.25 15.0001 23.25ZM8.00006 9.25C6.31006 9.25 5.15006 9.58 4.56006 10.24C4.07006 10.78 3.91006 11.61 4.04006 12.85L4.79006 18.84C4.96006 20.44 5.40006 21.76 9.00006 21.76H15.0001C18.6001 21.76 19.0401 20.45 19.2101 18.86L19.9601 12.85C20.0901 11.63 19.9301 10.8 19.4401 10.25C18.8501 9.58 17.6901 9.25 16.0001 9.25H8.00006Z" fill="white" />
                <path d="M15.4199 13.6499C14.8599 13.6499 14.4099 13.1999 14.4099 12.6499C14.4099 12.0999 14.8599 11.6499 15.4099 11.6499C15.9599 11.6499 16.4099 12.0999 16.4099 12.6499C16.4099 13.1999 15.9699 13.6499 15.4199 13.6499Z" fill="white" />
                <path d="M8.41991 13.6499C7.85991 13.6499 7.40991 13.1999 7.40991 12.6499C7.40991 12.0999 7.85991 11.6499 8.40991 11.6499C8.95991 11.6499 9.40991 12.0999 9.40991 12.6499C9.40991 13.1999 8.96991 13.6499 8.41991 13.6499Z" fill="white" />
              </svg>

            </div>

            {/* Contact Us Button */}
            <Link href="/auth/signin">
              <Button className="bg-gradient-to-r from-[#EC3E0B] to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-2.5 font-semibold transition-all duration-200 shadow-lg hover:shadow-[#EC3E0B]/25 transform hover:scale-105">
                Sign In
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium  transition-colors duration-200 ${pathname === item.href
                    ? "text-white bg-gray-800/50"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Contact Button */}
              <div className="pt-4">
                <Link href="/signin" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-[#EC3E0B] to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-2.5 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-[#EC3E0B]/25 transform hover:scale-105">
                    SignIn
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
