'use client';
import Link from 'next/link';
import { ReactNode } from 'react';

function TopBar() {
  return (
    <div className="h-10 bg-brand text-white text-sm flex items-center justify-center px-4">
      Fale com o Arena: (21) 0000-0000
    </div>
  );
}

function NavBar() {
  const links = [
    { href: '/portal', label: 'Portal' },
    { href: '/about', label: 'Sobre' },
  ];
  return (
    <nav className="h-[72px] bg-gray-700 text-white flex items-center justify-between px-4">
      <div className="flex items-center space-x-2">
        <svg width="40" height="40" viewBox="0 0 100 100" className="text-white">
          <rect width="100" height="100" fill="currentColor" />
        </svg>
      </div>
      <ul className="flex items-center space-x-6 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-brand flex items-center gap-1">
              {link.label}
              <span className="text-xs">\u25BC</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="font-body text-gray-900">
      <header className="sticky top-0 z-10 shadow-md">
        <TopBar />
        <NavBar />
      </header>
      <main className="max-w-7xl mx-auto p-base">{children}</main>
    </div>
  );
}
