import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import HeroCarousel from "@/components/HeroCarousel";
import StatsSection from "@/components/StatsSection"; 
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

type Section = "home" | "about" | "projects" | "awards" | "contact";

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const location = useLocation();

  // Auto-popup state for homepage entry (show on every load)
  const [personOpen, setPersonOpen] = useState(false);
  const [personShown, setPersonShown] = useState(false);
  // WhatsApp dialog state (shown concurrently)
  const [whatsOpen, setWhatsOpen] = useState(false);
  const [whatsShown, setWhatsShown] = useState(false);

  const contactPerson = {
    name: "PETA NAGENDRA",
    designation: "Listing Agent",
    phone: "+91 9885953399",
    email: "arsinfra84@gmail.com",
    experience: "Real Estate Consultant",
  };

  // Enquiry form state
  const [enquiryName, setEnquiryName] = useState("");
  const [enquiryPhone, setEnquiryPhone] = useState("");
  const [enquiryEmail, setEnquiryEmail] = useState("");
  const [enquiryMessage, setEnquiryMessage] = useState("");
  const [enquiryAgree, setEnquiryAgree] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (activeSection === "home") {
      // show both enquiry and WhatsApp popups on home entry
      setPersonOpen(true);
      setPersonShown(true);
      setWhatsOpen(true);
      setWhatsShown(true);
    }
  }, [activeSection]);


  const handleSubmitEnquiry = async () => {
    if (!enquiryName.trim() || !enquiryPhone.trim()) {
      toast({ title: "Please fill required fields", description: "Name and phone are required." });
      return;
    }

    if (!enquiryAgree) {
      toast({ title: "Agreement required", description: "Please agree to the terms and conditions." });
      return;
    }

    setSubmitting(true);

    // Simulate API call — replace with real submission if/when available
    setTimeout(() => {
      setSubmitting(false);
      toast({ title: "Enquiry submitted", description: "Thank you — we will contact you shortly." });

      // reset form
      setEnquiryName("");
      setEnquiryPhone("");
      setEnquiryEmail("");
      setEnquiryMessage("");
      setEnquiryAgree(false);
      setPersonOpen(false);
    }, 800);
  }; 

  const handleSectionChange = (section: string) => {
    setActiveSection(section as Section);
  };

  useEffect(() => {
    // If URL contains a hash (e.g. /#about) set the corresponding section
    if (location.hash) {
      const hash = location.hash.replace("#", "");
      if (["home", "about", "projects", "awards", "contact"].includes(hash)) {
        setActiveSection(hash as Section);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen font-body">
      <Navbar onSectionChange={handleSectionChange} />

      {/* Auto-open dialogs shown on homepage entry (every load) */}
      <Dialog open={personOpen} onOpenChange={setPersonOpen}>
        {/* Enquiry popup anchored to right side */}
        <DialogContent className="fixed right-10 top-1/2 w-full max-w-md -translate-y-1/2">
          <DialogHeader>
            <DialogTitle>Enquiry</DialogTitle>
            <DialogDescription>Leave your details and we’ll get back to you.</DialogDescription>
          </DialogHeader>

          <div className="mt-4 space-y-3">
            <Input placeholder="Your name *" value={enquiryName} onChange={(e) => setEnquiryName(e.target.value)} />
            <Input placeholder="Phone *" value={enquiryPhone} onChange={(e) => setEnquiryPhone(e.target.value)} />
            <Input placeholder="Email (optional)" value={enquiryEmail} onChange={(e) => setEnquiryEmail(e.target.value)} />
            <Textarea placeholder="Message / Inquiry" value={enquiryMessage} onChange={(e) => setEnquiryMessage(e.target.value)} />

            {/* terms checkbox */}
            <label className="inline-flex items-center space-x-2">
              <Checkbox
                checked={enquiryAgree}
                onCheckedChange={(checked) => setEnquiryAgree(!!checked)}
              />
              <span className="text-sm">
                Accept all <a href="/privacy-policy" className="underline text-primary">terms&nbsp;and&nbsp;conditions</a> & I Would like to receive communication via SMS,Email and Whatsapp for my services,offers and updates.
              </span>
            </label>
          </div>

          <DialogFooter>
            <Button onClick={handleSubmitEnquiry} disabled={submitting}>{submitting ? "Sending..." : "Submit Enquiry"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* WhatsApp popup anchored to left side, icon-only */}
      <Dialog open={whatsOpen} onOpenChange={setWhatsOpen}>
        <DialogContent className="fixed top-[100px] right-[40px] w-max -translate-y-1/2">
          <div className="text-center">
            <a
              href="https://wa.me/919885953399"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open WhatsApp"
              className="inline-flex items-center justify-center rounded-full bg-green-500 p-4 text-white hover:opacity-90 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.52 3.48A11.94 11.94 0 0012 .5 11.94 11.94 0 003.48 3.48 11.94 11.94 0 00.5 12c0 2.11.55 4.07 1.6 5.82L.5 23.5l5.81-1.57A11.94 11.94 0 0012 23.5c3.18 0 6.17-1.24 8.48-3.48A11.94 11.94 0 0023.5 12 11.94 11.94 0 0020.52 3.48zM12 21.5a9.38 9.38 0 01-5.01-1.46l-.36-.22-3.45.93.93-3.36-.24-.35A9.47 9.47 0 012.5 12 9.5 9.5 0 1112 21.5zM17.3 14.24c-.28-.14-1.65-.81-1.91-.9-.26-.09-.45-.14-.64.14-.19.28-.73.9-.9 1.09-.17.19-.33.21-.61.07-.28-.14-1.17-.43-2.22-1.37-.82-.73-1.37-1.63-1.53-1.91-.16-.28-.02-.43.12-.57.12-.12.28-.31.42-.47.14-.16.19-.27.28-.45.09-.18.05-.34-.02-.48-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48-.17-.01-.37-.01-.57-.01s-.48.07-.73.34c-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.1 2.81.14.19 1.91 2.92 4.63 3.98 2.72 1.05 2.72.7 3.21.66.49-.04 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.29-.07-.12-.26-.19-.54-.33z"/>
              </svg>
            </a>
          </div>
        </DialogContent>
      </Dialog>



      {(activeSection === "home") && (
        <>
          <HeroCarousel />
          <AboutSection />
          <StatsSection />
          <ProjectsSection />

          <ContactSection />
        </>
      )}

      {activeSection === "about" && (
        <>
          <AboutSection />
          <StatsSection />
        </>
      )}

      {activeSection === "projects" && <ProjectsSection />}
      {activeSection === "awards" && <AwardsSection />}
      {activeSection === "contact" && <ContactSection />}
      <Footer onSectionChange={handleSectionChange} />
    </div>
  );
};

export default Index;
