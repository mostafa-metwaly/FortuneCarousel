import React from 'react';
import { GameState } from '../types/game';

interface CharacterProps {
  selections: GameState['selections'];
}

const Character: React.FC<CharacterProps> = ({ selections }) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-2xl font-bold text-white mb-6">Your Style Avatar</h3>
      
      <div className="relative w-80 h-96 bg-gradient-to-br from-[rgb(85,0,0)]/20 to-[rgb(120,0,0)]/20 rounded-3xl border-2 border-[rgb(85,0,0)]/30 backdrop-blur-sm p-8 flex flex-col items-center justify-center">
        {/* Character body structure */}
        <div className="relative flex flex-col items-center">
          
          {/* Hat */}
          <div className="mb-2">
            {selections.hat ? (
              <div className="w-16 h-16 transition-opacity duration-200">
                <img 
                  src={selections.hat.imageUrl} 
                  alt={selections.hat.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <div className="w-16 h-16 border-2 border-dashed border-[rgba(85, 61, 61, 0.35)]/50 rounded-full flex items-center justify-center">
                <span className="text-[rgb(85,0,0)] text-xs">Hat</span>
              </div>
            )}
          </div>

          {/* Head */}
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full mb-2 flex items-center justify-center overflow-hidden">
            <img 
              src="/images/character/face.png" 
              alt="Character face"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top */}
          <div className="mb-4">
            {selections.top ? (
              <div className="w-20 h-20 transition-opacity duration-200">
                <img 
                  src={selections.top.imageUrl} 
                  alt={selections.top.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <div className="w-20 h-16 border-2 border-dashed border-[rgb(85,0,0)]/50 rounded-lg flex items-center justify-center">
                <span className="text-[rgb(85,0,0)] text-xs">Top</span>
              </div>
            )}
          </div>

          {/* Pants */}
          <div className="mb-4">
            {selections.pants ? (
              <div className="w-16 h-20 transition-opacity duration-200">
                <img 
                  src={selections.pants.imageUrl} 
                  alt={selections.pants.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <div className="w-16 h-20 border-2 border-dashed border-[rgb(85,0,0)]/50 rounded-lg flex items-center justify-center">
                <span className="text-[rgb(85,0,0)] text-xs">Pants</span>
              </div>
            )}
          </div>

          {/* Shoes */}
          <div>
            {selections.shoes ? (
              <div className="w-12 h-12 transition-opacity duration-200">
                <img 
                  src={selections.shoes.imageUrl} 
                  alt={selections.shoes.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <div className="w-12 h-8 border-2 border-dashed border-[rgb(85,0,0)]/50 rounded-lg flex items-center justify-center">
                <span className="text-[rgb(85,0,0)] text-xs">Shoes</span>
              </div>
            )}
          </div>
        </div>

        {/* Style indicators */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {selections.hat && (
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: selections.hat.color }}
            />
          )}
          {selections.top && (
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: selections.top.color }}
            />
          )}
          {selections.pants && (
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: selections.pants.color }}
            />
          )}
          {selections.shoes && (
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: selections.shoes.color }}
            />
          )}
        </div>
      </div>

      {/* Selection summary */}
      <div className="mt-6 text-center">
        <div className="text-red-200 text-sm">
          Selected: {Object.values(selections).filter(Boolean).length} of 4 items
        </div>
      </div>
    </div>
  );
};

export default Character;