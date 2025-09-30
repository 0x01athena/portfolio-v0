"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronRight } from "lucide-react"

interface Product {
  product: string
  tagline?: string
  type?: string
  model?: string
  features: any
}

interface ProductTechnicalSpecsProps {
  product: Product
}

export function ProductTechnicalSpecs({ product }: ProductTechnicalSpecsProps) {
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  // Generate spec categories with detailed content based on product features
  const getSpecCategories = (features: any) => {
    const categories = []

    if (features.DISPLAY) {
      categories.push({
        title: "Display & Resolution",
        content: features.DISPLAY,
        description: "Experience crystal-clear visuals with our high-resolution display technology."
      })
    }
    if (features.CAMERA || features["CAMERA"]) {
      const cameraContent = typeof features.CAMERA === 'object'
        ? `Front: ${features.CAMERA.Front || 'N/A'}, Rear: ${features.CAMERA.Rear || 'N/A'}`
        : features.CAMERA
      categories.push({
        title: "Cameras",
        content: cameraContent,
        description: "Capture stunning photos and videos with our advanced camera system."
      })
    }
    if (features.MEMORY) {
      categories.push({
        title: "Storage Options",
        content: features.MEMORY,
        description: "Ample storage space for all your apps, photos, and files."
      })
    }
    if (features.BATTERY) {
      categories.push({
        title: "Battery Capacity",
        content: features.BATTERY,
        description: "Long-lasting battery life to keep you connected throughout the day."
      })
    }
    if (features.COLOUR || features.COLOR) {
      categories.push({
        title: "Colour Options",
        content: features.COLOUR || features.COLOR,
        description: "Choose from a variety of stylish color options to match your personality."
      })
    }
    if (features.CPU) {
      categories.push({
        title: "Processor",
        content: features.CPU,
        description: "Powerful processing capabilities for smooth performance and multitasking."
      })
    }
    if (features.BLUETOOTH) {
      categories.push({
        title: "Connectivity",
        content: features.BLUETOOTH,
        description: "Seamless wireless connectivity for all your devices and accessories."
      })
    }
    if (features.NETWORK) {
      categories.push({
        title: "Network Support",
        content: "Advanced network compatibility for global connectivity.",
        description: "Comprehensive network support ensuring connectivity wherever you go."
      })
    }

    return categories
  }

  const specCategories = getSpecCategories(product.features)

  const toggleItem = (index: number) => {
    setExpandedItems(prev => prev[0] === index ? [] : [index])
  }

  return (
    <section className="py-20 bg-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            <p className="mb-2">Under The Hood, The Fulgo <span className="text-[#EC3E0B]">{product.product}</span></p>
            <p>Boasts Impressive Specifications</p>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Specification Categories */}
          <div className="space-y-0">
            {specCategories.map((category, index) => {
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
                    <span className="text-white font-medium">{category.title}</span>
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
                      <p className="text-gray-300 text-sm leading-relaxed mb-2">
                        {category.description}
                      </p>
                      <p className="text-[#EC3E0B] text-sm font-semibold">
                        {category.content}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right - Product Images */}
          <div className="flex justify-center space-x-8">
            <div className="space-y-4">
              <Image
                src="/placeholder.svg?height=400&width=200&text=Front+View"
                alt="Phone Front View"
                width={200}
                height={400}
                className="object-contain"
              />
            </div>
            <div className="space-y-4">
              <Image
                src="/placeholder.svg?height=100&width=200&text=Side+View"
                alt="Phone Side View"
                width={200}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="space-y-4">
              <Image
                src="/placeholder.svg?height=400&width=200&text=Back+View"
                alt="Phone Back View"
                width={200}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
