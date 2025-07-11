'use client';
import { ReactNode } from 'react';

interface Column {
  header: string;
  accessor: string;
}

interface TableProps<T extends Record<string, unknown>> {
  columns: Column[];
  data: T[];
}

export default function Table<T extends Record<string, unknown>>({ columns, data }: TableProps<T>) {
  return (
    <table className="min-w-full text-sm border bg-gray-100">
      <thead className="bg-brand text-white">
        <tr>
          {columns.map((c) => (
            <th key={c.accessor} className="p-2 text-left font-medium">
              {c.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="odd:bg-brand-light">
            {columns.map((c) => (
              <td key={c.accessor} className="p-2 border-t">
                {row[c.accessor] as ReactNode}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
