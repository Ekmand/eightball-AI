import { Sparkles } from 'lucide-react';
import { cn } from '../utils/cn';

interface EightBallLogoProps {
  isThinking?: boolean;
}

export function EightBallLogo({ isThinking }: EightBallLogoProps) {
  return (
    <div className={cn(
      "relative inline-flex items-center justify-center",
      isThinking && "animate-shake"
    )}>
      {/* 8-Ball */}
      <div className={cn(
        "relative w-10 h-10",
        isThinking && "animate-pulse-glow"
      )}>
        <div className="absolute inset-0 bg-black rounded-full border-2 border-white shadow-lg"></div>
        <div className={cn(
          "absolute inset-[20%] bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-300",
          isThinking && "bg-purple-500"
        )}>
          <span className="text-white font-bold text-sm">8</span>
        </div>
      </div>
      
      {/* Sparkles */}
      <Sparkles 
        className={cn(
          "w-4 h-4 text-purple-300 absolute -top-1 -right-1",
          isThinking ? "animate-spin" : "animate-pulse"
        )} 
      />
      
      {/* Glow effect */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-lg transition-opacity duration-300",
        isThinking && "opacity-80"
      )}></div>
    </div>
  );
}