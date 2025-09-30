"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function DashboardHero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/images/dashboard-bg.png" alt="Dashboard Background" fill className="object-cover" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center min-h-screen px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Next Generation
                <br />
                <span className="text-[#EC3E0B]">of Mobility</span>
              </h1>

              <p className="text-gray-300 text-lg lg:text-xl max-w-lg leading-relaxed">
                Fulgo Mobile is an Australian-owned and operated mobile device company producing smartphones and
                accessories. Our goal is to create mobile devices and accessories that will transform user experience
                and unlock unlimited opportunities in the digital world.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/preorder">
                <Button className="bg-[#EC3E0B] hover:bg-orange-600 text-white px-8 py-3  text-lg font-semibold">
                  Pre-Order
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3  text-lg font-semibold bg-transparent"
                >
                  Our Products
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Phone Mockup with Stats */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Phone Mockup */}
              <div className="relative w-80 h-[600px]">
                {/* Phone Frame */}
                <div className="relative w-full h-full bg-black rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-[2rem] relative overflow-hidden">
                    {/* Screen Content - Music App Interface */}
                    <div className="absolute inset-4 bg-black rounded-[1.5rem] overflow-hidden">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center p-4 text-white text-xs">
                        <span>9:41</span>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-1 h-2 bg-white rounded-sm"></div>
                          <div className="w-6 h-2 bg-white rounded-sm"></div>
                        </div>
                      </div>

                      {/* App Interface */}
                      <div className="px-4 space-y-4">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                          <h3 className="text-white font-bold text-lg">Rock The</h3>
                          <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                        </div>

                        {/* Music Cards */}
                        <div className="space-y-3">
                          <div className="bg-gray-800 rounded-lg p-3">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">♪</span>
                              </div>
                              <span className="text-white text-sm font-medium">Spotify</span>
                            </div>
                            <p className="text-gray-300 text-xs">Your daily Rock music playlist</p>
                          </div>

                          <div className="bg-gray-800 rounded-lg p-3">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">▶</span>
                              </div>
                              <span className="text-white text-sm font-medium">YouTube Music</span>
                            </div>
                            <p className="text-gray-300 text-xs">Discover new rock artists</p>
                          </div>

                          <div className="bg-gray-800 rounded-lg p-3">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-6 h-6 bg-[#EC3E0B] rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">♫</span>
                              </div>
                              <span className="text-white text-sm font-medium">SoundCloud</span>
                            </div>
                            <p className="text-gray-300 text-xs">Underground rock scene</p>
                          </div>
                        </div>

                        {/* Bottom Navigation */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-gray-800 rounded-full h-12 flex items-center justify-center">
                            <div className="w-8 h-1 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Camera Notch */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Floating Statistics */}
              {/* 150k Customers */}
              <div className="absolute -bottom-12 -left-16 bg-[#EC3E0B]/95 backdrop-blur-sm text-white px-6 py-4 rounded-lg shadow-xl border border-orange-400/30">
                <div className="text-3xl font-bold">150k</div>
                <div className="text-sm font-medium">Customers</div>
              </div>

              {/* 30+ Accessories */}
              <div className="absolute -top-12 -right-16 bg-black/90 backdrop-blur-sm text-white px-6 py-4 rounded-lg shadow-xl border border-gray-600">
                <div className="text-3xl font-bold text-[#EC3E0B]">30+</div>
                <div className="text-sm font-medium">Accessories</div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/4 -left-8 w-16 h-16 border-2 border-[#EC3E0B]/30 rounded-full"></div>
              <div className="absolute bottom-1/3 -right-4 w-8 h-8 bg-[#EC3E0B]/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Label */}
      <div className="absolute bottom-8 left-8">
        <span className="text-red-500 text-xl font-bold">first section</span>
      </div>
    </section>
  )
}
