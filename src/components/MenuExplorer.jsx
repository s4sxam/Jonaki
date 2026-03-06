import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from '../data/menuData';
import MenuItem from './MenuItem';

const MenuExplorer = () => {
  const categories = Object.keys(menuData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section id="menu" className="py-32 px-6 bg-espresso relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-gold/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl mb-6"
          >
            The Collection
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-[1px] bg-amber-gold mx-auto mb-12"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full text-sm font-medium tracking-widest uppercase transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-amber-gold text-espresso shadow-[0_0_20px_rgba(212,163,115,0.3)]'
                  : 'glass text-body hover:text-headline hover:border-amber-gold/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="contents"
            >
              {menuData[activeCategory].map((item, index) => (
                <MenuItem key={item.id} item={item} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MenuExplorer;
