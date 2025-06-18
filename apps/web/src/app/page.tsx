import Link from 'next/link';
import Button from '@/components/Button';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Colégio Arena</h1>
      <div className="flex gap-4">
        <Link href="/portal" aria-label="Portal">
          <Button>Portal</Button>
        </Link>
        <Link href="/about" aria-label="About">
          <Button>About</Button>
        </Link>
      </div>
    </Layout>
  );
}
