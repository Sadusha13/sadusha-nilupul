import { Briefcase, Code2, Award } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-20 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#111827] font-['Poppins']">About Me</h2>
        <p className="text-center text-[#64748B] mb-16 max-w-2xl mx-auto">
          Passionate about creating impactful digital solutions
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg text-[#64748B] leading-relaxed">
              I'm a passionate full-stack developer currently pursuing my BT (Hons) in Information and Communication Technology at General Sir John Kotelawala Defence University. With expertise in creating modern, user-friendly applications, I bridge the gap between beautiful interfaces and robust functionality.
            </p>
            <p className="text-lg text-[#64748B] leading-relaxed">
              My approach combines technical excellence with creative problem-solving, from hotel management systems to smart home automation. I specialize in Java-based applications, web development, and IoT solutions, ensuring every project delivers both functionality and an exceptional user experience.
            </p>
            
            {/* Highlights */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Briefcase className="w-8 h-8 text-[#2563EB]" />
                </div>
                <h3 className="text-2xl font-bold text-[#111827] mb-1">3+</h3>
                <p className="text-sm text-[#64748B]">Years Experience</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#22C55E]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Code2 className="w-8 h-8 text-[#22C55E]" />
                </div>
                <h3 className="text-2xl font-bold text-[#111827] mb-1">5+</h3>
                <p className="text-sm text-[#64748B]">Projects</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-[#2563EB]" />
                </div>
                <h3 className="text-2xl font-bold text-[#111827] mb-1">12+</h3>
                <p className="text-sm text-[#64748B]">Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
