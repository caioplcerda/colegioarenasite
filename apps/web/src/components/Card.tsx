'use client';
import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Card({ title, children, className = '' }: CardProps) {
  return (
    <div className={`bg-gray-100 text-gray-900 border rounded-card p-4 shadow-brand ${className}`}>
      {title && <h2 className="font-semibold mb-2">{title}</h2>}
      {children}
    </div>
  );
}
