import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const ProjectsSection = ({variants, data, gridVariants, itemVariants}) => (
  <motion.section id="projects" className="portfolio-section relative py-20 px-4 scroll-mt-20" variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
    <div className="max-w-5xl mx-auto">
      <div className="mb-8"><div className="text-blue-400 mb-2">┌──(derick㉿kali)-[~/projects]</div><div className="text-green-400 mb-4">└─$ ./scan_projects.sh</div><div className="text-yellow-400 mb-2">[*] Scanning for active projects...</div><div className="text-green-400">[✓] Found {data.length} projects</div></div>
      <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" variants={gridVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {data.map((project) => (
          <motion.div key={project.title} className={`border border-cyan-500/30 p-6 hover:border-cyan-400 hover:shadow-2xl transition-all duration-300 group cursor-pointer glass-enhanced rounded-lg relative overflow-hidden ${project.title.includes('Aurora') ? 'aurora-project' : ''}`} variants={itemVariants}>
            <div className="hologram-effect" />
            <div className="corner-accent top-left" />
            <div className="corner-accent top-right" />
            <div className="flex items-start justify-between mb-3">
              <Shield className="text-cyan-400 group-hover:text-cyan-300 transition-colors" size={20} />
              <span className={`text-xs px-2 py-1 border rounded-full ${project.status === 'Active' ? 'border-green-500 text-green-400 glow-green' : project.status === 'Production' ? 'border-blue-500 text-blue-400 glow-blue' : project.status === 'Experimental' ? 'border-purple-500 text-purple-400 glow-purple' : 'border-yellow-500 text-yellow-400 glow-yellow'}`}>{project.status}</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
            <div className="flex flex-wrap gap-2">{project.tags.map((tag) => (
              <span key={tag} className="bg-gray-900/70 border border-cyan-500/20 px-2 py-1 text-xs text-cyan-300 rounded-md">{tag}</span>
            ))}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

export default ProjectsSection;
