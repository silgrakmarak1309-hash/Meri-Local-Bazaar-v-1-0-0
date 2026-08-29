import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck, Mail, MessageCircle, Download, CheckCircle2 } from 'lucide-react';
import { APP_CONFIG } from '../constants';

interface PrivacyPolicyProps {
  onBack: () => void;
  onNavigate: (target: string) => void;
  onDownloadClick: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ 
  onBack, 
  onNavigate, 
  onDownloadClick 
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mailtoUrl = `mailto:${APP_CONFIG.supportEmail}?subject=Privacy%20Policy%20Inquiry%20-%20Meri%20Local%20Bazaar`;

  return (
    <div className="min-h-screen bg-[#FBFBFC] text-slate-900 pt-8 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-orange-600 bg-white border border-slate-200 hover:border-orange-200 px-4 py-2 rounded-xl shadow-xs transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <button
            onClick={onDownloadClick}
            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-xl shadow-xs transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download APK (v{APP_CONFIG.version})</span>
          </button>
        </div>

        {/* Document Card */}
        <article className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-12 shadow-xs space-y-8">
          
          {/* Header */}
          <div className="border-b border-slate-100 pb-6 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-extrabold uppercase tracking-wide">
              <ShieldCheck className="w-4 h-4 text-orange-600" />
              <span>Official Privacy Policy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Last updated: August 28, 2026 • Effective date: August 28, 2026
            </p>
          </div>

          {/* Intro Notice */}
          <div className="bg-orange-50/70 border border-orange-200/80 rounded-2xl p-5 text-sm text-slate-800 space-y-2">
            <p className="font-bold text-orange-950">
              Welcome to {APP_CONFIG.appName} ("{APP_CONFIG.tagline}").
            </p>
            <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
              We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how {APP_CONFIG.appName} collects, uses, stores, and safeguards your information when you use our Android mobile application and website.
            </p>
          </div>

          {/* Section 1: Information Collected */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-700 text-xs flex items-center justify-center font-bold">1</span>
              <span>Information Collected</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We collect information that you provide directly when using our marketplace application:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/70 space-y-1.5">
                <h3 className="font-bold text-sm text-slate-900">A. Account Information</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Basic user profile details including name, profile image, and credentials required for authenticating your account.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/70 space-y-1.5">
                <h3 className="font-bold text-sm text-slate-900">B. Contact Information</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Mobile telephone number, WhatsApp contact handle, and email address used for transaction communication.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/70 space-y-1.5">
                <h3 className="font-bold text-sm text-slate-900">C. User Uploaded Content</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Item photos, product descriptions, pricing, service offerings, and classified marketplace advertisements.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/70 space-y-1.5">
                <h3 className="font-bold text-sm text-slate-900">D. Location Information Provided by Users</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Locality, town name, or GPS location provided voluntarily to display nearby products and calculate distance radius.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: How Information is Used */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-700 text-xs flex items-center justify-center font-bold">2</span>
              <span>How Information is Used</span>
            </h2>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                <span>To facilitate local buying, selling, handyman services, and transport connections between users in the same neighborhood.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                <span>To filter and sort marketplace listings based on geographical proximity.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                <span>To provide customer support through official WhatsApp and email channels.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                <span>To maintain platform safety, detect fraud, and prevent spam.</span>
              </li>
            </ul>
          </section>

          {/* Section 3: Firebase and Third-Party Services */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-700 text-xs flex items-center justify-center font-bold">3</span>
              <span>Firebase and Third-Party Services</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We integrate reliable industry-standard third-party services:
            </p>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2 text-xs sm:text-sm text-slate-700">
              <p><strong>• Google Firebase:</strong> Provides real-time cloud database, backend hosting, user authentication, and crash logging.</p>
              <p><strong>• WhatsApp (Meta):</strong> Enables direct one-on-one buyer and seller negotiations via WhatsApp chat links.</p>
              <p><strong>• GitHub Releases:</strong> Used securely for hosting and delivering verified APK binary downloads.</p>
            </div>
          </section>

          {/* Section 4: Data Storage */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-700 text-xs flex items-center justify-center font-bold">4</span>
              <span>Data Storage & Security</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              All user records and uploaded content are stored on secure cloud servers with encryption in transit. We maintain technical and administrative safeguards to prevent unauthorized data access.
            </p>
          </section>

          {/* Section 5: User Rights & Data Deletion Requests */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-700 text-xs flex items-center justify-center font-bold">5</span>
              <span>User Rights & Data Deletion Requests</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              You retain the right to modify or delete your account and listings at any time.
            </p>
            <div className="bg-orange-50/80 border border-orange-200 rounded-2xl p-4 text-xs sm:text-sm text-slate-800 space-y-2">
              <p className="font-bold text-orange-950">How to request data deletion:</p>
              <p className="text-slate-700">
                To request permanent deletion of your account and uploaded data, email us at <strong>{APP_CONFIG.supportEmail}</strong> with the subject line <em>"Data Deletion Request"</em>. Requests are processed within 7 business days.
              </p>
            </div>
          </section>

          {/* Section 6: Changes to This Policy */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-700 text-xs flex items-center justify-center font-bold">6</span>
              <span>Changes to This Policy</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We may update this Privacy Policy from time to time. Any modifications will be posted on this page with an updated revision date.
            </p>
          </section>

          {/* Section 7: Contact Information */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-700 text-xs flex items-center justify-center font-bold">7</span>
              <span>Contact Information</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              If you have any questions or feedback regarding this policy, please reach out to us:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={mailtoUrl}
                className="p-4 rounded-2xl bg-slate-50 hover:bg-orange-50/60 border border-slate-200 hover:border-orange-200 flex items-center gap-3 transition-colors"
              >
                <Mail className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Email Support</div>
                  <div className="text-slate-500">{APP_CONFIG.supportEmail}</div>
                </div>
              </a>

              <a
                href={APP_CONFIG.whatsappChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-50 hover:bg-green-50/60 border border-slate-200 hover:border-green-200 flex items-center gap-3 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">WhatsApp Support</div>
                  <div className="text-slate-500">Instant Official Chat</div>
                </div>
              </a>
            </div>

            <div className="pt-4 flex items-center justify-between text-xs text-slate-500">
              <button
                onClick={() => onNavigate('terms')}
                className="text-orange-600 font-bold hover:underline"
              >
                Read Terms & Conditions →
              </button>
              <span>{APP_CONFIG.appName} Team</span>
            </div>
          </section>

        </article>

      </div>
    </div>
  );
};
