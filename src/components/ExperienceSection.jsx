import React, { useState } from "react";

import { Briefcase, Building2, CalendarDays } from "lucide-react"; // Μπορείς να χρησιμοποιήσεις FontAwesome αν προτιμάς

const experiences = [
  {
    title: "LOGISTICS",
    company: "Buchzentrum AG",
    period: "06/2023 - 11/2024, Schweiz",
    tasks: [
      "Scannen von Boxen und weiter verarbeiten am PC",
      "Verpacken von Kundenaufträgen; Paket oder Grossbrief",
      "PC-Tätigkeiten",
      "Fehlehrhafte Boxen bearbeiten",
      "Kontrolle und Mithilfe in der Qualitätssicherung",
      "Sicherstellen, der täglichen Postverarbeitung",
      "Koordination Nachschub Verpackungsmaterial",
      "Bei Bedarf Einsatz in anderen Abteilungen (Kommissionieren)"
    ]
  },
  {
    title: "Fullstack Web Development & Software Engineering",
    company: "CODEX Design and Development House",
    period: "04/2020 - 05/2023, Griechenland",
    tasks: [
      "Entwickelte responsive Weboberflächen mit PHP, CSS und JavaScript, was die Benutzerinteraktion um 25 % steigerte.",
      "Nutze React.js, um dynamische Komponenten zu erstellen, wodurch die Seitenladezeit um 30 % reduziert wurde.",
      "Integrierte clientseitige Validierungen, die Benutzereingabefehler bei Formularübermittlungen um 15 % verringerten.",
      "Aufbau und Administration von Webservern (CentOS).",
      "Implementierte RESTful APIs in Node.js, um den Datentransfer zu erleichtern, was zu einer 20 % schnelleren Datenabrufgeschwindigkeit führte.",
      "Arbeitete mit MongoDB und MySQL, um Datenbankabfragen zu optimieren, wodurch die Anwendungsleistung um 40 % verbessert wurde.",
      "Reduzierte die Serverlast um 35 % durch optimierte Caching-Strategien und asynchrone Verarbeitung."
    ]
  },
  {
    title: "Fullstack Web Development & IT Support",
    company: "WATCHHOUSE",
    period: "10/2017 - 05/2020, Griechenland",
    tasks: [
      "Entwarf und entwickelte die Frontend-Architektur der Kernplattform (PHP, JavaScript, CSS).",
      "Entwickelte und designte eine Frontend-Webarchitektur mit hoher Anwendungsreaktionsfähigkeit.",
      "Arbeitete mit anderen Abteilungen zusammen, um Verbesserungen, interne Tools und skalierbaren Code zu implementieren.",
      "Aktualisierte und wartete sowohl die Backend- als auch die Frontend-Systeme.",
      "Wendete aktuelle Programmierstandards und -methoden auf alle relevanten Projekte und Aktivitäten an.",
      "Übernahm die fortlaufende Wartung für zugewiesene Anwendungen und Systeme.",
      "Führte Programmier-, Debugging- und Unit-Test-Aufgaben zur Unterstützung von Projekten durch."
    ]
  },
  {
    title: "IT Support",
    company: "TIME TO FIX IT",
    period: "03/2014 - 08/2017, Griechenland",
    tasks: [
      "Überarbeitete die gesamte IT-Infrastruktur, um die Verfügbarkeit kritischer Systeme um 30 % zu verbessern.",
      "Leitete ein Projekt, das die erfolgreiche Migration aller Systeme in die Cloud ermöglichte.",
      "Reduzierte durch die Implementierung von Strategien zur Geschäftskontinuität die durch technische Probleme verursachte Ausfallzeit."
    ]
  },
  {
    title: "IT Support",
    company: "UNIVERSITÄTSKRANKENHAUS",
    period: "01/2012 - 12/2013, Griechenland",
    tasks: [
      "Konfiguriert, bereitgestellt, fehlerbehebung und lösung von problemen bei software und systemen."
    ]
  }
];

export default function ExperienceSection({ lang = "de" }) {
  const [showAll, setShowAll] = useState(false);
  const visibleExperiences = showAll ? experiences : experiences.slice(0, 2);

  const safeLang = lang?.toLowerCase() || "en";
  const t = {
    de: {
      title: "Berufserfahrung",
      more: "Mehr anzeigen ▼",
      less: "Weniger anzeigen ▲",
    },
    en: {
      title: "Experience",
      more: "View More ▼",
      less: "Show Less ▲",
    },
  }[safeLang] || t["en"]; // Fallback just in case

  return (
    <section id="experience" className="py-16 px-6 bg-gray-100 text-black">
      <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
        {t.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {visibleExperiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow hover:shadow-lg transition"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Briefcase size={20} className="text-blue-500" />
                {exp.title}
              </h3>
              <p className="text-gray-700 flex items-center gap-2 mt-1">
                <Building2 size={18} className="text-gray-500" />
                {exp.company}
              </p>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <CalendarDays size={18} />
                {exp.period}
              </p>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
              {exp.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-600 hover:underline font-medium text-lg"
        >
          {showAll ? t.less : t.more}
        </button>
      </div>
    </section>
  );
}