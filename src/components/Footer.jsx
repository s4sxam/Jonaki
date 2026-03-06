import React from 'react';
import { Facebook, Instagram, Twitter, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-espresso border-t border-border py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="md:col-span-2 space-y-8">
            <h2 className="text-3xl font-serif tracking-widest">JONAKI</h2>
            <p className="text-body/60 max-w-sm font-light leading-relaxed">
              Crafting moments, one cup at a time. Join us in our journey of 
              exploring specialty coffee and culinary excellence.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-body hover:text-amber-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-body hover:text-amber-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-body hover:text-amber-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-8">
            <h4 className="text-amber-gold uppercase tracking-widest text-xs font-bold">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-body hover:text-headline transition-colors">Home</a></li>
              <li><a href="#menu" className="text-body hover:text-headline transition-colors">Menu</a></li>
              <li><a href="#vibe" className="text-body hover:text-headline transition-colors">Vibe</a></li>
              <li><a href="#location" className="text-body hover:text-headline transition-colors">Location</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h4 className="text-amber-gold uppercase tracking-widest text-xs font-bold">Contact</h4>
            <ul className="space-y-4">
              <li className="text-body">Krishnanagar, WB</li>
              <li className="text-body">093395 77835</li>
              <li className="text-body break-all">jonaki.krishnanagar@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-body/40">
            © {new Date().getFullYear()} JONAKI CAFÉ. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-body/40">
            <Coffee size={12} className="text-amber-gold" />
            DESIGNED FOR EXCELLENCE
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
