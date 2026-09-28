import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import HeroCarousel from "@/components/HeroCarousel";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import emailjs from '@emailjs/browser';
import WhatsAppChat from "@/components/WhatsAppChat";

const Index = () => {
  const location = useLocation();
  const popupShown = useRef(false);

  const [personOpen, setPersonOpen] = useState(false);
  const [enquiryName, setEnquiryName] = useState("");
  const [enquiryPhone, setEnquiryPhone] = useState("");
  const [enquiryEmail, setEnquiryEmail] = useState("");
  const [enquiryMessage, setEnquiryMessage] = useState("");
  const [enquiryAgree, setEnquiryAgree] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Show popup once on first load
  useEffect(() => {
    if (!popupShown.current) {
      popupShown.current = true;
      setPersonOpen(true);
    }
  }, []);

  // Scroll to hash section when URL hash changes
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // Small delay so the DOM is fully painted
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
      }
    } else {
      // No hash → scroll to top (home)
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.hash]);

  const handleDialogChange = (open: boolean) => {
    if (!open) popupShown.current = true;
    setPersonOpen(open);
  };

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

    emailjs
      .send(
        "service_ehfpojb", "template_zy2pm0i",
        { from_name: enquiryName, phone: enquiryPhone, email: enquiryEmail, message: enquiryMessage },
        "mV0nRTPUTPmYm1wy9",
      )
      .then(() => console.log("SUCCESS!"), (err) => console.log("FAILED...", err.text))
      .finally(() => {
        setSubmitting(false);
        toast({ title: "Enquiry submitted", description: "Thank you — we will contact you shortly." });
        setEnquiryName(""); setEnquiryPhone(""); setEnquiryEmail(""); setEnquiryMessage(""); setEnquiryAgree(false);
        popupShown.current = true;
        setPersonOpen(false);
      });
  };

  return (
    <div className="min-h-screen w-full overflow-x-clip font-body">
      <Navbar />

      {/* Enquiry popup */}
      <Dialog open={personOpen} onOpenChange={handleDialogChange}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl">Enquiry</DialogTitle>
            <DialogDescription className="text-sm">
              Leave your details and we'll get back to you.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-3 space-y-3">
            <Input placeholder="Your name *" value={enquiryName} onChange={(e) => setEnquiryName(e.target.value)} className="text-sm" />
            <Input placeholder="Phone *" value={enquiryPhone} onChange={(e) => setEnquiryPhone(e.target.value)} className="text-sm" />
            <Input placeholder="Email (optional)" value={enquiryEmail} onChange={(e) => setEnquiryEmail(e.target.value)} className="text-sm" />
            <Textarea placeholder="Message / Inquiry" value={enquiryMessage} onChange={(e) => setEnquiryMessage(e.target.value)} className="resize-none text-sm" rows={3} />
            <label className="flex items-start gap-2 cursor-pointer">
              <Checkbox checked={enquiryAgree} onCheckedChange={(c) => setEnquiryAgree(!!c)} className="mt-0.5 shrink-0" />
              <span className="text-xs leading-relaxed text-muted-foreground">
                Accept all{" "}
                <a href="/privacy" className="underline text-primary">terms&nbsp;&amp;&nbsp;conditions</a>
                {" "}&amp; I would like to receive communication via SMS, Email and WhatsApp.
              </span>
            </label>
          </div>

          <DialogFooter className="mt-4">
            <Button onClick={handleSubmitEnquiry} disabled={submitting} className="w-full sm:w-auto">
              {submitting ? "Sending..." : "Submit Enquiry"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* All sections always rendered — nav scrolls to their id anchors */}
      <HeroCarousel />
      <AboutSection />
      <StatsSection />
      <ProjectsSection />
      <ContactSection />

      <WhatsAppChat />
      <Footer />
    </div>
  );
};

export default Index;
