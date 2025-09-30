import { Navigation } from "@/components/navigation"
import { PreOrderHero } from "@/components/preorder-hero"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import productsData from "@/utils/products.json"

interface PreOrderPageProps {
    params: {
        id: string
    }
}

export default function PreOrderPage({ params }: PreOrderPageProps) {
    // Find the product by ID
    const product = productsData.find(
        (p) => p.product.toLowerCase().replace(/\s+/g, '-') === params.id
    )

    // If product not found, show 404 or redirect
    if (!product) {
        return (
            <main className="relative bg-[#1E1E1E] min-h-screen">
                <Navigation />
                <div className="flex items-center justify-center min-h-[60vh]">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white mb-4">Product Not Found</h1>
                        <p className="text-gray-300 mb-8">The product you're looking for doesn't exist.</p>
                        <a href="/products" className="text-[#EC3E0B] hover:text-orange-400 transition-colors">
                            Browse All Products
                        </a>
                    </div>
                </div>
                <Footer />
                <ScrollToTop />
            </main>
        )
    }

    return (
        <main className="relative bg-[#1E1E1E] min-h-screen">
            <Navigation />
            <PreOrderHero product={product} />
            <Footer />
            <ScrollToTop />
        </main>
    )
}
