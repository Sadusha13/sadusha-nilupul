import { Code2, Palette, Database, Rocket } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const skills = [
  {
    icon: Code2,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces",
    level: 60
  },
  {
    icon: Database,
    title: "Web Development",
    description: "Full-stack web application development",
    level: 85
  },
  {
    icon: Palette,
    title: "Django",
    description: "Python web framework for robust backends",
    level: 40
  },
  {
    icon: Rocket,
    title: "Flutter",
    description: "Cross-platform mobile app development",
    level: 50
  },
  {
    icon: Code2,
    title: "Firebase",
    description: "Real-time database and authentication",
    level: 45
  },
  {
    icon: Database,
    title: "React & Next.js",
    description: "Modern frontend frameworks",
    level: 50
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-20 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#111827] font-['Poppins']">Skills & Expertise</h2>
        <p className="text-center text-[#64748B] mb-16 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern applications
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-[0px_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.12)] transition-shadow"
              >
                <div className="w-14 h-14 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-[#2563EB]" />
                </div>
                <h3 className="text-xl font-semibold text-[#111827] mb-2 font-['Poppins']">{skill.title}</h3>
                <p className="text-sm text-[#64748B] mb-4">{skill.description}</p>
                
                {/* Level Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#64748B]">Proficiency</span>
                    <span className="text-[#2563EB] font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#2563EB] rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}