import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import GameStep from './components/GameStep';
import ResultPage from './components/ResultPage';
import { GameState, ClothingItem, Profession } from './types/game';
import { clothingData } from './data/clothingData';
import { professions } from './data/professions';
import { calculateProfession } from './utils/professionCalculator';

function App() {
  const [gameState, setGameState] = useState<GameState>({
    currentStep: 'landing',
    selections: {
      hat: null,
      top: null,
      pants: null,
      shoes: null
    },
    predictedProfession: null
  });

  const handleStartGame = () => {
    setGameState(prev => ({ ...prev, currentStep: 'hat' }));
  };

  const handleClothingSelect = (category: keyof GameState['selections'], item: ClothingItem) => {
    const newSelections = { ...gameState.selections, [category]: item };
    setGameState(prev => ({ ...prev, selections: newSelections }));

    // Move to next step or results
    const steps: (keyof GameState['selections'])[] = ['hat', 'top', 'pants', 'shoes'];
    const currentIndex = steps.indexOf(category);
    
    if (currentIndex < steps.length - 1) {
      const nextStep = steps[currentIndex + 1];
      setTimeout(() => {
        setGameState(prev => ({ ...prev, currentStep: nextStep }));
      }, 800);
    } else {
      // Calculate profession and show results
      const profession = calculateProfession(newSelections, professions);
      setTimeout(() => {
        setGameState(prev => ({ 
          ...prev, 
          currentStep: 'result',
          predictedProfession: profession
        }));
      }, 800);
    }
  };

  const handleRestart = () => {
    setGameState({
      currentStep: 'landing',
      selections: {
        hat: null,
        top: null,
        pants: null,
        shoes: null
      },
      predictedProfession: null
    });
  };

  return (
    <div className="min-h-screen bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat">
      {gameState.currentStep === 'landing' && (
        <LandingPage onStartGame={handleStartGame} />
      )}

      {(gameState.currentStep === 'hat' || 
        gameState.currentStep === 'top' || 
        gameState.currentStep === 'pants' || 
        gameState.currentStep === 'shoes') && (
        <GameStep
          category={gameState.currentStep}
          clothingItems={clothingData[gameState.currentStep]}
          selections={gameState.selections}
          onClothingSelect={handleClothingSelect}
        />
      )}

      {gameState.currentStep === 'result' && gameState.predictedProfession && (
        <ResultPage
          profession={gameState.predictedProfession}
          selections={gameState.selections}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;