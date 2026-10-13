'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import {
  Mail, Phone, MapPin, Send, Globe, MessageSquare,
  CheckCircle2, Loader2, MessageCircle, Clock, Shield,
  ArrowRight, Building2, Package, Star, Ship, Plane, Anchor
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { products, getLocalizedProduct } from '@/data/products';
import { Inquiry } from '@/types/inquiry';

/* ─── Contact Form (needs Suspense for useSearchParams) ───────────────────── */
function ContactFormInner() {
  const { language, t } = useLanguage();
  const searchParams = useSearchParams();

  const [name,            setName]            = useState('');
  const [company,         setCompany]         = useState('');
  const [email,           setEmail]           = useState('');
  const [phone,           setPhone]           = useState('');
  const [selectedProduct, setSelectedProduct] = useState('Green Chilli');
  const [destination,     setDestination]     = useState('');
  const [notes,           setNotes]           = useState('');

  const [isSubmitting,     setIsSubmitting]     = useState(false);
  const [errorMessage,     setErrorMessage]     = useState<string | null>(null);
  const [submittedInquiry, setSubmittedInquiry] = useState<Inquiry | null>(null);

  useEffect(() => {
    const prodParam = searchParams.get('product');
    if (prodParam) setSelectedProduct(prodParam);
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, company, email, phone, product: selectedProduct, destination, notes }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.error || 'Failed to submit inquiry. Please try again.');
      setSubmittedInquiry(data.inquiry);
      setName(''); setCompany(''); setEmail(''); setPhone(''); setDestination(''); setNotes('');
    } catch (err: any) {
      setErrorMessage(err.message || 'Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppLink = (inq: Inquiry) => {
    const text = encodeURIComponent(
      `Hello Brahma Chaitanya Global,\n\nI have submitted an export inquiry (Reference: ${inq.id}).\n\n*Product:* ${inq.product}\n*Name:* ${inq.name}\n*Company:* ${inq.company || 'N/A'}\n*Destination:* ${inq.destination || 'N/A'}\n\nPlease share export quotation and availability.`
    );
    return `https://wa.me/919850153181?text=${text}`;
  };

  const inputCls =
    'w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-brand-teal-600 focus:ring-1 focus:ring-brand-teal-600 outline-none text-sm bg-slate-50/50 transition-all';
  const labelCls = 'block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5';

  return (
    <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="w-5 h-5 text-brand-teal-600" />
        <h3 className="text-xl font-bold text-brand-navy-900">{t.contact.formTitle}</h3>
      </div>

      {submittedInquiry ? (
        <div className="p-8 bg-emerald-50/80 border border-emerald-200 rounded-2xl text-center space-y-4">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <span className="text-xs font-mono font-semibold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
              Reference: {submittedInquiry.id}
            </span>
            <h4 className="font-bold text-brand-navy-900 text-xl mt-3">{t.contact.inquiryRecorded}</h4>
            <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">{t.contact.inquiryRecordedDesc}</p>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getWhatsAppLink(submittedInquiry)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Instant Quote on WhatsApp (+91 9850153181)</span>
            </a>
            <button
              onClick={() => setSubmittedInquiry(null)}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors"
            >
              {t.contact.sendAnother}
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {errorMessage && (
            <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs font-medium">
              {errorMessage}
            </div>
          )}

          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelCls}>
                {t.contact.nameLabel} <span className="text-rose-500">*</span>
              </label>
              <input
                type="text" required value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputCls}
              />
            </div>
            <div>
              <label className={labelCls}>
                {language === 'hi' ? 'कंपनी का नाम' : language === 'mr' ? 'कंपनीचे नाव' : 'Company Name'}
              </label>
              <input
                type="text" value={company}
                onChange={(e) => setCompany(e.target.value)}
                className={inputCls}
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelCls}>
                {t.contact.emailLabel} <span className="text-rose-500">*</span>
              </label>
              <input
                type="email" required value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputCls}
              />
            </div>
            <div>
              <label className={labelCls}>
                {language === 'hi' ? 'फ़ोन / मोबाइल' : language === 'mr' ? 'फोन / मोबाईल' : 'Phone / Mobile'}{' '}
                <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel" required value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputCls}
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelCls}>{t.contact.productLabel}</label>
              <select
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                className={inputCls}
              >
                {products.map((p) => {
                  const localized = getLocalizedProduct(p, language);
                  return <option key={p.name} value={p.name}>{localized.name}</option>;
                })}
                <option value="Multiple Products">
                  {language === 'hi' ? 'अनेक उत्पाद (Multiple Products)'
                    : language === 'mr' ? 'एकापेक्षा जास्त उत्पादने (Multiple Products)'
                    : language === 'ar' ? 'منتجات متعددة (Multiple Products)'
                    : language === 'ms' ? 'Pelbagai Produk (Multiple Products)'
                    : language === 'vi' ? 'Nhiều Sản Phẩm (Multiple Products)'
                    : language === 'ne' ? 'धेरै उत्पादनहरू (Multiple Products)'
                    : language === 'si' ? 'විවිධ නිෂ්පාදන (Multiple Products)'
                    : 'Multiple Products'}
                </option>
              </select>
            </div>
            <div>
              <label className={labelCls}>{t.contact.destLabel}</label>
              <input
                type="text" value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className={inputCls}
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className={labelCls}>{t.contact.notesLabel}</label>
            <textarea
              rows={4} value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className={`${inputCls} resize-none`}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-navy-900 hover:bg-brand-navy-800 disabled:opacity-60 text-white font-bold text-sm uppercase tracking-wider border border-brand-gold-500/40 shadow-md hover:shadow-lg transition-all"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 text-brand-gold-400 animate-spin" />
                <span>Recording Export Inquiry…</span>
              </>
            ) : (
              <>
                <span>{t.contact.submitBtn}</span>
                <Send className="w-4 h-4 text-brand-gold-400" />
              </>
            )}
          </button>

          <p className="text-[11px] text-slate-400 text-center">
            Inquiries are securely logged to the Brahma Chaitanya Global Export Registry.
          </p>
        </form>
      )}
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div>
      <div className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle={t.contact.subtitle}
          title={t.contact.title}
          description={t.contact.description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-12">

          {/* ── Left Column ── */}
          <div className="lg:col-span-5 space-y-6">

            {/* Corporate office card */}
            <div className="bg-brand-navy-900 text-white rounded-2xl p-8 border border-brand-navy-800 shadow-xl">
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-gold-400 bg-brand-navy-800 px-3 py-1 rounded-full border border-brand-gold-500/30 inline-flex items-center gap-1.5">
                <Building2 className="w-3 h-3" />
                {t.contact.corporateOffice}
              </span>
              <h3 className="text-2xl font-bold text-white mt-4 mb-1">
                {t.nav.brandName} {t.nav.brandTag}
              </h3>
              <p className="text-sm text-slate-300 font-medium tracking-wide uppercase">
                {t.contact.brandTag}
              </p>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {t.contact.shortDesc}
              </p>

              <div className="mt-8 space-y-5">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy-800 border border-brand-gold-500/30 flex items-center justify-center flex-shrink-0 text-brand-gold-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold">
                      {t.contact.regAddress}
                    </span>
                    <span className="text-sm font-semibold text-slate-100 inline-block mt-1">
                      Sangamner, Maharashtra, India
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy-800 border border-brand-gold-500/30 flex items-center justify-center flex-shrink-0 text-brand-gold-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold">
                      {t.contact.phoneWhatsApp}
                    </span>
                    <div className="flex items-center gap-3 mt-1">
                      <a
                        href="tel:+919850153181"
                        className="text-sm font-semibold text-slate-100 hover:text-brand-gold-400 transition-colors"
                      >
                        +91 9850153181
                      </a>
                      <a
                        href="https://wa.me/919850153181"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2 py-0.5 rounded-full hover:bg-emerald-900/60 transition-colors"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy-800 border border-brand-gold-500/30 flex items-center justify-center flex-shrink-0 text-brand-gold-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold">
                      {t.contact.officialEmail}
                    </span>
                    <a
                      href="mailto:brahmachaitanyag@gmail.com"
                      className="text-sm font-semibold text-slate-100 hover:text-brand-gold-400 transition-colors inline-block mt-1 break-all"
                    >
                      brahmachaitanyag@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Response time */}
              <div className="mt-7 pt-6 border-t border-white/10 flex items-center gap-3 text-slate-400">
                <Clock className="w-4 h-4 text-brand-teal-400 flex-shrink-0" />
                <p className="text-xs leading-relaxed">
                  We typically respond within <span className="text-white font-semibold">24 business hours</span>.
                </p>
              </div>
            </div>

            {/* Global trade note */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 text-slate-700 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <Globe className="w-5 h-5 text-brand-teal-600" />
                <h4 className="font-bold text-sm text-brand-navy-900">{t.contact.globalTradeTitle}</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{t.contact.globalTradeDesc}</p>
              <a
                href="/products"
                className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-brand-teal-600 hover:text-brand-teal-800 transition-colors"
              >
                Browse our products
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Departure Hubs & Freight Ports Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 text-slate-700 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <Anchor className="w-5 h-5 text-brand-gold-600" />
                <h4 className="font-bold text-sm text-brand-navy-900">Departure Hubs & Logistics</h4>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <Ship className="w-4 h-4 text-brand-teal-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 block">Sea Freight Terminal</span>
                    <span className="text-slate-500">Jawaharlal Nehru Port Trust (JNPT / Nhava Sheva), Navi Mumbai</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Plane className="w-4 h-4 text-brand-teal-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 block">Air Cargo Terminal</span>
                    <span className="text-slate-500">Chhatrapati Shivaji Maharaj International Airport (BOM), Mumbai</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Standard Incoterms:</span>
                <span className="font-bold text-brand-navy-900">FOB, CIF, CFR</span>
              </div>
            </div>
          </div>

          {/* ── Right Column: Form ── */}
          <div className="lg:col-span-7">
            <Suspense fallback={
              <div className="p-8 text-center text-slate-500">
                <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2 text-brand-teal-500" />
                Loading form…
              </div>
            }>
              <ContactFormInner />
            </Suspense>
          </div>
        </div>
      </div>
    </div>

      <CTASection
        title="Explore Our Agricultural Export Products"
        description="Check product specifications, varieties, and packaging configurations available for global shipment."
        secondaryHref="/packaging"
        secondaryText="Packaging Specs"
      />
    </div>
  );
}
