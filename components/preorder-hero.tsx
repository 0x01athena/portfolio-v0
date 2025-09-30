"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

interface Product {
  product: string
  tagline?: string
  sign: string
  type?: string
  model?: string
  features: any
}

interface PreOrderHeroProps {
  product?: Product
}

export function PreOrderHero({ product }: PreOrderHeroProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    shippingAddress: "",
    distributionInterest: "",
    paymentMethod: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })

  const steps = [
    {
      id: 1,
      title: "Customer Information",
      active: currentStep === 1,
    },
    {
      id: 2,
      title: "Distribution Interest",
      active: currentStep === 2,
    },
    {
      id: 3,
      title: "Payment Information",
      active: currentStep === 3,
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      console.log("Pre-order submitted:", formData)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <section className="relative py-20 bg-[#0F0F0F] min-h-screen flex items-center justify-center">
      <Image src="/images/dashboard-bg.png" alt="Frequent Question" fill className="object-cover" />

      <div className="max-w-4xl mx-auto px-8 py-32 w-full relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            {product ? `Pre-Order ${product.product} Now!` : "Pre-Order Your Device Now!"}
          </h1>
          {product && (
            <div className="mb-6">
              <p className="text-[#EC3E0B] text-xl font-semibold mb-2">{product.tagline}</p>
              <div className="flex justify-center">
                <Image
                  src={`/images/${product.sign}-front.png`}
                  alt={product.product}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
          )}
          <div className="font-light text-white/40 text-lg max-w-3xl mx-auto">
            <p className="my-4">Thank you for your interest in Fulgo Mobile devices.</p>
            <p>
              Please fill out the following form to pre-order and purchase our devices or to express your interest in becoming a distributor or reseller.
            </p>
          </div>
        </div>

        {/* Multi-Step Form Container */}
        <div className="bg-[#2a2a2a73] rounded-2xl p-12 shadow-2xl">
          {/* Step Indicators */}
          <div className="bg-black/30 border border-white/20 rounded-lg py-4 px-8 mb-12">
            <div className="flex justify-between items-center w-full">
              {steps.map((step, index) => (
                <>
                  <div key={step.id} className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${step.active ? "bg-[#EC3E0B] text-white" : "bg-gray-600 text-white"
                        }`}
                    >
                      {step.id}
                    </div>
                    <span className={`w-16 text-sm font-medium ${step.active ? "text-white font-bold" : "text-white/40"}`}>
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-16 h-0.5 bg-gray-400 mx-4"></div>
                  )}
                </>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Customer Information */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <div className="flex flex-row gap-4">
                  <div className="w-full">
                    <label className="block text-white font-medium mb-3">First Name</label>
                    <Input
                      type="text"
                      placeholder="Type here..."
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="bg-transparent border-0 border-b border-gray-500 rounded-none text-white placeholder:text-gray-400 focus:border-[#EC3E0B] focus:ring-0 px-0 pb-2 h-12"
                      required
                    />
                  </div>

                  <div className="w-full">
                    <label className="block text-white font-medium mb-3">Last Name</label>
                    <Input
                      type="text"
                      placeholder="Type here..."
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="bg-transparent border-0 border-b border-gray-500 rounded-none text-white placeholder:text-gray-400 focus:border-[#EC3E0B] focus:ring-0 px-0 pb-2 h-12"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-3">What's your email?</label>
                  <Input
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-transparent border-0 border-b border-gray-500 rounded-none text-white placeholder:text-gray-400 focus:border-[#EC3E0B] focus:ring-0 px-0 pb-2 h-12"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-3">What's your phone number?</label>
                  <Input
                    type="tel"
                    placeholder="Type here..."
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="bg-transparent border-0 border-b border-gray-500 rounded-none text-white placeholder:text-gray-400 focus:border-[#EC3E0B] focus:ring-0 px-0 pb-2 h-12"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-3">Shipping Address</label>
                  <Textarea
                    placeholder="Type here..."
                    value={formData.shippingAddress}
                    onChange={(e) => handleInputChange("shippingAddress", e.target.value)}
                    className="bg-transparent border-0 border-b border-gray-500 rounded-none text-white placeholder:text-gray-400 focus:border-[#EC3E0B] focus:ring-0 px-0 pb-2 min-h-[60px] resize-none"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 2: Distribution Interest */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <div>
                  <label className="block text-white font-medium mb-3">Distribution Interest</label>
                  <Textarea
                    placeholder="Please describe your interest in becoming a distributor or reseller..."
                    value={formData.distributionInterest}
                    onChange={(e) => handleInputChange("distributionInterest", e.target.value)}
                    className="bg-transparent border-0 border-b border-gray-600 rounded-none text-white placeholder:text-gray-500 focus:border-[#EC3E0B] focus:ring-0 px-0 pb-2 min-h-[120px] resize-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-3">Business Type</label>
                  <select
                    className="w-full bg-transparent border-0 border-b border-gray-600 text-white rounded-none px-0 pb-2 focus:border-[#EC3E0B] focus:ring-0"
                    required
                  >
                    <option value="" className="bg-[#2A2A2A]">
                      Select business type...
                    </option>
                    <option value="retailer" className="bg-[#2A2A2A]">
                      Retailer
                    </option>
                    <option value="distributor" className="bg-[#2A2A2A]">
                      Distributor
                    </option>
                    <option value="reseller" className="bg-[#2A2A2A]">
                      Reseller
                    </option>
                    <option value="individual" className="bg-[#2A2A2A]">
                      Individual Customer
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-3">Expected Volume</label>
                  <Input
                    type="number"
                    placeholder="Number of devices per month"
                    className="bg-transparent border-0 border-b border-gray-600 rounded-none text-white placeholder:text-gray-500 focus:border-[#EC3E0B] focus:ring-0 px-0 pb-2"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 3: Payment Information */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <div>
                  <label className="block text-white font-medium mb-3">Payment Method</label>
                  <select
                    className="w-full bg-transparent border-0 border-b border-gray-600 text-white rounded-none px-0 pb-2 focus:border-[#EC3E0B] focus:ring-0"
                    value={formData.paymentMethod}
                    onChange={(e) => handleInputChange("paymentMethod", e.target.value)}
                    required
                  >
                    <option value="" className="bg-[#2A2A2A]">
                      Select payment method...
                    </option>
                    <option value="credit-card" className="bg-[#2A2A2A]">
                      Credit Card
                    </option>
                    <option value="debit-card" className="bg-[#2A2A2A]">
                      Debit Card
                    </option>
                    <option value="bank-transfer" className="bg-[#2A2A2A]">
                      Bank Transfer
                    </option>
                    <option value="paypal" className="bg-[#2A2A2A]">
                      PayPal
                    </option>
                  </select>
                </div>

                {formData.paymentMethod === "credit-card" || formData.paymentMethod === "debit-card" ? (
                  <>
                    <div>
                      <label className="block text-white font-medium mb-3">Card Number</label>
                      <Input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                        className="bg-transparent border-0 border-b border-gray-600 rounded-none text-white placeholder:text-gray-500 focus:border-[#EC3E0B] focus:ring-0 px-0 pb-2"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <label className="block text-white font-medium mb-3">Expiry Date</label>
                        <Input
                          type="text"
                          placeholder="MM/YY"
                          value={formData.expiryDate}
                          onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                          className="bg-transparent border-0 border-b border-gray-600 rounded-none text-white placeholder:text-gray-500 focus:border-[#EC3E0B] focus:ring-0 px-0 pb-2"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-3">CVV</label>
                        <Input
                          type="text"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={(e) => handleInputChange("cvv", e.target.value)}
                          className="bg-transparent border-0 border-b border-gray-600 rounded-none text-white placeholder:text-gray-500 focus:border-[#EC3E0B] focus:ring-0 px-0 pb-2"
                          required
                        />
                      </div>
                    </div>
                  </>
                ) : null}

                <div className="bg-[#EC3E0B]/10 border border-[#EC3E0B]/30 rounded-lg p-4">
                  <p className="text-orange-400 text-sm">
                    <strong>Note:</strong> This is a pre-order form. No payment will be processed at this time. We will
                    contact you with payment instructions and delivery details once your pre-order is confirmed.
                  </p>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end pt-8">
              <Button
                type="submit"
                className="bg-[#EC3E0B] hover:bg-orange-600 text-white px-8 py-3 rounded-sm border-t border-gray font-semibold flex items-center space-x-2 shadow-lg"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
