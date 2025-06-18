'use client';
import schedule from '@/mock/schedules.json';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function Schedules() {
  return (
    <div className="space-y-2">
      {schedule.map((s, i) => (
        <Card key={i} className="flex items-center justify-between">
          <span>{s.day} - {s.time}</span>
          <Button aria-label={`Book ${s.day}`}>Book</Button>
        </Card>
      ))}
    </div>
  );
}
