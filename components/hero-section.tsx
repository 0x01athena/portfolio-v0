"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0c0c0c]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/images/dashboard-bg.png" alt="Background" fill className="object-cover" />
      </div>

      {/* <div className="absolute inset-0">
        <Image src="/images/dashboard-fulgo.png" alt="Background" fill/>
      </div> */}

      {/* Content Container */}
      <div className="relative z-10 flex items-center min-h-screen px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="flex flex-col gap-2 text-5xl lg:text-6xl font-bold text-white leading-tight">
                <p>Experience <span className="text-[#EC3E0B]"> a world</span></p>
                <p>of possibilities</p>
              </h1>

              <p className="text-gray-300 text-lg lg:text-xl max-w-lg leading-relaxed">
                Fulgo Mobile is an Australian owned and operated mobile device company producing smartphones and
                accessories. Our goal is to create mobile devices and accessories that will transform user experience
                and unlock unlimited opportunities in the digital world.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#EC3E0B] hover:bg-orange-600 text-white px-8 py-3  text-lg font-semibold">
                Pre-Order
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3  text-lg font-semibold bg-transparent"
              >
                Our Products
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image with Stats */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Hero Image */}
              <Image
                src="/images/hero.png"
                alt="Fulgo Mobile Device"
                width={400}
                height={600}
                className="w-auto h-[500px] lg:h-[600px] object-contain"
              />

              {/* Decorative Elements */}
              <div className="absolute top-1/4 -left-8 w-16 h-16 border-2 border-[#EC3E0B]/30 rounded-full"></div>
              <div className="absolute bottom-1/3 -right-4 w-8 h-8 bg-[#EC3E0B]/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
