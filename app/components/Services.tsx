import Link from "next/link"

const offerings = [
  {
    id: 1,
    name: "Smart Energy Solutions",
    icon: "💡", // Lightbulb emoji
    description: "LED lighting, solar panels, energy-efficient appliances",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
     id: 2,
     name: "Recycling & Composting",
     icon: "♻", // Recycle emoji
    description: "Home & business waste management solutions",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
     id: 3,
     name: "Green Delivery & Fixing Services",
     icon: "🚚", // Truck emoji
    description: "Certified eco-friendly repairs & logistics",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200"
  },
  {
    id: 4,
    name: "Training & Awareness",
    icon: "🎓", // GraduationCap emoji
    description: "Sustainability courses and certification programs",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  },
]

export default function ExploreOfferings() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-800">
          Explore Our Offerings
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Discover sustainable solutions for every aspect of modern living
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((offering) => (
            <div
               key={offering.id}
               className={`rounded-lg shadow-md p-6 hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer border ${offering.borderColor} ${offering.bgColor} flex flex-col h-full`}
            >
              <div className="flex justify-center mb-4">
                <span className="text-5xl">{offering.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{offering.name}</h3>
              <p className="text-gray-600 mb-auto text-center">{offering.description}</p>
              <div className="text-center mt-6">
                <Link
                  href={`/offerings/${offering.id}`}
                  className="inline-flex items-center text-white bg-green-600 hover:bg-green-700 py-2 px-4 rounded-md font-semibold transition-colors"
                >
                  Explore Options
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
             href="/training"
             className="inline-block bg-green-600 text-white py-3 px-8 rounded-md font-semibold hover:bg-green-700 transition-colors"
          >
            Discover More
          </Link>
        </div>
      </div>
    </div>
  )
}