// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p>&copy; 2024 My Website. All rights reserved.</p>
        </div>
        <div className="flex mt-2 md:mt-0">
          <a href="#" className="text-white hover:text-gray-400 mx-2">Privacy Policy</a>
          <a href="#" className="text-white hover:text-gray-400 mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
