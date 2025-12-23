import React, { useEffect, useState } from 'react';
import '../styles/services.css';

const processPhases = [
  {
    number: '01',
    color: '#3B82F6',
    title: 'Discovery',
    desc: 'We start with understanding your goals, audience, and challenges through detailed consultation.'
  },
  {
    number: '02',
    color: '#A855F7',
    title: 'Strategy',
    desc: 'Developing a comprehensive plan and approach tailored to your specific needs and objectives.'
  },
  {
    number: '03',
    color: '#10B981',
    title: 'Design',
    desc: 'Creating visual concepts and wireframes with iterative feedback to refine the user experience.'
  },
  {
    number: '04',
    color: '#F59E0B',
    title: 'Development',
    desc: 'Building the technical foundation through coding and integration with regular testing.'
  },
  {
    number: '05',
    color: '#EF4444',
    title: 'Launch & Support',
    desc: 'Delivering polished solutions with ongoing support and optimization for continued success.'
  },
];

const deliverables = [
  {
    color: '#A855F7',
    svgPath: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
    title: 'Brand Identity & UI/UX',
    text: 'Clean designs, unique brand tone, engaging visual systems.',
  },
  {
    color: '#3B82F6',
    svgPath: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    title: 'Website Redesign',
    text: 'Level up weak or outdated websites with modern structure and visuals.',
  },
  {
    color: '#10B981',
    svgPath: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
    title: 'Maintenance & Support',
    text: 'Hosting, backups, security fixes, optimization.',
  },
  {
    color: '#F59E0B',
    svgPath: "M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0H3m15.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L6.75 2.905M16.5 4.205l.75-1.3",
    title: 'React Web Applications',
    text: 'Dynamic single-page applications, and data-driven interfaces with API integration.',
  },
];

const faqItems = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. Simple websites take 2-4 weeks, while complex applications can take 2-4 months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely! We work with clients worldwide and am comfortable with different time zones. Most communication happens via email, video calls, and project management tools."
  },
  {
    question: "What's your payment structure?",
    answer: "We typically work with a 50% upfront deposit and 50% upon completion for smaller projects. Larger projects are broken into milestone-based payments for better cash flow management."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes! All projects include a warranty period for bug fixes. We also offer ongoing maintenance packages for updates, security monitoring, and continued optimization."
  },
  {
    question: "Can you work with my existing team?",
    answer: "Definitely! We collaborate seamlessly with internal teams, agencies, and other freelancers. We can adapt to your existing workflows and communication preferences."
  },
  {
    question: "What if I need revisions?",
    answer: "All projects include a set number of revisions. We believe in getting it right, so we'll work together until you're completely satisfied with the final result."
  },
];

const whyItems = [
  'Premium Quality Code',
  'Fast Delivery',
  'Fit for Future Scale',
  'Unique Design Language',
  'SEO Friendly',
  'Clean UI Animations',
  'Professional Communication',
  'High-Performance Websites',
];

