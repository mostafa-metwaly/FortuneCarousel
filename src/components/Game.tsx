import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import Character from './Character';
import { GameState, ClothingItem } from '../types/game';
import GameStep from './GameStep';
import ResultPage from './ResultPage';

interface Item {
  id: string;
  name: string;
  emoji: string;
  imageUrl: string;
  color: string;
}

const steps: (keyof GameState['selections'])[] = ['hat', 'top', 'pants', 'shoes'];

const Game: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<keyof GameState['selections']>('hat');
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
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    if (currentStep > steps[0]) {
      setCurrentStep(steps[steps.indexOf(currentStep) - 1]);
      // Update category based on step
      setCurrentCategory(steps[steps.indexOf(currentStep) - 1]);
    }
  };

  const handleClothingSelect = (category: keyof GameState['selections'], item: ClothingItem) => {
    setSelections(prev => ({
      ...prev,
      [category]: item
    }));
  };

  const handlePreviousStep = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
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
              className="h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-200"
              style={{ width: `${((steps.indexOf(currentStep) + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
          <div className="text-center mt-2">
            <span className="text-white/90 text-sm">Step {steps.indexOf(currentStep) + 1} of {steps.length}</span>
          </div>
        </div>

        {/* Character display */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-48 h-48 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Character selections={selections} />
            </div>
            <div className="absolute -top-4 -right-4 animate-spin" style={{ animationDuration: '4s' }}>
              <Sparkles className="w-8 h-8 text-red-400 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]" />
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
                className={`p-4 rounded-lg transition-all duration-200 transform hover:scale-102 ${
                  selections[currentCategory]?.id === item.id
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-[0_0_15px_rgba(236,72,153,0.5)]'
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
            disabled={currentStep === steps[0]}
            className={`px-6 py-2 rounded-full text-white font-medium transition-all duration-200 ${
              currentStep === steps[0]
                ? 'bg-white/20 cursor-not-allowed'
                : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]'
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
                : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]'
            }`}
          >
            {currentStep === steps[steps.length - 1] ? 'See Results' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game; 