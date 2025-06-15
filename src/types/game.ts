export interface ClothingItem {
  id: string;
  name: string;
  imageUrl: string;
  professionWeights: {
    [key: string]: number;
  };
  color: string;
}

export interface Profession {
  id: string;
  name: string;
  emoji: string;
  description: string;
  facts: string[];
  illustration: string;
}

export interface GameState {
  currentStep: 'landing' | 'hat' | 'top' | 'pants' | 'shoes' | 'result';
  selections: {
    hat: ClothingItem | null;
    top: ClothingItem | null;
    pants: ClothingItem | null;
    shoes: ClothingItem | null;
  };
  predictedProfession: Profession | null;
}