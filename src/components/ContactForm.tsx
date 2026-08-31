"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    option: "Wealth Management",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        subject: "",
        email: "",
        option: "Wealth Management",
        message: "",
      });
    }, 4000);
  };

  return (
    <div className="p-8 md:p-12 rounded-3xl bg-white/[0.03] border border-white/10 shadow-2xl backdrop-blur-md relative overflow-hidden">
      {submitted ? (
        <div className="py-16 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center mx-auto border border-accent/40 animate-bounce">
            <CheckCircle2 size={32} />
          </div>
          <h4 className="text-2xl font-display font-medium text-white">Message Sent Successfully!</h4>
          <p className="text-foreground/70 text-sm max-w-md mx-auto font-light">
            Thank you for reaching out. A senior financial consultant from Kadlag Investments will contact you within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Name"
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-foreground/40 text-sm focus:outline-none focus:border-accent focus:bg-white/[0.07] transition-all"
              />
            </div>
            <div>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Subject"
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-foreground/40 text-sm focus:outline-none focus:border-accent focus:bg-white/[0.07] transition-all"
              />
            </div>
          </div>

          <div>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Email"
              className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-foreground/40 text-sm focus:outline-none focus:border-accent focus:bg-white/[0.07] transition-all"
            />
          </div>

          <div>
            <select
              value={formData.option}
              onChange={(e) => setFormData({ ...formData, option: e.target.value })}
              className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-accent transition-all cursor-pointer"
            >
              <option value="Wealth Management">Wealth Management</option>
              <option value="Mutual Funds & SIP">Mutual Funds & SIP</option>
              <option value="Insurance Solutions">Insurance Solutions</option>
              <option value="Stock Market Insights">Stock Market Insights</option>
              <option value="Portfolio Management">Portfolio Management</option>
              <option value="Capital Restructuring">Capital Restructuring</option>
              <option value="Free Demat Account">Free Demat Account</option>
            </select>
          </div>

          <div>
            <textarea
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Your Questions..."
              className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-foreground/40 text-sm focus:outline-none focus:border-accent focus:bg-white/[0.07] transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            className="px-8 py-4 rounded-xl bg-accent text-black font-semibold text-sm hover:bg-accent-light transition-all flex items-center justify-center gap-2 group shadow-lg shadow-accent/20 w-full sm:w-auto"
          >
            Send Message
            <Send size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      )}
    </div>
  );
}
