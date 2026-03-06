import React from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import MenuExplorer from './components/MenuExplorer';
import CartDrawer from './components/CartDrawer';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <CartProvider>
      <div className="relative">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-amber-gold z-[100] origin-left"
          style={{ scaleX }}
        />

        <Navbar />
        
        <main>
          <Hero3D />
          
          {/* Vibe Section (Subtle Interstitial) */}
          <section id="vibe" className="py-32 px-6 bg-espresso border-y border-border/30">
            <div className="max-w-4xl mx-auto text-center">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-2xl md:text-4xl font-serif italic text-headline leading-relaxed"
              >
                "Coffee is a language in itself. At Jonaki, we translate the 
                finest beans into stories that linger on your palate."
              </motion.p>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                className="h-[1px] bg-amber-gold mx-auto mt-12"
              />
            </div>
          </section>

          <MenuExplorer />
          
          <LocationSection />
        </main>

        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
