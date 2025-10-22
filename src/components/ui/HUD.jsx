import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { Cpu, HardDrive } from 'lucide-react';

const HUD = ({ scrollY }) => {
    const scrollProgress = useTransform(scrollY, [0, typeof document !== 'undefined' ? document.body.scrollHeight - window.innerHeight : 0], ["0%", "100%"]);

    return(
        <div className="hud fixed bottom-4 left-4 text-cyan-400 text-xs font-mono z-50 pointer-events-none">
            <div className="mb-2">
                <p>SYS_STATUS: <span className="text-green-400">ONLINE</span></p>
                <div className="flex items-center gap-2">
                    <Cpu size={14}/>
                    <div className="w-20 h-2 bg-cyan-900/50"><motion.div className="h-2 bg-cyan-400" animate={{width: ['10%', '90%', '20%', '80%', '10%']}} transition={{duration: 10, repeat: Infinity}}/></div>
                </div>
                 <div className="flex items-center gap-2">
                    <HardDrive size={14}/>
                    <div className="w-20 h-2 bg-cyan-900/50"><div className="h-2 bg-cyan-400" style={{width: '65%'}}/></div>
                </div>
            </div>
            <div>
                <p>SCROLL_POS:</p>
                <div className="w-40 h-1 bg-cyan-900/50">
                    <motion.div className="h-1 bg-cyan-400" style={{width: scrollProgress}}/>
                </div>
            </div>
        </div>
    )
}

export default HUD;