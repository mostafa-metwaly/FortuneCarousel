import { GameState, Profession } from '../types/game';

export const calculateProfession = (
  selections: GameState['selections'],
  professions: Profession[]
): Profession => {
  const scores: Record<string, number> = {};

  // Initialize scores for all professions
  professions.forEach(profession => {
    scores[profession.id] = 0;
  });

  // Calculate scores based on clothing selections
  Object.values(selections).forEach(item => {
    if (item && item.professionWeights) {
      Object.entries(item.professionWeights).forEach(([profession, weight]) => {
        if (scores[profession] !== undefined) {
          scores[profession] += weight;
        }
      });
    }
  });

  // Find the profession with the highest score
  let maxScore = 0;
  let selectedProfession = professions[0]; // fallback

  Object.entries(scores).forEach(([professionId, score]) => {
    if (score > maxScore) {
      maxScore = score;
      const profession = professions.find(p => p.id === professionId);
      if (profession) {
        selectedProfession = profession;
      }
    }
  });

  // If there's a tie or no clear winner, add some randomization
  const topScores = Object.entries(scores)
    .filter(([_, score]) => score === maxScore)
    .map(([professionId]) => professions.find(p => p.id === professionId))
    .filter(Boolean) as Profession[];

  if (topScores.length > 1) {
    const randomIndex = Math.floor(Math.random() * topScores.length);
    selectedProfession = topScores[randomIndex];
  }

  return selectedProfession;
};