"use client";

import { Battery, ChevronDown, Cpu, Menu, Server, Sun, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsProductsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-medium-gray/10 bg-white/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
              <Image
                src="/brand/logo-color.png"
                alt="Solrato Power Logo"
                width={160}
                height={56}
                className="h-10 w-auto object-contain transition-transform hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-brand-dark-gray transition-colors hover:text-brand-purple"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-sm font-medium text-brand-dark-gray transition-colors hover:text-brand-purple"
            >
              About Us
            </Link>

            {/* Products Dropdown */}
            <div className="group relative">
              <button
                className="flex items-center gap-1 text-sm font-medium text-brand-dark-gray transition-colors hover:text-brand-purple focus:outline-none"
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                onMouseEnter={() => setIsProductsOpen(true)}
              >
                Products
                <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
              </button>

              <div
                className={`absolute left-0 mt-2 w-64 rounded-xl border border-brand-medium-gray/10 bg-white p-2 shadow-xl transition-all duration-200 ${
                  isProductsOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible translate-y-1 opacity-0 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
                }`}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <Link
                  href="/products"
                  className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-brand-light-gray"
                  onClick={closeMenu}
                >
                  <Sun className="size-5 text-brand-purple" />
                  <div>
                    <div className="text-xs font-semibold text-brand-dark">All Products</div>
                    <div className="text-xs text-brand-dark-gray/70">
                      Overview of our energy stack
                    </div>
                  </div>
                </Link>
                <Link
                  href="/inverters"
                  className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-brand-light-gray"
                  onClick={closeMenu}
                >
                  <Cpu className="size-5 text-brand-purple" />
                  <div>
                    <div className="text-xs font-semibold text-brand-dark">Solar Inverters</div>
                    <div className="text-xs text-brand-dark-gray/70">
                      Hybrid & On-Grid inverters
                    </div>
                  </div>
                </Link>
                <Link
                  href="/batteries"
                  className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-brand-light-gray"
                  onClick={closeMenu}
                >
                  <Battery className="size-5 text-brand-purple" />
                  <div>
                    <div className="text-xs font-semibold text-brand-dark">LFP Batteries</div>
                    <div className="text-xs text-brand-dark-gray/70">
                      Scalable storage solutions
                    </div>
                  </div>
                </Link>
                <Link
                  href="/bess-solution"
                  className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-brand-light-gray"
                  onClick={closeMenu}
                >
                  <Server className="size-5 text-brand-purple" />
                  <div>
                    <div className="text-xs font-semibold text-brand-dark">BESS Containers</div>
                    <div className="text-xs text-brand-dark-gray/70">
                      Utility-grade grid storage
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <Link
              href="/case-studies"
              className="text-sm font-medium text-brand-dark-gray transition-colors hover:text-brand-purple"
            >
              Case Studies
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-brand-dark-gray transition-colors hover:text-brand-purple"
            >
              Services
            </Link>
            <Link
              href="/partner-with-us"
              className="inline-flex items-center justify-center rounded-full bg-brand-purple px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-brand-purple-hover hover:shadow-lg active:scale-95"
            >
              Partner With Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-lg p-2 text-brand-dark-gray transition-colors hover:bg-brand-light-gray hover:text-brand-purple focus:outline-none"
            >
              {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs transform border-l border-brand-medium-gray/10 bg-white shadow-2xl transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-brand-medium-gray/10 px-6">
          <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
            <Image
              src="/brand/logo-color.png"
              alt="Solrato Power Logo"
              width={130}
              height={46}
              className="h-8 w-auto object-contain"
            />
          </Link>
          <button
            onClick={closeMenu}
            className="rounded-lg p-2 text-brand-dark-gray transition-colors hover:bg-brand-light-gray hover:text-brand-purple focus:outline-none"
          >
            <X className="size-6" />
          </button>
        </div>

        <div className="flex h-mobile-height flex-col gap-6 overflow-y-auto px-6 py-8">
          <Link
            href="/"
            className="text-base font-semibold text-brand-dark transition-colors hover:text-brand-purple"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="text-base font-semibold text-brand-dark transition-colors hover:text-brand-purple"
            onClick={closeMenu}
          >
            About Us
          </Link>

          {/* Products Accordion for Mobile */}
          <div className="flex flex-col">
            <button
              className="flex items-center justify-between text-base font-semibold text-brand-dark transition-colors hover:text-brand-purple focus:outline-none"
              onClick={() => setIsProductsOpen(!isProductsOpen)}
            >
              Products
              <ChevronDown
                className={`size-5 transition-transform ${isProductsOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`mt-3 flex flex-col gap-3 overflow-hidden border-l-2 border-brand-purple/10 pl-4 transition-all ${isProductsOpen ? "max-h-60" : "max-h-0"}`}
            >
              <Link
                href="/products"
                className="py-1 text-sm text-brand-dark-gray transition-colors hover:text-brand-purple"
                onClick={closeMenu}
              >
                All Products
              </Link>
              <Link
                href="/inverters"
                className="py-1 text-sm text-brand-dark-gray transition-colors hover:text-brand-purple"
                onClick={closeMenu}
              >
                Solar Inverters
              </Link>
              <Link
                href="/batteries"
                className="py-1 text-sm text-brand-dark-gray transition-colors hover:text-brand-purple"
                onClick={closeMenu}
              >
                LFP Batteries
              </Link>
              <Link
                href="/bess-solution"
                className="py-1 text-sm text-brand-dark-gray transition-colors hover:text-brand-purple"
                onClick={closeMenu}
              >
                BESS Containers
              </Link>
            </div>
          </div>

          <Link
            href="/case-studies"
            className="text-base font-semibold text-brand-dark transition-colors hover:text-brand-purple"
            onClick={closeMenu}
          >
            Case Studies
          </Link>
          <Link
            href="/services"
            className="text-base font-semibold text-brand-dark transition-colors hover:text-brand-purple"
            onClick={closeMenu}
          >
            Services
          </Link>

          <Link
            href="/partner-with-us"
            className="mt-4 flex items-center justify-center rounded-xl bg-brand-purple py-3 text-base font-semibold text-white transition-colors hover:bg-brand-purple-hover"
            onClick={closeMenu}
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </header>
  );
};
