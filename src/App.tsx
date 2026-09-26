import { useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { Sidebar, type TabId } from '@/components/Sidebar';
import { ExecutiveOverview } from '@/sections/ExecutiveOverview';
import { NetworkPerformance } from '@/sections/NetworkPerformance';
import { ServiceQuality } from '@/sections/ServiceQuality';
import { StationGeography } from '@/sections/StationGeography';
import { BatteryPerformance } from '@/sections/BatteryPerformance';
import { PricingPartner } from '@/sections/PricingPartner';
import { RetentionRootCauses } from '@/sections/RetentionRootCauses';
import { Recommendations } from '@/sections/Recommendations';
import { Methodology } from '@/sections/Methodology';

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderTab = () => {
    switch (activeTab) {
      case 'overview':
        return <ExecutiveOverview />;
      case 'network':
        return <NetworkPerformance />;
      case 'service':
        return <ServiceQuality />;
      case 'stations':
        return <StationGeography />;
      case 'batteries':
        return <BatteryPerformance />;
      case 'pricing':
        return <PricingPartner />;
      case 'retention':
        return <RetentionRootCauses />;
      case 'recommendations':
        return <Recommendations />;
      case 'methodology':
        return <Methodology />;
      default:
        return <ExecutiveOverview />;
    }
  };

  return (
    <div className="flex min-h-screen bg-navy-950">
      <Sidebar
        active={activeTab}
        onChange={setActiveTab}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />

      <div className="flex-1 min-w-0">
        <header className="sticky top-0 z-20 border-b border-navy-700 bg-navy-900/80 backdrop-blur-md">
          <div className="flex h-16 items-center justify-between px-4 lg:px-8">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden text-slate-400 hover:text-white"
              >
                <Menu className="h-6 w-6" />
              </button>
              <div>
                <h1 className="text-base font-bold text-white sm:text-lg">VoltRelay Energy Analytics</h1>
                <p className="text-xs text-slate-400 hidden sm:block">
                  Turning battery-swap data into operational and customer insights
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-navy-700 bg-navy-800 px-3 py-1.5">
              <Calendar className="h-4 w-4 text-blue-400" />
              <span className="text-xs font-medium text-slate-300">Jan 2024 – Jun 2025</span>
            </div>
          </div>
        </header>

        <main className="p-4 lg:p-8 max-w-[1400px] mx-auto">
          {renderTab()}
        </main>
      </div>
    </div>
  );
}

export default App;
