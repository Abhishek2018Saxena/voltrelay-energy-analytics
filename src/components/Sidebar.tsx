import {
  LayoutDashboard,
  TrendingUp,
  ShieldCheck,
  MapPin,
  Battery,
  IndianRupee,
  UserCheck,
  Lightbulb,
  BookOpen,
  Zap,
} from 'lucide-react';

export type TabId =
  | 'overview'
  | 'network'
  | 'service'
  | 'stations'
  | 'batteries'
  | 'pricing'
  | 'retention'
  | 'recommendations'
  | 'methodology';

interface NavItem {
  id: TabId;
  label: string;
  icon: typeof LayoutDashboard;
}

const navItems: NavItem[] = [
  { id: 'overview', label: 'Executive Overview', icon: LayoutDashboard },
  { id: 'network', label: 'Network Performance', icon: TrendingUp },
  { id: 'service', label: 'Service Quality', icon: ShieldCheck },
  { id: 'stations', label: 'Station & Geography', icon: MapPin },
  { id: 'batteries', label: 'Battery Performance', icon: Battery },
  { id: 'pricing', label: 'Pricing & Partner', icon: IndianRupee },
  { id: 'retention', label: 'Retention & Root Causes', icon: UserCheck },
  { id: 'recommendations', label: 'Recommendations', icon: Lightbulb },
  { id: 'methodology', label: 'Methodology', icon: BookOpen },
];

interface SidebarProps {
  active: TabId;
  onChange: (tab: TabId) => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
}

export function Sidebar({ active, onChange, mobileOpen, onMobileClose }: SidebarProps) {
  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onMobileClose}
        />
      )}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-40 h-screen w-64 shrink-0 border-r border-navy-700 bg-navy-900 transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex h-16 items-center gap-2.5 border-b border-navy-700 px-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shadow-glow">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-bold text-white leading-tight">VoltRelay</p>
            <p className="text-[10px] text-slate-400 leading-tight">Energy Analytics</p>
          </div>
        </div>

        <nav className="flex flex-col gap-1 p-3 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 4rem)' }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onChange(item.id);
                  onMobileClose();
                }}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-blue-500/15 text-blue-300 border border-blue-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-navy-800 border border-transparent'
                }`}
              >
                <Icon className={`h-4.5 w-4.5 ${isActive ? 'text-blue-400' : 'text-slate-500'}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 border-t border-navy-700 p-4">
          <p className="text-[10px] text-slate-500 leading-relaxed">
            Data: Jan 2024 – Jun 2025<br />
            3.88M swap events · 48K riders<br />
            198 stations · 842 batteries
          </p>
        </div>
      </aside>
    </>
  );
}
