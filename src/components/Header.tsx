import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-zinc-950 p-4 shadow-lg border-b border-zinc-800/50">
      <div className="container mx-auto flex items-center gap-2">
        <Sparkles className="w-6 h-6 text-purple-400" />
        <h1 className="text-xl font-bold">Magic 8-Ball</h1>
      </div>
    </header>
  );
}