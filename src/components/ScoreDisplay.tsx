
import { Card, CardContent } from "@/components/ui/card";
import { Target, Award, Zap } from "lucide-react";

interface ScoreDisplayProps {
  score: number;
  level: number;
}

const ScoreDisplay = ({ score, level }: ScoreDisplayProps) => {
  return (
    <div className="flex justify-center mb-6">
      <Card className="bg-white/90 backdrop-blur-sm border-green-200 shadow-lg animate-slide-in-right">
        <CardContent className="px-6 py-3">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-green-600" />
              <span className="text-green-800 font-semibold">
                Score: <span className="text-green-600">{score}</span>
              </span>
            </div>
            
            <div className="h-4 w-px bg-green-300" />
            
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-emerald-600" />
              <span className="text-green-800 font-semibold">
                Level: <span className="text-emerald-600">{level}</span>
              </span>
            </div>
            
            <div className="h-4 w-px bg-green-300" />
            
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-500 animate-pulse" />
              <span className="text-green-800 font-semibold text-sm">
                Hafalah
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScoreDisplay;
