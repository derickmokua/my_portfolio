import React, { memo } from 'react';

const ScanLines = memo(() => (
  <div className="scan-lines fixed inset-0 pointer-events-none z-10" style={{
    background: 'repeating-linear-gradient(0deg, rgba(0, 255, 213, 0.03) 0px, transparent 2px, transparent 4px)',
    animation: 'scan 8s linear infinite'
  }} />
));

export default ScanLines;
