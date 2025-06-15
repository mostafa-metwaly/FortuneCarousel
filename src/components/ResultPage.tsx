import React, { useState, useEffect } from 'react';
import { Profession, GameState } from '../types/game';
import { RefreshCw, Sparkles, TrendingUp } from 'lucide-react';

interface ResultPageProps {
  profession: Profession;
  selections: GameState['selections'];
  onRestart: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ profession, selections, onRestart }) => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  return (
    <div className="min-h-screen p-4 flex items-center justify-center relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('/images/landing-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto text-center relative z-10 flex flex-col lg:flex-row gap-8 items-center pt-32">
        {/* Character Image */}
        <div className="w-full lg:w-1/3  flex-shrink-0">
          {/* Profession reveal */}
          <div className={`mb-8 transform transition-all duration-1000 delay-500 ${showAnimation ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              You're a{profession.name.toLowerCase().startsWith('a') || profession.name.toLowerCase().startsWith('e') || profession.name.toLowerCase().startsWith('i') || profession.name.toLowerCase().startsWith('o') || profession.name.toLowerCase().startsWith('u') ? 'n' : ''}
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[rgb(85,0,0)] to-[rgb(120,0,0)] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] mb-3">
              {profession.name}!
            </h2>
          </div>
          {/* Character Image */}
          <div className="relative w-56 h-121 mx-auto flex items-center justify-center">
            <img 
              src={profession.characterUrl} 
              alt={`${profession.name} Character`}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Results Content */}
        <div className="w-full lg:w-2/3 " >
          {/* Profession reveal */}
          <div className={`mb-8 transform transition-all duration-1000 delay-500 ${showAnimation ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <p className="text-lg md:text-xl text-red-200 max-w-xl mx-auto mb-6">
              {profession.description}
            </p>
          </div>

          {/* Your outfit */}
          <div className={`mb-8 transform transition-all duration-1000 delay-700 ${showAnimation ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2">
              <TrendingUp className="w-6 h-6 text-green-400" />
              Your Winning Style
            </h3>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto">
              <div className="grid grid-cols-4 gap-4">
                {Object.entries(selections).map(([category, item]) => (
                  item && (
                    <div key={category} className="text-center">
                      <div className="mb-2">
                        <img 
                          src={item.imageUrl} 
                          alt={item.name}
                          className="w-12 h-12 object-contain mx-auto"
                        />
                      </div>
                      <div className="text-sm text-red-200 capitalize">{category}</div>
                      <div className="text-xs text-red-300">{item.name}</div>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>

          {/* Fun facts */}
          <div className={`mb-8 transform transition-all duration-1000 delay-1000 ${showAnimation ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h3 className="text-2xl font-bold text-white mb-6">Fun Career Facts</h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {profession.facts.map((fact, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-left"
                  style={{ animationDelay: `${1200 + index * 200}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-red-100">{fact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-1500 ${showAnimation ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <button
              onClick={onRestart}
              className="group bg-gradient-to-r from-[rgb(85,0,0)] to-[rgb(120,0,0)] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 justify-center"
            >
              <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              Try Different Style
            </button>
            
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Style Fortune Result',
                    text: `I'm a ${profession.name} according to Style Fortune! What's your style prediction?`,
                    url: window.location.href
                  });
                }
              }}
              className="bg-gradient-to-r from-[rgb(85,0,0)]/20 to-[rgb(120,0,0)]/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 border border-[rgb(85,0,0)]/30 hover:from-[rgb(85,0,0)]/30 hover:to-[rgb(120,0,0)]/30"
            >
              Share Result
            </button>
          </div>


        </div>
      </div>
    </div>
  );
};

export default ResultPage;