"use client"

import Image from "next/image"

export function TermsOfSaleContent() {
  const sections = [
    {
      id: "2.1",
      title: "Acceptance of Orders",
      content: [
        "By placing an order, you agree to these Terms. Fulgo Mobile reserves the right to decline or cancel an order at any time before shipment (e.g., pricing error or stock issue).",
      ],
    },
    {
      id: "2.2",
      title: "Order Limits",
      content: [
        "We may limit quantity per order or user to prevent system abuse or to manage inventory—if limits are exceeded, Fulgo Mobile may cancel the order.",
      ],
    },
    {
      id: "2.3",
      title: "Pricing & Payment",
      items: [
        "All prices are inclusive of applicable taxes unless otherwise stated.",
        "Shipping and handling fees are added at checkout.",
        "Payment must be made in full before dispatch.",
      ],
    },
    {
      id: "2.4",
      title: "Shipping & Delivery",
      items: [
        "Estimated delivery dates are provided at checkout.",
        "Fulgo Mobile is not liable for delays caused by customs, carrier, or force majeure.",
        "International export regulations may apply.",
      ],
    },
    {
      id: "2.5",
      title: "Title and Risk",
      content: [
        "Title to the goods transfers to you when the carrier picks up the shipment. You assume risk of loss or damage at that point.",
      ],
    },
    {
      id: "2.6",
      title: "Returns & Warranty",
      items: [
        "Eligible returns accepted within 30 days of delivery.",
        "Refunds exclude shipping unless due to Fulgo Mobile error.",
        "Devices come with 12-month limited manufacturer warranty—see Warranty Terms section.",
      ],
    },
    {
      id: "2.7",
      title: "Subscription & Add-On Services",
      content: [
        "Additional services (e.g. extended care, accessories bundles) may be subject to separate subscription terms.",
      ],
    },
    {
      id: "2.8",
      title: "Liability Limitation",
      content: [
        "Fulgo Mobile's liability is limited to the purchase price. We are not liable for indirect, consequential or punitive damages.",
      ],
    },
  ]


  return (
    <section className="relative py-44 bg-[#0F0F0F] text-white">
      <Image src="/images/dashboard-bg.png" alt="Frequent Question" fill className="object-cover opacity-100" />
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Terms Of Sale</h1>
          <div className="space-y-1 opacity-80">
            <p><b>Applies to all Fulgo Mobile product sales through our online store.</b></p>
          </div>
        </div>

        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.id} className="space-y-4">
              <h2 className="text-xl font-bold text-white">
                {section.id} {section.title}
              </h2>

              {section.content && (
                <div className="space-y-3 opacity-70">
                  {section.content.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {section.items && (
                <ul className="space-y-2 ml-4 opacity-70">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-white leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
