import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { AppScreenshots } from './components/AppScreenshots';
import { HowToDownload } from './components/HowToDownload';
import { AndroidSafetyNotice } from './components/AndroidSafetyNotice';
import { SupportSection } from './components/SupportSection';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms'>('home');
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  // Sync hash routing
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#privacy' || hash === '#/privacy') {
        setCurrentPage('privacy');
      } else if (hash === '#terms' || hash === '#/terms') {
        setCurrentPage('terms');
      } else {
        setCurrentPage('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavClick = (target: string) => {
    if (target === 'privacy') {
      setCurrentPage('privacy');
      window.location.hash = '#privacy';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'terms') {
      setCurrentPage('terms');
      window.location.hash = '#terms';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'home') {
      setCurrentPage('home');
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Anchor target like 'features', 'screenshots', 'how-to-download', 'support'
      if (currentPage !== 'home') {
        setCurrentPage('home');
        window.location.hash = '';
        setTimeout(() => {
          const el = document.getElementById(target);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenDownload = () => {
    setIsDownloadModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFC] text-slate-900 selection:bg-orange-500 selection:text-white">
      
      {/* Header */}
      <Header
        onNavClick={handleNavClick}
        onDownloadClick={handleOpenDownload}
        currentPage={currentPage}
      />

      {/* Main Pages */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <Hero onDownloadClick={handleOpenDownload} />
            <Features onDownloadClick={handleOpenDownload} />
            <AppScreenshots onDownloadClick={handleOpenDownload} />
            <HowToDownload onDownloadClick={handleOpenDownload} />
            <AndroidSafetyNotice />
            <SupportSection />
          </>
        )}

        {currentPage === 'privacy' && (
          <PrivacyPolicy
            onBack={() => handleNavClick('home')}
            onNavigate={handleNavClick}
            onDownloadClick={handleOpenDownload}
          />
        )}

        {currentPage === 'terms' && (
          <TermsConditions
            onBack={() => handleNavClick('home')}
            onNavigate={handleNavClick}
            onDownloadClick={handleOpenDownload}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavClick={handleNavClick}
        onDownloadClick={handleOpenDownload}
      />

      {/* Download Progress & Safe Installation Modal */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />

    </div>
  );
}

export default App;
