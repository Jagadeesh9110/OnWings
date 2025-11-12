import React from 'react';
// 1. Import your new CSS file
import '../../styles/FlightLoader.css';

// 2. Renamed from 'Component' to 'FlightLoader'
export const FlightLoader = () => {
  return (
      <div className="loader-container">
        <div className="clouds">
          <div className="cloud cloud1" />
          <div className="cloud cloud2" />
          <div className="cloud cloud3" />
          <div className="cloud cloud4" />
          <div className="cloud cloud5" />
        </div>
        <div className="loader">
          <span><span /><span /><span /><span /></span>
          <div className="base">
            <span />
            <div className="face" />
          </div>
        </div>
        <div className="longfazers">
          <span /><span /><span /><span />
        </div>
      </div>
  );
};

export default FlightLoader;