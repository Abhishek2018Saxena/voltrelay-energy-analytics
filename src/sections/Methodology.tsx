import { BookOpen, Database, Users, MapPin, Battery, IndianRupee, AlertCircle } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { InsightCard } from '@/components/InsightCard';

const methods = [
  {
    icon: Database,
    title: 'Swap-Level Analysis',
    description: 'Each of the 3,877,013 swap events was analyzed individually for completion status, failure type, timing, station, battery, and pricing details.',
  },
  {
    icon: Users,
    title: 'Rider-Level Retention Analysis',
    description: 'A rider is considered "potentially inactive" when their last observed event occurred before the 30-day observation cutoff. This is NOT definite churn.',
  },
  {
    icon: MapPin,
    title: 'Station-Level Aggregation',
    description: 'Station-level metrics were aggregated to compare charger generations, location types, and geographic patterns across 198 stations.',
  },
  {
    icon: Battery,
    title: 'Battery-Level Analysis',
    description: 'Battery State of Health (SOH) was analyzed against delivered distance, supplier cohorts, and manufacturing lots across 842 batteries.',
  },
  {
    icon: IndianRupee,
    title: 'Partner Economics',
    description: 'Revenue and contribution analysis used completed swaps only. Contribution was calculated before fixed station costs.',
  },
];

export function Methodology() {
  return (
    <div className="space-y-6">
      <SectionHeader
        title="Methodology"
        subtitle="How the analysis was conducted and key limitations"
        icon={<BookOpen className="h-6 w-6" />}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {methods.map((m) => {
          const Icon = m.icon;
          return (
            <div key={m.title} className="rounded-xl border border-navy-700 bg-navy-850 p-5 shadow-card">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <Icon className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{m.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">{m.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="rounded-xl border border-navy-700 bg-navy-850 p-6 shadow-card">
        <h3 className="text-base font-semibold text-white mb-4">Contribution Calculation</h3>
        <div className="space-y-3">
          <div className="rounded-lg bg-navy-800 p-4 font-mono text-sm text-cyan-300">
            Contribution before fixed costs = Amount charged − Estimated energy cost
          </div>
          <div className="rounded-lg bg-navy-800 p-4 font-mono text-sm text-cyan-300">
            Energy cost = Energy to recharge × Station grid tariff
          </div>
        </div>
        <p className="mt-4 text-sm text-amber-400">
          This is contribution BEFORE fixed station costs. It is NOT labeled as net profit.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 shrink-0 text-amber-400 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-amber-400 uppercase tracking-wide mb-1">Correlation vs. Causation</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                All correlations presented in this analysis are descriptive. They describe observed relationships
                but do NOT prove that one variable causes another. Controlled analysis would be required to
                establish causality.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-5">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 shrink-0 text-rose-400 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-rose-400 uppercase tracking-wide mb-1">Potential Inactivity ≠ Churn</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                "Potentially inactive" means a rider's last observed event was before the 30-day observation
                cutoff. This does NOT mean the rider has permanently churned. The term is deliberately cautious.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {[
          { label: 'Swap Events', value: '3,877,013' },
          { label: 'Riders', value: '48,216' },
          { label: 'Stations', value: '198' },
          { label: 'Batteries', value: '842' },
          { label: 'Support Tickets', value: '44,000' },
          { label: 'Cities', value: '6' },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-navy-700 bg-navy-850 p-4 text-center">
            <p className="text-lg font-bold text-white">{s.value}</p>
            <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      <InsightCard title="Six Core Questions Investigated" variant="info">
        <ol className="space-y-1 list-decimal list-inside">
          <li>Network performance over time</li>
          <li>Service failures and customer experience</li>
          <li>Station and geographic patterns</li>
          <li>Battery and equipment performance</li>
          <li>Pricing and partner economics</li>
          <li>Rider retention and potential root causes</li>
        </ol>
      </InsightCard>
    </div>
  );
}
