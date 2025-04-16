"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { Download, Apple, Monitor, FileCode, Menu } from "lucide-react"

// Navigation items data abstraction
const navItems = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "#pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Docs", href: "/docs" },
]

// Download options data abstraction
const downloadOptions = [
  { name: "Mac", href: "https://apple.com", disabled: false, icon: <Apple className="h-4 w-4 mr-2" /> },
  { name: "Windows", href: "https://microsoft.com", disabled: false, icon: <Monitor className="h-4 w-4 mr-2" /> },
  { name: "Linux", href: "#", disabled: true, icon: <FileCode className="h-4 w-4 mr-2" /> },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-full pb-1">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
            <span className="font-bold text-white text-sm">Ch</span>
          </div>
          <span className="font-bold text-xl">Chlorite</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-foreground/80",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ModeToggle />

          {/* Desktop Download Button */}
          <div className="hidden md:block">
            <Button variant="ghost" className="flex items-center gap-1 text-sm" asChild>
              {/* dw, we'll change this to a file archive later, maybe idk */}
              <Link href="https://one.one.one.one" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4 mr-1" /> Download
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                      <span className="font-bold text-white text-sm">Ch</span>
                    </div>
                    <span className="font-bold text-xl">Chlorite</span>
                  </Link>
                </div>
                <nav className="flex flex-col space-y-4 py-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary py-2",
                        pathname === item.href ? "text-primary" : "text-foreground/60",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto border-t pt-4">
                  <p className="font-medium mb-2">Download Chlorite</p>
                  <div className="space-y-2">
                    {downloadOptions.map((option) => (
                      <Link
                        key={option.name}
                        href={option.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "flex items-center py-2 px-3 rounded-md hover:bg-secondary",
                          option.disabled ? "opacity-50 cursor-not-allowed" : "",
                        )}
                        onClick={() => !option.disabled && setIsOpen(false)}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        {option.icon}
                        {option.name} {option.disabled && "(Coming Soon)"}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
