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
    <div className="min-h-screen p-4 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Result animation */}
        <div className={`mb-8 transform transition-all duration-1000 ${showAnimation ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          <div className="relative">
            <div className="text-8xl mb-4 animate-bounce">
              {profession.emoji}
            </div>
            <div className="absolute -top-8 -right-8 animate-spin">
              <Sparkles className="w-12 h-12 text-yellow-400" />
            </div>
            <div className="absolute -bottom-8 -left-8 animate-spin" style={{ animationDelay: '1s' }}>
              <Sparkles className="w-8 h-8 text-pink-400" />
            </div>
          </div>
        </div>

        {/* Profession reveal */}
        <div className={`mb-8 transform transition-all duration-1000 delay-500 ${showAnimation ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            You're a{profession.name.toLowerCase().startsWith('a') || profession.name.toLowerCase().startsWith('e') || profession.name.toLowerCase().startsWith('i') || profession.name.toLowerCase().startsWith('o') || profession.name.toLowerCase().startsWith('u') ? 'n' : ''}
          </h1>
          <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
            {profession.name}!
          </h2>
          <p className="text-xl md:text-2xl text-purple-200 max-w-2xl mx-auto">
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
                    <div className="text-3xl mb-2">{item.emoji}</div>
                    <div className="text-sm text-purple-200 capitalize">{category}</div>
                    <div className="text-xs text-purple-300">{item.name}</div>
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
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-purple-100">{fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-1500 ${showAnimation ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <button
            onClick={onRestart}
            className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 justify-center"
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
            className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20 hover:bg-white/20"
          >
            Share Result
          </button>
        </div>

        {/* Illustration */}
        <div className={`mt-12 transform transition-all duration-1000 delay-2000 ${showAnimation ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          <div className="text-6xl opacity-50">
            {profession.illustration}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;