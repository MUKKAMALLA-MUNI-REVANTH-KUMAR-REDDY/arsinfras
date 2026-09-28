import { useState } from "react";
import { MapPin, ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import project11 from "@/assets/project-1-1.jpeg";
import project21 from "@/assets/project-2-1.jpeg";
import sumadhura1 from "@/assets/sumadhura 1.jpeg";
import palmscapeGate from "@/assets/palmscape-gate.jpeg";
import prestigePhase2P1 from "@/assets/prestige-phase2-p1.jpeg";
import { getProjectSlug } from "@/lib/projectSlugs";

export interface ProjectItem {
  id: number;
  slug?: string;
  image: string;
  name: string;
  location: string;
  type: string;
  category: "ongoing" | "upcoming";
  status: string;
}

const projects: ProjectItem[] = [
  {
    id: 1,
    slug: "spandana-gardenia",
    image: project11,
    name: "SPANDANA GARDENIA",
    location: "Near Kempegowda International Airport, Devanahalli, Bengaluru",
    type: "Plots",
    category: "ongoing",
    status: "Ongoing",
  },
  {
    id: 2,
    slug: "vibrant-sathyavan",
    image: project21,
    name: "VIBRANT SATHYAVAN",
    location: "Devanahalli, Bangalore",
    type: "Premium Villas",
    category: "upcoming",
    status: "Upcoming",
  },
  {
    id: 3,
    slug: "sumadhura-panorama-phase-2",
    image: sumadhura1,
    name: "SUMADHURA PANORAMA",
    location: "Devanahalli Main Road - Near Kempegowda International Airport",
    type: "Premium Plotted Development",
    category: "ongoing",
    status: "Ongoing",
  },
  {
    id: 4,
    image: palmscapeGate,
    name: "ASSETZ CODENAME PALMSCAPE",
    location: "Off IVC Road, North Bengaluru",
    type: "Luxury Plotted Development",
    category: "upcoming",
    status: "Upcoming",
  },
  {
    id: 5,
    image: prestigePhase2P1,
    name: "Prestige Gardenia Estate",
    location: "Prestige Gardenia Estate, 7MJC+HC Devanahally, Karnataka",
    type: "Premium Plotted Development",
    category: "upcoming",
    status: "Upcoming",
  },
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "ongoing" | "upcoming">("all");
  const navigate = useNavigate();

  const handleProjectClick = (project: ProjectItem) => {
    navigate(`/project/${project.slug || getProjectSlug(project.id)}`);
  };

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const ongoingCount = projects.filter((p) => p.category === "ongoing").length;
  const upcomingCount = projects.filter((p) => p.category === "upcoming").length;

  return (
    <section id="projects" className="section-padding section-alt">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="mb-2 font-display text-2xl font-bold text-green-500 sm:text-3xl md:text-4xl">
            Our <span className="text-green-500">Projects</span>
          </h2>
          <p className="font-body text-sm text-muted-foreground sm:text-base">
            Explore our premium residential projects across South India
          </p>
        </div>

        {/* Filter Tabs — scrollable on mobile */}
        <div className="mb-8 flex items-center justify-start gap-2 overflow-x-auto pb-2 sm:mb-10 sm:justify-center sm:pb-0">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 sm:px-5 sm:text-sm ${
              activeFilter === "all"
                ? "bg-green-600 text-white shadow-md shadow-green-600/30"
                : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            All ({projects.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("ongoing")}
            className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 sm:px-5 sm:text-sm ${
              activeFilter === "ongoing"
                ? "bg-green-600 text-white shadow-md shadow-green-600/30"
                : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            Ongoing ({ongoingCount})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("upcoming")}
            className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 sm:px-5 sm:text-sm ${
              activeFilter === "upcoming"
                ? "bg-green-600 text-white shadow-md shadow-green-600/30"
                : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            <Sparkles size={12} />
            Upcoming ({upcomingCount})
          </button>
        </div>

        {/* Project Cards Grid — 1 col on mobile, 2 on sm, 3 on lg */}
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {filteredProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => handleProjectClick(project)}
              className="group overflow-hidden rounded-lg bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-left w-full"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-52 lg:h-56"
                  loading="lazy"
                />
                <div className="absolute left-3 top-3 flex items-center">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm ${
                      project.category === "upcoming"
                        ? "bg-emerald-600 text-white"
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="mb-1 font-display text-base font-semibold text-foreground transition-colors group-hover:text-primary sm:text-xl">
                  {project.name}
                </h3>
                <p className="mb-2 flex items-start gap-1 text-xs text-muted-foreground sm:text-sm">
                  <MapPin size={13} className="mt-0.5 shrink-0" />
                  <span>{project.location}</span>
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-primary sm:text-sm">{project.type}</p>
                  <ArrowRight
                    size={14}
                    className="text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary"
                  />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
