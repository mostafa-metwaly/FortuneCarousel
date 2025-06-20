import React from 'react';
import { ClothingItem, GameState } from '../types/game';
import Character from './Character';
import { ArrowLeft, Sparkles } from 'lucide-react';

interface GameStepProps {
  category: keyof GameState['selections'];
  clothingItems: ClothingItem[];
  selections: GameState['selections'];
  onClothingSelect: (category: keyof GameState['selections'], item: ClothingItem) => void;
  onPreviousStep: () => void;
}

const categoryTitles = {
  hat: 'Choose Your Hat',
  top: 'Pick Your Top',
  pants: 'Select Your Bottoms',
  shoes: 'Find Your Shoes'
};

const categoryDescriptions = {
  hat: 'Your headwear says a lot about your personality!',
  top: 'What you wear on top shows your professional style.',
  pants: 'Your bottom choice reveals your work preferences.',
  shoes: 'Your footwear determines how you move through life!'
};

const GameStep: React.FC<GameStepProps> = ({ 
  category, 
  clothingItems, 
  selections, 
  onClothingSelect,
  onPreviousStep
}) => {
  const steps = ['hat', 'top', 'pants', 'shoes'];
  const currentStepIndex = steps.indexOf(category);
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen p-4 flex flex-col relative bg-gradient-to-b from-[rgb(85,0,0)]/40 via-[rgb(27, 0, 0)]/80 to-[rgb(85,0,0)]/40">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('/images/typography.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="w-full max-w-4xl mx-auto relative z-10">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[rgb(85,0,0)] text-sm">Step {currentStepIndex + 1} of 4</span>
            <span className="text-[rgb(85,0,0)] text-sm">{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-[rgb(85,0,0)]/20 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-[rgb(85,0,0)] to-[rgb(120,0,0)] h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
          {/* Character display */}
          <div className="order-2 lg:order-1">
            <Character selections={selections} />
          </div>

          {/* Clothing selection */}
          <div className="order-1 lg:order-2">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <Sparkles className="w-8 h-8 text-[rgb(85,0,0)] animate-pulse" />
                {categoryTitles[category]}
              </h2>
              <p className="text-xl text-[rgb(85,0,0)]">{categoryDescriptions[category]}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {clothingItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onClothingSelect(category, item)}
                  className="group bg-gradient-to-r from-[rgb(85,0,0)]/10 to-[rgb(120,0,0)]/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:from-[rgb(85,0,0)]/20 hover:to-[rgb(120,0,0)]/20 hover:scale-105 transition-all duration-300 border border-[rgb(85,0,0)]/30 hover:border-[rgb(85,0,0)]/50"
                >
                  <div className="mb-3 group-hover:animate-bounce">
                    <img 
                      src={item.imageUrl} 
                      alt={item.name}
                      className="w-32 h-32 object-contain mx-auto"
                    />
                  </div>

                </button>
              ))}
            </div>

            {/* Back button (for future navigation) */}
            {currentStepIndex > 0 && (
              <div className="mt-8 text-center">
                <button 
                  onClick={onPreviousStep}
                  className="text-[rgb(85,0,0)] hover:text-[rgb(120,0,0)] transition-colors duration-200 flex items-center gap-2 mx-auto"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous Step
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameStep;