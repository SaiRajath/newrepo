interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  scrollToSection: (id: string) => void;
}

const MobileMenu = ({ isOpen, onClose, scrollToSection }: MobileMenuProps) => {
  if (!isOpen) return null;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id);
    onClose();
  };

  return (
    <div className="md:hidden bg-white dark:bg-[hsl(var(--primary))] shadow-md">
      <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
        <a 
          href="#about" 
          onClick={(e) => handleNavClick(e, "about")}
          className="py-2 px-4 text-[hsl(var(--text-light))] dark:text-[hsl(var(--text-dark))] hover:text-[hsl(var(--secondary))] dark:hover:text-[hsl(var(--secondary))]"
        >
          About
        </a>
        <a 
          href="#skills" 
          onClick={(e) => handleNavClick(e, "skills")}
          className="py-2 px-4 text-[hsl(var(--text-light))] dark:text-[hsl(var(--text-dark))] hover:text-[hsl(var(--secondary))] dark:hover:text-[hsl(var(--secondary))]"
        >
          Skills
        </a>
        <a 
          href="#projects" 
          onClick={(e) => handleNavClick(e, "projects")}
          className="py-2 px-4 text-[hsl(var(--text-light))] dark:text-[hsl(var(--text-dark))] hover:text-[hsl(var(--secondary))] dark:hover:text-[hsl(var(--secondary))]"
        >
          Projects
        </a>
        <a 
          href="#contact" 
          onClick={(e) => handleNavClick(e, "contact")}
          className="py-2 px-4 text-[hsl(var(--text-light))] dark:text-[hsl(var(--text-dark))] hover:text-[hsl(var(--secondary))] dark:hover:text-[hsl(var(--secondary))]"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
