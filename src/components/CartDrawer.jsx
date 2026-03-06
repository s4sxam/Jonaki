import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import { generateWhatsAppLink } from '../utils/whatsappOrder';

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartTotal,
    clearCart,
  } = useCart();

  const handleCheckout = () => {
    const link = generateWhatsAppLink(cart, cartTotal);
    window.open(link, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md glass-card z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-amber-gold" />
                <h2 className="text-2xl font-serif">Your Cart</h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:text-amber-gold transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-grow overflow-y-auto p-8 space-y-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-full glass flex items-center justify-center text-body/20">
                    <ShoppingBag size={40} />
                  </div>
                  <p className="text-body/60 italic">Your cart is empty.</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-amber-gold uppercase tracking-widest text-sm font-bold border-b border-amber-gold"
                  >
                    Start Exploring
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="flex-grow">
                      <div className="flex justify-between mb-1">
                        <h4 className="text-headline font-medium">{item.name}</h4>
                        <span className="text-amber-gold font-medium">
                          {formatCurrency(item.price * item.quantity)}
                        </span>
                      </div>
                      <p className="text-xs text-body/50 mb-4 italic">{item.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center glass rounded-full px-2 py-1">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:text-amber-gold transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm font-bold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:text-amber-gold transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-body/30 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-8 border-t border-border bg-black/40 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-body uppercase tracking-widest text-sm">Subtotal</span>
                  <span className="text-2xl font-serif text-headline">
                    {formatCurrency(cartTotal)}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={clearCart}
                    className="py-4 glass text-xs uppercase tracking-widest font-bold hover:bg-white/5 transition-colors"
                  >
                    Clear
                  </button>
                  <button
                    onClick={handleCheckout}
                    className="py-4 bg-amber-gold text-espresso text-xs uppercase tracking-widest font-bold rounded-sm hover:shadow-[0_0_20px_rgba(212,163,115,0.4)] transition-all"
                  >
                    Checkout
                  </button>
                </div>
                
                <p className="text-[10px] text-center text-body/40 uppercase tracking-widest">
                  Orders are processed via WhatsApp
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
