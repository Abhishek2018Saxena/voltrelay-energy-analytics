import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart,
} from 'recharts';
import { Activity, CheckCircle2, AlertTriangle, Users, IndianRupee, TrendingUp } from 'lucide-react';
import { KpiCard } from '@/components/KpiCard';
import { InsightCard } from '@/components/InsightCard';
import { monthlyData, datasetOverview } from '@/lib/data';
import { formatNumber, formatPercent, formatINR } from '@/lib/format';

export function ExecutiveOverview() {
  const keyFindings = [
    'Network volume and unit economics improved strongly over time, but service reliability remained volatile.',
    'Jaipur and Delhi NCR show the highest failure rates.',
    '3W riders have approximately twice the failure and abandonment rates of 2W riders.',
    'Gen1 stations show substantially higher failure rates than Gen2 and Gen3.',
    'Higher battery SOH is strongly associated with longer distance between swaps.',
    'Pricing and partner structures create significant differences in observed contribution per swap.',
    'Rider usage intensity is the strongest observed retention signal in this analysis.',
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white tracking-tight">Executive Overview</h2>
        <p className="text-sm text-slate-400 mt-1">
          A snapshot of VoltRelay's battery-swap network performance across 6 Indian cities, Jan 2024 – Jun 2025.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <KpiCard
          label="Total Events"
          value={formatNumber(datasetOverview.totalEvents)}
          sublabel="All swap attempts"
          icon={<Activity className="h-6 w-6" />}
          accent="blue"
        />
        <KpiCard
          label="Completed Swaps"
          value={formatNumber(datasetOverview.completedSwaps)}
          sublabel="94.04% of all events"
          icon={<CheckCircle2 className="h-6 w-6" />}
          accent="emerald"
        />
        <KpiCard
          label="Non-completion Rate"
          value={formatPercent(datasetOverview.nonCompletionRate)}
          sublabel="Failed / abandoned / cancelled"
          icon={<AlertTriangle className="h-6 w-6" />}
          accent="rose"
        />
        <KpiCard
          label="Potentially Inactive Riders"
          value={formatPercent(datasetOverview.potentiallyInactive)}
          sublabel="Not definite churn"
          icon={<Users className="h-6 w-6" />}
          accent="amber"
        />
        <KpiCard
          label="Avg Revenue / Completed Swap"
          value={formatINR(datasetOverview.avgRevenuePerSwap)}
          sublabel="Amount charged to customer"
          icon={<IndianRupee className="h-6 w-6" />}
          accent="cyan"
        />
        <KpiCard
          label="Avg Contribution / Completed Swap"
          value={formatINR(datasetOverview.avgContributionPerSwap)}
          sublabel="Before Fixed Costs — NOT final profit"
          icon={<TrendingUp className="h-6 w-6" />}
          accent="violet"
          tooltip="Contribution before fixed costs = Amount charged − estimated energy cost. This is not net profit."
        />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-navy-700 bg-navy-850 p-5 shadow-card">
          <h3 className="text-base font-semibold text-white mb-1">Completed Swaps Trend</h3>
          <p className="text-xs text-slate-500 mb-4">Monthly completed swaps, Jan 2024 – Jun 2025</p>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="completedGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1c2845" />
              <XAxis dataKey="month" stroke="#64748b" fontSize={11} />
              <YAxis stroke="#64748b" fontSize={11} tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} />
              <Tooltip
                contentStyle={{ background: '#111831', border: '1px solid #243358', borderRadius: 8 }}
                formatter={(v: any) => [formatNumber(v), 'Completed Swaps']}
              />
              <Area type="monotone" dataKey="completed" stroke="#3b82f6" strokeWidth={2} fill="url(#completedGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-xl border border-navy-700 bg-navy-850 p-5 shadow-card">
          <h3 className="text-base font-semibold text-white mb-1">Failure Rate Trend</h3>
          <p className="text-xs text-slate-500 mb-4">Monthly non-completion rate, with volatility visible</p>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1c2845" />
              <XAxis dataKey="month" stroke="#64748b" fontSize={11} />
              <YAxis stroke="#64748b" fontSize={11} tickFormatter={(v) => `${v}%`} />
              <Tooltip
                contentStyle={{ background: '#111831', border: '1px solid #243358', borderRadius: 8 }}
                formatter={(v: any) => [`${v.toFixed(2)}%`, 'Failure Rate']}
              />
              <Line type="monotone" dataKey="failureRate" stroke="#f43f5e" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <InsightCard title="Key Findings" variant="info">
        <ul className="space-y-1.5 list-disc list-inside">
          {keyFindings.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </InsightCard>
    </div>
  );
}
