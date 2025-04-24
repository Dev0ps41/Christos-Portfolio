import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Contact = ({ lang }) => {
  const form = useRef();

  const text = {
    en: {
      contact: "Contact",
      contactText: "Want to work together or share an idea? Get in touch!",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      send: "Send Message",
      success: "Message sent successfully!",
      about: "About Me",
      projects: "Projects",
      certs: "Certifications",
      back: "Back",
    },
    de: {
      contact: "Kontakt",
      contactText: "Möchten Sie zusammenarbeiten oder eine Idee teilen?",
      name: "Ihr Name",
      email: "Ihre Email",
      message: "Ihre Nachricht",
      send: "Nachricht senden",
      success: "Nachricht erfolgreich gesendet!",
      about: "Über mich",
      projects: "Projekte",
      certs: "Zertifikate",
      back: "Zurück",
    },
  };

  const t = text?.[lang] ?? text["en"]; //  fallback σε "en"

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_XXXXXX", "template_", form.current, "xxxxxxx")
      .then(() => {
        alert(t.success);
        form.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Something went wrong. Try again later.");
      });
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-black text-white px-6 py-4 flex justify-between items-center shadow z-50">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-1 hover:text-gray-300">
            <ArrowLeft className="w-5 h-5" />
            <span>{t.back}</span>
          </Link>
        </div>
        <h1 className="text-xl font-bold">Christos.dev</h1>
        <nav className="space-x-4 hidden md:flex items-center">
          <a href="/#about" className="text-white hover:text-gray-300">{t.about}</a>
          <a href="/#projects" className="text-white hover:text-gray-300">{t.projects}</a>
          <a href="/#certifications" className="text-white hover:text-gray-300">{t.certs}</a>
          <Link to="/contact" className="text-white hover:text-gray-300">{t.contact}</Link>
        </nav>
      </header>

      <section className="pt-24 pb-16 px-6 bg-white text-black min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">
          {t.contact}
        </h2>

        <p className="text-center max-w-xl mx-auto text-gray-600 mb-10" data-aos="fade-up" data-aos-delay="100">
          {t.contactText}
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-2xl mx-auto grid grid-cols-1 gap-6"
        >
          <input
            type="text"
            name="from_name"
            placeholder={t.name}
            required
            className="border border-gray-300 px-4 py-2 rounded shadow-sm focus:outline-none focus:ring focus:border-black"
          />
          <input
            type="email"
            name="from_email"
            placeholder={t.email}
            required
            className="border border-gray-300 px-4 py-2 rounded shadow-sm focus:outline-none focus:ring focus:border-black"
          />
          <textarea
            name="message"
            rows="5"
            placeholder={t.message}
            required
            className="border border-gray-300 px-4 py-2 rounded shadow-sm focus:outline-none focus:ring focus:border-black"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition w-fit mx-auto"
          >
            {t.send}
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
