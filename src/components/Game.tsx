import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import Character from './Character';

interface Item {
  id: string;
  name: string;
  emoji: string;
}

interface SelectedItems {
  [key: string]: string;
}

const Game: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const [selectedItems, setSelectedItems] = useState<SelectedItems>({});
  const [currentCategory, setCurrentCategory] = useState('Top');
  const [currentItems, setCurrentItems] = useState<Item[]>([]);

  const handleItemSelect = (item: Item) => {
    setSelectedItems(prev => ({
      ...prev,
      [currentCategory]: item.id
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
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
              className="h-full bg-gradient-to-r from-red-600 to-red-800 transition-all duration-300"
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
              <Character selectedItems={selectedItems} />
            </div>
            <div className="absolute -top-4 -right-4 animate-spin" style={{ animationDuration: '3s' }}>
              <Sparkles className="w-8 h-8 text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.5)]" />
            </div>
          </div>
        </div>

        {/* Category selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            Choose Your {currentCategory}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {currentItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemSelect(item)}
                className={`p-4 rounded-lg transition-all duration-200 transform hover:scale-105 ${
                  selectedItems[currentCategory] === item.id
                    ? 'bg-gradient-to-r from-red-600 to-red-800 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]'
                    : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
                }`}
              >
                <div className="text-4xl mb-2">{item.emoji}</div>
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
                : 'bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 hover:shadow-[0_0_15px_rgba(220,38,38,0.5)]'
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={!selectedItems[currentCategory]}
            className={`px-6 py-2 rounded-full text-white font-medium transition-all duration-200 ${
              !selectedItems[currentCategory]
                ? 'bg-white/20 cursor-not-allowed'
                : 'bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 hover:shadow-[0_0_15px_rgba(220,38,38,0.5)]'
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