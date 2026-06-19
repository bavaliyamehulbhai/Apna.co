import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Jobs Column */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Jobs
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Frontend Jobs
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Backend Jobs
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Full Stack Jobs
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Remote Jobs
                </Link>
              </li>
            </ul>
          </div>

          {/* Companies Column */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Companies
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Google
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Microsoft
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Amazon
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Netflix
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us Column */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              About Us
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Press & Media
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Trust & Safety
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© 2026 Apna Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
