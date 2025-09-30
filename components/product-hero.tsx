"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, EffectFade } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

export function ProductHero() {
  const products = [
    { id: 1, name: <span><span className="text-[#EC3E0B]">G3</span> Wireless Earbuds</span> },
    { id: 2, name: <span>POWERPLUS <span className="text-[#EC3E0B]">A3</span> Powerbank</span> },
    { id: 3, name: <span><span className="text-[#EC3E0B]">E5</span> Smartphone</span> },
  ]

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      <Image src="/images/dashboard-bg.png" alt="Frequent Question" fill className="object-cover opacity-100" />
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="slide"
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="absolute inset-0"
      >
        {products.map((product, index) => (
          <SwiperSlide key={product.id}>
            <div className="relative w-full h-screen">
              <Image
                src={`/images/product-${index + 1}.png`}
                alt={product.name}
                fill
                className="product-swiper object-cover pt-[90px]"
                priority={index === 0}
              />

              {/* Content Container */}
              <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-40 flex items-end h-screen">
                <h1 className="text-5xl lg:text-6xl max-w-2xl font-bold text-white leading-tight">
                  {product.name}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
