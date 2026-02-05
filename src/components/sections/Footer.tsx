import Image from "next/image";
import { Container } from "@/components/ui/Container";

const footerLinks = {
  services: {
    title: "Services",
    links: [
      { label: "Haircuts", href: "#services" },
      { label: "Headshots", href: "#services" },
      { label: "Portrait Package", href: "#pricing" },
    ],
  },
  info: {
    title: "Info",
    links: [
      { label: "About", href: "#" },
      { label: "Location", href: "#" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
};

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-neutral-900 py-12 text-neutral-400">
      <Container>
        {/* Top Section */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Logo & Location */}
          <div className="lg:col-span-2">
            <a href="/" className="text-lg font-bold text-white">
              Haircuts & Headshots
            </a>
            <p className="mt-4 text-sm">
              Atlanta, GA
              <br />
              Westside / BeltLine-adjacent
            </p>
            <p className="mt-2 text-sm">10:00 AM – 8:00 PM</p>

            {/* QR Code */}
            <div className="mt-6 flex items-center gap-3">
              <div className="relative h-[80px] w-[80px] overflow-hidden rounded-md border border-neutral-700">
                <Image
                  src="/images/hh/thecut-qr.jpg"
                  alt="Scan to book"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div>
                <p className="text-xs font-medium text-neutral-300">Scan to book</p>
                <p className="text-xs text-neutral-500">Opens theCut</p>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-white">
              {footerLinks.services.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.services.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h3 className="font-semibold text-white">
              {footerLinks.info.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.info.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-white">
              {footerLinks.legal.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-8 sm:flex-row">
          {/* Copyright */}
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Haircuts & Headshots. All rights
            reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.tiktok.com/@haircutsandheadshots"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
              aria-label="TikTok"
            >
              <TikTokIcon />
            </a>
            <span className="text-neutral-600">
              <InstagramIcon />
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
