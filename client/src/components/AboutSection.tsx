import { useRef, useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isIntersecting = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  useEffect(() => {
    if (isIntersecting && sectionRef.current) {
      const animateElements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      animateElements.forEach(el => {
        el.classList.add('visible');
      });
    }
  }, [isIntersecting]);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 md:py-28 bg-white dark:bg-[hsl(var(--primary))]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-2 font-sans relative inline-block">
              About Me
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[hsl(var(--secondary))]"></span>
            </h2>
            <p className="my-4 text-lg">
              Experienced Front-End Developer with nearly 3 years of experience in ReactJS, AngularJS, TypeScript, and
              modern web technologies. Skilled in designing responsive user interfaces, integrating APIs, and optimizing
              web applications for performance.
            </p>
            <p className="my-4 text-lg">
              Passionate about building high-quality, user-friendly applications with a focus on scalability and efficiency.
              I specialize in creating intuitive interfaces and implementing robust front-end architectures.
            </p>
            <p className="mt-4 mb-6 text-lg">
              I graduated from Ghousia College of Engineering with a Bachelor's degree in Information Science and Engineering.
              Currently working at Meru Info Solution, where I develop services for government projects.
            </p>
            
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://github.com/SaiRajath" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[hsl(var(--primary))] dark:text-white hover:text-[hsl(var(--secondary))] dark:hover:text-[hsl(var(--secondary))] transition-colors duration-200 text-2xl"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/cbsairajath/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[hsl(var(--primary))] dark:text-white hover:text-[hsl(var(--secondary))] dark:hover:text-[hsl(var(--secondary))] transition-colors duration-200 text-2xl"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:cbsairajath@gmail.com" 
                className="text-[hsl(var(--primary))] dark:text-white hover:text-[hsl(var(--secondary))] dark:hover:text-[hsl(var(--secondary))] transition-colors duration-200 text-2xl"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-on-scroll">
            <div className="relative">
              <div className="w-full h-80 md:h-96 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Professional development workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 h-full w-full border-2 border-[hsl(var(--secondary))] rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
