"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronRight } from "lucide-react"

export function FrequentQuestions() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  const faqs = [
    {
      question: "What Makes Fulgo Mobile's Devices Unique?",
      answer: "Fulgo Mobiles devices are unique in that they provide advanced technology and features at an affordable price.",
    },
    {
      question: "How Does Fulgo Mobile Ensure The Quality Of Its Devices?",
      answer: "We conduct rigorous testing and quality assurance checks on all of our devices before they are released to the market.",
    },
    {
      question: "What Features Can Customers Expect From Fulgo Mobile's Devices?",
      answer: "Our devices feature advanced camera systems, sleek and modern designs, and long-lasting battery life. We also prioritize user experience and aim to create devices that are easy and intuitive to use.",
    },
    {
      question: "What Is Fulgo Mobile's Commitment To Sustainability?",
      answer: "We are committed to sustainability and strive to minimize our environmental impact.We use recyclabe materials in our devices, and work with suppliers who share our commitment to sustainability.",
    },
    {
      question: "Can Fulgo Mobile's Devices Be Used With Different Carriers?",
      answer: "Yes, most of our devices are compatible with a variety of carriers.  We prioritize device compatibility and work to ensure that our devices can be used by as many people as possible.",
    },
    {
      question: "How Does Fulgo Mobile Protect User Data And Privacy?",
      answer: "We take user data and privacy very seriously and have implemented various security measures to protect our users. Our devices feature built-in security features, such as fingerprint sensors and facial recognition, and we use encrypted communication protocols to protect user data. ",
    },
    {
      question: "How Can I Sign Up For Pre-Order?",
      answer: "Submit your pre- order form clicking the pre - order link on the homepage.",
    },
    {
      question: "How Can I Contact You?",
      answer: "Contact us page",
    },
  ]

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index)
  }

  return (
    <section className="relative min-h-screen py-40 bg-[#0F0F0F]">
      <Image src="/images/dashboard-bg.png" alt="Chat Background" fill className="object-cover opacity-100" />

      <div className="relative z-10 max-w-5xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Frequent Questions</h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-0 duration-300">
          {faqs.map((faq, index) => {
            const isExpanded = openQuestion === index

            return (
              <div
                key={index}
                className="bg-black/20 border border-gray-700/50 hover:bg-black/40 transition-all duration-300 overflow-hidden cursor-pointer group"
                onClick={() => toggleQuestion(index)}
              >
                {/* Accordion Header */}
                <div className="flex items-start justify-between px-8 py-6">
                  <span className="text-white text-xl font-bold">{faq.question}</span>
                  <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center transition-all duration-200 group-hover:bg-gray-700 group-hover:scale-110">
                    <ChevronRight
                      className={`w-4 h-4 text-white transition-transform duration-300 ease-in-out ${isExpanded ? 'rotate-90' : 'rotate-0'
                        }`}
                    />
                  </div>
                </div>

                {/* Accordion Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-120 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-8 pb-4">
                    <p className="text-gray-300 text-md leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
