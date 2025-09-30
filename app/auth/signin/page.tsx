"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AuthLayout } from "@/components/auth-layout"
import { User, Eye, EyeOff } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    keepLoggedIn: false,
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign in logic
    console.log("Sign in:", formData)
  }

  return (
    <AuthLayout>
      <div className="space-y-10 w-full">
        {/* Profile Icon */}
        <div className="flex justify-center -mb-7">
          <div className="flex items-center justify-center rounded-full bg-[linear-gradient(180deg,rgba(236,62,11,1)_0%,rgba(34,9,2,1)_60%)]" style={{ width: 78, height: 78 }}>
            <div className="inset-0 rounded-full bg-[#302227] flex items-center justify-center" style={{ width: 76, height: 76 }}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10"
              >
                <circle cx="20" cy="16" r="6" stroke="#B3A6B2" strokeWidth="2" />
                <rect x="10" y="26" width="20" height="8" rx="4" stroke="#B3A6B2" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl text-[#EC3E0B]">Sign in to your account</h1>
          <p className="text-[#FFFFFF] opacity-[1] text-sm">Enter your details to sign in</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-transparent border-gray-400 text-gray-300 font-extralight placeholder:text-gray-400 h-12 focus:border-[#EC3E0B] focus:ring-0 focus:outline-none"
                required
              />
            </div>

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="bg-transparent border-gray-400 text-gray-300 font-extralight placeholder:text-gray-400 h-12 pr-12 focus:border-[#EC3E0B] focus:ring-0 focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 text-gray-300">
                <input
                  type="checkbox"
                  checked={formData.keepLoggedIn}
                  onChange={(e) => setFormData({ ...formData, keepLoggedIn: e.target.checked })}
                  className="w-4 h-4 text-[#EC3E0B] bg-[#EC3E0B] border-[#EC3E0B] rounded focus:ring-[#EC3E0B] focus:ring-offset-0 appearance-none checked:bg-[#EC3E0B] checked:border-[#EC3E0B]"
                  style={{
                    backgroundImage: formData.keepLoggedIn ? `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23000' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='m13.854 3.646-7.5 7.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6 10.293l7.146-7.147a.5.5 0 0 1 .708.708z'/%3e%3c/svg%3e")` : 'none',
                    backgroundSize: '12px 12px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
                <span className="text-gray-300 opacity-50">Keep me logged in</span>
              </label>
              <Link href="/auth/forgot-password" className="text-[#EC3E0B] hover:text-orange-400 transition-colors">
                Forgot Password?
              </Link>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#EC3E0B] hover:bg-orange-600 text-white h-12 text-lg font-light"
          >
            Sign In
          </Button>
        </form>

        {/* Sign Up Link */}
        <div className="text-center text-sm">
          <span className="text-gray-300 opacity-50">Don't have an account?{" "}{" "}</span>
          <Link href="/auth/signup" className="text-white hover:text-orange-400 transition-colors font-bold text-md">
            Sign Up
          </Link>
        </div>
      </div>
      <ScrollToTop />
    </AuthLayout>
  )
}
