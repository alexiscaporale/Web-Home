import clsx from 'clsx';
import { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ title, subtitle, children, className }: SectionProps) {
  return (
    <section className={clsx("mb-20", className)}>
      {(title || subtitle) && (
        <div className="mb-8 border-b border-[#1E1E1E] pb-4">
          {title && <h2 className="text-3xl font-serif text-[#C4A35A] tracking-tight">{title}</h2>}
          {subtitle && <p className="text-[#7A7570] mt-2 font-light text-lg">{subtitle}</p>}
        </div>
      )}
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
}
