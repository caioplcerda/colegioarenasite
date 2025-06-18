'use client';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="max-w-4xl mx-auto p-base">{children}</div>;
}
