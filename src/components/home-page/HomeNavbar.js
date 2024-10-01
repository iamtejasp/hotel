"use client";

import React from "react";
import { FaBell } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const HomeNavbar = () => {
  return (
    <nav className="bg-[var(--header-bg)] shadow-md">
      <div className="mx-auto px-2 py-1 sm:px-6 lg:px-4">
        <div className="flex justify-between ">
          <div className="flex-shrink-0 flex items-center">
            <img src="/logo.svg" alt="LOGO" />
          </div>
          <div className="flex items-center">
            <button className="ml-3 p-2 rounded-full text-[var(--header-typo)] ">
              <FaHeart size={20} />
            </button>
            <button className="p-2 rounded-full text-[var(--header-typo)]">
              <FaBell size={20} />
            </button>
            {/* <select className="ml-3 bg-transparent text-[var(--header-typo)]">
              <option>English</option>
            </select>
            <select className="ml-3 bg-transparent text-[var(--header-typo)]">
              <option>Ask a question</option>
            </select>
            <select className="ml-3 bg-transparent text-[var(--header-typo)]">
              <option>Log in</option>
            </select> */}
            <div></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
