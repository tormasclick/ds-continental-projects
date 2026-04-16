import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "254700000000";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello, I'd like to inquire about DS Continental Projects services.")}`;

const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export default WhatsAppButton;
