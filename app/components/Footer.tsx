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
            <p className="text-sm">Email: m.fadly@sustainabilitygate.com</p>
            <p className="text-sm">Phone: +971 (50) 247-3421</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="w-5 h-5" />, name: "Facebook", href: "https://www.facebook.com/profile.php?id=61572956647191" },
                // { icon: <Twitter className="w-5 h-5" />, name: "Twitter", href: "#" },
                // { icon: <Instagram className="w-5 h-5" />, name: "Instagram", href: "#" },
                { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", href: "https://www.linkedin.com/posts/sustainability-gate_sustainability-gate-linkedin-activity-7295383585652457472-AUot?utm_source=share&utm_medium=member_desktop" }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  className="bg-green-800 hover:bg-green-600 rounded-full p-2 transition-colors" 
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-green-700 text-center text-sm">
          © 2025 Sustainability Gate. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

