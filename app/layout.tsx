import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Providers } from './components/Providers';

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sustainability Gate",
  description: "Your gateway to sustainable living and energy-saving solutions",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
        <head>
                <link rel="shortcut icon" href="/SustainabilityGate.png" />
              </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
      
        <Providers>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

