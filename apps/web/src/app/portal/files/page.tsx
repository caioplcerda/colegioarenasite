'use client';
import data from '@/mock/files.json';
import Card from '@/components/Card';

export default function Files() {
  return (
    <div className="space-y-2">
      {data.map((f, i) => (
        <Card key={i}>{f.name}</Card>
      ))}
    </div>
  );
}
