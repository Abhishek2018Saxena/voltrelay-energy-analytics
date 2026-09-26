import {
  Zap,
  BatteryCharging,
  Bike,
  Users,
  Handshake,
  AlertTriangle,
  type LucideIcon,
} from 'lucide-react';
import { InsightCard } from '@/components/InsightCard';
import { SectionHeader } from '@/components/SectionHeader';
import { recommendations } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
  zap: Zap,
  'battery-charging': BatteryCharging,
  bike: Bike,
  users: Users,
  handshake: Handshake,
  'alert-triangle': AlertTriangle,
};

export function Recommendations() {
  return (
    <div className="space-y-6">
      <SectionHeader
        title="Recommendations"
        subtitle="Operational actions based on observed patterns — not claims of proven causality"
        icon={<Zap className="h-6 w-6" />}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {recommendations.map((rec) => {
          const Icon = iconMap[rec.icon] || Zap;
          return (
            <div
              key={rec.id}
              className="group relative overflow-hidden rounded-xl border border-navy-700 bg-navy-850 p-5 shadow-card transition-all hover:border-blue-500/30 hover:shadow-glow"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20">
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/15 text-xs font-bold text-blue-300">
                      {rec.id}
                    </span>
                    <h3 className="text-base font-semibold text-white">{rec.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{rec.detail}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <InsightCard title="Important Note" variant="warning">
        These recommendations are operational actions based on observed patterns, not claims of proven
        causality. Each recommendation follows directly from the findings in this analysis.
      </InsightCard>

      <div className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-navy-850 to-navy-900 p-6 shadow-glow">
        <h3 className="text-lg font-bold text-white mb-3">Executive Summary</h3>
        <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
          <p>
            VoltRelay's network expanded rapidly from 2024 to mid-2025, with completed swaps and contribution
            per completed swap increasing substantially. However, service reliability remains uneven, with
            failure concentration in Jaipur, Delhi NCR, Gen1 stations, evening periods and especially 3W usage.
          </p>
          <p>
            Battery health is strongly associated with delivered range, while pricing and partner structures
            create meaningful differences in observed contribution.
          </p>
          <p>
            For retention, usage intensity is the strongest observed signal: low-usage riders show substantially
            higher potential inactivity than highly active riders. Early queue time, failure and abandonment
            do not show a simple relationship with inactivity.
          </p>
          <p>
            The analysis therefore points toward targeted station and battery improvements, stronger 3W
            service monitoring, low-usage rider engagement and careful partner-economics management.
          </p>
        </div>
      </div>
    </div>
  );
}
