import { Navigation } from "@/components/navigation"
import { FrequentQuestions } from "@/components/frequent-questions"
import { PartnersMarquee } from "@/components/partners-marquee"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import Image from "next/image"

export default function FAQPage() {
    return (
        <main className="relative bg-[#0F0F0F] min-h-screen">
            <Navigation />
            <div className="relative">
                <Image src="/images/dashboard-bg.png" alt="Chat Background" fill className="object-cover opacity-100" />

                <FrequentQuestions />
                <PartnersMarquee />
            </div>
            <Footer />
            <ScrollToTop />
        </main>
    )
}
