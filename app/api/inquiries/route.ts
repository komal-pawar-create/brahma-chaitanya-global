import { NextRequest, NextResponse } from 'next/server';
import {
  getInquiries,
  createInquiry,
  updateInquiry,
  deleteInquiry,
  getInquiryStats
} from '@/lib/inquiries';

export async function GET(request: NextRequest) {
  try {
    const inquiries = await getInquiries();
    const stats = await getInquiryStats();
    return NextResponse.json({ success: true, inquiries, stats });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch inquiries' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, product, company, destination, notes } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and phone number are required.' },
        { status: 400 }
      );
    }

    const inquiry = await createInquiry({
      name,
      email,
      phone,
      product: product || 'Green Chilli',
      company,
      destination,
      notes
    });

    return NextResponse.json({ success: true, inquiry }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create inquiry' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Inquiry ID is required' },
        { status: 400 }
      );
    }

    const updated = await updateInquiry(id, updates);
    if (!updated) {
      return NextResponse.json(
        { success: false, error: 'Inquiry not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, inquiry: updated });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to update inquiry' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Inquiry ID is required' },
        { status: 400 }
      );
    }

    const deleted = await deleteInquiry(id);
    if (!deleted) {
      return NextResponse.json(
        { success: false, error: 'Inquiry not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: 'Inquiry deleted' });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to delete inquiry' },
      { status: 500 }
    );
  }
}
