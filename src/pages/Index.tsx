
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Star, Trophy, RefreshCw, Play, Sparkles, Target, Award } from "lucide-react";
import GameBoard from "@/components/GameBoard";
import ScoreDisplay from "@/components/ScoreDisplay";
import ParallaxBackground from "@/components/ParallaxBackground";

const Index = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [gameComplete, setGameComplete] = useState(false);

  const startGame = () => {
    setShowLanding(false);
    setGameStarted(true);
    setGameComplete(false);
    setScore(0);
    setLevel(1);
  };

  const backToLanding = () => {
    setShowLanding(true);
    setGameStarted(false);
    setGameComplete(false);
  };

  const onGameComplete = (finalScore: number) => {
    setScore(finalScore);
    setGameComplete(true);
  };

  const nextLevel = () => {
    setLevel(prev => prev + 1);
    setGameComplete(false);
  };

  if (showLanding) {
    return (
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-green-100">
        <ParallaxBackground />
        
        <div className="relative z-10 container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="min-h-screen flex flex-col justify-center items-center text-center space-y-8">
            
            {/* Main Logo & Title */}
            <div className="space-y-6 animate-fade-in">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                <Brain className="relative h-20 w-20 mx-auto text-green-600 animate-bounce" />
              </div>
              
              <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 bg-clip-text text-transparent leading-tight">
                Hafalah
              </h1>
              
              <p className="text-xl md:text-2xl text-green-700 font-medium max-w-2xl mx-auto leading-relaxed">
                Transform your memory with beautiful, gamified practice sessions
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <Card className="bg-white/80 backdrop-blur-sm border-green-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Progressive Difficulty</h3>
                  <p className="text-green-600 text-sm">Challenge yourself with increasingly complex memory patterns</p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-green-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Beautiful Imagery</h3>
                  <p className="text-green-600 text-sm">Practice with stunning curated images from around the world</p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-green-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Track Progress</h3>
                  <p className="text-green-600 text-sm">Monitor your improvement with detailed scoring system</p>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="space-y-6 mt-16 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
              <Button 
                onClick={startGame}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                size="lg"
              >
                <Play className="h-6 w-6 mr-3 group-hover:translate-x-1 transition-transform" />
                Start Your Journey
              </Button>
              
              <p className="text-green-600/80 text-sm">
                No registration required • Free to play • Instant start
              </p>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
              <Star className="h-8 w-8 text-green-400/50" />
            </div>
            <div className="absolute top-32 right-16 animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}>
              <Sparkles className="h-6 w-6 text-emerald-400/50" />
            </div>
            <div className="absolute bottom-32 left-20 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }}>
              <Trophy className="h-10 w-10 text-green-500/40" />
            </div>
            
          </div>
        </div>
      </div>
    );
  }

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
              <div className="flex gap-3">
                <Button 
                  onClick={() => setGameStarted(true)}
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  size="lg"
                >
                  Start Playing
                </Button>
                <Button 
                  onClick={backToLanding}
                  variant="outline"
                  className="border-green-300 text-green-700 hover:bg-green-50"
                >
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
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
                      onClick={backToLanding}
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
