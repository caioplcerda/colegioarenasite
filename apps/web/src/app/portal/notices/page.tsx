'use client';
import data from '@/mock/notices.json';
import Card from '@/components/Card';

export default function Notices() {
  return (
    <div className="space-y-2">
      {data.map((n, i) => (
        <Card key={i}>{n.text}</Card>
      ))}
    </div>
  );
}
