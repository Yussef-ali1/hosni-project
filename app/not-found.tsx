'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, ArrowLeft, Leaf } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="mb-8">
            <Leaf className="w-20 h-20 text-green-600 mx-auto mb-4" />
            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-600 mb-8">
              The page you're looking for seems to have wandered off into the wilderness. Let's get you back on track to a greener future.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </motion.button>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">Explore Services</h3>
              <p className="text-gray-600 text-sm">Discover our sustainable solutions</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">Read Blog</h3>
              <p className="text-gray-600 text-sm">Latest sustainability insights</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">Contact Us</h3>
              <p className="text-gray-600 text-sm">Get in touch with our team</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
