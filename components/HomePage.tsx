
import * as React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ParticleNetwork from './ParticleNetwork';
import SplineScene from './SplineScene';

export default function HomePage() {
  // Using a known working public Spline scene
  const robotScene = 'https://prod.spline.design/kZDDjO5HuC9GJ92h/scene.splinecode';

  return (
    <div className="relative min-h-screen bg-[#0D1117] text-gray-200 font-sans selection:bg-[#00FFC2] selection:text-black">
      <ParticleNetwork />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow container mx-auto px-6 py-12 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
            {/* Left Side: Content */}
            <div className="space-y-8 order-2 lg:order-1">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Meet Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFC2] to-sky-400">
                  Home Robot
                </span>
              </h1>

              <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
                A friendly assistant that helps around the house — check schedules, 
                control devices, and guide guests. Interact with it directly from 
                this homepage using a beautiful 3D model.
              </p>

              <ul className="space-y-4 text-gray-300">
                {[
                  'Interactive Spline 3D robot',
                  'Lazy-loaded for performance',
                  'Spotlight background effect',
                  'Fully responsive'
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#00FFC2] rounded-full mr-4" />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 pt-6">
                <button className="px-8 py-4 bg-[#00FFC2] hover:bg-teal-300 text-black font-bold rounded-lg transition-transform hover:scale-105 duration-200 shadow-[0_0_20px_theme(colors.teal.400/40%)]">
                  Talk to robot
                </button>
                <button className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-medium rounded-lg transition-colors duration-200">
                  Learn more
                </button>
              </div>
            </div>

            {/* Right Side: Spline Scene */}
            <div className="relative h-[500px] lg:h-[700px] w-full order-1 lg:order-2 animate-fade-in">
              <SplineScene 
                scene={robotScene} 
                className="h-full w-full shadow-2xl shadow-black/50 rounded-2xl border border-white/5" 
              />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
