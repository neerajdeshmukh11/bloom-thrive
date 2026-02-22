import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Bot, User, Minimize2, Maximize2 } from "lucide-react";

const quickReplies = [
  "Hospital services",
  "Book appointment",
  "Visiting hours",
  "Find a branch",
  "Vaccination schedule"
];

const botResponses = {
  "hospital services": "Our hospital provides: Patient Registration, Appointment Booking, Doctor Consultations, Vaccination Tracking, Digital Health Records, Prescription Upload, and Online Video Consultations. Visit our Services section for full details!",
  "book appointment": "You can book an appointment through our online booking system. Simply go to the 'Book Appointment' section, select your department, choose a doctor, and pick your preferred date & time. You can also call us at +91 1234 567 890.",
  "visiting hours": "General visiting hours are 10:00 AM to 12:00 PM and 4:00 PM to 6:00 PM. ICU/NICU visiting is limited to immediate family. Emergency services are available 24/7.",
  "find a branch": "Use our Hospital Branch Locator to find the nearest branch. We have multiple branches across the city. Each branch page shows available services, doctors, and directions.",
  "vaccination schedule": "We follow the standard immunization schedule from birth to 5 years. Visit our Vaccination Tracker section to see the complete schedule and track your child's vaccinations. Our staff will also send you timely reminders.",
};

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "Hello! 👋 Welcome to MomKidCare Hospital. I can help you with hospital information, appointment booking, and general queries. How can I assist you?",
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

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      text: messageText,
      time: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const lowerText = messageText.toLowerCase();
      let response = "Thank you for reaching out! For detailed medical queries, please book an appointment with our doctors or call our helpline at +91 1234 567 890. I can help with hospital information and general queries.";
      
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
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-card" />
          <span className="absolute right-full mr-3 bg-card text-foreground px-4 py-2 rounded-xl shadow-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
            Hospital Help Desk 💬
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
                  <h4 className="font-semibold text-primary-foreground">Hospital Help Desk</h4>
                  <p className="text-xs text-primary-foreground/80">General information only</p>
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

              {/* Disclaimer */}
              <div className="px-4 py-1.5 bg-peach/50 text-center">
                <p className="text-[10px] text-coral-dark">For medical advice, please consult a doctor.</p>
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
                    placeholder="Ask about hospital services..."
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
