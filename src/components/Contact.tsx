import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { supabase } from "../lib/supabase";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!supabase) {
      setSubmitMessage({
        type: "error",
        text: "Contact form is temporarily unavailable. Please try again later.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    const { error } = await supabase.from("contacts").insert([
      {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      },
    ]);

    setIsSubmitting(false);

    if (error) {
      setSubmitMessage({
        type: "error",
        text: "Could not send your message. Please try again.",
      });
      return;
    }

    setSubmitMessage({
      type: "success",
      text: "Thanks for reaching out! I will get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-20 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#111827] font-['Poppins']">Get In Touch</h2>
        <p className="text-center text-[#64748B] mb-16 max-w-2xl mx-auto">
          Have a project in mind or just want to chat? I'd love to hear from you!
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-[#F8FAFC] rounded-2xl p-8 shadow-[0px_10px_30px_rgba(0,0,0,0.08)]">
              <h3 className="text-2xl font-semibold text-[#111827] mb-2 font-['Poppins']">Send a Message</h3>
              <p className="text-[#64748B] mb-6">Fill out the form below and I'll respond as soon as possible</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-[#020617] font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="h-12 rounded-[10px] border-[#E2E8F0] focus:border-[#2563EB]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-[#020617] font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="h-12 rounded-[10px] border-[#E2E8F0] focus:border-[#2563EB]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-[#020617] font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="rounded-[10px] border-[#E2E8F0] focus:border-[#2563EB]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-[10px] bg-[#2563EB] hover:bg-[#1d4ed8] text-white disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {submitMessage && (
                  <p
                    className={`text-sm ${
                      submitMessage.type === "success" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {submitMessage.text}
                  </p>
                )}
              </form>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-[#F8FAFC] rounded-2xl p-6 shadow-[0px_10px_30px_rgba(0,0,0,0.08)]">
              <div className="w-14 h-14 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-[#2563EB]" />
              </div>
              <h3 className="text-lg font-semibold text-[#111827] mb-2 font-['Poppins']">Email</h3>
              <a href="mailto:sadushanilupul13@gmail.com" className="text-[#2563EB] hover:underline break-all">
                sadushanilupul13@gmail.com
              </a>
            </div>
            
            <div className="bg-[#F8FAFC] rounded-2xl p-6 shadow-[0px_10px_30px_rgba(0,0,0,0.08)]">
              <div className="w-14 h-14 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-[#2563EB]" />
              </div>
              <h3 className="text-lg font-semibold text-[#111827] mb-2 font-['Poppins']">Phone</h3>
              <a href="tel:+94783839119" className="text-[#2563EB] hover:underline">
                +94 78 383 9119
              </a>
            </div>
            
            <div className="bg-[#F8FAFC] rounded-2xl p-6 shadow-[0px_10px_30px_rgba(0,0,0,0.08)]">
              <div className="w-14 h-14 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-[#2563EB]" />
              </div>
              <h3 className="text-lg font-semibold text-[#111827] mb-2 font-['Poppins']">Location</h3>
              <p className="text-[#64748B]">Sri Lanka</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
