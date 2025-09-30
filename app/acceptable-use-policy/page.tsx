import Image from 'next/image'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function AcceptableUsePolicyPage() {
  return (
    <main className=" bg-[#0F0F0F] min-h-screen">
      <Navigation />

      <section className="relative pb-20">
        <Image src="/images/dashboard-bg.png" alt="Frequent Question" fill className="object-cover" />
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          {/* Acceptable Use Policy Section */}
          <div id="acceptable-use-policy" className="pt-40 -mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Acceptable Use Policy (AUP)</h1>
            <p className="text-gray-300 text-lg mb-8">
              Applies to users of our website, forums, warranty check, support chat, and mobile apps.
            </p>

            <p className="text-white text-lg mb-6">You agree not to:</p>

            <ul className="space-y-3 ml-4 mb-8">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 leading-relaxed">
                  Impersonate any individual or entity, or misrepresent affiliation with Fulgo Mobile
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 leading-relaxed">
                  Use automated scripts ("bots," "scrapers") to gather data or access restricted areas
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 leading-relaxed">
                  Upload or publish viruses, malware, or harmful code
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 leading-relaxed">
                  Violate any law; post illegal, defamatory, obscene, or infringing content
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 leading-relaxed">
                  Attempt unauthorized access to accounts, systems, or data
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 leading-relaxed">
                  Reverse engineer or misuse Fulgo Mobile's intellectual property
                </span>
              </li>
            </ul>

            <p className="text-gray-300 leading-relaxed">
              Fulgo Mobile may suspend or terminate access for violations without notice.
            </p>
          </div>

          <div id="terms-of-use" className="pt-32 -mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Terms Of Use</h2>

            <div className="space-y-6">
              <div>
                <p className="text-white font-semibold mb-2">
                  <strong>Scope:</strong>{" "}
                  <span className="font-normal text-gray-300">
                    This agreement governs your access and use of Fulgo Mobile Global page and associated apps, unless a
                    separate service agreement applies.
                  </span>
                </p>
              </div>

              <ul className="space-y-4 ml-4">
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">License of Use:</strong>
                    <span className="text-gray-300">
                      {" "}
                      You have a limited, non-exclusive license to access the site, solely for personal or business use
                      related to Fulgo Mobile products
                    </span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Intellectual Property:</strong>
                    <span className="text-gray-300">
                      {" "}
                      All site content—design, images, text, trademarks—is owned by Fulgo Mobile. Any reuse requires
                      express written consent
                    </span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Prohibited Conduct:</strong>
                    <span className="text-gray-300"> Same as Acceptable Use (robots, hacking, unlawful content)</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Third-Party Links:</strong>
                    <span className="text-gray-300">
                      {" "}
                      We are not liable for external content or reliability of third-party links
                    </span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Termination Rights:</strong>
                    <span className="text-gray-300"> We can suspend or block access if you violate the Terms</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Disclaimer & Limitation:</strong>
                    <span className="text-gray-300">
                      {" "}
                      Services and content are provided "as is"—we disclaim implied warranties. Liability limited to
                      direct losses only
                    </span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Governing Law:</strong>
                    <span className="text-gray-300"> Australia</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Cookie Policy */}
          <div id="cookie-policy" className="pt-32 -mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Cookie Policy</h2>
            <p className="text-gray-300 mb-6">
              Summarizes how we use cookies and similar tracking on our site:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 leading-relaxed">What cookies are used and for what purposes</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 leading-relaxed">How to manage or delete them in your browser</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 leading-relaxed">Changes to cookie usage will be posted here</span>
              </li>
            </ul>
          </div>

          {/* Sustainability */}
          <div id="sustainability" className="pt-32 -mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Sustainability</h2>
            <p className="text-gray-300 mb-6">
              Fulgo Mobile’s Sustainability Hub outlines our commitment to people, planet & technology.
            </p>
            <p className="text-white font-semibold mb-4 text-xl">Our Focus Areas:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Planet:</strong> Targeting net‑zero CO₂ emissions by 2040; promoting circular design
                  in our devices (recyclable materials, minimal packaging)
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 leading-relaxed">
                  <strong className="text-white">People:</strong> Supporting digital education programs in underserved communities, investing in tech scholarships
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Responsible Tech:</strong> Sourcing conflict‑free minerals; ensuring human‑rights‑compliant supply chain
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Ethics & Transparency:</strong> Whistleblowing support, supplier code of conduct, annual reports available
                </span>
              </li>
            </ul>
          </div>

          {/* Community Guidelines */}
          <div id="community-guidelines" className="pt-32 -mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Guidelines</h2>
            <p className="text-gray-300 mb-6 text-xl">
              These apply to our <strong className="text-white">official forums</strong>, <strong className="text-white">social media</strong>, and <strong className="text-white">events</strong>:
            </p>
            <p className="text-white font-semibold mb-3">When engaging with the Fulgo Mobile Community:</p>
            <ul className="space-y-2 ml-4">
              {[
                "Be respectful and inclusive",
                "Avoid hate speech, harassment, or spam",
                "Do not post personal or financial information",
                "Stay on topic; no advertising or solicitation",
                "Disclose sponsored content or affiliate links",
              ].map((rule) => (
                <li key={rule} className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300 leading-relaxed">{rule}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-400 mt-4">
              Fulgo Mobile reserves the right to remove posts or ban users for violations.
            </p>
          </div>

          {/* Careers */}
          <div id="careers" className="pt-32 -mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Careers</h2>
            <p className="text-gray-300 mb-6">Join the team. No openings? Send us your resume anyway.</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Who we’re looking for:</strong> Designers, engineers, marketers, customer‑support professionals, sustainability officers
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Why work at Fulgo Mobile:</strong> High‑impact projects, innovation with purpose, global and local impact
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Submit your CV:</strong> careers@fulgomobile.com
                </span>
              </li>
            </ul>
          </div>

          {/* Support Centre */}
          <div id="support-centre" className="pt-32 pb-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Support Centre</h2>
            <p className="text-white font-semibold mb-3 text-xl">Find Help Fast:</p>
            <ul className="space-y-2 ml-4">
              {[
                "Frequently Asked Questions (FAQs): topics by Purchase, Warranty, Shipping, Setup, App & Wallet",
                "Product Manuals & Software files for download",
                "Warranty & Repair Portal: claim status, repair request, policy overview",
                "IMEI / Device Serial Lookup",
                "Live Chat & Ticket System (operating hours: 9 AM–6 PM GMT +10)",
                "Contact Support: info@fulgomobile.com",
              ].map((item) => (
                <li key={item} className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
