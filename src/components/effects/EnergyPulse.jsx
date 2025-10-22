import React, { memo } from 'react';

const EnergyPulse = memo(() => (
  <div className="energy-pulse fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ zIndex: 0 }}>
    <div className="pulse-ring" />
    <div className="pulse-ring" style={{ animationDelay: '1s' }} />
    <div className="pulse-ring" style={{ animationDelay: '2s' }} />
  </div>
));

export default EnergyPulse;