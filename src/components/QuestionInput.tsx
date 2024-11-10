import { Send } from 'lucide-react';

interface QuestionInputProps {
  question: string;
  isThinking: boolean;
  onQuestionChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function QuestionInput({ question, isThinking, onQuestionChange, onSubmit }: QuestionInputProps) {
  return (
    <div className="bg-zinc-950 border-t border-zinc-800/50 p-4">
      <form onSubmit={onSubmit} className="container mx-auto max-w-2xl">
        <div className="flex gap-2">
          <input
            type="text"
            value={question}
            onChange={(e) => onQuestionChange(e.target.value)}
            placeholder="Ask the Magic 8-Ball a question..."
            className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-zinc-500"
            disabled={isThinking}
          />
          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-purple-700"
            disabled={isThinking}
          >
            <Send className="w-4 h-4" />
            Ask
          </button>
        </div>
      </form>
    </div>
  );
}