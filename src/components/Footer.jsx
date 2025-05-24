import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-black-900 text-white flex justify-center gap-8">
      <a
        href="https://www.instagram.com/samrat_dutta31/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover:text-pink-500 transition"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/-samrat-dutta/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:text-blue-600 transition"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://github.com/CodingEnthus"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:text-gray-400 transition"
      >
        <FaGithub size={24} />
      </a>
    </footer>
  );
};

export default Footer;
