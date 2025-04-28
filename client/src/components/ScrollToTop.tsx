import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {isVisible && (
        <Button 
          onClick={scrollToTop} 
          className="fixed bottom-6 right-6 p-3 rounded-full bg-[hsl(var(--primary))] dark:bg-[hsl(var(--secondary))] hover:bg-[hsl(var(--primary-light))] dark:hover:bg-[hsl(var(--secondary-dark))] text-white dark:text-[hsl(var(--primary))] z-50 shadow-md transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;