"use client"

import Image from "next/image"

export function TimelineSection() {
  const timelineData = [
    {
      year: "YEAR 1",
      period: "Founded in 2022",
      description:
        "Fulgo Mobile officially launched. The journey started with a mission to unlock possibilities for users across Africa. Fulgo Mobile was born with a vision to pioneer next-level digital living and gateway to digital evolution.",
    },
    {
      year: "YEAR 1 - 2",
      period: "2023 - Pre-Launch",
      description:
        "Fulgo Mobile began its journey with pre-launch across key African markets - Uganda, The Gambia, Kenya and Nigeria engaging distributors, retailers, and local partners with demos devices.",
    },
    {
      year: "YEAR 2 - 3",
      period: "2024 - Market Entry & Partnership Onboarding",
      description:
        "During this phase, we onboarded local partners, built regional footprints, and expanded our reach across Africa.",
    },
    {
      year: "YEAR 3 - 4",
      period: "2025 - Device Launch & Regional Expansion",
      description:
        "Anticipating a strong product-market fit, our mission in 2025 is to roll out our flagship smartphones and expand into new markets across Africa and beyond.",
    },
  ]

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Over the years.</h2>
        </div>

        <div className="flex flex-row">
          {/* Timeline */}
          <div className="relative flex-1">
            {/* Timeline Path - Curved Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5">
              <svg
                className="w-full h-full"
                viewBox="0 0 20 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M10 0 Q10 100 50 200 Q90 300 10 400 Q-30 500 50 600 Q130 700 10 800"
                  stroke="rgba(107, 114, 128, 0.3)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>

            {/* Timeline Items */}
            <div className="flex flex-col gap-20">
              {timelineData.map((item, index) => (
                <div key={index} className={`relative flex items-start ${index === 1 && 'pt-4'}  ${index === 2 && '-mt-8'}`}>
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-4 h-4  rounded-full border-4 border-[#1E1E1E]"></div>
                  </div>

                  {/* Content */}
                  <div className="ml-12 max-w-4xl">
                    {/* Year Badge */}
                    <div className={`flex items-center justify-center ${index === 0 || index === 3 ? 'bg-transparent' : index === 1 ? 'bg-[#EC3E0B]' : 'bg-[#FA8563]'} mb-4 w-24 h-24 ${index !== 2 && 'border border-[#EC3E0B]'}`}>
                      <span className=" text-white px-1 py-1 text-sm font-bold">{item.year}</span>
                    </div>

                    {/* Period Title */}
                    <h3 className="text-xl font-bold text-white mb-4">{item.period}</h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Image - Hidden on screens smaller than 1440px */}
          <div className="hidden 2xl:block ml-8">
            <Image
              src="/images/timeline.png"
              alt="Timeline"
              width={300}
              height={900}
              className="object-contain max-h-[1100px] w-auto"
            />
          </div>
        </div>


      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-2 h-2 bg-[#EC3E0B]/30 rounded-full"></div>
      <div className="absolute bottom-20 left-10 w-3 h-3 bg-[#EC3E0B]/20 rounded-full"></div>
    </section>
  )
}
