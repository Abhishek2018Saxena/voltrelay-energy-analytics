import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { Battery } from 'lucide-react';
import { ChartCard } from '@/components/ChartCard';
import { InsightCard } from '@/components/InsightCard';
import { SectionHeader } from '@/components/SectionHeader';
import { sohVsDistance, supplierComparison, manufacturingLots } from '@/lib/data';
import { formatNumber } from '@/lib/format';

export function BatteryPerformance() {
  return (
    <div className="space-y-6">
      <SectionHeader
        title="Battery Performance"
        subtitle="State of Health vs. delivered range, supplier comparison, and manufacturing lot analysis"
        icon={<Battery className="h-6 w-6" />}
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ChartCard
          title="SOH vs. Average Distance Between Swaps"
          interpretation="Higher battery SOH is strongly associated with longer distance between swaps — from 38.74 km (<70% SOH) to 72.50 km (95-100% SOH)."
          tooltip="SOH = State of Health, a measure of battery degradation. Higher SOH = healthier battery."
        >
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={sohVsDistance}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1c2845" />
              <XAxis dataKey="sohRange" stroke="#64748b" fontSize={11} />
              <YAxis stroke="#64748b" fontSize={11} tickFormatter={(v) => `${v} km`} />
              <Tooltip
                contentStyle={{ background: '#111831', border: '1px solid #243358', borderRadius: 8 }}
                formatter={(v: any) => [`${v.toFixed(2)} km`, 'Avg Distance']}
              />
              <Bar dataKey="avgDistance" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="SOH Distribution by Swap Volume"
          interpretation="The 80-90% SOH band accounts for the majority of swaps (1.57M), reflecting the typical battery lifecycle stage."
        >
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={sohVsDistance}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1c2845" />
              <XAxis dataKey="sohRange" stroke="#64748b" fontSize={11} />
              <YAxis stroke="#64748b" fontSize={11} tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} />
              <Tooltip
                contentStyle={{ background: '#111831', border: '1px solid #243358', borderRadius: 8 }}
                formatter={(v: any) => [formatNumber(v), 'Swaps']}
              />
              <Bar dataKey="swaps" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Supplier Comparison: Average Distance & SOH"
          interpretation="Amptek and Cellora show similar average km (63.31 and 63.07) and SOH (~89%). Kyron shows lower averages (56.78 km, 84.87% SOH)."
          tooltip="Observed cohort differences; further controlled analysis would be required to establish causality."
        >
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={supplierComparison}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1c2845" />
              <XAxis dataKey="supplier" stroke="#64748b" fontSize={11} />
              <YAxis stroke="#64748b" fontSize={11} />
              <Tooltip
                contentStyle={{ background: '#111831', border: '1px solid #243358', borderRadius: 8 }}
              />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="avgKm" name="Avg km / swap" fill="#06b6d4" radius={[3, 3, 0, 0]} />
              <Bar dataKey="avgSoh" name="Avg SOH %" fill="#8b5cf6" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Supplier Swap Volume"
          interpretation="Cellora handles the most swaps (2.19M), followed by Amptek (799K) and Kyron (658K)."
        >
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={supplierComparison} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1c2845" horizontal={false} />
              <XAxis type="number" stroke="#64748b" fontSize={11} tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} />
              <YAxis type="category" dataKey="supplier" stroke="#64748b" fontSize={11} width={70} />
              <Tooltip
                contentStyle={{ background: '#111831', border: '1px solid #243358', borderRadius: 8 }}
                formatter={(v: any) => [formatNumber(v), 'Swaps']}
              />
              <Bar dataKey="swaps" fill="#3b82f6" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div>
        <h3 className="text-base font-semibold text-white mb-3">Kyron Manufacturing Lots — Observed SOH</h3>
        <div className="overflow-x-auto rounded-xl border border-navy-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-navy-800 text-slate-400 text-xs uppercase tracking-wider">
                <th className="px-4 py-3 text-left font-semibold">Manufacturing Lot</th>
                <th className="px-4 py-3 text-right font-semibold">Observed Avg SOH</th>
                <th className="px-4 py-3 text-left font-semibold w-1/2">SOH Level</th>
              </tr>
            </thead>
            <tbody>
              {manufacturingLots.map((lot) => (
                <tr key={lot.lot} className="border-t border-navy-700 hover:bg-navy-800/50">
                  <td className="px-4 py-3 font-mono text-blue-300">{lot.lot}</td>
                  <td className="px-4 py-3 text-right font-semibold text-rose-400">{lot.soh.toFixed(2)}%</td>
                  <td className="px-4 py-3">
                    <div className="h-2 w-full rounded-full bg-navy-700">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-rose-500 to-amber-500"
                        style={{ width: `${lot.soh}%` }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <InsightCard title="Key Finding" variant="warning">
        Higher battery SOH is strongly associated with longer distance between swaps (38.74 km at {'<70%'} SOH
        vs. 72.50 km at 95-100% SOH). The Kyron manufacturing lots (KY-2407, KY-2408, KY-2409) stand out for
        lower observed SOH (~61%). These are observed cohort differences; further controlled analysis would
        be required to establish causality.
      </InsightCard>
    </div>
  );
}
