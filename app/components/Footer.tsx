import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-700 to-green-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-green-600 pb-2">About Us</h3>
            <p className="text-green-100 mb-6 leading-relaxed">
              Sustainability Gate is your one-stop platform for sustainable living and energy-saving solutions.
              We're dedicated to making eco-friendly choices accessible to everyone.
            </p>
            <div className="flex items-center space-x-3 mt-4">
              <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
              <span className="text-green-300 text-sm">Carbon Neutral Company</span>
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-green-600 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Products", href: "/products" },
                { name: "Services", href: "/services" },
                { name: "Training", href: "/training" },
                { name: "Energy Calculator", href: "/calculator" },
                { name: "Blog", href: "/blog" },
                { name: "FAQ", href: "/faq" }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="flex items-center group text-green-100 hover:text-white transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-green-600 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-green-300 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-green-100 mb-1">Email:</p>
                  <a href="mailto:info@sustainabilitygate.com" className="hover:text-green-300 transition-colors">
                    info@sustainabilitygate.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-green-300 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-green-100 mb-1">Phone:</p>
                  <a href="tel:+15551234567" className="hover:text-green-300 transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-green-300 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-green-100 mb-1">Address:</p>
                  <address className="not-italic">
                    1234 Green Street<br />
                    Eco City, EC 12345
                  </address>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Newsletter & Social Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-green-600 pb-2">Stay Connected</h3>
            <div className="mb-6">
              <p className="text-green-100 mb-3">Subscribe to our newsletter</p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-green-800 border border-green-600 rounded-l-md px-4 py-2 flex-grow text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent" 
                />
                <button 
                  type="submit" 
                  className="bg-green-500 hover:bg-green-400 rounded-r-md px-4 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
            
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="w-5 h-5" />, name: "Facebook", href: "https://www.facebook.com/profile.php?id=61572956647191" },
                { icon: <Twitter className="w-5 h-5" />, name: "Twitter", href: "#" },
                { icon: <Instagram className="w-5 h-5" />, name: "Instagram", href: "#" },
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
        
        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-green-600 flex flex-col md:flex-row justify-between items-center text-sm text-green-200">
          <div>
            © {new Date().getFullYear()} Sustainability Gate. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap space-x-6">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Eco Certification Badge */}
        <div className="mt-8 text-center">
          <span className="inline-block bg-green-800 rounded-full px-4 py-1 text-xs text-green-300 border border-green-600">
            Certified Climate Neutral Business | ISO 14001
          </span>
        </div>
      </div>
    </footer>
  )
}