import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const quickReplies = [
  { label: "Equipment inquiry", response: "I'd love to help with equipment! Visit our DS Continental Motors page for excavators, tractors, and industrial engines. You can also use our Import Cost Calculator to estimate costs." },
  { label: "Security services", response: "DS Continental Security offers corporate, industrial, and mining security services, VIP protection, and CCTV solutions. Visit our Security page or try the Risk Assessment Tool." },
  { label: "Mining & exploration", response: "DS Continental Trading handles geological surveys, mineral exploration, mining operations, and mineral export across East & Central Africa. Check our interactive Exploration Map!" },
  { label: "Contact us", response: "You can reach us at info@dscontinental.com or call +254 700 000 000. Visit our Contact page to send a message directly." },
];

interface Message {
  from: "user" | "bot";
  text: string;
}

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Welcome to DS Continental Projects! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const addMessage = (from: "user" | "bot", text: string) => {
    setMessages((prev) => [...prev, { from, text }]);
  };

  const handleQuickReply = (qr: typeof quickReplies[0]) => {
    addMessage("user", qr.label);
    setTimeout(() => addMessage("bot", qr.response), 400);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    addMessage("user", input.trim());
    setInput("");
    setTimeout(() => {
      addMessage("bot", "Thank you for your message! Our team will get back to you shortly. In the meantime, explore our Companies page for more information about our services.");
    }, 600);
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-electric-blue text-primary-foreground shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[480px] bg-card border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
          <div className="gradient-navy px-4 py-3 flex items-center justify-between text-primary-foreground">
            <span className="font-subheading font-semibold text-sm">DCP Assistant</span>
            <button onClick={() => setOpen(false)}><X className="w-5 h-5" /></button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] rounded-lg px-3 py-2 ${m.from === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {messages.length <= 1 && (
            <div className="px-3 pb-2 flex flex-wrap gap-1">
              {quickReplies.map((qr) => (
                <button
                  key={qr.label}
                  onClick={() => handleQuickReply(qr)}
                  className="text-xs px-3 py-1.5 rounded-full border border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-primary-foreground transition-colors"
                >
                  {qr.label}
                </button>
              ))}
            </div>
          )}

          <div className="p-3 border-t border-border flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 text-sm px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-1 focus:ring-ring"
            />
            <button onClick={handleSend} className="p-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
