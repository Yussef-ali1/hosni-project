import Link from "next/link"

export default function Hero() {
  return (
    <div className="bg-green-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Sustainability Gate</h1>
        <p className="text-xl md:text-2xl mb-8">Your gateway to sustainable living and energy-saving solutions</p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/products"
            className="bg-white text-green-600 px-6 py-3 rounded-md font-semibold hover:bg-green-100 transition-colors"
          >
            Shop Products
          </Link>
          <Link
            href="/services"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-green-600 transition-colors"
          >
            Our Services
          </Link>
        </div>
      </div>
    </div>
  )
}

