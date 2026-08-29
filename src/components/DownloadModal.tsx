import React, { useEffect, useState } from 'react';
import { Download, CheckCircle2, X, AlertTriangle, ShieldCheck, ExternalLink, MessageCircle, FileText, ArrowDownToLine, Smartphone } from 'lucide-react';
import { APP_CONFIG } from '../constants';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setDownloadProgress(0);
      setIsCompleted(false);

      // Trigger the direct APK download automatically
      const downloadLink = document.createElement('a');
      downloadLink.href = APP_CONFIG.apkDownloadUrl;
      downloadLink.setAttribute('download', 'meri_local_bazaar.apk');
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      // Simulated smooth progress for visual confirmation
      const interval = setInterval(() => {
        setDownloadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsCompleted(true);
            return 100;
          }
          return prev + 25;
        });
      }, 300);

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const whatsappUrl = APP_CONFIG.whatsappChatUrl;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-orange-100 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-3 pt-2">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shadow-inner">
            {isCompleted ? (
              <CheckCircle2 className="w-8 h-8 text-green-600 animate-in zoom-in-50 duration-300" />
            ) : (
              <ArrowDownToLine className="w-8 h-8 animate-bounce text-orange-600" />
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            {isCompleted ? "Download Started!" : "Preparing Your APK Download..."}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
            {isCompleted
              ? `meri_local_bazaar.apk (${APP_CONFIG.fileSize}) is downloading to your device.`
              : "Connecting to verified release server..."}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mt-5 space-y-2">
          <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-orange-600 to-amber-500 h-2.5 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${downloadProgress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-[11px] font-bold text-slate-500">
            <span>{isCompleted ? "Download Triggered" : "Downloading APK"}</span>
            <span className="text-orange-600">{downloadProgress}%</span>
          </div>
        </div>

        {/* 3 Quick Installation Steps Reminder */}
        <div className="mt-6 bg-[#FBFBFC] border border-slate-200/80 rounded-2xl p-4 text-xs text-slate-700 space-y-2.5">
          <div className="font-bold text-slate-900 flex items-center space-x-1.5 pb-1 border-b border-slate-100">
            <Smartphone className="w-4 h-4 text-orange-600" />
            <span>How to install once downloaded:</span>
          </div>

          <div className="flex items-start space-x-2">
            <span className="w-4 h-4 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
              1
            </span>
            <span>Tap the downloaded file from your notification bar or <strong>Downloads</strong> folder.</span>
          </div>

          <div className="flex items-start space-x-2">
            <span className="w-4 h-4 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
              2
            </span>
            <span>If prompted: tap <strong>Settings</strong> and enable <em>"Allow from this source"</em>.</span>
          </div>

          <div className="flex items-start space-x-2">
            <span className="w-4 h-4 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
              3
            </span>
            <span>Tap <strong>Install</strong>, then open <strong>Meri Local Bazaar</strong>.</span>
          </div>
        </div>

        {/* Manual Direct Link fallback & WhatsApp helper */}
        <div className="mt-6 space-y-3">
          <a
            href={APP_CONFIG.apkDownloadUrl}
            className="w-full py-3 px-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-md transition-all text-center block"
          >
            <Download className="w-4 h-4" />
            <span>Click Here If Download Didn't Start</span>
          </a>

          <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span className="flex items-center space-x-1">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              <span>100% Safe APK</span>
            </span>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 font-bold hover:underline flex items-center space-x-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Need help? WhatsApp us</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
