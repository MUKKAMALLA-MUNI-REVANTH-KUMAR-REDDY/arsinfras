import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { getProjectSlug } from "@/lib/projectSlugs";

const projectsList = [
  { id: 1, slug: "spandana-gardenia", name: "SPANDANA GARDENIA", badge: "Ongoing" },
  { id: 2, slug: "vibrant-sathyavan", name: "VIBRANT SATHYAVAN", badge: "Upcoming" },
  { id: 3, slug: "sumadhura-panorama-phase-2", name: "SUMADHURA PANORAMA", badge: "Ongoing" },
  { id: 4, slug: "assetz-codename-palmscape", name: "ASSETZ CODENAME PALMSCAPE", badge: "Upcoming" },
  { id: 5, slug: "prestige-gardenia-estate", name: "Prestige Gardenia Estate", badge: "Upcoming" },
];

type NavbarProps = {
  onSectionChange?: (section: string) => void;
};

const Navbar = ({ onSectionChange }: NavbarProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleProjectClick = (slug: string) => {
    setShowDropdown(false);
    setMobileMenuOpen(false);
    setMobileProjectsOpen(false);
    navigate(`/project/${slug}`);
  };

  const handleSectionClick = (section: string) => {
    setMobileMenuOpen(false);
    setShowDropdown(false);

    const isOnHome = location.pathname === "/";

    if (isOnHome) {
      // Already on the home page — update hash + notify Index
      window.history.replaceState(null, "", `/#${section}`);
      if (onSectionChange) onSectionChange(section);
      // Also scroll to section anchor if it exists on the page
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // On a different page (e.g. project detail) — navigate home with hash
      navigate(`/#${section}`);
      if (onSectionChange) onSectionChange(section);
    }
  };

  return (
    <nav className="relative z-40 bg-white shadow-md overflow-visible">
      <div className="flex w-full items-center px-3 py-2 sm:px-6 sm:py-3">
        {/* Logo + Brand */}
        <button
          type="button"
          className="flex shrink-0 items-center gap-2 text-left"
          onClick={() => handleSectionClick("home")}
          aria-label="ARS INFRAS home"
        >
          <img
            src="https://res.cloudinary.com/do1foipd5/image/upload/v1770527158/LOGO_new_m_1__page-0001_snt6hb.jpg"
            alt="ARS INFRAS logo"
            className="h-9 w-9 shrink-0 object-contain sm:h-11 sm:w-11"
          />
          <span className="text-base font-bold leading-tight sm:text-xl">
            ARS INFRAS
          </span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden flex-1 items-center justify-center gap-16 text-sm font-medium lg:flex">
          <li>
            <button
              type="button"
              className="py-2 hover:text-accent transition-colors"
              onClick={() => handleSectionClick("home")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              type="button"
              className="py-2 hover:text-accent transition-colors"
              onClick={() => handleSectionClick("about")}
            >
              About
            </button>
          </li>

          {/* Projects Dropdown */}
          <li className="relative">
            <button
              type="button"
              className="flex items-center gap-1 py-2 hover:text-accent transition-colors"
              onClick={() => setShowDropdown(!showDropdown)}
              aria-expanded={showDropdown}
            >
              Projects{" "}
              <ChevronDown
                size={15}
                className={showDropdown ? "rotate-180 transition-transform" : "transition-transform"}
              />
            </button>

            {showDropdown && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowDropdown(false)} />
                <div className="absolute left-1/2 top-full z-50 mt-1 w-72 -translate-x-1/2 overflow-hidden rounded-md border bg-white shadow-xl">
                  {projectsList.map((project) => (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => handleProjectClick(project.slug || getProjectSlug(project.id))}
                      className="group flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-accent hover:text-white"
                    >
                      <span className="text-sm font-medium">{project.name}</span>
                      {project.badge && (
                        <span className={`ml-2 shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold transition-colors ${
                          project.badge === "Ongoing"
                            ? "border border-amber-300/80 bg-amber-100 text-amber-900 group-hover:border-transparent group-hover:bg-white group-hover:text-amber-900"
                            : "border border-emerald-300/80 bg-emerald-100 text-emerald-900 group-hover:border-transparent group-hover:bg-white group-hover:text-emerald-900"
                        }`}>
                          {project.badge}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </li>

          <li>
            <button
              type="button"
              className="py-2 hover:text-accent transition-colors"
              onClick={() => handleSectionClick("contact")}
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-full z-50 border-t bg-white shadow-xl lg:hidden">
          <ul className="flex flex-col divide-y divide-border px-4 pb-4 text-sm font-medium">
            <li>
              <button type="button" className="w-full py-3 text-left hover:text-accent transition-colors" onClick={() => handleSectionClick("home")}>
                Home
              </button>
            </li>
            <li>
              <button type="button" className="w-full py-3 text-left hover:text-accent transition-colors" onClick={() => handleSectionClick("about")}>
                About
              </button>
            </li>
            <li>
              <button
                type="button"
                className="flex w-full items-center justify-between py-3 text-left hover:text-accent transition-colors"
                onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                aria-expanded={mobileProjectsOpen}
              >
                Projects
                <ChevronDown size={16} className={mobileProjectsOpen ? "rotate-180 transition-transform" : "transition-transform"} />
              </button>
              {mobileProjectsOpen && (
                <ul className="mb-2 ml-3 border-l border-border pl-3">
                  {projectsList.map((project) => (
                    <li key={project.id}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between py-2.5 text-left text-muted-foreground hover:text-accent transition-colors"
                        onClick={() => handleProjectClick(project.slug || getProjectSlug(project.id))}
                      >
                        <span className="min-w-0 pr-2 text-xs leading-snug sm:text-sm">{project.name}</span>
                        {project.badge && (
                          <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                            project.badge === "Ongoing"
                              ? "border border-amber-300/80 bg-amber-100 text-amber-900"
                              : "border border-emerald-300/80 bg-emerald-100 text-emerald-900"
                          }`}>
                            {project.badge}
                          </span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <button type="button" className="w-full py-3 text-left hover:text-accent transition-colors" onClick={() => handleSectionClick("contact")}>
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
