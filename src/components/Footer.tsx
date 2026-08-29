import React from 'react';
import { Download, Mail, MessageCircle, ShieldCheck } from 'lucide-react';
import { APP_CONFIG } from '../constants';
import { AppLogo } from './AppLogo';

interface FooterProps {
  onNavClick: (target: string) => void;
  onDownloadClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onDownloadClick }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center">
                <AppLogo size={44} />
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-white tracking-tight">
                  {APP_CONFIG.appName}
                </h3>
                <p className="text-xs text-orange-400 font-semibold">
                  {APP_CONFIG.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Official APK portal. Discover, buy, sell, hire services, and book cabs directly in your local neighborhood.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <span>Verified APK v{APP_CONFIG.version}</span>
              </span>
              <span>•</span>
              <span>100% Free & Safe</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavClick('home')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={onDownloadClick}
                  className="hover:text-orange-400 text-orange-400 font-bold transition-colors flex items-center gap-1.5 text-left"
                >
                  <Download className="w-4 h-4" />
                  <span>Download APK</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('privacy')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('terms')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('support')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Support
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Support */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Support
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={`mailto:${APP_CONFIG.supportEmail}`}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-orange-500/50 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span className="truncate">{APP_CONFIG.supportEmail}</span>
              </a>

              <a
                href={APP_CONFIG.whatsappChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-green-500/50 text-slate-300 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>WhatsApp Support</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © {APP_CONFIG.copyrightYear} {APP_CONFIG.appName}. All rights reserved.
          </div>
          <div className="text-slate-500">
            {APP_CONFIG.tagline}
          </div>
        </div>

      </div>
    </footer>
  );
};
