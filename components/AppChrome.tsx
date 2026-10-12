'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnquiryButton from '@/components/EnquiryButton';
import FloatingLanguagePill from '@/components/FloatingLanguagePill';

export default function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return <main className="min-h-screen bg-slate-900">{children}</main>;
  }

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <EnquiryButton />
      <FloatingLanguagePill />
    </>
  );
}
