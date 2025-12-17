import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/images/codeHill_logo.png';

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close mobile menu when route changes
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (window.innerWidth <= 768) {
        const nav = document.querySelector('nav');
        if (nav && !nav.contains(e.target)) {
          setOpen(false);
        }
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const linkBase =
    'text-white text-[15px] transition-colors duration-200 hover:text-[#7B61FF]';

  const activeLink = '!text-[#7B61FF]';

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <nav className="fixed top-[30px] left-1/2 z-[9999] w-[calc(100%-40px)] max-w-[1400px] -translate-x-1/2 rounded-[20px] border border-white/5 bg-[rgba(10,10,10,0.6)] backdrop-blur-[14px] px-7 py-4">
      <div className="flex w-full items-center justify-between">
        <Link to="/" className="shrink-0">
          <img
            src={logo}
            alt="Code Hills Logo"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          <li>
            <Link
              to="/"
              className={`${linkBase} ${isActive('/') ? activeLink : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`${linkBase} ${isActive('/about') ? activeLink : ''}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`${linkBase} ${isActive('/services') ? activeLink : ''}`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`${linkBase} ${isActive('/projects') ? activeLink : ''}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${linkBase} ${isActive('/contact') ? activeLink : ''}`}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-[rgba(123,97,255,0.35)] px-4 py-3 text-sm font-syne text-white transition md:hidden"
          onClick={(e) => {
            e.stopPropagation();
            setOpen((prev) => !prev);
          }}
        >
          <span>{open ? '✖' : '☰'}</span>
          <span className="hidden xs:inline">Menu</span>
        </button>
      </div>

      {/* Mobile dropdown */}
      <ul
        className={`md:hidden ${
          open
            ? 'max-h-[500px] border border-white/10 py-5 opacity-100'
            : 'max-h-0 border-0 py-0 opacity-0'
        } absolute left-0 right-0 top-[calc(100%+14px)] flex flex-col items-center gap-4 rounded-[20px] bg-[rgba(12,12,12,0.92)] px-4 text-center shadow-lg backdrop-blur-[18px] transition-all duration-300 overflow-hidden`}
      >
        <li>
          <Link 
            to="/" 
            className={`${linkBase} ${isActive('/') ? activeLink : ''}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className={`${linkBase} ${isActive('/about') ? activeLink : ''}`}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/services" 
            className={`${linkBase} ${isActive('/services') ? activeLink : ''}`}
          >
            Services
          </Link>
        </li>
        <li>
          <Link 
            to="/projects" 
            className={`${linkBase} ${isActive('/projects') ? activeLink : ''}`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            className={`${linkBase} ${isActive('/contact') ? activeLink : ''}`}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;