import React from 'react';

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {subtitle && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-6 h-[2px] bg-brand-gold-500 rounded-full"></span>
          <span className="text-xs uppercase tracking-widest font-semibold text-brand-gold-600">
            {subtitle}
          </span>
          {isCenter && <span className="w-6 h-[2px] bg-brand-gold-500 rounded-full"></span>}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy-900 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
