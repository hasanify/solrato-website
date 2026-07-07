import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-brand-dark text-white">
      {/* Top Footer Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <Image
                src="/brand/logo-white.png"
                alt="Solrato Power Logo"
                width={180}
                height={63}
                className="h-11 w-auto object-contain"
              />
            </Link>
            <p className="text-sm/relaxed text-brand-medium-gray/70">
              Specialists in advanced solar and battery energy storage systems (BESS), providing the
              critical infrastructure required to transform intermittent sunlight into constant,
              reliable power.
            </p>
          </div>

          {/* Explore Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold tracking-wide text-white">Explore</h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-brand-medium-gray/70 transition-colors hover:text-brand-coral"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="text-sm text-brand-medium-gray/70 transition-colors hover:text-brand-coral"
              >
                About Us
              </Link>
              <Link
                href="/products"
                className="text-sm text-brand-medium-gray/70 transition-colors hover:text-brand-coral"
              >
                Products
              </Link>
              <Link
                href="/case-studies"
                className="text-sm text-brand-medium-gray/70 transition-colors hover:text-brand-coral"
              >
                Case Studies
              </Link>
              <Link
                href="/services"
                className="text-sm text-brand-medium-gray/70 transition-colors hover:text-brand-coral"
              >
                Services
              </Link>
              <Link
                href="/partner-with-us"
                className="text-sm text-brand-medium-gray/70 transition-colors hover:text-brand-coral"
              >
                Partner With Us
              </Link>
            </nav>
          </div>

          {/* Products Categories */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold tracking-wide text-white">Products</h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/inverters"
                className="text-sm text-brand-medium-gray/70 transition-colors hover:text-brand-coral"
              >
                Solar Hybrid Inverters
              </Link>
              <Link
                href="/batteries"
                className="text-sm text-brand-medium-gray/70 transition-colors hover:text-brand-coral"
              >
                Lithium LFP Batteries
              </Link>
              <Link
                href="/bess-solution"
                className="text-sm text-brand-medium-gray/70 transition-colors hover:text-brand-coral"
              >
                BESS Container Solutions
              </Link>
            </nav>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold tracking-wide text-white">Contact Us</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-brand-coral" />
                <span className="text-sm/relaxed text-brand-medium-gray/70">
                  Solrato Power, A-09, 2nd Floor, Paragon Plaza, Anoopshahar Road, Aligarh, U.P,
                  India 202002
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-5 shrink-0 text-brand-coral" />
                <a
                  href="tel:+919258022447"
                  className="text-sm text-brand-medium-gray/70 transition-colors hover:text-brand-coral"
                >
                  +91 925 8022 447
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-5 shrink-0 text-brand-coral" />
                <a
                  href="mailto:sales@solrato.in"
                  className="text-sm text-brand-medium-gray/70 transition-colors hover:text-brand-coral"
                >
                  sales@solrato.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-brand-coral" />
                <span className="text-sm text-brand-medium-gray/70">Mon - Sat, 10am - 8pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-brand-medium-gray/50">
            Copyright © {new Date().getFullYear()} Solrato Power Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-brand-medium-gray/50">
            <Link href="#" className="transition-colors hover:text-brand-coral">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-brand-coral">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
