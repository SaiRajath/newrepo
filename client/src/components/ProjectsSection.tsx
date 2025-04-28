import { useRef, useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { projects } from "@/lib/projects";

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isIntersecting = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  useEffect(() => {
    if (isIntersecting && sectionRef.current) {
      const animateElements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      animateElements.forEach((el, i) => {
        setTimeout(() => {
          el.classList.add('visible');
        }, i * 100);
      });
    }
  }, [isIntersecting]);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 md:py-28 bg-white dark:bg-[hsl(var(--primary))]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 font-sans relative inline-block">
          Projects
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[hsl(var(--secondary))]"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="project-card bg-gray-50 dark:bg-[hsl(var(--primary-light))] rounded-lg overflow-hidden shadow-md animate-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Tech Stack:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={`${project.title}-${tech}`} 
                        className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
