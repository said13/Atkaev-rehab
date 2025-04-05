"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import CartDrawer from "../cart/cart-drawer";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white py-4 border-b border-gray-100">
      <div className="boomzi-container flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl tracking-[2px] font-semibold">
            B O O M Z I
          </Link>
        </div>

        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-8 mr-4">
            <li>
              <Link
                href="/about"
                className="text-sm hover:opacity-70 transition-opacity"
              >
                О нас
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="text-sm hover:opacity-70 transition-opacity"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/vacancies"
                className="text-sm hover:opacity-70 transition-opacity"
              >
                Вакансии
              </Link>
            </li>
          </ul>

          <CartDrawer />
        </nav>

        <div className="flex items-center md:hidden">
          <CartDrawer />
          <button className="ml-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white z-40 p-4 border-b border-gray-100 md:hidden">
            <nav>
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link
                    href="/about"
                    className="text-sm hover:opacity-70 transition-opacity block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    О нас
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-sm hover:opacity-70 transition-opacity block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vacancies"
                    className="text-sm hover:opacity-70 transition-opacity block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Вакансии
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
