import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectsSection = ({ lang }) => {
  const safeLang = (lang || "en").toLowerCase();

  return (
    <section id="projects" className="py-16 px-6 bg-white text-black">
      <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">
        {safeLang === "de" ? "Projekte" : "Projects"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => {
          const translation =
            project.translations?.[safeLang] || project.translations?.en || {
              title: "Untitled",
              desc: "No description available.",
            };

          return (
            <div
              key={i}
              className="border border-gray-300 p-4 rounded-lg shadow hover:shadow-lg transition bg-white flex flex-col justify-between"
            >
              <div>
                <img
                  src={project.image}
                  alt={translation.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{translation.title}</h3>
                <p className="text-gray-700">{translation.desc}</p>

                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-block mt-4 text-blue-600 hover:underline font-medium"
                >
                  {safeLang === "de" ? "Mehr erfahren →" : "View More →"}
                </Link>
              </div>

              {project.github && (
                <div className="mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-800 hover:text-black font-medium"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    <span>GitHub</span>
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
