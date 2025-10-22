import React from 'react';
import { motion } from 'framer-motion';

const ServicesSection = ({ variants, data, gridVariants, itemVariants }) => (
    <motion.section id="services" className="portfolio-section relative py-20 px-4 scroll-mt-20" variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <div className="text-blue-400 mb-2">┌──(derick㉿kali)-[~/services]</div>
          <div className="text-green-400 mb-4">└─$ cat available_services.txt</div>
        </div>
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" variants={gridVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {data.map((service) => (
            <motion.div key={service.title} className="border border-cyan-500/30 p-6 hover:border-cyan-400 hover:shadow-2xl transition-all duration-300 group glass-enhanced rounded-lg relative overflow-hidden" variants={itemVariants}>
               <div className="hologram-effect" />
               <div className="corner-accent top-left" />
               <div className="corner-accent top-right" />
               <div className="text-cyan-400 mb-4 text-3xl">{service.icon}</div>
               <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
               <p className="text-gray-400 text-sm mb-4">{service.desc}</p>
               <ul className="space-y-2">
                 {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                     <span className="text-cyan-400 mt-1">→</span>
                     <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
);

export default ServicesSection;