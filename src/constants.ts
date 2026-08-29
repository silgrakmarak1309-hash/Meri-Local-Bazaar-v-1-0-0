/**
 * Meri Local Bazaar - Official APK Portal Configuration
 * Centralized constant values for APK download URL, contact info, and features.
 */

export const APP_CONFIG = {
  appName: "Meri Local Bazaar",
  tagline: "Apne Area Ka Digital Marketplace",
  apkDownloadUrl: "https://github.com/silgrakmarak1309-hash/Meri-Local-Bazaar-1/releases/download/v.1.0.0/meri_local_bazaar.apk",
  supportEmail: "merilocalbazaar@gmail.com",
  whatsappChatUrl: "https://wa.me/916009092096?text=Hi%20Meri%20Local%20Bazaar%20Support%2C%20I%20need%20assistance%20regarding%20the%20APK%20download%20or%20installation.",
  version: "1.0.0",
  fileSize: "14.2 MB",
  minAndroid: "Android 7.0+",
  copyrightYear: 2026,
  releaseDate: "August 2026"
};

export const FEATURES = [
  {
    id: "buy-sell",
    title: "🛍 Buy & Sell Locally",
    description: "Buy and sell products easily in your local area with zero middleman commissions.",
    category: "Marketplace",
    icon: "ShoppingBag",
    badge: "Fast & Direct",
    accent: "from-orange-500 to-amber-500"
  },
  {
    id: "local-marketplace",
    title: "📍 Local Marketplace",
    description: "Discover products and services near you with instant location proximity filtering.",
    category: "Discovery",
    icon: "MapPin",
    badge: "Near You",
    accent: "from-amber-500 to-orange-600"
  },
  {
    id: "easy-contact",
    title: "💬 Easy Contact",
    description: "Connect with sellers easily through chat and direct WhatsApp messaging.",
    category: "Communication",
    icon: "MessageSquare",
    badge: "WhatsApp Ready",
    accent: "from-green-500 to-emerald-600"
  },
  {
    id: "cab-taxi",
    title: "🚕 Cab & Taxi",
    description: "Find local cab, taxi and transport services for quick daily commutes and tours.",
    category: "Transport",
    icon: "Car",
    badge: "Direct Ride",
    accent: "from-blue-500 to-indigo-600"
  },
  {
    id: "local-services",
    title: "🛠 Local Services",
    description: "Find electricians, plumbers, repair services and more skilled pros in your town.",
    category: "Services",
    icon: "Wrench",
    badge: "Verified Pros",
    accent: "from-purple-500 to-violet-600"
  },
  {
    id: "better-discovery",
    title: "⭐ Better Local Discovery",
    description: "Explore useful local listings, jobs, vehicles, and properties all in one place.",
    category: "Community",
    icon: "Sparkles",
    badge: "All-in-One",
    accent: "from-rose-500 to-orange-500"
  }
];

export const HOW_TO_STEPS = [
  {
    step: 1,
    title: "Click the Download APK button",
    description: "Tap any download button on this official website to start downloading the official APK.",
    icon: "Download"
  },
  {
    step: 2,
    title: "Wait for the APK file to download",
    description: "Wait a few seconds for the package (~14.2 MB) to safely download to your device.",
    icon: "Clock"
  },
  {
    step: 3,
    title: "Open the downloaded APK file",
    description: "Tap the download notification or locate 'meri_local_bazaar.apk' in your Downloads folder.",
    icon: "FolderOpen"
  },
  {
    step: 4,
    title: "If Android asks, allow installation from this source",
    description: "Go to Settings on the prompt and enable 'Allow from this source' for your browser or file manager.",
    icon: "ShieldAlert"
  },
  {
    step: 5,
    title: "Click Install",
    description: "Tap 'Install' and let the Android package manager complete the setup in 3 seconds.",
    icon: "CheckCircle2"
  },
  {
    step: 6,
    title: "Open Meri Local Bazaar and start exploring",
    description: "Launch the app from your home screen and start buying, selling, and finding local deals!",
    icon: "PlayCircle"
  }
];

export const SCREENSHOT_TABS = [
  { id: 'feed', label: 'Home Feed', title: 'Local Marketplace Feed', subtitle: 'Browse verified neighborhood deals in real time' },
  { id: 'buysell', label: 'Buy & Sell', title: 'Sell Anything in 30s', subtitle: 'Upload photos, set price & connect with buyers' },
  { id: 'services', label: 'Services', title: 'Local Handymen & Pros', subtitle: 'Electricians, plumbers, mechanics ready to help' },
  { id: 'taxi', label: 'Cab & Taxi', title: 'Direct Taxi Booking', subtitle: 'Call or WhatsApp drivers without high aggregator cuts' },
  { id: 'chat', label: 'WhatsApp Connect', title: 'Instant Seller Chat', subtitle: 'Negotiate deals and arrange local pickups securely' }
];
