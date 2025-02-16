import React, { useState } from "react";
import { navLinks } from "../constants/index";
import closeIcon from "/public/assets/close.svg"; // Importing SVGs
import menuIcon from "/public/assets/menu.svg";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  const NavItems = () => {
    return (
      <section>
        <nav className="flex space-x-4">
      {navLinks.map((link) => (
        <Link 
          key={link.id} 
          to={link.to} 
          smooth={true} 
          duration={500} 
          className="cursor-pointer"
        >
          {link.name}
        </Link>
      ))}
    </nav>
      <ul className="nav-ul">
        {navLinks.map(({ id, href, name }) => (
          <li key={id} className="nav-li">
            <a
              href={`${process.env.PUBLIC_URL}${href}`} // Fix for GitHub Pages
              className="nav-li-a"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              {name}
            </a>
          </li>
        ))}
      </ul></section>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href={`${process.env.PUBLIC_URL}/`} // Fix for GitHub Pages
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Marwa
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <img
              src={isOpen ? closeIcon : menuIcon} // Fixed asset paths
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
