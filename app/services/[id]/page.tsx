'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaLeaf, FaCoins, FaRecycle, FaShoppingBag } from 'react-icons/fa';

const SustainabilityService = () => {
  const [points, setPoints] = useState(0);

  const sustainableActions = [
    {
      id: 1,
      title: 'Recycle Products',
      points: 50,
      icon: <FaRecycle size="1.875rem" color="#22c55e" />,
      description: 'Earn points by recycling eligible products'
    },
    {
      id: 2,
      title: 'Eco-friendly Purchase',
      points: 100,
      icon: <span className="text-3xl text-green-500"><FaShoppingBag /></span>,
      description: 'Get rewards for buying sustainable products'
    },
    {
      id: 3,
      title: 'Bring Your Own Bag',
      points: 25,
      icon: <span className="text-3xl text-green-500"><FaLeaf /></span>,
      description: 'Extra points for using reusable  bags'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Earn & Save with Sustainable Choices
          </h1>
          <p className="text-xl text-gray-600">
            Make eco-friendly decisions and earn rewards for your conscious choices
          </p>
        </motion.div>

        <div className="mt-8">
          <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-800">Your Points</h2>
              <div className="flex items-center">
                <span className="text-yellow-500 mr-2">
                  <FaCoins />
                </span>
                <span className="text-3xl font-bold text-gray-900">{points}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sustainableActions.map((action) => (
              <motion.div
                key={action.id}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center justify-center mb-4">
                  {action.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  {action.title}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {action.description}
                </p>
                <div className="text-center">
                  <span className="text-green-500 font-semibold">
                    +{action.points} points
                  </span>
                </div>
                <button
                  onClick={() => setPoints(points + action.points)}
                  className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-200"
                >
                  Complete Action
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-green-100 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              How to Redeem Points
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <FaLeaf style={{ color: '#22c55e', marginRight: '0.5rem' }} />
                Use points for discounts on your next purchase
              </li>
              <li className="flex items-center">
                <FaLeaf style={{ color: '#22c55e', marginRight: '0.5rem' }} />
                Unlock exclusive eco-friendly products
              </li>
              <li className="flex items-center">
                <FaLeaf className="text-green-500 mr-2" />
                Get special offers on sustainable items
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityService;