
import * as React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ParticleNetwork from './ParticleNetwork';
import { SplineSceneBasic } from './SplineSceneBasic';
import { InstagramIcon, FacebookIcon, LinkedInIcon, TikTokIcon, YouTubeIcon, PinterestIcon } from './icons';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#0D1117] text-gray-200 font-sans selection:bg-[#00FFC2] selection:text-black">
      <ParticleNetwork />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow container mx-auto px-6 py-12 flex items-center">
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
                 <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">Used by professionals at:</p>
                 <div className="flex flex-wrap gap-8 items-center justify-center lg:justify-start opacity-50 hover:opacity-80 transition-opacity duration-300">
                    <InstagramIcon className="w-6 h-6 text-gray-300" />
                    <FacebookIcon className="w-6 h-6 text-gray-300" />
                    <LinkedInIcon className="w-6 h-6 text-gray-300" />
                    <TikTokIcon className="w-6 h-6 text-gray-300" />
                    <YouTubeIcon className="w-6 h-6 text-gray-300" />
                    <PinterestIcon className="w-6 h-6 text-gray-300" />
                 </div>
              </div>
            </div>

            {/* Right Side: Spline Scene */}
            <div className="relative h-[500px] lg:h-[700px] w-full order-1 lg:order-2 animate-fade-in overflow-hidden">
              <SplineSceneBasic />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
