import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] text-slate-300 py-16 px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-white text-xl font-semibold mb-4 font-['Poppins']">Sadusha Nilupul</h3>
            <p className="text-slate-400 leading-relaxed">
              UI/UX Designer & Full-Stack Developer crafting beautiful digital experiences.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 font-['Poppins']">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-slate-400 hover:text-[#2563EB] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-[#2563EB] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-[#2563EB] transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-[#2563EB] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-[#2563EB] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 font-['Poppins']">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Sadusha13"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-[#2563EB] hover:text-white transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sadusha-nilupul13/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-[#2563EB] hover:text-white transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:sadushanilupul13@gmail.com"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-[#2563EB] hover:text-white transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; {currentYear} Sadusha Nilupul. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
