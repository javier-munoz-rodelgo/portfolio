"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx"; // Opcional para gestionar clases condicionales

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Nombre */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight hover:text-gray-700"
        >
          Javier Muñoz
        </Link>

        {/* Navegación */}
        <ul className="flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={clsx(
                  "transition-colors hover:text-gray-800",
                  pathname === item.href
                    ? "text-gray-900 font-semibold"
                    : "text-gray-500"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
