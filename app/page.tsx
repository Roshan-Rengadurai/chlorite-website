import { Download, Terminal } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import Link from "next/link"

// Feature data abstraction
const features = [
  {
    title: "Minimalist Design",
    description: "Focus on your content with a clean, distraction-free interface.",
  },
  {
    title: "Markdown Support",
    description: "Write in Markdown and see your formatting in real-time.",
  },
  {
    title: "Cross-Platform",
    description: "Available on Mac, Windows, and soon Linux.",
  },
  {
    title: "Cloud Sync",
    description: "Your notes are always available on all your devices.",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* New Feature Banner */}
      <div className="w-full flex justify-center mt-6">
        <div className="bg-secondary/30 backdrop-blur-sm rounded-full px-4 py-2 flex items-center">
          <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full mr-2">
            New in v1.0
          </span>
          <span className="text-sm">Real-time collaboration, dark mode, and more!</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 flex justify-center items-center relative overflow-hidden">
        {/* Background light effects */}
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-orange-400/20 rounded-full blur-3xl opacity-50 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container px-4 md:px-6 flex flex-col items-center text-center relative z-10">
          {/* App Icon */}
          <div className="mb-8">
            <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-purple-400 via-purple-600 to-purple-800 p-0.5 shadow-xl">
              <div className="h-full w-full rounded-2xl bg-black flex items-center justify-center">
                <span className="font-bold text-white text-3xl">Ch</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
              Notes Like{" "}
              <span className="animate-gradient bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent">
                Paper
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-muted-foreground md:text-2xl">
              A minimalist markdown note-taking app that feels as natural as writing on paper.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-12 w-full sm:w-auto">
            <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-purple-700">
              <Link href="#download" id="download">
                <Download className="mr-2 h-4 w-4" /> Download for macOS
              </Link>
            </Button>
            <div className="relative flex items-center w-full sm:w-auto">
              <div className="bg-secondary/50 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center w-full">
                <Terminal className="h-4 w-4 mr-2 text-muted-foreground" />
                <code className="text-sm text-muted-foreground">brew install --cask chlorite</code>
              </div>
              <Button variant="ghost" size="icon" className="absolute right-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
                <span className="sr-only">Copy</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container px-4 md:px-6 flex flex-col items-center">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Everything you need for seamless note-taking.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 flex flex-col items-center">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">See Chlorite in Action</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Clean, minimal, and focused on your content.
            </p>
          </div>
          <Carousel className="w-full max-w-5xl">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden border-0 shadow-lg">
                      <CardContent className="flex aspect-video items-center justify-center p-0">
                        <img
                          src={`/placeholder.svg?height=400&width=600&text=Chlorite+UI+${index + 1}`}
                          alt={`Chlorite UI Screenshot ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4 md:mt-0">
              <CarouselPrevious className="static md:absolute translate-y-0 left-2 mr-2" />
              <CarouselNext className="static md:absolute translate-y-0 right-2" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 flex flex-col items-center">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Simple, transparent pricing for everyone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="flex flex-col p-6 bg-card rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold mb-2">Free</h3>
              <div className="text-4xl font-bold mb-2">$0</div>
              <p className="text-muted-foreground mb-4">Perfect for getting started</p>
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-2 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Up to 50 notes</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-2 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Basic markdown support</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-2 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Web access</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Get Started
              </Button>
            </div>

            {/* Pro Plan */}
            <div className="flex flex-col p-6 bg-card rounded-lg shadow-sm border border-primary relative">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold rounded-bl-lg rounded-tr-lg">
                Popular
              </div>
              <h3 className="text-xl font-bold mb-2">Pro</h3>
              <div className="text-4xl font-bold mb-2">$9.99</div>
              <p className="text-muted-foreground mb-4">Per month, billed annually</p>
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-2 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Unlimited notes</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-2 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Advanced markdown features</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-2 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Cloud sync across all devices</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-2 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Desktop apps</span>
                </li>
              </ul>
              <Button className="w-full">Subscribe Now</Button>
            </div>

            {/* Team Plan */}
            <div className="flex flex-col p-6 bg-card rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold mb-2">Team</h3>
              <div className="text-4xl font-bold mb-2">$19.99</div>
              <p className="text-muted-foreground mb-4">Per user/month, billed annually</p>
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-2 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-2 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Team collaboration</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-2 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Shared workspaces</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-2 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Admin controls</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-2 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Priority support</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to get started?</h2>
          <p className="mx-auto max-w-[700px] mt-4 mb-8 md:text-xl">
            Join thousands of users who have already transformed their note-taking experience.
          </p>
          <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
            <Link href="#features">Try Chlorite Today</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
