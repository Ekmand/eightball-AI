export function ThinkingIndicator() {
  return (
    <div className="flex items-center gap-2 animate-slide-up">
      <div className="flex gap-1">
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
      <span className="text-sm text-purple-400/80">Consulting the spirits...</span>
    </div>
  );
}