import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Testimonials from "@/components/Testimonials"
import Pricing from "@/components/Pricing"
import Footer from "@/components/Footer"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Page() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Theme toggle in top-right */}
      <div className="fixed right-4 top-4 z-50">
        <ThemeToggle />
      </div>

      {/* Background orbs / subtle gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-[-10%] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.25),transparent_65%)] blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.2),transparent_65%)] blur-3xl" />
      </div>

      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  )
}
