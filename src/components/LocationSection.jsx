import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Navigation, ExternalLink } from 'lucide-react';

const LocationSection = () => {
  return (
    <section id="location" className="py-32 px-6 bg-espresso">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <span className="text-amber-gold uppercase tracking-[0.3em] text-sm font-semibold mb-6 block">
                Find Us
              </span>
              <h2 className="text-5xl md:text-7xl mb-8">Visit Our Café</h2>
              <p className="text-body text-lg font-light leading-relaxed max-w-lg">
                Nestled in the heart of Krishnanagar, Jonaki is more than just a café. 
                It's a sanctuary for coffee lovers and culture seekers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-amber-gold">
                  <MapPin size={20} />
                  <span className="uppercase tracking-widest text-xs font-bold">Address</span>
                </div>
                <p className="text-headline font-serif text-xl">
                  Krishnanagar, West Bengal, India
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-amber-gold">
                  <Phone size={20} />
                  <span className="uppercase tracking-widest text-xs font-bold">Contact</span>
                </div>
                <p className="text-headline font-serif text-xl">
                  093395 77835
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-amber-gold">
                  <Mail size={20} />
                  <span className="uppercase tracking-widest text-xs font-bold">Email</span>
                </div>
                <p className="text-headline font-serif text-lg break-all">
                  jonaki.krishnanagar@gmail.com
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-amber-gold">
                  <Facebook size={20} />
                  <span className="uppercase tracking-widest text-xs font-bold">Social</span>
                </div>
                <a 
                  href="https://www.facebook.com/102547795263995/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-headline font-serif text-xl hover:text-amber-gold transition-colors flex items-center gap-2"
                >
                  Jonaki Café <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 pt-6">
              <motion.a
                href="https://maps.app.goo.gl/ikXEMnJWkPz9ddqt9"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-amber-gold text-espresso font-bold rounded-full flex items-center gap-3"
              >
                <Navigation size={18} />
                Get Directions
              </motion.a>
              
              <motion.a
                href="mailto:jonaki.krishnanagar@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass text-headline font-bold rounded-full flex items-center gap-3"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>

          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[600px] rounded-3xl overflow-hidden glass border-8 border-border/30 relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.625145789123!2d88.4914!3d23.2435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f91d8e5e000001%3A0x8e5e000000000000!2sKrishnanagar%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
