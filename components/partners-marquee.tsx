"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, FreeMode } from "swiper/modules"
import "swiper/css"
import "swiper/css/free-mode"

const partners = [
    "/images/partners/1.png",
    "/images/partners/2.png",
    "/images/partners/3.png",
    "/images/partners/4.png",
    "/images/partners/5.png",
    "/images/partners/6.png",
    "/images/partners/7.png",
    "/images/partners/8.png",
    "/images/partners/9.png",
    "/images/partners/10.png",
    "/images/partners/11.png",
]

// To achieve a true marquee (constant speed, seamless), we duplicate slides
const marqueeLogos = [...partners, ...partners, ...partners]

export function PartnersMarquee() {
    return (
        <section id="partners" className="relative py-32">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Frequent Questions</h2>
                </div>


                <Swiper
                    modules={[Autoplay, FreeMode]}
                    slidesPerView={2}
                    spaceBetween={24}
                    loop
                    allowTouchMove={false}
                    speed={6000}
                    autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
                    breakpoints={{
                        640: { slidesPerView: 3, spaceBetween: 24 },
                        768: { slidesPerView: 4, spaceBetween: 28 },
                        1024: { slidesPerView: 5, spaceBetween: 32 },
                        1280: { slidesPerView: 6, spaceBetween: 36 },
                    }}
                    className="partners-marquee"
                >
                    {marqueeLogos.map((src, idx) => (
                        <SwiperSlide key={`${src}-${idx}`}>
                            <div className="flex items-center justify-center h-[140px] rounded-md">
                                <Image src={src} alt="Partner Logo" width={120} height={60} className="w-[140px] h-full object-contain rounded-sm" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx global>{`
        /* Ensure continuous motion without easing hiccups */
        .partners-marquee .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
        </section>
    )
}
