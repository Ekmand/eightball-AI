import { cn } from '../utils/cn';

interface MessageBubbleProps {
  message: string;
  isUser?: boolean;
}

export function MessageBubble({ message, isUser }: MessageBubbleProps) {
  return (
    <div
      className={cn(
        "w-full flex animate-slide-up",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-2 text-white",
          isUser ? "bg-purple-600" : "bg-zinc-700"
        )}
      >
        {message}
      </div>
    </div>
  );
}