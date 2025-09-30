"use client"

import type React from "react"

import Image from "next/image"

interface AuthLayoutProps {
  children: React.ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-row">
      {/* Left Side - Form */}
      <div className="flex items-center justify-center bg-[#302227] px-8 py-12 w-1/2">
        <div className="flex flex-col items-center w-full max-w-sm">
          {/* Logo */}
          <div className="mb-10">
            <Image src="/images/logo.png" alt="Fulgo Logo" width={150} height={150} className="w-[150px] h-auto" />
          </div>

          {children}
        </div>
      </div>

      {/* Right Side - Visual */}
      <div className="relative overflow-hidden w-1/2">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-[#EC3E0B] to-red-700">
          {/* Background Image */}
          <Image src="/images/auth-bg.png" alt="Authentication Background" fill className="object-cover opacity-90" />

          {/* Overlay Content */}
          <div className="absolute flex justify-center items-center left-[100px] bottom-[100px]">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl px-8 py-10">
              <div className="text-white">
                <div className="flex flex-col gap-4 text-3xl font-medium leading-tight">
                  <span>A world of</span>
                  <span>possibilities</span>
                  <span>in your hands</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="absolute bottom-32 right-16 w-3 h-3 bg-white/20 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/40 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
