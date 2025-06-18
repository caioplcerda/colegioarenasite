'use client';
import { InputHTMLAttributes } from 'react';

export default function Input({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] ${className}`}
    />
  );
}
