import React, { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from '@emailjs/browser';
import WhatsAppChat from "@/components/WhatsAppChat";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const form = useRef<HTMLFormElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm('service_ehfpojb', 'template_g1kuy8r', form.current, {
          publicKey: 'mV0nRTPUTPmYm1wy9',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );

      // reset form after submission (regardless of success/failure)
      alert("Thank you! We will get back to you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };
  // Google Maps: prefer VITE_GOOGLE_MAPS_API_KEY (Embed API). If not provided, use a generic
  // maps.google.com embed (works without API key) pointed at Sahakar Nagar coordinates.
  const googleMapsKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const lat = 13.061822;
  const lng = 77.586774;
  const mapSrc = googleMapsKey
    ? `https://www.google.com/maps/embed/v1/place?key=${googleMapsKey}&q=${encodeURIComponent("Sahakar Nagar Bangalore")}`
    : `https://maps.google.com/maps?q=${lat},${lng}&z=16&output=embed`;
  const mapLink = googleMapsKey
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Sahakar Nagar Bangalore")}`
    : `https://maps.google.com/?q=${lat},${lng}`;

  const contactEmail = "arsinfra84@gmail.com";

  return (
    <section id="contact" className="section-padding section-alt">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-2 font-display text-3xl font-bold text-green-500 md:text-4xl">
            Reach <span className="text-green-500">Us</span>
          </h2>
 
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <Phone className="mt-1 shrink-0 text-accent" size={20} />
              <div>
                <h4 className="font-body font-semibold text-foreground">Phone</h4>
                <a
                  href="tel:+919885953399"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  +91 98859 53399
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mt-1 shrink-0 text-accent inline-block">
                <path d="M20.52 3.48A11.94 11.94 0 0012 .5 11.94 11.94 0 003.48 3.48 11.94 11.94 0 00.5 12c0 2.11.55 4.07 1.6 5.82L.5 23.5l5.81-1.57A11.94 11.94 0 0012 23.5c3.18 0 6.17-1.24 8.48-3.48A11.94 11.94 0 0023.5 12 11.94 11.94 0 0020.52 3.48zM12 21.5a9.38 9.38 0 01-5.01-1.46l-.36-.22-3.45.93.93-3.36-.24-.35A9.47 9.47 0 012.5 12 9.5 9.5 0 1112 21.5zM17.3 14.24c-.28-.14-1.65-.81-1.91-.9-.26-.09-.45-.14-.64.14-.19.28-.73.9-.9 1.09-.17.19-.33.21-.61.07-.28-.14-1.17-.43-2.22-1.37-.82-.73-1.37-1.63-1.53-1.91-.16-.28-.02-.43.12-.57.12-.12.28-.31.42-.47.14-.16.19-.27.28-.45.09-.18.05-.34-.02-.48-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48-.17-.01-.37-.01-.57-.01s-.48.07-.73.34c-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.1 2.81.14.19 1.91 2.92 4.63 3.98 2.72 1.05 2.72.7 3.21.66.49-.04 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.29-.07-.12-.26-.19-.54-.33z"/>
              </svg>
              <div>
                <h4 className="font-body font-semibold text-foreground">WhatsApp</h4>
                <a
                  href="https://wa.me/919885953399"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  +91 98859 53399
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="mt-1 shrink-0 text-accent" size={20} />
              <div>
                <h4 className="font-body font-semibold text-foreground">Email</h4>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactEmail}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  aria-label={`Compose email in Gmail to ${contactEmail}`}
                >
                  {contactEmail}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 shrink-0 text-accent" size={20} />
              <div>
                <h4 className="font-body font-semibold text-foreground">Address</h4>
                <p className="text-sm text-muted-foreground">
                 ARS INFRA DEVELOPERS PVT LTD,#953, 2nd Floor, D-Block, 13th Cross, 16th Main, Sahakar Nagar, Bengaluru – 560092
                </p>
              </div>
            </div>

            {/* Map (Google Maps embed; uses VITE_GOOGLE_MAPS_API_KEY if provided) */}
            <div className="mt-4">
              <div className="overflow-hidden rounded-md border bg-card">
                <iframe
                  title="ARS INFRAS — Sahakar Nagar, Bengaluru (Google Maps)"
                  src={mapSrc}
                  className="w-full h-56 sm:h-72"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm text-muted-foreground hover:text-accent"
              >
                View on Google Maps
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="rounded-md border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded-md border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="rounded-md border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="rounded-md border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-body font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
      <WhatsAppChat />
    </section>
  );
};

export default ContactSection;
