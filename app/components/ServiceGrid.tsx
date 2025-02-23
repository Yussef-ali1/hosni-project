import Link from "next/link"

const services = [
  {
    id: 1,
    name: "Green Fixing & Maintenance",
    icon: "🔧", // Wrench icon
    description: "Expert maintenance for your sustainable products",
  },
  {
    id: 2,
    name: "Sustainable Delivery",
    icon: "🚚", // Truck icon
    description: "Eco-friendly delivery for all your purchases",
  },
  {
    id: 3,
    name: "Recycling & Compost",
    icon: "♻️", // Recycle icon
    description: "Efficient recycling and composting solutions",
  },
  {
    id: 4,
    name: "Certified Training",
    icon: "🎓", // GraduationCap icon
    description: "Learn about sustainability and energy-saving",
  },
]

export default function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((service) => (
        <div key={service.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
          <span className="text-4xl mb-4">{service.icon}</span>
          <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
          <Link
            href={`/services/${service.id}`}
            className="text-green-600 font-semibold hover:text-green-700 transition-colors"
          >
            Learn More →
          </Link>
        </div>
      ))}
    </div>
  )
}
