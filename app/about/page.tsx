export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-teal-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <h1 className="text-5xl font-bold text-green-800 mb-6">Sustainability Gate Story</h1>
          <p className="text-xl text-green-600 max-w-3xl mx-auto">
            Pioneering sustainable solutions for a greener tomorrow
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative mb-20">
          <div className="absolute inset-0 bg-green-100 rounded-xl transform rotate-1"></div>
          <div className="relative bg-white rounded-xl shadow-xl p-10 border-l-4 border-green-500">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-green-700 mb-6">Our Story</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Sustainability Gate is the culmination of a vision ignited in 2008, forged through years of dedication 
                to sustainability and technological innovation. Co-founded by Mohamed Fadly, Taher Al-Sheikh, and 
                Haitham Lulu three entrepreneurs united by a passion for creating a greener future. Our platform 
                empowers eco-conscious consumers to make impactful choices.
              </p>
              
              <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 p-6 rounded-lg border-t-4 border-green-500">
                  <h3 className="font-bold text-xl text-green-700 mb-3">Mohamed Fadly</h3>
                  <p className="text-gray-700 text-sm">
                    Founded <span className="italic">Visuals</span> in 2008, introducing solar-powered green interactive 
                    segregation bins, and later <span className="italic">Ökosystems</span> in 2014, which replaced over 
                    one million bulbs with LEDs, saving 60% in energy costs.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-t-4 border-green-500">
                  <h3 className="font-bold text-xl text-green-700 mb-3">Taher Al-Sheikh</h3>
                  <p className="text-gray-700 text-sm">
                    Founder of <span className="italic">Logixpro</span>, catalyzed digital transformation and 
                    AI-driven solutions within major governmental establishments, enhancing efficiency on a grand scale.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-t-4 border-green-500">
                  <h3 className="font-bold text-xl text-green-700 mb-3">Haitham Lulu</h3>
                  <p className="text-gray-700 text-sm">
                    Pioneered energy-saving solutions through his company, introducing the KVAR energy controller 
                    to optimize electricity consumption and make sustainable energy more accessible.
                  </p>
                </div>
                

              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                In 2024, these visionary paths converged to launch Sustainability Gate—a dynamic platform designed 
                to revolutionize how we approach environmental responsibility.
              </p>
              
              <h3 className="text-2xl font-bold text-green-700 mb-4">Our Mission</h3>
              <div className="pl-6 border-l-2 border-green-300 mb-8">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700">Empower Eco-Conscious Consumers with Incentivized Green Choices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700">Provide Effortless Access to Eco-Friendly Options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700">Offer Comprehensive Sustainability Assessments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700">Foster a Network of Eco-Conscious Providers</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-gray-700 leading-relaxed font-medium">
                By cultivating a sustainable supply chain, Sustainability Gate enables families, businesses, and 
                communities to seamlessly transition toward a greener future. We believe that sustainability isn't 
                just an option—it's a way of life. Together, we're creating a ripple effect of positive 
                environmental change, making the world a better place for generations to come.
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