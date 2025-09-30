"use client"

import Image from "next/image"

export function PrivacyPolicyContent() {
  const sections = [
    {
      id: "1.1",
      title: "Our Commitment to Privacy",
      content: [
        "At Fulgo Mobile, we understand that privacy is a fundamental human right—not just compliance with law. We collect and handle personal data with the utmost care and responsibility.",
        "We are committed to being transparent about our data practices.",
      ],
    },
    {
      id: "1.2",
      title: "What is Personal Data?",
      content: [
        "Personal data includes any information that identifies you directly or indirectly—like name, email, device serial numbers, IP address, the time of identifiable online activity.",
        "We also consider aggregated data that could potentially identify you as personal data.",
      ],
    },
    {
      id: "1.3",
      title: "Categories of Data We Collect",
      items: [
        "Account & profile data: name, email address, date of birth",
        "Device & Usage Data: models, IMEI serial numbers, page visits, error logs",
        "Payment & Order Records: payment details, shipping address",
        "Support Data: Support case ticket details, email or chat contents",
        "Location Data: IP address, time zone information for service quality",
        "Marketing Preferences: email subscription preferences, communication history",
      ],
    },
    {
      id: "1.4",
      title: "How We Use Your Data",
      items: [
        "Operate and deliver products & services",
        "Process orders, payments, warranty claims",
        "Provide customer support and technical assistance with our consent",
        "Comply with legal obligations & government requests",
        "Conduct analytics for site improvement and fraud prevention",
      ],
    },
    {
      id: "1.5",
      title: "Sharing & Disclosure",
      content: ["We prioritize securing by minimizing data sharing."],
      items: [
        "Trusted service providers & agents (e.g. shipping logistics)",
        "Trusted third-party service providers under agreement to protect data",
        "Financial institutions for payment processing only",
        "Law enforcement or regulatory bodies when legally required",
      ],
      footer: "We do not sell your data or use it for third-party marketing.",
    },
    {
      id: "1.6",
      title: "Data Security & Retention",
      content: [
        "We take security seriously, using advanced safeguards against unauthorized access. Retention does not exceed the period necessary to fulfill the purposes, or as required by law.",
      ],
    },
    {
      id: "1.7",
      title: "Your Privacy Rights",
      content: ["Where applicable, you have rights to:"],
      items: [
        "Access, correct or delete your data",
        "Withdraw consent",
        "Request data portability or restrictions on processing",
        "File a complaint with your local data privacy board if unsatisfied/mobile.com",
      ],
    },
    {
      id: "1.8",
      title: "Cookies & Similar Technologies",
      items: [
        "Necessary cookies (essential for site functionality & Security)",
        "Performance cookies (helps us understand site usage)",
        "Marketing cookies (only with consent, used for engagement and analytics)",
      ],
      footer: "You may disable all except essential cookies—but some features may not work properly.",
    },
    {
      id: "1.9",
      title: "Children's Privacy",
      content: ["If you are under 18, you need a parent or guardian to consent on your behalf."],
    },
    {
      id: "1.10",
      title: "Changes to This Policy",
      content: [
        "We may update this policy at any time. Visit this page periodically for updates. The 'Last Updated' date at the top indicates the latest revision.",
        "For significant changes, we will notify you via email or prominent website notice.",
      ],
    },
  ]

  return (
    <section className="relative py-44 text-white">
      <Image src="/images/dashboard-bg.png" alt="Frequent Question" fill className="object-cover opacity-100" />
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
          <div className="space-y-1 opacity-80">
            <p><b>Effective Date</b>: March 2022</p>
            <p><b>Last Updated</b>: September 2024</p>
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

              {section.footer && <p className="text-white leading-relaxed italic">{section.footer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
