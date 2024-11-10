import { useState } from 'react';
import { MessageList } from './components/MessageList';
import { MessageInput } from './components/MessageInput';
import { RESPONSES } from './types/responses';
import { EightBallLogo } from './components/EightBallLogo';
import { ThinkingIndicator } from './components/ThinkingIndicator';

export function App() {
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean; id: number }>>([]);
  const [isThinking, setIsThinking] = useState(false);

  const getRandomResponse = () => {
    const randomIndex = Math.floor(Math.random() * RESPONSES.length);
    return RESPONSES[randomIndex];
  };

  const handleSendMessage = async (message: string) => {
    // Add user message immediately
    const newMessage = { text: message, isUser: true, id: Date.now() };
    setMessages(prev => [...prev, newMessage]);
    
    // Start thinking animation
    setIsThinking(true);

    // Random delay between 2-4 seconds
    const thinkingTime = 2000 + Math.random() * 2000;
    await new Promise(resolve => setTimeout(resolve, thinkingTime));

    // Add AI response
    const response = { text: getRandomResponse(), isUser: false, id: Date.now() };
    setMessages(prev => [...prev, response]);
    setIsThinking(false);
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <header className="text-center p-4 border-b border-zinc-800">
        <div className="flex items-center justify-center gap-3">
          <EightBallLogo isThinking={isThinking} />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Magic 8-Ball AI
          </h1>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <MessageList messages={messages} />
        {isThinking && <ThinkingIndicator />}
      </div>
      
      <MessageInput onSend={handleSendMessage} disabled={isThinking} />
    </div>
  );
}