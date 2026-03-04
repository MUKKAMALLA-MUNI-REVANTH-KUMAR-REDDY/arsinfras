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
      .sendForm("service_ehfpojb","template_zy2pm0i", form.current, {
        publicKey: "mV0nRTPUTPmYm1wy9",
      })
      .then(
        () => {
          alert("Enquiry sent successfully!");
          setFormData({
            name: "",
            phone: "",
            email: "",
            message: "",
            terms: false,
          });
          setIsModalOpen(false);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send enquiry");
        }
      );
  };

  // ✅ Proper navigation handler
  const handleQuickLinkClick = (link: string) => {
    if (link === "Privacy Policy") {
      navigate("/PrivacyPolicy");
    } else if (link === "About Us") {
      navigate("/#about");
    } else if (link === "Projects") {
      navigate("/#projects");
    } else if (link === "Contact") {
      navigate("/#contact");
    }
  };

  return (
    <>
      <footer className="bg-foreground px-4 py-12 text-primary-foreground">
        <div className="container mx-auto grid gap-8 md:grid-cols-3">

          {/* Company Info */}
          <div>
            <h3 className="mb-3 text-2xl font-bold">ARS INFRAS</h3>
            <p className="text-sm text-primary-foreground/70">
              Delivering happiness through premium real estate since 2010.
            </p>
          </div>

{/* Quick Links */}
<div>
  <h4 className="mb-3 text-lg font-semibold">Quick Links</h4>
  <ul className="space-y-2 text-sm text-primary-foreground/70">
    <li>
      <a href="/#about" className="hover:text-accent">
        About Us
      </a>
    </li>

    <li>
      <a href="/#projects" className="hover:text-accent">
        Projects
      </a>
    </li>

    <li>
      <a href="/#contact" className="hover:text-accent">
        Contact
      </a>
    </li>

    <li>
      <a href="/privacy" className="hover:text-accent">
        Privacy Policy
      </a>
    </li>
  </ul>
</div>

          {/* Social & Enquiry */}
          <div>
            <h4 className="mb-3 text-lg font-semibold">Connect With Us</h4>

            {/* ✅ Clickable Social Icons */}
            <div className="flex gap-4 mb-4">

              <a href="https://www.facebook.com/people/Ars-Infras/pfbid08d9syLscnz9X7gzRhsBDaZyWKPzqx2Az9tzp8a9Fm8ByTLhrrw3fuCueCHG1DtJwl/" target="_blank" rel="noopener noreferrer">
                <Facebook size={18} />
              </a>

              <a href="https://www.instagram.com/arsinfras?igsh=dXlpYngyaWpzazV1" target="_blank" rel="noopener noreferrer">
                <Instagram size={18} />
              </a>

              <a href="https://www.linkedin.com/in/peta-nagendra-b44398389?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} />
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=%2B919885953399&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} />
              </a>

            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 font-semibold"
            >
              <Mail size={18} />
              Enquiry Now
            </button>
          </div>
        </div>

        <div className="container mx-auto mt-8 border-t pt-6 text-center text-xs">
          © {new Date().getFullYear()} ARS INFRAS
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative w-full max-w-md rounded-lg bg-white p-6">

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4"
            >
              ✕
            </button>

            <h2 className="mb-4 text-2xl font-bold text-center">
              Enquiry Form
            </h2>

            <form ref={form} onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />

              <div className="flex items-start gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="mt-1"
                />
                <p>
                  Accept all{" "}
                  <a href="/privacy-policy" className="underline text-primary">
                    terms and conditions
                  </a>{" "}
                  & I would like to receive communication via SMS, Email and Whatsapp.
                </p>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-white"
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