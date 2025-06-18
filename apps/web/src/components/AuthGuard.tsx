'use client';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';

export function withAuthGuard(Component: React.ComponentType<any>) {
  return function Guarded(props: any) {
    const router = useRouter();
    const [allowed, setAllowed] = useState(false);

    useEffect(() => {
      const unsub = onAuthStateChanged(auth, (user) => {
        if (!user) router.replace('/login');
        else setAllowed(true);
      });
      return () => unsub();
    }, [router]);

    if (!allowed) return null;
    return <Component {...props} />;
  };
}
