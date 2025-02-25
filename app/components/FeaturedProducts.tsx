import { Leaf, Calculator, Gift, Users, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function WhyChooseSustainabilityGate() {
  const benefits = [
    {
      id: 1,
      image: "/pic1.png",
      icon: <Leaf className="h-12 w-12 text-green-600 mb-4" />,
      title: "Eco-Friendly Products",
      description: "Smart energy-saving and green living solutions for every home and lifestyle.",
      linkUrl: "/products",
      linkText: "Browse Products"
    },
    {
      id: 2,
      image: "/pic2.png",
      icon: <Calculator className="h-12 w-12 text-green-600 mb-4" />,
      title: "Carbon Footprint Calculator",
      description: "Track & reduce your environmental impact with our easy-to-use tools.",
      linkUrl: "/calculator",
      linkText: "Calculate Now"
    },
    {
      id: 3,
      image: "/pic3.png",
      icon: <Gift className="h-12 w-12 text-green-600 mb-4" />,
      title: "Loyalty Rewards & Discounts",
      description: "Earn points for making sustainable choices and save on future purchases.",
      linkUrl: "/services/{service.id}",
      linkText: "Join Program"
    },
    {
      id: 4,
      image: "/pic4.jpg",
      icon: <Users className="h-12 w-12 text-green-600 mb-4" />,
      title: "Certified Training & Community",
      description: "Learn, contribute, and grow with our workshops and community initiatives.",
      linkUrl: "/green-community",
      linkText: "Get Involved"
    },
    {
      id: 5,
      image: "/pic5.jpg",
      icon: <Globe className="h-12 w-12 text-green-600 mb-4" />,
      title: "Global Sustainability Impact",
      description: "Explore initiatives that promote sustainability worldwide and make an impact.",
      linkUrl: "/global-impact",
      linkText: "Learn More"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
          <span className="text-green-600">🌱</span> Why Choose Sustainability Gate?
        </h2>
                
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Join thousands of environmentally conscious individuals making a difference every day.
        </p>
        
        {/* Featured Video - Now as a main visible element */}
        <div className="w-full mb-12 rounded-lg overflow-hidden shadow-xl" style={{ height: "500px" }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/sg-vid2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow flex flex-col h-full"
            >
              <Image
                src={benefit.image}
                alt={benefit.title}
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <div className="flex justify-center items-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                ✅ <span className="font-bold">{benefit.title}</span>
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                {benefit.description}
              </p>
              <Link
                href={benefit.linkUrl}
                className="mt-auto inline-block bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors text-sm font-medium"
              >
                {benefit.linkText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}