export const projects = [
  {
    slug: "SmartWorkSuite",
    image: "/images/projects/employer.jpg",
    github: "https://github.com/Dev0ps41/EmployerTimeManagement", //

    translations: {
      en: {
        title: "SmartWorkSuite — Intelligent Time & Staff Management System",
        desc: "The SmartWorkSuite — Intelligent Time & Staff Management System is a professional desktop application developed with WPF (.NET 8) for managing employee work schedules and submitting work declarations to the Greek ERGANI system. It is designed with a modern UI, offering real-time work log tracking, schedule management, and API integration.",
      },
      de: {
        title: "SmartWorkSuite — Intelligent Time & Staff Management System",
        desc: " Das SmartWorkSuite — Intelligent Time & Staff Management System ist eine professionelle Desktop-Anwendung, die mit WPF (.NET 8) entwickelt wurde. Sie dient zur Verwaltung von Arbeitszeiten und zur Übermittlung von Arbeitsmeldungen an das griechische ERGANI-System. Die Anwendung bietet eine moderne Benutzeroberfläche mit Funktionen zur Zeiterfassung und zur Automatisierung von Meldungen.",
      },
    },
    techStack: ["Csharp","Visual studio Enterprise 2022","WPF", ".NET 8", "SQLite + Entity Framework Core", "SignalR", "Syncfusion", "MaterialDesign", "ERGANI API","HttpClient for API communication","Custom JSON/XML generation for ERGANI"],
    features: [
      "Work shift recording (entry/exit)",
      "ERGANI form submissions (E1–E10, WTO, Overtime, Hiring, Resignation, etc.)",
      "SQLite integration for local data storage",
      "Automatic and manual API submissions to ERGANI",
      "Dashboard with submission status cards and auto-send options",
      "Weekly schedule generation",
      "Excel import and validation",
      "User management with authentication",
      "Automatic submission to ERGANI system",
      "Modern dark/light custom theming system",
      "Real-time scheduling and calendar with drag & drop",
      "Undo/Redo functionality",
      "Submission history with filtering",
    ],
  },
  {
    slug: "invoice-management-system",
    image: "/images/projects/invoice.jpg",
    github: "https://github.com/Dev0ps41/InvoiceManagementSystem", //

    translations: {
      en: {
        title: "Invoice Management System",
        desc: "The Invoice Management System is a modern desktop application developed in WPF (.NET 8) designed to help businesses efficiently manage their invoices and track monthly expenses.",
      },
      de: {
        title: "Invoice Management System",
        desc: "Das Invoice Management System ist eine moderne Desktop-Anwendung, die mit WPF (.NET 8) entwickelt wurde und Unternehmen bei der effizienten Verwaltung ihrer Rechnungen und monatlichen Ausgaben unterstützt.",
      },
    },
    techStack: [".NET 8", "WPF", "SQLite", "MaterialDesign", "WiX Toolset", "GitHub Releases","FontAwesome","GitHub API (for updates)","Inno Setup (for installer packaging)"],
    features: [
      "Invoice creation and editing",
      "Product and supplier management",
      "Calculation of total product values",
      "SQLite database integration",
      "Product stock tracking with decimals",
      "Undo/Redo actions for add, edit, delete",
      "Custom updater with version control from GitHub",
      "Installer built with Inno setup",
      "Modern UI with dark theme support",
    ],
  },
  {
    slug: "portfolio-website",
    image: "/images/projects/portfolio.jpg",
    github: "https://github.com/Dev0ps41/Christos-Portfolio", //

    translations: {
      en: {
        title: "Portfolio Website",
        desc: "A modern and responsive personal portfolio built with React.js, Tailwind CSS, and fully optimized for Hetzner deployment. The site includes sections for Projects, Skills, Certifications, and Contact, featuring smooth animations (AOS), interactive tech icon scrollers, and multilingual support (English/German). Custom icons are included for technologies not covered by Devicon. Organized, lightweight, and designed for performance and clarity.",
      },
      de: {
        title: "Portfolio-Webseite",
        desc: "Ein modernes und responsives persönliches Portfolio, entwickelt mit React.js und Tailwind CSS. Optimiert für Hetzner Hosting und mit Unterstützung für Englisch und Deutsch. Die Webseite enthält Sektionen für Projekte, Fähigkeiten, Zertifikate und Kontakt. Integriert sind flüssige Animationen (AOS), ein interaktiver Technologie-Scroller sowie individuell gestaltete Icons für nicht-standardisierte Technologien.",
      },
    },
    techStack: ["React", "Tailwind CSS", "Vite", "AOS", "Devicon", "React Router", "VS Code", "Ubuntu custom setup server", "Let's encrypt SSl", "Certbot Autorenewals" , "Autotype script"],
    features: [
      "Multilingual support (EN/DE)",
      "React + Tailwind architecture",
      "Certifications & specializations section with downloads",
      "Browser router support for static deployment and SEO",
      "Animated sections with AOS",
      "Responsive design with Tailwind",
      "Tech stack scroller & skill grid with progress bars",
    ],
  },
];
