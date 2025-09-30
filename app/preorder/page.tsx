import { Navigation } from "@/components/navigation"
import { PreOrderHero } from "@/components/preorder-hero"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function PreOrderPage() {
  return (
    <main className="relative bg-[#1E1E1E] min-h-screen">
      <Navigation />
      <PreOrderHero />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
