import React from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const displayImages = images.length > 0 ? images : ['/images/products/green-chilli/main.svg'];

  return (
    <div className="space-y-4">
      {/* Primary Image View */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
        <Image
          src={displayImages[0]}
          alt={`${productName} primary product view`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
        />
        <div className="absolute top-4 left-4">
          <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 bg-brand-navy-900/90 text-brand-gold-400 rounded-full border border-brand-gold-500/30 backdrop-blur-sm">
            Export Grade
          </span>
        </div>
      </div>

      {/* Gallery Thumbnails (if multiple images exist) */}
      {displayImages.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {displayImages.map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-square rounded-xl overflow-hidden border border-slate-200 bg-slate-50 hover:border-brand-teal-500 cursor-pointer transition-colors"
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                fill
                sizes="120px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
