import { Link } from "wouter";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="md:hidden bg-white dark:bg-[hsl(var(--primary))] shadow-md">
      <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
        <Link 
          href="/#about" 
          onClick={handleLinkClick}
          className="py-2 px-4 text-[hsl(var(--text-light))] dark:text-[hsl(var(--text-dark))] hover:text-[hsl(var(--secondary))] dark:hover:text-[hsl(var(--secondary))]"
        >
          About
        </Link>
        <Link 
          href="/#skills" 
          onClick={handleLinkClick}
          className="py-2 px-4 text-[hsl(var(--text-light))] dark:text-[hsl(var(--text-dark))] hover:text-[hsl(var(--secondary))] dark:hover:text-[hsl(var(--secondary))]"
        >
          Skills
        </Link>
        <Link 
          href="/#projects" 
          onClick={handleLinkClick}
          className="py-2 px-4 text-[hsl(var(--text-light))] dark:text-[hsl(var(--text-dark))] hover:text-[hsl(var(--secondary))] dark:hover:text-[hsl(var(--secondary))]"
        >
          Projects
        </Link>
        <Link 
          href="/#contact" 
          onClick={handleLinkClick}
          className="py-2 px-4 text-[hsl(var(--text-light))] dark:text-[hsl(var(--text-dark))] hover:text-[hsl(var(--secondary))] dark:hover:text-[hsl(var(--secondary))]"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
