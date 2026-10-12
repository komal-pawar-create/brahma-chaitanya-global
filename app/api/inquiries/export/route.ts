import { NextResponse } from 'next/server';
import { getInquiries } from '@/lib/inquiries';

function escapeCsv(value: string | undefined): string {
  if (!value) return '""';
  const str = String(value).replace(/"/g, '""');
  return `"${str}"`;
}

export async function GET() {
  try {
    const inquiries = await getInquiries();

    const headers = [
      'Inquiry ID',
      'Date & Time',
      'Buyer Name',
      'Company',
      'Email',
      'Phone',
      'Product',
      'Destination Port / Country',
      'Buyer Notes',
      'Status',
      'Internal Notes'
    ];

    const rows = inquiries.map((inq) => [
      escapeCsv(inq.id),
      escapeCsv(new Date(inq.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })),
      escapeCsv(inq.name),
      escapeCsv(inq.company || '-'),
      escapeCsv(inq.email),
      escapeCsv(inq.phone),
      escapeCsv(inq.product),
      escapeCsv(inq.destination || '-'),
      escapeCsv(inq.notes || '-'),
      escapeCsv(inq.status.toUpperCase()),
      escapeCsv(inq.notesInternal || '-')
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.join(','))
    ].join('\r\n');

    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="brahma_chaitanya_inquiries_${new Date().toISOString().slice(0, 10)}.csv"`
      }
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: 'Failed to generate CSV' },
      { status: 500 }
    );
  }
}
