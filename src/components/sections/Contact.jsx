import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export const Contact = () => {
  const SERVICE_ID = "service_xz542zl";
  const TEMPLATE_ID = "template_0lfsqjh";
  const PUBLIC_KEY = "ay-4RYsY4Q_JxOoZn";

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("Sending message...");

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, 
      import.meta.env.VITE_TEMPLATE_ID, e.target, 
      import.meta.env.VITE_PUBLIC_KEY)
      .then(() => {
        setStatusMessage("Message sent successfully! 🎉");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatusMessage(""), 5000);
      })
      .catch((error) => {
        console.error(error);
        setStatusMessage("Oops! Something went wrong. 😢");
        setTimeout(() => setStatusMessage(""), 5000);
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 bg-gray-950 overflow-hidden"
    >
      {/* Background Blurs */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-blue-500/10 blur-[150px] opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-400/10 blur-[180px] opacity-20 animate-pulse-slow delay-1000"></div>

      <RevealOnScroll>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          {/* Header */}
          <h2 className="text-5xl font-extrabold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-center text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Have a project in mind, a question, or just want to say hi? Reach
            out using the form or connect via my social channels.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="p-8 bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Me a Message
              </h3>
              <form className="space-y-5" onSubmit={handleSubmit}>
                {["name", "email", "message"].map((field) => (
                  <div key={field} className="relative">
                    {field !== "message" ? (
                      <input
                        type={field === "email" ? "email" : "text"}
                        id={field}
                        name={field}
                        required
                        value={formData[field]}
                        onChange={handleChange}
                        placeholder={
                          field.charAt(0).toUpperCase() + field.slice(1)
                        }
                        className="w-full px-5 py-3 rounded-lg text-white bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 peer transition"
                      />
                    ) : (
                      <textarea
                        id={field}
                        name={field}
                        required
                        rows={6}
                        value={formData[field]}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className="w-full px-5 py-3 rounded-lg text-white bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 peer transition"
                      />
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full py-3.5 font-bold text-lg text-white rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg transition-all duration-300 
                    ${
                      isSending
                        ? "opacity-70 cursor-not-allowed"
                        : "hover:scale-105 hover:from-blue-500 hover:to-cyan-400 hover:shadow-xl"
                    }`}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>

                {statusMessage && (
                  <p
                    className={`text-center mt-3 text-sm font-medium ${
                      statusMessage.includes("success")
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {statusMessage}
                  </p>
                )}
              </form>
            </div>

            {/* Contact Info & Socials */}
            <div className="p-8 bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Reach Me Directly
              </h3>

              {/* Email */}
              <div className="flex items-center space-x-4 mb-4">
                <Mail className="text-blue-400" size={24} />
                <a
                  href="mailto:appalanikitha783@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  dulamsindugoud211@gmail.com
                </a>
              </div>

              {/* Phone (optional, remove if not needed) */}
              {/* <div className="flex items-center space-x-4 mb-4">
    <Phone className="text-cyan-400" size={24} />
    <a href="tel:+1234567890" className="hover:text-white transition-colors">
      +1 (234) 567-890
    </a>
  </div> */}

              <hr className="border-white/10 my-6" />

              {/* Social Links */}
              <h4 className="text-xl font-semibold text-white mb-4">
                Find Me Online
              </h4>
              <div className="flex space-x-5">
                <a
                  href="https://github.com/Sindu-Goud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white hover:scale-110 transition-transform"
                >
                  <Github size={32} />
                </a>
                <a
                  href="https://www.linkedin.com/in/dulam-sindu-goud/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white hover:scale-110 transition-transform"
                >
                  <Linkedin size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
