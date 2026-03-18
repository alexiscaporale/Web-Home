import React from 'react';
import { motion } from 'motion/react';

const BrandOverview = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8 max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-serif text-[#C4A35A] mb-6">Brand Overview</h1>
      <p className="text-[#F4EFE6] text-lg leading-relaxed mb-8">
        Solander898 represents the pinnacle of luxury investment management. Our brand embodies trust, exclusivity, and timeless value.
        This manual serves as the definitive guide to our visual identity.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="bg-[#1E1E1E] p-8 border border-[#C4A35A]/20">
          <h3 className="text-xl font-serif text-[#C4A35A] mb-4">Our Mission</h3>
          <p className="text-[#7A7570]">To preserve and grow wealth through strategic foresight and unwavering discipline.</p>
        </div>
        <div className="bg-[#1E1E1E] p-8 border border-[#C4A35A]/20">
          <h3 className="text-xl font-serif text-[#C4A35A] mb-4">Our Vision</h3>
          <p className="text-[#7A7570]">Defining the future of legacy management for the world's most discerning investors.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default BrandOverview;
