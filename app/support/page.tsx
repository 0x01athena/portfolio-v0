import { Navigation } from "@/components/navigation"
import { SupportHero } from "@/components/support-hero"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function SupportPage() {
  return (
    <main className="relative bg-[#0F0F0F] min-h-screen">
      <Navigation />
      <SupportHero />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
