
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Send, Brain, Heart } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Bonjour ! Je suis là pour vous accompagner dans votre parcours de bien-être mental. Comment vous sentez-vous aujourd'hui ?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "Je vous entends, et je veux que vous sachiez que vos sentiments sont valides. Pouvez-vous me parler davantage de ce qui vous préoccupe ?",
        "Merci de partager cela avec moi. Il faut du courage pour s'ouvrir. Qu'est-ce qui vous aiderait à vous sentir plus soutenu en ce moment ?",
        "Je suis là pour vous écouter sans jugement. Parfois, parler de nos pensées peut nous aider à voir les choses sous un nouvel angle.",
        "Votre parcours de santé mentale vous est propre. Quelles pratiques d'auto-soins avez-vous trouvées utiles dans le passé ?",
        "Il est normal d'avoir des journées difficiles. Elles ne vous définissent pas. Quelle petite chose pourrait vous apporter du réconfort aujourd'hui ?",
      ];

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8 text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <MessageCircle className="w-4 h-4" />
          Session de Thérapie IA
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Conversation en Espace Sécurisé</h1>
        <p className="text-gray-600">Votre compagnon IA est là pour vous écouter et vous soutenir</p>
      </div>

      <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 animate-scale-in">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-6 h-6" />
            Assistant IA HopeWell
          </CardTitle>
        </CardHeader>
        
        <CardContent className="p-0">
          {/* Messages Area */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    message.sender === "user"
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                      : "bg-gray-100 text-gray-800"
                  } shadow-sm`}
                >
                  {message.sender === "ai" && (
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="w-4 h-4 text-green-600" />
                      <span className="text-xs font-medium text-green-600">Compagnon IA</span>
                    </div>
                  )}
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <div className="text-xs opacity-70 mt-2">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-gray-100 px-4 py-3 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-green-600" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t bg-gray-50 p-4">
            <div className="flex gap-3">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Partagez ce qui vous préoccupe..."
                className="flex-1 border-gray-200 focus:border-blue-500 transition-colors duration-300"
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 transition-all duration-300 hover:scale-105"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Cette conversation est privée et sécurisée. Votre bien-être est notre priorité.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
