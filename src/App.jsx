import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route, Link } from "react-router-dom";
import TerminalTyping from "./components/TerminalTyping";
import TechIconsScroller from "./components/TechIconsScroller";
import SkillsGrid from "./components/SkillsGrid";
import ProjectsSection from "./components/ProjectsSection";

import ProjectDetails from "./components/ProjectDetails";
import { projects } from "./data/projects";
import Contact from "./components/Contact";
import ExperienceSection from "./components/ExperienceSection";



function App() {
  const [showAll, setShowAll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "DE");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  //  Φτιάχνουμε πρώτα το text
  const text = {
    en: {
      heroTitle: "Hi, I’m Christos",
      heroDesc: "Turning logic into elegant applications. One line of code at a time.",
      downloadCV: "Download CV",
      viewProjects: "View Projects",
      projects: "Projects",
      certifications: "Certifications",
      contact: "Contact",
      contactText: "Want to work together or share an idea? Get in touch!",
      aboutTitle: "About Me",
      aboutText:
        "With 9 years of experience as a full-stack developer, I offer in-depth knowledge in developing, optimizing, and scaling modern web and software applications. I have successfully worked on projects ranging from small startups to large enterprises and am experienced in all phases of the development cycle — from planning and architecture to implementation and maintenance.",
      highlights: "Highlights",
      certsCount: "Certifications",
      specializations: "Specializations",
      projectsCount: "Projects",
      yearsCount: "Years Coding",
      showMore: "Show More ▼",
      showLess: "Show Less ▲",

    },
    de: {
      heroTitle: "Hallo, ich bin Christos",
      heroDesc: "Ich verwandle Logik in elegante Anwendungen...",
      downloadCV: "Lebenslauf herunterladen",
      viewProjects: "Projekte anzeigen",
      projects: "Projekte",
      certifications: "Zertifikate",
      contact: "Kontakt",
      contactText: "Möchten Sie zusammenarbeiten oder eine Idee teilen?",
      aboutTitle: "Über mich",
      aboutText:
        "Mit 9 Jahren Erfahrung als Full-Stack-Entwickler biete ich fundierte Kenntnisse in der Entwicklung, Optimierung und Skalierung moderner Web und Softwareanwendungen. Ich habe erfolgreich an Projekten gearbeitet, die von kleinen Start-ups bis hin zu großen Unternehmen reichen, und bin in allen Phasen des Entwicklungszyklus erfahren von der Planung und Architektur über die Implementierung bis hin zur Wartung.",
      highlights: "Highlights",
      certsCount: "Zertifikate",
      specializations: "Spezialisierungen",
      projectsCount: "Projekte",
      yearsCount: "Jahre Coding",
      showMore: "Mehr anzeigen ▼",
      showLess: "Weniger anzeigen ▲",

    },
  };

  //  Και μετά παίρνουμε το σωστό language object
  const t = text[lang] ?? text["en"];

  return (
    <Routes>
      <Route
      path="/"
      element={
      <div className="bg-white text-black min-h-screen">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-black text-white px-6 py-4 flex justify-between items-center shadow z-50">
        <h1 className="text-xl font-bold text-white">Christos Zioulos</h1>
        <nav className="space-x-4 hidden md:flex items-center">
            <a href="#about" className="text-white hover:text-gray-300">{t.aboutTitle}</a>
            <a href="#projects" className="text-white hover:text-gray-300">{t.projects}</a>
            <a href="#certifications" className="text-white hover:text-gray-300">{t.certifications}</a>
            <Link to="/contact" className="text-white hover:text-gray-300">{t.contact}</Link>

            <button
              onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
             className="text-sm bg-white text-black px-3 py-1 rounded hover:bg-gray-200 ml-4"
          >
            {lang === 'de' ? 'EN' : 'DE'}
            </button>

        </nav>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center py-4 space-y-2 md:hidden z-50">
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">{t.aboutTitle}</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">{t.projects}</a>
            <a href="#certifications" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">{t.certifications}</a>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">{t.contact}</Link>

            <button
              onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
              className="text-sm bg-white text-black px-3 py-1 rounded hover:bg-gray-200"
            >
              {lang === 'en' ? 'DE' : 'EN'}
            </button>
          </div>
        )}
        </header>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.heroTitle}</h1>
            <p className="text-lg mb-8">{t.heroDesc}</p>
            <div className="space-x-4">
              <a href="/cv.pdf" className="bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-800 transition">
                {t.downloadCV}
              </a>
              <a href="#projects" className="border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition">
                {t.viewProjects}
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end" data-aos="fade-left">
            <img src="/illustration.jpg" alt="Christos working on laptop" className="w-[320px] md:w-[400px] rounded-xl" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 px-6 bg-black text-green-400">
        <div className="max-w-4xl mx-auto bg-black border border-green-500 rounded-lg p-6 shadow-lg font-mono">
          <h2 className="text-3xl font-bold text-center text-green-300 mb-6" data-aos="fade-up">
            {t.aboutTitle}
          </h2>
          <div data-aos="fade-up" data-aos-delay="100">
            <TerminalTyping text={t.aboutText} speed={20} />
          </div>
        </div>
      </section>




          {/* PROJECTS */}
            <section id="projects" className="py-16 px-6 bg-white text-black">
              <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">
                {t.projects}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {projects.map((project, i) => (
                <div
                  key={i}
                  className="relative border border-gray-300 p-4 rounded-lg shadow hover:shadow-lg transition bg-white"
                >
                  <img
                    src={project.image}
                    alt={project.translations?.[lang]?.title || project.translations?.["en"]?.title || "Project"}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    {project.translations?.[lang]?.title || project.translations?.["en"]?.title || "Untitled"}
                  </h3>
                  <p className="text-gray-700">
                    {project.translations?.[lang]?.desc || project.translations?.["en"]?.desc || ""}
                  </p>

                  <div className="flex justify-between items-center mt-4">
                    <a
                      href={`/projects/${project.slug}`}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      {lang === "de" ? "Mehr erfahren →" : "View More →"}
                    </a>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-black text-sm font-medium flex items-center gap-1"
                      >
                        <i className="fab fa-github"></i> GitHub
                      </a>
                    )}
                    </div>
                  </div>
                ))}

              </div>
            </section>



      {/* CERTIFICATIONS */}
    <section id="certifications" className="py-16 px-6 bg-[#f9fafb] text-black">
        <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">
          {t.certifications}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { title: 'C# for .NET Developers', platform: 'Board Infinity' , file: 'Csharp_for_.NET_Developers.pdf' },
            { title: 'DevOps on AWS: Release and Deploy', platform: 'Amazon Web Services', file: 'DevOps_on_AWS_Release_and_Deploy.pdf' },
            { title: 'Fundamentals of Java Programming', platform: 'Board Infinity', file: 'Fundamentals_of_Java_Programming.pdf' },
            { title: 'DevOps on AWS: Operate and Monitor', platform: 'Amazon Web Services', file: 'DevOps_on_AWS_Operate_and_Monitor.pdf' },
            { title: 'Securing Systems and Networks', platform: 'Packt', file: 'Securing_Systems_and_Networks.pdf'  },
            { title: 'Advanced Security Strategies and Incident Response', platform: 'Packt', file: 'Advanced_Security_Strategies_and_Incident_Response.pdf'  },
            { title: 'Frontend for Java Full Stack Development', platform: 'Board Infinity', file: 'Frontend_for_Java_Full_Stack_Development.pdf'  },
            { title: 'Security Fundamentals and Identity Management', platform: 'Packt' , file: 'Security_Fundamentals_and_Identity_Management.pdf'  },
            { title: 'Data Structures & Backend with Java', platform: 'Board Infinity', file: 'Data_Structures_Backend_with_Java.pdf'  },
            { title: 'DevOps on AWS: Code, Build, and Test', platform: 'Amazon Web Services', file: 'DevOps_on_AWS_Code_Build_and_Test.pdf'  },
            { title: 'System and Network Security', platform: 'LearnKartS', file: 'System_and_Network_Security_CEH_V12.pdf'  },
            { title: 'Advanced Cybersecurity', platform: 'LearnKartS' , file: 'Advanced_Cybersecurity.pdf'  },
            { title: 'AWS Cloud Technical Essentials', platform: 'Amazon Web Services', file: 'AWS_Cloud_Technical Essentials.pdf'  },
            { title: 'CEH (v12) Practice Projects and Exam Simulators', platform: 'LearnKartS' , file: 'CEH_v12_Practice_Projects_and_Exam_Simulators.pdf'  },
            { title: 'Build ATM User Interface using Routing in Angular', platform: 'Coursera Project Network' , file: 'Build_ATM_User_Interface_using_Routing_in_Angular.pdf'  },
            { title: 'Ethical Hacking Fundamentals', platform: 'LearnKartS', file: 'Ethical_Hacking_Fundamentals_CEH_V12.pdf'  },
            { title: 'C for Beginners', platform: 'Great Learning' , file: 'C_for_beginners.pdf'  },
            { title: 'Javascript Projects', platform: 'Great Learning' , file: 'JavaScript_Projects.pdf'  },
            { title: 'Front End Development - CSS', platform: 'Great Learning' , file: 'Front_End_Development_CSS.pdf'  },
            { title: 'Introduction to Ethical Hacking', platform: 'Great Learning' , file: 'Introduction_to_Ethical_Hacking.pdf'  },
            { title: 'Google Analytics', platform: 'Great Learning', file: 'Google_Analytics.pdf'  },


          ]
            .slice(0, showAll ? 999 : 8)
            .map((cert, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
                className="bg-white border border-green-500 p-5 rounded-xl shadow-md hover:shadow-green-400 transition"
              >
                <h3 className="text-xl font-semibold mb-2 text-green-600">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{cert.platform}</p>
                <a
                  href={`/certifications/${cert.file || cert.title.replace(/\s+/g, "_") + ".pdf"}`}
                  download
                  className="inline-block bg-green-600 text-white px-4 py-1 rounded hover:bg-green-500 transition"
                >
                  Download PDF
                </a>
              </div>
            ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-green-600 hover:underline text-lg font-medium"
          >
            {showAll ? t.showLess : t.showMore}

          </button>
        </div>
            <div className="text-center mt-4">
            <a
              href="/certifications/alle_zertifikate.zip"
              download
              className="inline-block bg-green-700 text-white px-6 py-2 rounded shadow hover:bg-green-800 transition font-medium"
            >
              📥 Download All Certificates
            </a>
          </div>
    </section>








      {/* SPECIALIZATIONS */}
      <section className="pt-16 px-6 bg-gray-50 text-black">
      <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">
      {t.specializations}
       </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { title: 'Certified Ethical Hacking (v12)', platform: 'Packt', file: 'Certified_Ethical_Hacking_(v12)_Specialization.pdf' },
            { title: 'CompTIA Security+ (SY0-701): The Total Course', platform: 'LearnKartS', file: 'CompTIA_Security+_Specialization(SY0-701).pdf' },
            { title: 'DevOps on AWS', platform: 'Amazon Web Services', file: 'DevOps_on_AWS_Specialization.pdf' },
            { title: 'Java FullStack Developer', platform: 'Board Infinity', file: 'Java_FullStack_Developer_Specialization.pdf' },
          ].map((spec, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="border border-yellow-500 p-4 rounded-xl shadow-md hover:shadow-lg transition bg-white flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-yellow-800">{spec.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{spec.platform}</p>
              </div>
              <a
                href={`/certifications/specializations/${spec.file}`}
                download
                className="text-sm bg-yellow-500 text-white text-center py-2 px-4 rounded hover:bg-yellow-600 transition"
              >
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </section>
      
      
         <ExperienceSection lang={lang} />





        {/* Highlights */}
        <section className="py-16 px-6 bg-white text-black">
              <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">
                {t.highlights}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
                <div className="p-6 border border-black rounded-lg shadow hover:shadow-md transition" data-aos="zoom-in">
                  <h3 className="text-4xl font-bold">25+</h3>
                  <p className="mt-2 text-gray-700">{t.certsCount}</p>
                </div>
                <div className="p-6 border border-black rounded-lg shadow hover:shadow-md transition" data-aos="zoom-in" data-aos-delay="100">
                  <h3 className="text-4xl font-bold">20+</h3>
                  <p className="mt-2 text-gray-700">{t.projectsCount}</p>
                </div>
                <div className="p-6 border border-black rounded-lg shadow hover:shadow-md transition" data-aos="zoom-in" data-aos-delay="200">
                  <h3 className="text-4xl font-bold">9+</h3>
                  <p className="mt-2 text-gray-700">{t.yearsCount}</p>
                </div>
              </div>
            </section>

            {/* SKILLS */}
            <section className="py-6 px-6 bg-white text-black" id="skills">
              <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
              Fähigkeiten
              </h2>
              <SkillsGrid />
            </section>

            {/* TECH STACK */}
            <section className="mt-8">
              <h2 className="text-3xl font-bold text-center mb-8">Tech Stack</h2>
              <TechIconsScroller />
            </section>

            {/* FOOTER */}
            <footer className="bg-black text-white text-center py-6">
              <p>© 2025 Christos. All rights reserved.</p>
            </footer>
          </div>
        }
      />
      <Route path="/projects/:slug" element={<ProjectDetails lang={lang} />} />
      <Route path="/contact" element={<Contact lang={lang} />} />
    </Routes>
  );
}

export default App;