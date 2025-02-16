import React from 'react';
import reactLogo from '/src/assets/react.svg';
import nodeLogo from '/src/assets/node.svg';
import jsLogo from '/src/assets/javascript.svg';
import htmlLogo from '/src/assets/html.svg';
import '../App.css';
const TechStackOrbit = () => {
  return (
    <div className="relative flex items-center justify-center h-96">
      {/* Central Full Stack Text */}
      <div className="w-32 h-32 rounded-full bg-green-700 flex items-center justify-center text-white font-bold text-lg shadow-lg">
        Full Stack
      </div>

      {/* Outer Circle with Light-to-Dark Effect */}
      <div className="absolute w-64 h-64 rounded-full border-4 border-green-500 animate-pulse-light"></div>

      {/* Rotating and Spinning Logos */}
      <div className="absolute w-64 h-64 animate-rotate-circle">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 logo-spin">
          <img src={reactLogo} alt="React" className="w-10 h-10" />
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 logo-spin">
          <img src={nodeLogo} alt="Node.js" className="w-10 h-10" />
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 logo-spin">
          <img src={jsLogo} alt="JavaScript" className="w-10 h-10" />
        </div>
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 logo-spin">
          <img src={htmlLogo} alt="HTML5" className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
};
export default TechStackOrbit;
