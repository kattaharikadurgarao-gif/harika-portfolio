import React, { useState } from "react";
import axios from "axios";
import { profile } from "../mock";
import { Mail, Phone, MapPin, Send, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill name, email and message.");
      return;
    }
    setSending(true);
    try {
      await axios.post(`${API}/contact`, {
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim() || null,
        message: form.message.trim(),
      });
      setForm({ name: "", email: "", subject: "", message: "" });
      toast.success("Message sent! Harika will get back to you within 24 hours.");
    } catch (err) {
      const detail = err?.response?.data?.detail;
      const msg =
        typeof detail === "string"
          ? detail
          : Array.isArray(detail) && detail[0]?.msg
          ? detail[0].msg
          : "Could not send message. Please try again or email directly.";
      toast.error(msg);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C8893B] mb-3">07 — Contact</div>
            <h2 className="font-display text-4xl lg:text-5xl text-[#0E1B2C] leading-tight mb-6">
              Let's build<br />something great.
            </h2>
            <p className="text-[#3A4A60] text-lg leading-relaxed mb-10">
              Have an opening for a Cloud / DevOps engineer or ServiceNow Administrator,
              an internship, or a freelance brief? Drop a message — I usually reply within a day.
            </p>

            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-[#F2E6D0] text-[#7A4F12] grid place-items-center shrink-0">
                  <Mail className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#5C6477]">Email</div>
                  <a href={`mailto:${profile.email}`} className="text-[#0E1B2C] hover:text-[#C8893B] btn-trans link-underline">
                    {profile.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-[#F2E6D0] text-[#7A4F12] grid place-items-center shrink-0">
                  <Phone className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#5C6477]">Phone</div>
                  <a href={`tel:${profile.phone}`} className="text-[#0E1B2C] hover:text-[#C8893B] btn-trans link-underline">{profile.phone}</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-[#F2E6D0] text-[#7A4F12] grid place-items-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#5C6477]">Based in</div>
                  <div className="text-[#0E1B2C]">{profile.location}</div>
                </div>
              </li>
            </ul>

            <div className="flex gap-3 mt-10">
              <a href={profile.github} target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full border border-[#E7DFD2] grid place-items-center text-[#0E1B2C] hover:bg-[#0E1B2C] hover:text-[#FAF7F2] btn-trans">
                <Github className="w-4 h-4" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full border border-[#E7DFD2] grid place-items-center text-[#0E1B2C] hover:bg-[#0E1B2C] hover:text-[#FAF7F2] btn-trans">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer" download="Harika_Katta_Resume.pdf" className="h-11 px-4 rounded-full border border-[#E7DFD2] flex items-center gap-2 text-[#0E1B2C] hover:bg-[#0E1B2C] hover:text-[#FAF7F2] btn-trans text-sm">
                Download CV <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="bg-white border border-[#E7DFD2] rounded-2xl p-7 lg:p-9 shadow-[0_30px_60px_-40px_rgba(14,27,44,0.25)]"
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <Label htmlFor="name" className="text-xs uppercase tracking-wider text-[#5C6477]">Your name</Label>
                  <Input
                    id="name" name="name" value={form.name} onChange={onChange}
                    placeholder="Jane Recruiter"
                    className="mt-2 h-11 border-[#E7DFD2] bg-[#FAF7F2] focus-visible:ring-[#C8893B]"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-xs uppercase tracking-wider text-[#5C6477]">Email</Label>
                  <Input
                    id="email" name="email" type="email" value={form.email} onChange={onChange}
                    placeholder="jane@company.com"
                    className="mt-2 h-11 border-[#E7DFD2] bg-[#FAF7F2] focus-visible:ring-[#C8893B]"
                  />
                </div>
              </div>

              <div className="mb-5">
                <Label htmlFor="subject" className="text-xs uppercase tracking-wider text-[#5C6477]">Subject</Label>
                <Input
                  id="subject" name="subject" value={form.subject} onChange={onChange}
                  placeholder="Data Scientist role at Acme"
                  className="mt-2 h-11 border-[#E7DFD2] bg-[#FAF7F2] focus-visible:ring-[#C8893B]"
                />
              </div>

              <div className="mb-6">
                <Label htmlFor="message" className="text-xs uppercase tracking-wider text-[#5C6477]">Message</Label>
                <Textarea
                  id="message" name="message" value={form.message} onChange={onChange}
                  rows={6} placeholder="Tell me about the role, team and what you're hoping to build..."
                  className="mt-2 border-[#E7DFD2] bg-[#FAF7F2] focus-visible:ring-[#C8893B] resize-none"
                />
              </div>

              <Button
                type="submit" disabled={sending}
                className="w-full h-12 bg-[#0E1B2C] hover:bg-[#C8893B] hover:text-[#0E1B2C] text-[#FAF7F2] btn-trans rounded-full text-sm font-medium"
              >
                {sending ? "Sending..." : (<><Send className="w-4 h-4 mr-2" /> Send message</>)}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
