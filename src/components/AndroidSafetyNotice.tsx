import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { APP_CONFIG } from '../constants';

export const AndroidSafetyNotice: React.FC = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-amber-50/90 via-orange-50/50 to-white border border-orange-200/90 rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
            {/* Friendly Shield Icon */}
            <div className="w-12 h-12 rounded-2xl bg-orange-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-orange-600/20">
              <ShieldCheck className="w-6 h-6" />
            </div>

            {/* Content text */}
            <div className="space-y-2.5 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-orange-900 bg-orange-100 px-2.5 py-0.5 rounded-full">
                  Android Safety Notice
                </span>
                <span className="text-xs text-slate-500 font-medium">Standard Device Information</span>
              </div>

              <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                Android may show a security message when installing an APK downloaded outside the Play Store. Follow your device instructions and only install the official {APP_CONFIG.appName} APK from this website.
              </p>

              <div className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>100% Safe & Clean APK</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Official Verified Package</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>No Harmful Permissions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
