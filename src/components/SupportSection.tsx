import React from 'react';
import { Mail, MessageCircle, HelpCircle, ArrowUpRight } from 'lucide-react';
import { APP_CONFIG } from '../constants';

export const SupportSection: React.FC = () => {
  const mailtoUrl = `mailto:${APP_CONFIG.supportEmail}?subject=${encodeURIComponent("Meri Local Bazaar - App Download & Support")}`;

  return (
    <section id="support" className="py-16 sm:py-24 bg-[#FBFBFC] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Support Card */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-xs hover:shadow-md transition-shadow">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-extrabold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>Direct Assistance</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Need Help?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Our support team is here to help you with download and installation questions.
            </p>
          </div>

          {/* Exactly 2 Support Buttons (NO CALL SUPPORT) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
            
            {/* Email Support Button */}
            <a
              href={mailtoUrl}
              className="group relative flex items-center justify-between p-5 sm:p-6 rounded-2xl bg-orange-50/80 hover:bg-orange-100/80 border border-orange-200 text-orange-950 transition-all duration-200 shadow-xs hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
              aria-label="Email Support"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-orange-700 uppercase tracking-wide">
                    Official Email
                  </span>
                  <span className="block text-base font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors">
                    Email Support
                  </span>
                  <span className="block text-xs text-slate-500 font-medium truncate max-w-[150px] sm:max-w-none">
                    {APP_CONFIG.supportEmail}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-orange-600 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0" />
            </a>

            {/* WhatsApp Support Button */}
            <a
              href={APP_CONFIG.whatsappChatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-5 sm:p-6 rounded-2xl bg-[#E8F8EE] hover:bg-[#DDF4E6] border border-green-200 text-slate-900 transition-all duration-200 shadow-xs hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
              aria-label="WhatsApp Support"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-green-700 uppercase tracking-wide">
                    Instant Chat
                  </span>
                  <span className="block text-base font-extrabold text-slate-900 group-hover:text-green-700 transition-colors">
                    WhatsApp Support
                  </span>
                  <span className="block text-xs text-slate-500 font-medium">
                    Direct Official Chat
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-green-600 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0" />
            </a>

          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-500">
              Response time: Quick assistance via WhatsApp and Email for all download questions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
