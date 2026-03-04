import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStamp } from "react-icons/fa6";
import { SiHdfcbank,SiIcicibank } from "react-icons/si";
import WhatsAppChat from "@/components/WhatsAppChat";

import {
  MapPin,
  Home,
  DollarSign,
  Zap,
  Waves,
  Trees,
  Dumbbell,
  ShoppingCart,
  Shield,
  Users,
  Phone,
  Mail,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Navigation,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import project11 from "@/assets/project-1-1.jpeg";
import project12 from "@/assets/project-1-2.jpeg";
import project13 from "@/assets/project-1-3.jpeg";
import project14 from "@/assets/project-1-4.jpeg";
import project15 from "@/assets/project-1-5.jpeg";
import project16 from "@/assets/project-1-6.jpeg";
import project21 from "@/assets/project-2-1.jpeg";
import project22 from "@/assets/project-2-2.jpeg";
import project23 from "@/assets/project-2-3.jpeg";
import project24 from "@/assets/project-2-4.jpeg";
import project25 from "@/assets/project-2-5.jpeg";
import project26 from "@/assets/project-2-6.jpeg";
import spandanaBrochure from "@/assets/spandana-brochure.pdf";
import vibrantBrouchure from "@/assets/vibrant-brochure.pdf";

const projectsData = [
{
  id: 1,
  name: "SPANDANA GARDENIA",
  location: "Near Kempegowda International Airport, Devanahalli",
  type: "Premium Plotted Development",
  status: "Devanahalli TMC Authorities – Ward No 23 Approved",
  description:
    "Spandana Gardenia is a premium plotted development project near Kempegowda International Airport. Design your dream home in a serene, well-connected environment with excellent future growth potential.",

  price: "Starting from ₹60,00,000",
  priceNegotiable: true,
  priceNegotiableNote: "sq.ft is 5000/-",
  brochure: spandanaBrochure,

  gallery: [project11, project12, project13, project14 , project15, project16],

  // 🔹 Available Units
  units: [
    {
      type: "Plot",
      size: "1200 sqft",
      price: "₹60,00,000",
      pricePerSqft: "₹5000",
    },
    {
      type: "Plot",
      size: "1500 sqft",
      price: "₹75,00,000",
      pricePerSqft: "₹5000",
    },
  ],

  amenities: [
    "Blacktop Roads",
    "Street Lighting",
    "Children Play Area",
    "Underground Drainage System",
    "Water Supply Connection",
    "Gated Community",
  ],

  facilities: [
    "8 KM from Kempegowda International Airport",
    "8 KM from Apple Foxconn",
    "25 KM from Hebbal",
    "7 KM from Gitam University",
    "7 KM from Devanahalli DC Office",
    "8 KM from KIADB Industrial Area",
    "All Schools & Colleges Nearby",
  ],

  banks: [
    { name: "HDFC Bank", rate: "As per bank norms", maxLoan: "Up to 80%" },
    { name: "Union Bank of India", rate: "As per bank norms", maxLoan: "Up to 80%" },
    { name: "State Bank of India", rate: "As per bank norms", maxLoan: "Up to 80%" },
    { name: "LIC Housing Finance", rate: "As per bank norms", maxLoan: "Up to 80%" },
  ],

  agents: [
    {
      id: 1,
      name: "PETA NAGENDRA",
      designation: "Listing Agent",
      phone: "+91 9885953399",
      email: "arsinfra84@gmail.com",
      experience: "Real Estate Consultant",
    },
  ],

  financialInfo: {
    pricePerSqft: "₹5000 per sqft",
    additionalCosts:
      "Stamp duty and registration charges are extra as per government norms.",
  },

  mapLocation:
    "Near Kempegowda International Airport, Devanahalli, Bengaluru",

  coordinates: { lat: 13.254920, lng: 77.694023 },
},
{
  id: 2,
  name: "VIBRANT SATHYAVAN",
  location: "Devanahalli,Bengalure",
  type: "Premium Villas",
  status: "Devanahalli",
  description:
    "Vibrant Sathyavan is a thoughtfully planned residential layout near Devanahalli, created for those who value nature-friendly living and future growth opportunities.",

  price: "Starting from ₹250,00,000",
  priceNegotiable: true,
  priceNegotiableNote: "sq.ft is 9000/- SBA",
  brochure: vibrantBrouchure,

  gallery: [project21, project22, project23, project24, project25, project26],

  // 🔹 Available Units
  units: [
    {
      type: "G+2 3BHK",
      size: "1200 sqft",
      price: "₹2.5 Cr Onwards",
      pricePerSqft: "₹9000 SBA",
    },
    {
      type: "G+2 4BHK",
      size: "2400 sqft",
      price: "₹4 Cr Onwards",
      pricePerSqft: "₹9000 SBA",
    },

  ],

  amenities: [
    "Entrance Arch",
    "Club House",
    "Park",
    "Swimming Pool",
    "Civic Amentity",
    "Water Tap Connection",
    "Rear Entrance",
  ],

  facilities: [
    "Devanahalli emerging as a major commercial hub",
    "Proposed Supreme Court South Indian Bench",
    "150 Acres International Cricket Stadium",
    "ITMR (1200 Acres) & Aerospace SEZ",
    "Devanahalli Business Park (413 Acres)",
    "Upcoming IT / ITES & Electronic Hardware SEZs",
    "NH7 Widening to 8 Lanes",
    "DC Office, Court & Educational Institutions Nearby",
  ],

  banks: [
    { name: "HDFC Bank", rate: "As per bank norms", maxLoan: "Up to 80%" },
    { name: "Union Bank of India", rate: "As per bank norms", maxLoan: "Up to 80%" },
    { name: "State Bank of India", rate: "As per bank norms", maxLoan: "Up to 80%" },
    { name: "LIC Housing Finance", rate: "As per bank norms", maxLoan: "Up to 80%" },
  ],

  agents: [
    {
      id: 1,
      name: "PETA NAGENDRA",
      designation: "Listing Agent",
      phone: "+91 9885953399",
      email: "arsinfra84@gmail.com",
      experience: "Real Estate Consultant",
    },
  ],

  financialInfo: {
    pricePerSqft: "₹5000 per sqft",
    additionalCosts:
      "Stamp duty and registration charges are extra as per government norms.",
  },

  mapLocation:
    "Near Kempegowda International Airport, Devanahalli, Bengaluru",

  coordinates: { lat: 13.232166, lng: 77.702164 },
}

]

const companyInfo = {
  name: "ARS INFRA DEVELOPERS PVT LTD",
  address:
    "#953, 2nd Floor, D-Block, 13th Cross, 16th Main, Sahakar Nagar, Bengaluru – 560092",
  phone: "+91 98859 53399 / +91 80083 34428",
  email: "arsinfra84@gmail.com",
  website: "www.arsinfras.com",
  whyChoose: [
    "14+ Years of Real Estate Experience",
    "Transparent Documentation & Ethical Practices",
    "Strategically Located Projects",
    "High-Quality Infrastructure Standards",
    "Strong Customer Trust & Support",
  ],
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = projectsData.find((p) => p.id === parseInt(id || "1"));

  if (!project) {
    return (
      <div className="min-h-screen font-body">
        <Navbar />
        <div className="section-padding">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-bold text-foreground">Project Not Found</h1>
            <button
              onClick={() => navigate("/")}
              className="mt-6 flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground"
            >
              <ArrowLeft size={18} />
              Back to Home
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Map source: prefer Google Embed API if VITE_GOOGLE_MAPS_API_KEY is provided.
  // Otherwise use the generic Google maps embed URL (works without an API key) pointed at coordinates.
  const googleMapsKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const lat = project?.coordinates?.lat ?? 12.9716; // default to Bengaluru center if missing
  const lng = project?.coordinates?.lng ?? 77.5946;
  const googleFallbackSrc = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
  const mapSrc = googleMapsKey
    ? `https://www.google.com/maps/embed/v1/place?key=${googleMapsKey}&q=${encodeURIComponent(project.mapLocation)}`
    : googleFallbackSrc;
  const mapLink = googleMapsKey
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(project.mapLocation)}`
    : `https://maps.google.com/?q=${lat},${lng}`;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <div className="min-h-screen font-body">
      <Navbar />

      {/* Back Button */}
      <div className="section-padding-top bg-card">
        <div className="container mx-auto">
          <button
            onClick={() => navigate("/#projects")}
            className="flex items-center gap-2 text-primary hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="bg-card section-padding-x py-8">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-lg bg-muted h-96">
            <img
              src={project.gallery[currentImageIndex]}
              alt={`${project.name} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 hover:bg-black/70 transition-colors"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 hover:bg-black/70 transition-colors"
            >
              <ChevronRight size={24} className="text-white" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
              {currentImageIndex + 1} / {project.gallery.length}
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="mt-4 flex gap-2 overflow-x-auto">
            {project.gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`h-20 w-20 flex-shrink-0 rounded-md overflow-hidden border-2 transition-colors ${
                  idx === currentImageIndex ? "border-accent" : "border-muted"
                }`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Project Header & Basic Info */}
      <div className="section-padding bg-foreground text-primary-foreground">
        <div className="container mx-auto">
          <h1 className="mb-2 font-display text-4xl font-bold">{project.name}</h1>
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <span className="inline-block rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">
              {project.status}
            </span>
            <p className="flex items-center gap-2">
              <MapPin size={18} />
              {project.location}
            </p>
            <p className="flex items-center gap-2">
              <Home size={18} />
              {project.type}
            </p>
            {project.brochure && (
              <a
                href={project.brochure}
                download
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
              >
                📄 Download Brochure
              </a>
            )}            
          </div>
          <p className="mb-4 text-primary-foreground/90">{project.description}</p>
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold text-accent">{project.price}</p>
            {project.priceNegotiable && (
              <p className="text-sm text-primary-foreground/70">✓ Price negotiable {project.priceNegotiableNote}</p>
            )}
          </div>
        </div>
      </div>
            {/* Available Units Table */}
<section className="mb-12">
  <h2 className="mb-6 flex items-center gap-3 font-display text-2xl font-bold text-foreground">
    <Home size={24} className="text-accent" />
    Available Units, Sizes & Pricing
  </h2>

  <div className="overflow-x-auto rounded-lg border border-muted shadow-md">
    <table className="w-full text-left border-collapse">
      <thead className="bg-accent/10">
        <tr>
          <th className="px-6 py-3 text-sm font-semibold text-foreground border-b">
            Unit Type
          </th>
          <th className="px-6 py-3 text-sm font-semibold text-foreground border-b">
            Size (sqft)
          </th>
          <th className="px-6 py-3 text-sm font-semibold text-foreground border-b">
            Price
          </th>
        </tr>
      </thead>

      <tbody>
        {project.units?.map((unit, index) => (
          <tr key={index} className="hover:bg-muted/50 transition-colors">
            <td className="px-6 py-4 border-b font-medium text-foreground">
              {unit.type}
            </td>
            <td className="px-6 py-4 border-b text-muted-foreground">
              {unit.size}
            </td>
            <td className="px-6 py-4 border-b font-semibold text-accent">
              {unit.price}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>
      {/* Main Content */}
      <div className="section-padding">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Left Column */}
            <div className="lg:col-span-2">
              {/* Amenities */}
              <section className="mb-12">
                <h2 className="mb-6 flex items-center gap-3 font-display text-2xl font-bold text-foreground">
                  <Zap size={24} className="text-accent" />
                  Amenities & Features
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-3 rounded-lg bg-card p-4">
                      <div className="rounded-full bg-accent/10 p-2">
                        <Zap size={18} className="text-accent" />
                      </div>
                      <p className="text-foreground">{amenity}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Facilities */}
              <section className="mb-12">
                <h2 className="mb-6 flex items-center gap-3 font-display text-2xl font-bold text-foreground">
                  <Trees size={24} className="text-accent" />
                  Facilities
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.facilities.map((facility, idx) => (
                    <div key={idx} className="flex items-center gap-3 rounded-lg bg-card p-4">
                      <div className="rounded-full bg-accent/10 p-2">
                        <Shield size={18} className="text-accent" />
                      </div>
                      <p className="text-foreground">{facility}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Map Location */}
              <section className="mb-12">
                <h2 className="mb-6 flex items-center gap-3 font-display text-2xl font-bold text-foreground">
                  <Navigation size={24} className="text-accent" />
                  Location Map
                </h2>
                <div className="rounded-lg bg-muted p-4 h-96">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    src={mapSrc}
                    allowFullScreen
                    loading="lazy"
                    className="rounded-lg"
                  ></iframe>
                </div>

                <div className="mt-3 flex items-start gap-4">
                  <a
                    href={mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-accent"
                  >
                    View on {googleMapsKey ? "Google Maps" : "Google Maps"}
                  </a>
                  <p className="mt-1 text-sm text-muted-foreground">{project.mapLocation}</p>
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <p className="flex items-center gap-3 rounded-lg bg-card p-4 mt-14"><SiHdfcbank className="text-accent" /> Bank loans available</p>
              <p className="flex items-center gap-3 rounded-lg bg-card p-4"><FaStamp className="text-accent" /> Extra stamp duty & GST applicable</p>
            </div>
            
          </div>
        </div>
      </div>

      {/* Company Contact & Why Choose */}
      <div className="section-padding bg-card">
        <div className="container mx-auto">
          <h2 className="mb-4 font-display text-2xl font-bold">{companyInfo.name}</h2>
          <p className="mb-2 text-sm text-muted-foreground">{companyInfo.address}</p>
          <p className="mb-2 flex items-center gap-2 text-sm">
            <Phone size={16} />
            {companyInfo.phone}
          </p>
          <p className="mb-2 flex items-center gap-2 text-sm">
            <Mail size={16} />
            {companyInfo.email}
          </p>
          <p className="mb-4 text-sm">
            <a href={`https://${companyInfo.website}`} className="text-accent">
              {companyInfo.website}
            </a>
          </p>

          <h3 className="mb-2 font-display text-lg font-semibold">Why Choose ARS INFRAS</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-foreground">
            {companyInfo.whyChoose.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        </div>
      </div>
      <WhatsAppChat />
      
      <Footer />
    </div>
  );
};

export default ProjectDetails;
