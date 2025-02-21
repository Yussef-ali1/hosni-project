'use client';

import { motion } from 'framer-motion';
import ServiceGrid from "../components/ServiceGrid";
import { useState } from 'react';
import { FaSearch, FaFilter, FaLeaf } from 'react-icons/fa';
import ServiceFilter from '../components/ServiceFilter';
import ServiceSearch from '../components/ServiceSearch';

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Our Sustainable Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of eco-friendly solutions designed to help
            you make a positive impact on the environment while saving costs.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <ServiceSearch 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            
            {/* Filter Options */}
            <ServiceFilter
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </div>
        </div>

        {/* Services Grid */}
        <ServiceGrid searchQuery={searchQuery} activeFilter={activeFilter} />

        {/* Features Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Why Choose Our Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <span className="p-2 bg-green-100 rounded-lg mr-4">
                    <FaLeaf className="text-green-600 text-xl" />
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center bg-green-800 text-white py-12 px-4 rounded-2xl"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="mb-8 text-lg">
            Join thousands of satisfied customers who are making sustainable choices.
          </p>
          <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Eco-Friendly Solutions",
    description: "All our services are designed with sustainability in mind, helping reduce environmental impact."
  },
  {
    title: "Cost-Effective",
    description: "Save money while saving the planet with our energy-efficient solutions and competitive pricing."
  },
  {
    title: "Expert Support",
    description: "Our team of certified professionals ensures the highest quality service delivery."
  }
];

