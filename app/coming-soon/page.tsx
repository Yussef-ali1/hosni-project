'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ComingSoon() {
  const upcomingFeatures = [
    {
      title: "Sustainable Marketplace",
      description: "A revolutionary platform connecting eco-conscious consumers with verified green suppliers",
      image: "/car1.jpg",
      launchDate: "Summer 2025"
    },
    {
      title: "Carbon Footprint Tracker",
      description: "Advanced analytics to monitor and optimize your environmental impact",
      image: "/car2.jpg",
      launchDate: "Fall 2025"
    },
    {
      title: "Community Hub",
      description: "Connect with like-minded individuals and share sustainable initiatives",
      image: "/car3.jpg",
      launchDate: "Winter 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Coming Soon
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            We're crafting something extraordinary. Get ready for these amazing features.
          </p>
        </motion.div>

        <div className="space-y-32">
          {upcomingFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
            >
              <div className="flex-1 w-full"> {/* Added w-full */}
                <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>

              <div className="flex-1 space-y-6">
                {/* <span className="text-sm font-semibold text-green-600 tracking-wider">
                  LAUNCHING {feature.launchDate}
                </span> */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  {feature.title}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                {/* <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  Get Notified
                </button> */}
              </div>
            </motion.div>
          ))}
        </div>
{/* 
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-32"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Want to be the first to know?
          </h3>
          <div className="max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-green-500 mb-4"
            />
            <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              Join Waitlist
            </button>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}
