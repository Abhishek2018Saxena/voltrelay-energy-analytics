import {
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  AreaChart,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { TrendingUp } from 'lucide-react';
import { ChartCard } from '@/components/ChartCard';
import { InsightCard } from '@/components/InsightCard';
import { SectionHeader } from '@/components/SectionHeader';
import { monthlyData } from '@/lib/data';
import { formatNumber, formatINRShort } from '@/lib/format';

export function NetworkPerformance() {
  return (
    <div className="space-y-6">
      <SectionHeader
        title="Network Performance"
        subtitle="Monthly trends in volume, revenue, reliability, and unit economics"
        icon={<TrendingUp className="h-6 w-6" />}
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ChartCard
          title="Completed Swaps per Month"
          interpretation="Completed swaps grew from 105K in Jan 2024 to 307K in Jun 2025 — nearly 3× growth."
        >
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="netCompleted" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1c2845" />
              <XAxis dataKey="month" stroke="#64748b" fontSize={11} />
              <YAxis stroke="#64748b" fontSize={11} tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} />
              <Tooltip
                contentStyle={{ background: '#111831', border: '1px solid #243358', borderRadius: 8 }}
                formatter={(v: any) => [formatNumber(v), 'Completed']}
              />
              <Area type="monotone" dataKey="completed" stroke="#3b82f6" strokeWidth={2} fill="url(#netCompleted)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Monthly Revenue"
          interpretation="Revenue grew from ₹63.19 Lakh to ₹2.00 Cr per month, reflecting both volume and pricing improvements."
          tooltip="Revenue = amount charged across all completed swaps"
        >
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="netRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1c2845" />
              <XAxis dataKey="month" stroke="#64748b" fontSize={11} />
              <YAxis stroke="#64748b" fontSize={11} tickFormatter={(v) => `₹${v}L`} />
              <Tooltip
                contentStyle={{ background: '#111831', border: '1px solid #243358', borderRadius: 8 }}
                formatter={(v: any) => [formatINRShort(v * 100000), 'Revenue']}
              />
              <Area type="monotone" dataKey="revenueLakh" stroke="#10b981" strokeWidth={2} fill="url(#netRevenue)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Failure Rate per Month"
          interpretation="Service reliability remained volatile, with notable spikes in May–Jun 2024 and Apr–Jun 2025."
          tooltip="Non-completion rate = events not completed / total events"
        >
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1c2845" />
              <XAxis dataKey="month" stroke="#64748b" fontSize={11} />
              <YAxis stroke="#64748b" fontSize={11} tickFormatter={(v) => `${v}%`} />
              <Tooltip
                contentStyle={{ background: '#111831', border: '1px solid #243358', borderRadius: 8 }}
                formatter={(v: any) => [`${v.toFixed(2)}%`, 'Failure Rate']}
              />
              <Line type="monotone" dataKey="failureRate" stroke="#f43f5e" strokeWidth={2} dot={{ r: 3, fill: '#f43f5e' }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Contribution per Completed Swap"
          interpretation="Contribution before fixed costs rose from ₹37.90 to ₹47.96, a 26% improvement in unit economics."
          tooltip="Contribution before fixed costs = amount charged − estimated energy cost"
        >
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1c2845" />
              <XAxis dataKey="month" stroke="#64748b" fontSize={11} />
              <YAxis stroke="#64748b" fontSize={11} tickFormatter={(v) => `₹${v}`} />
              <Tooltip
                contentStyle={{ background: '#111831', border: '1px solid #243358', borderRadius: 8 }}
                formatter={(v: any) => [`₹${v.toFixed(2)}`, 'Contribution / Swap']}
              />
              <Bar dataKey="contribution" fill="#8b5cf6" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <InsightCard title="Key Finding" variant="info">
        Completed swaps increased from 105K/month to 307K/month, while contribution before fixed costs increased
        from ₹37.90 to ₹47.96 per completed swap. However, service reliability remained volatile, with notable
        failure spikes in May–June 2024 and April–June 2025.
      </InsightCard>
    </div>
  );
}
