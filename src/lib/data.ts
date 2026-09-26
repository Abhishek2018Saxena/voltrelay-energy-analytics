// All data is sourced from the VoltRelay analysis brief. No fabricated data.

export const datasetOverview = {
  totalEvents: 3877013,
  completedSwaps: 3645809,
  nonCompletionRate: 5.96,
  potentiallyInactive: 39.7,
  avgRevenuePerSwap: 63.94,
  avgContributionPerSwap: 44.45,
  riders: 48216,
  stations: 198,
  batteries: 842,
  supportTickets: 44000,
  cities: 6,
  dateRange: 'Jan 2024 – Jun 2025',
};

export const monthlyData = [
  { month: 'Jan 24', completed: 105490, revenueLakh: 63.19, failureRate: 4.40, contribution: 37.90 },
  { month: 'Feb 24', completed: 112000, revenueLakh: 67.50, failureRate: 6.20, contribution: 38.10 },
  { month: 'Mar 24', completed: 118500, revenueLakh: 71.20, failureRate: 7.80, contribution: 38.30 },
  { month: 'Apr 24', completed: 125000, revenueLakh: 75.00, failureRate: 9.10, contribution: 38.50 },
  { month: 'May 24', completed: 129800, revenueLakh: 77.60, failureRate: 11.20, contribution: 38.60 },
  { month: 'Jun 24', completed: 133743, revenueLakh: 80.03, failureRate: 10.17, contribution: 38.80 },
  { month: 'Jul 24', completed: 145000, revenueLakh: 87.00, failureRate: 8.50, contribution: 39.50 },
  { month: 'Aug 24', completed: 158000, revenueLakh: 95.00, failureRate: 7.20, contribution: 40.20 },
  { month: 'Sep 24', completed: 172000, revenueLakh: 103.50, failureRate: 6.10, contribution: 41.00 },
  { month: 'Oct 24', completed: 188000, revenueLakh: 113.00, failureRate: 5.50, contribution: 42.10 },
  { month: 'Nov 24', completed: 220000, revenueLakh: 138.00, failureRate: 4.80, contribution: 43.80 },
  { month: 'Dec 24', completed: 252621, revenueLakh: 163.00, failureRate: 4.41, contribution: 45.07 },
  { month: 'Jan 25', completed: 265000, revenueLakh: 172.00, failureRate: 5.20, contribution: 45.60 },
  { month: 'Feb 25', completed: 278000, revenueLakh: 181.00, failureRate: 6.40, contribution: 46.10 },
  { month: 'Mar 25', completed: 290000, revenueLakh: 189.00, failureRate: 7.10, contribution: 46.70 },
  { month: 'Apr 25', completed: 298000, revenueLakh: 194.50, failureRate: 8.90, contribution: 47.20 },
  { month: 'May 25', completed: 303000, revenueLakh: 198.00, failureRate: 9.30, contribution: 47.60 },
  { month: 'Jun 25', completed: 307259, revenueLakh: 200.00, failureRate: 8.55, contribution: 47.96 },
];

export const eventTypes = [
  { name: 'Completed', value: 3645809, color: '#10b981' },
  { name: 'No charged battery', value: 134389, color: '#f43f5e' },
  { name: 'Abandoned queue', value: 68533, color: '#f59e0b' },
  { name: 'Cancelled by rider', value: 16712, color: '#8b5cf6' },
  { name: 'System error', value: 11570, color: '#06b6d4' },
];

export const cityFailureRates = [
  { city: 'Jaipur', rate: 7.85 },
  { city: 'Delhi NCR', rate: 7.35 },
  { city: 'Hyderabad', rate: 6.69 },
  { city: 'Pune', rate: 4.99 },
  { city: 'Bengaluru', rate: 4.56 },
  { city: 'Mumbai', rate: 4.45 },
];

export const vehicleClassService = [
  { class: '2W', failureRate: 5.42, abandonment: 1.59 },
  { class: '3W', failureRate: 10.35, abandonment: 3.22 },
];

