import { Navigation } from "@/components/navigation"
import { DashboardHero } from "@/components/dashboard-hero"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function DashboardPage() {
  return (
    <main className="relative bg-[#1E1E1E] min-h-screen">
      <Navigation />
      <DashboardHero />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
