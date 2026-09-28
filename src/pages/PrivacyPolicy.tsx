import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, MapPin, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen w-full overflow-x-clip">
        <div className="container mx-auto max-w-3xl py-8 sm:py-12">
          <h1 className="mb-6 text-center text-2xl font-bold text-green-600 sm:text-3xl">
            Privacy Policy
          </h1>

          <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            At ARS INFRA DEVELOPERS PVT LTD, including our divisions, partners,
            agents, and affiliates, we are committed to protecting your privacy.
            This Privacy Policy outlines how we collect, use, maintain, and
            safeguard the information gathered from customers who visit our
            website or interact with us through digital or offline platforms.
          </p>

          {/* Section helper */}
          {[
            {
              title: "Personal Identification Information",
              content: (
                <>
                  <p className="mb-3 text-sm text-muted-foreground sm:text-base">
                    We may collect personal identification information from customers in a variety of ways, including:
                  </p>
                  <ol className="list-decimal space-y-1.5 pl-5 text-sm text-muted-foreground sm:text-base">
                    {[
                      "Visit our website",
                      "Fill out a form",
                      "Subscribe to our newsletter",
                      "Register interest in our projects",
                      "Operating system",
                      "Internet service provider",
                      "Other technical details related to website usage",
                      "Customers may visit our website anonymously. Personal information is collected only when voluntarily submitted.",
                    ].map((item, i) => <li key={i}>{item}</li>)}
                  </ol>
                </>
              ),
            },
            {
              title: "Use of Cookies",
              content: (
                <>
                  <p className="mb-3 text-sm text-muted-foreground sm:text-base">
                    Our website may use cookies and similar tracking technologies to enhance user experience. The data collected may be used for:
                  </p>
                  <ol className="list-decimal space-y-1.5 pl-5 text-sm text-muted-foreground sm:text-base">
                    {[
                      "To improve Customer Service",
                      "To respond to inquiries and provide support",
                      "To enhance our website based on feedback",
                      "To improve our products and services",
                      "To send updates, offers, or information related to our services",
                      "To communicate company news or promotional content via email",
                      "To analyze website performance and visitor trends",
                      "Customers may choose to disable cookies through their browser settings.",
                      "Customers may opt-out of future email communications by contacting us or using the unsubscribe option.",
                    ].map((item, i) => <li key={i}>{item}</li>)}
                  </ol>
                </>
              ),
            },
            {
              title: "How We Protect Your Information",
              content: (
                <>
                  <p className="mb-3 text-sm text-muted-foreground sm:text-base">
                    We implement appropriate data collection, storage, and security measures to protect against:
                  </p>
                  <ol className="list-decimal space-y-1.5 pl-5 text-sm text-muted-foreground sm:text-base">
                    {["Unauthorized access", "Alteration", "Disclosure", "Destruction of your personal information"].map((item, i) => <li key={i}>{item}</li>)}
                  </ol>
                  <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                    All data transfers are secured using SSL (Secure Sockets Layer) encryption.
                  </p>
                </>
              ),
            },
            {
              title: "Sharing Personal Information",
              content: (
                <p className="text-sm text-muted-foreground sm:text-base">
                  We do not sell, rent, or trade personal identification information.
                </p>
              ),
            },
            {
              title: "Changes to This Privacy Policy",
              content: (
                <p className="text-sm text-muted-foreground sm:text-base">
                  ARS INFRA DEVELOPERS PVT LTD reserves the right to update this Privacy Policy at any time without prior notice.
                  Customers are encouraged to regularly review this page for updates. Continued use of the website signifies acceptance of this policy.
                </p>
              ),
            },
            {
              title: "Consent",
              content: (
                <p className="text-sm text-muted-foreground sm:text-base">
                  By using this website or providing your personal information (including through our call centers), you agree to the terms of this Privacy Policy.
                  If you do not agree, please refrain from accessing the website or submitting personal information.
                </p>
              ),
            },
          ].map(({ title, content }) => (
            <section key={title} className="mb-7 sm:mb-8">
              <h2 className="mb-3 text-lg font-bold text-foreground sm:text-xl md:text-2xl">{title}</h2>
              {content}
            </section>
          ))}

          {/* Contact */}
          <section className="mb-8">
            <h2 className="mb-3 text-lg font-bold text-foreground sm:text-xl md:text-2xl">Contact Us</h2>
            <p className="mb-4 text-sm text-muted-foreground sm:text-base">
              If you have any questions regarding this Privacy Policy, please contact:
            </p>
            <ul className="space-y-3">
              <li className="flex flex-wrap items-center gap-2 text-sm sm:text-base">
                <Phone size={16} className="shrink-0 text-accent" />
                <a href="tel:+919885953399" className="text-blue-500 hover:underline">+91 98859 53399</a>
                <span className="text-muted-foreground">/</span>
                <a href="tel:+919916722344" className="text-blue-500 hover:underline">+91 99167 22344</a>
              </li>
              <li className="flex items-center gap-2 text-sm sm:text-base">
                <Mail size={16} className="shrink-0 text-accent" />
                <a href="mailto:arsinfra84@gmail.com" className="break-all text-blue-500 hover:underline">
                  arsinfra84@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Head+Office+%23953+2nd+Floor+D-Block+13th+Cross+16th+Main+Sahakar+Nagar+Bengaluru+560092"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline leading-relaxed"
                >
                  ARS INFRA DEVELOPERS PVT LTD, Head Office: #953, 2nd Floor, D-Block, 13th Cross, 16th Main, Sahakar Nagar, Bengaluru – 560092
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
