import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

type ThemeMode = "light" | "dark";

export function Navbar() {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", themeMode === "dark");
    window.localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    setThemeMode((currentMode) => (currentMode === "light" ? "dark" : "light"));
  };

  return (
    <nav className="theme-nav fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-20 h-20 flex items-center justify-between">
        <div className="text-xl font-semibold text-[#111827] theme-title"></div>

        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-[#64748B] theme-copy hover:text-[#2563EB] transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-[#64748B] theme-copy hover:text-[#2563EB] transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-[#64748B] theme-copy hover:text-[#2563EB] transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-[#64748B] theme-copy hover:text-[#2563EB] transition-colors"
          >
            Contact
          </button>

          <Button
            onClick={toggleTheme}
            variant="outline"
            size="icon"
            className="theme-toggle rounded-[10px]"
            aria-label={themeMode === "light" ? "Enable dark mode" : "Enable light mode"}
            title={themeMode === "light" ? "Dark mode" : "Light mode"}
          >
            {themeMode === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </Button>

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