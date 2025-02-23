import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Sustainability Gate is your one-stop platform for sustainable living and energy-saving solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/training">Training</Link>
              </li>
              <li>
                <Link href="/calculator">Energy Calculator</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">Email: info@sustainabilitygate.com</p>
            <p className="text-sm">Phone: +1 (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300">
                <Facebook />
              </a>
              <a href="#" className="hover:text-green-300">
                <Twitter />
              </a>
              <a href="#" className="hover:text-green-300">
                <Instagram />
              </a>
              <a href="#" className="hover:text-green-300">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-green-700 text-center text-sm">
          © 2023 Sustainability Gate. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

