import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "919885953399";
  const message = "Hello ARS Infra Developers, I would like to know more about your projects.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 rounded-full bg-green-500 px-3 py-2.5 text-xs font-semibold text-white shadow-lg transition hover:bg-green-600 active:scale-95 sm:px-5 sm:py-3 sm:text-sm"
          aria-label="Open WhatsApp chat"
        >
          <MessageCircle size={18} className="shrink-0 sm:hidden" />
          <MessageCircle size={20} className="hidden shrink-0 sm:block" />
          <span>Chat With Us</span>
        </button>
      ) : (
        <div className="w-[min(18rem,calc(100vw-2rem))] overflow-hidden rounded-xl bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between bg-green-500 px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                <MessageCircle size={14} />
              </div>
              <h4 className="text-sm font-semibold">ARS INFRAS</h4>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1 hover:bg-white/20 transition"
            >
              <X size={16} />
            </button>
          </div>

          {/* Body */}
          <div className="px-4 py-3 text-sm text-gray-600 leading-relaxed">
            👋 Hi there!<br />
            How can we help you today?
          </div>

          {/* CTA */}
          <div className="px-4 pb-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg bg-green-500 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-green-600 active:scale-95"
            >
              Start WhatsApp Chat
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppChat;
