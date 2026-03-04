import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "919885953399"; // without + sign
  const message = "Hello ARS Infra Developers, I would like to know more about your projects.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-white shadow-lg hover:bg-green-600 transition"
          >
            <MessageCircle size={22} />
            Chat With Us
          </button>
        ) : (
          <div className="w-80 rounded-xl bg-white shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between bg-green-500 px-4 py-3 text-white">
              <h4 className="font-semibold">ARS INFRAS</h4>
              <button onClick={() => setIsOpen(false)}>
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 text-sm text-gray-600">
              👋 Hi there!  
              <br />
              How can we help you today?
            </div>

            {/* Action */}
            <div className="p-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg bg-green-500 py-2 text-center font-semibold text-white hover:bg-green-600 transition"
              >
                Start WhatsApp Chat
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WhatsAppChat;