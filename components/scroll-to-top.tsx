"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-16 opacity-0 scale-75"
        }`}
    >
      <button
        onClick={scrollToTop}
        className="group bg-gradient-to-r from-[#EC3E0B] to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white p-4 rounded-full shadow-lg hover:shadow-[#EC3E0B]/25 transition-all duration-300 transform hover:scale-110 active:scale-95"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1" />

        {/* Ripple effect on hover */}
        <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
      </button>
    </div>
  )
}