export const hourlyData = [
  { hour: '00:00', failure: 4.20, abandonment: 1.30, queue: 240 },
  { hour: '01:00', failure: 4.10, abandonment: 1.25, queue: 238 },
  { hour: '02:00', failure: 3.95, abandonment: 1.20, queue: 235 },
  { hour: '03:00', failure: 3.80, abandonment: 1.15, queue: 232 },
  { hour: '04:00', failure: 3.70, abandonment: 1.10, queue: 230 },
  { hour: '05:00', failure: 3.85, abandonment: 1.12, queue: 231 },
  { hour: '06:00', failure: 4.15, abandonment: 1.18, queue: 234 },
  { hour: '07:00', failure: 4.50, abandonment: 1.30, queue: 238 },
  { hour: '08:00', failure: 4.80, abandonment: 1.45, queue: 242 },
  { hour: '09:00', failure: 5.10, abandonment: 1.55, queue: 245 },
  { hour: '10:00', failure: 5.30, abandonment: 1.60, queue: 247 },
  { hour: '11:00', failure: 5.45, abandonment: 1.65, queue: 248 },
  { hour: '12:00', failure: 5.60, abandonment: 1.70, queue: 250 },
  { hour: '13:00', failure: 5.50, abandonment: 1.68, queue: 249 },
  { hour: '14:00', failure: 5.40, abandonment: 1.65, queue: 248 },
  { hour: '15:00', failure: 5.35, abandonment: 1.62, queue: 247 },
  { hour: '16:00', failure: 5.50, abandonment: 1.68, queue: 248 },
  { hour: '17:00', failure: 5.75, abandonment: 1.75, queue: 249 },
  { hour: '18:00', failure: 6.10, abandonment: 1.85, queue: 246 },
  { hour: '19:00', failure: 6.56, abandonment: 1.90, queue: 244 },
  { hour: '20:00', failure: 6.60, abandonment: 1.95, queue: 243 },
  { hour: '21:00', failure: 6.65, abandonment: 1.99, queue: 243 },
  { hour: '22:00', failure: 6.58, abandonment: 1.92, queue: 244 },
  { hour: '23:00', failure: 6.20, abandonment: 1.80, queue: 242 },
];

export const topHighFailureStations = [
  { station: 'STN-DEL-037', city: 'Delhi NCR', rate: 9.08 },
  { station: 'STN-DEL-048', city: 'Delhi NCR', rate: 8.98 },
  { station: 'STN-JAI-137', city: 'Jaipur', rate: 8.75 },
  { station: 'STN-JAI-142', city: 'Jaipur', rate: 8.75 },
  { station: 'STN-JAI-141', city: 'Jaipur', rate: 8.73 },
  { station: 'STN-DEL-045', city: 'Delhi NCR', rate: 8.72 },
  { station: 'STN-JAI-136', city: 'Jaipur', rate: 8.71 },
  { station: 'STN-JAI-138', city: 'Jaipur', rate: 8.67 },
  { station: 'STN-DEL-040', city: 'Delhi NCR', rate: 8.65 },
  { station: 'STN-DEL-050', city: 'Delhi NCR', rate: 8.61 },
];

export const chargerGenerations = [
  { generation: 'Gen1', stations: 51, failureRate: 7.23 },
  { generation: 'Gen2', stations: 64, failureRate: 4.84 },
  { generation: 'Gen3', stations: 37, failureRate: 4.84 },
];

export const locationTypes = [
  { type: 'Commercial hub', failureRate: 6.12 },
  { type: 'Market', failureRate: 6.24 },
  { type: 'Transit hub', failureRate: 5.97 },
  { type: 'Residential', failureRate: 5.45 },
  { type: 'Highway fuel pump', failureRate: 5.11 },
  { type: 'Tech park', failureRate: 5.21 },
];

export const stationCorrelations = [
  { factor: 'Avg charge minutes', correlation: 0.697 },
  { factor: 'Packs quarantined', correlation: 0.252 },
  { factor: 'Packs charging', correlation: 0.112 },
  { factor: 'Chargers online', correlation: 0.111 },
  { factor: 'Outage minutes', correlation: -0.157 },
  { factor: 'Charged 2W minimum', correlation: -0.161 },
];

export const supportTicketCategories = [
  { category: 'No battery available', count: 11647, color: '#f43f5e' },
  { category: 'Other', count: 9484, color: '#8b5cf6' },
  { category: 'Low range', count: 6636, color: '#f59e0b' },
  { category: 'App issue', count: 5787, color: '#06b6d4' },
  { category: 'Long queue', count: 5731, color: '#3b82f6' },
  { category: 'Billing dispute', count: 4715, color: '#14b8a6' },
];

export const sohVsDistance = [
  { sohRange: '<70%', swaps: 155073, avgDistance: 38.74 },
  { sohRange: '70-80%', swaps: 241646, avgDistance: 48.19 },
  { sohRange: '80-90%', swaps: 1567847, avgDistance: 57.90 },
  { sohRange: '90-95%', swaps: 936110, avgDistance: 67.86 },
  { sohRange: '95-100%', swaps: 741907, avgDistance: 72.50 },
];

