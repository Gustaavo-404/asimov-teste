"use client";

import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white font-['Space_Grotesk'] overflow-x-hidden">
      {/* NAVBAR */}
      <div className="mt-[3.75rem]">
        <nav className="w-full top-0 left-0 z-50 fixed bg-white">
          <header className="flex items-center justify-between px-5 md:px-[6.25rem] py-5">
            {/* Logo */}
            <a href="/" className="flex items-center transition-opacity duration-300 hover:opacity-80">
              <img
                src="/assets/logo.svg"
                className="w-[10rem] md:w-[13.72rem] h-auto"
                alt="Logo"
              />
            </a>

            {/* Desktop Navigation & Button */}
            <div className="hidden lg:flex items-center ml-auto gap-8">
              <ul className="flex items-center gap-8">
                <li><a href="#about" className="text-xl font-normal leading-7 text-black transition-colors duration-300 hover:text-[#191a23]">About us</a></li>
                <li><a href="#services" className="text-xl font-normal leading-7 text-black transition-colors duration-300 hover:text-[#191a23]">Services</a></li>
                <li><a href="#cases" className="text-xl font-normal leading-7 text-black transition-colors duration-300 hover:text-[#191a23]">Use Cases</a></li>
                <li><a href="#testimonials" className="text-xl font-normal leading-7 text-black transition-colors duration-300 hover:text-[#191a23]">Pricing</a></li>
                <li><a href="#home" className="text-xl font-normal leading-7 text-black transition-colors duration-300 hover:text-[#191a23]">Blog</a></li>
              </ul>
              <a
                className="inline-flex items-center justify-center h-[4.25rem] px-[2.1875rem] py-5 rounded-[0.875rem] border border-zinc-900 bg-white hover:bg-black text-black hover:text-white whitespace-nowrap transition-all duration-300 hover:scale-105"
                href="#"
              >
                <h2 className="text-xl font-normal leading-7">Request a quote</h2>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="block lg:hidden">
              <div className="w-8 h-8 text-black cursor-pointer transition-opacity duration-300 hover:opacity-70" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg className={`w-8 h-8 ${isMenuOpen ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className={`w-8 h-8 ${!isMenuOpen ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </header>

          {/* Mobile Menu */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden bg-white px-6 pb-6 shadow-lg transition-all duration-300`}>
            <ul className="flex flex-col gap-4">
              <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-xl font-normal leading-7 text-black transition-colors duration-300 hover:text-[#191a23]">About us</a></li>
              <li><a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-xl font-normal leading-7 text-black transition-colors duration-300 hover:text-[#191a23]">Services</a></li>
              <li><a href="#cases" onClick={() => setIsMenuOpen(false)} className="block text-xl font-normal leading-7 text-black transition-colors duration-300 hover:text-[#191a23]">Use Cases</a></li>
              <li><a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="block text-xl font-normal leading-7 text-black transition-colors duration-300 hover:text-[#191a23]">Pricing</a></li>
              <li><a href="#home" onClick={() => setIsMenuOpen(false)} className="block text-xl font-normal leading-7 text-black transition-colors duration-300 hover:text-[#191a23]">Blog</a></li>
              <li>
                <a
                  className="inline-flex items-center justify-center w-full h-[4.25rem] px-[2.1875rem] py-5 rounded-[0.875rem] border border-zinc-900 bg-white hover:bg-black text-black hover:text-white transition-all duration-300"
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <h2 className="text-xl font-normal leading-7">Request a quote</h2>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <main>
        {/* HERO */}
        <section id="home" className="px-5 md:px-[6.25rem] flex justify-center overflow-hidden">
          <div className="w-full max-w-full mx-auto">
            <div className="mt-[4.375rem] mb-[4.375rem] min-h-[85vh] flex items-center">
              <div className="relative grid grid-cols-1 md:grid-cols-[0.465fr_0.535fr] gap-10 items-center">
                <div className="flex flex-col gap-[2.1875rem]">
                  <h1
                    className="text-4xl md:text-6xl font-medium leading-tight md:leading-none"
                    style={{ lineHeight: '125%' }}
                  >
                    Navigating the <br /> digital landscape <br /> for success
                  </h1>
                  <p className="text-base md:text-xl leading-7 font-normal">
                    Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                  </p>
                  <div className="w-full md:w-auto">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center h-[4.25rem] px-[2.1875rem] py-5 bg-[#191a23] hover:bg-white rounded-[0.875rem] text-white hover:text-[#191a23] border border-transparent hover:border-[#191a23] text-base md:text-xl font-normal leading-7 whitespace-nowrap transition-all duration-300 hover:scale-105 w-full md:w-auto text-center"
                    >
                      Book a consultation
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-8 md:mt-0">
                  <img
                    src="/assets/hero-illustration.svg"
                    alt="Hero Illustration"
                    loading="eager"
                    className="w-full max-w-[37.5rem] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPONSORS */}
        <section id="sponsors" className="px-5 md:px-[6.25rem] flex justify-center overflow-hidden">
          <div className="w-full max-w-full mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:justify-between md:items-center gap-6 md:gap-0">
              <img src="/assets/logo-amazon.svg" alt="Amazon logo" loading="lazy" className="h-10 md:h-12 w-auto grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110 mx-auto md:mx-0" />
              <img src="/assets/logo-dribbble.svg" alt="Dribbble logo" loading="lazy" className="h-10 md:h-12 w-auto grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110 mx-auto md:mx-0" />
              <img src="/assets/logo-hubspot.svg" alt="HubSpot logo" loading="lazy" className="h-10 md:h-12 w-auto grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110 mx-auto md:mx-0" />
              <img src="/assets/logo-notion.svg" alt="Notion logo" loading="lazy" className="h-10 md:h-12 w-auto grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110 mx-auto md:mx-0" />
              <img src="/assets/logo-netflix.svg" alt="Netflix logo" loading="lazy" className="h-10 md:h-12 w-auto grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110 mx-auto md:mx-0" />
              <img src="/assets/logo-zoom.svg" alt="Zoom logo" loading="lazy" className="h-10 md:h-12 w-auto grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110 mx-auto md:mx-0" />
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="px-5 md:px-[6.25rem] flex justify-center overflow-hidden">
          <div className="w-full max-w-full mx-auto">
            <div className="mt-[8.75rem] mb-5">
              <div className="flex flex-col items-center gap-10 mb-20 sm:flex-row">
                <h2 className="greenhead text-center sm:text-left text-[2.5rem] font-medium transition-transform duration-300 hover:scale-105">Services</h2>
                <p className="w-auto text-center sm:text-left sm:w-[36.25rem] text-[1.125rem] font-normal">
                  At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include
                </p>
              </div>

              <div className="grid lg:grid-cols-2 lg:grid-rows-3 gap-10">
                {/* Card 1 */}
                <div className="rounded-[2.8125rem] border border-dark shadow-[0rem_0.3125rem_0rem_#191a23] transition-all duration-300 hover:shadow-[0rem_0.625rem_0rem_#191a23] hover:-translate-y-2">
                  <div className="h-[18.75rem] w-full sm:h-full lg:gap-[3.75rem] grid custom-grid lg:grid-cols-2 lg:grid-rows-1 p-8 sm:p-[3.125rem] rounded-[2.8125rem] bg-gray">
                    <h3 className="flex flex-col col-span-2 lg:col-span-1">
                      <span className="w-[fit-content] greenhead text-[1.625rem] font-medium">Search Engine</span>
                      <span className="w-[fit-content] greenhead text-[1.75rem] font-medium">Optimization</span>
                    </h3>
                    <picture className="w-full h-full row-span-1 order-1 lg:order-none lg:row-span-2 flex justify-center items-center">
                      <img src="/assets/service-seo.webp" alt="SEO" loading="lazy" className="w-[8rem] sm:w-[10rem] lg:w-[13.125rem] h-auto object-contain transition-transform duration-300 hover:scale-110" />
                    </picture>
                    <div className="flex items-end">
                      <a href="#" className="flex items-center gap-3.5 group">
                        <img src="/assets/arrow-green.svg" alt="arrow" loading="lazy" className="w-[2.5625rem] h-[2.5625rem] transition-transform duration-300 group-hover:translate-x-2 hidden sm:block" />
                        <span className="text-[1.25rem] font-normal transition-colors duration-300 group-hover:text-[#191a23] hidden sm:block">Learn More</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="rounded-[2.8125rem] border border-dark shadow-[0rem_0.3125rem_0rem_#191a23] transition-all duration-300 hover:shadow-[0rem_0.625rem_0rem_#191a23] hover:-translate-y-2">
                  <div className="h-[18.75rem] w-full sm:h-full lg:gap-[3.75rem] grid custom-grid lg:grid-cols-2 lg:grid-rows-1 p-8 sm:p-[3.125rem] rounded-[2.8125rem] bg-green">
                    <h3 className="flex flex-col col-span-2 lg:col-span-1">
                      <span className="w-[fit-content] whitehead text-[1.75rem] font-medium">Pay-per-click</span>
                      <span className="w-[fit-content] whitehead text-[1.75rem] font-medium">advertising</span>
                    </h3>
                    <picture className="w-full h-full row-span-1 order-1 lg:order-none lg:row-span-2 flex justify-center items-center">
                      <img src="/assets/service-ppc.webp" alt="PPC" loading="lazy" className="w-[8rem] sm:w-[10rem] lg:w-[13.125rem] h-auto object-contain transition-transform duration-300 hover:scale-110" />
                    </picture>
                    <div className="flex items-end">
                      <a href="#" className="flex items-center gap-3.5 group">
                        <img src="/assets/arrow-green.svg" alt="arrow" loading="lazy" className="w-[2.5625rem] h-[2.5625rem] transition-transform duration-300 group-hover:translate-x-2 hidden sm:block" />
                        <span className="text-[1.25rem] font-normal transition-colors duration-300 group-hover:text-[#191a23] hidden sm:block">Learn More</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="rounded-[2.8125rem] border border-dark shadow-[0rem_0.3125rem_0rem_#191a23] transition-all duration-300 hover:shadow-[0rem_0.625rem_0rem_#191a23] hover:-translate-y-2">
                  <div className="h-[18.75rem] w-full sm:h-full lg:gap-[3.75rem] grid custom-grid lg:grid-cols-2 lg:grid-rows-1 p-8 sm:p-[3.125rem] rounded-[2.8125rem] bg-dark text-gray">
                    <h3 className="flex flex-col col-span-2 lg:col-span-1">
                      <span className="w-[fit-content] whitehead text-[1.75rem] font-medium">Social Media</span>
                      <span className="w-[fit-content] whitehead text-[1.75rem] font-medium">Marketing</span>
                    </h3>
                    <picture className="w-full h-full row-span-1 order-1 lg:order-none lg:row-span-2 flex justify-center items-center">
                      <img src="/assets/service-social.webp" alt="Social Media" loading="lazy" className="w-[8rem] sm:w-[10rem] lg:w-[13.125rem] h-auto object-contain transition-transform duration-300 hover:scale-110" />
                    </picture>
                    <div className="flex items-end">
                      <a href="#" className="flex items-center gap-3.5 group">
                        <img src="/assets/arrow-white.svg" alt="arrow" loading="lazy" className="w-[2.5625rem] h-[2.5625rem] transition-transform duration-300 group-hover:translate-x-2 hidden sm:block" />
                        <span className="text-[1.25rem] font-normal text-white transition-colors duration-300 group-hover:text-green hidden sm:block">Learn More</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="rounded-[2.8125rem] border border-dark shadow-[0rem_0.3125rem_0rem_#191a23] transition-all duration-300 hover:shadow-[0rem_0.625rem_0rem_#191a23] hover:-translate-y-2">
                  <div className="h-[18.75rem] w-full sm:h-full lg:gap-[3.75rem] grid custom-grid lg:grid-cols-2 lg:grid-rows-1 p-8 sm:p-[3.125rem] rounded-[2.8125rem] bg-gray">
                    <h3 className="flex flex-col col-span-2 lg:col-span-1">
                      <span className="w-[fit-content] greenhead text-[1.75rem] font-medium">Email</span>
                      <span className="w-[fit-content] greenhead text-[1.75rem] font-medium">Marketing</span>
                    </h3>
                    <picture className="w-full h-full row-span-1 order-1 lg:order-none lg:row-span-2 flex justify-center items-center">
                      <img src="/assets/service-email.webp" alt="Email Marketing" loading="lazy" className="w-[8rem] sm:w-[10rem] lg:w-[13.125rem] h-auto object-contain transition-transform duration-300 hover:scale-110" />
                    </picture>
                    <div className="flex items-end">
                      <a href="#" className="flex items-center gap-3.5 group">
                        <img src="/assets/arrow-green.svg" alt="arrow" loading="lazy" className="w-[2.5625rem] h-[2.5625rem] transition-transform duration-300 group-hover:translate-x-2 hidden sm:block" />
                        <span className="text-[1.25rem] font-normal transition-colors duration-300 group-hover:text-[#191a23] hidden sm:block">Learn More</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card 5 */}
                <div className="rounded-[2.8125rem] border border-dark shadow-[0rem_0.3125rem_0rem_#191a23] transition-all duration-300 hover:shadow-[0rem_0.625rem_0rem_#191a23] hover:-translate-y-2">
                  <div className="h-[18.75rem] w-full sm:h-full lg:gap-[3.75rem] grid custom-grid lg:grid-cols-2 lg:grid-rows-1 p-8 sm:p-[3.125rem] rounded-[2.8125rem] bg-green">
                    <h3 className="flex flex-col col-span-2 lg:col-span-1">
                      <span className="w-[fit-content] whitehead text-[1.75rem] font-medium">Content</span>
                      <span className="w-[fit-content] whitehead text-[1.75rem] font-medium">Creation</span>
                    </h3>
                    <picture className="w-full h-full row-span-1 order-1 lg:order-none lg:row-span-2 flex justify-center items-center">
                      <img src="/assets/service-content.webp" alt="Content Creation" loading="lazy" className="w-[8rem] sm:w-[10rem] lg:w-[13.125rem] h-auto object-contain transition-transform duration-300 hover:scale-110" />
                    </picture>
                    <div className="flex items-end">
                      <a href="#" className="flex items-center gap-3.5 group">
                        <img src="/assets/arrow-green.svg" alt="arrow" loading="lazy" className="w-[2.5625rem] h-[2.5625rem] transition-transform duration-300 group-hover:translate-x-2 hidden sm:block" />
                        <span className="text-[1.25rem] font-normal transition-colors duration-300 group-hover:text-[#191a23] hidden sm:block">Learn More</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card 6 */}
                <div className="rounded-[2.8125rem] border border-dark shadow-[0rem_0.3125rem_0rem_#191a23] transition-all duration-300 hover:shadow-[0rem_0.625rem_0rem_#191a23] hover:-translate-y-2">
                  <div className="h-[18.75rem] w-full sm:h-full lg:gap-[3.75rem] grid custom-grid lg:grid-cols-2 lg:grid-rows-1 p-8 sm:p-[3.125rem] rounded-[2.8125rem] bg-dark text-gray">
                    <h3 className="flex flex-col col-span-2 lg:col-span-1">
                      <span className="w-[fit-content] greenhead text-[1.75rem] font-medium">Analytics and</span>
                      <span className="w-[fit-content] greenhead text-[1.75rem] font-medium">Tracking</span>
                    </h3>
                    <picture className="w-full h-full row-span-1 order-1 lg:order-none lg:row-span-2 flex justify-center items-center">
                      <img src="/assets/service-analytics.webp" alt="Analytics" loading="lazy" className="w-[8rem] sm:w-[10rem] lg:w-[13.125rem] h-auto object-contain transition-transform duration-300 hover:scale-110" />
                    </picture>
                    <div className="flex items-end">
                      <a href="#" className="flex items-center gap-3.5 group">
                        <img src="/assets/arrow-white.svg" alt="arrow" loading="lazy" className="w-[2.5625rem] h-[2.5625rem] transition-transform duration-300 group-hover:translate-x-2 hidden sm:block" />
                        <span className="text-[1.25rem] font-normal text-white transition-colors duration-300 group-hover:text-green hidden sm:block">Learn More</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA PROPOSAL */}
        <section className="px-5 md:px-[6.25rem] flex justify-center overflow-hidden">
          <div className="w-full max-w-full mx-auto">
            <div className="rounded-[2.8125rem]">
              <div className="flex flex-col md:flex-row bg-[#F3F3F3] rounded-[2.8125rem] p-6 md:p-[3.75rem] relative mt-[7.6875rem] mb-[10.1875rem] transition-all duration-300 hover:shadow-xl">
                <div className="w-full md:w-[40%] flex flex-col gap-[1.625rem]">
                  <h2 className="text-[1.5rem] md:text-[1.875rem] font-medium">Let's make things happen</h2>
                  <p className="text-sm md:text-[1.125rem] font-normal">
                    Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
                  </p>
                  <button className="px-[2.1875rem] py-5 bg-[#191a23] hover:bg-white rounded-[0.875rem] text-white hover:text-[#191a23] text-[0.875rem] md:text-[1.25rem] font-normal w-fit border border-transparent hover:border-[#191a23] transition-all duration-300 hover:scale-105">
                    Get your free proposal
                  </button>
                </div>
                <picture className="hidden md:flex absolute right-[-10%] lg:right-0 top-[-15%] h-[28.125rem] items-center justify-center">
                  <img
                    src="/assets/cta-illustration.webp"
                    alt="This is an illustration"
                    loading="lazy"
                    className="hidden md:flex lg:h-full lg:w-auto"
                  />
                </picture>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="cases" className="px-5 md:px-[6.25rem] py-[4.375rem] flex justify-center overflow-hidden">
          <div className="w-full max-w-full mx-auto">
            <div className="flex flex-col items-center gap-10 mb-20 sm:flex-row">
              <h2 className="greenhead text-center sm:text-left text-[2rem] md:text-[2.5rem] font-medium">Case Studies</h2>
              <p className="w-auto text-center sm:text-left sm:w-[36.25rem] text-base md:text-[1.125rem] font-normal">
                Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
              </p>
            </div>

            <div className="flex flex-col lg:flex-row rounded-[2.8125rem] bg-dark transition-all duration-300 hover:shadow-xl overflow-hidden">
              {/* Primeiro card */}
              <div className="flex-1 py-[3.75rem]">
                <div className="flex px-6 md:px-[3.75rem] h-full bg-dark text-gray">
                  <div className="flex flex-col gap-5 justify-between w-full">
                    <p className="text-sm md:text-[1.125rem] font-normal">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                    <a href="#" className="flex items-center gap-[0.3125rem] group">
                      <span className="text-green text-[1rem] md:text-[1.25rem] font-normal transition-all duration-300 group-hover:translate-x-2">Learn More</span>
                      <picture>
                        <img src="/assets/arrow-green.svg" alt="Arrow" loading="lazy" className="w-[2rem] md:w-[2.5625rem] h-[2rem] md:h-[2.5625rem] transition-transform duration-300 group-hover:translate-x-2" />
                      </picture>
                    </a>
                  </div>
                </div>
              </div>

              {/* Barra divisória branca */}
              <div className="hidden lg:flex items-stretch">
                <div className="w-[0.0625rem] bg-white my-[3.75rem]"></div>
              </div>
              <div className="lg:hidden w-full h-[0.0625rem] bg-white mx-6"></div>

              {/* Segundo card */}
              <div className="flex-1 py-[3.75rem]">
                <div className="flex px-6 md:px-[3.75rem] h-full bg-dark text-gray">
                  <div className="flex flex-col gap-5 justify-between w-full">
                    <p className="text-sm md:text-[1.125rem] font-normal">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
                    <a href="#" className="flex items-center gap-[0.3125rem] group">
                      <span className="text-green text-[1rem] md:text-[1.25rem] font-normal transition-all duration-300 group-hover:translate-x-2">Learn More</span>
                      <picture>
                        <img src="/assets/arrow-green.svg" alt="Arrow" loading="lazy" className="w-[2rem] md:w-[2.5625rem] h-[2rem] md:h-[2.5625rem] transition-transform duration-300 group-hover:translate-x-2" />
                      </picture>
                    </a>
                  </div>
                </div>
              </div>

              {/* Barra divisória branca */}
              <div className="hidden lg:flex items-stretch">
                <div className="w-[0.0625rem] bg-white my-[3.75rem]"></div>
              </div>
              <div className="lg:hidden w-full h-[0.0625rem] bg-white mx-6"></div>

              {/* Terceiro card */}
              <div className="flex-1 py-[3.75rem]">
                <div className="flex px-6 md:px-[3.75rem] h-full bg-dark text-gray">
                  <div className="flex flex-col gap-5 justify-between w-full">
                    <p className="text-sm md:text-[1.125rem] font-normal">For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
                    <a href="#" className="flex items-center gap-[0.3125rem] group">
                      <span className="text-green text-[1rem] md:text-[1.25rem] font-normal transition-all duration-300 group-hover:translate-x-2">Learn More</span>
                      <picture>
                        <img src="/assets/arrow-green.svg" alt="Arrow" loading="lazy" className="w-[2rem] md:w-[2.5625rem] h-[2rem] md:h-[2.5625rem] transition-transform duration-300 group-hover:translate-x-2" />
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;