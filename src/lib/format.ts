export function formatINR(value: number): string {
  return `\u20B9${value.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function formatINRShort(value: number): string {
  if (value >= 10000000) return `\u20B9${(value / 10000000).toFixed(2)} Cr`;
  if (value >= 100000) return `\u20B9${(value / 100000).toFixed(2)} Lakh`;
  if (value >= 1000) return `\u20B9${value.toLocaleString('en-IN')}`;
  return `\u20B9${value.toFixed(2)}`;
}

export function formatNumber(value: number): string {
  return value.toLocaleString('en-IN');
}

export function formatPercent(value: number): string {
  return `${value.toFixed(2)}%`;
}

export function formatCompact(value: number): string {
  if (value >= 1000000) return `${(value / 1000000).toFixed(2)}M`;
  if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
  return value.toLocaleString('en-IN');
}
