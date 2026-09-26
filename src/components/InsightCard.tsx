import { type ReactNode } from 'react';
import { Info } from 'lucide-react';

interface InsightCardProps {
  title?: string;
  children: ReactNode;
  variant?: 'default' | 'warning' | 'success' | 'info';
}

const variantStyles = {
  default: 'border-navy-600 bg-navy-800/50',
  warning: 'border-amber-500/30 bg-amber-500/5',
  success: 'border-emerald-500/30 bg-emerald-500/5',
  info: 'border-blue-500/30 bg-blue-500/5',
};

const iconColor = {
  default: 'text-blue-400',
  warning: 'text-amber-400',
  success: 'text-emerald-400',
  info: 'text-blue-400',
};

export function InsightCard({ title = 'Key Insight', children, variant = 'info' }: InsightCardProps) {
  return (
    <div className={`rounded-xl border p-4 ${variantStyles[variant]}`}>
      <div className="flex items-start gap-3">
        <Info className={`h-5 w-5 shrink-0 mt-0.5 ${iconColor[variant]}`} />
        <div>
          <p className={`text-xs font-semibold uppercase tracking-wide ${iconColor[variant]} mb-1`}>{title}</p>
          <div className="text-sm text-slate-300 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}
