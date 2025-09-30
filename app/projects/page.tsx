import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ProjectsPage() {
  return (
    <main className="relative bg-[#1E1E1E] min-h-screen">
      <Navigation />
      <div className="flex items-center justify-center min-h-screen py-20">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-gray-300">Projects page coming soon...</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
