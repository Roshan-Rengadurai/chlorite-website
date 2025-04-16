import Link from "next/link"
import { Github, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full py-12 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-black dark:text-white">Chlorite</h3>
            <p className="text-sm text-muted-foreground">
              A minimalist markdown note-taking app that feels as natural as writing on paper.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-black dark:text-white">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-primary">
                  [Coming Soon]
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary">
                  [Coming Maybe]
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                  [Coming Never]
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                  [Coming Eventually]
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-black dark:text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-black dark:text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:hello@chlorite.me" className="text-sm text-muted-foreground hover:text-primary">
                  hello@chlorite.me
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-primary">
                  +1 (678) 815-7951
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  123 IDK Street
                  <br />
                  Markdown City, OH 179931
                  <br />
                  United States
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Serenity Technologies. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0 justify-center md:justify-end">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
