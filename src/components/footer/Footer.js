import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="">
      {/* New header section */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center flex-shrink-0 mr-6">
              <img src="/logo.svg" alt="logo" />
            </div>

            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
                <a
                  href="#"
                  className="block mt-4 lg:inline-block lg:mt-0 text-[var(--link)] hover:text-gray-800 mr-4"
                >
                  Company and team
                </a>
                <a
                  href="#"
                  className="block mt-4 lg:inline-block lg:mt-0 text-[var(--link)] hover:text-gray-800 mr-4"
                >
                  Contacts
                </a>
                <a
                  href="#"
                  className="block mt-4 lg:inline-block lg:mt-0 text-[var(--link)] hover:text-gray-800 mr-4"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="block mt-4 lg:inline-block lg:mt-0 text-[var(--link)] hover:text-gray-800"
                >
                  Press
                </a>
              </div>
              <div className="flex items-center mt-4 lg:mt-0">
                <a href="#" className="text-blue-600 mr-4">
                  <FaFacebook size={30} />
                </a>
                <a href="#" className="text-pink-600">
                  <FaInstagram size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Existing footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-[18px]  text-gray-800 mb-1">Security</h2>
          <p className="text-gray-600 text-[14px]">
            Our payment partners guarantee the security of your data.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between mb-8">
          <img src="" alt="Powered by Stripe" className="h-8 mb-4 sm:mb-0" />
          <div className="flex flex-wrap items-center">
            <img src="" alt="Visa" className="h-8 mr-4 mb-4 sm:mb-0" />
            <img src="" alt="MasterCard" className="h-8 mr-4 mb-4 sm:mb-0" />
            <img src="" alt="Thawte" className="h-8 mr-4 mb-4 sm:mb-0" />
            <img src="" alt="PCI DSS" className="h-8 mb-4 sm:mb-0" />
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col flex-wrap  items-start">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <div>
                <a
                  href="#"
                  className="text-[14px] text-[var(--text-secondary)] hover:text-gray-800 mr-4"
                >
                  Privacy Policy
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-[14px] text-[var(--text-secondary)]  hover:text-gray-800"
                >
                  Digital Service Act
                </a>
              </div>
            </div>
            <div className="w-full md:w-auto text-xs text-[var(--text-secondary)] ">
              <p className="pt-2">
                Leaside Services Limited, reg.no HE342401, Business Address: 17
                Karaiskaki Street, Office 22, Agaia Triada, Limassol, Cyprus,
                3032
              </p>
              <p className="pt-1">
                ZenHotels is a registered service mark in the European Union
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