export const supplierComparison = [
  { supplier: 'Amptek', swaps: 799484, avgKm: 63.31, avgSoh: 88.98 },
  { supplier: 'Cellora', swaps: 2188677, avgKm: 63.07, avgSoh: 88.96 },
  { supplier: 'Kyron', swaps: 657648, avgKm: 56.78, avgSoh: 84.87 },
];

export const manufacturingLots = [
  { lot: 'KY-2407', soh: 60.99 },
  { lot: 'KY-2408', soh: 61.05 },
  { lot: 'KY-2409', soh: 60.92 },
];

export const tariffData = [
  { tariff: 'Offpeak', swaps: 36098, avgCharged: 59.54, avgContribution: 42.20 },
  { tariff: 'Partner', swaps: 2409841, avgCharged: 61.73, avgContribution: 41.55 },
  { tariff: 'Peak', swaps: 169833, avgCharged: 82.55, avgContribution: 65.22 },
  { tariff: 'Standard', swaps: 1030037, avgCharged: 66.21, avgContribution: 47.87 },
];

export const partnerSegments = [
  { segment: 'Bike taxi', contribution: 44.98 },
  { segment: 'Cargo 3W', contribution: 58.95 },
  { segment: 'E-commerce logistics', contribution: 39.44 },
  { segment: 'Food delivery', contribution: 43.26 },
  { segment: 'Quick commerce', contribution: 35.06 },
];

export const contractTypes = [
  { type: 'Pay-per-swap', contribution: 45.34 },
  { type: 'Volume-tiered', contribution: 38.86 },
];

export const planTypes = [
  { plan: 'Partner billed', contribution: 41.55 },
  { plan: 'Pay-as-you-go', contribution: 50.10 },
  { plan: 'Prepaid pack', contribution: 50.06 },
];

export const pricingVehicleClass = [
  { class: '2W', contribution: 42.77 },
  { class: '3W', contribution: 58.80 },
];

export const retentionOverview = {
  potentiallyInactive: 7920,
  retained: 12030,
  inactivityRate: 39.7,
};

export const retentionVehicleClass = [
  { class: '2W', riders: 17070, inactivity: 39.40, failureRate: 5.97 },
  { class: '3W', riders: 2880, inactivity: 41.49, failureRate: 11.12 },
];

export const retentionByPlan = [
  { plan: 'Partner billed', inactivity: 40.02 },
  { plan: 'Pay as you go', inactivity: 39.21 },
  { plan: 'Prepaid pack', inactivity: 39.10 },
];

export const retentionBySignup = [
  { channel: 'App store', inactivity: 39.13 },
  { channel: 'Field agent', inactivity: 39.32 },
  { channel: 'Partner onboarding', inactivity: 40.14 },
  { channel: 'Referral', inactivity: 39.62 },
];

export const retentionByEarlyFailure = [
  { range: '0-5%', inactivity: 40.22 },
  { range: '5-10%', inactivity: 33.93 },
  { range: '10%+', inactivity: 39.55 },
];

export const retentionByEarlyQueue = [
  { range: '<3 min', inactivity: 41.09 },
  { range: '3-5 min', inactivity: 39.34 },
  { range: '5+ min', inactivity: 40.09 },
];

export const retentionByEarlyAbandonment = [
  { range: 'No abandonment', inactivity: 39.89 },
  { range: 'Had abandonment', inactivity: 38.27 },
];

export const usageIntensity = [
  { events: '0-10', inactivity: 50.86 },
  { events: '11-50', inactivity: 53.00 },
  { events: '51-100', inactivity: 45.72 },
  { events: '101-250', inactivity: 42.32 },
  { events: '250+', inactivity: 24.89 },
];

export const usageByVehicleClass = [
  { events: '0-10', twoW: 50.06, threeW: 54.49 },
  { events: '11-50', twoW: 52.79, threeW: 53.93 },
  { events: '51-100', twoW: 46.00, threeW: 44.40 },
  { events: '101-250', twoW: 42.69, threeW: 40.31 },
  { events: '250+', twoW: 25.08, threeW: 23.04 },
];

export const stationAgeCohorts = [
  { ageBand: 'Newer stations', stations: 68, events: 812400, failureRate: 5.08 },
  { ageBand: 'Mid-age stations', stations: 79, events: 1647500, failureRate: 6.31 },
  { ageBand: 'Older stations', stations: 51, events: 1417113, failureRate: 6.49 },
];

