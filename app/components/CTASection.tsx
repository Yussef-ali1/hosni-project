export default function CTASection() {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Logo added above the content */}
        <div className="flex justify-center mb-8">
          <img 
            src="/logo.png" 
            alt="Company Logo" 
            className="h-16 sm:h-20 w-auto"
          />
        </div>
        
        <div className="text-center mb-16">
          {/* Modified h2 to display better on one line */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-blue-600 mb-8 leading-tight">
            Your One-Stop Destination for Sustainable Choices!
          </h2>
          
          <p className="text-lg sm:text-xl leading-relaxed text-blue-700 max-w-4xl mx-auto">
            Through our innovative platforms - both <span className="font-semibold text-blue-800 inline-block hover:scale-105 transition-transform">ONLINE</span> and <span className="font-semibold text-blue-800 inline-block hover:scale-105 transition-transform">MOBILE-GREEN-OUTLETS</span>, we're revolutionizing how sustainability integrates into daily life. We empower <span className="font-semibold text-blue-800 inline-block hover:scale-105 transition-transform">INDIVIDUALS, BUSINESSES, & COMMUNITIES</span> to make informed, eco-conscious decisions effortlessly.
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="flex items-center mb-4">
      <img 
        src="/SustainabilityGate.png" 
        alt="Logo Bullet" 
        className="h-8 w-auto mr-3 flex-shrink-0"
      />
      <h3 className="text-2xl font-bold text-blue-700">Transforming Everyday Choices</h3>
    </div>
    <p className="text-lg text-blue-600 leading-relaxed">
      We simplify sustainable living by providing comprehensive sustainability ratings, connecting you with eco-conscious providers, and offering detailed environmental impact assessments. Our platform makes it natural to choose green alternatives in your daily purchasing decisions.
    </p>
  </div>

  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="flex items-center mb-4">
      <img 
        src="/SustainabilityGate.png" 
        alt="Logo Bullet" 
        className="h-8 w-auto mr-3 flex-shrink-0"
      />
      <h3 className="text-2xl font-bold text-blue-700">Creating Lasting Impact</h3>
    </div>
    <p className="text-lg text-blue-600 leading-relaxed">
      By incentivizing green choices and fostering connections between conscious consumers and sustainable providers, we're building a community dedicated to environmental stewardship. Every decision counts, and we make each one count towards a better future.
    </p>
  </div>

  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="flex items-center mb-4">
      <img 
        src="/SustainabilityGate.png" 
        alt="Logo Bullet" 
        className="h-8 w-auto mr-3 flex-shrink-0"
      />
      <h3 className="text-2xl font-bold text-blue-700">Join the Green Revolution</h3>
    </div>
    <p className="text-lg text-blue-600 leading-relaxed">
      Whether you're an individual looking to reduce your carbon footprint, a business aiming for sustainability, or a community driving collective change, our platform provides the tools and connections you need to make a real difference.
    </p>
  </div>
</div>
      </div>
    </section>
  )
}
// 'use client';

// import { motion } from 'framer-motion';

// export default function CTASection() {
//   return (
//     <section className="relative py-16 sm:py-24 overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 opacity-70" />
      
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="relative container mx-auto px-6 max-w-4xl"
//       >
//         <motion.h2 
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           className="text-4xl md:text-5xl font-bold text-center mb-12 leading-tight"
//         >
//           <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
//             Transforming Sustainability Into Daily Reality
//           </span>
//         </motion.h2>

//         <div className="space-y-12 text-lg md:text-xl">
//           <motion.p 
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="leading-relaxed text-gray-700"
//           >
//             Through our innovative digital platforms - both <span className="font-semibold text-blue-600">online</span> and via <span className="font-semibold text-blue-600">mobile-green-outlets</span>, we're revolutionizing how sustainability integrates into daily life. Our mission is to make eco-conscious decisions natural and rewarding for everyone, from individuals to large organizations.
//           </motion.p>

//           <motion.p 
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="leading-relaxed text-gray-700"
//           >
//             We understand that meaningful change happens through informed choices. That's why we provide comprehensive sustainability ratings, real-time environmental impact assessments, and direct connections to eco-conscious providers. Every interaction on our platform is designed to make sustainable living effortless and intuitive.
//           </motion.p>

//           <motion.p 
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.6 }}
//             className="leading-relaxed text-gray-700"
//           >
//             By fostering connections between conscious consumers and sustainable providers, we're building a community dedicated to environmental stewardship. Our platform incentivizes green choices, making each decision count towards a better future. Whether you're taking your first steps towards sustainability or leading a community-wide initiative, we provide the tools and support you need.
//           </motion.p>
//         </div>

//         <motion.div
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.8 }}
//           className="mt-16 text-center"
//         >
//           <a
//             href="#join-movement"
//             className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-green-600 rounded-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//           >
//             Join The Movement
//           </a>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }
