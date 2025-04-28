import { useRef, useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { skills } from "@/lib/skills";
import { Code, PaintbrushVertical, Database, Bolt, GitBranch } from "lucide-react";

const SkillsSection = () => {
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

  const getIcon = (category: string) => {
    switch (category) {
      case "Frontend Technologies":
        return <Code className="text-[hsl(var(--secondary))] mr-3" />;
      case "CSS Frameworks":
        return <PaintbrushVertical className="text-[hsl(var(--secondary))] mr-3" />;
      case "Backend & Database":
        return <Database className="text-[hsl(var(--secondary))] mr-3" />;
      case "Development Bolt":
        return <Bolt className="text-[hsl(var(--secondary))] mr-3" />;
      case "Methodologies":
        return <GitBranch className="text-[hsl(var(--secondary))] mr-3" />;
      default:
        return <Code className="text-[hsl(var(--secondary))] mr-3" />;
    }
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 md:py-28 bg-[hsl(var(--bg-light))] dark:bg-[hsl(var(--bg-dark))]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 font-sans text-center mx-auto relative inline-block">
          Technical Skills
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[hsl(var(--secondary))]"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.category} 
              className="bg-white dark:bg-[hsl(var(--primary-light))] p-6 rounded-lg shadow-md animate-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {getIcon(skill.category)}
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span 
                    key={item} 
                    className="skill-pill bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
