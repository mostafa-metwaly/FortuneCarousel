import React from 'react';
import { Sparkles, Play } from 'lucide-react';

interface LandingPageProps {
  onStartGame: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartGame }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center relative pt-32">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('/images/landing-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto relative z-10">
        {/* Animated character preview */}
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce" style={{ animationDuration: '1.5s' }}>
            <img 
              src="/images/character/face.png" 
              alt="Character preview"
              className="w-32 h-32 object-cover rounded-full"
            />
          </div>
          <div className="absolute -top-4 -right-4 animate-spin" style={{ animationDuration: '3s' }}>
            <Sparkles className="w-12 h-12 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
          </div>
          <div className="absolute -bottom-4 -left-4 animate-spin" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
            <Sparkles className="w-8 h-8 text-red-400 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" style={{ animationDuration: '0.5s' }}>
          <span className="text-white">Style</span>
          <span className="bg-gradient-to-r from-[rgb(85,0,0)] to-[rgb(120,0,0)] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            Fortune
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] font-semibold" style={{ animationDuration: '0.5s', animationDelay: '0.2s' }}>
          Your job based on your choices!
        </p>

        <p className="text-lg text-white/90 mb-12 animate-fade-in drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] leading-relaxed" style={{ animationDuration: '0.5s', animationDelay: '0.4s' }}>
          Pick your perfect outfit and let our magic algorithm predict the career that matches your unique style. 
          Ready for a fashion adventure?
        </p>

        {/* Start button */}
        <button
          onClick={onStartGame}
          className="group bg-gradient-to-r from-[rgb(85,0,0)] to-[rgb(120,0,0)] text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(85,0,0,0.5)] animate-fade-in flex items-center gap-3 mx-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
          style={{ animationDuration: '0.5s', animationDelay: '0.6s' }}
        >
          <Play className="w-6 h-6 group-hover:animate-pulse" style={{ animationDuration: '0.8s' }} />
          Start Your Style Journey
        </button>
      </div>
    </div>
  );
};

export default LandingPage;