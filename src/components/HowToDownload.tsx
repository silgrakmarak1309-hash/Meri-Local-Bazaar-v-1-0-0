import React from 'react';
import { Download, Clock, FolderOpen, ShieldAlert, CheckCircle2, PlayCircle } from 'lucide-react';
import { HOW_TO_STEPS, APP_CONFIG } from '../constants';

interface HowToDownloadProps {
  onDownloadClick: () => void;
}

export const HowToDownload: React.FC<HowToDownloadProps> = ({ onDownloadClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Download':
        return <Download className="w-6 h-6 text-orange-600" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-orange-600" />;
      case 'FolderOpen':
        return <FolderOpen className="w-6 h-6 text-orange-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-orange-600" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-orange-600" />;
      case 'PlayCircle':
      default:
        return <PlayCircle className="w-6 h-6 text-orange-600" />;
    }
  };

  return (
    <section id="how-to-download" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-extrabold uppercase tracking-wider">
            <span>Simple 6-Step Guide</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How to Download & Install
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Follow these 6 simple steps to install Meri Local Bazaar on your Android smartphone.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {HOW_TO_STEPS.map((item) => (
            <div
              key={item.step}
              className="relative bg-[#FBFBFC] hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-orange-300 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                    {getIcon(item.icon)}
                  </div>
                  <span className="px-3 py-1 bg-slate-900 text-white text-xs font-black rounded-full uppercase tracking-wider">
                    Step {item.step}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-medium">
                {item.step === 1 && "Direct official download link"}
                {item.step === 2 && `File size: ~${APP_CONFIG.fileSize}`}
                {item.step === 3 && "Opens in Android package installer"}
                {item.step === 4 && "Standard Android safety toggle"}
                {item.step === 5 && "Installs in ~3 seconds"}
                {item.step === 6 && "Start finding local deals"}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-12 text-center bg-orange-50 border border-orange-200/80 rounded-3xl p-8 max-w-2xl mx-auto shadow-xs">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
            Ready to install {APP_CONFIG.appName}?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            Click below to start downloading the official verified APK build ({APP_CONFIG.fileSize}).
          </p>
          <button
            onClick={onDownloadClick}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-base shadow-lg shadow-orange-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Download className="w-5 h-5" />
            <span>Download APK Now</span>
          </button>
        </div>

      </div>
    </section>
  );
};
