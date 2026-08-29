import React from 'react';
import { ShoppingBag, MapPin, MessageSquare, Car, Wrench, Sparkles, Check, ArrowRight } from 'lucide-react';
import { FEATURES } from '../constants';

interface FeaturesProps {
  onDownloadClick: () => void;
}

export const Features: React.FC<FeaturesProps> = ({ onDownloadClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6" />;
      case 'Car':
        return <Car className="w-6 h-6" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="features" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-extrabold uppercase tracking-wider">
            <span>Built For Your Area</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            App Features & Capabilities
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            All essential local buying, selling, handyman hiring, and ride booking features in one clean Android app.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-[#FBFBFC] hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-orange-300 shadow-xs hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${feature.accent} text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                    {getIcon(feature.icon)}
                  </div>
                  <span className="text-xs font-bold text-slate-400 bg-slate-100 group-hover:bg-orange-50 group-hover:text-orange-600 px-2.5 py-1 rounded-full transition-colors">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5 text-green-700">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Available in APK</span>
                </span>
                <button
                  onClick={onDownloadClick}
                  className="text-orange-600 hover:text-orange-700 font-bold flex items-center gap-1"
                >
                  <span>Install</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
