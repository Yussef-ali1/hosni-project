export default function Navigation() {
  return (
    <nav className="bg-green-800 text-white p-4">
      <ul className="container mx-auto flex justify-center space-x-6">
        <li>
          <a href="#" className="hover:text-green-300 transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-300 transition-colors">
            Products
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-300 transition-colors">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-300 transition-colors">
            Training
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-300 transition-colors">
            Calculator
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-300 transition-colors">
            About Us
          </a>
        </li>
      </ul>
    </nav>
  )
}

