import { Navigation } from "@/components/navigation"
import { ContactHero } from "@/components/contact-hero"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function ContactPage() {
  return (
    <main className="relative bg-[#1E1E1E] min-h-screen">
      <Navigation />
      <ContactHero />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
