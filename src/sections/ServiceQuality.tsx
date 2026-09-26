import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { ShieldCheck } from 'lucide-react';
import { ChartCard } from '@/components/ChartCard';
import { InsightCard } from '@/components/InsightCard';
import { SectionHeader } from '@/components/SectionHeader';
import { KpiCard } from '@/components/KpiCard';
import {
  eventTypes,
  cityFailureRates,
  vehicleClassService,
  hourlyData,
  topHighFailureStations,
} from '@/lib/data';
import { formatNumber, formatPercent } from '@/lib/format';

export function ServiceQuality() {
  return (
    <div className="space-y-6">
      <SectionHeader
        title="Service Quality"
        subtitle="Failure types, geographic patterns, vehicle-class differences, and hourly behavior"
        icon={<ShieldCheck className="h-6 w-6" />}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <KpiCard label="Overall Non-completion Rate" value={formatPercent(5.96)} accent="rose" />
        <KpiCard label="Largest Failure Type" value="No Charged Battery" sublabel="134,389 events (3.47%)" accent="amber" />
        <KpiCard label="Avg Queue Wait" value="~243 sec" sublabel="Relatively stable across hours" accent="cyan" />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ChartCard
          title="Failure Rate by City"
          interpretation="Jaipur (7.85%) and Delhi NCR (7.35%) have the highest failure rates; Mumbai (4.45%) the lowest."
        >
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={cityFailureRates} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1c2845" horizontal={false} />
              <XAxis type="number" stroke="#64748b" fontSize={11} tickFormatter={(v) => `${v}%`} />
              <YAxis type="category" dataKey="city" stroke="#64748b" fontSize={11} width={80} />
              <Tooltip
                contentStyle={{ background: '#111831', border: '1px solid #243358', borderRadius: 8 }}
                formatter={(v: any) => [`${v.toFixed(2)}%`, 'Failure Rate']}
              />
              <Bar dataKey="rate" radius={[0, 4, 4, 0]}>
                {cityFailureRates.map((entry, i) => (
                  <Cell key={i} fill={entry.rate > 6.5 ? '#f43f5e' : entry.rate > 5 ? '#f59e0b' : '#10b981'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Event Type Breakdown"
          interpretation="Completed swaps dominate; 'no charged battery' is the largest failure category in every city."
        >
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={eventTypes}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={90}
                paddingAngle={2}
              >
                {eventTypes.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ background: '#111831', border: '1px solid #243358', borderRadius: 8 }}
                formatter={(v: any) => [formatNumber(v), 'Events']}
              />
              <Legend wrapperStyle={{ fontSize: 11 }} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Failure & Abandonment by Vehicle Class"
          interpretation="3W riders experience approximately 2× the failure and abandonment rates of 2W riders."
        >
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={vehicleClassService}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1c2845" />
              <XAxis dataKey="class" stroke="#64748b" fontSize={11} />
              <YAxis stroke="#64748b" fontSize={11} tickFormatter={(v) => `${v}%`} />
              <Tooltip
                contentStyle={{ background: '#111831', border: '1px solid #243358', borderRadius: 8 }}
                formatter={(v: any) => [`${v.toFixed(2)}%`, '']}
              />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="failureRate" name="Failure Rate" fill="#f43f5e" radius={[3, 3, 0, 0]} />
              <Bar dataKey="abandonment" name="Abandonment" fill="#f59e0b" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Hourly Failure Rate"
          interpretation="Evening hours (19:00–22:00) show elevated failure rates peaking at 6.65% at 21:00."
        >
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={hourlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1c2845" />
              <XAxis dataKey="hour" stroke="#64748b" fontSize={10} interval={2} />
              <YAxis stroke="#64748b" fontSize={11} tickFormatter={(v) => `${v}%`} domain={[3, 7]} />
              <Tooltip
                contentStyle={{ background: '#111831', border: '1px solid #243358', borderRadius: 8 }}
                formatter={(v: any) => [`${v.toFixed(2)}%`, 'Failure Rate']}
              />
              <Line type="monotone" dataKey="failure" stroke="#f43f5e" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Hourly Abandonment Rate"
          interpretation="Abandonment peaks around 21:00 at 1.99%, but average queue wait stays ~243 seconds."
        >
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={hourlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1c2845" />
              <XAxis dataKey="hour" stroke="#64748b" fontSize={10} interval={2} />
              <YAxis stroke="#64748b" fontSize={11} tickFormatter={(v) => `${v}%`} domain={[1, 2.2]} />
              <Tooltip
                contentStyle={{ background: '#111831', border: '1px solid #243358', borderRadius: 8 }}
                formatter={(v: any) => [`${v.toFixed(2)}%`, 'Abandonment']}
              />
              <Line type="monotone" dataKey="abandonment" stroke="#f59e0b" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Hourly Queue Wait (seconds)"
          interpretation="Queue wait remains relatively stable around 243 seconds, even during evening peaks."
        >
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={hourlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1c2845" />
              <XAxis dataKey="hour" stroke="#64748b" fontSize={10} interval={2} />
              <YAxis stroke="#64748b" fontSize={11} tickFormatter={(v) => `${v}s`} domain={[225, 255]} />
              <Tooltip
                contentStyle={{ background: '#111831', border: '1px solid #243358', borderRadius: 8 }}
                formatter={(v: any) => [`${v} sec`, 'Queue Wait']}
              />
              <Line type="monotone" dataKey="queue" stroke="#06b6d4" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div>
        <h3 className="text-base font-semibold text-white mb-3">Top 10 High-Failure Stations</h3>
        <div className="overflow-x-auto rounded-xl border border-navy-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-navy-800 text-slate-400 text-xs uppercase tracking-wider">
                <th className="px-4 py-3 text-left font-semibold">Rank</th>
                <th className="px-4 py-3 text-left font-semibold">Station ID</th>
                <th className="px-4 py-3 text-left font-semibold">City</th>
                <th className="px-4 py-3 text-right font-semibold">Failure Rate</th>
                <th className="px-4 py-3 text-left font-semibold w-1/3">Relative Bar</th>
              </tr>
            </thead>
            <tbody>
              {topHighFailureStations.map((s, i) => (
                <tr key={s.station} className="border-t border-navy-700 hover:bg-navy-800/50">
                  <td className="px-4 py-3 text-slate-500">{i + 1}</td>
                  <td className="px-4 py-3 font-mono text-blue-300">{s.station}</td>
                  <td className="px-4 py-3 text-slate-300">{s.city}</td>
                  <td className="px-4 py-3 text-right font-semibold text-rose-400">{s.rate.toFixed(2)}%</td>
                  <td className="px-4 py-3">
                    <div className="h-2 w-full rounded-full bg-navy-700">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-rose-500 to-amber-500"
                        style={{ width: `${(s.rate / 9.08) * 100}%` }}
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
        Evening failure rates are elevated (6.56–6.65% at 19:00–22:00), but average queue wait remains
        relatively stable at ~243 seconds, so higher failure cannot be explained simply by longer average
        queues. 3W riders show approximately 2× the failure and abandonment rates of 2W riders.
      </InsightCard>
    </div>
  );
}
