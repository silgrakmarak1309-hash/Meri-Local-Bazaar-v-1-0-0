import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowRight } from 'lucide-react';
import { APP_CONFIG } from '../constants';
import { AppLogo } from './AppLogo';

interface HeaderProps {
  onNavClick: (target: string) => void;
  onDownloadClick: () => void;
  currentPage: 'home' | 'privacy' | 'terms';
}

export const Header: React.FC<HeaderProps> = ({ onNavClick, onDownloadClick, currentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (target: string) => {
    setMobileMenuOpen(false);
    onNavClick(target);
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-200 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-orange-100' : 'bg-white border-b border-slate-100'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Logo & Brand Name */}
          <button 
            onClick={() => handleNav('home')} 
            className="flex items-center gap-3 text-left group focus:outline-none"
            aria-label="Meri Local Bazaar Home"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center">
              <AppLogo size={46} />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-orange-600 transition-colors">
                  {APP_CONFIG.appName}
                </span>
                <span className="hidden xs:inline-flex px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-orange-100 text-orange-700 uppercase tracking-wide">
                  Official APK
                </span>
              </div>
              <span className="text-xs text-slate-500 font-medium hidden sm:block">
                {APP_CONFIG.tagline}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button 
              onClick={() => handleNav('home')}
              className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition-colors ${
                currentPage === 'home' ? 'text-orange-600 bg-orange-50' : 'text-slate-700 hover:text-orange-600 hover:bg-slate-50'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNav('features')}
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-orange-600 hover:bg-slate-50 rounded-xl transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => handleNav('screenshots')}
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-orange-600 hover:bg-slate-50 rounded-xl transition-colors"
            >
              Screenshots
            </button>
            <button 
              onClick={() => handleNav('how-to-download')}
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-orange-600 hover:bg-slate-50 rounded-xl transition-colors"
            >
              How to Download
            </button>
            <button 
              onClick={() => handleNav('support')}
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-orange-600 hover:bg-slate-50 rounded-xl transition-colors"
            >
              Support
            </button>
          </nav>

          {/* Desktop Download Button CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onDownloadClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold text-sm shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Download className="w-4 h-4 animate-bounce" />
              <span>Download APK</span>
              <span className="text-[11px] bg-black/20 text-white/95 px-1.5 py-0.5 rounded-md font-semibold">v{APP_CONFIG.version}</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onDownloadClick}
              className="px-3 py-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs shadow-orange-500/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download APK</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-orange-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-1">
            <button
              onClick={() => handleNav('home')}
              className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:text-orange-600 hover:bg-orange-50 flex items-center justify-between"
            >
              <span>Home</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => handleNav('features')}
              className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:text-orange-600 hover:bg-orange-50 flex items-center justify-between"
            >
              <span>Features</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => handleNav('screenshots')}
              className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:text-orange-600 hover:bg-orange-50 flex items-center justify-between"
            >
              <span>App Screenshots</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => handleNav('how-to-download')}
              className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:text-orange-600 hover:bg-orange-50 flex items-center justify-between"
            >
              <span>How to Download</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => handleNav('support')}
              className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:text-orange-600 hover:bg-orange-50 flex items-center justify-between"
            >
              <span>Support</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-1">
              <button
                onClick={() => handleNav('privacy')}
                className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:text-orange-600 hover:bg-slate-50"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNav('terms')}
                className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:text-orange-600 hover:bg-slate-50"
              >
                Terms & Conditions
              </button>
            </div>

            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onDownloadClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white font-extrabold text-base shadow-lg shadow-orange-500/30"
              >
                <Download className="w-5 h-5" />
                <span>Download APK ({APP_CONFIG.fileSize})</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
