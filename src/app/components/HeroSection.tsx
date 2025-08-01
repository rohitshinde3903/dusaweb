// components/HeroSection.tsx
import React from 'react';
import { motion, Variants } from 'framer-motion';

// Define the props for the HeroSection component (optional for this simple case, but good practice)
interface HeroSectionProps {
  // You could add props here if you wanted to make the text dynamic, e.g., title: string;
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  // Animation variants for Framer Motion
  const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay children animations
    },
  },
};

// Define the variants for the individual child items
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 100,
    },
  },
};

  return (
    <section className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      {/* Background overlay for subtle texture/gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-orange-950 opacity-70"></div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 rounded-lg"
          variants={itemVariants}
        >
          <span className="block text-white">Powering Global Industries</span>
          <span className="block text-orange-500 mt-2">
            Shaping Tomorrow's World
          </span>
        </motion.h1>

        {/* Sub-text / Description */}
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto rounded-lg"
          variants={itemVariants}
        >
          DUSA delivers cutting-edge equipment, technology, and services that
          drive efficiency and innovation across vital sectors worldwide.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.div variants={itemVariants}>
          <button
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={() => console.log('Explore Solutions clicked!')} // Replace with actual navigation
          >
            Explore Our Solutions
            {/* Optional: Add an arrow icon */}
            <svg
              className="ml-3 -mr-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

