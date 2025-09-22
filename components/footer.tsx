"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-200 py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & About */}
        <div className="flex flex-col items-start gap-4">
          <Link href="/">
            <Image
              src="/images/orkhon-khasu-logo.png"
              width={80}
              height={80}
              alt="Orkhon Khasu School Logo"
              className="cursor-pointer"
            />
          </Link>
          <p className="text-sm leading-relaxed text-gray-400">
            Orkhon Khasu School is dedicated to providing high-quality education
            that empowers students to grow academically, socially, and
            personally. We value excellence, innovation, and community spirit.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/About"
                className="hover:!text-gray-500 transition !no-underline text-black"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/Teachers"
                className="hover:!text-gray-500 transition !no-underline text-black"
              >
                Our Teachers
              </Link>
            </li>
            <li>
              <Link
                href="/Prices"
                className="hover:!text-gray-500 transition !no-underline text-black"
              >
                Fees & Prices
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className="hover:!text-gray-500 transition !no-underline text-black"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Connect with Us</h4>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/orkhonschool.edu.mn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={24}
                className="bg-white text-gray-800 hover:!text-[#0866ff] transition-all duration-300 rounded-[100%]"
              />
            </a>
            <a
              href="https://www.instagram.com/orkhonkhasuschool/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare
                size={24}
                className="text-gray-800 hover:!text-pink-500 transition-all duration-300"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-300 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Orkhon Khasu School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
