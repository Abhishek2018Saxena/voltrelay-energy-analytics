import { type ReactNode } from 'react';

interface KpiCardProps {
  label: string;
  value: string;
  sublabel?: string;
  icon?: ReactNode;
  accent?: 'blue' | 'emerald' | 'amber' | 'rose' | 'violet' | 'cyan';
  tooltip?: string;
}

const accentMap = {
  blue: { bar: 'bg-blue-500', text: 'text-blue-400', glow: 'shadow-[0_0_20px_rgba(59,130,246,0.15)]' },
  emerald: { bar: 'bg-emerald-500', text: 'text-emerald-400', glow: 'shadow-[0_0_20px_rgba(16,185,129,0.15)]' },
  amber: { bar: 'bg-amber-500', text: 'text-amber-400', glow: 'shadow-[0_0_20px_rgba(245,158,11,0.15)]' },
  rose: { bar: 'bg-rose-500', text: 'text-rose-400', glow: 'shadow-[0_0_20px_rgba(244,63,94,0.15)]' },
  violet: { bar: 'bg-violet-500', text: 'text-violet-400', glow: 'shadow-[0_0_20px_rgba(139,92,246,0.15)]' },
  cyan: { bar: 'bg-cyan-500', text: 'text-cyan-400', glow: 'shadow-[0_0_20px_rgba(6,182,212,0.15)]' },
};

export function KpiCard({ label, value, sublabel, icon, accent = 'blue', tooltip }: KpiCardProps) {
  const a = accentMap[accent];
  return (
    <div className={`relative overflow-hidden rounded-xl border border-navy-700 bg-navy-850 p-5 shadow-card ${a.glow}`}>
      <div className={`absolute left-0 top-0 h-full w-1 ${a.bar}`} />
      <div className="flex items-start justify-between">
        <div className="pl-2">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
            {label}
            {tooltip && (
              <span className="ml-1 text-slate-600 cursor-help" title={tooltip}>ⓘ</span>
            )}
          </p>
          <p className="mt-2 text-2xl font-bold text-white">{value}</p>
          {sublabel && <p className={`mt-1 text-xs ${a.text}`}>{sublabel}</p>}
        </div>
        {icon && <div className={`${a.text}`}>{icon}</div>}
      </div>
    </div>
  );
}
