'use client';

import { motion } from 'framer-motion';
import UserDashboard from "../components/UserDashboard";
import { FaUser, FaBell, FaChartLine, FaCog } from 'react-icons/fa';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-gray-800">Your Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <FaBell className="text-gray-600 text-xl" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <FaCog className="text-gray-600 text-xl" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <FaUser className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">Profile Status</h3>
                  <p className="text-lg font-semibold">80% Complete</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <FaChartLine className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">Activity Status</h3>
                  <p className="text-lg font-semibold">Active</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <FaBell className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">Notifications</h3>
                  <p className="text-lg font-semibold">3 New</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <UserDashboard />
        </div>
      </div>
    </div>
  )
}