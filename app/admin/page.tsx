'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Shield,
  Lock,
  Unlock,
  RefreshCw,
  Download,
  Search,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  MapPin,
  Package,
  Building,
  CheckCircle,
  AlertCircle,
  FileText,
  Trash2,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Inbox,
  Filter,
  Plus,
  X,
  Save,
  Check,
  Edit3,
  AlertTriangle,
  LayoutGrid,
  List,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  User,
  Calendar,
  Globe2
} from 'lucide-react';
import { Inquiry, InquiryStats, InquiryStatus } from '@/types/inquiry';
import { products } from '@/data/products';

export default function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState('');
  const [authError, setAuthError] = useState('');

  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [stats, setStats] = useState<InquiryStats | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  // View Mode: 'table' or 'cards'
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | InquiryStatus>('all');
  const [productFilter, setProductFilter] = useState<string>('all');

  // Manual Add Modal
  const [showAddModal, setShowAddModal] = useState(false);
  const [newInqName, setNewInqName] = useState('');
  const [newInqCompany, setNewInqCompany] = useState('');
  const [newInqEmail, setNewInqEmail] = useState('');
  const [newInqPhone, setNewInqPhone] = useState('');
  const [newInqProduct, setNewInqProduct] = useState('Green Chilli');
  const [newInqDest, setNewInqDest] = useState('');
  const [newInqNotes, setNewInqNotes] = useState('');
  const [isAddingInq, setIsAddingInq] = useState(false);

  // Edit Customer Modal State
  const [editingInquiry, setEditingInquiry] = useState<Inquiry | null>(null);
  const [editName, setEditName] = useState('');
  const [editCompany, setEditCompany] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editPhone, setEditPhone] = useState('');
  const [editProduct, setEditProduct] = useState('Green Chilli');
  const [editDest, setEditDest] = useState('');
  const [editNotes, setEditNotes] = useState('');
  const [editStatus, setEditStatus] = useState<InquiryStatus>('new');
  const [editNotesInternal, setEditNotesInternal] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  // Delete Confirmation Modal State
  const [deletingInquiry, setDeletingInquiry] = useState<Inquiry | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Selected Inquiry Drawer (View Details)
  const [detailInquiry, setDetailInquiry] = useState<Inquiry | null>(null);

  // Active inline notes editor
  const [editingNotesId, setEditingNotesId] = useState<string | null>(null);
  const [tempNotesText, setTempNotesText] = useState('');

  // Check login session on mount
  useEffect(() => {
    const savedAuth = localStorage.getItem('bcg_admin_auth');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      pinInput.trim() === '9850' ||
      pinInput.trim() === '9850153181' ||
      pinInput.trim() === 'admin123' ||
      pinInput.trim() === 'admin'
    ) {
      setIsAuthenticated(true);
      setAuthError('');
      localStorage.setItem('bcg_admin_auth', 'true');
    } else {
      setAuthError('Invalid Admin PIN. Please try again.');
    }
  };

  const handleLogout = () => {
    if (confirm('Are you sure you want to log out from the Admin Desk?')) {
      setIsAuthenticated(false);
      localStorage.removeItem('bcg_admin_auth');
      setPinInput('');
    }
  };

  // Load inquiries
  const fetchInquiries = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch('/api/inquiries');
      const data = await res.json();
      if (data.success) {
        setInquiries(data.inquiries || []);
        setStats(data.stats || null);
      }
    } catch (err) {
      console.error('Failed to load inquiries:', err);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchInquiries();
    }
  }, [isAuthenticated]);

  // Update status quick dropdown
  const handleStatusChange = async (id: string, newStatus: InquiryStatus) => {
    try {
      const res = await fetch('/api/inquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus })
      });
      const data = await res.json();
      if (data.success) {
        setInquiries((prev) =>
          prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
        );
        fetchInquiries();
      }
    } catch (err) {
      console.error('Failed to update status', err);
    }
  };

  // Save inline internal notes
  const handleSaveInternalNotes = async (id: string) => {
    try {
      const res = await fetch('/api/inquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, notesInternal: tempNotesText })
      });
      const data = await res.json();
      if (data.success) {
        setInquiries((prev) =>
          prev.map((item) => (item.id === id ? { ...item, notesInternal: tempNotesText } : item))
        );
        setEditingNotesId(null);
      }
    } catch (err) {
      console.error('Failed to save internal note', err);
    }
  };

  // Open Edit Customer Modal
  const openEditCustomerModal = (inq: Inquiry) => {
    setEditingInquiry(inq);
    setEditName(inq.name);
    setEditCompany(inq.company || '');
    setEditEmail(inq.email);
    setEditPhone(inq.phone);
    setEditProduct(inq.product);
    setEditDest(inq.destination || '');
    setEditNotes(inq.notes || '');
    setEditStatus(inq.status);
    setEditNotesInternal(inq.notesInternal || '');
  };

  // Save Customer Edits
  const handleSaveCustomerEdits = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingInquiry) return;
    setIsUpdating(true);

    try {
      const res = await fetch('/api/inquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: editingInquiry.id,
          name: editName,
          company: editCompany,
          email: editEmail,
          phone: editPhone,
          product: editProduct,
          destination: editDest,
          notes: editNotes,
          status: editStatus,
          notesInternal: editNotesInternal
        })
      });

      const data = await res.json();
      if (data.success) {
        setInquiries((prev) =>
          prev.map((item) => (item.id === editingInquiry.id ? data.inquiry : item))
        );
        setEditingInquiry(null);
        fetchInquiries();
      } else {
        alert(data.error || 'Failed to update customer details.');
      }
    } catch (err) {
      console.error('Failed to update customer', err);
      alert('Error updating customer details. Please try again.');
    } finally {
      setIsUpdating(false);
    }
  };

  // Open Delete Confirmation Modal
  const openDeleteModal = (inq: Inquiry) => {
    setDeletingInquiry(inq);
  };

  // Confirm Delete
  const handleConfirmDelete = async () => {
    if (!deletingInquiry) return;
    setIsDeleting(true);

    try {
      const res = await fetch(`/api/inquiries?id=${deletingInquiry.id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setInquiries((prev) => prev.filter((item) => item.id !== deletingInquiry.id));
        setDeletingInquiry(null);
        fetchInquiries();
      } else {
        alert(data.error || 'Failed to delete customer record.');
      }
    } catch (err) {
      console.error('Failed to delete customer', err);
      alert('Error deleting customer record.');
    } finally {
      setIsDeleting(false);
    }
  };

  // Create manual inquiry
  const handleAddManualInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAddingInq(true);
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newInqName,
          company: newInqCompany,
          email: newInqEmail,
          phone: newInqPhone,
          product: newInqProduct,
          destination: newInqDest,
          notes: newInqNotes
        })
      });
      const data = await res.json();
      if (data.success) {
        setShowAddModal(false);
        setNewInqName('');
        setNewInqCompany('');
        setNewInqEmail('');
        setNewInqPhone('');
        setNewInqDest('');
        setNewInqNotes('');
        fetchInquiries();
      }
    } catch (err) {
      console.error('Failed to create manual inquiry', err);
    } finally {
      setIsAddingInq(false);
    }
  };

  // Filtered inquiries
  const filteredInquiries = inquiries.filter((inq) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      inq.name.toLowerCase().includes(query) ||
      (inq.company && inq.company.toLowerCase().includes(query)) ||
      inq.email.toLowerCase().includes(query) ||
      inq.phone.toLowerCase().includes(query) ||
      inq.product.toLowerCase().includes(query) ||
      (inq.destination && inq.destination.toLowerCase().includes(query)) ||
      inq.id.toLowerCase().includes(query);

    const matchesStatus = statusFilter === 'all' || inq.status === statusFilter;
    const matchesProduct = productFilter === 'all' || inq.product === productFilter;

    return matchesSearch && matchesStatus && matchesProduct;
  });

  // Pre-fill WhatsApp message to buyer
  const getWhatsAppBuyerLink = (inq: Inquiry) => {
    const cleanPhone = inq.phone.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `Hello ${inq.name},\n\nGreetings from Brahma Chaitanya Global (Sangamner, Maharashtra, India)!\n\nRegarding your export inquiry for *${inq.product}* (Ref: ${inq.id}) to *${inq.destination || 'your destination port'}*:\n\nWe would be pleased to provide you with specifications, availability, and CIF rates. How can we assist you today?`
    );
    return `https://wa.me/${cleanPhone}?text=${text}`;
  };

  const getStatusBadge = (status: InquiryStatus) => {
    switch (status) {
      case 'new':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            NEW LEAD
          </span>
        );
      case 'contacted':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 border border-sky-300">
            CONTACTED
          </span>
        );
      case 'quoted':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-300">
            QUOTED
          </span>
        );
      case 'closed':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-200 text-slate-700 border border-slate-300">
            CLOSED / WON
          </span>
        );
      default:
        return null;
    }
  };

  // If not authenticated, render Login Gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#070e1b] flex items-center justify-center p-4 selection:bg-brand-gold-500 selection:text-brand-navy-950">
        <div className="max-w-md w-full bg-[#0d1829] rounded-3xl border border-slate-800 shadow-2xl p-8 sm:p-10 text-white relative overflow-hidden">
          {/* Subtle glow effect */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative w-20 h-20 rounded-2xl bg-white p-2 border-2 border-amber-400/60 flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Image
              src="/images/logo/logo.png"
              alt="Brahma Chaitanya Global Logo"
              fill
              sizes="80px"
              className="object-contain p-1"
              priority
            />
          </div>

          <div className="text-center mb-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-gold-400 bg-brand-gold-500/10 px-3.5 py-1.5 rounded-full border border-brand-gold-500/30 inline-block">
              SECURE ADMIN DESK
            </span>
            <h2 className="text-2xl font-extrabold mt-3 text-white tracking-tight">
              Brahma Chaitanya Global
            </h2>
            <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
              International Trade Management & Export Leads Portal
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <div className="mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Security PIN / Password
                </label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  className="w-full px-4 py-3.5 bg-[#070e1b] border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold-500 focus:ring-1 focus:ring-brand-gold-500 text-sm font-mono tracking-widest"
                  autoFocus
                />
                <Lock className="w-4 h-4 text-slate-500 absolute right-4 top-4" />
              </div>
            </div>

            {authError && (
              <div className="p-3.5 bg-rose-950/60 border border-rose-800/80 text-rose-300 rounded-xl text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-brand-gold-500 to-amber-500 hover:from-brand-gold-400 hover:to-amber-400 text-brand-navy-950 font-bold rounded-xl text-sm transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Unlock className="w-4 h-4" />
              <span>Unlock Admin Desk</span>
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-800/80 text-center">
            <Link
              href="/"
              className="text-xs text-slate-400 hover:text-slate-200 transition-colors inline-flex items-center gap-1.5"
            >
              <span>&larr; Return to Public Website</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f6f9] text-slate-900 selection:bg-brand-gold-500 selection:text-brand-navy-950">
      {/* Top Executive Header Bar - High Contrast Guaranteed */}
      <header
        style={{ backgroundColor: '#070E1B', color: '#ffffff' }}
        className="text-white border-b-2 border-amber-500/30 sticky top-0 z-30 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-white p-1 rounded-2xl border-2 border-amber-400/60 shadow-lg flex items-center justify-center flex-shrink-0">
              <Image
                src="/images/logo/logo.png"
                alt="Brahma Chaitanya Global Logo"
                fill
                sizes="56px"
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="font-black text-lg sm:text-xl text-white tracking-wide drop-shadow-sm">
                  Brahma Chaitanya Global
                </h1>
                <span
                  style={{ backgroundColor: '#D4AF37', color: '#070E1B' }}
                  className="text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md font-sans"
                >
                  EXPORT ADMIN DESK
                </span>
              </div>
              <p className="text-xs text-slate-200 font-semibold flex items-center gap-2 mt-1">
                <span className="text-slate-300">Sangamner, Maharashtra, India</span>
                <span className="text-amber-400 font-bold">&bull;</span>
                <span className="text-amber-300 font-mono font-bold tracking-wide">
                  Mobile: +91 9850153181
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Quick Add Button */}
            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl transition-all shadow-md flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Add Lead</span>
            </button>

            {/* Export CSV */}
            <a
              href="/api/inquiries/export"
              download
              style={{ backgroundColor: '#1E293B', color: '#FCD34D' }}
              className="px-3.5 py-2 hover:bg-slate-700 border border-amber-500/40 font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
              title="Download Leads Spreadsheet"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">Export Excel</span>
            </a>

            {/* Refresh */}
            <button
              onClick={fetchInquiries}
              disabled={isRefreshing}
              style={{ backgroundColor: '#1E293B' }}
              className="px-3 py-2 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs rounded-xl transition-colors flex items-center gap-1"
              title="Refresh Inquiries"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-amber-400 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span className="hidden md:inline">Refresh</span>
            </button>

            {/* Public Site Link */}
            <Link
              href="/"
              target="_blank"
              style={{ backgroundColor: '#1E293B' }}
              className="px-3 py-2 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs rounded-xl transition-colors flex items-center gap-1.5 font-medium"
            >
              <span className="hidden md:inline">Public Site</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </Link>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="px-3 py-2 text-xs text-rose-300 hover:text-white bg-rose-950/60 hover:bg-rose-900 border border-rose-800/80 rounded-xl transition-colors font-bold"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 space-y-6">
        {/* KPI Metrics Dashboard Ribbon */}
        {stats && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: Total Leads */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm relative overflow-hidden group hover:border-slate-300 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Total Leads Recorded
                </span>
                <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
                  <Inbox className="w-4 h-4" />
                </div>
              </div>
              <p className="text-3xl font-black text-slate-900 mt-2 tracking-tight">
                {stats.total}
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">Global export inquiries</p>
            </div>

            {/* Card 2: New / Action Required */}
            <div className="bg-gradient-to-br from-white to-emerald-50/50 rounded-2xl p-4 sm:p-5 border border-emerald-200/80 shadow-sm relative overflow-hidden group hover:border-emerald-300 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                  New / Action Required
                </span>
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xs">
                  {stats.newCount}
                </div>
              </div>
              <p className="text-3xl font-black text-emerald-700 mt-2 tracking-tight">
                {stats.newCount}
              </p>
              <p className="text-[11px] text-emerald-700/80 font-medium mt-0.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                Awaiting first contact
              </p>
            </div>

            {/* Card 3: In Discussion & Quoted */}
            <div className="bg-gradient-to-br from-white to-amber-50/50 rounded-2xl p-4 sm:p-5 border border-amber-200/80 shadow-sm relative overflow-hidden group hover:border-amber-300 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                  In Discussion & Quoted
                </span>
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
              <p className="text-3xl font-black text-amber-900 mt-2 tracking-tight">
                {stats.inProgress}
              </p>
              <p className="text-[11px] text-amber-700/80 font-medium mt-0.5">
                Active negotiations & quotes
              </p>
            </div>

            {/* Card 4: Top Produce Demand */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm relative overflow-hidden group hover:border-slate-300 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Top Demanded Produce
                </span>
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Package className="w-4 h-4" />
                </div>
              </div>
              <p className="text-2xl font-black text-[#0b1528] mt-2 truncate tracking-tight">
                {stats.total > 0 && stats.topProduct && stats.topProduct !== 'None' ? stats.topProduct : '—'}
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {stats.total > 0 ? 'Highest inquiry volume' : 'Awaiting inquiries'}
              </p>
            </div>
          </div>
        )}

        {/* Action Toolbar & Filters */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3.5">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search buyer name, company, email, phone, port..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-brand-teal-600 focus:bg-white transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Produce Filter Dropdown & View Mode Switcher */}
            <div className="flex items-center gap-2.5 flex-wrap justify-between md:justify-end">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-semibold hidden sm:inline">Produce:</span>
                <select
                  value={productFilter}
                  onChange={(e) => setProductFilter(e.target.value)}
                  className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 outline-none focus:border-brand-teal-600"
                >
                  <option value="all">All Produce ({inquiries.length})</option>
                  {products.map((p) => (
                    <option key={p.name} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                  <option value="Multiple Products">Multiple Products</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-semibold">
                <button
                  onClick={() => setViewMode('table')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                    viewMode === 'table'
                      ? 'bg-white text-slate-900 shadow-xs font-bold'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                  title="Switch to Data Table View"
                >
                  <List className="w-3.5 h-3.5" />
                  <span>Table View</span>
                </button>
                <button
                  onClick={() => setViewMode('cards')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                    viewMode === 'cards'
                      ? 'bg-white text-slate-900 shadow-xs font-bold'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                  title="Switch to Cards View"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Card View</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Status Filter Tabs (like modern CRM) */}
          <div className="flex items-center gap-1.5 border-t border-slate-100 pt-3 overflow-x-auto text-xs pb-1">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all ${
                statusFilter === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Inquiries ({inquiries.length})
            </button>
            <button
              onClick={() => setStatusFilter('new')}
              className={`px-3.5 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                statusFilter === 'new'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              New Leads ({inquiries.filter((i) => i.status === 'new').length})
            </button>
            <button
              onClick={() => setStatusFilter('contacted')}
              className={`px-3.5 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all ${
                statusFilter === 'contacted'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-sky-50 text-sky-800 hover:bg-sky-100'
              }`}
            >
              Contacted ({inquiries.filter((i) => i.status === 'contacted').length})
            </button>
            <button
              onClick={() => setStatusFilter('quoted')}
              className={`px-3.5 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all ${
                statusFilter === 'quoted'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
              }`}
            >
              Quoted ({inquiries.filter((i) => i.status === 'quoted').length})
            </button>
            <button
              onClick={() => setStatusFilter('closed')}
              className={`px-3.5 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all ${
                statusFilter === 'closed'
                  ? 'bg-slate-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Closed / Won ({inquiries.filter((i) => i.status === 'closed').length})
            </button>
          </div>
        </div>

        {/* Inquiries Content Area */}
        <div className="space-y-4">
          {isLoading ? (
            <div className="bg-white rounded-2xl p-14 text-center text-slate-500 border border-slate-200 shadow-sm">
              <RefreshCw className="w-7 h-7 animate-spin mx-auto text-brand-teal-600 mb-3" />
              <p className="text-sm font-semibold text-slate-700">Loading export leads...</p>
            </div>
          ) : filteredInquiries.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 sm:p-16 text-center border border-slate-200 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center mx-auto mb-4 border border-slate-200">
                <Inbox className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {searchQuery || statusFilter !== 'all' || productFilter !== 'all'
                  ? 'No Inquiries Match Filters'
                  : 'No Export Inquiries Recorded Yet'}
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 max-w-md mx-auto leading-relaxed">
                {searchQuery || statusFilter !== 'all' || productFilter !== 'all'
                  ? 'No buyer inquiries match your active search or filter selection. Try clearing your filters.'
                  : 'Customer inquiries received from the public website contact form and WhatsApp triggers will automatically appear in this registry.'}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                {searchQuery || statusFilter !== 'all' || productFilter !== 'all' ? (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setStatusFilter('all');
                      setProductFilter('all');
                    }}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition-colors"
                  >
                    Clear All Filters
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => setShowAddModal(true)}
                      className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Create New Lead</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          ) : viewMode === 'table' ? (
            /* PROFESSIONAL DATA TABLE VIEW */
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 border-b-2 border-slate-300 text-slate-800 uppercase font-black tracking-wider text-xs">
                      <th className="py-3.5 px-4">Ref & Date</th>
                      <th className="py-3.5 px-4">Customer / Buyer</th>
                      <th className="py-3.5 px-4">Produce & Port</th>
                      <th className="py-3.5 px-4">Contact Direct</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4 text-right">Quick Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {filteredInquiries.map((inq) => {
                      const dateObj = new Date(inq.createdAt);
                      const formattedDate = dateObj.toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      });
                      const formattedTime = dateObj.toLocaleTimeString('en-IN', {
                        hour: '2-digit',
                        minute: '2-digit'
                      });

                      return (
                        <tr
                          key={inq.id}
                          className="hover:bg-amber-50/40 transition-colors group cursor-pointer"
                          onClick={() => setDetailInquiry(inq)}
                        >
                          {/* Col 1: Ref & Date */}
                          <td className="py-4 px-4 align-top">
                            <span className="font-mono font-extrabold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-300 inline-block text-xs shadow-2xs">
                              {inq.id}
                            </span>
                            <div className="text-xs text-slate-600 mt-1 flex items-center gap-1 font-semibold">
                              <Clock className="w-3.5 h-3.5 text-slate-500" />
                              <span>{formattedDate}, {formattedTime}</span>
                            </div>
                          </td>

                          {/* Col 2: Buyer & Company */}
                          <td className="py-4 px-4 align-top">
                            <span className="font-black text-slate-950 text-sm block">
                              {inq.name}
                            </span>
                            {inq.company ? (
                              <span className="text-slate-700 font-semibold flex items-center gap-1 mt-0.5 text-xs">
                                <Building className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                                <span className="truncate max-w-[200px]">{inq.company}</span>
                              </span>
                            ) : (
                              <span className="text-slate-500 italic text-xs">Individual Buyer</span>
                            )}
                          </td>

                          {/* Col 3: Produce & Port */}
                          <td className="py-4 px-4 align-top">
                            <div className="flex items-center gap-1.5 font-black text-slate-900 text-xs">
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 flex-shrink-0"></span>
                              <span>{inq.product}</span>
                            </div>
                            {inq.destination ? (
                              <span className="text-slate-700 font-semibold flex items-center gap-1 mt-1 text-xs">
                                <MapPin className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                                <span className="truncate max-w-[200px]">{inq.destination}</span>
                              </span>
                            ) : (
                              <span className="text-slate-500 italic text-xs block mt-0.5">Port unstated</span>
                            )}
                          </td>

                          {/* Col 4: Phone & Email */}
                          <td className="py-4 px-4 align-top">
                            <div className="font-mono text-xs font-black text-slate-900">
                              {inq.phone}
                            </div>
                            <div className="text-slate-700 font-medium text-xs truncate max-w-[200px] mt-0.5">
                              {inq.email}
                            </div>
                          </td>

                          {/* Col 5: Status Badge */}
                          <td className="py-4 px-4 align-top">
                            {getStatusBadge(inq.status)}
                            {inq.notesInternal && (
                              <div className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 mt-1 max-w-[140px] truncate" title={inq.notesInternal}>
                                📝 {inq.notesInternal}
                              </div>
                            )}
                          </td>

                          {/* Col 6: Actions Toolbar */}
                          <td
                            className="py-4 px-4 align-top text-right"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="flex items-center justify-end gap-1.5 flex-wrap">
                              {/* WhatsApp Button */}
                              <a
                                href={getWhatsAppBuyerLink(inq)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors shadow-xs"
                                title="Chat with buyer on WhatsApp"
                              >
                                <MessageCircle className="w-3.5 h-3.5" />
                              </a>

                              {/* Call */}
                              <a
                                href={`tel:${inq.phone}`}
                                className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors border border-slate-200"
                                title="Call Buyer"
                              >
                                <Phone className="w-3.5 h-3.5" />
                              </a>

                              {/* Email */}
                              <a
                                href={`mailto:${inq.email}?subject=Brahma%20Chaitanya%20Global%20-%20Export%20Quotation%20(${encodeURIComponent(
                                  inq.product
                                )})`}
                                className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors border border-slate-200"
                                title="Email Buyer"
                              >
                                <Mail className="w-3.5 h-3.5" />
                              </a>

                              {/* Edit Customer */}
                              <button
                                onClick={() => openEditCustomerModal(inq)}
                                className="px-2.5 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg font-semibold text-xs transition-colors border border-blue-200 flex items-center gap-1"
                                title="Edit Customer Details"
                              >
                                <Edit3 className="w-3 h-3 text-blue-600" />
                                <span>Edit</span>
                              </button>

                              {/* Delete Customer */}
                              <button
                                onClick={() => openDeleteModal(inq)}
                                className="p-2 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg transition-colors border border-rose-200"
                                title="Delete Customer Record"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* STREAMLINED CARD VIEW */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredInquiries.map((inq) => {
                const dateObj = new Date(inq.createdAt);
                const formattedDate = dateObj.toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                });

                return (
                  <div
                    key={inq.id}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      {/* Top Header */}
                      <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                            {inq.id}
                          </span>
                          {getStatusBadge(inq.status)}
                        </div>
                        <span className="text-[11px] text-slate-400 font-medium">
                          {formattedDate}
                        </span>
                      </div>

                      {/* Main Details */}
                      <div>
                        <h4 className="font-bold text-base text-slate-900">{inq.name}</h4>
                        {inq.company && (
                          <p className="text-xs text-slate-500 font-medium flex items-center gap-1 mt-0.5">
                            <Building className="w-3.5 h-3.5 text-slate-400" />
                            {inq.company}
                          </p>
                        )}
                      </div>

                      {/* Produce & Port Info */}
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 space-y-1.5 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400 font-medium">Produce:</span>
                          <span className="font-bold text-slate-900 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            {inq.product}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400 font-medium">Destination:</span>
                          <span className="font-semibold text-slate-700">
                            {inq.destination || 'Not Specified'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400 font-medium">Phone / WhatsApp:</span>
                          <span className="font-mono font-semibold text-slate-800">
                            {inq.phone}
                          </span>
                        </div>
                      </div>

                      {/* Buyer Notes */}
                      {inq.notes && (
                        <div className="text-xs text-slate-600 bg-slate-50/50 p-2.5 rounded-xl border border-slate-100">
                          <span className="font-semibold text-slate-400 block text-[10px] uppercase">
                            Requirement Notes:
                          </span>
                          <p className="line-clamp-2 mt-0.5">{inq.notes}</p>
                        </div>
                      )}

                      {/* Internal Note */}
                      {inq.notesInternal && (
                        <div className="text-xs text-amber-800 bg-amber-50 p-2 rounded-lg border border-amber-200 flex items-center gap-1.5">
                          <span className="font-bold text-[10px] uppercase text-amber-700">Internal:</span>
                          <span className="truncate">{inq.notesInternal}</span>
                        </div>
                      )}
                    </div>

                    {/* Bottom Action Strip */}
                    <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <a
                          href={getWhatsAppBuyerLink(inq)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1 shadow-xs"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>
                        <a
                          href={`tel:${inq.phone}`}
                          className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors border border-slate-200"
                          title="Call"
                        >
                          <Phone className="w-3.5 h-3.5" />
                        </a>
                        <a
                          href={`mailto:${inq.email}`}
                          className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors border border-slate-200"
                          title="Email"
                        >
                          <Mail className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => openEditCustomerModal(inq)}
                          className="px-2.5 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-xs font-semibold transition-colors border border-blue-200 flex items-center gap-1"
                        >
                          <Edit3 className="w-3 h-3 text-blue-600" />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => openDeleteModal(inq)}
                          className="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg transition-colors border border-rose-200"
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      {/* VIEW DETAILS MODAL / DRAWER */}
      {detailInquiry && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-lg w-full p-6 sm:p-8 space-y-5 animate-in fade-in duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  {detailInquiry.id}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                  {detailInquiry.name}
                </h3>
              </div>
              <button
                onClick={() => setDetailInquiry(null)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div>
                  <span className="text-slate-400 font-semibold uppercase text-[10px] block">Company</span>
                  <span className="text-slate-800 font-bold text-sm block mt-0.5">{detailInquiry.company || 'N/A'}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-semibold uppercase text-[10px] block">Status</span>
                  <div className="mt-1">{getStatusBadge(detailInquiry.status)}</div>
                </div>
                <div>
                  <span className="text-slate-400 font-semibold uppercase text-[10px] block">Product</span>
                  <span className="text-slate-800 font-bold text-sm block mt-0.5">{detailInquiry.product}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-semibold uppercase text-[10px] block">Destination</span>
                  <span className="text-slate-800 font-bold text-sm block mt-0.5">{detailInquiry.destination || 'N/A'}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-semibold uppercase text-[10px] block">Phone</span>
                  <span className="text-slate-800 font-mono font-bold block mt-0.5">{detailInquiry.phone}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-semibold uppercase text-[10px] block">Email</span>
                  <span className="text-slate-800 font-medium block mt-0.5 truncate">{detailInquiry.email}</span>
                </div>
              </div>

              <div>
                <span className="text-slate-500 font-semibold block mb-1">Requirement Notes from Buyer:</span>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl whitespace-pre-wrap leading-relaxed text-slate-700">
                  {detailInquiry.notes || 'No specific notes entered.'}
                </div>
              </div>

              <div>
                <span className="text-slate-500 font-semibold block mb-1">Internal Notes (Admin Only):</span>
                <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-xl text-amber-900 font-medium">
                  {detailInquiry.notesInternal || 'No internal notes saved.'}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-100 gap-2">
              <div className="flex items-center gap-2">
                <a
                  href={getWhatsAppBuyerLink(detailInquiry)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Open WhatsApp</span>
                </a>
                <a
                  href={`tel:${detailInquiry.phone}`}
                  className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl flex items-center gap-1 border border-slate-200"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call</span>
                </a>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setDetailInquiry(null);
                    openEditCustomerModal(detailInquiry);
                  }}
                  className="px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-xs rounded-xl border border-blue-200 flex items-center gap-1"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => {
                    setDetailInquiry(null);
                    openDeleteModal(detailInquiry);
                  }}
                  className="px-3 py-2 bg-rose-50 hover:bg-rose-100 text-rose-600 font-semibold text-xs rounded-xl border border-rose-200 flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* EDIT CUSTOMER MODAL */}
      {editingInquiry && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-xl w-full p-6 sm:p-8 overflow-y-auto max-h-[92vh]">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200 shadow-xs">
                  <Edit3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Edit Customer & Lead
                  </h3>
                  <p className="text-[11px] text-slate-400 font-mono">
                    Ref ID: {editingInquiry.id}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setEditingInquiry(null)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveCustomerEdits} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Customer Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs outline-none focus:border-brand-teal-600 focus:ring-1 focus:ring-brand-teal-600 bg-slate-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={editCompany}
                    onChange={(e) => setEditCompany(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs outline-none focus:border-brand-teal-600 focus:ring-1 focus:ring-brand-teal-600 bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs outline-none focus:border-brand-teal-600 focus:ring-1 focus:ring-brand-teal-600 bg-slate-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / Mobile <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={editPhone}
                    onChange={(e) => setEditPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs outline-none focus:border-brand-teal-600 focus:ring-1 focus:ring-brand-teal-600 bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Produce of Interest
                  </label>
                  <select
                    value={editProduct}
                    onChange={(e) => setEditProduct(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs outline-none focus:border-brand-teal-600 bg-slate-50/50"
                  >
                    {products.map((p) => (
                      <option key={p.name} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                    <option value="Multiple Products">Multiple Products</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Destination Port / Country
                  </label>
                  <input
                    type="text"
                    value={editDest}
                    onChange={(e) => setEditDest(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs outline-none focus:border-brand-teal-600 bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Trade Status
                  </label>
                  <select
                    value={editStatus}
                    onChange={(e) => setEditStatus(e.target.value as InquiryStatus)}
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 outline-none focus:border-brand-teal-600 bg-slate-50/50"
                  >
                    <option value="new">New Lead</option>
                    <option value="contacted">Contacted</option>
                    <option value="quoted">Quoted</option>
                    <option value="closed">Closed / Won</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Internal Admin Notes
                  </label>
                  <input
                    type="text"
                    value={editNotesInternal}
                    onChange={(e) => setEditNotesInternal(e.target.value)}
                    placeholder="e.g. Quoted $1,250/MT CIF..."
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs outline-none focus:border-brand-teal-600 bg-slate-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Customer Requirement / Volume Notes
                </label>
                <textarea
                  rows={3}
                  value={editNotes}
                  onChange={(e) => setEditNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs outline-none focus:border-brand-teal-600 bg-slate-50/50"
                ></textarea>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setEditingInquiry(null)}
                  className="px-4 py-2.5 border border-slate-200 text-slate-700 rounded-xl text-xs font-semibold hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isUpdating}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white rounded-xl text-xs font-bold transition-colors shadow-sm flex items-center gap-1.5"
                >
                  {isUpdating ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Saving Changes...</span>
                    </>
                  ) : (
                    <>
                      <Save className="w-3.5 h-3.5" />
                      <span>Save Changes</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION MODAL */}
      {deletingInquiry && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-md w-full p-6 text-center animate-in fade-in duration-150">
            <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-rose-200 shadow-inner">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <h3 className="text-lg font-bold text-slate-900">
              Delete Customer Record?
            </h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Are you sure you want to permanently delete the lead record for{' '}
              <strong className="text-slate-800 font-semibold">{deletingInquiry.name}</strong>{' '}
              ({deletingInquiry.company || 'Individual'}) for{' '}
              <strong className="text-slate-800">{deletingInquiry.product}</strong>?
            </p>
            <p className="text-[11px] text-rose-600 font-medium mt-1">
              Reference: {deletingInquiry.id} &bull; This action cannot be undone.
            </p>

            <div className="flex items-center justify-center gap-3 mt-6 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setDeletingInquiry(null)}
                className="w-1/2 px-4 py-2.5 border border-slate-200 text-slate-700 rounded-xl text-xs font-semibold hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                disabled={isDeleting}
                className="w-1/2 px-4 py-2.5 bg-rose-600 hover:bg-rose-700 disabled:opacity-60 text-white rounded-xl text-xs font-bold transition-colors shadow-sm flex items-center justify-center gap-1.5"
              >
                {isDeleting ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Deleting...</span>
                  </>
                ) : (
                  <>
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Confirm Delete</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MANUAL ADD INQUIRY MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-lg w-full p-6 sm:p-8 overflow-y-auto max-h-[90vh]">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Plus className="w-5 h-5 text-emerald-600" />
                <span>Record New Lead / Manual Entry</span>
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddManualInquiry} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Buyer Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={newInqName}
                    onChange={(e) => setNewInqName(e.target.value)}
                    placeholder="e.g. Ramesh Patel"
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs outline-none focus:border-brand-teal-600 bg-slate-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={newInqCompany}
                    onChange={(e) => setNewInqCompany(e.target.value)}
                    placeholder="e.g. Global Foods Trading"
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs outline-none focus:border-brand-teal-600 bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={newInqEmail}
                    onChange={(e) => setNewInqEmail(e.target.value)}
                    placeholder="e.g. buyer@example.com"
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs outline-none focus:border-brand-teal-600 bg-slate-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    value={newInqPhone}
                    onChange={(e) => setNewInqPhone(e.target.value)}
                    placeholder="e.g. +91 9850153181"
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs outline-none focus:border-brand-teal-600 bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Produce of Interest
                  </label>
                  <select
                    value={newInqProduct}
                    onChange={(e) => setNewInqProduct(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs outline-none focus:border-brand-teal-600 bg-slate-50/50"
                  >
                    {products.map((p) => (
                      <option key={p.name} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                    <option value="Multiple Products">Multiple Products</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Destination Port / Country
                  </label>
                  <input
                    type="text"
                    value={newInqDest}
                    onChange={(e) => setNewInqDest(e.target.value)}
                    placeholder="e.g. Dubai, Jebel Ali"
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs outline-none focus:border-brand-teal-600 bg-slate-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Volume / Buyer Notes
                </label>
                <textarea
                  rows={3}
                  value={newInqNotes}
                  onChange={(e) => setNewInqNotes(e.target.value)}
                  placeholder="e.g. Inquired about 2 reefer containers of G4 Chillies..."
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs outline-none focus:border-brand-teal-600 bg-slate-50/50"
                ></textarea>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 border border-slate-200 text-slate-700 rounded-xl text-xs font-semibold hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isAddingInq}
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-colors shadow-xs"
                >
                  {isAddingInq ? 'Saving...' : 'Save Lead'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
