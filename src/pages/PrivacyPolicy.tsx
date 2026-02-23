import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, MapPin, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-green-600 text-center">
          Privacy Policy
        </h1>

        <p className="mb-6">
          At ARS INFRA DEVELOPERS PVT LTD, including our divisions, partners,
          agents, and affiliates, we are committed to protecting your privacy.
          This Privacy Policy outlines how we collect, use, maintain, and
          safeguard the information gathered from customers who visit our
          website or interact with us through digital or offline platforms.
        </p>

        {/* Personal Information */}
        <h2 className="text-2xl font-bold mb-3">
          Personal Identification Information
        </h2>
        <p className="mb-4">
          We may collect personal identification information from customers in
          a variety of ways, including:
        </p>
        <ol className="list-decimal pl-6 mb-6 space-y-2">
          <li>Visit our website</li>
          <li>Fill out a form</li>
          <li>Subscribe to our newsletter</li>
          <li>Register interest in our projects</li>
          <li>Operating system</li>
          <li>Internet service provider</li>
          <li>Other technical details related to website usage</li>
          <li>Customers may visit our website anonymously. Personal information is collected only when voluntarily submitted.</li>
        </ol>

        {/* Cookies */}
        <h2 className="text-2xl font-bold mb-3">Use of Cookies</h2>
        <p className="mb-4">
          Our website may use cookies and similar tracking technologies to enhance user experience.
        </p>
        <p className="mb-4">
          The data collected may be used for the following purposes:
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li>To improve Customer Service</li>
            <li>To respond to inquiries and provide support</li>
            <li>To enhance our website based on feedback</li>
            <li>To improve our products and services</li>
            <li>To send updates, offers, or information related to our services</li>
            <li>To communicate company news or promotional content via email</li>
            <li>To analyze website performance and visitor trends</li>
            <li>Customers may choose to disable cookies through their browser settings.</li>
            <li>Customers may opt-out of future email communications by contacting us through our website or using the unsubscribe option provided in emails.</li>
          </ol>
        </p>

        {/* Security */}
        <h2 className="text-2xl font-bold mb-3">
          How We Protect Your Information
        </h2>
        <p className="mb-4">
          We implement appropriate data collection, storage, and security measures to protect against:
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li>Unauthorized access</li>
            <li>Alteration</li>
            <li>Disclosure</li>
            <li>Destruction of your personal information</li>
          </ol>
        </p>
        <p className="mb-4">
          All data transfers between our website and customers are secured using SSL (Secure Sockets Layer) encryption.
        </p>

        {/* Sharing Info */}
        <h2 className="text-2xl font-bold mb-3">
          Sharing Personal Information
        </h2>
        <p className="mb-6">
          We do not sell, rent, or trade personal identification information.
        </p>

        {/* Policy Changes */}
        <h2 className="text-2xl font-bold mb-3">
          Changes to This Privacy Policy
        </h2>
        <p className="mb-6">
          ARS INFRA DEVELOPERS PVT LTD reserves the right to update this Privacy Policy at any time without prior notice.
Customers are encouraged to regularly review this page for updates. Continued use of the website signifies acceptance of this privacy policy.
        </p>

        {/* Consent */}
        <h2 className="text-2xl font-bold mb-3">Consent</h2>
        <p className="mb-6">
          By using this website or providing your personal information (including through our call centers), you agree to the terms of this Privacy Policy. If you do not agree with the policy, please refrain from accessing the website or submitting personal information.
        </p>

        {/* Contact */}
        <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
        <p className="mb-4">
          If you have any questions regarding this Privacy Policy, please contact:
        </p>
        <ul className="mb-6 space-y-3">
          <li className="flex items-center">
            <Phone className="mr-2" />
            <a href="tel:+919885953399" className="text-blue-500 hover:underline mr-2">+91 98859 53399</a>
            <span className="mx-2">/</span>
            <a href="tel:+919916722344" className="text-blue-500 hover:underline">+91 99167 22344</a>
          </li>
          <li className="flex items-center">
            <Mail className="mr-2" />
            <a
              href="mailto:arsinfra84@gmail.com"
              className="text-blue-500 hover:underline"
            >
              arsinfra84@gmail.com
            </a>
          </li>
          <li className="flex items-center">
            <MapPin className="mr-2" />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Head+Office+%23953+2nd+Floor+D-Block+13th+Cross+16th+Main+Sahakar+Nagar+Bengaluru+560092"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline whitespace-pre-line"
            >
              ARS INFRA DEVELOPERS PVT LTD
              Head Office: #953, 2nd Floor, D-Block,
              13th Cross, 16th Main, Sahakar Nagar,
              Bengaluru – 560092
            </a>
          </li>
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
