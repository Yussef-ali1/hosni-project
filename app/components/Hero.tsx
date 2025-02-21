import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative bg-green-600 text-white py-20">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <video 
          className="object-cover w-full h-full opacity-40"
          autoPlay 
          muted 
          loop
          poster="/images/sustainability-poster.jpg"
        >
          <source src="YOUR_VIDEO_URL_HERE" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Your Gateway to a Sustainable Tomorrow</h1>
        <p className="text-xl md:text-2xl mb-8">Smart Solutions | Green Living | Energy Savings</p>
        <div className="flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0">
          <Link
            href="/shop"
            className="bg-white text-green-600 px-6 py-3 rounded-md font-semibold hover:bg-green-100 transition-colors"
          >
            Shop Eco Products
          </Link>
          <Link
            href="/calculator"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-green-600 transition-colors"
          >
            Calculate Your Carbon Footprint
          </Link>
          <Link
            href="/green-community"
            className="bg-green-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-800 transition-colors"
          >
            Join Our Green Community
          </Link>
        </div>
      </div>
    </div>
  )
}