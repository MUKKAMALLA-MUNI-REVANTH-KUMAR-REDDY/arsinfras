import { useState } from "react";
import { useNavigate } from "react-router-dom";

const projectsList = [
  { id: 1, name: "SPANDANA GARDENIA" },
  { id: 2, name: "VIBRANT SATHYAVAN" },
];

type NavbarProps = {
  onSectionChange?: (section: string) => void;
};

const Navbar = ({ onSectionChange }: NavbarProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleProjectClick = (id: number) => {
    setShowDropdown(false);
    navigate(`/project/${id}`);
  };

  return (
    <nav className="relative bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center p-2 g-2">

        {/* Logo */}
        <img src="https://res.cloudinary.com/do1foipd5/image/upload/v1770527158/LOGO_new_m_1__page-0001_snt6hb.jpg" className="h-10" />
        <h1 className="font-bold text-xl cursor-pointer" onClick={() => navigate("/")}>
          ARS INFRAS
        </h1>
        </div>

        {/* Menu */}
        <ul className="flex items-center gap-8">

          <li
            className="cursor-pointer hover:text-accent"
            onClick={() => {
              if (onSectionChange) {
                navigate("/");
                onSectionChange("home");
              } else {
                navigate("/#home");
              }
            }}
          >
            Home
          </li>

          <li
            className="cursor-pointer hover:text-accent"
            onClick={() => {
              if (onSectionChange) {
                navigate("/");
                onSectionChange("about");
              } else {
                navigate("/#about");
              }
            }}
          >
            About
          </li>

          {/* Projects Dropdown */}
          <li
            className="relative cursor-pointer hover:text-accent"
                onClick={() => setShowDropdown(!showDropdown)}
          >
            Projects

            {showDropdown && (
              <div className="absolute left-0 top-8 w-60 bg-white shadow-lg rounded-md border z-50">
                {projectsList.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => handleProjectClick(project.id)}
                    className="px-4 py-3 hover:bg-accent hover:text-white transition-colors cursor-pointer"
                  >
                    {project.name}
                  </div>
                ))}
              </div>
            )}
          </li>

          <li
            className="cursor-pointer hover:text-accent"
            onClick={() => {
              if (onSectionChange) {
                navigate("/");
                onSectionChange("contact");
              } else {
                navigate("/#contact");
              }
            }}
          >
            Contact
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;