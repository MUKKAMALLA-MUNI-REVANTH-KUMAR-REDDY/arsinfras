import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FooterProps {
  onSectionChange?: (section: string) => void;
}

const Footer = ({ onSectionChange }: FooterProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSocialClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = (link: string) => {
    if (link === "Privacy Policy") {
      navigate("/privacy");
      return;
    }

    const map: Record<string, string> = {
      "About Us": "about",
      Projects: "projects",
      Contact: "contact",
    };

    const section = map[link] ?? link.toLowerCase().replace(" ", "");

    if (onSectionChange) {
      // When Footer is rendered inside Index, notify parent
      onSectionChange(section);
    } else {
      // When Footer is used on other pages, navigate to the index with hash
      navigate(`/#${section}`);
    }
  };

  return (
    <>
      <footer className="bg-foreground px-4 py-12 text-primary-foreground">
        <div className="container mx-auto grid gap-8 md:grid-cols-3">
          
          {/* Brand */}
          <div>
            <h3 className="mb-3 font-display text-2xl font-bold">ARS INFRAS</h3>
            <p className="font-body text-sm text-primary-foreground/70">
              Delivering happiness through premium real estate since 2010.
              Trusted by thousands of families across South India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 font-display text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/70">
              {["About Us", "Projects", "Contact", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleLinkClick(link)}
                    className="transition-colors hover:text-accent"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Enquiry */}
          <div>
            <h4 className="mb-3 font-display text-lg font-semibold">Connect With Us</h4>

            <div className="flex gap-4 mb-4">
              <a
                href="https://www.facebook.com/people/Ars-Infras/pfbid02CJKXrrE1YiNGV3abWrJWYQwbTLXvpp2Z95DvjgAQX7eahiFHaYh6zsngr4YjChP8l/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-primary-foreground/20 p-2 hover:border-accent hover:text-accent"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/arsinfras"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-primary-foreground/20 p-2 hover:border-accent hover:text-accent"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/peta-nagendra-b44398389/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-primary-foreground/20 p-2 hover:border-accent hover:text-accent"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://wa.me/919885953399"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="rounded-full border border-primary-foreground/20 p-2 hover:border-accent hover:text-accent"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
                  <path d="M20.52 3.48A11.94 11.94 0 0012 .5 11.94 11.94 0 003.48 3.48 11.94 11.94 0 00.5 12c0 2.11.55 4.07 1.6 5.82L.5 23.5l5.81-1.57A11.94 11.94 0 0012 23.5c3.18 0 6.17-1.24 8.48-3.48A11.94 11.94 0 0023.5 12 11.94 11.94 0 0020.52 3.48zM12 21.5a9.38 9.38 0 01-5.01-1.46l-.36-.22-3.45.93.93-3.36-.24-.35A9.47 9.47 0 012.5 12 9.5 9.5 0 1112 21.5zM17.3 14.24c-.28-.14-1.65-.81-1.91-.9-.26-.09-.45-.14-.64.14-.19.28-.73.9-.9 1.09-.17.19-.33.21-.61.07-.28-.14-1.17-.43-2.22-1.37-.82-.73-1.37-1.63-1.53-1.91-.16-.28-.02-.43.12-.57.12-.12.28-.31.42-.47.14-.16.19-.27.28-.45.09-.18.05-.34-.02-.48-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48-.17-.01-.37-.01-.57-.01s-.48.07-.73.34c-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.1 2.81.14.19 1.91 2.92 4.63 3.98 2.72 1.05 2.72.7 3.21.66.49-.04 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.29-.07-.12-.26-.19-.54-.33z"/>
                </svg>
              </a>
            </div>

            {/* Enquiry Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 font-semibold text-accent-foreground hover:opacity-90 transition"
            >
              <Mail size={18} />
              Enquiry Now
            </button>
          </div>
        </div>

        <div className="container mx-auto mt-8 border-t border-primary-foreground/20 pt-6 text-center font-body text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} ARS INFRAS. All rights reserved.
        </div>
      </footer>

      {/* Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl relative">

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">
              Enquiry Form
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-accent outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-accent outline-none"
              />

              <input
                type="email"
                placeholder="Gmail Address"
                required
                className="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-accent outline-none"
              />

              <div className="flex items-start gap-2 text-sm text-gray-600">
                <input type="checkbox" required />
                <p>I agree to the Terms & Conditions</p>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-primary-foreground hover:opacity-90 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;