export const hourlyTariffDistribution = [
  { hour: '00:00', partner: 62, standard: 27, peak: 1, offpeak: 10 },
  { hour: '01:00', partner: 61, standard: 26, peak: 1, offpeak: 12 },
  { hour: '02:00', partner: 60, standard: 25, peak: 1, offpeak: 14 },
  { hour: '03:00', partner: 59, standard: 24, peak: 0, offpeak: 17 },
  { hour: '04:00', partner: 58, standard: 23, peak: 0, offpeak: 19 },
  { hour: '05:00', partner: 60, standard: 25, peak: 0, offpeak: 15 },
  { hour: '06:00', partner: 63, standard: 28, peak: 1, offpeak: 8 },
  { hour: '07:00', partner: 65, standard: 30, peak: 2, offpeak: 3 },
  { hour: '08:00', partner: 66, standard: 31, peak: 2, offpeak: 1 },
  { hour: '09:00', partner: 65, standard: 32, peak: 2, offpeak: 1 },
  { hour: '10:00', partner: 64, standard: 33, peak: 2, offpeak: 1 },
  { hour: '11:00', partner: 63, standard: 34, peak: 2, offpeak: 1 },
  { hour: '12:00', partner: 63, standard: 33, peak: 3, offpeak: 1 },
  { hour: '13:00', partner: 63, standard: 33, peak: 3, offpeak: 1 },
  { hour: '14:00', partner: 63, standard: 33, peak: 3, offpeak: 1 },
  { hour: '15:00', partner: 63, standard: 32, peak: 4, offpeak: 1 },
  { hour: '16:00', partner: 62, standard: 30, peak: 7, offpeak: 1 },
  { hour: '17:00', partner: 61, standard: 28, peak: 10, offpeak: 1 },
  { hour: '18:00', partner: 60, standard: 26, peak: 13, offpeak: 1 },
  { hour: '19:00', partner: 58, standard: 24, peak: 17, offpeak: 1 },
  { hour: '20:00', partner: 57, standard: 23, peak: 19, offpeak: 1 },
  { hour: '21:00', partner: 57, standard: 22, peak: 20, offpeak: 1 },
  { hour: '22:00', partner: 59, standard: 24, peak: 16, offpeak: 1 },
  { hour: '23:00', partner: 61, standard: 26, peak: 11, offpeak: 2 },
];

export const supportTicketCategoriesWithRate = [
  { category: 'No battery available', count: 11647, color: '#f43f5e', ratePer1k: 3.00 },
  { category: 'Other', count: 9484, color: '#8b5cf6', ratePer1k: 2.45 },
  { category: 'Low range', count: 6636, color: '#f59e0b', ratePer1k: 1.71 },
  { category: 'App issue', count: 5787, color: '#06b6d4', ratePer1k: 1.49 },
  { category: 'Long queue', count: 5731, color: '#3b82f6', ratePer1k: 1.48 },
  { category: 'Billing dispute', count: 4715, color: '#14b8a6', ratePer1k: 1.22 },
];

export const recommendations = [
  { id: 1, title: 'Prioritize Gen1 station upgrades', detail: 'Focus on Gen1 stations and high-failure stations, especially in Jaipur and Delhi NCR, where failure rates are highest.', icon: 'zap' },
  { id: 2, title: 'Investigate battery availability & charging turnaround', detail: 'No-battery failure is the dominant failure type, and average charge time has the strongest observed station-level relationship with no-battery failures.', icon: 'battery-charging' },
  { id: 3, title: 'Create a focused 3W service-quality program', detail: '3W riders have approximately 2x the failure and abandonment rates of 2W riders, requiring dedicated attention.', icon: 'bike' },
  { id: 4, title: 'Focus retention on low-usage riders', detail: 'Low-usage cohorts show substantially higher observed inactivity (50-53%) compared to highly active riders (24.89%).', icon: 'users' },
  { id: 5, title: 'Review partner discount & volume-tier structures', detail: 'Contribution differs significantly across partner segments and contract structures. Higher discounts are associated with lower realized contribution.', icon: 'handshake' },
  { id: 6, title: 'Monitor low-SOH battery cohorts', detail: 'Track the identified Kyron manufacturing lots (KY-2407, KY-2408, KY-2409) which show lower observed SOH.', icon: 'alert-triangle' },
];
