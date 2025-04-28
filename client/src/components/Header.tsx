import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useTheme } from "@/hooks/useTheme";
import { ThemeToggle } from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "py-2 shadow-sm bg-white/90 dark:bg-[hsl(var(--bg-dark))]/90 backdrop-blur-sm" : "py-4 bg-transparent"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/#hero" className="text-2xl font-bold font-sans tracking-tight">
          <span className="text-[hsl(var(--secondary))] dark:text-white">&lt;</span>
          <span className="text-[hsl(var(--primary))] dark:text-[hsl(var(--secondary))]">SR</span>
          <span className="text-[hsl(var(--secondary))] dark:text-white">/&gt;</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/#about" className="text-[hsl(var(--text-light))] dark:text-[hsl(var(--text-dark))] hover:text-[hsl(var(--secondary))] dark:hover:text-[hsl(var(--secondary))] transition-colors duration-200">
            About
          </Link>
          <Link href="/#skills" className="text-[hsl(var(--text-light))] dark:text-[hsl(var(--text-dark))] hover:text-[hsl(var(--secondary))] dark:hover:text-[hsl(var(--secondary))] transition-colors duration-200">
            Skills
          </Link>
          <Link href="/#projects" className="text-[hsl(var(--text-light))] dark:text-[hsl(var(--text-dark))] hover:text-[hsl(var(--secondary))] dark:hover:text-[hsl(var(--secondary))] transition-colors duration-200">
            Projects
          </Link>
          <Link href="/#contact" className="text-[hsl(var(--text-light))] dark:text-[hsl(var(--text-dark))] hover:text-[hsl(var(--secondary))] dark:hover:text-[hsl(var(--secondary))] transition-colors duration-200">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
};

export default Header;
