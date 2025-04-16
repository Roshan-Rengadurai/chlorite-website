import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chlorite - Notes Like Paper",
  description: "A minimalist markdown note-taking app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
        <Toaster theme="dark"/>
      </body>
    </html>
  )
}