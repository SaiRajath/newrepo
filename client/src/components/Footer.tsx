import { Link } from "wouter";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();

  const handleDownloadPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    
    toast({
      title: "Info",
      description: "Portfolio download functionality would be implemented in a production environment.",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-[hsl(var(--primary))] dark:bg-[hsl(var(--primary))] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/#hero" className="text-xl font-bold tracking-tight">
              <span className="text-[hsl(var(--secondary))]">&lt;</span>
              SR
              <span className="text-[hsl(var(--secondary))]">/&gt;</span>
            </Link>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/SaiRajath" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-[hsl(var(--secondary))] transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-lg" />
            </a>
            <a 
              href="https://www.linkedin.com/in/cbsairajath/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-[hsl(var(--secondary))] transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a 
              href="mailto:cbsairajath@gmail.com" 
              className="text-white hover:text-[hsl(var(--secondary))] transition-colors duration-200"
              aria-label="Email"
            >
              <FaEnvelope className="text-lg" />
            </a>
          </div>
          
          <div className="mt-4 md:mt-0 text-sm text-gray-400">
            © {currentYear} Sai Rajath CB. All rights reserved.
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <a 
            href="#" 
            className="text-gray-400 hover:text-[hsl(var(--secondary))] inline-flex items-center" 
            onClick={handleDownloadPortfolio}
          >
            <FaDownload className="mr-2" />
            Download Portfolio
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
