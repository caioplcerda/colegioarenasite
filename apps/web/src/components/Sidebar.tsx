'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/portal', label: 'Dashboard' },
  { href: '/portal/schedules', label: 'Schedules' },
  { href: '/portal/classes', label: 'Classes' },
  { href: '/portal/files', label: 'Files' },
  { href: '/portal/notices', label: 'Notices' },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <nav aria-label="Portal navigation" className="w-48 p-4 border-r">
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-label={link.label}
              className={`block px-3 py-2 rounded-md hover:bg-gray-100 ${
                pathname === link.href ? 'bg-[rgb(var(--color-primary))] text-white' : ''
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
