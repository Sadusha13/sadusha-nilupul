import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { projects } from "./Projects";

export function AllProjectsPage() {
  return (
    <section id="all-projects" className="min-h-screen bg-[#F8FAFC] px-6 py-16 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.24em] text-[#2563EB]">
              All Projects
            </p>
            <h1 className="text-3xl font-semibold text-[#111827] md:text-5xl font-['Poppins']">
              Project archive
            </h1>
          </div>

          <a href="#projects">
            <Button
              variant="outline"
              className="h-10 rounded-xl border-[#E2E8F0] bg-white px-4 text-sm text-[#111827] hover:bg-[#F8FAFC] hover:text-[#111827]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl bg-white shadow-[0px_10px_30px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0px_15px_40px_rgba(0,0,0,0.12)]"
            >
              <div className="relative h-52 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h2 className="mb-2 text-xl font-semibold text-[#111827] font-['Poppins']">
                  {project.title}
                </h2>
                <p className="mb-4 text-sm leading-relaxed text-[#64748B]">
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

                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full rounded-[10px] border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button
                        size="sm"
                        className="w-full rounded-[10px] bg-[#2563EB] hover:bg-[#1d4ed8] text-white"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}