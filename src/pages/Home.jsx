import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import servicesImage from '/images/services-image.png';
import p1 from '/images/portfolio1.jpg';
import p2 from '/images/portfolio2.jpg';
import p3 from '/images/portfolio3.jpg';
import p4 from '/images/portfolio4.jpg';
import p5 from '/images/portfolio5.jpg';
import '../styles/home.css';

function Home() {
  // Set up counters and scroll reveal similar to original
  useEffect(() => {
    // Smooth scroll for in-page anchors (if any)
    const anchorHandler = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((a) => a.addEventListener('click', anchorHandler));

    // Reveal on scroll
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -80px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document
      .querySelectorAll('.reveal-card')
      .forEach((el) => {
        el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
        observer.observe(el);
      });

    // Improved animated counters when testimonials section comes into view
    const animateCounters = () => {
      const counters = document.querySelectorAll('.stat-number');
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0', 10);
        const duration = 2000; // 2 seconds
        const steps = 60;
        const step = target / steps;
        let current = 0;
        
        const updateCount = () => {
          current += step;
          if (current < target) {
            counter.textContent = Math.floor(current);
            setTimeout(updateCount, duration / steps);
          } else {
            counter.textContent = String(target);
          }
        };
        updateCount();
      });
    };

    const testimonialsSection = document.querySelector('#testimonials-section');
    let testimonialsObserver;
    if (testimonialsSection) {
      testimonialsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          testimonialsObserver.disconnect();
        }
      }, { threshold: 0.5 });
      testimonialsObserver.observe(testimonialsSection);
    }

    return () => {
      anchors.forEach((a) => a.removeEventListener('click', anchorHandler));
      observer.disconnect();
      if (testimonialsObserver) testimonialsObserver.disconnect();
    };
  }, []);

  // UnicornStudio external script + watermark cleanup
  useEffect(() => {
    const loadAndInitUnicorn = () => {
      if (!window.UnicornStudio) {
        const script = document.createElement('script');
        script.src =
          'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js';
        script.async = true;
        script.onload = () => {
          window.UnicornStudio.init().catch((err) => console.error('Unicorn init error:', err));
        };
        document.head.appendChild(script);
      } else {
        window.UnicornStudio.init().catch((err) => console.error('Unicorn init error:', err));
      }
    };

    loadAndInitUnicorn();

    const removeWatermarks = () => {
      document
        .querySelectorAll(
          "a[href*='unicorn.studio'], .us-watermark, [class*='unicorn-watermark'], [class*='made-with-unicorn']",
        )
        .forEach((el) => {
          el.style.display = 'none';
          el.style.visibility = 'hidden';
          el.style.opacity = '0';
        });
    };

    removeWatermarks();
    const interval = setInterval(removeWatermarks, 1000);

    return () => {
      clearInterval(interval);
      if (window.UnicornStudio) {
        window.UnicornStudio.destroy();
      }
    };
  }, []);

  return (
    <div className="relative z-10">
      {/* Section container wrapper */}
      <div className="mx-auto w-[calc(100%-20px)] max-w-[1400px] sm:w-[calc(100%-40px)]">
        {/* Hero */}
        <section
          aria-labelledby="hero-heading"
          className="relative mt-[120px] overflow-hidden rounded-[16px] border border-white/5 bg-white/5 px-4 py-12 text-left shadow-[0_0_40px_rgba(123,97,255,0.08)] sm:mt-[150px] sm:rounded-[20px] sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-20 lg:py-24"
        >
          <div
            data-us-project="PqkEAdw2qmqZEbzwyU59"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}
          />

          <div className="relative z-10 flex max-w-[1400px] flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="w-full lg:max-w-[50%]">
              <h1
                id="hero-heading"
                className="font-syne text-[32px] font-light leading-[1.1] sm:text-[40px] md:text-[56px] lg:text-[72px]"
              >
                Experiences
                <br />
                That
                <br />
                Captivate
              </h1>
              <div className="hero-buttons mt-4 flex flex-wrap gap-3 sm:mt-5 sm:gap-4">
                <Link
                  to="/contact"
                  className="btn-primary bg-[#7B61FF] px-6 py-3 font-syne text-[12px] text-white shadow-[0_0_0_rgba(123,97,255,0.28)] transition hover:-translate-y-[2px] hover:shadow-[0_0_20px_rgba(123,97,255,0.28)] sm:px-[35px] sm:py-[15px] sm:text-[14px]"
                >
                  Book a call
                </Link>
                <Link
                  to="/services"
                  className="btn-secondary px-6 py-3 font-syne text-[12px] text-white transition hover:text-[#7B61FF] sm:px-[35px] sm:py-[15px] sm:text-[14px]"
                >
                  View Services →
                </Link>
              </div>
            </div>
            <p className="hero-subtitle mt-4 w-full max-w-none text-[14px] leading-[1.6] text-[#cccccc] sm:text-[15px] md:text-[16px] lg:mt-5 lg:w-[220px] lg:max-w-[40%]">
              Our team blends strategy, design, and technology to craft memorable digital experiences
              that drive results.
            </p>
          </div>

          <div className="pointer-events-none absolute bottom-2 left-3 font-syne text-[60px] font-extrabold text-[rgba(123,97,255,0.12)] leading-none sm:text-[80px] md:text-[100px] lg:text-[150px] lg:left-4 lg:bottom-2">
            CODE
            <br />
            HILLS
          </div>
        </section>

        {/* Portfolio */}
        <section
          aria-labelledby="portfolio-heading"
          className="section-box relative my-12 overflow-hidden rounded-[16px] border border-white/5 bg-white/5 px-4 py-8 text-left shadow-[0_0_40px_rgba(123,97,255,0.08)] sm:my-16 sm:rounded-[20px] sm:px-6 sm:py-10 md:my-20 md:px-12 md:py-12 lg:px-20"
        >
          <div className="flex flex-col gap-6 md:gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="portfolio-section">
              <h2 className="mb-2 text-[14px] text-[#aaaaaa] sm:text-[15px]">Portfolio</h2>
              <h1
                id="portfolio-heading"
                className="mb-4 font-syne text-[32px] font-light leading-[1.1] sm:text-[40px] md:text-[50px] lg:text-[65px]"
              >
                Creative solutions
                <br />
                that make
                <br />
                impact.
              </h1>
              <div className="mb-4 flex flex-wrap gap-2 sm:mb-5">
                {['Frontend Development', 'UI/UX Design', 'E-Commerce', 'Brand Identity'].map(
                  (label) => (
                    <span
                      key={label}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[12px] sm:px-4 sm:py-2 sm:text-[14px]"
                    >
                      {label}
                    </span>
                  ),
                )}
              </div>
              <p className="mb-4 text-[14px] text-[#cccccc] sm:text-[15px] md:text-[16px]">
                Available for projects
                <br />
                Crafting digital experiences with clean code, thoughtful design, and user-first
                approach.
              </p>
              <div className="hero-buttons flex flex-wrap gap-3 sm:gap-4">
                <Link
                  to="/projects"
                  className="btn-primary bg-[#7B61FF] px-6 py-3 font-syne text-[12px] text-white transition hover:-translate-y-[2px] hover:shadow-[0_0_20px_rgba(123,97,255,0.28)] sm:px-[35px] sm:py-[15px] sm:text-[14px]"
                >
                  View Portfolio
                </Link>
                <Link
                  to="/contact"
                  className="btn-secondary px-6 py-3 font-syne text-[12px] text-white transition hover:text-[#7B61FF] sm:px-[35px] sm:py-[15px] sm:text-[14px]"
                >
                  Start Project →
                </Link>
              </div>
            </div>

            {/* Portfolio Grid - Centered on mobile */}
            <div className="portfolio-grid mt-6 grid w-full max-w-[500px] grid-cols-1 place-items-center gap-4 mx-auto sm:max-w-none sm:grid-cols-2 sm:gap-5 lg:mt-0 lg:w-auto lg:grid-cols-3 lg:gap-6 lg:self-center">
              {/* First big card */}
              <div className="portfolio-img-card group h-full w-full max-w-[300px] overflow-hidden rounded-[12px] border border-white/10 bg-white/5 cursor-pointer transition-all duration-250 ease-in-out hover:-translate-y-[6px] hover:border-[#7B61FF] hover:shadow-[0_0_25px_rgba(123,97,255,0.25)] sm:max-w-none sm:col-span-2 sm:row-span-2">
                <span className="portfolio-badge absolute left-3 top-3 z-20 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium tracking-[0.06em] text-white backdrop-blur sm:left-[14px] sm:top-[14px] sm:px-4 sm:py-1.5 sm:text-[12px]">
                  UI Design
                </span>
                <img
                  src={p1}
                  alt="Portfolio 1"
                  className="h-full w-full rounded-[12px] object-cover transition-all duration-500 grayscale group-hover:scale-105 group-hover:grayscale-0 sm:rounded-[14px]"
                />
              </div>

              {/* Second medium card */}
              <div className="portfolio-img-card group h-full w-full max-w-[300px] overflow-hidden rounded-[12px] border border-white/10 bg-white/5 cursor-pointer transition-all duration-250 ease-in-out hover:-translate-y-[6px] hover:border-[#7B61FF] hover:shadow-[0_0_25px_rgba(123,97,255,0.25)] sm:max-w-none sm:row-span-2">
                <span className="portfolio-badge absolute left-3 top-3 z-20 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium tracking-[0.06em] text-white backdrop-blur sm:left-[14px] sm:top-[14px] sm:px-4 sm:py-1.5 sm:text-[12px]">
                  Front-end 
                </span>
                <img
                  src={p2}
                  alt="Portfolio 2"
                  className="h-full w-full rounded-[12px] object-cover transition-all duration-500 grayscale group-hover:scale-105 group-hover:grayscale-0 sm:rounded-[14px]"
                />
              </div>

              {/* Third medium card */}
              <div className="portfolio-img-card group h-full w-full max-w-[300px] overflow-hidden rounded-[12px] border border-white/10 bg-white/5 cursor-pointer transition-all duration-250 ease-in-out hover:-translate-y-[6px] hover:border-[#7B61FF] hover:shadow-[0_0_25px_rgba(123,97,255,0.25)] sm:max-w-none">
                <span className="portfolio-badge absolute left-3 top-3 z-20 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium tracking-[0.06em] text-white backdrop-blur sm:left-[14px] sm:top-[14px] sm:px-4 sm:py-1.5 sm:text-[12px]">
                  E-commerce
                </span>
                <img
                  src={p3}
                  alt="Portfolio 3"
                  className="h-full w-full rounded-[12px] object-cover transition-all duration-500 grayscale group-hover:scale-105 group-hover:grayscale-0 sm:rounded-[14px]"
                />
              </div>

              {/* Fourth small card */}
              <div className="portfolio-img-card group h-full w-full max-w-[300px] overflow-hidden rounded-[12px] border border-white/10 bg-white/5 cursor-pointer transition-all duration-250 ease-in-out hover:-translate-y-[6px] hover:border-[#7B61FF] hover:shadow-[0_0_25px_rgba(123,97,255,0.25)] sm:max-w-none">
                <span className="portfolio-badge absolute left-3 top-3 z-20 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium tracking-[0.06em] text-white backdrop-blur sm:left-[14px] sm:top-[14px] sm:px-4 sm:py-1.5 sm:text-[12px]">
                  Web Development
                </span>
                <img
                  src={p5}
                  alt="Portfolio 4"
                  className="h-full w-full rounded-[12px] object-cover transition-all duration-500 grayscale group-hover:scale-105 group-hover:grayscale-0 sm:rounded-[14px]"
                />
              </div>

              {/* Fifth medium card */}
              <div className="portfolio-img-card group h-full w-full max-w-[300px] overflow-hidden rounded-[12px] border border-white/10 bg-white/5 cursor-pointer transition-all duration-250 ease-in-out hover:-translate-y-[6px] hover:border-[#7B61FF] hover:shadow-[0_0_25px_rgba(123,97,255,0.25)] sm:max-w-none">
                <span className="portfolio-badge absolute left-3 top-3 z-20 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium tracking-[0.06em] text-white backdrop-blur sm:left-[14px] sm:top-[14px] sm:px-4 sm:py-1.5 sm:text-[12px]">
                  Brand Identity
                </span>
                <img
                  src={p4}
                  alt="Portfolio 5"
                  className="h-full w-full rounded-[12px] object-cover transition-all duration-500 grayscale group-hover:scale-105 group-hover:grayscale-0 sm:rounded-[14px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="testimonials-section"
          aria-labelledby="testimonials-heading"
          className="section-box relative my-12 overflow-hidden rounded-[16px] border border-white/5 bg-white/5 px-4 py-8 text-left shadow-[0_0_40px_rgba(123,97,255,0.08)] sm:my-16 sm:rounded-[20px] sm:px-6 sm:py-10 md:my-20 md:px-12 md:py-12 lg:px-20"
        >
          <div className="flex flex-col gap-8 md:gap-12 lg:flex-row lg:items-start lg:justify-between"> {/* Increased gap */}
            <div className="w-full lg:max-w-[45%]"> {/* Reduced width to create more space */}
              <h2 className="mb-2 text-[14px] text-[#aaaaaa] sm:text-[15px]">Testimonials</h2>
              <h1
                id="testimonials-heading"
                className="mb-4 font-syne text-[32px] font-light leading-[1.1] sm:text-[40px] md:text-[50px] lg:text-[65px]"
              >
                Clients love Code Hills
              </h1>
              <p className="mb-4 text-[14px] text-[#cccccc] sm:text-[15px] md:text-[16px]">
                Trusted by innovative companies, delivering exceptional digital experiences that
                drive results.
              </p>
              
              {/* Stats - Fixed layout with value and symbol in same row */}
              <div className="stats mb-4 flex flex-wrap gap-6 sm:mb-6 md:flex-nowrap">
                <div className="stat flex-1 text-center sm:flex-none">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="stat-number block text-[28px] font-bold leading-none sm:text-[32px] md:text-[36px]" data-target="50">
                      0
                    </span>
                    <span className="text-[20px] font-bold sm:text-[24px] md:text-[28px]">+</span>
                  </div>
                  <p className="stat-label mt-1 text-[12px] text-[#aaaaaa] sm:text-[13px] md:text-[14px]">Projects delivered</p>
                </div>
                <div className="stat flex-1 text-center sm:flex-none">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="stat-number block text-[28px] font-bold leading-none sm:text-[32px] md:text-[36px]" data-target="5">
                      0
                    </span>
                    <span className="text-[20px] font-bold sm:text-[24px] md:text-[28px] invisible">+</span> {/* Invisible spacer for alignment */}
                  </div>
                  <p className="stat-label mt-1 text-[12px] text-[#aaaaaa] sm:text-[13px] md:text-[14px]">Years experience</p>
                </div>
                <div className="stat flex-1 text-center sm:flex-none">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="stat-number block text-[28px] font-bold leading-none sm:text-[32px] md:text-[36px]" data-target="100">
                      0
                    </span>
                    <span className="text-[20px] font-bold sm:text-[24px] md:text-[28px]">%</span>
                  </div>
                  <p className="stat-label mt-1 text-[12px] text-[#aaaaaa] sm:text-[13px] md:text-[14px]">Client satisfaction</p>
                </div>
              </div>
              
              <div className="hero-buttons flex flex-wrap gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="btn-primary bg-[#7B61FF] px-6 py-3 font-syne text-[12px] text-white transition hover:-translate-y-[2px] hover:shadow-[0_0_20px_rgba(123,97,255,0.28)] sm:px-[35px] sm:py-[15px] sm:text-[14px]"
                >
                  Book a call
                </Link>
                <Link
                  to="/services"
                  className="btn-secondary px-6 py-3 font-syne text-[12px] text-white transition hover:text-[#7B61FF] sm:px-[35px] sm:py-[15px] sm:text-[14px]"
                >
                  We Offer →
                </Link>
              </div>
            </div>

            {/* Testimonials Right - More spacing */}
            <div className="testimonials-right reveal-card mt-6 lg:mt-0 lg:w-[50%] lg:pl-8 xl:pl-12"> {/* Added padding on larger screens */}
              <div className="testimonial-slider h-[300px] overflow-hidden sm:h-[350px] md:h-[400px]">
                <div className="testimonial-track flex flex-col animate-[slideUp_20s_linear_infinite]">
                  {[1, 2, 3, 4].map((idx) => (
                    <div
                      key={idx}
                      className="testimonial-card mb-4 rounded-[10px] border border-white/10 bg-white/5 p-4 shadow-[0_0_20px_rgba(123,97,255,0.06)] transition hover:shadow-[0_0_30px_rgba(123,97,255,0.12)] sm:mb-6 sm:p-5 md:mb-[30px] md:p-7"
                    >
                      <div className="testimonial-author text-[16px] sm:text-[17px] md:text-[18px]">
                        {idx % 2 === 0 ? 'Mohsin Haroon' : 'Fahad Abdul Aziz'}
                      </div>
                      <div className="testimonial-author-title text-[13px] text-[#888888] sm:text-[14px]">
                        {idx % 2 === 0 ? 'CEO, SamarTex' : 'RAAD AL ARABIA, Jeddah'}
                      </div>
                      <div className="stars mb-3 text-[14px] text-[#FFD700] sm:mb-[14px] sm:text-[16px]">
                        5.0 ★★★★
                      </div>
                      <p className="testimonial-text text-[13px] leading-[1.6] text-[#cccccc] sm:text-[14px] sm:leading-[1.75] md:text-[15px]">
                        {idx % 2 === 0
                          ? 'Working with Code Hills to build our eCommerce store was a seamless experience. The team understood our vision perfectly, created a visually stunning and highly functional website, and ensured a smooth checkout process for our customers. Managing products has never been easier. Highly recommended!'
                          : 'Code Hills delivered an exceptional website for our cold storage business. The site perfectly showcases our services, builds trust with clients, and provides clear information about our facilities. The team was professional, responsive, and attentive to every detail. Our online presence has improved'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          aria-labelledby="services-heading"
          className="section-box relative my-12 overflow-hidden rounded-[16px] border border-white/5 bg-white/5 px-4 py-8 text-left shadow-[0_0_40px_rgba(123,97,255,0.08)] sm:my-16 sm:rounded-[20px] sm:px-6 sm:py-10 md:my-20 md:px-12 md:py-12 lg:px-20"
        >
          <div className="flex flex-col gap-6 md:gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="w-full lg:max-w-[50%]">
              <h2 className="mb-2 text-[14px] text-[#aaaaaa] sm:text-[15px]">Services</h2>
              <h1
                id="services-heading"
                className="mb-4 font-syne text-[32px] font-light leading-[1.1] sm:text-[40px] md:text-[50px] lg:text-[58px]"
              >
                Let's Build
                <br />
                Something
                <br />
                Extraordinary
              </h1>
              <div className="service-item reveal-card mb-3 rounded-[10px] border border-white/15 bg-white/5 p-4 sm:mb-4 sm:p-5">
                <h3 className="mb-1 text-[16px] sm:text-[17px]">Creative Development</h3>
                <p className="text-[13px] text-[#cccccc] sm:text-[14px]">
                  Crafting digital experiences that captivate and convert your audience.
                </p>
              </div>
              <div className="service-item reveal-card mb-3 rounded-[10px] border border-white/15 bg-white/5 p-4 sm:mb-4 sm:p-5">
                <h3 className="mb-1 text-[16px] sm:text-[17px]">Full-Stack Solutions</h3>
                <p className="text-[13px] text-[#cccccc] sm:text-[14px]">
                  Complete digital solutions from strategy to deployment and beyond.
                </p>
              </div>
              <div className="hero-buttons mt-4 flex flex-wrap gap-3 sm:gap-4">
                <Link
                  to="/services"
                  className="btn-primary bg-[#7B61FF] px-6 py-3 font-syne text-[12px] text-white transition hover:-translate-y-[2px] hover:shadow-[0_0_20px_rgba(123,97,255,0.28)] sm:px-[35px] sm:py-[15px] sm:text-[14px]"
                >
                  View services
                </Link>
                <Link
                  to="/contact"
                  className="btn-secondary px-6 py-3 font-syne text-[12px] text-white transition hover:text-[#7B61FF] sm:px-[35px] sm:py-[15px] sm:text-[14px]"
                >
                  Start project →
                </Link>
              </div>
            </div>
            
            {/* Services Image - Centered and wider on tablet */}
            <div className="services-right reveal-card mt-6 flex w-full items-center justify-center lg:mt-0 lg:w-[50%] lg:self-center">
              <img
                src={servicesImage}
                alt="Services mockup"
                className="max-h-[300px] w-[140%] max-w-[140%] rounded-[10px] object-contain transition duration-300 hover:-translate-y-5 sm:max-h-[350px] md:max-h-[420px] md:w-[120%] md:max-w-[120%] lg:w-full lg:max-w-[480px]"
              />
            </div>
          </div>
        </section>

        {/* Contact preview */}
        <section
          aria-labelledby="contact-heading"
          className="section-box mb-8 mt-16 rounded-[16px] border border-white/5 bg-white/5 px-4 py-8 text-center shadow-[0_0_40px_rgba(123,97,255,0.12)] sm:mb-10 sm:mt-20 sm:rounded-[20px] sm:px-6 sm:py-10 md:px-12 lg:px-20"
        >
          <h2 id="contact-heading" className="mb-4 text-[28px] font-syne sm:text-[32px] md:text-[36px] lg:text-[40px]">
            Let's Build Something Great
          </h2>
          <Link
            to="/contact"
            className="inline-block animate-[float_3s_ease_infinite] rounded-md bg-gradient-to-tr from-[#7B61FF] to-[#00F0FF] px-8 py-3 text-[14px] text-white shadow-[0_0_0_rgba(123,97,255,0.28)] transition hover:-translate-y-[3px] hover:shadow-[0_0_20px_rgba(123,97,255,0.28)] sm:px-10 sm:py-4 sm:text-[16px]"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Home;