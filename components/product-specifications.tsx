"use client"

import Image from "next/image"

interface Product {
  product: string
  tagline?: string
  sign: string
  type?: string
  model?: string
  features: any
}

interface ProductSpecificationsProps {
  product: Product
}

export function ProductSpecifications({ product }: ProductSpecificationsProps) {
  // Generate specifications from product features
  const generateSpecifications = (features: any) => {
    const specs = []

    if (features.DISPLAY) specs.push(`Display: ${features.DISPLAY}`)
    if (features.CPU) specs.push(`Processor: ${features.CPU}`)
    if (features.CHIPSET) specs.push(`Chipset: ${features.CHIPSET}`)
    if (features.OS) specs.push(`Operating System: ${features.OS}`)
    if (features.MEMORY) specs.push(`Memory: ${features.MEMORY}`)
    if (features.CAMERA) {
      if (typeof features.CAMERA === 'object') {
        if (features.CAMERA.Front) specs.push(`Front Camera: ${features.CAMERA.Front}`)
        if (features.CAMERA.Rear) specs.push(`Rear Camera: ${features.CAMERA.Rear}`)
      } else {
        specs.push(`Camera: ${features.CAMERA}`)
      }
    }
    if (features.BATTERY) specs.push(`Battery: ${features.BATTERY}`)
    if (features.BLUETOOTH) specs.push(`Bluetooth: ${features.BLUETOOTH}`)
    if (features.NETWORK) {
      if (Array.isArray(features.NETWORK)) {
        let network = `Network Support: `
        features.NETWORK.forEach((net: any) => {
          network += `${net.type}: ${net.bands} `
        })
        specs.push(network)
      }
    }
    if (features.SENSORS) {
      if (Array.isArray(features.SENSORS)) {
        specs.push(`Sensors: ${features.SENSORS.join(', ')}`)
      }
    }
    if (features.SIZE) specs.push(`Size: ${features.SIZE}`)
    if (features.WEIGHT) specs.push(`Weight: ${features.WEIGHT}`)
    if (features.DIMENSIONS) specs.push(`Dimensions: ${features.DIMENSIONS}`)
    if (features.MATERIAL) specs.push(`Material: ${features.MATERIAL}`)
    if (features.WATERPROOF_LEVEL) specs.push(`Waterproof: ${features.WATERPROOF_LEVEL}`)
    if (features.IPX_VERSION) specs.push(`Water Resistance: ${features.IPX_VERSION}`)

    return specs
  }

  const specifications = generateSpecifications(product.features)

  // Generate included items from accessories
  const getIncludedItems = (features: any) => {
    const items = [`Fulgo ${product.product} Device`]

    if (features.ACCESSORIES && Array.isArray(features.ACCESSORIES)) {
      items.push(...features.ACCESSORIES)
    } else {
      // Default items if no accessories specified
      items.push("Charging Adapter", "USB Cable", "Warranty Card", "User Manual")
    }

    return items
  }

  const includedItems = getIncludedItems(product.features)

  return (
    <section className="py-20 bg-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Product Images */}
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3 w-full aspect-[5/4] relative">
              <Image
                src={`/images/${product.sign}-colors.png` || "/placeholder.svg?height=300&width=200&text=Phone+1"}
                alt="Product Image 1"
                fill
                className="object-contain w-full h-full"
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority
              />
            </div>
          </div>

          {/* Right - Specifications */}
          <div className="flex flex-col justify-center w-full h-full space-y-4">
            {/* What's Included */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">What's included in the box?</h3>
              <p className="text-gray-300 leading-relaxed">{includedItems.join(", ")}</p>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Specifications</h3>
              <ul className="space-y-1">
                {specifications.map((spec, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#EC3E0B] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm leading-relaxed">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
