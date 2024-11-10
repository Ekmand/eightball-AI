import { MessageBubble } from './MessageBubble';

interface Message {
  text: string;
  isUser: boolean;
  id: number;
}

interface MessageListProps {
  messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
  return (
    <div className="flex-1 overflow-y-auto space-y-4 p-4">
      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          message={message.text}
          isUser={message.isUser}
        />
      ))}
    </div>
  );
}