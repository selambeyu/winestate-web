"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <header className="fixed inset-x-0 top-0 z-50 bg-dark-blue">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <h4 className="text-gold-yellow">Win-Estate Homes</h4>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gold-yellow"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="#home"
              className="text-sm font-semibold leading-6 text-gray-100 hover:text-white"
            >
              Home
            </a>
            <a
              href="#aboutus"
              className="text-sm font-semibold leading-6 text-gray-100 hover:text-white"
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-sm font-semibold leading-6 text-gray-100 hover:text-white"
            >
              Services
            </a>
            <a
              href="#testimony"
              className="text-sm font-semibold leading-6 text-gray-100 hover:text-white"
            >
              Testimonials
            </a>
            <button className="rounded-full p-2 bg-yello-orange text-[#335782] w-32 ">
              <a
                href="#contactus"
                className="text-sm font-semibold leading-6 hover:text-white"
              >
                Contact Us
              </a>
            </button>
          </div>
        </nav>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden" role="dialog" aria-modal="true">
            <div
              className="fixed inset-0 z-50 bg-black bg-opacity-25"
              onClick={() => setMobileMenuOpen(false)}
            ></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Win-Estate Homes</span>
                  {/* Optional logo or image here */}
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <a
                      href="#home"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Home
                    </a>
                    <a
                      href="#aboutus"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About Us
                    </a>
                    <a
                      href="#services"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Services
                    </a>
                    <a
                      href="#testimony"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Testimonials
                    </a>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-full p-2 bg-yello-orange text-[#335782] w-32 "
                    >
                      <a
                        href="#contactus"
                        className="text-sm font-semibold leading-6 hover:text-white"
                      >
                        Contact Us
                      </a>
                    </button>
                    {/* <a
                      href="#contactus"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    
                    >
                      Contact Us
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
