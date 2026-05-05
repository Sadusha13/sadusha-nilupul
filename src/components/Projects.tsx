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
    tags: ["Java", "MySQL"],
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
    title: "Master Cafe Website",
    description:
      "A stylish and responsive coffee website built to deliver a warm café experience online, featuring high-quality visuals, elegant design, and user-friendly navigation.",
    image: cafeImg,
    tags: ["TailwindCSS", "HTML", "React"],
    github: "https://github.com/Sadusha13/Coffe-Cup-web-site",
    demo: "https://mastercaf.netlify.app/",
  },
  

];

export function Projects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    
    <section id="projects" className="theme-section-alt py-24 px-20 bg-[#F8FAFC] transition-colors duration-300">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-[#111827] md:text-5xl font-['Poppins']">
               Projects
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl bg-white shadow-[0px_10px_30px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0px_15px_40px_rgba(0,0,0,0.12)]"
            >
              <div className="relative h-52 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="theme-title mb-2 text-xl font-semibold text-[#111827] font-['Poppins']">
                  {project.title}
                </h3>
                <p className="theme-copy mb-4 text-sm leading-relaxed text-[#64748B]">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-[#2563EB]/10 px-3 py-1 text-xs text-[#2563EB]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 w-full rounded-xl border-[#2563EB] px-5 text-sm text-[#2563EB] hover:bg-[#2563EB] hover:text-white"
                    >
                      <Github className="mr-1 h-8 w-8" />
                      View Code
                    </Button>
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button
                        size="sm"
                        className="h-8 w-full rounded-xl bg-[#2563EB] px-5 text-sm text-white hover:bg-[#1d4ed8]"
                      >
                        <ExternalLink className="mr-1 h-8 w-8" />
                        Demo
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </article>
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
