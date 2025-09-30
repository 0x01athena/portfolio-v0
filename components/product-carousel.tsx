"use client"

import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import productsData from "@/utils/products.json"

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow';

export function ProductCarousel({ currentType = '' }: { currentType?: string }) {
  // Transform products data for carousel display
  const products = productsData
    .filter(product => product.type === currentType || !currentType)
    .map((product) => ({
      id: product.product.toLowerCase().replace(/\s+/g, '-'),
      title: product.product,
      sign: product.sign,
      tagline: product.tagline,
      description: product.tagline || `The Fulgo ${product.product} delivers exceptional performance and reliability.`,
      image: `/images/${product.product.toLowerCase().replace(/\s+/g, '-')}-hero.jpg`,
      bgColor: "bg-black/40",
    }))

  return (
    <section className="relative py-20 overflow-hidden bg-[linear-gradient(180deg,rgb(0,0,0)_0%,rgb(49,22,14)_100%)]">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Browse our products</h2>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            // pagination={{
            //   clickable: true,
            //   el: '.swiper-pagination-custom',
            //   bulletClass: 'swiper-pagination-bullet-custom',
            //   bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            // }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            className="product-swiper myswiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <Link href={`/projects/${product.id}`} className="group block h-full">
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-black/60 transition-all duration-300 h-full group-hover:scale-105">
                    {/* Product Image */}
                    <div className={`relative h-64 ${product.bgColor} flex`}>
                      <Image
                        src={`/images/${product.sign}-front.png` || "/placeholder.svg"}
                        alt={product.title}
                        width={200}
                        height={200}
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/20 hover:bg-black/40 text-white border-none rounded-full flex items-center justify-center cursor-pointer transition-all duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/20 hover:bg-black/40 text-white border-none rounded-full flex items-center justify-center cursor-pointer transition-all duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom flex justify-center space-x-2 mt-8"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-[#EC3E0B]/30 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-[#EC3E0B]/20 rounded-full"></div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .product-swiper {
          padding: 0 60px;
        }
        
        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: #4a5568;
          border-radius: 50%;
          opacity: 1;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .swiper-pagination-bullet-active-custom {
          background: #EC3E0B;
          transform: scale(1.2);
        }
        
        .swiper-button-prev-custom:after,
        .swiper-button-next-custom:after {
          display: none;
        }
        
        .swiper-button-prev-custom:hover,
        .swiper-button-next-custom:hover {
          background: rgba(0, 0, 0, 0.6);
        }
      `}</style>
    </section>
  )
}



// {
//     "product": "S1",
//     "type": "Smart Phone",
//     "model": "Fulgo S1",
//     "sign": "S1",
//     "features": {
//         "DISPLAY": "2.8'' 240×320",
//         "CHIPSET": "MT6261D",
//         "OS": "N/A",
//         "NETWORK": [
//             {
//                 "type": "2G GSM",
//                 "bands": "850/900/1800/1900MHz"
//             }
//         ],
//         "MEMORY": "RAM 32GB ROM 32GB",
//         "CAMERA": "0.3MP",
//         "BATTERY": "1000mAh",
//         "CHARGER": "5V/0.5A with USB cable",
//         "SIM CARD": "Dual SIM",
//         "CHARGING PORT": "Micro 5 PIN",
//         "EARPHONE JACK": "3.5mm",
//         "ACCESSORIES": [
//             "Charger",
//             "Battery",
//             "User Manual"
//         ],
//         "OTHER FEATURES": "Wireless FM/BT/Vibration Alert"
//     }
// },
// {
//     "product": "S2",
//     "type": "Smart Phone",
//     "model": "Fulgo S2",
//     "sign": "S2",
//     "features": {
//         "DISPLAY": "3.2'' 240×320",
//         "CHIPSET": "MT6261D",
//         "OS": "N/A",
//         "NETWORK": [
//             {
//                 "type": "2G GSM",
//                 "bands": "850/900/1800/1900MHz"
//             }
//         ],
//         "MEMORY": "RAM 32GB ROM 32GB",
//         "CAMERA": "0.3MP",
//         "BATTERY": "1000mAh",
//         "CHARGER": "5V/0.5A with USB cable",
//         "SIM CARD": "Dual SIM",
//         "CHARGING PORT": "Micro 5 PIN",
//         "EARPHONE JACK": "3.5mm",
//         "ACCESSORIES": [
//             "Charger",
//             "Battery",
//             "User Manual"
//         ],
//         "OTHER FEATURES": "Wireless FM/BT/Vibration Alert"
//     }
// },
// {
//     "product": "S3",
//     "type": "Smart Phone",
//     "model": "Fulgo S3",
//     "sign": "S3",
//     "features": {
//         "DISPLAY": "3.5'' 320×480",
//         "CHIPSET": "SC6531H",
//         "OS": "N/A",
//         "NETWORK": [
//             {
//                 "type": "2G GSM",
//                 "bands": "850/900/1800/1900MHz"
//             }
//         ],
//         "MEMORY": "RAM 64GB ROM 64GB",
//         "CAMERA": "0.3MP",
//         "BATTERY": "1700mAh",
//         "CHARGER": "5V/0.5A with USB cable",
//         "SIM CARD": "Dual SIM",
//         "CHARGING PORT": "Micro 5 PIN",
//         "EARPHONE JACK": "3.5mm",
//         "ACCESSORIES": [
//             "Charger",
//             "Battery",
//             "User Manual"
//         ],
//         "OTHER FEATURES": "Wireless FM/BT/Vibration Alert"
//     }
// },
// {
//   "product": "T1",
//     "sign": "T1",
//       "tagline": "Power of Sound",
//         "type": "Others",
//           "features": {
//     "FREQUENCY BAND RANGE": "2.4G-2.48G",
//       "CAPACITY": "800mAh (400mAh*2)",
//         "MUSIC PLAY TIME": "80H",
//           "TALK TIME": "80H",
//             "MIC FREQUENCY": "100khz-120khz",
//               "IPX VERSION": "Sweatproof"
//   }
// },