import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import resumeUrl from "@assets/SaiRajath_CV_ForntEndDeveloper.pdf";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      const animateElements = section.querySelectorAll('.animate-on-scroll');
      animateElements.forEach(el => {
        el.classList.add('visible');
      });
    }
  }, []);

  const handleDownloadResume = () => {
    window.open(resumeUrl, '_blank');
  };

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="min-h-screen flex items-center pt-16 bg-[hsl(var(--bg-light))] dark:bg-[hsl(var(--bg-dark))] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 -z-10 opacity-10 dark:opacity-5">
        <svg width="700" height="700" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="hsl(var(--secondary))" strokeWidth="0.5" fill="none" />
          <circle cx="50" cy="50" r="30" stroke="hsl(var(--secondary))" strokeWidth="0.5" fill="none" />
          <circle cx="50" cy="50" r="20" stroke="hsl(var(--secondary))" strokeWidth="0.5" fill="none" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-12 lg:px-24 z-10">
        <div className="animate-on-scroll">
          <p className="text-sm md:text-base font-mono text-[hsl(var(--secondary))] mb-4">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[hsl(var(--primary))] dark:text-white mb-4 font-sans tracking-tight">Sai Rajath CB</h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-500 dark:text-gray-400 mb-6 font-sans tracking-tight">Front-End Developer</h2>
          <p className="text-lg md:text-xl max-w-2xl mb-8 text-[hsl(var(--text-light))] dark:text-[hsl(var(--text-dark))]">
            Building high-quality, user-friendly applications with a focus on scalability and efficiency. Experienced in ReactJS, AngularJS, and modern web technologies.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={handleDownloadResume}
              variant="outline"
              className="bg-transparent hover:bg-[hsl(var(--secondary))] text-[hsl(var(--secondary))] hover:text-[hsl(var(--primary))] border border-[hsl(var(--secondary))] px-6 py-6 rounded font-medium transition-colors duration-300 flex items-center"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button
              className="bg-[hsl(var(--primary))] dark:bg-[hsl(var(--secondary))] dark:hover:bg-[hsl(var(--secondary-dark))] text-white dark:text-[hsl(var(--primary))] px-6 py-6 rounded font-medium transition-colors duration-300 hover:bg-[hsl(var(--primary-light))]"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
