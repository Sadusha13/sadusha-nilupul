import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import hotelImg from "../assets/images/Hotel.png";
import smsImg from "../assets/images/SMS.png";
import smartHomeImg from "../assets/images/smart_home.jpg";
import cityImg from "../assets/images/city.png";

const projects = [
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
    tags: ["Java", "MySQL", " mongoDB"],
    github: "https://github.com/Sadusha13/SCHOOL",
    demo: "#",
  },
  {
    title: "Smart Home System",
    description:
      "IoT-based smart home automation system with device control, energy monitoring, security features, and mobile app integration.",
    image: smartHomeImg,
    tags: ["IoT", "Arduino"],
    github: "https://github.com/Supun-0303/Smart-Home",
    demo: null,
  },
  {
    title: "Smart City Information Portal",
    description:
      "Digital platform providing citizens with real-time city information, services, emergency alerts, and civic engagement tools.",
    image: cityImg,
    tags: ["Web Development", "Database", "API"],
    github:
      "https://github.com/Sadusha13/SMART-CITY-INFORMATION-POTRAL",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-20 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#111827] font-['Poppins']">
          Featured Projects
        </h2>
        <p className="text-center text-[#64748B] mb-16 max-w-2xl mx-auto">
          A selection of completed projects showcasing my skills
          in full-stack development and system design
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.12)] transition-shadow"
            >
              <div className="relative h-52 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#111827] mb-2 font-['Poppins']">
                  {project.title}
                </h3>
                <p className="text-sm text-[#64748B] mb-4 leading-relaxed">
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
      </div>
    </section>
  );
}