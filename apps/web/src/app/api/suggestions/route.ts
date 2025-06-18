import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const report = body.report as { subject: string; grade: number }[];

  const prompt = `Based on the following grades, suggest after-school tutoring topics.\n${report
    .map((r) => `${r.subject}: ${r.grade}`)
    .join('\n')}`;

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ suggestions: 'AI service unavailable' });
  }

  const json = await res.json();
  const suggestions = json.choices?.[0]?.message?.content ?? '';
  return NextResponse.json({ suggestions });
}
