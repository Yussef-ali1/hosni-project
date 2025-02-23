// 'use client';

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Leaf, Award, Users, Clock, PhoneCall, Calendar, 
//   Shield, Globe, TrendingUp, CheckCircle, Star
// } from 'lucide-react';

// export default function ServicesPage() {
//   const [activeTab, setActiveTab] = useState('residential');

//   const services = {
//     residential: [
//       { title: "Smart Home Integration", description: "Automated energy management systems" },
//       { title: "Solar Panel Installation", description: "Custom solar solutions for homes" },
//       { title: "Water Conservation", description: "Smart water management systems" }
//     ],
//     commercial: [
//       { title: "Energy Auditing", description: "Professional energy consumption analysis" },
//       { title: "Waste Management", description: "Sustainable waste disposal solutions" },
//       { title: "Green Building", description: "Eco-friendly construction consulting" }
//     ]
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">
//       {/* Hero Section */}
//       <section className="relative h-[600px] overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-600/90">
//           <img 
//             src="/hero-bg.jpg" 
//             alt="Sustainability"
//             className="w-full h-full object-cover mix-blend-overlay"
//           />
//         </div>
//         <div className="relative container mx-auto px-4 h-full flex items-center">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="max-w-3xl"
//           >
//             <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
//               Sustainable Solutions for a Better Tomorrow
//             </h1>
//             <p className="text-xl text-green-50 mb-8">
//               Leading the way in environmental innovation with comprehensive sustainable services
//             </p>
//             <div className="flex gap-4">
//               <button className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-colors">
//                 Get Started
//               </button>
//               <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">
//                 Learn More
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Stats Grid */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               { icon: Users, value: "5000+", label: "Clients Served" },
//               { icon: Globe, value: "150+", label: "Projects Completed" },
//               { icon: TrendingUp, value: "98%", label: "Success Rate" },
//               { icon: Award, value: "25+", label: "Industry Awards" }
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="text-center p-8 rounded-2xl bg-green-50"
//               >
//                 <stat.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
//                 <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
// <section className="py-20">
//         <div className="container mx-auto px-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div>
//                     <h2 className="text-4xl font-bold text-green-800 mb-8">Our Mission</h2>
//                     <p className="text-xl text-gray-600">
//                         At Green Solutions, we are committed to providing sustainable solutions that 
//                         help our clients reduce their carbon footprint and make a positive impact on the environment.
//                     </p>
//                     <p className="text-xl text-gray-600">
//                         Our team of experts is dedicated to delivering innovative and cost-effective 
//                         services that promote energy efficiency, waste reduction, and environmental conservation.
//                     </p>
//                 </div>
//                 <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
//                     <img src="/mission.jpg" alt="Mission" className="w-full h-full object-cover" />
//                     <div className="absolute inset-0 bg-gradient-to-t from-green-50 to-transparent"></div>
//                 </div>
//             </div>
//         </div>


// </section>
//       {/* Services Tabs */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-center mb-12">
//             {['residential', 'commercial'].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-8 py-3 text-lg font-medium rounded-full mx-2 transition-colors ${
//                   activeTab === tab 
//                     ? 'bg-green-600 text-white' 
//                     : 'bg-white text-gray-600 hover:bg-green-50'
//                 }`}
//               >
//                 {tab.charAt(0).toUpperCase() + tab.slice(1)}
//               </button>
//             ))}
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {services[activeTab].map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
//               >
//                 <CheckCircle className="w-12 h-12 text-green-600 mb-6" />
//                 <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
//                 <p className="text-gray-600">{service.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 bg-green-900 text-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[1, 2, 3].map((_, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-green-800 p-8 rounded-2xl"
//               >
//                 <div className="flex mb-4">
//                   {[1, 2, 3, 4, 5].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                   ))}
//                 </div>
//                 <p className="mb-6">
//                   "Outstanding service and remarkable results. The team's dedication to sustainability is truly impressive."
//                 </p>
//                 <div className="font-semibold">John Doe</div>
//                 <div className="text-green-300">CEO, Green Solutions</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-center text-white">
//             <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
//             <p className="text-xl mb-8 max-w-2xl mx-auto">
//               Join thousands of satisfied clients who have embraced sustainable solutions
//             </p>
//             <div className="flex justify-center gap-4">
//               <button className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-50">
//                 Get Started Now
//               </button>
//               <button className="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white/10">
//                 Contact Sales
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
'use client';

import { motion } from 'framer-motion';
import { Clock, Share2, BookmarkPlus, ThumbsUp, MessageCircle, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  const relatedArticles = [
    {
      id: 1,
      title: "Smart Cities and Sustainable Infrastructure",
      excerpt: "How modern urban planning is incorporating green technologies",
      image: "/blog/smart-cities.jpg",
      date: "Feb 15, 2024",
      readTime: "6 min"
    },
    {
      id: 2,
      title: "The Rise of Green Transportation",
      excerpt: "Electric vehicles and the future of sustainable mobility",
      image: "/blog/green-transport.jpg",
      date: "Feb 12, 2024",
      readTime: "5 min"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-600/90">
          <img 
            src="/blog-hero.jpg" 
            alt="Sustainability Blog"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Sustainable Living Blog
            </h1>
            <p className="text-xl text-green-50">
              Insights and innovations for a greener tomorrow
            </p>
          </div>
        </div>
      </section>

      {/* Main Article */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-16"
          >
            <header className="mb-12">
              <div className="flex items-center gap-4 text-green-600 mb-6">
                <span className="px-4 py-1 bg-green-100 rounded-full text-sm">
                  Featured
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Feb 18, 2024
                </span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Revolutionizing Energy: The Future of Sustainable Power
              </h2>

              <div className="flex items-center gap-6 mb-8">
                <img src="/author.jpg" alt="Author" className="w-12 h-12 rounded-full" />
                <div>
                  <div className="font-medium text-gray-900">Dr. James Wilson</div>
                  <div className="text-gray-600">Energy Innovation Expert</div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  8 min read
                </div>
              </div>

              <img 
                src="/sustainable-energy-main.jpg" 
                alt="Sustainable Energy"
                className="w-full h-[500px] object-cover rounded-xl"
              />
            </header>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="lead text-xl text-gray-600">
                The transition to sustainable energy is reshaping our world, offering unprecedented opportunities for innovation and environmental preservation.
              </p>

              <h3>The Evolution of Green Energy</h3>
              <p>
                Recent technological breakthroughs have dramatically transformed the renewable energy landscape. Solar efficiency has increased while costs have plummeted, making clean energy more accessible than ever.
              </p>

              <div className="bg-green-50 p-6 rounded-xl my-8">
                <h4 className="text-green-800 font-semibold mb-4">Key Innovations:</h4>
                <ul>
                  <li>Advanced solar cell technology</li>
                  <li>Smart grid integration</li>
                  <li>Energy storage solutions</li>
                  <li>Microgeneration systems</li>
                </ul>
              </div>

              {/* Continue with more article content */}
            </div>

            <footer className="border-t pt-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-green-600">
                    <ThumbsUp className="w-5 h-5" />
                    1.2K
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-green-600">
                    <MessageCircle className="w-5 h-5" />
                    86 Comments
                  </button>
                </div>
                <div className="flex gap-4">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <BookmarkPlus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </footer>
          </motion.article>

          {/* Related Articles */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedArticles.map((article) => (
                <Link href={`/blog/${article.id}`} key={article.id}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                  >
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="text-xl font-semibold mb-2">{article.title}</h4>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {article.date}
                        <Clock className="w-4 h-4 mx-2" />
                        {article.readTime}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
