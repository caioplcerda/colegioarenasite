'use client';
import { InputHTMLAttributes } from 'react';

export default function Input({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full border border-gray-700 rounded-card px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-3 ${className}`}
    />
  );
}
