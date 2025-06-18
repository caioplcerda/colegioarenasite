'use client';
import { useEffect, useState } from 'react';
import Table from '@/components/Table';
import Card from '@/components/Card';
import reportData from '@/mock/reportCard.json' assert { type: 'json' };
interface ReportItem { subject: string; grade: number }

interface Suggestion {
  suggestions: string;
}

const report = reportData as ReportItem[];

export default function Dashboard() {
  const [ai, setAi] = useState<Suggestion | null>(null);

  useEffect(() => {
    async function getAI() {
      try {
        const res = await fetch('/api/suggestions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ report }),
        });
        const data = await res.json();
        setAi(data);
      } catch {
        setAi({ suggestions: 'AI error' });
      }
    }
    getAI();
  }, []);

  const columns = [
    { header: 'Subject', accessor: 'subject' },
    { header: 'Grade', accessor: 'grade' },
  ];

  return (
    <div className="space-y-4">
      <Table columns={columns} data={report as any[]} />
      {ai && <Card title="Tutoring Suggestions">{ai.suggestions}</Card>}
    </div>
  );
}
