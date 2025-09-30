"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import productsData from "@/utils/products.json"

export function AllProductsSection() {
  const [activeFilter, setActiveFilter] = useState("All")

  // Transform products data for display
  const allProducts = productsData.map((product, index) => ({
    id: product.product.toLowerCase().replace(/\s+/g, '-'),
    sign: product.sign,
    title: product.product,
    tagline: product.tagline,
    description: product.tagline || `The Fulgo ${product.product} delivers exceptional performance and reliability.`,
    image: `/images/${product.sign}-front.png`,
    bgColor: "bg-black/40",
    type: product.type,
  }))

  // Filter products based on active filter
  const filteredProducts = activeFilter === "All"
    ? allProducts
    : allProducts.filter(product => product.type === activeFilter)

  // Get unique product types for filter buttons
  const productTypes = ["All", ...new Set(productsData.map(product => product.type))]

  return (
    <section className="relative py-20 bg-[#1E1E1E]">
      <Image src="/images/dashboard-bg.png" alt="Frequent Question" fill className="object-cover opacity-100" />
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">All Product</h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {productTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeFilter === type
                ? "bg-[#EC3E0B] text-white shadow-lg shadow-[#EC3E0B]/30"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
                }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/projects/${product.id}`} className="group">
                <div className="bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-black/60 transition-all duration-300 group-hover:scale-105">
                  {/* Product Image */}
                  <div className={`relative h-64 ${product.bgColor} flex overflow-hidden`}>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {product.description.length > 124
                        ? product.description.slice(0, 124) + "..."
                        : product.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
