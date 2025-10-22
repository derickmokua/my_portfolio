import React from 'react';
import { motion } from 'framer-motion';
import { Radio } from 'lucide-react';

const BlogSection = ({variants, data, gridVariants, itemVariants}) => (
  <motion.section id="blog" className="portfolio-section relative py-20 px-4 scroll-mt-20" variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
    <div className="max-w-5xl mx-auto">
      <div className="mb-8"><div className="text-blue-400 mb-2">┌──(derick㉿kali)-[~/blog]</div><div className="text-green-400 mb-4">└─$ ls -l posts/</div></div>
      <motion.div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6" variants={gridVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {data.map((post) => (
          <motion.div key={post.title} className="border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 group cursor-pointer glass-enhanced rounded-lg relative overflow-hidden" variants={itemVariants}>
            <div className="hologram-effect" />
            <div className="p-6">
              <p className="text-sm text-cyan-400 mb-2 flex items-center gap-2"><Radio size={14} /> {post.date}</p>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300">{post.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{post.desc}</p>
              <div className="flex flex-wrap gap-2">{post.tags.map((tag) => (
                <span key={tag} className="bg-gray-900/70 border border-cyan-500/20 px-2 py-1 text-xs text-cyan-300 rounded-md">{tag}</span>
              ))}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

export default BlogSection;
