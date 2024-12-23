import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>info@iqrainstitutions.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>123 Education Street, Learning City</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-200">About Us</a></li>
              <li><a href="/contact" className="hover:text-blue-200">Contact</a></li>
              <li><a href="#" className="hover:text-blue-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-200">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <p className="mb-4">Stay connected with us on social media for updates and news.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-200">Facebook</a>
              <a href="#" className="hover:text-blue-200">Twitter</a>
              <a href="#" className="hover:text-blue-200">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p>&copy; {new Date().getFullYear()} Iqra Institutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;