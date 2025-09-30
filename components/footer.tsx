"use client"

import Image from "next/image"
import { Mail, Instagram, Linkedin, Facebook, Twitter, Shield, Wallet, Globe } from "lucide-react"
import { BorderBox } from "./ui/border-box"

export function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Pre-Order", href: "/preorder" },
    { name: "Contact Us", href: "/contact" },
    { name: "Support", href: "/support" },
    { name: "FAQ", href: "/faq" },
    { name: "Partners", href: "/faq#partners" },
  ]

  const regions = [
    { name: "Australia", href: "/support?region=oz" },
    { name: "Cameroon", href: "/support?region=cm" },
    { name: "Gambia", href: "/support?region=gm" },
    { name: "Kenya", href: "/support?region=ke" },
    { name: "Nigeria", href: "/support?region=ng" },
  ]

  const resources = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Sale", href: "/terms-of-sale" },
    { name: "Acceptable Use Policy", href: "/acceptable-use-policy#acceptable-use-policy" },
    { name: "Terms of Use", href: "/acceptable-use-policy#terms-of-use" },
    { name: "Cookie Policy", href: "/acceptable-use-policy#cookie-policy" },
    { name: "Sustainability", href: "/acceptable-use-policy#sustainability" },
    { name: "Guideline", href: "/acceptable-use-policy#community-guidelines" },
    { name: "Careers", href: "/acceptable-use-policy#careers" },
    { name: "Support Center", href: "/acceptable-use-policy#support-centre" },
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Sale", href: "/terms-of-sale" },
    { name: "Acceptable Use Policy", href: "/acceptable-use-policy#acceptable-use-policy" },
    { name: "Terms of Use", href: "/acceptable-use-policy#terms-of-use" },
  ]

  const features = [
    {
      icon: <svg width="42" height="48" viewBox="0 0 42 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 21.3568L18.5004 26.356L28.5 16.3564" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 46.3564L23.1996 45.406C27.8116 43.4269 31.7941 40.2237 34.7159 36.1432C37.6377 32.0627 39.3873 27.2605 39.7752 22.2568L40.8504 8.45685C40.8679 7.88534 40.6887 7.32515 40.3427 6.86994C39.9967 6.41474 39.5049 6.09212 38.9496 5.95605L21 1.35645L3.05037 5.85645C2.49524 5.99248 2.00361 6.31492 1.65764 6.76988C1.31167 7.22483 1.13233 7.78475 1.14958 8.35605L2.22477 22.156C2.61248 27.1599 4.36198 31.9623 7.28377 36.0431C10.2056 40.1238 14.1882 43.3273 18.8004 45.3064L21 46.3564Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>,
      title: "Secure",
      description: "Enterprise-grade protection",
    },
    {
      icon: <svg width="52" height="43" viewBox="0 0 52 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 11.8564H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M48.0825 14.3564H41.5775C37.115 14.3564 33.5 17.7139 33.5 21.8564C33.5 25.9989 37.1175 29.3564 41.575 29.3564H48.0825C48.2925 29.3564 48.395 29.3564 48.4825 29.3514C49.8325 29.2689 50.9075 28.2714 50.995 27.0189C51 26.9389 51 26.8414 51 26.6489V17.0639C51 16.8714 51 16.7739 50.995 16.6939C50.905 15.4414 49.8325 14.4439 48.4825 14.3614C48.3975 14.3564 48.2925 14.3564 48.0825 14.3564Z" stroke="white" strokeWidth="2" />
        <path d="M48.4125 14.3564C48.2175 9.67645 47.5925 6.80645 45.57 4.78645C42.6425 1.85645 37.9275 1.85645 28.5 1.85645H21C11.5725 1.85645 6.8575 1.85645 3.93 1.85645C1.0025 7.71645 1 12.4289 1 21.8564C1 31.2839 1 35.9989 3.93 38.9264C6.86 41.8539 11.5725 41.8564 21 41.8564H28.5C37.9275 41.8564 42.6425 41.8564 45.57 38.9264C47.5925 36.9064 48.22 34.0364 48.4125 29.3564" stroke="white" strokeWidth="2" />
        <path d="M40.9775 21.8564H41.0025" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>,
      title: "Wallet",
      description: "Easy buy/sell/trade",
    },
    {
      icon: <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M51 26.8564C51 13.0489 39.8075 1.85645 26 1.85645C12.1925 1.85645 1 13.0489 1 26.8564C1 40.6639 12.1925 51.8564 26 51.8564C39.8075 51.8564 51 40.6639 51 26.8564Z" stroke="white" strokeWidth="2" />
        <path d="M46 11.1039C43.6625 11.2714 40.67 12.1789 38.595 14.8639C34.845 19.7139 31.0975 20.1214 28.5975 18.5039C24.8475 16.0789 28 12.1464 23.6 10.0114C20.7325 8.61895 20.3325 4.83145 21.93 1.85645M1 24.3564C2.9075 26.0114 5.575 27.5264 8.7225 27.5264C15.2225 27.5264 16.5225 28.7689 16.5225 33.7364C16.5225 38.7039 16.5225 38.7039 17.8225 42.4289C18.6675 44.8539 18.9625 47.2739 17.2775 49.3564M51 30.4864C48.7825 29.2114 46 28.6839 43.1825 30.7064C37.795 34.5814 34.0775 31.3714 32.405 34.5789C29.9425 39.2989 38.74 40.7814 31 51.8564" stroke="white" strokeWidth="2" strokeLinejoin="round" />
      </svg>,
      title: "Global Access",
      description: "Trade anywhere, anytime",
    },
  ]

  return (
    <footer className="bg-[#1E1E1E]">
      {/* Unlocking Possibilities Section */}
      <section className="relative py-40 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/images/section-5.png" alt="Crypto Section Background" fill className="object-cover opacity-80" />
        </div>

        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              <p className="mb-4">Unlocking A World</p>
              <p>Of Possibilities</p>
            </h2>

            <p className="text-gray-300 text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
              Buy, sell and trade cryptocurrencies using the embedded wallet - brought to you by Fulgo: a first-of-its-kind, easy to use wallet featuring enterprise-grade levels of security for your
              assets
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <BorderBox key={index}>
                <div className="flex flex-col bg-[rgb(15,15,15)] px-8 py-6">
                  <div className="flex justify-start">
                    <div className="w-20 h-20 bg-[#EC3E0B]/20 flex items-center justify-center p-2">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1 pt-6 justify-start items-start text-left">
                    <h3 className="text-3xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-base">{feature.description}</p>
                  </div>
                </div>
              </BorderBox>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-[#EC3E0B]/30 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-[#EC3E0B]/40 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#EC3E0B]/50 rounded-full"></div>
      </section>

      {/* Main Footer Content */}
      <div className="bg-[rgb(15,15,15)]">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <Image src="/images/logo.png" alt="Fulgo Logo" width={80} height={32} className="h-8 w-auto mb-6" />
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Fulgo Mobile is an Australian-owned and operated mobile device company producing smartphones and
                  accessories.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-gray-300 text-sm">Fulgo in Healthcare</p>
                <a href="#" className="text-[#EC3E0B] hover:text-orange-400 text-sm block transition-colors">
                  www.fulgohealth.com
                </a>
              </div>

              <div className="space-y-2">
                <p className="text-gray-300 text-sm">Fulgo in Financial Technology</p>
                <a href="#" className="text-[#EC3E0B] hover:text-orange-400 text-sm block transition-colors">
                  www.fulgopay.com
                </a>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <a
                    href="mailto:info@fulgomobile.com"
                    className="text-gray-300 text-sm hover:text-orange-400 transition-colors"
                  >
                    info@fulgomobile.com
                  </a>
                </div>

                <div className="flex space-x-3">
                  <a
                    href="https://www.instagram.com/fulgomobile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#EC3E0B] transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href="https://www.facebook.com/fulgomobile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#EC3E0B] transition-colors"
                  >
                    <Facebook className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href="https://x.com/fulgomobile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#EC3E0B] transition-colors"
                  >
                    <Twitter className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href="https://au.linkedin.com/company/fulgo-mobile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#EC3E0B] transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-300 text-sm hover:text-orange-400 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Select Preferred Regions */}
            <div>
              <h3 className="text-white font-semibold mb-6">Select Preferred Regions</h3>
              <ul className="space-y-3">
                {regions.map((region) => (
                  <li key={region.name}>
                    <a href={region.href} className="text-gray-300 text-sm hover:text-orange-400 transition-colors">
                      {region.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-6">Resources</h3>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <a href={resource.href} className="text-gray-300 text-sm hover:text-orange-400 transition-colors">
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              {legalLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 text-sm hover:text-orange-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <p className="text-gray-400 text-sm">© 2025, Fulgo</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
