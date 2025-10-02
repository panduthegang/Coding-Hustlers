import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-100 to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-gray-300">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-purple-600">Coding</span>
              <br />
              <span className="text-gray-400">Hustlers</span>
            </h3>
            <div className="space-y-2 text-gray-700">
              <p className="font-semibold">Address:</p>
              <p>Khar-10 jss Mumbai</p>
            </div>
            <div className="space-y-2 text-gray-700">
              <p className="font-semibold">Contact:</p>
              <p>9428hhddk</p>
              <p>panduhnajeeb@gmail.com</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-gray-900">About Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Terms and conditions</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-gray-900">Courses</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Tests</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-gray-900">Company wise</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">How to begin?</a></li>
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Test wise</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            2024 Coding Hustlers. All right reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
