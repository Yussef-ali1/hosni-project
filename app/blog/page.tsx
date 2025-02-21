'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, Tag, Share2, BookmarkPlus } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Sustainable Energy",
    excerpt: "Exploring innovative solutions for renewable energy and their impact on our environment.",
    category: "Energy",
    author: "John Smith",
    date: "2024-02-15",
    readTime: "5 min",
    image: "/blog/sustainable-energy.jpg",
    tags: ["Sustainability", "Energy", "Innovation"],
    featured: true
  },
  {
    id: 2,
    title: "Smart Home Automation for Energy Efficiency",
    excerpt: "Learn how smart home technology can reduce your carbon footprint and save money.",
    category: "Smart Home",
    author: "Emma Wilson",
    date: "2024-02-14",
    readTime: "4 min",
    image: "/blog/smart-home.jpg",
    tags: ["Smart Home", "Energy Efficiency"],
    featured: false
  },
  {
    id: 3,
    title: "The Importance of Recycling in a Circular Economy",
    excerpt: "Discover the benefits of recycling and its role in creating a sustainable future.",
    category: "Recycling",
    author: "Michael Johnson",
    date: "2024-02-13",
    readTime: "6 min",
    image: "/blog/recycling.jpg",
    tags: ["Recycling", "Sustainability"],
    featured: true

  },
  {
    id: 4,
    title: "10 Tips for Green Living",
    excerpt: "Simple and effective ways to live a more eco-friendly lifestyle and reduce waste.",
    category: "Green Living",
    author: "Sarah Adams",
    date: "2024-02-12",
    readTime: "3 min",
    image: "/blog/green-living.jpg",
    tags: ["Green Living", "Eco-Friendly"],
    featured: true,

  },
  {
    id: 5,
    title: "The Rise of Electric Vehicles",
    excerpt: "Exploring the growth of electric vehicles and their role in reducing emissions.",
    category: "Energy",
    author: "David Lee",  
    date: "2024-02-11",
    readTime: "7 min",
    image: "/blog/electric-vehicles.jpg",
    tags: ["Electric Vehicles", "Sustainability"],
    featured: true
  },
  {
    id: 6,
    title: "Eco-Friendly Home Design Ideas",
    excerpt: "Tips and inspiration for creating a sustainable and environmentally friendly home.",
    category: "Smart Home",
    author: "Emily Davis",
    date: "2024-02-10",
    readTime: "4 min",
    image: "/blog/eco-friendly-home.jpg",
    tags: ["Home Design", "Sustainability"],
    featured: true
  
  }

];

const categories = ["All", "Energy", "Smart Home", "Recycling", "Green Living"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Sustainability Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover insights, tips, and the latest trends in sustainable living and green technology
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-green-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {filteredPosts.find(post => post.featured) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-12"
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img
                src={filteredPosts.find(post => post.featured)?.image}
                alt="Featured post"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
                <span className="text-green-400 font-semibold mb-2 block">Featured</span>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {filteredPosts.find(post => post.featured)?.title}
                </h2>
                <p className="text-gray-200 mb-4">
                  {filteredPosts.find(post => post.featured)?.excerpt}
                </p>
                <Link
                  href={`/blog/${filteredPosts.find(post => post.featured)?.id}`}
                  className="inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter(post => !post.featured).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                  <BookmarkPlus className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-green-600 font-semibold hover:text-green-700"
                  >
                    Read More →
                  </Link>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-green-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="mb-6">Subscribe to our newsletter for the latest sustainability insights</p>
          <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button
              type="submit"
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
