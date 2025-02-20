export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-teal-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <h1 className="text-5xl font-bold text-green-800 mb-6">About Sustainability Gate</h1>
          <p className="text-xl text-green-600 max-w-3xl mx-auto">
            Pioneering sustainable solutions for a greener tomorrow
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative mb-20">
          <div className="absolute inset-0 bg-green-100 rounded-xl transform rotate-1"></div>
          <div className="relative bg-white rounded-xl shadow-xl p-10 border-l-4 border-green-500">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-green-700 mb-6">Our Vision & Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Sustainability Gate is your one-stop platform for sustainable living and energy-saving solutions. 
                Our mission is to make it easy for individuals and businesses to adopt eco-friendly practices and 
                reduce their carbon footprint.
              </p>
              
              <h2 className="text-3xl font-bold text-green-700 mb-6">Sustainable Solutions</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                We offer a wide range of sustainable products, from energy-efficient appliances to eco-friendly 
                home goods. Our services include green maintenance, sustainable delivery, and recycling programs 
                to help you live a more sustainable lifestyle.
              </p>
              
              <h2 className="text-3xl font-bold text-green-700 mb-6">Community Empowerment</h2>
              <p className="text-gray-700 leading-relaxed">
                Through our certified training programs, we educate and empower people to become sustainability 
                champions in their communities. Join us in our mission to create a greener, more sustainable 
                future for all.
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-10">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center transform transition-transform duration-300 hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-100">
                <span className="text-green-600 text-2xl">🌱</span>
              </div>
              <div className="text-green-600 font-bold text-3xl mb-2">100+</div>
              <div className="text-gray-600 font-medium">Sustainable Products</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center transform transition-transform duration-300 hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-100">
                <span className="text-green-600 text-2xl">🌳</span>
              </div>
              <div className="text-green-600 font-bold text-3xl mb-2">500+</div>
              <div className="text-gray-600 font-medium">Trees Planted</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center transform transition-transform duration-300 hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-100">
                <span className="text-green-600 text-2xl">♻️</span>
              </div>
              <div className="text-green-600 font-bold text-3xl mb-2">5000+</div>
              <div className="text-gray-600 font-medium">Carbon Tons Offset</div>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center bg-green-50 rounded-xl p-10 shadow-md">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Join Our Sustainability Movement</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Be part of the change you want to see in the world. Together, we can make a difference.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  )
}