function Services() {
  // Reveal animations for cards and steps
  useEffect(() => {
    const options = { threshold: 0.1, rootMargin: '0px 0px -80px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const elements = document.querySelectorAll('.services-reveal');
    elements.forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative z-10 mx-auto mt-[150px] w-[calc(100%-40px)] max-w-[1400px] text-white">
      {/* Hero */}
      <section
        aria-labelledby="services-hero-heading"  // change to about-hero-heading / contact-hero-heading / projects-heading depending on page
        className="services-banner relative mb-20  overflow-hidden rounded-[20px] border border-white/5 bg-center bg-cover bg-fixed shadow-[0_0_40px_rgba(123,97,255,0.08)] px-6 md:px-20"
      >
        <div className="hero-brand">
          OUR
          <br />
          SERVICES
        </div>
      </section>

      {/* Core Expertise */}
      <section
        id="core-expertise"
        className="core-expertise mb-20 rounded-[20px] border border-white/5 bg-white/5 px-6 py-12 text-left shadow-[0_0_40px_rgba(123,97,255,0.08)] backdrop-blur-[15px] md:px-20"
      ><p className="text-gray-500 text-left">Blend of Creativity & Excellence.</p>
        <h2 className="mb-5 text-left font-syne text-[36px] font-light">Our Core Expertise</h2>
        {/* Divider */}
        <div className="mb-8 h-[1px] bg-white/20"></div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#09090b] border border-gray-800 p-8 rounded-xl hover:border-blue-500/50 transition-all">
            <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">WordPress Development</h3>
            <p className="text-gray-400 mb-6">Custom WordPress solutions for blogs, business sites, and online stores with seamless functionality.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                Custom Themes
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                Elementor, Custom CSS
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                WooCommerce Stores
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                Speed Optimization
              </li>
            </ul>
            <div className="text-sm text-gray-500">Timeline: 2-4 weeks</div>
          </div>
          <div className="bg-[#09090b] border border-gray-800 p-8 rounded-xl hover:border-purple-500/50 transition-all">
            <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Front-End Development (HTML, CSS, JS)</h3>
            <p className="text-gray-400 mb-6">Pixel-perfect, responsive front-end development for engaging and interactive user interfaces.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                Custom Websites
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                Landing Pages
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                UI Animations
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                Responsive Design
              </li>
            </ul>
            <div className="text-sm text-gray-500">Timeline: 1-3 weeks</div>
          </div>
          <div className="bg-[#09090b] border border-gray-800 p-8 rounded-xl hover:border-green-500/50 transition-all">
            <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">React Development</h3>
            <p className="text-gray-400 mb-6">Dynamic single-page applications and complex UIs built with React for optimal performance.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                SPAs
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                Dashboards
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                Modern UI
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                API Integration
              </li>
            </ul>
            <div className="text-sm text-gray-500">Timeline: 6-8 weeks</div>
          </div>
          <div className="bg-[#09090b] border border-gray-800 p-8 rounded-xl hover:border-red-500/50 transition-all">
            <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">E-Commerce Solutions</h3>
            <p className="text-gray-400 mb-6">Complete e-commerce platforms with secure transactions and user-friendly shopping experiences.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                Product Management
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                Cart & Checkout Integration
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                Secure Payment Gateways
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                Custom Shop Functionality
              </li>
            </ul>
            <div className="text-sm text-gray-500">Timeline: 4-8 weeks</div>
          </div>
          <div className="bg-[#09090b] border border-gray-800 p-8 rounded-xl hover:border-pink-500/50 transition-all">
            <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-600/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">UI / UX Design</h3>
            <p className="text-gray-400 mb-6">Intuitive and visually appealing designs focused on user experience and accessibility.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
                Modern Layouts & Wireframes
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
                Interactive Animations
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
                Mobile-First Experience
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
                Brand-Consistent Themes
              </li>
            </ul>
            <div className="text-sm text-gray-500">Timeline: 2-5 weeks</div>
          </div>
          <div className="bg-[#09090b] border border-gray-800 p-8 rounded-xl hover:border-yellow-500/50 transition-all">
            <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Custom Web Applications</h3>
            <p className="text-gray-400 mb-6">Tailored web applications to streamline business processes and enhance productivity.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                Dashboard & Admin Panels
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                Task Management Systems
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                Custom JavaScript Features
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                API Integrations
              </li>
            </ul>
            <div className="text-sm text-gray-500">Timeline: 4-10 weeks</div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section
        className="deliver mb-20 rounded-[20px] border border-white/5 bg-white/5 px-6 py-12 text-left shadow-[0_0_40px_rgba(123,97,255,0.08)] backdrop-blur-[15px] md:px-20"
      ><p className="text-gray-500 text-left">Value & Your Success</p>
        <h2 className="mb-5 text-left font-syne text-[36px] font-light">What We Deliver</h2>
        {/* Divider */}
        <div className="mb-8 h-[1px] bg-white/20"></div>
        <div className="grid gap-6 md:grid-cols-4">
          {deliverables.map((d) => (
            <div
              key={d.title}
              className="services-reveal bg-[#09090b] border border-gray-800 p-5 rounded-xl transition hover:border-purple-500/50"
            >
              <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d.svgPath} />
                </svg>
              </div>
              <h3 className="mb-2 text-[18px] font-medium">{d.title}</h3>
              <p className="text-[14px] leading-[1.5] text-[#cccccc]">{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section
        className="process mb-20 rounded-[20px] border border-white/5 bg-white/5 px-6 py-12 text-left shadow-[0_0_40px_rgba(123,97,255,0.08)] backdrop-blur-[15px] md:px-20"
      >
        <p className="text-gray-500 text-left">How we work together</p>
        <div className="flex items-center gap-4 mb-5">
          <h2 className="text-left font-syne text-[36px] font-light">My Process</h2>
        </div>
        {/* Divider */}
        <div className="mb-8 h-[1px] bg-white/20"></div>
        <div className="flex flex-col md:flex-row gap-8">
          {processPhases.map((phase) => (
            <div key={phase.number} className="services-reveal flex-1">
              <div 
                className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl text-xl font-bold" 
                style={{ 
                  backgroundColor: `${phase.color}15`,
                  border: `2px solid ${phase.color}40`,
                  color: phase.color 
                }}
              >
                {phase.number}
              </div>
              <h4 className="mb-2 text-xl font-medium">{phase.title}</h4>
              <p className="text-[14px] text-[#cccccc]">{phase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        id="why-choose"
        className="why-choose mb-10 rounded-[20px] border border-white/5 bg-[#0b0b0b] px-6 py-12 text-left shadow-[0_0_40px_rgba(123,97,255,0.08)] backdrop-blur-[15px] md:px-20"
      ><p className="text-gray-500 text-left">Frequently Asked</p>
        <h2 className="mb-5 text-left font-syne text-[36px] font-light">Why Choose Code Hills?</h2>
        {/* Divider */}
        <div className="mb-8 h-[1px] bg-white/20"></div>

        {/* FAQ Grid: 2 boxes per row */}
        <div className="grid gap-6 md:grid-cols-2">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="faq-card relative rounded-xl border border-white/10 bg-[#121214]] p-6 text-white backdrop-blur-[20px] shadow-lg"
            >
              <h3 className="mb-3 text-[18px] font-semibold">{item.question}</h3>
              <p className="text-[15px] leading-relaxed text-[#cccccc]">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Services;