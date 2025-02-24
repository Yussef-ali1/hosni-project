export default function CTASection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-blue-600">
          Your One-Stop Destination for Sustainable Choices!
        </h2>
        
        <p className="text-xl mb-6 leading-relaxed text-blue-700">
          <span className="bg-green-100 px-2 py-1 rounded font-bold text-blue-800">ONLINE</span> and through our <span className="bg-green-100 px-2 py-1 rounded font-bold text-blue-800">MOBILE-GREEN-OUTLETS</span>, we make it <span className="bg-green-100 px-2 py-1 rounded font-bold text-blue-800">EASY</span> for <span className="bg-green-100 px-2 py-1 rounded font-bold text-blue-800">INDIVIDUALS, BUSINESSES, & COMMUNITIES</span> to integrate sustainability into <span className="bg-green-100 px-2 py-1 rounded font-bold text-blue-800">EVERYDAY PURCHASING DECISIONS:</span>
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-10 text-left">
          <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-green-200">
            <h3 className="text-xl font-bold mb-3 text-blue-700">Effortless Access to Eco-Friendly Options</h3>
            <p className="text-blue-600">Compare sustainability ratings and make informed decisions.</p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-green-200">
            <h3 className="text-xl font-bold mb-3 text-blue-700">Eco-Conscious Providers</h3>
            <p className="text-blue-600">Connect with suppliers prioritizing Energy efficiency & carbon neutrality.</p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-green-200">
            <h3 className="text-xl font-bold mb-3 text-blue-700">Sustainability Assessments</h3>
            <p className="text-blue-600">Evaluate products & Services for environmental impact.</p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-green-200">
            <h3 className="text-xl font-bold mb-3 text-blue-700">Incentivized Green Choices</h3>
            <p className="text-blue-600">Encouraging Responsible Consumption.</p>
          </div>
        </div>
      </div>
    </section>
  )
}