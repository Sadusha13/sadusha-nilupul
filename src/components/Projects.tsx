import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import hotelImg from "../assets/images/Hotel.png";
import smsImg from "../assets/images/SMS.png";
import smartHomeImg from "../assets/images/smart_home.jpg";
import cityImg from "../assets/images/city.png";
import cafeImg from "../assets/images/cafe.png";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Vista Veranda",
    description:
      "Comprehensive hotel management system with booking management, room allocation, staff management, and customer relationship features.",
    image: hotelImg,
    tags: ["Java", "MySQL", "Java"],
    github: "https://github.com/Sadusha13/vista_veranda",
    demo: "https://sadusha13.github.io/vista_veranda/",
  },
  {
    title: "Pre-School Management System",
    description:
      "Complete school management system for preschools with student enrollment, attendance tracking, parent communication, and educational progress monitoring.",
    image: smsImg,
    tags: ["Java", "MySQL", "MongoDB"],
    github: "https://github.com/Sadusha13/school-management-system",
  },
  {
    title: "Smart Home System",
    description:
      "IoT-based smart home automation system with device control, energy monitoring, security features, and mobile app integration.",
    image: smartHomeImg,
    tags: ["IoT", "Arduino"],
    github: "https://github.com/Supun-0303/Smart-Home",
  },
  {
    title: "Smart City Information Portal",
    description:
      "Digital platform providing citizens with real-time city information, services, emergency alerts, and civic engagement tools.",
    image: cityImg,
    tags: ["React", "SQL", "API"],
    github:
      "https://github.com/Sadusha13/SMART-CITY-INFORMATION-POTRAL",
    demo: "https://smart-city-information-potral.netlify.app/",
  },
   {
    title: "Coffee Cup Website",
    description:
      "A stylish and responsive coffee website built to deliver a warm café experience online, featuring high-quality visuals, elegant design, and user-friendly navigation.",
    image: cafeImg,
    tags: ["TailwindCSS", "HTML", "React"],
    github: "https://github.com/Sadusha13/Coffe-Cup-web-site",
  },
  

];

export function Projects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="theme-section-alt py-24 px-20 bg-[#F8FAFC] transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="theme-title text-4xl font-bold text-center mb-4 text-[#111827] font-['Poppins']">
          Featured Projects
        </h2>
        <p className="theme-copy text-center text-[#64748B] mb-16 max-w-2xl mx-auto">
          A selection of completed projects showcasing my skills
          in full-stack development and system design
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="theme-card bg-white rounded-2xl overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.12)] transition-shadow"
            >
              <div className="relative h-52 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="theme-title text-xl font-semibold text-[#111827] mb-2 font-['Poppins']">
                  {project.title}
                </h3>
                <p className="theme-copy text-sm text-[#64748B] mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full rounded-[10px] border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        className="w-full rounded-[10px] bg-[#2563EB] hover:bg-[#1d4ed8] text-white"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href="#all-projects">
            <Button
              size="lg"
              className="h-12 rounded-[10px] bg-[#2563EB] px-6 text-white hover:bg-[#1d4ed8]"
            >
              Show All Projects
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}