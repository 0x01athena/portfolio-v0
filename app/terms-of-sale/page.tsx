import { Navigation } from "@/components/navigation"
import { TermsOfSaleContent } from "@/components/terms-of-sale-content"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function TermsOfSalePage() {
  return (
    <main className="relative bg-[#1E1E1E] min-h-screen">
      <Navigation />
      <TermsOfSaleContent />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
