
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import GameCard from "@/components/GameCard";

interface GameBoardProps {
  level: number;
  onGameComplete: (score: number) => void;
}

interface CardData {
  id: string;
  imageUrl: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const GameBoard = ({ level, onGameComplete }: GameBoardProps) => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [loading, setLoading] = useState(true);

  const gridSize = Math.min(4 + level, 6); // Increase grid size with level, max 6x6
  const totalPairs = Math.floor((gridSize * gridSize) / 2);

  const unsplashImages = [
    "photo-1615729947596-a598e5de0ab3",
    "photo-1501854140801-50d01698950b", 
    "photo-1518495973542-4542c06a5843",
    "photo-1465146344425-f00d5f5c8f07",
    "photo-1581092795360-fd1ca04f0952",
    "photo-1506905925346-21bda4d32df4",
    "photo-1441974231531-c6227db76b6e",
    "photo-1448375240586-882707db888b",
  ];

  const initializeGame = async () => {
    setLoading(true);
    const selectedImages = unsplashImages.slice(0, totalPairs);
    
    const cardPairs = selectedImages.flatMap((imageId, index) => [
      {
        id: `${index}-a`,
        imageUrl: `https://images.unsplash.com/${imageId}?w=300&h=300&fit=crop`,
        isFlipped: false,
        isMatched: false,
      },
      {
        id: `${index}-b`, 
        imageUrl: `https://images.unsplash.com/${imageId}?w=300&h=300&fit=crop`,
        isFlipped: false,
        isMatched: false,
      },
    ]);

    // Shuffle cards
    const shuffledCards = cardPairs.sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setFlippedCards([]);
    setMoves(0);
    setMatchedPairs(0);
    setLoading(false);
  };

  useEffect(() => {
    initializeGame();
  }, [level]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      const firstCard = cards.find(card => card.id === first);
      const secondCard = cards.find(card => card.id === second);

      if (firstCard?.imageUrl === secondCard?.imageUrl) {
        // Match found
        setTimeout(() => {
          setCards(prev => prev.map(card => 
            card.id === first || card.id === second 
              ? { ...card, isMatched: true }
              : card
          ));
          setMatchedPairs(prev => prev + 1);
          setFlippedCards([]);
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          setCards(prev => prev.map(card => 
            card.id === first || card.id === second 
              ? { ...card, isFlipped: false }
              : card
          ));
          setFlippedCards([]);
        }, 1000);
      }
      setMoves(prev => prev + 1);
    }
  }, [flippedCards, cards]);

  useEffect(() => {
    if (matchedPairs === totalPairs && totalPairs > 0) {
      const score = Math.max(1000 - (moves * 10), 100);
      setTimeout(() => onGameComplete(score), 500);
    }
  }, [matchedPairs, totalPairs, moves, onGameComplete]);

  const handleCardClick = (cardId: string) => {
    if (flippedCards.length === 2) return;
    
    const card = cards.find(c => c.id === cardId);
    if (card?.isFlipped || card?.isMatched) return;

    setCards(prev => prev.map(card => 
      card.id === cardId ? { ...card, isFlipped: true } : card
    ));
    setFlippedCards(prev => [...prev, cardId]);
  };

  if (loading) {
    return (
      <Card className="p-8 text-center bg-white/90 backdrop-blur-sm">
        <div className="animate-spin w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-green-700">Loading beautiful images...</p>
      </Card>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div 
        className="grid gap-4 justify-center animate-fade-in"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          maxWidth: `${gridSize * 120}px`,
        }}
      >
        {cards.map((card, index) => (
          <GameCard
            key={card.id}
            card={card}
            onClick={() => handleCardClick(card.id)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
