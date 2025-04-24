import { useRef, useState, useEffect } from "react";

const icons = [
  { name: "react", label: "React" },
  { name: "nextjs", label: "Next.js" },
  { name: "typescript", label: "TypeScript" },
  { name: "javascript", label: "JavaScript" },
  { name: "html5", label: "HTML" },
  { name: "css3", label: "CSS" },
  { name: "tailwindcss", label: "Tailwind" },
  { name: "bootstrap", label: "Bootstrap" },
  { name: "dotnet", label: ".NET", custom: "/tech/dotnet.svg" },
  { name: "express", label: "Express", custom: "/tech/express.svg" },
  { name: "syncfusion", label: "Syncfusion", custom: "/tech/syncfusion.svg" },
  { name: "nodejs", label: "Node.js" },
  { name: "spring", label: "Spring Boot" },
  { name: "django", label: "Django" },
  { name: "postgresql", label: "PostgreSQL" },
  { name: "mysql", label: "MySQL" },
  { name: "mongodb", label: "MongoDB" },
  { name: "microsoftsqlserver", label: "SQL Server" },
  { name: "redis", label: "Redis" },
  { name: "git", label: "Git" },
  { name: "github", label: "GitHub" },
  { name: "gitlab", label: "GitLab" },
  { name: "docker", label: "Docker" },
  { name: "kubernetes", label: "Kubernetes" },
  { name: "visualstudio", label: "Visual Studio" },
  { name: "vscode", label: "VS Code" },
];

const repeatedIcons = Array(10).fill(icons).flat();

const TechIconsScroller = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto scroll loop
  useEffect(() => {
    const container = containerRef.current;
    const speed = 0.5;
    let animationFrameId;

    const scroll = () => {
      if (!isHovered && !isDragging) {
        container.scrollLeft += speed;
        const maxScroll = container.scrollWidth - container.offsetWidth;
        if (container.scrollLeft >= maxScroll - 1) {
          container.scrollLeft = container.offsetWidth;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging]);

  useEffect(() => {
    const container = containerRef.current;
    const middle = container.scrollWidth / 2 - container.offsetWidth / 2;
    container.scrollLeft = middle;
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    containerRef.current.classList.add("select-none");
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = containerRef.current;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;

    const maxScroll = container.scrollWidth - container.offsetWidth;
    if (container.scrollLeft >= maxScroll - 50) {
      container.scrollLeft = container.offsetWidth;
      setScrollLeft(container.offsetWidth);
    }
    if (container.scrollLeft <= 50) {
      container.scrollLeft = maxScroll - container.offsetWidth;
      setScrollLeft(container.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    containerRef.current.classList.remove("select-none");
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    containerRef.current.classList.remove("select-none");
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="relative border-t border-black py-4 overflow-hidden">
      <div
        ref={containerRef}
        className={`flex gap-10 px-6 whitespace-nowrap overflow-x-auto scroll-hidden ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          handleMouseLeave();
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {repeatedIcons.map((icon, i) => (
          <div
            key={i}
            className="inline-flex flex-col items-center justify-center w-24 h-32 md:h-36 hover:scale-110 transition-transform duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              {icon.custom ? (
                <img
                  src={icon.custom}
                  alt={icon.label}
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <i className={`devicon-${icon.name}-plain colored text-4xl`} />
              )}
            </div>
            <span className="mt-2 text-xs text-center text-gray-600">
              {icon.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechIconsScroller;
