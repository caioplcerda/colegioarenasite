'use client';
export const dynamic = 'force-dynamic';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Layout from '@/components/Layout';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/portal');
    } catch (err) {
      alert('Erro: ' + (err as Error).message);
    }
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-4">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <Input
          aria-label="Email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          aria-label="Password"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" className="w-full">
          Acessar
        </Button>
      </form>
    </Layout>
  );
}
