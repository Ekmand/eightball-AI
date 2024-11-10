interface MessageProps {
  text: string;
  isQuestion: boolean;
}

export function Message({ text, isQuestion }: MessageProps) {
  return (
    <div
      className={`p-4 rounded-lg animate-[slideUpFade_0.3s_ease-out] ${
        isQuestion
          ? 'bg-zinc-900 border border-zinc-800 ml-auto max-w-md'
          : 'bg-purple-900 mr-auto max-w-md'
      }`}
    >
      {text}
    </div>
  );
}