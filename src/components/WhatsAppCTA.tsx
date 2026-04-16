import { MessageCircle } from "lucide-react";

const WhatsAppCTA = ({ message = "Hello, I'd like to make an inquiry.", label = "Chat on WhatsApp" }: { message?: string; label?: string }) => (
  <a
    href={`https://wa.me/254700000000?text=${encodeURIComponent(message)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-subheading font-medium rounded-md hover:opacity-90 transition-opacity"
  >
    <MessageCircle className="w-5 h-5" /> {label}
  </a>
);

export default WhatsAppCTA;
