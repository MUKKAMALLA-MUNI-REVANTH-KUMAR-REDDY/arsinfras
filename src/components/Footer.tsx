import { Facebook, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

interface FooterProps {
  onSectionChange?: (section: string) => void;
}

const Footer = ({ onSectionChange }: FooterProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    terms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.terms) {
      alert("Please accept Terms & Conditions");
      return;
    }
    if (!form.current) return;

    emailjs
      .sendForm("service_ehfpojb", "template_zy2pm0i", form.current, {
        publicKey: "mV0nRTPUTPmYm1wy9",
      })
      .then(
        () => {
          alert("Enquiry sent successfully!");
          setFormData({ name: "", phone: "", email: "", message: "", terms: false });
          setIsModalOpen(false);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send enquiry");
        }
      );
  };

  return (
    <>
      <footer className="bg-foreground px-4 py-10 text-primary-foreground sm:px-6 sm:py-12">
        <div className="container mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">

          {/* Company Info */}
          <div>
            <h3 className="mb-2 text-xl font-bold sm:text-2xl">ARS INFRAS</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Delivering happiness through premium real estate since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-base font-semibold sm:text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="/#about" className="hover:text-accent transition-colors">About Us</a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-accent transition-colors">Projects</a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-accent transition-colors">Contact</a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Social & Enquiry */}
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="mb-3 text-base font-semibold sm:text-lg">Connect With Us</h4>

            <div className="mb-4 flex items-center gap-5">
              <a
                href="https://www.facebook.com/people/Ars-Infras/pfbid08d9syLscnz9X7gzRhsBDaZyWKPzqx2Az9tzp8a9Fm8ByTLhrrw3fuCueCHG1DtJwl/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-accent transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/arsinfras?igsh=dXlpYngyaWpzazV1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-accent transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/peta-nagendra-b44398389?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=%2B919885953399&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-accent transition-colors"
              >
                <MessageCircle size={20} />
              </a>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              <Mail size={16} />
              Enquiry Now
            </button>
          </div>
        </div>

        <div className="container mx-auto mt-8 border-t border-primary-foreground/20 pt-6 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} ARS INFRAS. All rights reserved.
        </div>
      </footer>

      {/* Enquiry Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6"
          onClick={(e) => { if (e.target === e.currentTarget) setIsModalOpen(false); }}
        >
          <div className="relative w-full max-w-md max-h-[calc(100dvh-3rem)] overflow-y-auto rounded-xl bg-white p-5 shadow-2xl sm:p-6">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-muted text-foreground hover:bg-muted/80 text-lg leading-none"
              aria-label="Close modal"
            >
              ✕
            </button>

            <h2 className="mb-4 text-center text-xl font-bold sm:text-2xl">Enquiry Form</h2>

            <form ref={form} onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={3}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none rounded-md border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <label className="flex items-start gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="mt-0.5 shrink-0"
                />
                <span className="leading-relaxed">
                  Accept all{" "}
                  <a href="/privacy" className="underline text-primary">
                    terms and conditions
                  </a>{" "}
                  &amp; I would like to receive communication via SMS, Email and WhatsApp.
                </span>
              </label>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
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
