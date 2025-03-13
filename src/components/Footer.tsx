import Link from "next/link";
import Divider from "./Divider";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#edeae3] text-primary text-center p-6 sm:p-8 lg:p-10 overflow-x-hidden">
      {/* Decorative Elements */}
      <Image
        src="/decor/Asset6.png"
        width={500}
        height={500}
        className="absolute bottom-5 left-5 w-64 rotate-3"
        alt="Decorative Element"
      />
      <Image
        src="/decor/Asset7.png"
        width={500}
        height={500}
        className="absolute bottom-5 right-5 w-80 -rotate-3"
        alt="Decorative Element"
      />

      {/* Footer Content */}
      <div className="relative z-30 container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Column 1: Brand Name */}
          <div className="flex items-center justify-center md:justify-start">
            <h1 className="text-6xl sm:text-4xl md:text-5xl font-bold">
              Paras LED Lights
            </h1>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col items-center space-y-2 text-lg">
            <Link href="/" className="hover:underline transition">
              Home
            </Link>
            <Link href="/about" className="hover:underline transition">
              About
            </Link>
            <Link href="/products" className="hover:underline transition">
              Products
            </Link>
            <Link href="/gallery" className="hover:underline transition">
              Gallery
            </Link>
            <Link href="/contact" className="hover:underline transition">
              Contact
            </Link>
          </div>

          {/* Column 3: Marketing Locations */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">💡 Our LED Reach</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-base leading-relaxed">
              <p>Souna</p>
              <p>Mehnajpur</p>
              <p>Azamgarh</p>
              <p>Varanasi</p>
              <p>Saidpur</p>
              <p>Chandwak</p>
              <p>Lalganj</p>
            </div>
          </div>
        </div>
      </div>

      <Divider />
      {/* Copyright */}
      <p className="text-sm sm:text-base">
        &copy; 2025{" "}
        <a
          href="https://roxxoninfo.com/"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Roxxon Infotech
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
}
