'use client';
import { ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'ghost' | 'dark';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export default function Button({ variant = 'primary', className = '', ...props }: Props) {
  const base = 'px-4 py-2 rounded-btn font-medium transition-colors';
  const variants: Record<Variant, string> = {
    primary: 'bg-brand text-white hover:bg-brand-2 focus:ring-brand-3',
    ghost: 'border border-brand text-brand hover:bg-brand-light focus:ring-brand-3',
    dark: 'bg-gray-700 text-white hover:bg-gray-800 focus:ring-brand-3',
  };
  return (
    <button
      {...props}
      className={`${base} ${variants[variant]} focus:outline-none focus:ring-2 ${className}`}
    />
  );
}
