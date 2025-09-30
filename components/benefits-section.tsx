"use client"

import Image from "next/image"

export function BenefitsSection() {
  const benefits = [
    {
      icon: <svg width="81" height="90" viewBox="0 0 81 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40.5 70C46.0228 70 50.5 65.5228 50.5 60C50.5 54.4772 46.0228 50 40.5 50C34.9772 50 30.5 54.4772 30.5 60C30.5 65.5228 34.9772 70 40.5 70Z" fill="#EC3E0B" />
        <path d="M3 52.5C3 43.07 3 38.36 5.93 35.43C8.86 32.5 13.57 32.5 23 32.5H58C67.43 32.5 72.14 32.5 75.07 35.43C78 38.36 78 43.07 78 52.5V57.5C78 71.64 78 78.715 73.605 83.105C69.215 87.5 62.14 87.5 48 87.5H33C18.86 87.5 11.785 87.5 7.395 83.105C3 78.715 3 71.64 3 57.5V52.5Z" stroke="#EC3E0B" strokeWidth="5" />
        <path d="M63 32.5V25C63 19.0326 60.6295 13.3097 56.4099 9.0901C52.1903 4.87053 46.4674 2.5 40.5 2.5C34.5326 2.5 28.8097 4.87053 24.5901 9.0901C20.3705 13.3097 18 19.0326 18 25V32.5" stroke="#EC3E0B" strokeWidth="5" strokeLinecap="round" />
      </svg>,
      title: "Possibilities Unlocked",
      description:
        "At Fulgo, we believe technology should adapt to you — not the other way around. That's why every device we create is seamless to use, effortlessly connected, and thoughtfully crafted to enhance your daily life.",
    },
    {
      icon: <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60.5 96.49C59.34 96.49 58.2217 96.2567 57.145 95.79C56.0684 95.3267 55.125 94.6083 54.315 93.635L16.835 48.655C16.215 47.9317 15.7484 47.14 15.435 46.28C15.1217 45.42 14.9667 44.5033 14.97 43.53C14.97 42.9067 15.0484 42.2967 15.205 41.7C15.365 41.1 15.5884 40.4983 15.875 39.895L24.77 21.945C25.4934 20.595 26.4984 19.5167 27.785 18.71C29.0717 17.9033 30.48 17.5 32.01 17.5H88.99C90.5234 17.5 91.9317 17.9033 93.215 18.71C94.4984 19.5167 95.5034 20.5933 96.23 21.94L105.125 39.89C105.415 40.4967 105.638 41.1 105.795 41.7C105.952 42.3 106.03 42.91 106.03 43.53C106.03 44.5033 105.873 45.42 105.56 46.28C105.247 47.14 104.78 47.9317 104.16 48.655L66.685 93.635C65.875 94.6083 64.9317 95.3283 63.855 95.795C62.7784 96.2583 61.66 96.49 60.5 96.49ZM44.585 42.5H76.415L66.415 22.5H54.585L44.585 42.5ZM58 90.3V47.5H22.46L58 90.3ZM63 90.3L98.54 47.5H63V90.3ZM81.96 42.5H100.79L91.65 24.23C91.3934 23.7167 91.0084 23.3 90.495 22.98C89.9817 22.66 89.4367 22.5 88.86 22.5H71.96L81.96 42.5ZM20.21 42.5H39.04L49.04 22.5H32.135C31.5584 22.5 31.0134 22.66 30.5 22.98C29.9867 23.3 29.6034 23.7167 29.35 24.23L20.21 42.5Z" fill="#EC3E0B" />
      </svg>,
      title: "Excellence-In-Operation",
      description:
        "At Fulgo, we take pride in delivering operational excellence that goes beyond expectations. Every product, process, and interaction is driven by a commitment to seamless performance, uncompromising quality, and innovation that empowers our customers.",
    },
    {
      icon: <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_155_1559)">
          <path d="M98 22.5C93.9139 26.4085 89.0546 29.4181 83.735 31.335C78.125 32.325 62.6 25.125 54.95 32.475C53.675 33.75 52.1 35.025 50.45 36.3C46.85 34.725 41.3 32.325 37.25 30C33.2 27.675 23 22.5 23 22.5L0.5 48.75C0.5 48.75 6.05 56.25 9.5 61.2C11.75 64.5 14.525 69.525 16.325 72.9L13.775 75.9C13.1687 77.1141 12.9514 78.4856 13.1527 79.8277C13.354 81.1698 13.9642 82.4172 14.9 83.4C15.9832 84.2167 17.3035 84.6572 18.66 84.6545C20.0166 84.6517 21.3351 84.206 22.415 83.385C22.014 83.8545 21.7106 84.3991 21.5223 84.9871C21.334 85.5751 21.2648 86.1947 21.3185 86.8098C21.3723 87.4249 21.548 88.0231 21.8354 88.5695C22.1228 89.116 22.5162 89.5997 22.9925 89.9925C24.1393 90.6569 25.4417 91.0055 26.767 91.0029C28.0924 91.0002 29.3934 90.6464 30.5375 89.9775C29.6806 91.0456 29.2117 92.373 29.2076 93.7423C29.2035 95.1116 29.6645 96.4418 30.515 97.515C31.6204 97.8989 32.7997 98.0215 33.9604 97.8731C35.1211 97.7248 36.2317 97.3095 37.205 96.66C36.7178 97.8079 36.591 99.0767 36.8414 100.298C37.0919 101.52 37.7078 102.637 38.6075 103.5C39.8769 104.059 41.2667 104.288 42.6484 104.168C44.0301 104.047 45.3591 103.58 46.5125 102.81L50.3825 99.3075C53.9225 102.833 58.805 105.015 64.1975 105.015L64.655 105.007C66.4323 104.857 68.1351 104.225 69.5806 103.18C71.026 102.134 72.1597 100.716 72.86 99.075C73.955 99.495 75.2 99.78 76.52 99.78C78.29 99.78 79.9325 99.27 81.32 98.3925C85.7075 95.49 84.6575 93.24 84.6575 93.24C86.2176 93.9116 87.9506 94.0708 89.607 93.6948C91.2634 93.3188 92.7578 92.4269 93.875 91.1475C95.036 89.9598 95.7681 88.4191 95.9555 86.7688C96.143 85.1185 95.7751 83.4528 94.91 82.035C94.9581 82.0617 95.0126 82.0747 95.0675 82.0725C98.225 82.0725 100.97 80.3325 102.403 77.7675C103.11 75.945 103.35 73.9741 103.1 72.0351C102.849 70.0961 102.117 68.2507 100.97 66.6675L100.993 66.705C107.143 65.505 106.918 62.43 109.918 57.93C112.754 54.2544 116.29 51.1754 120.32 48.87L98 22.5ZM97.625 75.45C94.325 78.75 91.775 77.325 86.15 73.05C80.525 68.775 69.35 60.75 69.35 60.75C69.8075 63.0375 70.865 65.025 72.3575 66.6075C74.75 69.3 81.875 75.45 85.25 78.6C87.35 80.55 92.75 84.45 89.6 87.45C86.45 90.45 83.975 87.45 78.8 83.25C73.625 79.05 62.075 68.7 62.075 68.7C62.0128 69.692 62.1611 70.6859 62.5101 71.6165C62.8591 72.5472 63.4009 73.3935 64.1 74.1C65.375 75.6 72.5 82.5 75.5 85.65C78.5 88.8 81.125 90.675 78.575 93.15C76.025 95.625 70.85 91.725 68 88.8C63.575 84.525 54.8 76.575 54.8 76.575L54.7925 76.9725C54.7925 79.1025 55.5275 81.0525 56.765 82.5975C58.925 85.4325 63.125 89.1075 65.675 91.9575C68.225 94.8075 69.725 97.2075 65.675 99.4575C61.625 101.707 55.625 96.1575 53 93.4575V93.4425C53.0082 92.7004 52.741 91.9816 52.25 91.425C51.3512 90.5968 50.2443 90.0282 49.0476 89.7799C47.8509 89.5316 46.6092 89.6128 45.455 90.015C45.9287 89.5894 46.3083 89.0696 46.5695 88.4888C46.8307 87.9081 46.9678 87.2792 46.9721 86.6424C46.9763 86.0057 46.8476 85.375 46.5941 84.7909C46.3406 84.2067 45.968 83.6819 45.5 83.25C44.5155 82.5041 43.3139 82.101 42.0787 82.1024C40.8436 82.1037 39.6428 82.5094 38.66 83.2575C39.157 82.7828 39.5406 82.2022 39.7824 81.5589C40.0242 80.9156 40.118 80.226 40.0567 79.5415C39.9955 78.857 39.7808 78.195 39.4286 77.6049C39.0765 77.0147 38.5959 76.5114 38.0225 76.1325C36.6799 75.2889 35.1044 74.8925 33.5224 75.0003C31.9404 75.1081 30.4333 75.7145 29.2175 76.7325C30.0301 75.7477 30.4307 74.487 30.3356 73.2138C30.2406 71.9405 29.6573 70.7533 28.7075 69.9C27.5247 68.8057 26.0209 68.1214 24.4188 67.9485C22.8167 67.7756 21.2016 68.1232 19.8125 68.94L14.825 60.5175C11.375 55.0425 7.325 49.3425 7.325 49.3425L24.425 28.5675C24.425 28.5675 30.5 32.3175 35.525 35.1675C38 36.5925 42.275 38.4675 45.5 39.9675C40.4 43.7925 36.125 47.4675 37.4 50.0175C39.6705 51.6526 42.3864 52.5547 45.184 52.603C47.9815 52.6512 50.727 51.8433 53.0525 50.2875C56.0343 48.2998 59.5415 47.2474 63.125 47.265C65.7275 47.265 68.2025 47.805 70.445 48.7875C74.6 51.5925 82.25 58.4925 89.225 62.8425C98 69.2175 99.725 73.3425 97.625 75.4425V75.45Z" fill="#EC3E0B" />
        </g>
        <defs>
          <clipPath id="clip0_155_1559">
            <rect width="120" height="120" fill="white" transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>,
      title: "Satisfaction Guaranteed",
      description:
        "We are committed to delivering the best in customer service, ensuring that every interaction is handled with care, professionalism, and attention to detail. Your satisfaction is our priority, and we go the extra mile to provide prompt support, clear communication, and solutions tailored to your needs.",
    },
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/images/benefit-bg.png" alt="Benefits Background" fill className="object-cover opacity-80" />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-12">
            <span className="bg-[#EC3E0B]/20 text-white px-4 py-2 rounded-full text-sm font-light border border-[#EC3E0B]/30">
              First-Class <span className="font-bold">Design Technology</span>
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12">
            Say Hello To Fulgo M<span className="text-[#EC3E0B]">o</span>bile
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Fulgo smartphones and accessories are created with exceptional design and deliver next-level digital
            abilities
          </p>
        </div>

        {/* Benefits Table Layout */}
        <div className="space-y-0">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start border border-gray-700/50 hover:bg-black/20 transition-all duration-300 backdrop-blur-md"
              style={{
                borderTop: index === 0 ? "1px solid rgba(107, 114, 128, 0.5)" : "none",
                borderBottom: "1px solid rgba(107, 114, 128, 0.5)",
                borderLeft: "1px solid rgba(107, 114, 128, 0.5)",
                borderRight: "1px solid rgba(107, 114, 128, 0.5)",
              }}
            >
              {/* Icon */}
              <div className="flex justify-center items-center w-56 mr-8 h-[-webkit-fill-available] flex-shrink-0 border-r" style={{ borderColor: 'rgba(107, 114, 128, 0.5)' }}>
                {benefit.icon}
              </div>

              {/* Content */}
              <div className="flex-1 py-8">
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed text-base">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-[#EC3E0B]/30 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-[#EC3E0B]/20 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-[#EC3E0B]/40 rounded-full"></div>
    </section>
  )
}
