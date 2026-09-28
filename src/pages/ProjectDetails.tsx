import { useLayoutEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStamp } from "react-icons/fa6";
import { SiHdfcbank,SiIcicibank } from "react-icons/si";
import WhatsAppChat from "@/components/WhatsAppChat";
import { getProjectId } from "@/lib/projectSlugs";
import palmscapeA1 from "@/assets/palmscape-a1.jpeg";
import palmscapeA2 from "@/assets/palmscape-a2.jpeg";
import palmscapeA3 from "@/assets/palmscape-a3.jpeg";
import palmscapeFeaturedGate from "@/assets/palmscape-featured-gate.jpeg";
import palmscapeCoconutGrove from "@/assets/palmscape-coconut-grove.jpeg";
import palmscapeAerialCommunity from "@/assets/palmscape-aerial-community.jpeg";
import prestigePhase2P1 from "@/assets/prestige-phase2-p1.jpeg";
import prestigePhase2P3 from "@/assets/prestige-phase2-p3.jpeg";
import prestigePhase2P4 from "@/assets/prestige-phase2-p4.jpeg";
import prestigePhase2P5 from "@/assets/prestige-phase2-p5.jpeg";
import prestigePhase2Layout from "@/assets/prestige-phase2-layout.jpeg";
import prestigePhase2Entrance from "@/assets/prestige-phase2-entrance.jpeg";

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
import project31 from "@/assets/sumadhura 1.jpeg";
import project32 from "@/assets/sumadhura 2.jpeg";
import project33 from "@/assets/sumadhura 3.jpeg";
import project34 from "@/assets/sumadhura 4.jpg";
import project35 from "@/assets/sumadhura 5.jpg";
import project36 from "@/assets/sumadhura 6.jpg";
import spandanaBrochure from "@/assets/spandana-brochure.pdf";
import vibrantBrouchure from "@/assets/vibrant-brochure.pdf";
import sumadhuraBrochure from "@/assets/sumadhura broucher updated.pdf";

