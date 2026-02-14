import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import profileImg from "../assets/images/profile.jpg";
import cvFile from "../assets/cv/sdushanilupul.pdf";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center justify-center bg-[#F8FAFC] px-20 pt-20"
    >
      <div className="max-w-[1280px] w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-[#111827] font-['Poppins']">
            Hi, I'm{" "}
            <span className="text-[#2563EB]">
              Sadusha Nilupul
            </span>
          </h1>
          <p className="text-2xl text-[#64748B] font-['Inter']">
           Full-Stack Developer | AI Enthusiast
          </p>
          <p className="text-lg text-[#64748B] leading-relaxed">
            Creating beautiful, functional digital experiences
            with modern technologies and design principles.
          </p>

          <div className="flex gap-4">
            <Button
              size="lg"
              className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white h-12 px-6 rounded-[10px]"
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-6 rounded-[10px] border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-6 rounded-[10px] border-[#2563EB] text-[#2563EB] hover:bg-[#111827] hover:text-white flex items-center gap-2"
              onClick={() => {
                const link = document.createElement('a');
                link.href = cvFile;
                link.download = 'Sadusha_Nilupul_CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download className="w-4 h-4" />
              Download CV
            </Button>
          </div>

          <div className="flex gap-6 pt-4">
            <a
              href="https://github.com/Sadusha13"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748B] hover:text-[#2563EB] transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sadusha-nilupul13/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748B] hover:text-[#2563EB] transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:sadushanilupul13@gmail.com"
              className="text-[#64748B] hover:text-[#2563EB] transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/94783839119"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748B] hover:text-[#25D366] transition-colors"
              title="Chat on WhatsApp"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="flex justify-center">
          <div className="w-[50px] h-[400px] rounded-2xl overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.08)]">
            <ImageWithFallback
              src={profileImg}
              alt="Sadusha Nilupul Profile"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
