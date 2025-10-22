import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = ({variants, data, gridVariants, itemVariants}) => (
  <motion.section id="skills" className="portfolio-section relative py-20 px-4 scroll-mt-20" variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
    <div className="max-w-5xl mx-auto">
      <div className="mb-4"><div className="text-blue-400 mb-2">┌──(derick㉿kali)-[~/skills]</div><div className="text-green-400 mb-4">└─$ ls -la</div></div>
      <motion.div className="grid md:grid-cols-2 gap-4" variants={gridVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {data.map((skill) => (
          <motion.div key={skill.name} className="border border-cyan-500/30 p-4 hover:border-cyan-400 transition-all duration-300 glass-enhanced rounded-lg relative overflow-hidden group" variants={itemVariants}>
            <div className="hologram-effect" />
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300 flex items-center gap-2"><span>{skill.icon}</span>{skill.name}</span>
              <span className="text-cyan-400">[{skill.level}%]</span>
            </div>
            <div className="h-2 bg-gray-900 rounded overflow-hidden border border-gray-800">
              <div className="h-full skill-bar-cyber" style={{ width: `${skill.level}%` }} />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

export default SkillsSection;