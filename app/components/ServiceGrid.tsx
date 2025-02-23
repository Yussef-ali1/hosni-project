import { Wrench, Truck, Recycle, GraduationCap, Users, Leaf, Building2 } from "lucide-react"
import Link from "next/link"

interface Service {
  id: number;
  name: string;
  icon: any; // ideally should be more specific
  description: string;
  category: string;
}

const services: Service[] = [
  {
    id: 1,
    name: "Green Fixing & Maintenance",
    icon: "🔧", // Wrench icon
    description: "Expert maintenance for your sustainable products",
    category: "industrial"
  },
  {
    id: 2,
    name: "Sustainable Delivery",
    icon: Truck,
    description: "Eco-friendly delivery for all your purchases",
    category: "commercial"
  },
  {
    id: 3,
    name: "Recycling & Compost",
    icon: Recycle,
    description: "Efficient recycling and composting solutions",
    category: "recycling"
  },
  {
    id: 4,
    name: "Certified Training",
    icon: "🎓", // GraduationCap icon
    description: "Learn about sustainability and energy-saving",
    category: "residential"
  },
  {
    id: 5,
    name: "Energy Efficiency",
    icon: Wrench,
    description: "Optimize energy usage for your home or business",
    category: "energy"
  },
  {
    id: 6,
    name: "Green Building",
    icon: Building2,
    description: "Design and build sustainable structures",
    category: "building"
  },
  {
    id: 7,
    name: "Eco-Friendly Products",
    icon: Leaf,
    description: "Discover eco-friendly products for your home and lifestyle",
    category: "products"
  },
  {
    id: 8,
    name: "Community Engagement",
    icon: Users,
    description: "Join our community and make a difference together",
    category: "community"
  }

]

interface ServiceGridProps {
  searchQuery: string;
  activeFilter: string;
}

export default function ServiceGrid({ searchQuery, activeFilter }: ServiceGridProps) {
  // Filter services based on search query and active filter
  const filteredServices = services.filter((service) => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'all' || service.category === activeFilter;
    
    return matchesSearch && matchesFilter;
  });

  if (filteredServices.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No services found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {filteredServices.map((service) => (
        <div 
          key={service.id} 
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <service.icon className="h-12 w-12 text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
          <div className="flex justify-between items-center">
            <Link
              href={`/services/${service.id}`}
              className="text-green-600 font-semibold hover:text-green-700 transition-colors inline-flex items-center gap-2"
            >
              Learn More 
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <span className="text-sm text-gray-500 capitalize">{service.category}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
