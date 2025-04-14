import { Download, Terminal } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Features from "@/components/features"
import Pricing from "@/components/pricing"
import CallToAction from "@/components/cta"
import { Hero } from "@/components/hero"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <Hero />
      <Features />
      <Pricing />
      <CallToAction />
      <Footer />
    </div>
  )
}
