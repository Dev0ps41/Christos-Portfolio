import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowLeft } from "lucide-react";

const ProjectDetails = ({ lang }) => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  const text = {
    en: {
      back: "Back",
      tech: "Tech Stack",
      features: "Features",
    },
    de: {
      back: "Zurück",
      tech: "Technologien",
      features: "Funktionen",
    },
  };

  const t = text?.[lang] ?? text["en"];
  const p = project?.translations?.[lang] ?? project?.translations?.["en"] ?? {
    title: "Untitled Project",
    desc: "No description available.",
  };

  if (!project) {
    return (
      <div className="p-10 text-center text-xl text-red-600">
        Project not found.
      </div>
    );
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-black text-white px-6 py-4 flex justify-between items-center shadow z-50">
        <Link to="/" className="flex items-center space-x-1 hover:text-gray-300">
          <ArrowLeft className="w-5 h-5" />
          <span>{t.back}</span>
        </Link>
        <h1 className="text-xl font-bold">Christos.dev</h1>
        <nav className="space-x-4 hidden md:flex items-center">
          <a href="/#about" className="text-white hover:text-gray-300">
            {lang === "de" ? "Über mich" : "About"}
          </a>
          <a href="/#projects" className="text-white hover:text-gray-300">
            {lang === "de" ? "Projekte" : "Projects"}
          </a>
          <a href="/#certifications" className="text-white hover:text-gray-300">
            {lang === "de" ? "Zertifikate" : "Certifications"}
          </a>
          <Link to="/contact" className="text-white hover:text-gray-300">
            {lang === "de" ? "Kontakt" : "Contact"}
          </Link>
        </nav>
      </header>

      <div className="min-h-screen bg-white text-black pt-24 pb-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{p.title}</h1>

        <img
          src={project.image || "/placeholder.jpg"}
          alt={p.title}
          className="w-full h-auto rounded-lg mb-6 shadow"
        />

        <p className="text-lg text-gray-700 mb-8">{p.desc}</p>

        {project.techStack && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t.tech}</h2>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              {project.techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        )}

        {project.features && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t.features}</h2>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={() => window.history.back()}
          className="text-blue-600 hover:underline"
        >
          ← {t.back}
        </button>
      </div>
    </>
  );
};

export default ProjectDetails;
