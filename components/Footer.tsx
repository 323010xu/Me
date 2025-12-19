import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Personal Portfolio. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <i className="fa-brands fa-github text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
              <i className="fa-brands fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors">
              <i className="fa-brands fa-linkedin text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;