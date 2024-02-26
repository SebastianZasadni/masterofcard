import { Card } from "../types/Card";

const shuffleCards = (cards: Card[]) => {
  const compareRandom = () => {
    return Math.random() - 0.5;
  };
  const shuffledCards = cards.sort(compareRandom);
  return shuffledCards;
};

export default shuffleCards;
