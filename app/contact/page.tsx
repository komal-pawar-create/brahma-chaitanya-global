'use client';

import React, { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import { Mail, Phone, MapPin, Send, Globe, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Get in Touch"
          title="Export Inquiry &amp; Contact Desk"
          description="Send us your product inquiries, export volume requirements, and destination port details."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-12">
          {/* Left Column: Official Contact Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-navy-900 text-white rounded-2xl p-8 border border-brand-navy-800 shadow-xl">
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-gold-400 bg-brand-navy-800 px-3 py-1 rounded-full border border-brand-gold-500/30">
                Corporate Office
              </span>
              <h3 className="text-2xl font-bold text-white mt-4 mb-2">
                Brahma Chaitanya Global
              </h3>
              <p className="text-sm text-slate-300 font-medium tracking-wide">
                IMPORT | EXPORT
              </p>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Agricultural products supplier and international exporter.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy-800 border border-brand-gold-500/30 flex items-center justify-center flex-shrink-0 text-brand-gold-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold">
                      Registered Address
                    </span>
                    <span className="text-sm font-mono text-slate-200 bg-brand-navy-800/80 px-2 py-0.5 rounded border border-brand-navy-700 inline-block mt-1">
                      [COMPANY ADDRESS]
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy-800 border border-brand-gold-500/30 flex items-center justify-center flex-shrink-0 text-brand-gold-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold">
                      Telephone / WhatsApp
                    </span>
                    <span className="text-sm font-mono text-slate-200 bg-brand-navy-800/80 px-2 py-0.5 rounded border border-brand-navy-700 inline-block mt-1">
                      [PHONE NUMBER]
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy-800 border border-brand-gold-500/30 flex items-center justify-center flex-shrink-0 text-brand-gold-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold">
                      Official Export Email
                    </span>
                    <span className="text-sm font-mono text-slate-200 bg-brand-navy-800/80 px-2 py-0.5 rounded border border-brand-navy-700 inline-block mt-1">
                      [EMAIL ADDRESS]
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 text-slate-700 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <Globe className="w-5 h-5 text-brand-teal-600" />
                <h4 className="font-bold text-sm text-brand-navy-900">
                  Global Trade Operations
                </h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Inquiries are processed by our export documentation and dispatch department. Please include product type, grading preference, and destination port.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form UI Scaffold */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-md">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-brand-teal-600" />
                <h3 className="text-xl font-bold text-brand-navy-900">
                  Export Inquiry Form
                </h3>
              </div>

              {submitted ? (
                <div className="p-6 bg-brand-teal-50 border border-brand-teal-200 rounded-xl text-center space-y-2">
                  <h4 className="font-bold text-brand-navy-900 text-lg">
                    Inquiry Recorded
                  </h4>
                  <p className="text-sm text-slate-600">
                    Thank you. Backend submission integration will be connected in subsequent phases.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 text-xs font-semibold text-brand-teal-700 underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Name / Company
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Importer or Company Name"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-brand-teal-600 focus:ring-1 focus:ring-brand-teal-600 outline-none text-sm bg-slate-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="buyer@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-brand-teal-600 focus:ring-1 focus:ring-brand-teal-600 outline-none text-sm bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        Product of Interest
                      </label>
                      <select
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-brand-teal-600 focus:ring-1 focus:ring-brand-teal-600 outline-none text-sm bg-slate-50/50"
                      >
                        <option value="Green Chilli">Green Chilli (G4 / G5 / Long / Medium / Hybrid / Hot)</option>
                        <option value="Onion">Onion</option>
                        <option value="Potato">Potato</option>
                        <option value="Tomato">Tomato</option>
                        <option value="Moringa Powder">Moringa Powder</option>
                        <option value="Mushroom Powder">Mushroom Powder</option>
                        <option value="Multiple Products">Multiple Products</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        Destination Country / Port
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Dubai, Jebel Ali / Singapore / Rotterdam"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-brand-teal-600 focus:ring-1 focus:ring-brand-teal-600 outline-none text-sm bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Required Quantity &amp; Packaging Notes
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Specify volume requirements, container size, target delivery schedule, or packaging preferences..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-brand-teal-600 focus:ring-1 focus:ring-brand-teal-600 outline-none text-sm bg-slate-50/50"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-navy-900 hover:bg-brand-navy-800 text-white font-bold text-sm uppercase tracking-wider border border-brand-gold-500/40 shadow-md hover:shadow-lg transition-all"
                  >
                    <span>Submit Export Inquiry</span>
                    <Send className="w-4 h-4 text-brand-gold-400" />
                  </button>
                  <p className="text-[11px] text-slate-400 text-center">
                    Note: Form submission is currently a demonstration frontend scaffold.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
