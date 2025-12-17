import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="mx-auto mt-20 mb-16 grid w-[calc(100%-40px)] max-w-[1400px] grid-cols-1 gap-8 border-t border-white/5 px-5 pt-10 pb-16 text-sm text-white sm:w-[calc(100%-80px)] md:grid-cols-3 md:px-10 lg:w-[calc(100%-200px)]">
      
      {/* Solutions We Offer */}
      <div className="space-y-3 text-center md:text-left">
        <h3 className="text-[16px] font-medium text-[#cccccc] sm:text-[18px]">Solutions We Offer</h3>
        <ul className="space-y-1 text-[#999999]">
          <li className="text-[14px] sm:text-base">Web Development</li>
          <li className="text-[14px] sm:text-base">UI/UX Design</li>
          <li className="text-[14px] sm:text-base">Brand Identity</li>
          <li className="text-[14px] sm:text-base">Front-End Engineering</li>
          <li className="text-[14px] sm:text-base">Website Redesign</li>
        </ul>
      </div>

      {/* Pages */}
      <div className="space-y-3 text-center md:text-left">
        <h3 className="text-[16px] font-medium text-[#cccccc] sm:text-[18px]">Pages</h3>
        <ul className="mx-auto flex flex-wrap justify-center gap-2 md:mx-0 md:justify-start">
          {["Home", "About", "Services", "Projects", "Contact"].map((page) => (
            <li
              key={page}
              className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[12px] text-[#999999] backdrop-blur sm:text-[14px]"
            >
              <Link
                to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                className="flex justify-center text-[#dddddd] transition hover:text-[#7B61FF]"
              >
                {page}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Connect With Us */}
      <div className="space-y-3 text-center md:text-left">
        <h3 className="text-[16px] font-medium text-[#cccccc] sm:text-[18px]">Connect With Us</h3>
        <div className="flex justify-center gap-3 md:justify-start">
          <a
            href="#"
            className="footer-icon flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white backdrop-blur transition hover:scale-110 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] sm:h-12 sm:w-12 sm:p-3"
          >
            <FaGithub className="h-[18px] w-[18px] sm:h-[22px] sm:w-[22px]" />
          </a>

          <a
            href="#"
            className="footer-icon flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white backdrop-blur transition hover:scale-110 hover:border-[#0A66C2] hover:shadow-[0_0_20px_rgba(10,102,194,0.4)] sm:h-12 sm:w-12 sm:p-3"
          >
            <FaLinkedin className="h-[18px] w-[18px] sm:h-[22px] sm:w-[22px]" />
          </a>

          <a
            href="mailto:codehills.dev@gmail.com"
            className="footer-icon flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white backdrop-blur transition hover:scale-110 hover:border-[#ff4444] hover:shadow-[0_0_20px_rgba(255,68,68,0.4)] sm:h-12 sm:w-12 sm:p-3"
          >
            <FaEnvelope className="h-[18px] w-[18px] sm:h-[22px] sm:w-[22px]" />
          </a>

          {/* <a
            href="#"
            className="footer-icon flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white backdrop-blur transition hover:scale-110 hover:border-[#1DA1F2] hover:shadow-[0_0_20px_rgba(29,161,242,0.4)] sm:h-12 sm:w-12 sm:p-3"
          >
            <FaTwitter className="h-[18px] w-[18px] sm:h-[22px] sm:w-[22px]" />
          </a> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
