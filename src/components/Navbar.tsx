import { Button } from "./ui/button";

export function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-20 h-20 flex items-center justify-between">
        <div className="text-xl font-semibold text-[#111827]"></div>

        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-[#64748B] hover:text-[#2563EB] transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-[#64748B] hover:text-[#2563EB] transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-[#64748B] hover:text-[#2563EB] transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-[#64748B] hover:text-[#2563EB] transition-colors"
          >
            Contact
          </button>

          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white h-12 px-6 rounded-[10px]"
          >
            Hire Me
          </Button>
        </div>
      </div>
    </nav>
  );
}