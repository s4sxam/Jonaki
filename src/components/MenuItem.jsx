import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Leaf, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';

const MenuItem = ({ item, index }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-serif text-headline group-hover:text-amber-gold transition-colors">
            {item.name}
          </h3>
          {item.type === 'veg' ? (
            <div className="w-3 h-3 border border-green-500 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            </div>
          ) : (
            <div className="w-3 h-3 border border-red-500 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
            </div>
          )}
        </div>
        
        <div className="flex-grow mx-4 border-b border-dotted border-border translate-y-[-6px]" />
        
        <span className="text-lg font-medium text-amber-gold">
          {formatCurrency(item.price)}
        </span>
      </div>

      <div className="flex items-end justify-between">
        <p className="text-sm text-body/70 font-light max-w-[80%] italic">
          {item.description}
        </p>
        
        <motion.button
          onClick={() => addToCart(item)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full glass hover:bg-amber-gold hover:text-espresso transition-all duration-300"
        >
          <Plus size={18} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default MenuItem;
