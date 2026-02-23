import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import project11 from "@/assets/project-1-1.jpeg";
import project21 from "@/assets/project-2-1.jpeg";

const projects = [
  {
    id: 1,
    image: project11,
    name: "SPANDANA GARDENIA",
    location: "Near Kempegowda International Airport, Devanahalli,Bengalore",
    type: "Plots",
    status: "Ongoing",
  },
  {
    id: 2,
    image: project21,
    name: "VIBRANT SATHYAVAN",
    location: "Devanahalli, Bangalore",
    type: "Premium Villas",
    status: "Ongoing",
  },
];

const ProjectsSection = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };
  return (
    <section id="projects" className="section-padding section-alt">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-2 font-display text-3xl font-bold text-green-500 md:text-4xl">
            Our <span className="text-green-500">Projects</span>
          </h2>
          
          <p className="font-body text-muted-foreground">
            Explore our premium residential projects across South India
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <button
              key={project.name}
              onClick={() => handleProjectClick(project.id)}
              className="group overflow-hidden rounded-lg bg-card shadow-md transition-shadow hover:shadow-xl text-left"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  {project.status}
                </span>
              </div>
              <div className="p-5">
                <h3 className="mb-1 font-display text-xl font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="mb-2 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin size={14} />
                  {project.location}
                </p>
                <p className="text-sm font-medium text-primary">{project.type}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
