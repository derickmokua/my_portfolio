import React, { memo } from 'react';
import { motion, useTransform } from 'framer-motion';

const CyberGrid = memo(({ scrollY }) => {
    const y = useTransform(scrollY, [0, 500], [0, -150]);
    return(
      <motion.div style={{y}} className="cyber-grid fixed inset-0 pointer-events-none z-0">
        <div className="grid-perspective" />
      </motion.div>
    )
});

export default CyberGrid;
