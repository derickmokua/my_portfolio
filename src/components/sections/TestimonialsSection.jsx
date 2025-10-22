import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = ({ variants, data, gridVariants, itemVariants }) => (
    <motion.section id="testimonials" className="portfolio-section relative py-20 px-4 scroll-mt-20" variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
        <div className="max-w-5xl mx-auto">
            <div className="mb-8">
                <div className="text-blue-400 mb-2">┌──(derick㉿kali)-[~/testimonials]</div>
                <div className="text-green-400 mb-4">└─$ cat client_feedback.log</div>
            </div>
            <motion.div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6" variants={gridVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {data.map((testimonial, idx) => (
                    <motion.div key={idx} className="border border-cyan-500/30 p-6 hover:border-cyan-400 transition-all duration-300 glass-enhanced rounded-lg relative overflow-hidden" variants={itemVariants}>
                        <div className="hologram-effect" />
                        <div className="mb-4">
                           <div className="flex gap-1 mb-3">
                              {[...Array(5)].map((_, i) => (
                                 <span key={i} className="text-yellow-400">★</span>
                               ))}
                           </div>
                           <p className="text-gray-300 italic mb-4">"{testimonial.text}"</p>
                        </div>
                        <div className="flex items-center gap-3 pt-4 border-t border-cyan-500/20">
                           <div className="w-12 h-12 rounded-full bg-linear-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                              {testimonial.initials}
                           </div>
                           <div>
                              <p className="text-white font-semibold">{testimonial.name}</p>
                              <p className="text-sm text-cyan-400">{testimonial.role}</p>
                              <p className="text-xs text-gray-500">{testimonial.company}</p>
                           </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </motion.section>
);

export default TestimonialsSection;