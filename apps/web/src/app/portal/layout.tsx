'use client';
import { ReactNode } from 'react';
import Sidebar from '@/components/Sidebar';
import { withAuthGuard } from '@/components/AuthGuard';

function PortalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-base">{children}</div>
    </div>
  );
}

export default withAuthGuard(PortalLayout);