const projectsData = [
{
  id: 1,
  slug: "spandana-gardenia",
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
  slug: "vibrant-sathyavan",
  name: "VIBRANT SATHYAVAN",
  location: "Devanahalli,Bengalure",
  type: "Premium Villas",
  status: "Upcoming",
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
},
{
  id: 3,
  slug: "sumadhura-panorama-phase-2",
  name: "SUMADHURA PANORAMA - PHASE 2",
  location: "Devanahalli Main Road - Near Kempegowda International Airport, Bengaluru",
  type: "Premium Themed Plotted Development",
  status: "Ongoing",
  description:
    "SUMADHURA PANORAMA Phase 2 is a landmark 120+ acre themed plotted development inspired by the rich cultural heritage of South India. Located in North Bengaluru's fastest-growing investment hub, just 10 minutes from Kempegowda International Airport, this development offers unmatched design flexibility and premium living.",

  price: "Starting from basic Price per sqft ₹8599/- onwards",
  priceNegotiable: false,
  priceNegotiableNote: "",
  brochure: sumadhuraBrochure,

  gallery: [project31, project32, project33, project34, project35, project36],
  units: [
    {
      type: "Plot",
      size: "1200 sqft",
      pricePerSqft: "₹8599",
    },
    {
      type: "Plot",
      size: "1500 sqft",
      pricePerSqft: "₹8599",
    },
    {
      type: "Plot",
      size: "1800 sqft",
      pricePerSqft: "₹8599",
    },
    {
      type: "Plot",
      size: "2400 sqft",
      pricePerSqft: "₹8599",
    },
    {
      type: "Plot",
      size: "3000+ sqft",
      pricePerSqft: "₹8599",
    },
  ],

  amenities: [
    "Club Sumadhura – Grand Clubhouse (45,000 Sq. Ft.)",
    "Fully Equipped Gymnasium",
    "Indoor Badminton Court",
    "Indoor Games Room (Pool, Table Tennis, Board Games)",
    "Co-Working Space",
    "Multipurpose Party Hall with Service Kitchen",
    "Yoga & Dance Studio",
    "Steam, Sauna, Spa & Salon",
    "Mini Theater / Recreation Rooms",
    "Convenience Supermarket & Retail Spaces",
    "Guest Rooms for Visitors",
    "Grand Swimming Pool (Adults)",
    "Shallow & Kids Pool with Poolside Deck",
    "Outdoor Showers & Changing Rooms",
    "Mini Soccer Ground",
    "Tennis, Basketball & Pickleball Courts",
    "Box Cricket Layout",
    "Skate Park",
    "Dedicated Jogging & Walking Tracks",
    "Independent Bicycle Lanes",
    "Children's Play Area & Trampoline Park",
    "Open-Air Amphitheatre & Stepped Seating",
    "Heritage-inspired Kulam (pond) and Themed Courtyards",
    "Aroma Therapeutic Garden & Native Tree Plantations",
    "Reflexology Pathways, Meditation Pavilions & Social Corners",
    "70+ Lifestyle Amenities",
  ],

  facilities: [
    "18m, 12m & 9m asphalted internal roads with paver sidewalks",
    "Underground domestic water supply network with sump & WTP",
    "Integrated underground drainage system and on-site STP",
    "Underground power, data & voice cabling (no overhead wires)",
    "100% DG backup for all common lifestyle facilities and layout utilities",
    "Underground rainwater harvesting and automated irrigation network",
    "Organic waste converter & waste-management systems",
    "24/7 manned security, grand entrance plaza and automated boom barriers",
    "Continuous perimeter CCTV surveillance",
    "Energy-efficient LED streetlights with timer controls",
    "Convenience retail and essential services on-site",
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
    pricePerSqft: "Starting from basic Price per sqft ₹8599/- onwards",
    additionalCosts:
      "Stamp duty and registration charges are extra as per government norms.",
  },

  mapLocation:
    "Sumadhura Panorama experience centre, Devanahalli Main Road, Bengaluru",

  coordinates: { lat: 13.2400332, lng: 77.6956355 },
},
{
  id: 4,
  slug: "assetz-codename-palmscape",
  name: "ASSETZ CODENAME PALMSCAPE",
  tagline: "A Canopy of Quiet",
  location: "Off IVC Road, North Bengaluru",
  type: "Luxury Plotted Development",
  status: "Upcoming",
  description:
    "Set along the evolving IVC Road corridor in North Bengaluru, this exclusive plotted community offers premium plots amidst lush natural surroundings, designed for a more grounded and connected way of living. Framed by coconut groves and native greenery, Assetz Codename Palmscape offers a rare balance of nature and connectivity. Phase 1 inventory now open. Limited release. Be among the first to discover a landmark destination — before the city catches on.",
  price: "Starting from ₹1.08/- Crore onwards",
  priceNegotiable: false,
  priceNegotiableNote: "",
  brochure: "/brochures/assetz-codename-palmscape-brochure.pdf",
  gallery: [
    palmscapeFeaturedGate,
    palmscapeA1,
    palmscapeA2,
    palmscapeA3,
    palmscapeCoconutGrove,
    palmscapeAerialCommunity,
  ],
  units: [
    { type: "Dimensions", size: "1200 sqft", price: "₹1.08 CR" },
    { type: "Dimensions", size: "1500 sqft", price: "₹1.35 CR" },
    { type: "Dimensions", size: "2400 sqft", price: "₹1.80 CR" },
  ],
  amenities: [
    "1000+ Trees Across the Community",
    "Coconut Groves and Native Greenery",
    "Gated ~35 Acres Master-Planned Community",
    "642 Exclusive Premium Plots",
    "Premium Internal Roads",
    "Landscaped Open Spaces & Parks",
    "Children's Play Area",
    "24/7 Security & Surveillance",
    "Underground Utilities & Drainage",
  ],
  facilities: [
    "3 Mins to STRR",
    "3 Mins to Harrow International School",
    "11 Mins to Padukone - Dravid Centre for Sports Excellence",
    "12 Mins to Foxconn",
    "12 Mins to NH44",
    "20 Mins to Kempegowda International Airport",
    "📍 Location: Off IVC Road, North Bengaluru Corridor",
  ],
  banks: [
    { name: "HDFC Bank", rate: "As per bank norms", maxLoan: "Up to 80%" },
    { name: "State Bank of India", rate: "As per bank norms", maxLoan: "Up to 80%" },
    { name: "ICICI Bank", rate: "As per bank norms", maxLoan: "Up to 80%" },
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
    pricePerSqft: "Price Range: ₹1.08 Cr - ₹1.80 Cr onwards",
    additionalCosts: "Stamp duty and registration charges extra. Phase 1 inventory — limited release.",
  },
  mapLocation: "13°15'04.0\"N 77°36'56.4\"E",
  coordinates: { lat: 13.251111, lng: 77.615667 },
},
{
  id: 5,
  slug: "prestige-gardenia-estate",
  name: "Prestige Gardenia Estate Phase 2",
  tagline: "A lifestyle crafted for those who seek space, serenity, and Prestige.",
  location: "Prestige Gardenia Estate, 7MJC+HC Devanahally, Karnataka",
  type: "Premium Plotted Development",
  status: "Upcoming",
  description:
    "North Bangalore's Premium Plotted Development by Prestige Group is back with Phase 2. Spread across 20+ acres on the high-growth STRR-Devanahalli corridor, this exclusive plotted release offers limited 200+ premium plots designed for those who appreciate grandeur, space, and serenity. Stay tuned for the grand launch!",
  price: "Prices start at ₹8,500/- per sq. ft. onwards",
  priceNegotiable: false,
  priceNegotiableNote: "",
  brochure: "/brochures/prestige-north-bangalore-phase-2-brochure.pdf",
  gallery: [
    prestigePhase2P1,
    prestigePhase2P3,
    prestigePhase2P4,
    prestigePhase2P5,
    prestigePhase2Layout,
    prestigePhase2Entrance,
  ],
  units: [
    { type: "Dimensions", size: "2000 sqft", price: "₹1.70 Cr onwards" },
    { type: "Dimensions", size: "3000 sqft", price: "₹2.55 Cr onwards" },
    { type: "Dimensions", size: "4000 sqft", price: "₹3.40 Cr onwards" },
    { type: "Dimensions", size: "6000 sqft", price: "₹5.10 Cr onwards" },
    { type: "Custom Plot", size: "Custom Sizes", price: "On Request" },
  ],
  amenities: [
    "Gated Prestige-Grade Community",
    "Landscaped Green Parks & Open Spaces",
    "Grand Club House & Indoor Games",
    "Swimming Pool with Deck",
    "Children's Play Area & Senior Citizen Corner",
    "Jogging, Walking & Cycling Tracks",
    "24/7 Manned Security with CCTV",
    "Underground Utilities, Power & Drainage",
    "Prestige Quality Infrastructure Standards",
  ],
  facilities: [
    "📍 Prime Location directly on STRR – Devanahalli",
    "🏞️ Spread across 20+ Acres of Prime Land",
    "🏡 Limited 200+ Premium Plots",
    "✈️ Rapid Access to Kempegowda International Airport",
    "🏢 Close to Upcoming IT Parks, Aerospace SEZ & Foxconn",
    "📈 High Capital Appreciation Potential",
    "📲 Stay tuned for the grand launch!",
  ],
  banks: [
    { name: "HDFC Bank", rate: "As per bank norms", maxLoan: "Up to 80%" },
    { name: "State Bank of India", rate: "As per bank norms", maxLoan: "Up to 80%" },
    { name: "ICICI Bank", rate: "As per bank norms", maxLoan: "Up to 80%" },
    { name: "Axis Bank", rate: "As per bank norms", maxLoan: "Up to 80%" },
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
    pricePerSqft: "Prices start at ₹8,500/- per sq. ft. onwards",
    additionalCosts: "Stamp duty and registration charges extra. Stay tuned for the grand launch.",
  },
  mapLocation: "Prestige Gardenia Estate, 7MJC+HC Devanahally, Karnataka",
  coordinates: { lat: 13.2500, lng: 77.7100 },
},


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
  const { slug } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const project =
    projectsData.find((p) => p.slug === slug) ??
    projectsData.find((p) => p.id === getProjectId(slug ?? ""));

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
  const googleFallbackSrc = project?.id === 5
    ? `https://maps.google.com/maps?q=${encodeURIComponent(project.mapLocation)}&z=15&output=embed`
    : `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
  const mapQuery = project?.id === 4 ? `${lat},${lng}` : project.mapLocation;
  const mapSrc = googleMapsKey
    ? `https://www.google.com/maps/embed/v1/place?key=${googleMapsKey}&q=${encodeURIComponent(mapQuery)}`
    : googleFallbackSrc;
  let mapLink = googleMapsKey
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(project.mapLocation)}`
    : `https://maps.google.com/?q=${lat},${lng}`;

  // Use the exact Google Maps place URL for Sumadhura Panorama project (id 3)
  if (project?.id === 3) {
    mapLink = "https://www.google.co.in/maps/place/Sumadhura+Panorama+experience+centre/@13.2400332,77.6956355,16.36z/data=!4m6!3m5!1s0x3bae1d001aec811d:0x23745d2a30e6bd91!8m2!3d13.2375724!4d77.6942758!16s%2Fg%2F11mt7xwg7f?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D";
  } else if (project?.id === 4) {
    mapLink = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  } else if (project?.id === 5) {
    mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(project.mapLocation)}`;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };


  return (
    <div className="min-h-screen w-full overflow-x-clip font-body">
      <Navbar />

      {/* Back Button */}
      <div className="bg-card px-4 pt-4 pb-2 sm:px-6 sm:pt-6">
        <div className="container mx-auto">
          <button
            onClick={() => navigate("/#projects")}
            className="flex items-center gap-1.5 text-sm text-primary hover:text-accent transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="bg-card px-4 py-4 sm:px-6 sm:py-6">
        <div className="container mx-auto grid gap-3 lg:grid-cols-[minmax(0,1fr)_168px]">
          {/* Main image */}
          <div
            className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted shadow-md"
          >
            <img
              src={project.gallery[currentImageIndex]}
              alt={`${project.name} - Image ${currentImageIndex + 1}`}
              className="h-full w-full object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 hover:bg-black/70 transition-colors sm:left-4 sm:p-2"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 hover:bg-black/70 transition-colors sm:right-4 sm:p-2"
              aria-label="Next image"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
            <div className="absolute bottom-3 right-3 rounded-full bg-black/50 px-2.5 py-1 text-xs text-white">
              {currentImageIndex + 1} / {project.gallery.length}
            </div>
          </div>

          {/* Thumbnail rail on desktop, grid on smaller screens */}
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-1 lg:content-center">
            {project.gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                aria-label={`Show gallery image ${idx + 1}`}
                className={`group relative aspect-video w-full overflow-hidden rounded-lg border-2 bg-muted transition-all ${
                  idx === currentImageIndex ? "border-accent shadow-md" : "border-border hover:border-accent/60"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                />
                <span className="absolute bottom-1 right-1 rounded bg-black/65 px-1.5 py-0.5 text-[10px] font-medium text-white">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Project Header */}
      <div className="bg-foreground px-4 py-5 text-primary-foreground sm:px-6 sm:py-8">
        <div className="container mx-auto min-w-0">
          <h1 className="mb-1 break-words font-display text-xl font-bold leading-tight sm:text-2xl md:text-3xl lg:text-4xl">
            {project.name}
          </h1>
          {project.tagline && (
            <p className="mb-2 text-sm italic text-accent font-medium sm:text-base lg:text-lg">
              {project.tagline}
            </p>
          )}
          <div className="mb-4 flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground sm:px-4 sm:text-sm">
              {project.status}
            </span>
            <p className="flex min-w-0 items-start gap-1.5 text-sm">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              <span className="break-words">{project.location}</span>
            </p>
            <p className="flex min-w-0 items-start gap-1.5 text-sm">
              <Home size={14} className="mt-0.5 shrink-0" />
              <span className="break-words">{project.type}</span>
            </p>
            {project.brochure && (
              <a
                href={project.brochure}
                download
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-3 py-2 text-xs font-semibold text-accent-foreground transition-opacity hover:opacity-90 sm:px-5 sm:text-sm"
              >
                📄 Download Brochure
              </a>
            )}
          </div>
          <p className="mb-3 text-sm leading-relaxed text-primary-foreground/90 sm:text-base">
            {project.description}
          </p>
          <p className="text-lg font-bold text-accent sm:text-xl md:text-2xl">{project.price}</p>
          {project.priceNegotiable && (
            <p className="mt-1 text-xs text-primary-foreground/70 sm:text-sm">
              ✓ Price negotiable {project.priceNegotiableNote}
            </p>
          )}
        </div>
      </div>

      {/* Available Units Table */}
      <div className="px-4 py-5 sm:px-6 sm:py-8">
        <div className="container mx-auto">
          <h2 className="mb-4 flex items-center gap-2 font-display text-base font-bold text-foreground sm:text-lg md:text-xl lg:text-2xl">
            <Home size={18} className="shrink-0 text-accent sm:size-5 lg:size-6" />
            Available Units, Sizes &amp; Pricing
          </h2>
          <div className="overflow-x-auto rounded-lg border border-muted shadow-sm">
            <table className="w-full min-w-[18rem] border-collapse text-left text-xs sm:text-sm">
              <thead className="bg-accent/10">
                <tr>
                  <th className="border-b px-3 py-2.5 font-semibold text-foreground sm:px-5">Unit Type</th>
                  <th className="border-b px-3 py-2.5 font-semibold text-foreground sm:px-5">Size (sqft)</th>
                  {project.units?.some((u) => u.price) && (
                    <th className="border-b px-3 py-2.5 font-semibold text-foreground sm:px-5">Price</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {project.units?.map((unit, index) => (
                  <tr key={index} className="transition-colors hover:bg-muted/50">
                    <td className="border-b px-3 py-2 font-medium text-foreground sm:px-5">{unit.type}</td>
                    <td className="border-b px-3 py-2 text-muted-foreground sm:px-5">{unit.size}</td>
                    {project.units?.some((u) => u.price) && (
                      <td className="border-b px-3 py-2 font-semibold text-accent sm:px-5">{unit.price}</td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Amenities, Facilities, Map */}
      <div className="px-4 pb-6 sm:px-6 sm:pb-8">
        <div className="container mx-auto space-y-8 sm:space-y-10">

          {/* Amenities */}
          <section>
            <h2 className="mb-4 flex items-center gap-2 font-display text-base font-bold text-foreground sm:text-lg md:text-xl lg:text-2xl">
              <Zap size={18} className="shrink-0 text-accent sm:size-5 lg:size-6" />
              Amenities &amp; Features
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {(project.amenities || []).map((amenity, idx) => (
                <div key={idx} className="flex items-start gap-2.5 rounded-lg bg-card p-3 sm:gap-3 sm:p-4">
                  <div className="mt-0.5 shrink-0 rounded-full bg-accent/10 p-1.5">
                    <Zap size={13} className="text-accent" />
                  </div>
                  <p className="min-w-0 break-words text-xs text-foreground sm:text-sm">{amenity}</p>
                </div>
              ))}
              <div className="flex items-start gap-2.5 rounded-lg bg-card p-3 sm:gap-3 sm:p-4">
                <div className="mt-0.5 shrink-0 rounded-full bg-accent/10 p-1.5">
                  <SiHdfcbank size={13} className="text-accent" />
                </div>
                <p className="text-xs text-foreground sm:text-sm">Bank loans available</p>
              </div>
              <div className="flex items-start gap-2.5 rounded-lg bg-card p-3 sm:gap-3 sm:p-4">
                <div className="mt-0.5 shrink-0 rounded-full bg-accent/10 p-1.5">
                  <FaStamp size={13} className="text-accent" />
                </div>
                <p className="text-xs text-foreground sm:text-sm">Extra stamp duty &amp; GST applicable</p>
              </div>
            </div>
          </section>

          {/* Facilities */}
          <section>
            <h2 className="mb-4 flex items-center gap-2 font-display text-base font-bold text-foreground sm:text-lg md:text-xl lg:text-2xl">
              <Trees size={18} className="shrink-0 text-accent sm:size-5 lg:size-6" />
              Facilities
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {project.facilities.map((facility, idx) => (
                <div key={idx} className="flex items-start gap-2.5 rounded-lg bg-card p-3 sm:gap-3 sm:p-4">
                  <div className="mt-0.5 shrink-0 rounded-full bg-accent/10 p-1.5">
                    <Shield size={13} className="text-accent" />
                  </div>
                  <p className="min-w-0 break-words text-xs text-foreground sm:text-sm">{facility}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Map */}
          <section>
            <h2 className="mb-4 flex items-center gap-2 font-display text-base font-bold text-foreground sm:text-lg md:text-xl lg:text-2xl">
              <Navigation size={18} className="shrink-0 text-accent sm:size-5 lg:size-6" />
              Location Map
            </h2>
            <div
              className="overflow-hidden rounded-lg"
              style={{ height: "min(60vw, 22rem)" }}
            >
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                src={mapSrc}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
                title={`Map for ${project.name}`}
              />
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline"
              >
                View on Google Maps ↗
              </a>
              <p className="text-xs text-muted-foreground sm:text-sm">{project.mapLocation}</p>
            </div>
          </section>

          {/* Assetz Codename Palmscape highlights */}
          {project.id === 4 && (
            <section>
              <h2 className="mb-3 font-display text-base font-bold text-foreground sm:text-lg md:text-xl lg:text-2xl">
                Why Choose Assetz Codename Palmscape
              </h2>
              <p className="mb-4 max-w-3xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
                A gated plotted community off IVC Road, planned around native greenery, open spaces, and everyday connectivity.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    title: "🌴 A Canopy of Green",
                    items: [
                      "1,000+ trees across the community",
                      "Coconut groves and native greenery",
                      "Landscaped parks and children's play area",
                    ],
                  },
                  {
                    title: "🏡 A Planned Community",
                    items: [
                      "Gated, approximately 35-acre master-planned community",
                      "642 exclusive premium plots",
                      "Plot options: 1,199, 1,500 (approx.) and 1,798 sq. ft.",
                    ],
                  },
                  {
                    title: "📍 Everyday Connectivity",
                    items: [
                      "3 mins to STRR",
                      "3 mins to Harrow International School",
                      "12 mins to NH44",
                      "20 mins to Kempegowda International Airport",
                    ],
                  },
                  {
                    title: "🛡️ Infrastructure & Security",
                    items: [
                      "Premium internal roads",
                      "Underground utilities and drainage",
                      "24/7 security and surveillance",
                    ],
                  },
                ].map((card) => (
                  <div key={card.title} className="flex flex-col gap-2.5 rounded-lg border border-muted bg-card p-4 sm:p-5">
                    <h3 className="font-semibold text-sm sm:text-base">{card.title}</h3>
                    {card.items.map((item) => (
                      <div key={item} className="flex items-center gap-2.5 rounded-lg bg-foreground/5 p-2 sm:p-2.5">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                          <Zap size={12} />
                        </div>
                        <span className="text-xs sm:text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Prestige North Bangalore Phase 2 highlights */}
          {project.id === 5 && (
            <section>
              <h2 className="mb-3 font-display text-base font-bold text-foreground sm:text-lg md:text-xl lg:text-2xl">
                Why Choose Prestige Gardenia Estate
              </h2>
              <p className="mb-4 max-w-3xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
                A limited release of premium plots on the STRR–Devanahalli corridor, with space for a thoughtfully planned lifestyle.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    title: "📍 STRR–Devanahalli Location",
                    items: [
                      "Located directly on STRR in Devanahalli",
                      "Rapid access to Kempegowda International Airport",
                      "Close to upcoming IT parks, Aerospace SEZ and Foxconn",
                    ],
                  },
                  {
                    title: "🏡 Space to Plan Your Home",
                    items: [
                      "Spread across 20+ acres",
                      "Limited release of 200+ premium plots",
                      "Plot options from 2,000 to 6,000 sq. ft., plus custom sizes",
                    ],
                  },
                  {
                    title: "🌿 Lifestyle Amenities",
                    items: [
                      "Clubhouse with indoor games and a swimming pool with deck",
                      "Landscaped parks and open spaces",
                      "Jogging, walking and cycling tracks",
                      "Children's play area and senior citizen corner",
                    ],
                  },
                  {
                    title: "🛡️ Infrastructure & Security",
                    items: [
                      "Gated Prestige-grade community",
                      "24/7 manned security with CCTV",
                      "Underground utilities, power and drainage",
                      "Prestige quality infrastructure standards",
                    ],
                  },
                ].map((card) => (
                  <div key={card.title} className="flex flex-col gap-2.5 rounded-lg border border-muted bg-card p-4 sm:p-5">
                    <h3 className="font-semibold text-sm sm:text-base">{card.title}</h3>
                    {card.items.map((item) => (
                      <div key={item} className="flex items-center gap-2.5 rounded-lg bg-foreground/5 p-2 sm:p-2.5">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                          <Zap size={12} />
                        </div>
                        <span className="text-xs sm:text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Panorama Phase 2 extras */}
          {project.id === 3 && (
            <section>
              <h2 className="mb-4 font-display text-base font-bold text-foreground sm:text-lg md:text-xl lg:text-2xl">
                Why Choose Panorama Phase 2
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "🏛️ Distinct South India Theme",
                    intro: "A unique concept reflecting regional architecture.",
                    items: ["Phase 1 – Karnataka & Kerala", "Phase 2 – Tamil Nadu, Andhra Pradesh & Telangana"],
                  },
                  {
                    title: "📍 Prime Location & Investment",
                    items: [
                      "Located in North Bengaluru's high-growth corridor",
                      "Minutes from Kempegowda International Airport",
                      "Close to upcoming tech parks & infrastructure",
                      "Strong appreciation potential",
                    ],
                  },
                  {
                    title: "🏡 Lifestyle & Amenities",
                    items: [
                      "Club Sumadhura – Grand Clubhouse (45,000 Sq. Ft.)",
                      "Grand Swimming Pool, Kids Pool & Poolside Deck",
                      "Sports Courts: Tennis, Basketball, Pickleball & more",
                      "Heritage-inspired landscaping: Kulam, Pavilions & Courtyards",
                    ],
                  },
                ].map((card) => (
                  <div key={card.title} className="flex flex-col gap-2.5 rounded-lg border border-muted bg-card p-4 sm:p-5">
                    <h3 className="font-semibold text-sm sm:text-base">{card.title}</h3>
                    {card.intro && <p className="text-xs text-muted-foreground sm:text-sm">{card.intro}</p>}
                    {card.items.map((item) => (
                      <div key={item} className="flex items-center gap-2.5 rounded-lg bg-foreground/5 p-2 sm:p-2.5">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                          <Zap size={12} />
                        </div>
                        <span className="text-xs sm:text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                ))}

                <div className="flex flex-col gap-2.5 rounded-lg border border-muted bg-card p-4 sm:p-5">
                  <h3 className="font-semibold text-sm sm:text-base">🛠️ Core Infrastructure &amp; Facilities</h3>
                  <ul className="list-disc space-y-1.5 pl-4 text-xs sm:text-sm">
                    <li>18m, 12m &amp; 9m asphalted internal roads with paver sidewalks</li>
                    <li>Underground water supply network, sump &amp; WTP</li>
                    <li>Integrated underground drainage and on-site STP</li>
                    <li>Underground power/data cabling, 100% DG backup</li>
                    <li>Rainwater harvesting &amp; automated irrigation</li>
                    <li>24/7 manned security, grand entrance plaza &amp; CCTV</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-2.5 rounded-lg border border-muted bg-card p-4 sm:p-5">
                  <h3 className="font-semibold text-sm sm:text-base">📏 Plot Sizes &amp; Ideal Buyers</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Available plot sizes:</p>
                  <p className="text-xs font-medium sm:text-sm">1200 | 1500 | 1800 | 2400 | 3000+ sq.ft.</p>
                  <h4 className="font-semibold text-xs sm:text-sm">Perfect For</h4>
                  <ul className="list-disc space-y-1 pl-4 text-xs sm:text-sm">
                    <li>End Users – Build your dream villa</li>
                    <li>Investors – High appreciation potential</li>
                    <li>NRI Buyers – Excellent airport connectivity</li>
                  </ul>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Company Contact */}
      <div className="bg-card px-4 py-5 sm:px-6 sm:py-8">
        <div className="container mx-auto">
          <h2 className="mb-3 font-display text-base font-bold sm:text-lg md:text-xl lg:text-2xl">
            {companyInfo.name}
          </h2>
          <p className="mb-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            {companyInfo.address}
          </p>
          <p className="mb-2 flex items-center gap-2 text-xs sm:text-sm">
            <Phone size={13} className="shrink-0" />
            <span>{companyInfo.phone}</span>
          </p>
          <p className="mb-2 flex items-center gap-2 text-xs sm:text-sm">
            <Mail size={13} className="shrink-0" />
            <span className="break-all">{companyInfo.email}</span>
          </p>
          <p className="mb-4 text-xs sm:text-sm">
            <a href={`https://${companyInfo.website}`} className="text-accent hover:underline">
              {companyInfo.website}
            </a>
          </p>
          <h3 className="mb-2 font-display text-sm font-semibold sm:text-base lg:text-lg">
            Why Choose ARS INFRAS
          </h3>
          <ul className="list-disc space-y-1 pl-5 text-xs text-foreground sm:text-sm">
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
