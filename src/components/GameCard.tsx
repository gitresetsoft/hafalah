
import { Card } from "@/components/ui/card";
import { Brain } from "lucide-react";

interface GameCardProps {
  card: {
    id: string;
    imageUrl: string;
    isFlipped: boolean;
    isMatched: boolean;
  };
  onClick: () => void;
  index: number;
}

const GameCard = ({ card, onClick, index }: GameCardProps) => {
  return (
    <Card 
      className={`
        relative h-24 w-24 cursor-pointer transition-all duration-300 transform hover:scale-105
        ${card.isMatched ? 'opacity-75 scale-95' : ''}
        ${card.isFlipped || card.isMatched ? 'shadow-lg shadow-green-200' : 'shadow-md hover:shadow-lg'}
        animate-scale-in border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50
      `}
      onClick={onClick}
      style={{
        animationDelay: `${index * 50}ms`,
      }}
    >
      <div className="relative h-full w-full rounded-lg overflow-hidden">
        {/* Front face (hidden) */}
        <div 
          className={`
            absolute inset-0 backface-hidden transition-transform duration-500 rounded-lg
            ${card.isFlipped || card.isMatched ? 'rotate-y-180' : ''}
          `}
        >
          <img 
            src={card.imageUrl}
            alt="Memory card"
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
        
        {/* Back face (visible initially) */}
        <div 
          className={`
            absolute inset-0 backface-hidden transition-transform duration-500 
            bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg
            flex items-center justify-center
            ${card.isFlipped || card.isMatched ? '' : 'rotate-y-180'}
          `}
        >
          <Brain className="h-8 w-8 text-white animate-pulse" />
        </div>

        {/* Matched overlay */}
        {card.isMatched && (
          <div className="absolute inset-0 bg-green-400/30 rounded-lg flex items-center justify-center animate-pulse">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default GameCard;
