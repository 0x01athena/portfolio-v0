import { Navigation } from "@/components/navigation"
import { PrivacyPolicyContent } from "@/components/privacy-policy-content"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function PrivacyPolicyPage() {
  return (
    <main className="relative bg-[#0F0F0F] min-h-screen">
      <Navigation />
      <PrivacyPolicyContent />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
