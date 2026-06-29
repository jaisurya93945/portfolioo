"use client";

import Link from "next/link";

const links = [
  { name: "Journey", href: "#journey" },
  { name: "Built", href: "#built" },
  { name: "Playground", href: "#playground" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto mt-5 flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/40 px-6 py-3 backdrop-blur-xl">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.25em] text-white"
        >
          JAISURYA
        </Link>

        <nav className="hidden gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}