import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import Character from './Character';
import { GameState } from '../types/game';

interface Item {
  id: string;
  name: string;
  emoji: string;
  imageUrl: string;
  color: string;
}

const Game: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const [selections, setSelections] = useState<GameState['selections']>({
    hat: null,
    top: null,
    pants: null,
    shoes: null
  });
  const [currentCategory, setCurrentCategory] = useState<'hat' | 'top' | 'pants' | 'shoes'>('hat');
  const [currentItems, setCurrentItems] = useState<Item[]>([]);

  const handleItemSelect = (item: Item) => {
    setSelections(prev => ({
      ...prev,
      [currentCategory]: {
        id: item.id,
        name: item.name,
        imageUrl: item.imageUrl,
        color: item.color
      }
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
      // Update category based on step
      const categories: Array<'hat' | 'top' | 'pants' | 'shoes'> = ['hat', 'top', 'pants', 'shoes'];
      setCurrentCategory(categories[currentStep]);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      // Update category based on step
      const categories: Array<'hat' | 'top' | 'pants' | 'shoes'> = ['hat', 'top', 'pants', 'shoes'];
      setCurrentCategory(categories[currentStep - 2]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('/images/landing-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="max-w-4xl w-full mx-auto relative z-10">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
          <div className="text-center mt-2">
            <span className="text-white/90 text-sm">Step {currentStep} of {totalSteps}</span>
          </div>
        </div>

        {/* Character display */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-48 h-48 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Character selections={selections} />
            </div>
            <div className="absolute -top-4 -right-4 animate-spin" style={{ animationDuration: '3s' }}>
              <Sparkles className="w-8 h-8 text-pink-400 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]" />
            </div>
          </div>
        </div>

        {/* Category selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            Choose Your {currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {currentItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemSelect(item)}
                className={`p-4 rounded-lg transition-all duration-200 transform hover:scale-105 ${
                  selections[currentCategory]?.id === item.id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_15px_rgba(236,72,153,0.5)]'
                    : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
                }`}
              >
                <div className="text-4xl mb-2">
                  <img 
                    src={item.imageUrl} 
                    alt={item.name}
                    className="w-12 h-12 object-contain mx-auto"
                  />
                </div>
                <div className="text-sm font-medium">{item.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`px-6 py-2 rounded-full text-white font-medium transition-all duration-200 ${
              currentStep === 1
                ? 'bg-white/20 cursor-not-allowed'
                : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]'
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={!selections[currentCategory]}
            className={`px-6 py-2 rounded-full text-white font-medium transition-all duration-200 ${
              !selections[currentCategory]
                ? 'bg-white/20 cursor-not-allowed'
                : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]'
            }`}
          >
            {currentStep === totalSteps ? 'See Results' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game; 