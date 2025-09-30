import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ProductShowcase } from "@/components/product-showcase"
import { TimelineSection } from "@/components/timeline-section"
import { ProductCarousel } from "@/components/product-carousel"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="relative bg-black">
      <Navigation />
      <HeroSection />
      <BenefitsSection />
      <ProductShowcase />
      <TimelineSection />
      <ProductCarousel />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
