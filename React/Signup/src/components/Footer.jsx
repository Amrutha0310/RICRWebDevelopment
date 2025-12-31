import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

    
        <div>
          <h2 className="text-xl font-semibold mb-3">RICR</h2>
          <p className="text-sm text-gray-300">
            RICR is a subsidiary of Raj Digital Private Limited. 
            We empower students with coding & robotics skills.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Courses</li>
            <li>Host a Workshop</li>
            <li>Community Ambassador</li>
            <li>Work With Us</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3">Policies</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
       
       
        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Information</h3>
          <p className="text-sm text-gray-300">
            Minal Mall, 4th Floor <br />
            JK Road, Bhopal (462023)
          </p>
          <p className="mt-2 text-sm text-gray-300">
            ✉️ contact@ricr.in <br />
            📞 +91 8889991736
          </p>
        </div>

      </div>

      <div className="text-center text-sm text-gray-400 py-4 border-t border-blue-800">
        © 2025 RICR. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
