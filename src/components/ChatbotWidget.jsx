import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Bot, User, Minimize2, Maximize2 } from "lucide-react";

const quickReplies = [
  "Pregnancy symptoms",
  "Baby feeding tips",
  "Vaccination schedule",
  "Diet recommendations",
  "When to see a doctor"
];

const botResponses = {
  "pregnancy symptoms": "Common pregnancy symptoms include morning sickness, fatigue, breast tenderness, and frequent urination. If you experience severe symptoms like heavy bleeding or severe pain, please consult a doctor immediately. Would you like tips on managing morning sickness?",
  "baby feeding tips": "For newborns, breastfeeding is recommended for the first 6 months. Feed on demand, usually every 2-3 hours. Watch for hunger cues like rooting and hand-to-mouth movements. Keep baby upright after feeding to prevent reflux. Need specific advice?",
  "vaccination schedule": "Your baby's vaccination journey starts at birth with BCG and Hepatitis B. Key vaccines at 6, 10, and 14 weeks include DTaP, IPV, and PCV. I can help you track your child's complete immunization schedule!",
  "diet recommendations": "During pregnancy, focus on folic acid (leafy greens), iron (lean meats, spinach), calcium (dairy), and omega-3s (fish, walnuts). Avoid raw eggs, unpasteurized dairy, and high-mercury fish. Stay hydrated!",
  "when to see a doctor": "See a doctor immediately if you experience: heavy vaginal bleeding, severe abdominal pain, high fever, reduced baby movements, severe headaches with vision changes, or signs of preterm labor. Don't hesitate to seek help!"
};

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "Hello! 👋 I'm your MomKidCare assistant. I'm here to help you with pregnancy tips, baby care advice, and health information. How can I assist you today?",
      time: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text) => {
    const messageText = text || inputValue;
    if (!messageText.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: "user",
      text: messageText,
      time: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const lowerText = messageText.toLowerCase();
      let response = "Thank you for your question! For detailed medical advice, I recommend consulting with our doctors through our Online Consultation feature. Is there anything specific I can help you with?";
      
      for (const [key, value] of Object.entries(botResponses)) {
        if (lowerText.includes(key)) {
          response = value;
          break;
        }
      }

      const botMessage = {
        id: messages.length + 2,
        type: "bot",
        text: response,
        time: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-8 w-16 h-16 bg-primary rounded-full shadow-glow flex items-center justify-center hover:scale-110 transition-transform z-50 group"
        >
          <MessageCircle className="w-7 h-7 text-primary-foreground" />
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
          
          {/* Tooltip */}
          <span className="absolute right-full mr-3 bg-card text-foreground px-4 py-2 rounded-xl shadow-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
            Chat with us! 💬
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div 
          className={`fixed right-8 bg-card rounded-3xl shadow-glow z-50 flex flex-col overflow-hidden transition-all duration-300 ${
            isMinimized 
              ? 'bottom-24 w-80 h-16' 
              : 'bottom-8 w-96 h-[600px] max-h-[80vh]'
          }`}
        >
          {/* Header */}
          <div className="bg-primary p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Bot className="w-6 h-6 text-primary-foreground" />
              </div>
              {!isMinimized && (
                <div>
                  <h4 className="font-semibold text-primary-foreground">MomKidCare Assistant</h4>
                  <p className="text-xs text-primary-foreground/80">Always here to help</p>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-2 hover:bg-primary-foreground/20 rounded-lg transition-colors"
              >
                {isMinimized ? (
                  <Maximize2 className="w-4 h-4 text-primary-foreground" />
                ) : (
                  <Minimize2 className="w-4 h-4 text-primary-foreground" />
                )}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-primary-foreground/20 rounded-lg transition-colors"
              >
                <X className="w-4 h-4 text-primary-foreground" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-muted/30">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start gap-2 ${
                      message.type === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === "user" ? "bg-primary" : "bg-mint-light"
                    }`}>
                      {message.type === "user" ? (
                        <User className="w-4 h-4 text-primary-foreground" />
                      ) : (
                        <Bot className="w-4 h-4 text-mint-dark" />
                      )}
                    </div>
                    <div className={`max-w-[75%] p-3 rounded-2xl ${
                      message.type === "user" 
                        ? "bg-primary text-primary-foreground rounded-br-md" 
                        : "bg-card shadow-soft rounded-bl-md"
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.type === "user" ? "text-primary-foreground/60" : "text-muted-foreground"
                      }`}>
                        {message.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-mint-light flex items-center justify-center">
                      <Bot className="w-4 h-4 text-mint-dark" />
                    </div>
                    <div className="bg-card shadow-soft p-3 rounded-2xl rounded-bl-md">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Replies */}
              <div className="px-4 py-2 flex gap-2 overflow-x-auto border-t border-border">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleSendMessage(reply)}
                    className="px-3 py-1.5 bg-muted text-muted-foreground rounded-full text-xs font-medium whitespace-nowrap hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-3 rounded-xl bg-muted border-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <button
                    onClick={() => handleSendMessage()}
                    disabled={!inputValue.trim()}
                    className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
