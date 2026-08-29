import React from 'react';
import { Download, CheckCircle2, Zap, ShieldCheck, ArrowRight, MapPin, ShoppingBag, Car, Wrench, MessageCircle, Star } from 'lucide-react';
import { APP_CONFIG } from '../constants';
import { AppLogo } from './AppLogo';

interface HeroProps {
  onDownloadClick: () => void;
  onLearnMoreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadClick, onLearnMoreClick }) => {
  return (
    <section id="home" className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-orange-50/60 via-white to-[#FBFBFC]">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-40 blur-3xl overflow-hidden -z-10">
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-orange-400/40 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-8 right-1/4 w-80 h-80 bg-amber-300/40 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-7">
            
            {/* App Name Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/90 border border-orange-200 text-orange-900 text-xs sm:text-sm font-extrabold tracking-wide shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-orange-600 animate-ping" />
              <span>MERI LOCAL BAZAAR</span>
              <span className="text-orange-400">•</span>
              <span className="font-semibold text-orange-800">{APP_CONFIG.tagline}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Buy, Sell & Find <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500">
                  Everything Near You
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed pt-1">
                Discover local products, services, jobs, vehicles, property and much more in your area.
              </p>
            </div>

            {/* Primary Download Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onDownloadClick}
                className="glow-btn w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-700 hover:to-orange-600 text-white font-extrabold text-lg shadow-xl shadow-orange-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Download className="w-6 h-6 animate-pulse" />
                <span>⬇ Download APK</span>
                <span className="text-xs bg-black/20 text-white/95 px-2 py-1 rounded-lg font-semibold">
                  v{APP_CONFIG.version}
                </span>
              </button>

              <a
                href="#how-to-download"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white border border-slate-200 hover:border-orange-300 text-slate-700 hover:text-orange-600 font-bold text-sm shadow-xs hover:shadow-md transition-all"
              >
                <span>How to Download</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-2">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2.5 gap-x-5 text-xs sm:text-sm font-bold text-slate-700">
                <div className="flex items-center gap-1.5 bg-white border border-slate-200/80 px-3.5 py-1.5 rounded-full shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>✓ Android App</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white border border-slate-200/80 px-3.5 py-1.5 rounded-full shadow-xs">
                  <Zap className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span>✓ Fast Download</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white border border-slate-200/80 px-3.5 py-1.5 rounded-full shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>✓ Free to Download</span>
                </div>
              </div>
            </div>

            {/* Quick Meta */}
            <div className="text-xs text-slate-400 flex items-center justify-center lg:justify-start gap-2 pt-1">
              <span>File size: {APP_CONFIG.fileSize}</span>
              <span>•</span>
              <span>{APP_CONFIG.minAndroid}</span>
              <span>•</span>
              <span>Direct official APK</span>
            </div>

          </div>

          {/* Right Column: Mobile App Preview Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[310px] sm:max-w-[330px]">
              
              {/* Glow background behind frame */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-orange-500 to-amber-300 rounded-[44px] blur-xl opacity-30"></div>

              {/* Realistic Phone Frame */}
              <div className="relative rounded-[38px] border-[7px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden ring-1 ring-slate-900/40">
                
                {/* Speaker Notch */}
                <div className="bg-slate-900 h-5 w-full flex items-center justify-center relative z-20">
                  <div className="w-16 h-3 bg-slate-950 rounded-full flex items-center justify-center gap-1.5">
                    <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
                  </div>
                </div>

                {/* Mockup Screen Content */}
                <div className="bg-[#F8FAFC] text-slate-900 pb-4 overflow-hidden select-none">
                  
                  {/* Mock App Bar */}
                  <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white p-3.5 pt-1 shadow-sm">
                    <div className="flex items-center justify-between text-[10px] pb-1.5 opacity-90">
                      <span className="font-semibold">10:00 AM</span>
                      <div className="flex items-center gap-1">
                        <span>5G</span>
                        <span>100%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                          <AppLogo size={32} />
                        </div>
                        <div>
                          <div className="font-black text-xs leading-tight">Meri Local Bazaar</div>
                          <div className="text-[9px] text-orange-100 flex items-center">
                            <MapPin className="w-2.5 h-2.5 mr-0.5" /> Market Area (Nearby)
                          </div>
                        </div>
                      </div>
                      <span className="bg-white/20 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                        APK
                      </span>
                    </div>
                  </div>

                  {/* Mock Search */}
                  <div className="p-2.5">
                    <div className="bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-[11px] text-slate-400 flex items-center justify-between shadow-2xs">
                      <span>Search electronics, services, taxi...</span>
                      <span className="text-orange-500">🔍</span>
                    </div>
                  </div>

                  {/* 4 Quick Category Badges */}
                  <div className="px-2.5 grid grid-cols-4 gap-1 text-center text-[9px] font-bold text-slate-700 mb-2.5">
                    <div className="bg-white p-1.5 rounded-lg border border-slate-200/70 shadow-2xs flex flex-col items-center">
                      <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded flex items-center justify-center mb-0.5">
                        <ShoppingBag className="w-3 h-3" />
                      </div>
                      <span>Buy/Sell</span>
                    </div>
                    <div className="bg-white p-1.5 rounded-lg border border-slate-200/70 shadow-2xs flex flex-col items-center">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded flex items-center justify-center mb-0.5">
                        <Car className="w-3 h-3" />
                      </div>
                      <span>Taxi</span>
                    </div>
                    <div className="bg-white p-1.5 rounded-lg border border-slate-200/70 shadow-2xs flex flex-col items-center">
                      <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded flex items-center justify-center mb-0.5">
                        <Wrench className="w-3 h-3" />
                      </div>
                      <span>Services</span>
                    </div>
                    <div className="bg-white p-1.5 rounded-lg border border-slate-200/70 shadow-2xs flex flex-col items-center">
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded flex items-center justify-center mb-0.5">
                        <MessageCircle className="w-3 h-3" />
                      </div>
                      <span>WhatsApp</span>
                    </div>
                  </div>

                  {/* Mock Listings */}
                  <div className="px-2.5 space-y-1.5">
                    <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-2.5">
                      <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                        📱
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-[11px] text-slate-900 truncate">Smart Phone 5G</span>
                          <span className="text-orange-600 font-extrabold text-[11px]">₹14,999</span>
                        </div>
                        <p className="text-[9px] text-slate-500">Main Road • 500m away</p>
                      </div>
                    </div>

                    <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-2.5">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                        ⚡
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-[11px] text-slate-900 truncate">Electrician & AC Pro</span>
                          <span className="text-green-600 font-bold text-[10px]">Verified</span>
                        </div>
                        <p className="text-[9px] text-slate-500">Available now • ★ 4.9</p>
                      </div>
                    </div>
                  </div>

                  {/* Inside Mockup Download CTA */}
                  <div className="p-2.5 pt-3">
                    <button
                      onClick={onDownloadClick}
                      className="w-full py-2 bg-orange-600 text-white rounded-xl font-bold text-xs shadow-md flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Official APK</span>
                    </button>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="bg-slate-900 py-1 flex justify-center">
                  <div className="w-20 h-1 bg-slate-700 rounded-full"></div>
                </div>

              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-3 -left-3 sm:-left-6 bg-white border border-orange-100 p-2.5 rounded-2xl shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-orange-600 text-white flex items-center justify-center">
                  <Star className="w-4 h-4 fill-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-black text-slate-900">100% Free</div>
                  <div className="text-[10px] text-slate-500">Apne Area Ka Bazaar</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
