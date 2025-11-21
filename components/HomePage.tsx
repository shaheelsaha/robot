
import * as React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ParticleNetwork from './ParticleNetwork';
import { SplineSceneBasic } from './SplineSceneBasic';
import { 
  InstagramIcon, FacebookIcon, LinkedInIcon, TikTokIcon, YouTubeIcon, PinterestIcon,
  DashboardIcon, SparklesIcon, ScheduleIcon, UserIcon, AnalyticsIcon, LockIcon
} from './icons';

const features = [
  {
    icon: <ScheduleIcon className="w-6 h-6" />,
    title: "Smart Scheduling",
    description: "Plan, organize, and schedule content across all your social channels in one intuitive calendar."
  },
  {
    icon: <SparklesIcon className="w-6 h-6" />,
    title: "AI Auto-Response",
    description: "Never miss a lead. Our AI engages with comments and DMs instantly, 24/7, keeping your audience hooked."
  },
  {
    icon: <UserIcon className="w-6 h-6" />,
    title: "Lead Qualification",
    description: "Automatically filter and qualify leads before they reach your CRM, saving you hours of manual work."
  },
  {
    icon: <DashboardIcon className="w-6 h-6" />,
    title: "Unified Dashboard",
    description: "Manage Instagram, LinkedIn, TikTok, and more from a single, powerful command center."
  },
  {
    icon: <AnalyticsIcon className="w-6 h-6" />,
    title: "Real-time Analytics",
    description: "Track performance, growth, and engagement metrics to make data-driven decisions."
  },
  {
    icon: <LockIcon className="w-6 h-6" />,
    title: "Enterprise Security",
    description: "Your data is safe with us. We use industry-standard encryption and security protocols."
  }
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#0D1117] text-gray-200 font-sans selection:bg-[#00FFC2] selection:text-black">
      <ParticleNetwork />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="container mx-auto px-6 py-12 lg:py-20 flex items-center min-h-[80vh]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
              {/* Left Side: Content */}
              <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                  Spend your time <span className="text-[#00FFC2]">closing deals</span>, not chasing unqualified leads.
                  <br className="hidden lg:block" />
                  <span className="block mt-3">
                    Let our AI do the <span className="text-[#00FFC2]">filtering for you</span>.
                  </span>
                </h1>

                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  SAHA AI automatically qualifies leads, handles replies and follow-ups, and updates your CRM without any manual work.
                </p>

                <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                  <Link to="/register" className="px-8 py-4 bg-[#00FFC2] hover:bg-teal-300 text-black font-bold rounded-lg transition-transform hover:scale-105 duration-200 shadow-[0_0_20px_theme(colors.teal.400/40%)]">
                    Get Started for Free
                  </Link>
                  <button className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-medium rounded-lg transition-colors duration-200">
                    View Demo
                  </button>
                </div>

                {/* Social Proof */}
                <div className="pt-10">
                   <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">Integrates seamlessly with:</p>
                   <div className="flex flex-wrap gap-8 items-center justify-center lg:justify-start opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                      <InstagramIcon className="w-6 h-6 hover:text-[#E4405F] transition-colors" />
                      <FacebookIcon className="w-6 h-6 hover:text-[#1877F2] transition-colors" />
                      <LinkedInIcon className="w-6 h-6 hover:text-[#0A66C2] transition-colors" />
                      <TikTokIcon className="w-6 h-6 hover:text-white transition-colors" />
                      <YouTubeIcon className="w-6 h-6 hover:text-[#FF0000] transition-colors" />
                      <PinterestIcon className="w-6 h-6 hover:text-[#E60023] transition-colors" />
                   </div>
                </div>
              </div>

              {/* Right Side: Spline Scene */}
              <div className="relative h-[500px] lg:h-[700px] w-full order-1 lg:order-2 animate-fade-in overflow-hidden rounded-2xl">
                <SplineSceneBasic />
                {/* Gradient overlay for seamless blending at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D1117] to-transparent pointer-events-none"></div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-24 bg-[#0D1117] relative z-10 border-t border-white/5">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
                <h2 className="text-[#00FFC2] font-semibold tracking-widest uppercase text-sm mb-3">Features</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Everything you need to dominate social media.</h3>
                <p className="text-gray-400 text-lg">Stop juggling multiple tools. SAHA AI consolidates your entire workflow into one powerful, automated platform.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, i) => (
                  <div key={i} className="bg-gray-900/40 border border-white/10 p-8 rounded-2xl hover:bg-gray-800/60 transition-all duration-300 hover:-translate-y-1 group">
                    <div className="w-12 h-12 bg-[#00FFC2]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00FFC2]/20 transition-colors">
                      <div className="text-[#00FFC2]">{feature.icon}</div>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
