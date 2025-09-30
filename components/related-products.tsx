"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import productsData from "@/utils/products.json"

interface Product {
  product: string
  tagline?: string
  type?: string
  model?: string
  features: any
}

interface RelatedProductsProps {
  currentProduct: Product
}

export function RelatedProducts({ currentProduct }: RelatedProductsProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Get related products (exclude current product)
  const relatedProducts = productsData
    .filter(p => p.product !== currentProduct.product)
    .slice(0, 3)
    .map(product => ({
      id: product.product.toLowerCase().replace(/\s+/g, '-'),
      title: product.product,
      tagline: product.tagline,
      description: product.tagline || `The Fulgo ${product.product} delivers exceptional performance and reliability.`,
      image: `/images/${product.product.toLowerCase().replace(/\s+/g, '-')}-hero.jpg`,
      bgColor: "bg-gray-800",
    }))

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % relatedProducts.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + relatedProducts.length) % relatedProducts.length)
  }

  return (
    <section className="py-20 bg-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">You may also like</h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#EC3E0B]/20 hover:bg-[#EC3E0B]/40 text-white border-none rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#EC3E0B]/20 hover:bg-[#EC3E0B]/40 text-white border-none rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Products Grid */}
          <div className="grid lg:grid-cols-3 gap-8 px-16">
            {relatedProducts.map((product, index) => (
              <Link key={product.id} href={`/projects/${product.id}`} className="group">
                <div className="bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-black/60 transition-all duration-300 group-hover:scale-105">
                  {/* Product Image */}
                  <div className={`relative h-64 ${product.bgColor} flex items-center justify-center`}>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={200}
                      height={200}
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {product.title}
                    </h3>
                    {product.tagline && (
                      <p className="text-[#EC3E0B] text-sm font-semibold mb-2">{product.tagline}</p>
                    )}
                    <p className="text-gray-300 text-sm leading-relaxed">{product.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {relatedProducts.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-[#EC3E0B]" : "bg-gray-600"
                  }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
