"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronDown } from "lucide-react"

export function ProductShowcase() {
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const features = [
    {
      title: "All-Day Power",
      description: "Enjoy long-lasting battery life that keeps you connected throughout the day with our advanced power management technology."
    },
    {
      title: "Lightning-Fast Performance",
      description: "Experience seamless multitasking and lightning-fast app launches with our cutting-edge ARM-core processor, Android 13 Operating System and 6GB RAM."
    },
    {
      title: "Ultra-Vivid Display",
      description: "Immerse yourself in stunning visuals on the edge-to-edge super high definition display, providing true-to-life colours and crisp details."
    },
    {
      title: "Sleek & Premium Design",
      description: "Embrace sophistication with the Fulgo E5 Smartphone sleek glass back and slim profile, designed to impress."
    },
    {
      title: "Eco-Friendly Materials",
      description: "Join us in our commitment to the environment with eco-friendly materials used in the construction of the Fulgo E5 Smartphone"
    },
    {
      title: "Integrated Crypto Wallet",
      description: "Buy, sell and trade cryptocurrencies using the embedded wallet – brought to you by Fulgo: a first-of-it's-kind, easy of use wallet featuring enterprise-grade levels of security for your assets"
    },
  ]

  const toggleItem = (index: number) => {
    setExpandedItems(prev => prev[0] === index ? [] : [index])
  }

  return (
    <section className="relative py-20 overflow-hidden bg-black">
      {/* Left Background Image */}
      <div className="absolute right-[20%] top-0 w-1/2 h-full">
        <Image src="/images/dashboard-standout.png" alt="Section Background" fill className="object-cover opacity-60" />
      </div>

      {/* Content Container */}
      <div className="flex flex-col items-center justify-center relative z-10 max-w-7xl mx-auto px-8 py-20">
        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-12 text-4xl lg:text-5xl font-bold text-white leading-tight mb-10">
          <div className="flex flex-col items-center justify-center gap-4">
            <p>Why Fulgo M<span className="text-[#EC3E0B]">o</span>bile Products</p>
            <span>Stand Out</span>
          </div>

          <Button className="bg-[#EC3E0B] hover:bg-orange-600 text-white px-8 py-3  text-lg font-semibold">
            Pre-Order Now
          </Button>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 w-full">
          {/* Left Content - Product Image */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Phone Image */}
              <Image
                src="/images/dashboard-phone.png"
                alt="Fulgo Mobile Phone"
                width={400}
                height={600}
                className="w-auto h-[500px] object-contain"
              />

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-[#EC3E0B]/30 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-4 h-4 bg-[#EC3E0B]/20 rounded-full"></div>
            </div>
          </div>

          {/* Right Content - Features & Text */}
          <div className="space-y-0">
            {features.map((feature, index) => {
              const isExpanded = expandedItems.includes(index)
              return (
                <div
                  key={index}
                  className="bg-black/20 border border-gray-700/50 hover:bg-black/40 transition-all duration-300 overflow-hidden"
                >
                  {/* Accordion Header */}
                  <div
                    className="flex items-center justify-between p-4 cursor-pointer group"
                    onClick={() => toggleItem(index)}
                  >
                    <span className="text-white font-medium">{feature.title}</span>
                    <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center transition-all duration-200 group-hover:bg-gray-700 group-hover:scale-110">
                      <ChevronRight
                        className={`w-4 h-4 text-white transition-transform duration-300 ease-in-out ${isExpanded ? 'rotate-90' : 'rotate-0'
                          }`}
                      />
                    </div>
                  </div>

                  {/* Accordion Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div className="px-4 pb-4">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-2 h-2 bg-[#EC3E0B]/30 rounded-full"></div>
      <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-[#EC3E0B]/20 rounded-full"></div>
    </section>
  )
}
