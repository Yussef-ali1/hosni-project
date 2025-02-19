import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sustainability Gate",
  description: "Your gateway to sustainable living and energy-saving solutions",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

