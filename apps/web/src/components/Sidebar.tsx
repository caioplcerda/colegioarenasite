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
    <nav aria-label="Portal navigation" className="w-48 bg-gray-700 text-white p-4">
      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-label={link.label}
              className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 ${
                pathname === link.href ? 'bg-brand text-white' : ''
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-current" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
