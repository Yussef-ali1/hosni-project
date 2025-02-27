import { Wrench, Truck, Recycle, GraduationCap, Users, Leaf, Building2 } from "lucide-react";
import Link from "next/link";

interface Service {
  id: number;
  name: string;
  icon: any; // We'll improve this typing below
  description: string;
  category: string;
}

// Create a consistent interface for icon handling
type IconType = React.ComponentType<any> | string;

// Updated services with proper icon handling
const services: Service[] = [
  {
    id: 1,
    name: "Green Fixing & Maintenance",
    icon: Wrench, // Using the imported Wrench component
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
    icon: GraduationCap, // Using the imported GraduationCap component
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
];

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

  // Render the IconComponent correctly
  const renderIcon = (icon: IconType) => {
    if (typeof icon === 'string') {
      // For string icons (emojis), render as text
      return <span className="text-2xl">{icon}</span>;
    } else {
      // For component icons (Lucide icons), render the component
      const IconComponent = icon;
      return <IconComponent className="w-6 h-6" />;
    }
  };

  if (filteredServices.length === 0) {
    return (
      <div className="py-8 text-center text-gray-500">
        No services found matching your criteria.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {filteredServices.map((service) => (
        <div key={service.id} className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-green-100 rounded-full mr-3">
              {renderIcon(service.icon)}
            </div>
            <h3 className="text-lg font-semibold">{service.name}</h3>
          </div>
          <p className="text-gray-600 mb-4">{service.description}</p>
          <div className="flex justify-between items-center">
            <Link href={`/services/${service.id}`} className="text-green-600 hover:text-green-800 flex items-center">
              Learn More <span className="ml-1">→</span>
            </Link>
            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{service.category}</span>
          </div>
        </div>
      ))}
    </div>
  );
}