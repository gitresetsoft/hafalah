
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Star, Trophy, RefreshCw } from "lucide-react";
import GameBoard from "@/components/GameBoard";
import ScoreDisplay from "@/components/ScoreDisplay";
import ParallaxBackground from "@/components/ParallaxBackground";

const Index = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [gameComplete, setGameComplete] = useState(false);

  const startGame = () => {
    setGameStarted(true);
    setGameComplete(false);
    setScore(0);
    setLevel(1);
  };

  const onGameComplete = (finalScore: number) => {
    setScore(finalScore);
    setGameComplete(true);
  };

  const nextLevel = () => {
    setLevel(prev => prev + 1);
    setGameComplete(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-green-100">
      <ParallaxBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="h-12 w-12 text-green-600 animate-pulse" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Hafalah
            </h1>
          </div>
          <p className="text-xl text-green-700 font-medium">
            Practice your memory with beautiful imagery
          </p>
        </div>

        {!gameStarted ? (
          <Card className="max-w-md mx-auto shadow-xl border-green-200 bg-white/90 backdrop-blur-sm animate-scale-in">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-green-800 mb-2">
                  Welcome to Hafalah
                </h2>
                <p className="text-green-600">
                  Test your memory by matching beautiful images. Each level gets more challenging!
                </p>
              </div>
              <Button 
                onClick={startGame}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
                size="lg"
              >
                Start Playing
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            <ScoreDisplay score={score} level={level} />
            
            {!gameComplete ? (
              <GameBoard 
                level={level} 
                onGameComplete={onGameComplete}
                key={level}
              />
            ) : (
              <Card className="max-w-md mx-auto shadow-xl border-green-200 bg-white/90 backdrop-blur-sm animate-scale-in">
                <CardContent className="p-8 text-center">
                  <Trophy className="h-16 w-16 mx-auto mb-4 text-yellow-500 animate-bounce" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    Level Complete!
                  </h3>
                  <p className="text-green-600 mb-6">
                    Score: {score} points
                  </p>
                  <div className="flex gap-3">
                    <Button 
                      onClick={nextLevel}
                      className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                    >
                      Next Level
                    </Button>
                    <Button 
                      onClick={() => setGameStarted(false)}
                      variant="outline"
                      className="flex-1 border-green-300 text-green-700 hover:bg-green-50"
                    >
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Menu
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
