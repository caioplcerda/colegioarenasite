'use client';
import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Card({ title, children, className = '' }: CardProps) {
  return (
    <div className={`bg-background text-foreground border rounded-md p-4 shadow ${className}`}> 
      {title && <h2 className="font-semibold mb-2">{title}</h2>}
      {children}
    </div>
  );
}
