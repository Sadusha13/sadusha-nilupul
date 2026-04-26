import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { projects } from "./Projects";

export function AllProjectsPage() {
  return (
    <section id="all-projects" className="min-h-screen bg-[#050816] px-6 py-16 text-white md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.24em] text-[#8B5CF6]">
              All Projects
            </p>
            <h1 className="text-3xl font-semibold md:text-5xl font-['Poppins']">
              Project archive
            </h1>
          </div>

          <a href="#projects">
            <Button
              variant="outline"
              className="h-11 rounded-xl border-white/10 bg-white/5 px-5 text-white hover:bg-white/10 hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Button>
          </a>
        </div>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B1020] shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
            >
              <div className="relative h-52 overflow-hidden bg-[#111827]">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#050816] via-transparent to-transparent" />
              </div>

              <div className="p-5 md:p-6">
                <h2 className="mb-3 text-xl font-semibold text-white font-['Poppins']">
                  {project.title}
                </h2>
                <p className="text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-1 flex gap-5">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-11 w-full rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" className="h-11 w-full rounded-xl bg-[#2563EB] text-white hover:bg-[#1d4ed8]">
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