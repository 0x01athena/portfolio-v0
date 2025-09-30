import { Navigation } from "@/components/navigation"
import { ProductDetailHero } from "@/components/product-detail-hero"
import { ProductSpecifications } from "@/components/product-specifications"
import { ProductTechnicalSpecs } from "@/components/product-technical-specs"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import productsData from "@/utils/products.json"
import { ProductCarousel } from "@/components/product-carousel"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  // Find the product by ID
  const product = productsData.find(p =>
    p.product.toLowerCase().replace(/\s+/g, '-') === params.id.toLowerCase()
  )

  if (!product) {
    return (
      <main className="relative bg-[#1E1E1E] min-h-screen">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Product Not Found</h1>
            <p className="text-gray-300">The product you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="relative bg-[#1E1E1E] min-h-screen">
      <Navigation />
      <ProductDetailHero product={product} />
      <ProductSpecifications product={product} />
      {/* <ProductTechnicalSpecs product={product} /> */}
      <ProductCarousel currentType={product.type} />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
