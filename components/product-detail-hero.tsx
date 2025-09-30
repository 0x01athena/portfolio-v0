"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Diamond, Handshake, ChevronRight } from "lucide-react"

interface Product {
  product: string
  sign: string
  tagline?: string
  type?: string
  model?: string
  features: any
}

interface ProductDetailHeroProps {
  product: Product
}

export function ProductDetailHero({ product }: ProductDetailHeroProps) {
  // Generate product images based on product name
  const getProductImages = (sign: string) => {
    const baseName = sign
    return [
      `/images/${baseName}-front.png`,
      `/images/${baseName}-back.png`,
      `/images/${baseName}-side.png`,
      `/images/${baseName}-colors.png`,
    ]
  }

  const productImages = getProductImages(product.sign)

  return (
    <section className="min-h-screen pt-32 pb-20 bg-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <Link href="/products" className="hover:text-orange-400 transition-colors">
            Products
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Fulgo {product.product}</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            <div className="grid lg:grid-cols-12 gap-4 h-full max-h-[580px]">
              {/* Left - Thumbnail Gallery */}
              <div className="lg:col-span-3 space-y-4 h-full flex flex-col justify-between">
                {productImages.map((image, index) => (
                  <div
                    key={index}
                    className={`bg-black/40 h-full rounded-lg cursor-pointer transition-all duration-300 ${index === 0 ? 'ring-2 ring-[#EC3E0B] bg-black/60' : 'hover:bg-black/60'
                      }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Product view ${index + 1}`}
                      width={120}
                      height={150}
                      className="object-contain w-full h-full"
                    />
                  </div>
                ))}
              </div>

              {/* Center - Main Product Showcase */}
              <div className="lg:col-span-9">
                <div className="bg-black/40 rounded-lg flex items-center justify-center min-h-[580px]">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={productImages[0] || "/placeholder.svg"}
                      alt={`Fulgo ${product.product}`}
                      width={600}
                      height={800}
                      className="object-cover max-w-full max-h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="flex flex-wrap justify-between h-full lg:col-span-5 space-y-8 py-12">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Fulgo {product.product}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                {product.type ?
                  `The Fulgo ${product.product} is a ${product.type.toLowerCase()} that delivers exceptional performance and reliability.` :
                  `The Fulgo ${product.product} is a revolutionary leap in smartphone technology that lets you embrace a powerful and advanced device partnered with a sleek, immersive design – allowing you to be part of the next generation in communication technology.`
                }
              </p>
            </div>

            {/* Ordering Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Ordering:</h3>
              <div className="flex flex-col gap-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#EC3E0B] rounded-full"></div>
                  <span className="text-white">This product is available for pre-order now</span>
                </div>
                <Link href={`/preorder/${product.product.toLowerCase().replace(/\s+/g, '-')}`} className="text-[#EC3E0B] hover:text-orange-400 transition-colors underline px-4">
                  click here to pre-order now
                </Link>
              </div>

              <div className="pt-6">
                <Link href={`/preorder/${product.product.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Button className="bg-[#EC3E0B] hover:bg-orange-600 text-white px-6 py-6 text-lg font-semibold flex items-center space-x-2 border-t border-white-800 rounded-sm">
                    <span>Pre-Order</span>
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
