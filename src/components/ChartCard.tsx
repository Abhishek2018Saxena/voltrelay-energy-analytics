import { type ReactNode } from 'react';

interface ChartCardProps {
  title: string;
  interpretation?: string;
  children: ReactNode;
  className?: string;
  tooltip?: string;
}

export function ChartCard({ title, interpretation, children, className = '', tooltip }: ChartCardProps) {
  return (
    <div className={`rounded-xl border border-navy-700 bg-navy-850 p-5 shadow-card ${className}`}>
      <div className="mb-4 flex items-start justify-between gap-2">
        <div>
          <h3 className="text-base font-semibold text-white">{title}</h3>
          {tooltip && <p className="text-xs text-slate-500 mt-0.5">{tooltip}</p>}
        </div>
      </div>
      {children}
      {interpretation && (
        <p className="mt-4 border-t border-navy-700 pt-3 text-xs text-slate-400 leading-relaxed">
          {interpretation}
        </p>
      )}
    </div>
  );
}
