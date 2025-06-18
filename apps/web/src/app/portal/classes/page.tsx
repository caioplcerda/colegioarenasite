'use client';
import data from '@/mock/classes.json';
import Card from '@/components/Card';

export default function Classes() {
  return (
    <div className="space-y-2">
      {data.map((c, i) => (
        <Card key={i} className="flex items-center justify-between">
          <span>{c.title}</span>
          <a href={c.url} aria-label={`Watch ${c.title}`} className="text-primary underline">Watch</a>
        </Card>
      ))}
    </div>
  );
}
