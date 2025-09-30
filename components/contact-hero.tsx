"use client"

import type React from "react"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Send, Instagram, Facebook, Twitter, Linkedin } from "lucide-react"
import { BorderBox } from "./ui/border-box"

export function ContactHero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [mailingEmail, setMailingEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleMailingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle mailing list subscription
    console.log("Mailing list subscription:", mailingEmail)
  }

  const offices = [
    {
      title: "Headquarters:",
      address: "Fulgo Mobile Pty Ltd, Melbourne, Victoria, Australia",
      borderColor: "border-orange-500",
      region: "oz",
    },
    {
      title: "Office—Nigeria:",
      address: "Fulgo Mobile - West Africa, Lagos, NG",
      borderColor: "border-purple-500",
      region: "ng",
    },
    {
      title: "Kenya / East Africa:",
      address: "Fulgo Mobile - East Africa",
      borderColor: "border-pink-500",
      region: "ke",
    },
  ]

  return (
    <section className="relative pt-40 pb-20 bg-[#0F0F0F]">
      <Image src="/images/dashboard-bg.png" alt="Contact Background" fill className="object-cover opacity-100" />
      <div className="absolute inset-0 bg-black/60 -z-10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">Contact Us</h1>

            {/* Office Locations */}
            <div className="space-y-6">
              {offices.map((office, index) => (
                <BorderBox>
                  <div
                    key={index}
                    className={`flex items-center justify-between py-4 px-8 bg-[#2a2a2a] ${office.borderColor} hover:bg-gray-700 transition-colors`}
                  >
                    <div className="flex items-start flex-col gap-4">
                      <h3 className="text-white text-2xl font-bold mb-1">{office.title}</h3>
                      <p className="text-gray-300 text-md">{office.address}</p>
                    </div>
                    <a
                      href={`/support?region=${office.region}`}
                      className="p-8 bg-[#EC3E0B20] flex items-center justify-center hover:bg-[#EC3E0B] transition-colors"
                    >
                      <svg width="40" height="40" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M34.0098 0C39.1458 0.00296739 44.2144 1.16877 48.8352 3.40991C53.4561 5.65106 57.5092 8.90935 60.6904 12.9403C63.8716 16.9712 66.0983 21.67 67.2034 26.6842C68.3085 31.6984 68.2633 36.8977 67.0711 41.8919C65.8789 46.8861 63.5708 51.5455 60.3199 55.5205C57.069 59.4955 52.9598 62.6828 48.3007 64.8432C43.6415 67.0037 38.5534 68.0811 33.4182 67.9948C28.283 67.9084 23.234 66.6605 18.6501 64.3446L18.1357 64.0684L2.64001 67.9359C2.34179 68.0108 2.03086 68.0202 1.72865 67.9634C1.42645 67.9065 1.14018 67.7848 0.889605 67.6066C0.639025 67.4285 0.4301 67.198 0.277247 66.9313C0.124395 66.6646 0.0312527 66.3678 0.00425092 66.0616V65.7131L0.0637689 65.3604L3.93239 49.8735L3.66456 49.3635C1.72396 45.533 0.526682 41.3697 0.13604 37.0938L0.0297585 35.4703L0 33.9998C0 24.9825 3.58317 16.3345 9.96125 9.95831C16.3393 3.58211 24.9899 0 34.0098 0ZM34.0098 4.24997C28.8168 4.24913 23.7139 5.60684 19.2083 8.18817C14.7027 10.7695 10.9513 14.4846 8.32673 18.9643C5.70217 23.444 4.29591 28.5322 4.24769 33.7235C4.19946 38.9148 5.51095 44.0283 8.05183 48.556C8.24909 48.9081 8.34199 49.309 8.31965 49.712L8.26014 50.1115L5.04621 62.9506L17.9019 59.7461C18.1632 59.6815 18.4345 59.6671 18.7012 59.7036L19.088 59.7929L19.4579 59.9586C23.4257 62.1793 27.8499 63.4613 32.3906 63.7064C36.9313 63.9514 41.4678 63.1529 45.6517 61.3721C49.8356 59.5913 53.5556 56.8757 56.5262 53.4337C59.4967 49.9918 61.6386 45.915 62.7876 41.5165C63.9365 37.1181 64.0619 32.5149 63.1541 28.0604C62.2462 23.6059 60.3293 19.4187 57.5505 15.8203C54.7718 12.2218 51.205 9.30785 47.1242 7.30214C43.0434 5.29642 38.5571 4.25231 34.0098 4.24997ZM36.1354 38.2498C36.6666 38.2488 37.1789 38.4467 37.5714 38.8044C37.964 39.1622 38.2083 39.6539 38.2563 40.1828C38.3043 40.7116 38.1525 41.2392 37.8307 41.6618C37.509 42.0843 37.0407 42.3711 36.5181 42.4657L36.1354 42.4997H23.3818C22.8506 42.5007 22.3383 42.3028 21.9458 41.9451C21.5532 41.5873 21.3089 41.0956 21.2609 40.5668C21.2129 40.0379 21.3647 39.5103 21.6865 39.0877C22.0082 38.6652 22.4765 38.3784 22.9991 38.2838L23.3818 38.2498H36.1354ZM44.6379 25.4998C45.1691 25.4989 45.6814 25.6967 46.0739 26.0545C46.4664 26.4123 46.7107 26.904 46.7587 27.4328C46.8067 27.9617 46.6549 28.4893 46.3332 28.9119C46.0115 29.3344 45.5432 29.6212 45.0205 29.7158L44.6379 29.7498H23.3818C22.8506 29.7508 22.3383 29.5529 21.9458 29.1952C21.5532 28.8374 21.3089 28.3457 21.2609 27.8168C21.2129 27.288 21.3647 26.7604 21.6865 26.3378C22.0082 25.9153 22.4765 25.6285 22.9991 25.5338L23.3818 25.4998H44.6379Z" fill="white" />
                      </svg>
                    </a>
                  </div>
                </BorderBox>
              ))}
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Online or phone:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#EC3E0B]" />
                  <span className="text-gray-300">
                    <strong className="text-white">Australia support:</strong> 1300 FULGO
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#EC3E0B]" />
                  <span className="text-gray-300">
                    <strong className="text-white">Nigeria support:</strong> +234 1 900 FULGO
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#EC3E0B]" />
                  <span className="text-gray-300">
                    <strong className="text-white">General inquiries / partnerships:</strong> info@fulgomobile.com
                  </span>
                </div>
                <div className="flex text-gray-300">
                  <strong className="text-white">Social: &nbsp;&nbsp;</strong>
                  <a
                    href="https://www.instagram.com/fulgomobile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[#EC3E0B] hover:text-orange-400 transition-colors"
                  >
                    {/* <Instagram className="w-4 h-4" /> */}
                    <span>Instagram</span>
                  </a>&nbsp;/&nbsp;
                  <a
                    href="https://x.com/fulgomobile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[#EC3E0B] hover:text-orange-400 transition-colors"
                  >
                    {/* <Twitter className="w-4 h-4" /> */}
                    <span>Twitter</span>
                  </a>&nbsp;/&nbsp;
                  <a
                    href="https://au.linkedin.com/company/fulgo-mobile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[#EC3E0B] hover:text-orange-400 transition-colors"
                  >
                    {/* <Linkedin className="w-4 h-4" /> */}
                    <span>LinkedIn</span>
                  </a>&nbsp;/&nbsp;
                  <a
                    href="https://www.facebook.com/fulgomobile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[#EC3E0B] hover:text-orange-400 transition-colors"
                  >
                    {/* <Facebook className="w-4 h-4" /> */}
                    <span>Facebook</span>
                  </a>
                  <span>: @fulgomobile</span>
                </div>
              </div>
            </div>

            {/* Mailing List */}
            <div className="border-t border-white/40 pt-8">
              <h3 className="text-white font-bold text-2xl mb-4">Join Our Mailing List</h3>
              <p className="text-gray-300 text-sm mb-4">Stay ahead with product launches, promos and tips:</p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Unlock possibilities with digital living</h4>
                  <p className="text-gray-300 text-sm">- Receive curated news, offers & support content.</p>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2">Subscribe:</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    Enter your email below and optionally tick topics (product news, sustainability, career updates).
                  </p>

                  <p className="text-gray-400 text-xs mt-2">
                    By subscribing you agree to receive communications as per our Privacy Policy, and you may
                    unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-[#2a2a2a73] rounded-2xl px-8 py-12 shadow-2xl">
            <div className="bg-black/40 border border-gray-700/50 rounded-lg py-6 px-10 mb-8">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex flex-col justify-between items-start h-full gap-6 font-extralight">
                  <h2 className="text-3xl font-light text-white">Welcome,</h2>
                  <p className="text-xl text-white/40">We are here to help!</p>
                </div>
                <Image src="/images/logo.png" alt="Fulgo Logo" width={160} height={80} className="h-24 w-auto" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-12">
              <div>
                <label className="block text-white font-medium mb-2">What's your name?</label>
                <Input
                  type="text"
                  placeholder="Type here..."
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-transparent border-0 border-b border-gray-400 text-white placeholder:text-gray-400 focus:border-[#EC3E0B] focus:ring-0 rounded-none px-0 pb-2 h-12"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">What's your email?</label>
                <Input
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-transparent border-0 border-b border-gray-400 text-white placeholder:text-gray-400 focus:border-[#EC3E0B] focus:ring-0 rounded-none px-0 pb-2 h-12"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <Textarea
                  placeholder="Type here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={10}
                  className="bg-transparent border border-gray-400 text-white placeholder:text-gray-400 focus:border-[#EC3E0B] focus:ring-0 rounded px-3 py-2 min-h-[120px]"
                  required
                />
                <div className="flex justify-end mt-4">
                  <Button
                    type="submit"
                    className="bg-[#EC3E0B] hover:bg-orange-600 text-white px-6 py-3 border-t border-gray rounded-sm font-semibold flex items-center space-x-2 shadow-lg"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>


            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
