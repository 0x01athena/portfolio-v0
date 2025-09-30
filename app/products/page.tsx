import Image from 'next/image'
import { Navigation } from "@/components/navigation"
import { ProductHero } from "@/components/product-hero"
import { AllProductsSection } from "@/components/all-products-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function ProductsPage() {
  return (
    <main className="relative bg-[#0c0c0c] min-h-screen">
      <Navigation />
      <div className="relative">
        <div className="z-10">
          <ProductHero />
          <AllProductsSection />
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
