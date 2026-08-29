import React, { useEffect } from 'react';
import { ArrowLeft, FileText, Mail, MessageCircle, Download, CheckCircle2, AlertOctagon } from 'lucide-react';
import { APP_CONFIG } from '../constants';

interface TermsConditionsProps {
  onBack: () => void;
  onNavigate: (target: string) => void;
  onDownloadClick: () => void;
}

export const TermsConditions: React.FC<TermsConditionsProps> = ({
  onBack,
  onNavigate,
  onDownloadClick,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mailtoUrl = `mailto:${APP_CONFIG.supportEmail}?subject=Terms%20and%20Conditions%20Inquiry%20-%20Meri%20Local%20Bazaar`;

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

        {/* Main Document Card */}
        <article className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-12 shadow-xs space-y-8">
          
          {/* Header */}
          <div className="border-b border-slate-100 pb-6 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-extrabold uppercase tracking-wide">
              <FileText className="w-4 h-4 text-orange-600" />
              <span>Official Terms & Conditions</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Last updated: August 28, 2026 • Effective date: August 28, 2026
            </p>
          </div>

          {/* Intro Notice */}
          <div className="bg-orange-50/70 border border-orange-200/80 rounded-2xl p-5 text-sm text-slate-800 space-y-2">
            <p className="font-bold text-orange-950">
              Please read these Terms & Conditions carefully before downloading or using {APP_CONFIG.appName}.
            </p>
            <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
              By accessing this website, downloading the APK, or using the application, you agree to be bound by these terms. If you do not agree with any part of these terms, please do not use the application or website.
            </p>
          </div>

          {/* Section 1: Acceptance of Terms */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-700 text-xs flex items-center justify-center font-bold">1</span>
              <span>Acceptance of Terms</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              These Terms & Conditions govern your access and use of the {APP_CONFIG.appName} Android application and official download website. By installing the APK or creating an account, you affirm that you possess the legal capacity to enter into these terms.
            </p>
          </section>

          {/* Section 2: Platform Purpose */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-700 text-xs flex items-center justify-center font-bold">2</span>
              <span>Platform Purpose</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {APP_CONFIG.appName} operates as a local digital marketplace and neighborhood directory. It facilitates direct connections between local buyers, sellers, service providers (such as electricians, plumbers, and mechanics), and independent taxi/cab drivers. {APP_CONFIG.appName} is not a party to any direct transaction or agreement between users.
            </p>
          </section>

          {/* Section 3: User Responsibilities */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-700 text-xs flex items-center justify-center font-bold">3</span>
              <span>User Responsibilities</span>
            </h2>
            <ul className="space-y-2 text-sm text-slate-600 pl-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                <span>Provide genuine, truthful information in your classified listings and profile.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                <span>Maintain the confidentiality of your mobile number and credentials.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                <span>Treat other community members, sellers, service providers, and drivers courteously and honestly.</span>
              </li>
            </ul>
          </section>

          {/* Section 4: User Generated Content */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-700 text-xs flex items-center justify-center font-bold">4</span>
              <span>User Generated Content</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              You retain ownership of the photos, text descriptions, and classified listings you publish. You grant {APP_CONFIG.appName} a non-exclusive license to display and distribute your listings to nearby buyers on the platform.
            </p>
          </section>

          {/* Section 5: Prohibited Activities */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-700 text-xs flex items-center justify-center font-bold">5</span>
              <span>Prohibited Activities</span>
            </h2>
            <div className="p-4 bg-red-50/70 border border-red-200/80 rounded-2xl space-y-2 text-xs sm:text-sm text-slate-800">
              <p className="font-bold text-red-950 flex items-center gap-1.5">
                <AlertOctagon className="w-4 h-4 text-red-600" />
                <span>Strictly forbidden on {APP_CONFIG.appName}:</span>
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>Listing stolen, prohibited, counterfeit, or hazardous products.</li>
                <li>Posting fraudulent advertisements, fake identity claims, or advance payment scams.</li>
                <li>Harassing or spamming marketplace users.</li>
                <li>Decompiling, modifying, or redistributing tampered versions of the APK.</li>
              </ul>
            </div>
          </section>

          {/* Section 6: Marketplace Safety */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-700 text-xs flex items-center justify-center font-bold">6</span>
              <span>Marketplace Safety</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Always inspect products in person in a safe, public local area before making payments. Do not transfer advance payments to unverified parties. {APP_CONFIG.appName} does not handle escrow or guarantee offline transactions.
            </p>
          </section>

          {/* Section 7: Third-Party Services */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-700 text-xs flex items-center justify-center font-bold">7</span>
              <span>Third-Party Services</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our app integrates external services such as WhatsApp for direct communication and Google Firebase for database storage. Use of those features is subject to their respective terms.
            </p>
          </section>

          {/* Section 8: APK Download and Installation */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-700 text-xs flex items-center justify-center font-bold">8</span>
              <span>APK Download and Installation</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              The genuine {APP_CONFIG.appName} APK is distributed exclusively through this official website and our verified GitHub release repository. Only install official builds to protect your device.
            </p>
          </section>

          {/* Section 9: Limitation of Liability */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-700 text-xs flex items-center justify-center font-bold">9</span>
              <span>Limitation of Liability</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              To the fullest extent permitted by law, {APP_CONFIG.appName} and its team shall not be liable for any indirect, incidental, or consequential damages resulting from marketplace interactions or deals between users.
            </p>
          </section>

          {/* Section 10: Account Suspension */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-700 text-xs flex items-center justify-center font-bold">10</span>
              <span>Account Suspension</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We reserve the right to suspend or terminate accounts and delete listings that violate these terms or compromise community safety.
            </p>
          </section>

          {/* Section 11: Changes to Terms */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-700 text-xs flex items-center justify-center font-bold">11</span>
              <span>Changes to Terms</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We may update these terms at any time. Continued use of {APP_CONFIG.appName} constitutes agreement to the modified terms.
            </p>
          </section>

          {/* Section 12: Contact Information */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-700 text-xs flex items-center justify-center font-bold">12</span>
              <span>Contact Information</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              For questions regarding these Terms & Conditions, please contact us:
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
                onClick={() => onNavigate('privacy')}
                className="text-orange-600 font-bold hover:underline"
              >
                ← Read Privacy Policy
              </button>
              <span>{APP_CONFIG.appName} Team</span>
            </div>
          </section>

        </article>

      </div>
    </div>
  );
};
