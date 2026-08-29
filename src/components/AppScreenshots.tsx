import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Download, CheckCircle2, ShoppingBag, Car, Wrench, MessageCircle, Sparkles } from 'lucide-react';
import { SCREENSHOT_TABS, APP_CONFIG } from '../constants';

interface AppScreenshotsProps {
  onDownloadClick: () => void;
}

export const AppScreenshots: React.FC<AppScreenshotsProps> = ({ onDownloadClick }) => {
  const [activeTab, setActiveTab] = useState(0);

  const nextTab = () => {
    setActiveTab((prev) => (prev + 1) % SCREENSHOT_TABS.length);
  };

  const prevTab = () => {
    setActiveTab((prev) => (prev - 1 + SCREENSHOT_TABS.length) % SCREENSHOT_TABS.length);
  };

  const current = SCREENSHOT_TABS[activeTab];

  return (
    <section id="screenshots" className="py-16 sm:py-24 bg-[#F8FAFC] border-y border-slate-200/70 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-extrabold uppercase tracking-wider">
            <span>Inside The App</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            App Screenshots & Design
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Take a look at how Meri Local Bazaar makes discovering local items, verified services, and cabs fast and effortless.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 mb-8 gap-2 no-scrollbar">
          {SCREENSHOT_TABS.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-150 flex items-center gap-2 flex-shrink-0 ${
                activeTab === idx
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-500/25'
                  : 'bg-white text-slate-700 hover:text-orange-600 border border-slate-200 hover:border-orange-200'
              }`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-4xl mx-auto">
          
          {/* Details Column */}
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200/60">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Screen #{activeTab + 1} of {SCREENSHOT_TABS.length}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              {current.title}
            </h3>

            <p className="text-base text-slate-600 leading-relaxed">
              {current.subtitle}
            </p>

            <div className="pt-2 space-y-2 text-sm text-slate-700 text-left max-w-sm mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>Radius-based distance sorting</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>Zero commission direct deals</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>Instant WhatsApp communication</span>
              </div>
            </div>

            {/* Slider Controls & Download */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-3">
              <button
                onClick={prevTab}
                className="p-3 rounded-2xl bg-white border border-slate-200 hover:border-orange-300 text-slate-700 hover:text-orange-600 shadow-xs transition-all"
                aria-label="Previous preview"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTab}
                className="p-3 rounded-2xl bg-white border border-slate-200 hover:border-orange-300 text-slate-700 hover:text-orange-600 shadow-xs transition-all"
                aria-label="Next preview"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={onDownloadClick}
                className="px-5 py-3 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md transition-all ml-1"
              >
                Download APK
              </button>
            </div>
          </div>

          {/* Phone Frame Mockup Column */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[290px] sm:max-w-[310px]">
              
              {/* Phone Frame */}
              <div className="relative rounded-[38px] border-[7px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden ring-1 ring-orange-500/20">
                
                {/* Notch */}
                <div className="bg-slate-900 h-5 w-full flex items-center justify-center relative z-20">
                  <div className="w-14 h-3 bg-slate-950 rounded-full flex items-center justify-center gap-1">
                    <div className="w-1.5 h-1.5 bg-slate-800 rounded-full"></div>
                  </div>
                </div>

                {/* Inner Screen */}
                <div className="bg-[#FAFAFA] min-h-[460px] text-slate-900 flex flex-col justify-between select-none">
                  
                  {/* Status Bar */}
                  <div className="bg-slate-900 text-white px-3 py-1 text-[9px] flex justify-between items-center">
                    <span>10:30 AM</span>
                    <div className="flex gap-1">
                      <span>4G</span>
                      <span>95%</span>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="bg-gradient-to-r from-orange-600 to-amber-500 text-white p-3 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-xs">Meri Local Bazaar</span>
                      <span className="text-[9px] bg-white/20 px-2 py-0.5 rounded font-bold">
                        {current.label}
                      </span>
                    </div>
                  </div>

                  {/* Dynamic Mockup Body */}
                  <div className="p-3 flex-1 space-y-2.5">
                    {activeTab === 0 && (
                      <div className="space-y-2">
                        <div className="bg-orange-50 border border-orange-200 p-2 rounded-xl text-center">
                          <p className="text-[11px] font-bold text-orange-950">🔥 Hot Deals in Your Town</p>
                          <p className="text-[9px] text-orange-700">Verified nearby sellers</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-2xs">
                            <div className="h-14 bg-slate-100 rounded-lg flex items-center justify-center text-xl">📱</div>
                            <div className="text-[10px] font-bold mt-1 text-slate-900">OnePlus Nord</div>
                            <div className="text-orange-600 font-extrabold text-[10px]">₹12,500</div>
                          </div>
                          <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-2xs">
                            <div className="h-14 bg-slate-100 rounded-lg flex items-center justify-center text-xl">🚲</div>
                            <div className="text-[10px] font-bold mt-1 text-slate-900">Gear Cycle</div>
                            <div className="text-orange-600 font-extrabold text-[10px]">₹3,400</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 1 && (
                      <div className="space-y-2">
                        <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                          <div className="text-[11px] font-bold text-slate-900 mb-0.5">Post an Ad in 30s</div>
                          <div className="text-[9px] text-slate-500 mb-1.5">Free unlimited listings</div>
                          <div className="bg-orange-500 text-white text-center py-1 rounded-lg text-[10px] font-bold">
                            + Add Item & Photos
                          </div>
                        </div>
                        <div className="bg-white p-2 rounded-xl border border-slate-200 space-y-0.5">
                          <div className="flex justify-between text-[10px] font-bold">
                            <span>Bajaj Pulsar 150</span>
                            <span className="text-orange-600">₹45,000</span>
                          </div>
                          <div className="text-[9px] text-slate-500">2021 • Single hand • Verified seller</div>
                        </div>
                      </div>
                    )}

                    {activeTab === 2 && (
                      <div className="space-y-2">
                        <div className="text-[11px] font-bold text-slate-800">Local Handymen & Services</div>
                        <div className="bg-white p-2 rounded-xl border border-slate-200 flex items-center gap-2">
                          <div className="w-8 h-8 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center font-bold text-sm">🛠</div>
                          <div className="flex-1 text-[10px]">
                            <div className="font-bold">Sharma Plumbing & Sanitation</div>
                            <div className="text-[8px] text-slate-500">Available • 10m away • ★ 4.9</div>
                          </div>
                        </div>
                        <div className="bg-white p-2 rounded-xl border border-slate-200 flex items-center gap-2">
                          <div className="w-8 h-8 bg-purple-100 text-purple-700 rounded-lg flex items-center justify-center font-bold text-sm">⚡</div>
                          <div className="flex-1 text-[10px]">
                            <div className="font-bold">Electrician & Inverter Pro</div>
                            <div className="text-[8px] text-slate-500">Certified tech • ★ 4.8</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 3 && (
                      <div className="space-y-2">
                        <div className="bg-blue-600 text-white p-2 rounded-xl text-center">
                          <div className="text-[11px] font-bold">Local Cab & Taxi Services</div>
                          <div className="text-[9px] opacity-90">Direct contact with verified drivers</div>
                        </div>
                        <div className="bg-white p-2 rounded-xl border border-slate-200 space-y-1">
                          <div className="flex justify-between text-[10px] font-bold">
                            <span>Ertiga 7 Seater</span>
                            <span className="text-blue-600">Ready</span>
                          </div>
                          <div className="text-[9px] text-slate-500">Airport & local town drop</div>
                        </div>
                      </div>
                    )}

                    {activeTab === 4 && (
                      <div className="space-y-2">
                        <div className="bg-emerald-600 text-white p-2 rounded-xl text-center">
                          <div className="text-[11px] font-bold">Direct WhatsApp Messaging</div>
                          <div className="text-[9px] opacity-90">Chat directly with owners</div>
                        </div>
                        <div className="bg-white p-2 rounded-xl border border-slate-200 space-y-1 text-[9px]">
                          <div className="bg-slate-100 p-1.5 rounded text-slate-700">
                            "Hello, can I inspect the bicycle today near the bus stand?"
                          </div>
                          <div className="bg-green-50 border border-green-200 p-1.5 rounded text-green-900 text-right">
                            "Sure, come by at 4 PM!"
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="text-center pt-2">
                      <span className="text-[8px] text-slate-400">
                        {APP_CONFIG.appName} Mobile Interface
                      </span>
                    </div>
                  </div>

                  {/* Mock Bottom Tab Bar */}
                  <div className="bg-white border-t border-slate-200 py-1.5 px-3 flex justify-around text-[8px] font-bold text-slate-500">
                    <span className={activeTab === 0 ? "text-orange-600" : ""}>Home</span>
                    <span className={activeTab === 1 ? "text-orange-600" : ""}>Buy/Sell</span>
                    <span className={activeTab === 2 ? "text-orange-600" : ""}>Services</span>
                    <span className={activeTab === 3 ? "text-orange-600" : ""}>Taxi</span>
                  </div>

                </div>

                {/* Home Indicator */}
                <div className="bg-slate-900 py-1 flex justify-center">
                  <div className="w-16 h-1 bg-slate-700 rounded-full"></div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
